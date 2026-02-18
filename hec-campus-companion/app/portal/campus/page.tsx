import { BottomNav } from "@/components/bottom-nav"
import { Map } from "lucide-react"

export default function CampusPage() {
    return (
        <div className="font-sans antialiased min-h-screen bg-[#F9F9F7] dark:bg-[#0F172A] text-slate-900 pb-32">
            <header className="px-6 pt-8 pb-4">
                <h1 className="font-serif text-3xl mb-1 text-[#07305B] dark:text-white tracking-tight">Campus Map</h1>
            </header>
            <main className="px-6 flex flex-col items-center justify-center h-[50vh] text-center">
                <div className="bg-slate-100 p-4 rounded-full mb-4">
                    <Map size={32} className="text-slate-400" />
                </div>
                <h2 className="text-lg font-semibold text-slate-700 mb-2">Map Loading...</h2>
                <p className="text-sm text-slate-500 max-w-xs">Interactive campus map integration is currently under development.</p>
            </main>
            <BottomNav />
        </div>
    )
}
