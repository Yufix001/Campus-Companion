'use client'

import { School, ArrowUp, Paperclip, ThumbsUp, ThumbsDown, Copy, Volume2, Sparkles, MessageSquare, AlertCircle } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { useChat } from '@ai-sdk/react'
import { createTicket } from '@/app/actions/ticket'
import { useState, useRef, useEffect } from 'react'
import { cn } from "@/lib/utils"

export default function ChatPage() {
    const { messages, sendMessage, status } = useChat()
    const isLoading = status === 'submitted' || status === 'streaming'

    const [input, setInput] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        // Vercel AI SDK v6+ uses sendMessage with text property
        await sendMessage({ text: input })
        setInput('')
    }
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Feedback state
    const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Helper to extract text from message parts (SDK v6+)
    const getMessageContent = (m: any) => {
        if (typeof m.content === 'string') return m.content;
        if (Array.isArray(m.parts)) {
            return m.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')
        }
        return ''
    }

    const handleTicketCreation = async (messageContent: string, aiResponse: string) => {
        setFeedbackStatus('Creating ticket...')
        const result = await createTicket(messageContent, aiResponse)
        if (result.success) {
            setFeedbackStatus('Ticket created! Support team notified.')
            setTimeout(() => setFeedbackStatus(null), 3000)
        } else {
            setFeedbackStatus('Error creating ticket.')
        }
    }

    return (
        <div className="bg-[#F8F9FB] font-display text-slate-800 overflow-x-hidden min-h-screen">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 pt-12 pb-4 px-6 bg-white border-b border-slate-100 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <School className="text-[#0e63be]" size={28} />
                    <h1 className="font-serif text-xl font-bold text-slate-900">HEC Assistant</h1>
                </div>
                <div className="h-10 w-10 rounded-full border border-slate-200 overflow-hidden">
                    <div className="h-full w-full bg-slate-200"></div>
                </div>
            </div>

            <main className="pt-32 pb-48 px-4 max-w-2xl mx-auto space-y-8">
                <div className="flex justify-center">
                    <span className="bg-white px-4 py-1.5 rounded-lg text-[11px] font-semibold text-slate-400 border border-slate-100 shadow-sm uppercase tracking-wider">Today</span>
                </div>

                {messages.length === 0 && (
                    <div className="flex flex-col gap-1 max-w-[85%] mr-auto">
                        <div className="flex items-center gap-2 mb-1 pl-1">
                            <div className="h-6 w-6 bg-[#0e63be]/10 rounded-full flex items-center justify-center">
                                <Sparkles size={14} className="text-[#0e63be]" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assistant</span>
                        </div>
                        <div className="bg-white border border-slate-100 shadow-sm rounded-[4px] rounded-tl-none p-4">
                            <p className="text-sm text-slate-700 leading-relaxed font-serif">Good afternoon. How may I assist with your academic schedule or research inquiries today?</p>
                        </div>
                    </div>
                )}

                {messages.map((m, index) => {
                    const content = getMessageContent(m);
                    return (
                        <div key={m.id} className={cn("flex flex-col gap-1 max-w-[85%]", m.role === 'user' ? "ml-auto items-end" : "mr-auto")}>
                            <div className={cn("flex items-center gap-2 mb-1", m.role === 'user' ? "pr-1" : "pl-1")}>
                                {m.role === 'user' ? (
                                    <>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">You</span>
                                        <div className="h-6 w-6 rounded-full border border-slate-100 overflow-hidden">
                                            <div className="h-full w-full bg-slate-200"></div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="h-6 w-6 bg-[#0e63be]/10 rounded-full flex items-center justify-center">
                                            <Sparkles size={14} className="text-[#0e63be]" />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assistant</span>
                                    </>
                                )}
                            </div>

                            <div className={cn(
                                "shadow-sm rounded-[4px] p-4 text-sm leading-relaxed font-serif",
                                m.role === 'user' ? "bg-[#0e63be] text-white rounded-tr-none" : "bg-white border border-slate-100 text-slate-700 rounded-tl-none"
                            )}>
                                <div className="whitespace-pre-wrap">
                                    {/* Simple citation parsing logic: look for [1], [2] etc */}
                                    {content.split(/(\[\d+\])/g).map((part: string, i: number) => {
                                        if (/^\[\d+\]$/.test(part)) {
                                            return (
                                                <span key={i} className={cn(
                                                    "inline-flex items-center justify-center font-bold text-[10px] px-1 rounded ml-0.5 align-top cursor-pointer transition-colors",
                                                    m.role === 'user' ? "text-white bg-white/20 hover:bg-white/30" : "text-[#0e63be] bg-[#0e63be]/5 hover:bg-[#0e63be]/10"
                                                )}>
                                                    {part}
                                                </span>
                                            )
                                        }
                                        return part
                                    })}
                                </div>

                                {m.role === 'assistant' && (
                                    <div className="pt-3 flex items-center justify-between border-t border-slate-50 mt-2">
                                        <div className="flex gap-2">
                                            {/* Mock PDF Reference Button */}
                                            <button className="h-6 px-2 bg-slate-50 border border-slate-100 rounded text-[9px] font-bold text-slate-500 uppercase tracking-tight hover:bg-slate-100 transition-colors flex items-center gap-1">
                                                <span className="text-[10px]">📄</span> PDF Reference
                                            </button>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="text-slate-300 hover:text-[#0e63be] transition-colors p-1"><Copy size={16} /></button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {m.role === 'assistant' && (
                                <div className="flex items-center justify-between px-2 pt-1 opacity-80 hover:opacity-100 transition-opacity w-full">
                                    <div className="flex items-center gap-3">
                                        <span className={cn("text-[10px] font-medium uppercase tracking-widest", feedbackStatus ? "text-[#0e63be]" : "text-slate-400")}>
                                            {feedbackStatus || "Was this helpful?"}
                                        </span>
                                        {!feedbackStatus && (
                                            <div className="flex gap-1">
                                                <button aria-label="Thumbs up" className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors group">
                                                    <ThumbsUp size={18} className="group-hover:scale-110 transition-transform" />
                                                </button>
                                                <button
                                                    aria-label="Report issue"
                                                    onClick={() => handleTicketCreation(getMessageContent(messages[index - 1] || {}), content)}
                                                    className="p-1 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors group"
                                                    title="Report issue / Create Ticket"
                                                >
                                                    <ThumbsDown size={18} className="group-hover:scale-110 transition-transform" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

                {isLoading && (
                    <div className="flex flex-col gap-1 max-w-[85%] mr-auto">
                        <div className="flex items-center gap-2 mb-1 pl-1">
                            <div className="h-6 w-6 bg-[#0e63be]/10 rounded-full flex items-center justify-center animate-pulse">
                                <Sparkles size={14} className="text-[#0e63be]" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assistant is thinking...</span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-100 pb-8 px-4 pt-4 shadow-[0_-4px_24px_-2px_rgba(0,0,0,0.04)]">
                <div className="max-w-2xl mx-auto mb-5">
                    <form onSubmit={handleSubmit} className="bg-white rounded-[4px] border border-slate-200 shadow-xl flex items-center p-2 gap-2 transition-shadow focus-within:shadow-2xl focus-within:border-[#0e63be]/30">
                        <button type="button" className="p-2 text-slate-400 hover:text-[#0e63be] transition-colors"><Paperclip size={20} /></button>
                        <input
                            value={input}
                            onChange={handleInputChange}
                            className="flex-1 border-none focus:ring-0 text-sm text-slate-600 bg-transparent font-serif placeholder:text-slate-400 outline-none"
                            placeholder="Type your request..."
                            type="text"
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-[#0e63be] h-10 w-10 rounded-[4px] flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg shadow-[#0e63be]/20 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            <ArrowUp size={20} />
                        </button>
                    </form>
                </div>

                <BottomNav />
            </div>
        </div>
    )
}
