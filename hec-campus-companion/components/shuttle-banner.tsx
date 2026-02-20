"use client";

import { Bus, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function ShuttleBanner() {
  const [nextShuttle, setNextShuttle] = useState<{
    time: string;
    dest: string;
  } | null>(null);

  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...

      // Define Schedule (Minutes from midnight)
      // Morning: Massy (07:10=430, 08:20=500), PdS (07:15=435, 08:15=495, 08:35=515)
      // Evening: PdS (16:50=1010), Massy (17:35=1055)

      // Simplified logic based on request
      // If Weekend (0 or 6), maybe show no service or specific logic? Request says Mon-Fri.
      if (day === 0 || day === 6) {
        setNextShuttle({ time: "Monday", dest: "Weekend Service" });
        return;
      }

      const morningCutoff = 9 * 60; // 09:00

      // Schedules formatted as { time: string, minutes: number, dest: string }
      const morningShuttles = [
        { time: "07:10", minutes: 430, dest: "Massy" },
        { time: "07:15", minutes: 435, dest: "Pont de Sèvres" },
        { time: "08:15", minutes: 495, dest: "Pont de Sèvres" },
        { time: "08:20", minutes: 500, dest: "Massy" },
        { time: "08:35", minutes: 515, dest: "Pont de Sèvres" },
      ];

      const eveningShuttles = [
        { time: "16:50", minutes: 1010, dest: "Pont de Sèvres" },
        { time: "17:35", minutes: 1055, dest: "Massy" },
      ];

      let upcoming = null;

      if (currentTime < morningCutoff) {
        upcoming = morningShuttles.find((s) => s.minutes > currentTime);
      }

      // If no morning match or it's past morning, check evening
      if (!upcoming) {
        upcoming = eveningShuttles.find((s) => s.minutes > currentTime);
      }

      // If still no upcoming (late night), maybe show first morning next day?
      if (!upcoming) {
        setNextShuttle({ time: "07:10", dest: "Massy (Tomorrow)" });
      } else {
        setNextShuttle({ time: upcoming.time, dest: upcoming.dest });
      }
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (!nextShuttle) return null;

  return (
    <div className="w-full bg-[#07305B] text-white rounded-xl shadow-sm overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between p-4 mb-6">
      <div className="flex items-center gap-4 mb-2 sm:mb-0">
        <div className="bg-white/10 p-2 rounded-full">
          <Bus className="text-accent" size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
            Next Shuttle
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-serif font-medium">
              {nextShuttle.time}
            </span>
            <span className="text-sm text-white/80">
              • To {nextShuttle.dest}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-white/40 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
        <Phone size={12} />
        <span>SAVAC Emergency: 01 30 52 88 35</span>
      </div>
    </div>
  );
}
