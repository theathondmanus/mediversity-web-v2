"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Globe, MapPin, FileCheck, Users, ArrowRight } from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  { icon: MapPin, key: "consultation" },
  { icon: FileCheck, key: "documentation" },
  { icon: Users, key: "matching" },
  { icon: Globe, key: "support" },
];

export default function MedicalNavigatorPage() {
  const t = useTranslations("medicalNavigator");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0A1628] via-[#1a2d4a] to-[#2a1a0a] overflow-hidden">
        <div className="container relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#C4922A]/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#C4922A]" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                {t("title")}
              </h1>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mt-4">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
        <HeroCurve />
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-[#0A1628] mb-4">
              {t("services.title")}
            </h2>
            <p className="text-[#3C3A47] max-w-xl mx-auto">
              {t("services.subtitle")}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.key} index={idx}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#C4922A]/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-[#C4922A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-[#3C3A47]">
                        {t(`services.${service.key}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-[#3C3A47] mb-8 max-w-lg mx-auto">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4922A] text-white font-medium rounded-md hover:bg-[#A87822] transition-colors no-underline shadow-lg shadow-[#C4922A]/25"
            >
              {t("cta.button")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
