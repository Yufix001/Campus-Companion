"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FutureExpansion() {
    return (
        <section className="py-12 overflow-hidden">
            <div className="max-w-md mx-auto px-4 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 mb-8">Future Expansions</span>

                {/* Logo Marquee */}
                <div className="relative w-full overflow-hidden mb-12 group" style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>
                    <div className="flex w-[200%] animate-marquee group-hover:[animation-play-state:paused] items-center">
                        {/* First Set */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-16">
                            <div className="w-28 h-14 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/hec-paris.png" alt="HEC Paris" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex w-1/2 justify-around items-center px-4 gap-16">
                            <div className="w-28 h-14 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/hec-paris.png" alt="HEC Paris" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/polytechnique.png" alt="Polytechnique" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                            </div>
                            <div className="w-24 h-12 relative flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110">
                                <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/waitlist">
                    <Button className="bg-[#07305B] text-white hover:bg-accent hover:shadow-lg text-xs font-bold uppercase tracking-widest px-8 py-6 sharp-corners transition-all duration-300 shadow-md">
                        Bring Campus Companion to my school
                    </Button>
                </Link>
            </div>
        </section>
    )
}
