"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface CityTime {
  key: string;
  flag: string;
  timezone: string;
}

const CITIES: CityTime[] = [
  { key: "china", flag: "🇨🇳", timezone: "Asia/Shanghai" },
  { key: "uk", flag: "🇬🇧", timezone: "Europe/London" },
  { key: "canada", flag: "🇨🇦", timezone: "America/Toronto" },
  { key: "australia", flag: "🇦🇺", timezone: "Australia/Sydney" },
];

function formatTime(timezone: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
    hour12: false,
  }).format(new Date());
}

function isWorkingHours(timezone: string): boolean {
  const hour = parseInt(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      timeZone: timezone,
      hour12: false,
    }).format(new Date()),
    10
  );
  return hour >= 9 && hour < 18;
}

export function WorldClock() {
  const t = useTranslations("contact.worldClock");
  const [times, setTimes] = useState<Record<string, string>>({});
  const [working, setWorking] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function tick() {
      const newTimes: Record<string, string> = {};
      const newWorking: Record<string, boolean> = {};
      for (const city of CITIES) {
        newTimes[city.key] = formatTime(city.timezone);
        newWorking[city.key] = isWorkingHours(city.timezone);
      }
      setTimes(newTimes);
      setWorking(newWorking);
    }

    tick();
    const interval = setInterval(tick, 30_000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // SSG placeholder — avoid hydration mismatch
    return (
      <div className="rounded-xl border border-[#E3E5EC] bg-[#F8F9FC] p-5">
        <p className="text-sm text-[#3C3A47]">{t("title")}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#E3E5EC] bg-[#F8F9FC] p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#00438A] mb-3">
        {t("title")}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {CITIES.map((city) => (
          <div
            key={city.key}
            className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-2.5 border border-[#E3E5EC]"
          >
            <span className="text-lg leading-none">{city.flag}</span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[#3C3A47] truncate">{t(city.key)}</p>
              <p className="text-sm font-semibold text-[#0A1628] tabular-nums">
                {times[city.key] ?? "--:--"}
              </p>
            </div>
            {working[city.key] && (
              <span
                className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"
                title={t("online")}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-[#3C3A47]/70 leading-relaxed">
        {t("hint")}
      </p>
    </div>
  );
}
