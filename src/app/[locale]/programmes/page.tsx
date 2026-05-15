"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Microscope, Stethoscope, BookOpen } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const PILLARS = [
  { icon: GraduationCap, color: "bg-blue-50 text-[#00438A]", key: "medicalEnglish", href: "/programmes/medical-english", activeCourses: 5 },
  { icon: Microscope, color: "bg-purple-50 text-purple-700", key: "research", href: "/programmes/research-academic", activeCourses: 2 },
  { icon: Stethoscope, color: "bg-emerald-50 text-emerald-700", key: "observership", href: "/programmes/observership", activeCourses: 3 },
  { icon: BookOpen, color: "bg-amber-50 text-amber-700", key: "humanities", href: "/programmes/humanities", activeCourses: 1 },
];

export default function ProgrammesHubPage() {
  const t = useTranslations("programmesHub");

  return (
    <>
      <HeroSection
        image="/images/hero/programmes.webp"
        imageAlt="Grand medical university library with anatomical models and modern technology"
      >
        <motion.div {...fadeInUp}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>
      </HeroSection>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.key} {...fadeInUp}>
                  <Link href={pillar.href as never} className="no-underline block group">
                    <Card className="h-full hover:shadow-lg transition-all border-2 border-transparent hover:border-[#00438A]/10">
                      <CardContent className="p-8">
                        <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h2 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors">
                          {t(`pillars.${pillar.key}.title`)}
                        </h2>
                        <p className="text-sm text-[#3C3A47] leading-relaxed mb-4">
                          {t(`pillars.${pillar.key}.desc`)}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#8A889A]">
                            {pillar.activeCourses} {t("activeCourses")}
                          </span>
                          <span className="text-sm font-medium text-[#00438A] flex items-center gap-1 group-hover:gap-2 transition-all">
                            {t("explore")} <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
