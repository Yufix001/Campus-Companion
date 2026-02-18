"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push("/admin")
            router.refresh()
        }
    }

    const handleSignUp = async () => {
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            setError("Check your email for confirmation link (or check Supabase logs if disabled)")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] font-display">
            <div className="w-full max-w-md p-8 glass-panel sharp-corners bg-white shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-1 w-12 bg-[#07305B] mb-4"></div>
                    <h1 className="font-serif text-2xl text-[#07305B] font-bold">Campus Companion</h1>
                    <p className="text-xs text-[#07305B]/60 uppercase tracking-widest mt-2">Admin Access</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="admin@hec.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-white border-[#07305B]/20 focus:border-[#07305B]"
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
                            className="bg-white border-[#07305B]/20 focus:border-[#07305B]"
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-xs p-2 bg-red-50 border border-red-100">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="bg-[#07305B] text-white mt-4 sharp-corners hover:bg-[#07305B]/90"
                    >
                        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Sign In"}
                    </Button>

                    {/* Optional: Sign Up button for initial setup */}
                    <div className="text-center mt-2">
                        <button
                            type="button"
                            onClick={handleSignUp}
                            disabled={loading}
                            className="text-xs text-[#07305B]/40 hover:text-[#07305B] underline decoration-[#07305B]/20"
                        >
                            Create Account (Dev Only)
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
