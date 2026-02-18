import { MapPin, CloudSun, ChevronRight, Bus, Calendar, GraduationCap, sparkles } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"

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
                            <CloudSun size={18} className="text-amber-500" />
                            <span>12°C</span>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full bg-slate-200"></div>
                    </div>
                </div>
            </header>

            <main className="px-6 space-y-6">
                {/* Ask HEC Assistant */}
                <div className="py-6 flex flex-col items-center justify-center">
                    <button className="glass-btn group relative flex items-center justify-center w-full max-w-sm h-20 rounded-xl border border-[#07305B] transition-all duration-300 active:scale-[0.98] bg-white/25 backdrop-blur-md shadow-[0_4px_20px_rgba(7,48,91,0.1)]">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#07305B]/10 p-2.5 rounded-full group-hover:bg-[#07305B]/20 transition-colors">
                                {/* AutoAwesome icon replacement */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#07305B]">
                                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-[#07305B] font-serif font-bold text-lg leading-tight">Ask HEC Assistant</span>
                                <span className="block text-slate-500 text-xs font-medium">AI-Powered Campus Guide</span>
                            </div>
                        </div>
                    </button>
                    <p className="mt-4 text-slate-400 dark:text-slate-500 text-xs italic font-light tracking-wide text-center max-w-xs mx-auto">"What is the schedule for Strategic Marketing?"</p>
                </div>

                {/* Status Cards */}
                <div className="bg-white dark:bg-slate-800 p-0 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#0048E5]/10 text-[#0048E5] dark:text-emerald-400 rounded-lg flex items-center justify-center border border-[#0048E5]/20">
                                <span className="font-bold font-serif text-lg">V</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Ligne V</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Normal service</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            <ChevronRight className="text-slate-300" size={20} />
                        </div>
                    </div>
                    <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full mx-auto"></div>
                    <div className="p-5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
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
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-32 relative overflow-hidden group shadow-sm">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Calendar size={96} />
                        </div>
                        <Calendar size={24} className="text-[#07305B] mb-2" />
                        <span className="font-serif font-semibold text-slate-900 dark:text-white">Room<br />Booking</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-32 relative overflow-hidden group shadow-sm">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <GraduationCap size={96} />
                        </div>
                        <GraduationCap size={24} className="text-[#07305B] mb-2" />
                        <span className="font-serif font-semibold text-slate-900 dark:text-white">Grade<br />Transcript</span>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    )
}
