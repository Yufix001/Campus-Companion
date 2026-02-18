

export const runtime = 'edge';

export async function POST(req: Request) {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Mock RAG Logic:
    // In a real app, we would:
    // 1. Embed `lastMessage.content`
    // 2. Query Supabase `documents` table
    // 3. Construct prompt with context
    // 4. Call OpenAI

    // For now, we simulate a response with a "citation".
    // We use a simple mock response that pretends to be the AI.

    const mockResponse = `I found some information regarding your query. 
  
  Based on the HEC campus guidelines, access to the registrar portal is available 24/7, but maintenance is scheduled every Sunday from 2 AM to 4 AM.
  
  Please ensure you are using your student credentials to log in. If issues persist, contact IT support directly. [1]`

    // We can simulate streaming using a simple iterator or just return a stream.
    // Since we are using the 'ai' SDK, we can use `streamText` with a custom "provider" (mock).
    // Or simpler: manually create a stream.

    // Let's manually stream the mock response for the visual effect.

    const stream = new ReadableStream({
        async start(controller) {
            const encoder = new TextEncoder();
            const tokens = mockResponse.split(/(?=[ .])/g); // Split by space or dot to simulate tokens

            for (const token of tokens) {
                controller.enqueue(encoder.encode(token));
                await new Promise((r) => setTimeout(r, 30)); // 30ms delay per token
            }
            controller.close();
        },
    });

    return new Response(stream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
