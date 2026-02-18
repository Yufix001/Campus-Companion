"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WaitlistPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        // In a real app, we would send data to Supabase here
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col relative overflow-hidden font-sans">
            <div className="fixed top-0 left-0 w-full h-1 bg-[#07305B] z-50"></div>

            <header className="p-6">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#07305B]/60 hover:text-[#07305B] transition-colors">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto">
                <div className="w-full bg-white p-8 rounded-none sharp-corners shadow-sm border border-slate-100 relative overflow-hidden">
                    {submitted ? (
                        <div className="text-center py-8 flex flex-col items-center animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                <Check size={32} />
                            </div>
                            <h2 className="font-serif text-2xl text-[#07305B] mb-2">You're on the list!</h2>
                            <p className="text-slate-500 text-sm mb-6">We'll notify you when Campus Companion arrives at your school.</p>
                            <Link href="/">
                                <Button className="bg-[#07305B] text-white sharp-corners">Return Home</Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 text-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Expansion</span>
                                <h1 className="font-serif text-3xl text-[#07305B] mb-3">Join the Waitlist</h1>
                                <p className="text-slate-500 text-sm">Help us prioritize which campus to launch next. Sign up to get notified.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#07305B]/70">Full Name</label>
                                    <Input required id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus-visible:ring-[#07305B]" />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#07305B]/70">School Email</label>
                                    <Input required type="email" id="email" placeholder="john.doe@school.edu" className="bg-slate-50 border-slate-200 focus-visible:ring-[#07305B]" />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="school" className="text-xs font-bold uppercase tracking-wider text-[#07305B]/70">University / School</label>
                                    <Input required id="school" placeholder="e.g. Polytechnique, ESSEC..." className="bg-slate-50 border-slate-200 focus-visible:ring-[#07305B]" />
                                </div>

                                <Button type="submit" className="w-full bg-[#07305B] hover:bg-[#07305B]/90 text-white font-bold uppercase tracking-widest py-6 sharp-corners mt-2">
                                    Join Waitlist
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
