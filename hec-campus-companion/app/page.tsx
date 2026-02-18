import { CloudSun, Train, ArrowRight, Rss, Grid, Map, ChevronRight, Search } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"

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
                        <div className="font-serif font-bold text-lg tracking-tighter uppercase text-[#07305B]">HEC Paris</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button className="bg-[#07305B] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 sharp-corners h-auto rounded-none hover:bg-[#07305B]/90">
                            Login
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col gap-6">
                <header className="mt-8 flex flex-col items-start gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07305B]/60 mb-1">Global Portal</span>
                        <h2 className="font-serif text-xl italic text-[#07305B]/80">Welcome to HEC Paris</h2>
                    </div>
                    <h1 className="font-serif text-[44px] text-[#07305B] leading-[1.05] font-medium tracking-tight">
                        Excellence <br />
                        <span className="italic text-accent">in your pocket.</span>
                    </h1>
                </header>

                <section className="grid grid-cols-2 gap-3">
                    {/* Weather Widget */}
                    <div className="editorial-border bg-[#07305B] text-white p-4 flex flex-col justify-between h-full sharp-corners border-none">
                        <div className="flex justify-between items-start">
                            <CloudSun size={20} />
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Jouy-en-Josas</span>
                        </div>
                        <div className="mt-4">
                            <div className="text-2xl font-serif font-medium">14°C</div>
                            <div className="text-[10px] opacity-80 uppercase tracking-tighter">Mostly Clear</div>
                        </div>
                    </div>

                    {/* Transport Widget */}
                    <div className="editorial-border bg-white p-4 flex flex-col justify-between h-full sharp-corners">
                        <div className="flex justify-between items-start">
                            <Train size={20} className="text-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/50">Transport</span>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-1.5 mb-1">
                                <span className="text-[10px] font-bold text-[#07305B]">RER C</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[10px] text-[#07305B]/60">Shuttle: Every 15m</div>
                        </div>
                    </div>

                    {/* News Widget */}
                    <div className="col-span-2 editorial-border bg-white p-4 flex flex-col justify-between h-full sharp-corners">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Campus News</span>
                            <ChevronRight size={16} className="text-[#07305B]/40" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg leading-tight mb-1 text-[#07305B]">2024 Global Ranking Achievement</h4>
                            <p className="text-[10px] text-[#07305B]/60 leading-relaxed line-clamp-1 italic">Discover how HEC Paris continues to lead international excellence in business education.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-6">
                    {/* Prospective Students Card */}
                    <article className="group relative editorial-border bg-white sharp-corners overflow-hidden shadow-sm h-72">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
                        {/* Placeholder for background image */}
                        <div className="h-full w-full bg-[#07305B] bg-cover bg-center grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"></div>

                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif text-3xl text-white font-medium">Prospective Students</h3>
                                <Map size={20} className="text-white/80" />
                            </div>
                            <p className="text-white/80 text-xs font-light leading-relaxed max-w-[85%]">
                                Embark on a journey of academic rigor and global leadership. Explore our world-class programs and community.
                            </p>
                            <div className="flex gap-4 mt-2">
                                <button className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white">Programs</button>
                                <button className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white">Admission</button>
                            </div>
                        </div>
                    </article>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="glass-panel sharp-corners p-5 flex flex-col gap-4 items-start text-left hover:bg-white transition-colors duration-300">
                            <div className="w-8 h-8 flex items-center justify-center border border-[#07305B]/10 rounded-none">
                                <Grid size={18} className="text-[#07305B]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#07305B]">Discover Services</span>
                                <span className="text-[10px] text-[#07305B]/50">Campus Facilities</span>
                            </div>
                        </button>
                        <button className="glass-panel sharp-corners p-5 flex flex-col gap-4 items-start text-left hover:bg-white transition-colors duration-300">
                            <div className="w-8 h-8 flex items-center justify-center border border-[#07305B]/10 rounded-none">
                                <Map size={18} className="text-[#07305B]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#07305B]">Campus Map</span>
                                <span className="text-[10px] text-[#07305B]/50">Wayfinding</span>
                            </div>
                        </button>
                    </div>

                    {/* Campus Life Card */}
                    <article className="editorial-border bg-white sharp-corners overflow-hidden flex flex-col">
                        <div className="p-6">
                            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-3">Campus Life</span>
                            <h3 className="font-serif text-2xl font-medium leading-tight mb-3 text-[#07305B]">The HEC Village <br />Experience</h3>
                            <p className="text-[#07305B]/70 text-sm leading-relaxed mb-4">
                                Experience the vibrant ecosystem of our 340-acre wooded campus located just outside of Paris.
                            </p>
                            <button className="text-[#07305B] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#07305B]/20 pb-1 self-start hover:border-[#07305B]">Learn More</button>
                        </div>
                        {/* Visual placeholder */}
                        <div className="h-44 w-full bg-slate-200 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"></div>
                    </article>
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

            <BottomNav />
        </div>
    )
}
