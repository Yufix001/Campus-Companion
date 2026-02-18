"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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

                {/* Logo Marquee */}
                <div className="relative w-full overflow-hidden mb-8 group">
                    <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex w-[200%] animate-marquee group-hover:[animation-play-state:paused]">
                        {/* First Set */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-8">
                            <div className="w-12 h-12 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-10 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-8">
                            <div className="w-12 h-12 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-10 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
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
