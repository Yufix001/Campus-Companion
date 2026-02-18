
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Supabase environment variables.')
    console.error('Make sure to run this script with env vars loaded, e.g.:')
    console.error('export $(grep -v \'^#\' .env.local | xargs) && npx tsx scripts/test-supabase.ts')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    console.log('Testing Supabase connection...')
    try {
        // Try to select from 'documents' table
        const { data, error } = await supabase.from('documents').select('*').limit(1)

        if (error) {
            if (error.code === '42P01') {
                console.log('⚠️ Connection successful, but "documents" table not found.')
                console.log('   Please run the SQL script provided earlier to create the tables.')
            } else {
                console.error('❌ Connection failed:', error.message)
            }
        } else {
            console.log('✅ Connection successful! "documents" table found.')
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err)
    }
}

testConnection()
