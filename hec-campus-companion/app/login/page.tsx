"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const router = useRouter()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        if (isLogin) {
            // LOGIN FLOW
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                setError(error.message)
                setLoading(false)
            } else if (data.session) {
                // Force Student Portal for all users here.
                // Admin users should use /admin/login, but if they login here, they go to portal too.
                router.push("/portal")
                router.refresh()
            }
        } else {
            // REGISTER FLOW
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            })

            if (error) {
                setError(error.message)
                setLoading(false)
            } else if (data.session) {
                router.push("/portal")
                router.refresh()
            } else if (data.user && !data.session) {
                setSuccess("Account created! Please check your email to confirm.")
                setLoading(false)
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] font-display">
            <div className="w-full max-w-md p-8 glass-panel sharp-corners bg-white shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-1 w-12 bg-[#07305B] mb-4"></div>
                    <h1 className="font-serif text-2xl text-[#07305B] font-bold">Campus Companion</h1>
                    <p className="text-xs text-[#07305B]/60 uppercase tracking-widest mt-2">Student Portal</p>
                </div>

                <div className="flex w-full mb-6 border-b border-[#07305B]/10">
                    <button
                        onClick={() => { setIsLogin(true); setError(null); setSuccess(null); }}
                        className={`flex-1 pb-2 text-sm font-bold uppercase tracking-wider transition-colors ${isLogin ? 'text-[#07305B] border-b-2 border-[#07305B]' : 'text-[#07305B]/40 hover:text-[#07305B]/60'}`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => { setIsLogin(false); setError(null); setSuccess(null); }}
                        className={`flex-1 pb-2 text-sm font-bold uppercase tracking-wider transition-colors ${!isLogin ? 'text-[#07305B] border-b-2 border-[#07305B]' : 'text-[#07305B]/40 hover:text-[#07305B]/60'}`}
                    >
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">HEC Email</Label>
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
                        <div className="text-red-500 text-xs p-3 bg-red-50 border border-red-100 rounded-sm">
                            <span className="font-bold block mb-1">Error</span>
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="text-green-600 text-xs p-3 bg-green-50 border border-green-100 rounded-sm">
                            <span className="font-bold block mb-1">Success</span>
                            {success}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="bg-[#07305B] text-white mt-4 sharp-corners hover:bg-[#07305B]/90 h-12 text-sm font-bold uppercase tracking-widest"
                    >
                        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : (isLogin ? "Access Portal" : "Create Account")}
                    </Button>
                </form>
            </div>
        </div>
    )
}
