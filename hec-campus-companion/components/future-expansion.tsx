"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FutureExpansion() {
    return (
        <section className="bg-white border-y border-slate-100 py-8 overflow-hidden">
            {/* Marquee */}
            <div className="relative w-full overflow-hidden mb-8">
                <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                <div className="w-[200%] flex animate-marquee">
                    <div className="flex w-1/2 items-center justify-around whitespace-nowrap px-4">
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                    </div>
                    <div className="flex w-1/2 items-center justify-around whitespace-nowrap px-4">
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                        <span className="text-4xl font-serif italic text-slate-100">Coming soon to IP Paris Universities & more...</span>
                    </div>
                </div>
            </div>

            <div className="max-w-md mx-auto px-4 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 mb-6">Future Expansions</span>

                {/* Logo Row - Using stylistic text representation for "Excellence" feel */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-8">
                    {/* Polytechnique (l'X) */}
                    <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-2xl text-[#07305B]">X</span>
                    </div>

                    {/* ENSTA */}
                    <div className="font-sans font-bold text-lg tracking-tight text-[#07305B]">ENSTA</div>

                    {/* ENSAE */}
                    <div className="font-sans font-black text-lg tracking-widest text-[#07305B]">ENSAE</div>

                    {/* Telecom */}
                    <div className="font-sans font-semibold text-lg text-[#07305B]">
                        Téléc<span className="text-accent">om</span>
                    </div>
                </div>

                <Link href="/waitlist">
                    <Button variant="outline" className="border-[#07305B]/20 text-[#07305B] hover:bg-[#07305B] hover:text-white text-[10px] font-bold uppercase tracking-widest px-6 sharp-corners h-8">
                        Add your school to the waitlist
                    </Button>
                </Link>
            </div>
        </section>
    )
}
