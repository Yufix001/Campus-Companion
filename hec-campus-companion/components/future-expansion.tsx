"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FutureExpansion() {
    return (
        <section className="bg-white border-y border-slate-100 py-12 overflow-hidden">
            {/* Text Marquee */}
            <div className="relative w-full overflow-hidden mb-12">
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 mb-8">Future Expansions</span>

                {/* Logo Marquee */}
                <div className="relative w-full overflow-hidden mb-10 group" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
                    <div className="flex w-[200%] animate-marquee group-hover:[animation-play-state:paused] items-center">
                        {/* First Set */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-8">
                            <div className="w-12 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-10 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-8">
                            <div className="w-12 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-8 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-16 h-10 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/waitlist">
                    <Button variant="outline" className="border-[#07305B]/20 text-[#07305B] hover:bg-[#07305B] hover:text-white text-[10px] font-bold uppercase tracking-widest px-8 sharp-corners h-9 transition-colors">
                        Add your school to the waitlist
                    </Button>
                </Link>
            </div>
        </section>
    )
}
