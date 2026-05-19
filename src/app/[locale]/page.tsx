"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Microscope, Stethoscope, BookOpen,
} from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import {
  WaveDivider,
  DotPattern,
  CornerAccent,
  FloatingShape,
  StatBanner,
} from "@/components/ui/section-decorations";

/* ═══ Animation variants (prototype-matched) ═══ */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ═══ Data ═══ */
const PILLARS = [
  { icon: GraduationCap, key: "medicalEnglish", href: "/programmes/medical-english" },
  { icon: Microscope, key: "research", href: "/programmes/research-academic" },
  { icon: Stethoscope, key: "observership", href: "/programmes/observership" },
  { icon: BookOpen, key: "humanities", href: "/programmes/humanities" },
] as const;

const TRUST_ORGS = ["NHS", "University of Cambridge", "GMC", "BMA", "King's College London"];

const STATS_ZH = [
  { value: "10+", label: "年行业经验" },
  { value: "1000+", label: "学员成功案例" },
  { value: "50+", label: "合作医疗机构" },
  { value: "95%", label: "学员满意度" },
];

const STATS_EN = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Successful Students" },
  { value: "50+", label: "Partner Institutions" },
  { value: "95%", label: "Student Satisfaction" },
];

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      {/* ═══ HERO — full-bleed image + gradient overlay + S-curve ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero-main.webp"
            alt="Medical professionals in a modern teaching environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#00438A]/70 to-transparent" />
        </div>

        {/* Decorative floating shapes in hero */}
        <FloatingShape className="top-20 right-[15%] hidden lg:block" shape="ring" color="#C4922A" size={160} opacity={0.06} />
        <FloatingShape className="bottom-32 right-[8%] hidden lg:block" shape="cross" color="#FFFFFF" size={80} opacity={0.04} />

        <div className="container relative z-10 py-32 md:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="inline-block px-4 py-1.5 bg-[#C4922A]/20 text-[#C4922A] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase"
            >
              {t("hero.badge")}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="font-display text-[clamp(1.75rem,7vw,3.5rem)] font-bold text-white leading-[1.15] mb-6 whitespace-nowrap"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4922A] text-white font-medium rounded-md hover:bg-[#A87822] transition-colors no-underline shadow-lg shadow-[#C4922A]/25"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-medium rounded-md hover:bg-white/10 transition-colors no-underline"
              >
                {t("hero.cta2")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <HeroCurve />
      </section>

      {/* ═══ STAT BANNER — data density layer ═══ */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        <DotPattern opacity={0.03} />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeInUp} custom={0}>
              <StatBanner stats={locale === "zh-CN" ? STATS_ZH : STATS_EN} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wave transition: white → white (subtle) */}
      <WaveDivider fromColor="#FFFFFF" toColor="#FFFFFF" />

      {/* ═══ BUSINESS LINES — editorial asymmetric layout ═══ */}
      <section className="relative section-padding bg-white overflow-hidden">
        {/* Corner accents for visual framing */}
        <CornerAccent position="top-left" color="#00438A" size={100} />
        <CornerAccent position="bottom-right" color="#C4922A" size={80} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} custom={0} className="eyebrow">
              {t("businessLines.eyebrow")}
            </motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-[#0E0C19] mb-4">
              {t("businessLines.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-[#3C3A47] max-w-2xl mx-auto text-lg">
              {t("businessLines.subtitle")}
            </motion.p>
          </motion.div>

          {/* Medical English Education — editorial left-image with stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20"
          >
            <motion.div variants={fadeInLeft} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/home/programmes-medical-english.webp"
                  alt="Medical English training session"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00438A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="w-full md:w-1/2">
              <p className="eyebrow">{t("businessLines.programmes.eyebrow")}</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4">
                {t("businessLines.programmes.title")}
              </h3>
              <p className="text-[#3C3A47] leading-relaxed mb-6">
                {t("businessLines.programmes.desc")}
              </p>
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group/link"
              >
                {t("businessLines.programmes.cta")} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Medical Navigator — editorial right-image with stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeInRight} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/home/programmes-navigator.webp"
                  alt="Medical Navigator consultation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C4922A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
            <motion.div variants={fadeInLeft} className="w-full md:w-1/2">
              <p className="eyebrow">{t("businessLines.navigator.eyebrow")}</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4">
                {t("businessLines.navigator.title")}
              </h3>
              <p className="text-[#3C3A47] leading-relaxed mb-6">
                {t("businessLines.navigator.desc")}
              </p>
              <Link
                href="/medical-navigator"
                className="inline-flex items-center gap-2 text-[#C4922A] font-semibold hover:text-[#A87822] transition-colors no-underline group/link"
              >
                {t("businessLines.navigator.cta")} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wave transition: white → canvas */}
      <WaveDivider fromColor="#FFFFFF" toColor="#F5F3EF" />

      {/* ═══ 4 PILLAR CARDS — on warm canvas with dot pattern ═══ */}
      <section className="relative section-padding overflow-hidden" style={{ backgroundColor: "#F5F3EF" }}>
        <DotPattern opacity={0.03} />
        <FloatingShape className="top-10 left-[5%] hidden md:block" shape="circle" color="#C4922A" size={100} opacity={0.03} />
        <FloatingShape className="bottom-16 right-[8%] hidden md:block" shape="ring" color="#00438A" size={140} opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeInUp} custom={0} className="eyebrow">{t("pillars.eyebrow")}</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-[#0E0C19]">
              {t("pillars.title")}
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={idx}
                >
                  <Link href={pillar.href as never} className="no-underline block group">
                    <div className="bg-white rounded-xl p-6 border border-[#E3E5EC] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                      {/* Subtle accent bar at top */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00438A] to-[#00438A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="w-12 h-12 rounded-lg bg-[#00438A]/10 flex items-center justify-center mb-4 group-hover:bg-[#00438A]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0E0C19] mb-2 group-hover:text-[#00438A] transition-colors">
                        {t(`pillars.${pillar.key}.title`)}
                      </h3>
                      <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 flex-1">
                        {t(`pillars.${pillar.key}.desc`)}
                      </p>
                      <span className="text-xs font-medium text-[#00438A] flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("pillars.explore")} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wave transition: canvas → white */}
      <WaveDivider fromColor="#F5F3EF" toColor="#FFFFFF" />

      {/* ═══ FEATURED COURSES — from registry ═══ */}
      <FeaturedCourses />

      {/* Wave transition: white → white (visual breathing room) */}
      <WaveDivider fromColor="#FFFFFF" toColor="#FFFFFF" />

      {/* ═══ CASE STUDY HIGHLIGHT — data-driven story with metrics ═══ */}
      <CaseStudyHighlight />

      {/* Wave transition: white → canvas */}
      <WaveDivider fromColor="#FFFFFF" toColor="#F5F3EF" />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsCarousel />

      {/* ═══ TRUST BAR — with subtle background texture ═══ */}
      <section className="relative py-12 border-t border-[#E3E5EC] overflow-hidden">
        <DotPattern opacity={0.02} />
        <div className="container relative z-10">
          <p className="text-center text-sm text-[#8A889A] mb-8">{t("trust.title")}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60">
            {TRUST_ORGS.map((name) => (
              <span key={name} className="text-sm font-medium text-[#3C3A47] tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA section removed — duplicate of Footer CTA banner (Fix 4) */}
    </>
  );
}
