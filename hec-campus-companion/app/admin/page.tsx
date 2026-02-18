import { Menu, LayoutDashboard, Ticket, Lock, GraduationCap, History, Wand2, RefreshCcw, Paperclip, Bold, Italic, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function AdminPage() {
    return (
        <div className="font-sans text-slate-900 antialiased h-screen flex flex-col overflow-hidden bg-slate-50/50">
            <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shrink-0 z-20 shadow-sm">
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center text-[#07305B]">
                        <Menu className="font-light" />
                    </button>
                    <div>
                        <h1 className="text-sm font-serif font-bold text-[#07305B] tracking-tight leading-none">Admin Ticket Resolver</h1>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Institutional Dashboard</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm">
                        <div className="w-full h-full bg-slate-300"></div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar */}
                <nav className="hidden md:flex w-20 flex-col bg-white border-r border-slate-200 items-center py-6 gap-8 z-10">
                    <LayoutDashboard className="text-[#07305B]" />
                    <Ticket className="text-[#07305B]" />
                    <div className="flex flex-col items-center gap-1 opacity-60 mt-auto pb-4">
                        <Lock className="text-slate-400" />
                        <span className="text-[8px] font-bold text-slate-400 text-center uppercase">Intranet Agent</span>
                    </div>
                </nav>

                <main className="flex-1 overflow-y-auto p-4 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">

                        {/* Incoming Ticket Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Incoming Ticket</h2>
                                <span className="text-[10px] text-slate-400 font-medium tracking-tight bg-white border border-slate-200 px-2 py-1 rounded-sm">ID: #HEC-8829</span>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col h-fit">
                                <div className="p-5 border-b border-slate-100">
                                    <div className="flex items-center gap-2 mb-3">
                                        <GraduationCap className="text-[#07305B]" size={20} />
                                        <span className="text-xs font-bold text-[#07305B] uppercase tracking-wide">Student Query</span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold mb-2 text-slate-900">Registrar Access Error</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        "I cannot access my course registration page. The screen just shows an error message saying unauthorized after the latest system update. I need to register for the Strategy elective before 5 PM."
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#07305B] text-white flex items-center justify-center text-[10px] font-bold">JD</div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-900 uppercase">J. Dubois</p>
                                            <p className="text-[9px] text-slate-500">MBA 2024 Candidate</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">Today, 14:02</span>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-[4px] shadow-sm p-4 opacity-80">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Related Context</span>
                                    <History className="text-slate-300" size={16} />
                                </div>
                                <p className="text-xs text-slate-500 italic">"Portal latency reported by 3 other students in the last hour."</p>
                            </div>
                        </div>

                        {/* Response Console Column */}
                        <div className="flex flex-col gap-4 h-full">
                            <div className="flex items-center justify-between px-1 lg:hidden">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Response Console</h2>
                            </div>

                            <div className="flex flex-col h-full gap-4">
                                {/* Agent Suggestion */}
                                <div className="bg-white border border-[#07305B]/20 rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden flex-shrink-0">
                                    <div className="bg-[#07305B]/5 px-4 py-3 border-b border-[#07305B]/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base">🪄</span>
                                            <span className="text-xs font-bold text-[#07305B] uppercase tracking-wider">Agent Draft Suggestion</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="text-[10px] font-bold text-[#07305B]/70 uppercase tracking-tighter hover:text-[#07305B] transition-colors flex items-center gap-1">
                                                Regenerate
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="font-serif text-slate-800 text-sm leading-relaxed space-y-4">
                                            <p className="font-bold text-[#07305B]">Subject: Portal Access Resolution</p>
                                            <p>Dear Jean,</p>
                                            <p>We have processed your request regarding the access issues. Our support team has refreshed the permissions on your account following the recent maintenance cycle.</p>
                                            <p>Please log out and log back in to see the changes immediately.</p>
                                            <div className="pt-3 mt-2 border-t border-slate-100 text-slate-400 text-[10px] flex items-center gap-1 uppercase tracking-tight font-sans">
                                                <Wand2 size={12} />
                                                AI Confidence: High (98%)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Manual Input */}
                                <div className="bg-white border border-slate-200 rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col flex-grow">
                                    <div className="relative flex-grow min-h-[120px]">
                                        <Textarea
                                            className="w-full h-full border-none p-4 text-sm focus-visible:ring-0 placeholder:text-slate-400 resize-none font-sans shadow-none rounded-none"
                                            placeholder="Add personal comments to the draft..."
                                        />
                                    </div>
                                    <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-2 text-slate-500 hover:text-[#07305B] group transition-colors px-2 py-1 rounded hover:bg-slate-100">
                                                <Paperclip className="rotate-45" size={20} />
                                                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">Upload Document</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-[#07305B] group transition-colors px-2 py-1 rounded hover:bg-slate-100">
                                                <Bold size={20} />
                                            </button>
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-[#07305B] group transition-colors px-2 py-1 rounded hover:bg-slate-100">
                                                <Italic size={20} />
                                            </button>
                                        </div>
                                        <span className="text-[10px] text-slate-400 uppercase font-medium">Internal Note</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex flex-col gap-3 z-30 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                <Button className="w-full bg-[#07305B] text-white py-6 font-serif font-bold text-base sharp-card shadow-lg active:scale-[0.99] transition-transform uppercase tracking-widest hover:bg-[#07305B]/90 flex items-center justify-center gap-2 rounded-[4px]">
                    <span>Publish Response</span>
                    <Send size={16} />
                </Button>
                <div className="flex justify-center">
                    <div className="w-32 h-1 bg-slate-200 rounded-full"></div>
                </div>
            </footer>
        </div>
    )
}
