import { CloudSun, Train, ArrowRight, Rss, Grid, Map, ChevronRight, Search } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WeatherWidget } from "@/components/weather-widget"
import { FutureExpansion } from "@/components/future-expansion"
import { TransportWidget } from "@/components/transport-widget"

export default function LandingPage() {
    return (
        {/* Top Bar Background - Kept for aesthetics or remove if strictly pre-modern? Keeping for now to avoid breaking layout completely */ }
        < div className = "fixed top-0 left-0 w-full h-1 bg-[#07305B] z-[60]" ></div >
            <div className="fixed top-[-5%] right-[-5%] w-[40%] h-[30%] rounded-full bg-[#07305B]/5 blur-[100px] pointer-events-none z-0"></div>

            <main className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 flex flex-col gap-8 pt-12 md:pt-20">
                <header className="flex flex-col items-center text-center gap-6 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07305B]/5 border border-[#07305B]/10">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#07305B]/60">Virtual Assistant active</span>
                    </div>

                    <h1 className="font-serif text-[44px] text-[#07305B] leading-[1.05] font-medium tracking-tight mb-2">
                        Answers for everyday campus life — <br />
                        <span className="italic text-accent">in your pocket.</span>
                    </h1>

                    <p className="text-[#07305B]/60 text-sm md:text-base max-w-md leading-relaxed">
                        Your personal companion for campus life, academic success, and connecting with the HEC ecosystem.
                    </p>

                    <Link href="/chat">
                        <Button className="bg-gradient-to-r from-[#07305B] to-accent text-white text-sm font-bold uppercase tracking-widest px-10 py-7 rounded-full hover:opacity-90 shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-3">
                            Try the Assistant <ChevronRight size={16} />
                        </Button>
                    </Link>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Weather Widget */}
                    <WeatherWidget />

                    {/* Transport Widget */}
                    <TransportWidget variant="sidebar" />
                </section>

                <FutureExpansion />

                {/* Feature Cards Section */}
                <section className="flex flex-col md:grid md:grid-cols-3 gap-6">
                    {/* Prospective Students - Spans 2 cols */}
                    <article className="md:col-span-2 group relative editorial-border bg-white rounded-3xl overflow-hidden shadow-sm min-h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
                        <div className="h-full w-full bg-[#07305B] bg-cover bg-center grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"></div>

                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif text-3xl text-white font-medium">Prospective Students</h3>
                                <ArrowRight className="text-white/80 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-white/80 text-sm font-light leading-relaxed max-w-[90%]">
                                Embark on a journey of academic rigor and global leadership.
                            </p>
                        </div>
                    </article>

                    {/* Campus Life - Vertical */}
                    <article className="md:col-span-1 editorial-border bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                        <div className="p-6 flex-1 flex flex-col">
                            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-3">Campus Life</span>
                            <h3 className="font-serif text-2xl font-medium leading-tight mb-3 text-[#07305B]">HEC Village<br />Experience</h3>
                            <div className="mt-auto">
                                <Link href="#" className="text-[#07305B] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#07305B]/20 pb-1 hover:border-[#07305B] transition-colors">Explore</Link>
                            </div>
                        </div>
                        <div className="h-32 w-full bg-slate-200 bg-cover bg-center"></div>
                    </article>

                    {/* Quick Services Grid - Spans 3 cols */}
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link href="/portal" className="glass-panel rounded-2xl p-5 flex flex-col gap-4 items-start hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#07305B]/5 rounded-full text-[#07305B]">
                                <Grid size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#07305B]">Services</span>
                                <span className="text-[10px] text-[#07305B]/50">Facilities & Tools</span>
                            </div>
                        </Link>

                        <Link href="/portal/campus" className="glass-panel rounded-2xl p-5 flex flex-col gap-4 items-start hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#07305B]/5 rounded-full text-[#07305B]">
                                <Map size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#07305B]">Map</span>
                                <span className="text-[10px] text-[#07305B]/50">Interactive Guide</span>
                            </div>
                        </Link>

                        <Link href="#" className="glass-panel rounded-2xl p-5 flex flex-col gap-4 items-start hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#07305B]/5 rounded-full text-[#07305B]">
                                <Search size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#07305B]">Search</span>
                                <span className="text-[10px] text-[#07305B]/50">Find anything</span>
                            </div>
                        </Link>

                        <Link href="#" className="glass-panel rounded-2xl p-5 flex flex-col gap-4 items-start hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#07305B]/5 rounded-full text-[#07305B]">
                                <Rss size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-wider text-[#07305B]">News</span>
                                <span className="text-[10px] text-[#07305B]/50">Latest Updates</span>
                            </div>
                        </Link>
                    </div>
                </section>

                <footer className="mt-12 flex flex-col items-center gap-6 text-center pt-10 pb-6 border-t border-[#07305B]/5">
                    <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="font-serif font-bold text-xl tracking-tight text-[#07305B]">HEC PARIS</div>
                        <p className="text-[9px] text-[#07305B]/60 uppercase tracking-[0.3em]">Excellence in Motion</p>
                    </div>

                    <div className="flex gap-8">
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 hover:text-[#07305B] transition-colors" href="#">Legal</a>
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 hover:text-[#07305B] transition-colors" href="#">Privacy</a>
                        <a className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 hover:text-[#07305B] transition-colors" href="#">Contact & Visit</a>
                    </div>
                </footer>
            </main>


            <BottomNav />
        </div >
    )
}
