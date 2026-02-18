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
                    <div className="flex min-w-full animate-marquee group-hover:[animation-play-state:paused] items-center gap-16 md:gap-24 pl-0" style={{ animationDuration: "30s" }}>
                        {/* First Set */}
                        <div className="w-[180px] h-[80px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/hec-paris.svg" alt="HEC Paris" width={160} height={80} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[180px] h-[80px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/polytechnique-signature.svg" alt="École Polytechnique" width={160} height={80} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ensta.png" alt="ENSTA" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ensae.png" alt="ENSAE" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ponts-paristech.svg" alt="École des Ponts ParisTech" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>

                        {/* Second Set (Duplicate) */}
                        <div className="w-[180px] h-[80px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/hec-paris.svg" alt="HEC Paris" width={160} height={80} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[180px] h-[80px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/polytechnique-signature.svg" alt="École Polytechnique" width={160} height={80} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ensta.png" alt="ENSTA" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ensae.png" alt="ENSAE" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/ponts-paristech.svg" alt="École des Ponts ParisTech" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/telecom-paris.svg" alt="Télécom Paris" width={140} height={70} className="object-contain max-h-full w-auto" />
                        </div>
                        <div className="w-[160px] h-[70px] relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] flex items-center justify-center">
                            <Image src="/assets/telecom-sudparis.png" alt="Télécom SudParis" width={140} height={70} className="object-contain max-h-full w-auto" />
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
