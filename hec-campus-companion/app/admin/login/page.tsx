"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Admin Security Check: Only allow admin email
    if (email.toLowerCase() !== "admin@hec.edu") {
      setError("Access Denied: This portal is restricted to administrators.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07305B] font-display">
      <div className="w-full max-w-md p-8 glass-panel sharp-corners bg-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>

        <div className="flex flex-col items-center mb-8">
          <ShieldCheck
            className="w-12 h-12 text-[#07305B] mb-4 opacity-80"
            strokeWidth={1.5}
          />
          <h1 className="font-serif text-2xl text-[#07305B] font-bold">
            Admin Dashboard
          </h1>
          <p className="text-xs text-[#07305B]/60 uppercase tracking-widest mt-2">
            Restricted Access
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Admin Email</Label>
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
            <div className="text-red-500 text-xs p-3 bg-red-50 border border-red-100 rounded-sm">
              <span className="font-bold block mb-1">Security Alert</span>
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="bg-[#07305B] text-white mt-4 sharp-corners hover:bg-[#07305B]/90 h-12 text-sm font-bold uppercase tracking-widest"
          >
            {loading ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              "Authenticate"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
