"use client";

import { useTranslations } from "next-intl";
import { Newspaper } from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import { FadeIn } from "@/components/ui/fade-in";

export default function InsightsPage() {
  const t = useTranslations("insights");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0A1628] to-[#00438A] overflow-hidden">
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
        <HeroCurve />
      </section>

      {/* Empty state */}
      <section className="section-padding bg-white">
        <div className="container">
          <FadeIn className="max-w-2xl mx-auto text-center py-16">
            <Newspaper className="w-16 h-16 text-[#E3E5EC] mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-[#0A1628] mb-3">
              {t("empty.title")}
            </h2>
            <p className="text-[#8A889A]">
              {t("empty.desc")}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
