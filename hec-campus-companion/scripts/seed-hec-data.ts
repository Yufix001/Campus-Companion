import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load environment variables from .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const openaiKey = process.env.OPENAI_API_KEY;

if (!supabaseUrl || !supabaseKey || !openaiKey) {
    console.error("Missing required environment variables. Please check .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const openai = new OpenAI({ apiKey: openaiKey });

// Factual HEC Paris Campus Information for the RAG Demo
const hecDocuments = [
    {
        title: "SAVAC Shuttle Schedule - Ligne V",
        content: `The Ligne V (SAVAC) shuttle connects Jouy-en-Josas campus to Versailles Chantiers station. 
It operates every day.
Key departure times from campus (Monday to Friday): 07:30, 08:30, 12:15, 17:15, 18:30, 19:45.
Weekend times: 10:00, 14:00, 18:00.
The pick-up point on campus is generally in front of the main entrance (Building S).
Price: Included for students with the Navigo pass, otherwise a standard IDF ticket applies.`,
        metadata: { source: "HEC Transport Guide", category: "transport" }
    },
    {
        title: "HEC Library (Learning Center) Hours & Access",
        content: `The HEC Learning Center (Library) is located in the core of the campus (Building U).
Opening hours:
- Monday to Friday: 08:30 AM to 10:30 PM.
- Saturday & Sunday: 10:00 AM to 08:00 PM.
During exam periods, hours are extended until midnight.
Services available: Group study room booking, Bloomberg terminals, printing services, and IT helpdesk.
Student ID badges are required to enter after 7:00 PM and on weekends.`,
        metadata: { source: "Library Regulations", category: "facilities" }
    },
    {
        title: "Student IT Helpdesk & WiFi",
        content: `For IT support, students can visit the IT Helpdesk situated near the Learning Center.
IT Helpdesk hours: Monday to Friday from 09:00 AM to 05:00 PM.
Email for support: hec-it-support@hec.fr.
WiFi Network: Connect to "HEC-Students". You need to log in using your standard HEC credentials (firstname.lastname@hec.edu).
For devices that cannot authenticate via enterprise security (like some gaming consoles), you must register their MAC address on the IT portal.`,
        metadata: { source: "IT Department", category: "support" }
    },
    {
        title: "Medical Center & Emergencies",
        content: `The Campus Medical Center is available for all enrolled students.
Location: Building L, ground floor.
Opening hours: Monday to Friday, 09:00 AM to 01:00 PM and 02:00 PM to 05:00 PM.
A general practitioner and a psychologist are available by appointment (bookable via the student portal).
In case of a severe medical emergency on campus outside these hours, students should dial 15 (SAMU) or contact the 24/7 campus security unit at 01.39.67.70.00.`,
        metadata: { source: "Health Services", category: "emergency" }
    },
    {
        title: "Registrar's Office & Transcripts",
        content: `The Registrar's office handles enrollment certificates, grade transcripts, and diploma distribution.
Location: Building A.
Office hours: Tuesday and Thursday mornings, 09:00 AM to 12:00 PM.
Students can download official enrollment certificates directly through the HEC Student Portal 24/7 without needing to visit the office.
For official sealed transcripts required for exchange programs, requests must be submitted at least 5 working days in advance via email.`,
        metadata: { source: "Registrar Office", category: "admin" }
    }
];

async function seedDatabase() {
    console.log("Starting data ingestion for HEC Knowledge Base...");

    for (const doc of hecDocuments) {
        console.log(`Processing: ${doc.title}`);

        try {
            // Create embedding using OpenAI
            const embeddingResponse = await openai.embeddings.create({
                model: 'text-embedding-3-small',
                input: doc.content,
                encoding_format: 'float',
            });

            const embedding = embeddingResponse.data[0].embedding;

            // Insert into Supabase
            const { data, error } = await supabase
                .from('documents')
                .insert({
                    title: doc.title,
                    content: doc.content,
                    metadata: doc.metadata,
                    embedding: embedding
                });

            if (error) {
                console.error(`Error inserting document ${doc.title}:`, error.message);
            } else {
                console.log(`✅ Successfully added: ${doc.title}`);
            }
        } catch (e) {
            console.error(`Error generating embedding for ${doc.title}:`, e);
        }

        // Small delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log("Ingestion complete!");
}

seedDatabase().catch(console.error);
