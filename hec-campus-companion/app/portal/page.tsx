import { MapPin, CloudSun, ChevronRight, Bus, Calendar, GraduationCap, Sparkles } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShuttleBanner } from "@/components/shuttle-banner"
import { WeatherWidget } from "@/components/weather-widget"

export default function PortalPage() {
    return (
        <div className="font-sans antialiased min-h-screen bg-[#F9F9F7] dark:bg-[#0F172A] text-slate-900 pb-32">
            <header className="px-6 pt-8 pb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="font-serif text-3xl mb-1 text-[#07305B] dark:text-white tracking-tight">Good afternoon, Marc</h1>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            <MapPin size={18} />
                            <span>Jouy-en-Josas</span>
                            <span className="mx-1 opacity-50">•</span>
                            <WeatherWidget compact={true} />
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full bg-slate-200"></div>
                    </div>
                </div>
            </header>

            <main className="px-6 space-y-6">
                <ShuttleBanner />

                {/* Ask HEC Assistant */}
                <div className="py-6 flex flex-col items-center justify-center">
                    <Link href="/chat" className="glass-btn group relative flex items-center justify-center w-full max-w-sm h-20 rounded-xl border border-[#07305B] transition-all duration-300 active:scale-[0.98] bg-white/25 backdrop-blur-md shadow-[0_4px_20px_rgba(7,48,91,0.1)] appearance-none">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#07305B]/10 p-2.5 rounded-full group-hover:bg-[#07305B]/20 transition-colors">
                                <Sparkles className="w-6 h-6 text-[#07305B]" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[#07305B] font-serif font-bold text-lg leading-tight">Ask HEC Assistant</span>
                                <span className="block text-slate-500 text-xs font-medium">AI-Powered Campus Guide</span>
                            </div>
                        </div>
                    </Link>
                    <p className="mt-4 text-slate-400 dark:text-slate-500 text-xs italic font-light tracking-wide text-center max-w-xs mx-auto">"What is the schedule for Strategic Marketing?"</p>
                </div>

                {/* Status Cards */}
                <div className="bg-white dark:bg-slate-800 p-0 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <a href="https://www.bonjour-ratp.fr/horaires-transilien/ligne-v/jouy-en-josas/" target="_blank" rel="noopener noreferrer" className="p-5 block group cursor-pointer hover:bg-slate-50 transition-colors no-underline">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#0048E5]/10 text-[#0048E5] dark:text-emerald-400 rounded-lg flex items-center justify-center border border-[#0048E5]/20">
                                    <span className="font-bold font-serif text-lg">V</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Ligne V</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Jouy-en-Josas Station</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                <ChevronRight className="text-slate-300" size={20} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">To Versailles</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-lg font-bold text-[#07305B]">5 min</span>
                                    <span className="text-xs text-slate-400 mb-1">14:42</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">To Massy-Pal.</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-lg font-bold text-[#07305B]">19 min</span>
                                    <span className="text-xs text-slate-400 mb-1">14:56</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full mx-auto"></div>
                    <Link href="/portal/campus" className="p-5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center border border-slate-200">
                                <Bus size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">SAVAC Shuttle Schedule</h3>
                                <p className="text-xs text-[#0048E5] font-medium">Next departure in 12 mins</p>
                            </div>
                        </div>
                        <ChevronRight className="text-slate-300" size={20} />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/portal/schedule" className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-32 relative overflow-hidden group shadow-sm hover:border-[#07305B]/30 transition-colors">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Calendar size={96} />
                        </div>
                        <Calendar size={24} className="text-[#07305B] mb-2" />
                        <span className="font-serif font-semibold text-slate-900 dark:text-white">Room<br />Booking</span>
                    </Link>
                    <Link href="/portal/profile" className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-32 relative overflow-hidden group shadow-sm hover:border-[#07305B]/30 transition-colors">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <GraduationCap size={96} />
                        </div>
                        <GraduationCap size={24} className="text-[#07305B] mb-2" />
                        <span className="font-serif font-semibold text-slate-900 dark:text-white">Grade<br />Transcript</span>
                    </Link>
                </div>
            </main>

            <BottomNav />
        </div>
    )
}
