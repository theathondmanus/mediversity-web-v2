"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Microscope, Stethoscope, BookOpen,
} from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FeaturedCourses from "@/components/home/FeaturedCourses";

/* ═══ Animation variants (prototype-matched) ═══ */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ═══ Data ═══ */
const PILLARS = [
  { icon: GraduationCap, key: "medicalEnglish", href: "/programmes/medical-english" },
  { icon: Microscope, key: "research", href: "/programmes/research-academic" },
  { icon: Stethoscope, key: "observership", href: "/programmes/observership" },
  { icon: BookOpen, key: "humanities", href: "/programmes/humanities" },
] as const;

const TRUST_ORGS = ["NHS", "University of Cambridge", "GMC", "BMA", "King's College London"];

export default function HomePage() {
  const t = useTranslations("home");

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

      {/* ═══ BUSINESS LINES — editorial asymmetric layout ═══ */}
      <section className="section-padding bg-white">
        <div className="container">
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

          {/* Medical English Education — editorial left-image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20"
          >
            <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/home/programmes-medical-english.webp"
                  alt="Medical English training session"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
              <p className="eyebrow">{t("businessLines.programmes.eyebrow")}</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4">
                {t("businessLines.programmes.title")}
              </h3>
              <p className="text-[#3C3A47] leading-relaxed mb-6">
                {t("businessLines.programmes.desc")}
              </p>
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group"
              >
                {t("businessLines.programmes.cta")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Medical Navigator — editorial right-image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/home/programmes-navigator.webp"
                  alt="Medical Navigator consultation"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
              <p className="eyebrow">{t("businessLines.navigator.eyebrow")}</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4">
                {t("businessLines.navigator.title")}
              </h3>
              <p className="text-[#3C3A47] leading-relaxed mb-6">
                {t("businessLines.navigator.desc")}
              </p>
              <Link
                href="/medical-navigator"
                className="inline-flex items-center gap-2 text-[#C4922A] font-semibold hover:text-[#A87822] transition-colors no-underline group"
              >
                {t("businessLines.navigator.cta")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4 PILLAR CARDS — on warm canvas ═══ */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
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
                    <div className="bg-white rounded-xl p-6 border border-[#E3E5EC] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
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

      {/* ═══ FEATURED COURSES — from registry ═══ */}
      <FeaturedCourses />

      {/* ═══ SUCCESS STORY — editorial zigzag ═══ */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/home/programmes-observership.webp"
                  alt="Clinical observership programme"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
              <p className="eyebrow">{t("story.eyebrow")}</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4">
                {t("story.title")}
              </h2>
              <p className="text-[#3C3A47] leading-relaxed mb-6">
                {t("story.description")}
              </p>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group"
              >
                {t("story.cta")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsCarousel />

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-12 border-t border-[#E3E5EC]">
        <div className="container">
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
