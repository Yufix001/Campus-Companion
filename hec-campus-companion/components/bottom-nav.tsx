"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Newspaper,
  LogIn,
  Search,
  MessageSquare,
  Calendar,
  Map,
  User,
} from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  // Render nothing on login/admin pages if needed, but for now we'll stick to the requested designs.
  // The designs show different bottom navs for different pages.
  // We'll verify which one to show based on pathname or just make it props-driven if needed.
  // For Landing Page (code.html): Home, About, [Search], News, Login
  // For Portal (code portal.html): Chat, Schedule, [Assistant], Campus, Profile
  // For Chat (code chat.html): Chat, Schedule, Campus, Profile (no center button in design but maybe distinct?)

  // Let's implement switching logic based on simplified route check

  const isPortal =
    pathname.startsWith("/portal") || pathname.startsWith("/chat");

  if (isPortal) {
    return (
      <div className="fixed bottom-6 left-6 right-6 z-50">
        <nav className="glass-nav rounded-2xl p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-between relative">
          <Link
            href="/chat"
            className={`flex flex-col items-center justify-center flex-1 py-3 transition-colors ${pathname === "/chat" ? "text-[#07305B]" : "text-slate-400 hover:text-[#07305B]"}`}
          >
            <MessageSquare
              size={24}
              strokeWidth={pathname === "/chat" ? 2.5 : 2}
            />
            <span className="text-[9px] mt-1 uppercase tracking-wider font-semibold">
              Chat
            </span>
          </Link>

          <Link
            href="/portal/schedule"
            className={`flex flex-col items-center justify-center flex-1 py-3 transition-colors ${pathname === "/portal/schedule" ? "text-[#07305B]" : "text-slate-400 hover:text-[#07305B]"}`}
          >
            <Calendar size={24} />
            <span className="text-[9px] mt-1 uppercase tracking-wider font-semibold">
              Schedule
            </span>
          </Link>

          <div className="relative -top-8 px-2">
            <Link href="/portal">
              <button className="w-14 h-14 bg-[#07305B] rounded-full shadow-lg shadow-[#07305B]/30 flex items-center justify-center text-white border-[3px] border-white transform transition-transform hover:scale-105 active:scale-95">
                <User size={24} />
                {/* Icon choice: Portal main button seems to be Assistant/AutoAwesome in design, but let's stick to consistent user flow. 
                      Actually design shows "AutoAwesome" star icon for Assistant in Portal nav.
                  */}
              </button>
            </Link>
          </div>

          <Link
            href="/portal/campus"
            className="flex flex-col items-center justify-center flex-1 py-3 text-slate-400 hover:text-[#07305B] transition-colors"
          >
            <Map size={24} />
            <span className="text-[9px] mt-1 uppercase tracking-wider font-semibold">
              Campus
            </span>
          </Link>

          <Link
            href="/portal/profile"
            className="flex flex-col items-center justify-center flex-1 py-3 text-slate-400 hover:text-[#07305B] transition-colors"
          >
            <User size={24} />
            <span className="text-[9px] mt-1 uppercase tracking-wider font-semibold">
              Profile
            </span>
          </Link>
        </nav>
      </div>
    );
  }

  // Default Landing Page Nav
  return (
    <div className="fixed bottom-0 left-0 w-full glass-panel border-t border-[#07305B]/5 py-3 px-6 z-[60]">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-[#07305B]"
        >
          <Home size={24} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">
            Home
          </span>
        </Link>

        <button className="flex flex-col items-center gap-1 text-[#07305B]/40 hover:text-[#07305B]">
          <Info size={24} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">
            About
          </span>
        </button>

        <div className="relative -top-6">
          <button className="w-14 h-14 bg-[#07305B] text-white sharp-corners shadow-xl flex items-center justify-center border-4 border-[#F5F5F5]">
            <Search size={24} />
          </button>
        </div>

        <button className="flex flex-col items-center gap-1 text-[#07305B]/40 hover:text-[#07305B]">
          <Newspaper size={24} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">
            News
          </span>
        </button>

        <Link
          href="/portal"
          className="flex flex-col items-center gap-1 text-[#07305B]/40 hover:text-[#07305B]"
        >
          <LogIn size={24} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}
