'use server'

import { createClient } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'

export async function createTicket(question: string, aiResponse: string) {
    const supabase = await createClient()

    try {
        const { error } = await supabase.from('tickets').insert({
            status: 'open',
            query: question,
            student_name: 'Marc (Demo User)', // Placeholder for now, typically from auth
            ai_draft: aiResponse,
        })

        if (error) {
            console.error('Error creating ticket:', error)
            return { success: false, message: 'Failed to create ticket' }
        }

        revalidatePath('/admin') // Refresh admin view
        return { success: true, message: 'Ticket created successfully' }
    } catch (error) {
        console.error('Unexpected error:', error)
        return { success: false, message: 'An unexpected error occurred' }
    }
}
