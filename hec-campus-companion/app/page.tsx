import { CloudSun, Train, ArrowRight, Rss, Grid, Map, ChevronRight, Search, Code, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WeatherWidget } from "@/components/weather-widget"
import { FutureExpansion } from "@/components/future-expansion"
import { TransportWidget } from "@/components/transport-widget"

export default function LandingPage() {
    return (
        <div className="font-display relative overflow-x-hidden min-h-screen bg-[#F5F5F5] pb-24">
            {/* Top Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-[#07305B] z-[60]"></div>
            <div className="fixed top-[-5%] right-[-5%] w-[40%] h-[30%] rounded-full bg-[#07305B]/5 blur-[100px] pointer-events-none z-0"></div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 px-4 pt-4 pb-2 w-full max-w-md mx-auto">
                <div className="glass-panel sharp-corners px-5 py-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        {/* Using a simple menu icon placeholder or lucide equivalent */}
                        <div className="flex flex-col gap-1 w-6 cursor-pointer">
                            <div className="h-0.5 w-full bg-[#07305B]"></div>
                            <div className="h-0.5 w-full bg-[#07305B]"></div>
                            <div className="h-0.5 w-full bg-[#07305B]"></div>
                        </div>
                        <div className="font-serif font-bold text-lg tracking-tighter uppercase text-[#07305B]">Campus Companion</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button className="bg-[#07305B] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 sharp-corners h-auto rounded-none hover:bg-[#07305B]/90">
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col gap-6">
                <header className="mt-8 flex flex-col items-start gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07305B]/60 mb-1">VIRTUAL ASSISTANT</span>
                        <h2 className="font-serif text-xl italic text-[#07305B]/80">Welcome to HEC Paris</h2>
                    </div>
                    <h1 className="font-serif text-[44px] text-[#07305B] leading-[1.05] font-medium tracking-tight mb-2">
                        Answers for everyday campus life — <br />
                        <span className="italic text-accent">in your pocket.</span>
                    </h1>
                    <Link href="/chat">
                        <Button className="bg-gradient-to-r from-[#07305B] to-accent text-white text-sm font-bold uppercase tracking-widest px-10 py-7 sharp-corners h-auto rounded-none hover:opacity-90 shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95">
                            Start Chatting
                        </Button>
                    </Link>
                </header>

                <section className="grid grid-cols-2 gap-3">
                    {/* Weather Widget */}
                    <WeatherWidget />

                    {/* Transport Widget */}
                    <TransportWidget variant="sidebar" />


                </section>

                <FutureExpansion />

                <section className="flex flex-col gap-8 mt-4">
                    {/* Our Story Section */}
                    <div className="bg-white sharp-corners p-6 border border-[#07305B]/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#07305B]/5 rounded-bl-[100px] pointer-events-none"></div>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-2">Our Story</span>
                        <h3 className="font-serif text-2xl font-medium leading-tight mb-4 text-[#07305B]">Why we built this</h3>
                        <p className="text-[#07305B]/80 text-sm leading-relaxed mb-6">
                            Let&apos;s be honest: navigating life on the Jouy-en-Josas campus shouldn&apos;t be a puzzle. Between missing the last shuttle to Versailles and digging through endless PDFs to find basic campus info, we&apos;ve all been there. Campus Companion was born from this exact frustration. It&apos;s built by students, for students—one single hub to eliminate the friction and get you the answers you need, instantly.
                        </p>
                        <div className="flex flex-col gap-2 pt-4 border-t border-[#07305B]/10">
                            <span className="text-[10px] uppercase font-bold text-[#07305B]/40 tracking-widest">Backed by the ecosystem of:</span>
                            <div className="flex items-center gap-4 opacity-70 grayscale">
                                <span className="font-serif font-bold text-sm text-[#07305B]">IP Paris</span>
                                <span className="text-xs text-[#07305B]">|</span>
                                <span className="font-serif font-bold text-sm text-[#07305B]">Hi! PARIS</span>
                            </div>
                        </div>
                    </div>

                    {/* The Team Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-serif text-2xl font-medium text-[#07305B]">The Team</h3>
                            <div className="h-[1px] flex-1 bg-[#07305B]/10"></div>
                        </div>

                        {/* Founder Card */}
                        <div className="glass-panel sharp-corners p-5 flex gap-4 items-start bg-white shadow-sm border border-[#07305B]/10 hover:border-[#07305B]/20 transition-colors">
                            <div className="w-16 h-16 shrink-0 bg-[#07305B] flex items-center justify-center text-white font-serif text-xl border-2 border-white shadow-md">
                                YC
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-serif font-bold text-[#07305B] text-lg leading-none mt-1">Yusu Chen</h4>
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Founder & Product</span>
                                <p className="text-[#07305B]/70 text-xs leading-relaxed">
                                    HEC MBA Student S24. Passionate about AI and tech. Building the tool we always needed on campus.
                                </p>
                            </div>
                        </div>

                        {/* Tech Card */}
                        <div className="glass-panel sharp-corners p-5 flex flex-col gap-3 items-start bg-white shadow-sm border border-[#07305B]/10 hover:border-[#07305B]/20 transition-colors">
                            <div className="flex items-center gap-3 w-full">
                                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center text-[#07305B]/60">
                                    <Code size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-serif font-bold text-[#07305B] leading-none">Lead Developer</h4>
                                    <span className="text-[9px] font-bold text-[#07305B]/50 uppercase tracking-widest mt-1">Tech Team</span>
                                </div>
                            </div>
                            <p className="text-[#07305B]/70 text-xs leading-relaxed">
                                Are you from IP Paris or HEC and dream in code? Join us to scale the AI, connect the APIs, and build the ultimate campus app.
                            </p>
                            <a href="https://tally.so/r/687pyO" target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                                <Button className="w-full bg-[#07305B] text-white text-[10px] font-bold uppercase tracking-widest h-10 sharp-corners rounded-none hover:bg-[#07305B]/90">
                                    Apply for Tech
                                </Button>
                            </a>
                        </div>

                        {/* Ops Card */}
                        <div className="glass-panel sharp-corners p-5 flex flex-col gap-3 items-start bg-white shadow-sm border border-[#07305B]/10 hover:border-[#07305B]/20 transition-colors">
                            <div className="flex items-center gap-3 w-full">
                                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center text-accent/80">
                                    <UserPlus size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-serif font-bold text-[#07305B] leading-none">Campus Ops & Growth</h4>
                                    <span className="text-[9px] font-bold text-[#07305B]/50 uppercase tracking-widest mt-1">Operations</span>
                                </div>
                            </div>
                            <p className="text-[#07305B]/70 text-xs leading-relaxed">
                                Know the campus inside out? Help us deploy the app, grow our user base, and connect the dots across the Jouy ecosystem.
                            </p>
                            <a href="https://tally.so/r/687pyO" target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                                <Button className="w-full bg-accent text-white hover:bg-accent/90 border border-accent text-[10px] font-bold uppercase tracking-widest h-10 sharp-corners shadow-md rounded-none">
                                    Apply for Ops
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="mt-8 flex flex-col items-center gap-6 text-center border-t border-[#07305B]/10 pt-10 pb-10">
                    <div className="flex items-center gap-2">
                        <div className="font-serif font-bold text-lg tracking-tight text-[#07305B]">HEC PARIS</div>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/60 hover:text-accent" href="#">Contact</a>
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/60 hover:text-accent" href="#">Visit</a>
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/60 hover:text-accent" href="#">Privacy</a>
                    </div>
                    <p className="text-[9px] text-[#07305B]/40 uppercase tracking-[0.3em]">© 2024 HEC PARIS. EXCELLENCE IN MOTION.</p>
                </footer>
            </main>

        </div >
    )
}
