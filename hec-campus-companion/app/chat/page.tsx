'use client'

import { School, ArrowUp, Paperclip, ThumbsUp, ThumbsDown, Copy, Volume2, Sparkles, MessageSquare, AlertCircle } from "lucide-react"
// Removed BottomNav from imports
import { useChat } from '@ai-sdk/react'
import { createTicket } from '@/app/actions/ticket'
import { useState, useRef, useEffect } from 'react'
import { cn } from "@/lib/utils"

export default function ChatPage() {
    const { messages, append, isLoading, error, input, handleInputChange, handleSubmit: handleAiSubmit } = useChat({
        onError: (err) => {
            console.error("Chat API Error:", err);
        }
    })

    // We can use the SDK's input management or sync it. 
    // The current UI uses a manual input state 'input' (variable name conflict with SDK).
    // Let's rely on SDK's input handling if possible, OR just use append manually.

    // Manual Input State to keep UI control valid
    const [localInput, setLocalInput] = useState('')

    const handleLocalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalInput(e.target.value)
    }

    const handleManualSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!localInput.trim()) return

        const currentInput = localInput
        setLocalInput('')

        await append({ role: 'user', content: currentInput })
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
        <div className="bg-slate-50 font-display text-slate-800 overflow-x-hidden min-h-screen">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 pt-12 pb-4 px-6 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm flex justify-center">
                <div className="flex items-center justify-between w-full max-w-3xl">
                    <div className="flex items-center gap-3">
                        <School className="text-blue-900" size={28} />
                        <h1 className="font-serif text-xl font-bold text-slate-900">Campus Companion</h1>
                    </div>
                    <button onClick={() => window.location.reload()} className="h-9 px-4 rounded-full border border-gray-200 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-900 transition-colors flex items-center gap-2 shadow-sm">
                        <MessageSquare size={14} />
                        New Chat
                    </button>
                </div>
            </div>

            <main className="pt-32 pb-48 px-4 max-w-3xl mx-auto space-y-8">
                <div className="flex justify-center">
                    <span className="bg-white px-4 py-1.5 rounded-lg text-[11px] font-semibold text-slate-400 border border-slate-100 shadow-sm uppercase tracking-wider">Today</span>
                </div>

                {messages.length === 0 && (
                    <div className="flex flex-col gap-1 max-w-[85%] mr-auto">
                        <div className="flex items-center gap-2 mb-1 pl-1">
                            <div className="h-7 w-7 bg-blue-900 rounded-full flex items-center justify-center shadow-sm">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Campus Companion</span>
                        </div>
                        <div className="bg-transparent px-2 pt-1 pb-4">
                            <p className="text-[16px] text-slate-800 leading-relaxed font-sans">
                                Welcome to HEC Paris! 👋 <br /><br />
                                I'm your intelligent Campus Companion. I can help you find shuttle schedules, library hours, IT support, and administrative information. How can I help you today?
                            </p>
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
                                        <div className="h-7 w-7 bg-blue-900 rounded-full flex items-center justify-center shadow-sm">
                                            <Sparkles size={14} className="text-white" />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Campus Companion</span>
                                    </>
                                )}
                            </div>

                            <div className={cn(
                                "p-3 text-[16px] leading-relaxed font-sans",
                                m.role === 'user'
                                    ? "bg-blue-900 text-white rounded-2xl rounded-br-[4px] shadow-sm ml-4"
                                    : "bg-transparent text-slate-800 pr-4"
                            )}>
                                <div className="whitespace-pre-wrap">
                                    {/* Simple citation parsing logic: look for [1], [2] etc */}
                                    {content.split(/(\[\d+\])/g).map((part: string, i: number) => {
                                        if (/^\[\d+\]$/.test(part)) {
                                            return (
                                                <span key={i} className={cn(
                                                    "inline-flex items-center justify-center font-semibold text-[11px] px-1.5 py-0.5 rounded-md mx-0.5 align-text-top cursor-pointer transition-colors shadow-sm",
                                                    m.role === 'user'
                                                        ? "text-blue-900 bg-white hover:bg-slate-100"
                                                        : "text-white bg-blue-900 hover:bg-blue-800"
                                                )}>
                                                    Source {part.replace(/[\[\]]/g, '')}
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

                {error && (
                    <div className="flex flex-col gap-1 max-w-[85%] mr-auto mb-4">
                        <div className="flex items-center gap-2 mb-1 pl-1">
                            <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertCircle size={14} className="text-red-500" />
                            </div>
                            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Error</span>
                        </div>
                        <div className="bg-red-50 border border-red-100 shadow-sm rounded-[20px] rounded-tl-[4px] p-4 text-sm text-red-700">
                            {error.message || "An error occurred connecting to the AI. Please verify your OpenAI API keys are correctly configured."}
                        </div>
                    </div>
                )}

                {isLoading && (
                    <div className="flex flex-col gap-1 max-w-[85%] mr-auto">
                        <div className="flex items-center gap-2 mb-1 pl-1">
                            <div className="h-7 w-7 bg-blue-900 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Campus Companion is thinking...</span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pb-6 px-4 pt-10">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <form onSubmit={handleManualSubmit} className="w-full bg-white rounded-3xl border border-gray-200 shadow-xl flex items-center p-2.5 gap-3 transition-all duration-300 focus-within:shadow-2xl focus-within:border-blue-900/30">
                        <button type="button" className="p-2.5 bg-slate-50 rounded-full text-slate-400 hover:text-blue-900 hover:bg-blue-50 transition-colors"><Paperclip size={18} className="stroke-[2px]" /></button>
                        <input
                            value={localInput}
                            onChange={handleLocalInputChange}
                            className="flex-1 border-none focus:ring-0 text-[16px] text-slate-800 bg-transparent placeholder:text-slate-400 outline-none"
                            placeholder="Ask Campus Companion..."
                            type="text"
                        />
                        <button type="submit" disabled={isLoading || !localInput.trim()} className="bg-blue-900 h-[42px] w-[42px] rounded-full flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:bg-blue-800 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed">
                            <ArrowUp size={20} className="stroke-[2.5px]" />
                        </button>
                    </form>
                    <p className="mt-4 text-[11px] text-slate-400 font-sans tracking-wide">Campus Companion can make mistakes. Verify important academic information.</p>
                </div>
            </div>
        </div>
    )
}
