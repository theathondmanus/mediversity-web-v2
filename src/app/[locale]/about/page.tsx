"use client";

import { useTranslations } from "next-intl";
import { Award, Users, Globe, Heart } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn, FadeInGroup } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const VALUES = [
  { icon: Award, key: "excellence" },
  { icon: Users, key: "collaboration" },
  { icon: Globe, key: "international" },
  { icon: Heart, key: "empathy" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/hero-about-aHAtpcDuKQyfvFSnuA69jy.webp"
        imageAlt="International conference room with panoramic city view"
      >
        <FadeIn>
          <p className="eyebrow !text-[#C4922A]">{t("title")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("subtitle")}
          </h1>
        </FadeIn>
      </HeroSection>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <FadeInGroup>
            <FadeIn index={0}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-6">
                {t("mission.title")}
              </h2>
            </FadeIn>
            <FadeIn index={1} as="p" className="text-[#3C3A47] leading-relaxed text-lg">
              {t("mission.content")}
            </FadeIn>
          </FadeInGroup>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628]">
              {t("values.title")}
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.key} index={idx}>
                  <Card className="h-full text-center border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00438A]/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2 text-sm">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-xs text-[#3C3A47]">
                        {t(`values.${value.key}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
