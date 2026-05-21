"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Microscope,
  Stethoscope,
  BookOpen,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  WaveDivider,
  DotPattern,
  FloatingShape,
  CornerAccent,
} from "@/components/ui/section-decorations";
import { getPublishedByCategory } from "../../../../content/programmes/registry";

/* ── Animation presets ── */
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ── Pillar data ── */
const PILLARS = [
  {
    icon: GraduationCap,
    iconBg: "bg-blue-50",
    iconColor: "text-[#00438A]",
    accentColor: "#00438A",
    key: "medicalEnglish",
    category: "medical-english",
    href: "/programmes/medical-english",
  },
  {
    icon: Microscope,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    accentColor: "#7e22ce",
    key: "research",
    category: "research-academic",
    href: "/programmes/research-academic",
  },
  {
    icon: Stethoscope,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    accentColor: "#047857",
    key: "observership",
    category: "observership",
    href: "/programmes/observership",
  },
  {
    icon: BookOpen,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    accentColor: "#b45309",
    key: "humanities",
    category: "humanities",
    href: "/programmes/humanities",
  },
];

export default function ProgrammesHubPage() {
  const t = useTranslations("programmesHub");
  const locale = useLocale();

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection
        image="/images/hero/programmes.webp"
        imageAlt="Grand medical university library with anatomical models and modern technology"
      >
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="eyebrow !text-[#C4922A] mb-4">{t("heroEyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("subtitle")}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
            从医学英语到临床观摩，从学术研究到职业发展，系统化的培训体系助力您的国际化成长。
          </p>
        </motion.div>
      </HeroSection>

      {/* ═══ Philosophy — 4 core principles (Issue #72: pipeline infographic) ═══ */}
      <section className="pt-16 md:pt-20 pb-10 md:pb-14 bg-white relative overflow-hidden">
        <DotPattern opacity={0.02} />
        <div className="container relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <p className="eyebrow">{t("philosophy.eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("philosophy.title")}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed">
              {t("philosophy.intro")}
            </p>
          </motion.div>

          {/* Pipeline / Flow Visualization */}
          <motion.div
            {...staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Desktop: horizontal pipeline (Issue #79: removed bar, added chevron connectors) */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-4 gap-6">
                {(t.raw("philosophy.items") as Array<{ key: string; title: string; desc: string }>).map(
                  (item, idx) => {
                    const icons = [GraduationCap, Stethoscope, BookOpen, Microscope];
                    const Icon = icons[idx] || GraduationCap;
                    return (
                      <motion.div key={item.key} variants={staggerItem} className="text-center relative">
                        {/* Chevron connector between nodes (not on last item) */}
                        {idx < 3 && (
                          <div className="absolute top-[52px] -right-[18px] z-30 text-[#00438A]/25">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                        {/* Numbered circle node */}
                        <div className="relative mx-auto mb-6">
                          <div className="w-[104px] h-[104px] rounded-full bg-gradient-to-br from-[#00438A]/5 to-[#C4922A]/5 border-2 border-[#00438A]/15 flex items-center justify-center mx-auto relative z-10">
                            <Icon className="w-10 h-10 text-[#00438A]" />
                          </div>
                          {/* Step number badge */}
                          <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#C4922A] text-white text-xs font-bold flex items-center justify-center shadow-md z-20">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-display text-base font-bold text-[#0A1628] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#3C3A47] leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  },
                )}
              </div>

              {/* Final destination arrow */}
              <motion.div {...fadeInUp} className="text-center mt-10">
                <div className="inline-flex items-center gap-3 bg-[#00438A]/5 border border-[#00438A]/15 rounded-full px-6 py-3">
                  <ArrowRight className="w-5 h-5 text-[#C4922A]" />
                  <span className="text-sm font-semibold text-[#00438A]">
                    {locale === "zh-CN" ? "培养国际化医疗专业能力" : "Building Global Medical Competence"}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Mobile/Tablet: vertical timeline */}
            <div className="lg:hidden relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00438A] via-[#3550A0] to-[#C4922A]" />

              <div className="space-y-8">
                {(t.raw("philosophy.items") as Array<{ key: string; title: string; desc: string }>).map(
                  (item, idx) => {
                    const icons = [GraduationCap, Stethoscope, BookOpen, Microscope];
                    const Icon = icons[idx] || GraduationCap;
                    return (
                      <motion.div key={item.key} variants={staggerItem} className="relative">
                        {/* Node on timeline */}
                        <div className="absolute -left-8 top-0 w-9 h-9 rounded-full bg-white border-2 border-[#00438A] flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold text-[#00438A]">{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-[#E3E5EC] shadow-sm ml-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-5 h-5 text-[#00438A] shrink-0" />
                            <h3 className="font-display text-base font-bold text-[#0A1628]">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm text-[#3C3A47] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  },
                )}
              </div>

              {/* Final destination */}
              <motion.div {...fadeInUp} className="relative mt-8">
                <div className="absolute -left-8 top-0 w-9 h-9 rounded-full bg-[#C4922A] flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div className="ml-4 inline-flex items-center gap-2 bg-[#00438A]/5 border border-[#00438A]/15 rounded-full px-5 py-2.5">
                  <span className="text-sm font-semibold text-[#00438A]">
                    {locale === "zh-CN" ? "培养国际化医疗专业能力" : "Building Global Medical Competence"}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Pillar Cards ═══ */}
      <section className="py-10 md:py-14 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <DotPattern opacity={0.03} />
        <FloatingShape
          className="top-12 -right-8 hidden lg:block"
          shape="ring"
          color="#00438A"
          size={160}
          opacity={0.04}
        />
        <FloatingShape
          className="-bottom-6 -left-10 hidden lg:block"
          shape="cross"
          color="#C4922A"
          size={100}
          opacity={0.04}
        />

        <div className="container relative z-10">
          {/* Section header */}
          <motion.div {...fadeInUp} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow">{t("pillarsSection.eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("pillarsSection.title")}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed">
              {t("pillarsSection.desc")}
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.key} variants={staggerItem}>
                  <Link href={pillar.href as never} className="no-underline block group">
                    <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                        style={{ backgroundColor: pillar.accentColor }}
                      />
                      <CardContent className="p-8 md:p-10">
                        <div className="flex items-start gap-5">
                          {/* Icon with decorative background */}
                          <div className="relative flex-shrink-0">
                            <div
                              className={`w-16 h-16 rounded-2xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                            >
                              <Icon className="w-8 h-8" />
                            </div>
                            {/* Subtle ring behind icon */}
                            <div
                              className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                border: `1px solid ${pillar.accentColor}`,
                                opacity: 0,
                              }}
                            />
                          </div>

                          {/* Text content */}
                          <div className="flex-1 min-w-0">
                            <h2 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors">
                              {t(`pillars.${pillar.key}.title`)}
                            </h2>
                            <p className="text-sm text-[#3C3A47] leading-relaxed mb-5">
                              {t(`pillars.${pillar.key}.desc`)}
                            </p>

                            {/* Stats row · 只显示在授课程数, 没有在授时显示标签 */}
                            <div className="flex items-center gap-6 mb-5">
                              {getPublishedByCategory(pillar.category).length > 0 ? (
                                <div>
                                  <span className="text-2xl font-bold text-[#00438A]">
                                    {getPublishedByCategory(pillar.category).length}
                                  </span>
                                  <span className="text-xs text-[#8A889A] ml-1.5">
                                    {t("activeCourses")}
                                  </span>
                                </div>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4922A]/10 text-[#C4922A] text-xs font-medium">
                                  {t("openingSoon")}
                                </span>
                              )}
                            </div>

                            {/* CTA */}
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00438A] group-hover:gap-2.5 transition-all duration-300">
                              {t("explore")}
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ Wave transition ═══ */}
      <WaveDivider fromColor="#FFFFFF" toColor="#F5F3EF" />

      {/* ═══ Bottom CTA ═══ */}
      <section className="py-10 md:py-14 bg-[#F5F3EF] relative overflow-hidden">
        <CornerAccent position="top-right" color="#00438A" size={100} />
        <CornerAccent position="bottom-left" color="#C4922A" size={80} />

        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
              不确定从哪里开始？
            </h2>
            <p className="text-[#3C3A47] leading-relaxed mb-8">
              我们的课程顾问可以根据您的职业背景和发展目标，为您推荐最适合的学习路径。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00438A] text-white rounded-lg font-medium hover:bg-[#003066] transition-colors no-underline"
              >
                预约免费咨询
              </Link>
              <Link
                href="/medical-navigator"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#00438A] text-[#00438A] rounded-lg font-medium hover:bg-[#00438A]/5 transition-colors no-underline"
              >
                了解医疗导航
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
