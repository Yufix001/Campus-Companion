"use client"
// Deployment trigger: Refactored Auth Flow v2

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowRight } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState<"email" | "password">("email")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const router = useRouter()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)

        if (!email) {
            setError("Please enter your email address.")
            return
        }

        // Admin Access Logic
        if (email.toLowerCase() === "admin@hec.edu") {
            setStep("password")
            return
        }

        // Student Access Logic (Magic Link)
        setLoading(true)
        const { error: otpError } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        })

        if (otpError) {
            setError(otpError.message)
        } else {
            setSuccess("Check your email for the magic link to sign in!")
        }
        setLoading(false)
    }

    const handleAdminLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else if (data.session) {
            router.push("/admin")
            router.refresh()
        }
    }

    const handleBack = () => {
        setStep("email")
        setError(null)
        setPassword("")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] font-display">
            <div className="w-full max-w-md p-8 glass-panel sharp-corners bg-white shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-1 w-12 bg-[#07305B] mb-4"></div>
                    <h1 className="font-serif text-2xl text-[#07305B] font-bold">Campus Companion</h1>
                    <p className="text-xs text-[#07305B]/60 uppercase tracking-widest mt-2">
                        {step === "email" ? "Student Access" : "Admin Authentication"}
                    </p>
                </div>

                {step === "email" ? (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="student@hec.edu"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-white border-[#07305B]/20 focus:border-[#07305B]"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-xs p-3 bg-red-50 border border-red-100 rounded-sm">
                                <span className="font-bold block mb-1">Error</span>
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="text-green-600 text-xs p-3 bg-green-50 border border-green-100 rounded-sm">
                                <span className="font-bold block mb-1">Link Sent</span>
                                {success}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading || !!success}
                            className="bg-[#07305B] text-white mt-4 sharp-corners hover:bg-[#07305B]/90 h-12 text-sm font-bold uppercase tracking-widest"
                        >
                            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Continue"}
                        </Button>

                        <div className="mt-4 text-center">
                            <p className="text-xs text-[#07305B]/60">
                                New here? <button type="button" className="underline font-semibold hover:text-[#07305B]" onClick={() => setError("Please use the Register flow or contact support (Demo only)")}>Create an account.</button>
                            </p>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleAdminLogin} className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Admin Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                disabled
                                className="bg-gray-50 border-[#07305B]/10 text-[#07305B]/60"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoFocus
                                className="bg-white border-[#07305B]/20 focus:border-[#07305B]"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-xs p-3 bg-red-50 border border-red-100 rounded-sm">
                                <span className="font-bold block mb-1">Access Denied</span>
                                {error}
                            </div>
                        )}

                        <div className="flex gap-3 mt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleBack}
                                className="flex-1 sharp-corners border-[#07305B]/20 text-[#07305B]"
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="flex-[2] bg-[#07305B] text-white sharp-corners hover:bg-[#07305B]/90 font-bold uppercase tracking-widest"
                            >
                                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Sign In"}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
