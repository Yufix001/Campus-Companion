"use client"

import { ChevronRight, Train } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

interface TransportWidgetProps {
    variant?: "sidebar" | "full"
}

export function TransportWidget({ variant = "sidebar" }: TransportWidgetProps) {
    const [schedule, setSchedule] = useState<{
        versailles: { time: string; wait: number }
        massy: { time: string; wait: number }
    } | null>(null)

    useEffect(() => {
        const calculateSchedule = () => {
            const now = new Date()
            const currentHour = now.getHours()
            const currentMinute = now.getMinutes()
            const currentTotalMinutes = currentHour * 60 + currentMinute

            // Mock Schedule Generation (Every 15 mins peak, 30 mins off-peak)
            // Starts at 06:00 (360 min)
            const generateTimes = (offset: number) => {
                const times = []
                for (let h = 6; h < 23; h++) {
                    const isPeak = (h >= 7 && h <= 9) || (h >= 16 && h <= 19)
                    const interval = isPeak ? 15 : 30
                    for (let m = 0; m < 60; m += interval) {
                        times.push(h * 60 + m + offset)
                    }
                }
                return times
            }

            // Versailles times (offset 0)
            const versaillesTimes = generateTimes(5) // e.g. 6:05
            // Massy times (offset 10)
            const massyTimes = generateTimes(12) // e.g. 6:12

            const getNext = (times: number[]) => {
                const next = times.find(t => t > currentTotalMinutes)
                if (!next) return { time: "06:05", wait: 0 } // Loop to morning

                const wait = next - currentTotalMinutes
                const hours = Math.floor(next / 60)
                const minutes = next % 60
                const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

                return { time: timeStr, wait }
            }

            setSchedule({
                versailles: getNext(versaillesTimes),
                massy: getNext(massyTimes)
            })
        }

        calculateSchedule()
        const interval = setInterval(calculateSchedule, 60000)
        return () => clearInterval(interval)
    }, [])

    if (!schedule) return null // Or loading state

    // V Logo Component using official asset
    const VLogo = () => (
        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image
                src="/assets/ligne-v.jpg"
                alt="Ligne V"
                width={40}
                height={40}
                className="w-full h-full object-contain"
            />
        </div>
    )

    if (variant === "full") {
        return (
            <a href="https://www.bonjour-ratp.fr/horaires-transilien/ligne-v/jouy-en-josas/" target="_blank" rel="noopener noreferrer" className="p-5 block group cursor-pointer hover:bg-slate-50 transition-colors no-underline">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <VLogo />
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
                            <span className="text-lg font-bold text-[#07305B]">{schedule.versailles.wait} min</span>
                            <span className="text-xs text-slate-400 mb-1">{schedule.versailles.time}</span>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">To Massy-Pal.</span>
                        <div className="flex items-end gap-2">
                            <span className="text-lg font-bold text-[#07305B]">{schedule.massy.wait} min</span>
                            <span className="text-xs text-slate-400 mb-1">{schedule.massy.time}</span>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

    // Sidebar / Landing Page Variant
    return (
        <a href="https://www.bonjour-ratp.fr/horaires-transilien/ligne-v/jouy-en-josas/" target="_blank" rel="noopener noreferrer" className="editorial-border bg-white p-4 flex flex-col justify-between h-full sharp-corners no-underline hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
                <VLogo />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#07305B]/50">Transport</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <span className="text-[9px] text-[#07305B]/60 uppercase tracking-wider mb-0.5">To Versailles</span>
                    <div className="flex items-baseline justify-between">
                        <span className="text-sm font-serif font-medium text-[#07305B]">{schedule.versailles.time}</span>
                        <span className="text-[10px] font-bold text-accent">{schedule.versailles.wait} min</span>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#07305B]/5"></div>
                <div className="flex flex-col">
                    <span className="text-[9px] text-[#07305B]/60 uppercase tracking-wider mb-0.5">To Massy-Pal.</span>
                    <div className="flex items-baseline justify-between">
                        <span className="text-sm font-serif font-medium text-[#07305B]">{schedule.massy.time}</span>
                        <span className="text-[10px] font-bold text-accent">{schedule.massy.wait} min</span>
                    </div>
                </div>
            </div>
        </a>
    )
}
