import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createClient } from "@supabase/supabase-js";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // 1. Generate an embedding for the user's query
    const queryEmbeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-embedding-3-small",
          input: lastMessage.content,
        }),
      },
    );

    const embeddingData = await queryEmbeddingResponse.json();

    if (!embeddingData.data || !embeddingData.data[0]) {
      throw new Error("Failed to generate embedding");
    }

    const embedding = embeddingData.data[0].embedding;

    // 2. Perform similarity search in Supabase
    const { data: documents, error } = await supabase.rpc("match_documents", {
      query_embedding: embedding,
      match_threshold: 0.5, // How similar the text needs to be (0.0 to 1.0)
      match_count: 3, // Retrieve the top 3 most relevant chunks
    });

    if (error) {
      console.error("Supabase RPC Error:", error);
      throw error;
    }

    // 3. Construct the RAG Context
    let contextText = "";
    let citations = [];

    if (documents && documents.length > 0) {
      contextText = documents
        .map((doc: any, index: number) => {
          citations.push({
            id: index + 1,
            source: doc.metadata?.source || doc.title,
          });
          return `[Document ${index + 1} - ${doc.title}]:\n${doc.content}`;
        })
        .join("\n\n");
    } else {
      contextText = "No relevant campus documents found for this query.";
    }

    const systemPrompt = `You are a helpful, professional, and friendly virtual assistant for HEC Paris campus students. 
Your goal is to answer student questions accurately based ONLY on the provided Context Documents. 
If the answer is not in the documents, politely say you don't have that information right now and suggest they contact the administration directly. 

When you use information from a document, YOU MUST insert a citation at the end of the sentence or paragraph in the format [1], [2], etc., corresponding to the Document number provided.

CONTEXT DOCUMENTS:
${contextText}
`;

    // 4. Call OpenAI gpt-4o-mini and stream the result
    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (e: any) {
    console.error("Chat API Error:", e);
    return new Response(
      JSON.stringify({ error: e.message || "Failed to process chat" }),
      { status: 500 },
    );
  }
}
