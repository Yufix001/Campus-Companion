"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FutureExpansion() {
    return (
        <section className="py-12 overflow-hidden">
            <div className="max-w-md mx-auto px-4 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/40 mb-8">Joining the Ecosystem soon</span>

                {/* Logo Marquee */}
                <div className="relative w-full overflow-hidden mb-12 group" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                    <div className="flex min-w-[200%] animate-marquee group-hover:[animation-play-state:paused] items-center gap-12 sm:gap-24 pl-4" style={{ animationDuration: "20s" }}>
                        {/* First Set */}
                        <div className="w-40 h-20 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/hec-paris.svg" alt="HEC Paris" fill className="object-contain" />
                        </div>
                        <div className="w-40 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/polytechnique-signature.svg" alt="École Polytechnique" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ponts-paristech.svg" alt="École des Ponts ParisTech" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
                        </div>

                        {/* Second Set (Duplicate) */}
                        <div className="w-40 h-20 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/hec-paris.svg" alt="HEC Paris" fill className="object-contain" />
                        </div>
                        <div className="w-40 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/polytechnique-signature.svg" alt="École Polytechnique" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ensta.png" alt="ENSTA" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ensae.png" alt="ENSAE" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/ponts-paristech.svg" alt="École des Ponts ParisTech" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-16 relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                            <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" fill className="object-contain" />
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
