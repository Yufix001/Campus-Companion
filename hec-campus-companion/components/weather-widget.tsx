"use client"

import { CloudSun, CloudRain, CloudSnow, Sun, Cloud, CloudLightning, Wind } from "lucide-react"
import { useEffect, useState } from "react"

export function WeatherWidget({ compact = false }: { compact?: boolean }) {
    const [weather, setWeather] = useState<{ temp: number, code: number, desc: string } | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Jouy-en-Josas Coordinates
        // Using Open-Meteo API which aggregates Météo-France data among others
        const fetchWeather = async () => {
            try {
                const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.762&longitude=2.168&current=temperature_2m,weather_code&timezone=Europe%2FParis")
                const data = await res.json()

                if (data.current) {
                    setWeather({
                        temp: Math.round(data.current.temperature_2m),
                        code: data.current.weather_code,
                        desc: getWeatherDesc(data.current.weather_code)
                    })
                }
            } catch (e) {
                console.error("Failed to fetch weather", e)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()
        // Refresh every 30 mins
        const interval = setInterval(fetchWeather, 30 * 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    const getWeatherIcon = (code: number) => {
        if (code === 0 || code === 1) return <Sun size={compact ? 18 : 20} className={compact ? "text-amber-500" : ""} />
        if (code === 2) return <CloudSun size={compact ? 18 : 20} className={compact ? "text-amber-500" : ""} />
        if (code === 3) return <Cloud size={compact ? 18 : 20} className={compact ? "text-slate-400" : ""} />
        if (code >= 45 && code <= 48) return <Wind size={compact ? 18 : 20} className={compact ? "text-slate-400" : ""} />
        if (code >= 51 && code <= 67) return <CloudRain size={compact ? 18 : 20} className={compact ? "text-blue-400" : ""} />
        if (code >= 71 && code <= 77) return <CloudSnow size={compact ? 18 : 20} className={compact ? "text-blue-200" : ""} />
        if (code >= 80 && code <= 82) return <CloudRain size={compact ? 18 : 20} className={compact ? "text-blue-500" : ""} />
        if (code >= 95) return <CloudLightning size={compact ? 18 : 20} className={compact ? "text-amber-600" : ""} />
        return <CloudSun size={compact ? 18 : 20} className={compact ? "text-amber-500" : ""} />
    }

    const getWeatherDesc = (code: number) => {
        if (code === 0) return "Clear Sky"
        if (code === 1) return "Mainly Clear"
        if (code === 2) return "Partly Cloudy"
        if (code === 3) return "Overcast"
        if (code >= 51) return "Rainy"
        return "Seasonable"
    }

    if (loading) {
        return (
            <div className={compact ? "flex items-center gap-2 text-slate-500 text-sm opacity-50" : "flex flex-col justify-between h-full opacity-50"}>
                {!compact && <CloudSun size={20} />}
                <span className={compact ? "" : "mt-4 text-[10px]"}>{compact ? "Loading..." : "Loading Weather..."}</span>
            </div>
        )
    }

    if (compact) {
        return (
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                {getWeatherIcon(weather?.code || 0)}
                <span>{weather?.temp}°C</span>
            </div>
        )
    }

    return (
        <div className="editorial-border bg-[#07305B] text-white p-4 flex flex-col justify-between h-full sharp-corners border-none">
            <div className="flex justify-between items-start">
                {getWeatherIcon(weather?.code || 0)}
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Jouy-en-Josas</span>
            </div>
            <div className="mt-4">
                <div className="text-2xl font-serif font-medium">{weather?.temp}°C</div>
                <div className="text-[10px] opacity-80 uppercase tracking-tighter">{weather?.desc}</div>
            </div>
        </div>
    )
}
