"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Microscope, Stethoscope, BookOpen,
  BookOpenCheck, Plane, Award, ShieldCheck, Quote,
} from "lucide-react";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

/* ── animation presets ─────────────────────────── */
const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const fadeInSlow = {
  ...fadeIn,
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

/* ── image paths (self-hosted in public/images/home/) ── */
const IMG = {
  hero: "/images/home/hero-editorial.webp",
  programmes: "/images/home/programmes-editorial.webp",
  navigator: "/images/home/navigator-editorial.webp",
  observership: "/images/home/observership-editorial.webp",
  research: "/images/home/research-editorial.webp",
};

/* ── pillar data ────────────────────────────────── */
const PILLARS = [
  { icon: GraduationCap, key: "medicalEnglish", href: "/programmes/medical-english", accent: "#00438A", img: IMG.programmes },
  { icon: Microscope, key: "research", href: "/programmes/research-academic", accent: "#6B21A8", img: IMG.research },
  { icon: Stethoscope, key: "observership", href: "/programmes/observership", accent: "#047857", img: IMG.observership },
  { icon: BookOpen, key: "humanities", href: "/programmes/humanities", accent: "#B45309", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
];

/* ── ME subcategories ───────────────────────────── */
const ME_SUBS = [
  { icon: BookOpenCheck, key: "foundations", courses: 3, href: "/programmes/medical-english#foundations", desc: "foundationsDesc" },
  { icon: Award, key: "oet", courses: 1, href: "/programmes/medical-english#oet", desc: "oetDesc" },
  { icon: ShieldCheck, key: "clinical", courses: 3, href: "/programmes/medical-english#clinical", desc: "clinicalDesc" },
  { icon: Plane, key: "globalMobility", courses: 1, href: "/programmes/medical-english#global-mobility", desc: "globalMobilityDesc" },
];


export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — full-bleed image + overlay
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt="Medical professionals in training"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/75 to-[#0A1628]/30" />
        </div>

        <div className="container relative z-10 py-32 md:py-44">
          <motion.div {...fadeInSlow} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#C4922A]/15 text-[#C4922A] text-[11px] font-semibold rounded-full mb-8 tracking-[0.15em] uppercase border border-[#C4922A]/20">
              {t("hero.badge")}
            </span>
            <h1 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-xl font-light">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C4922A] text-white text-sm font-semibold rounded-lg hover:bg-[#B08324] transition-all hover:shadow-lg hover:shadow-[#C4922A]/20 no-underline"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all no-underline"
              >
                {t("hero.cta2")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* ═══════════════════════════════════════════
          BUSINESS LINE 1 — Programmes (editorial, image left)
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div {...fadeIn} className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#00438A]/10">
                <Image
                  src={IMG.programmes}
                  alt="Medical English classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C4922A]/10 rounded-2xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div {...fadeIn}>
              <span className="inline-block text-[11px] font-semibold text-[#00438A] tracking-[0.15em] uppercase mb-4">
                {t("businessLines.programmesLabel")}
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#0A1628] leading-tight mb-6">
                {t("businessLines.programmes.title")}
              </h2>
              <p className="text-[#3C3A47] text-lg leading-relaxed mb-8">
                {t("businessLines.programmes.desc")}
              </p>
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 text-[#00438A] font-semibold text-sm hover:gap-3 transition-all no-underline group"
              >
                {t("businessLines.programmes.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUSINESS LINE 2 — Medical Navigator (editorial, image right)
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#FAFBFC] overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text (left on desktop) */}
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <span className="inline-block text-[11px] font-semibold text-[#C4922A] tracking-[0.15em] uppercase mb-4">
                {t("businessLines.navigatorLabel")}
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#0A1628] leading-tight mb-6">
                {t("businessLines.navigator.title")}
              </h2>
              <p className="text-[#3C3A47] text-lg leading-relaxed mb-8">
                {t("businessLines.navigator.desc")}
              </p>
              <Link
                href="/medical-navigator"
                className="inline-flex items-center gap-2 text-[#C4922A] font-semibold text-sm hover:gap-3 transition-all no-underline group"
              >
                {t("businessLines.navigator.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Image (right on desktop) */}
            <motion.div {...fadeIn} className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#C4922A]/10">
                <Image
                  src={IMG.navigator}
                  alt="Medical consultant mentoring"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00438A]/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 PILLAR CARDS — with images, not just icons
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <motion.div {...fadeIn} className="max-w-2xl mb-16">
            <span className="inline-block text-[11px] font-semibold text-[#00438A] tracking-[0.15em] uppercase mb-4">
              {t("pillars.label")}
            </span>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#0A1628] leading-tight mb-4">
              {t("pillars.title")}
            </h2>
            <p className="text-[#3C3A47] text-lg leading-relaxed">
              {t("pillars.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.key}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={pillar.href as never} className="no-underline block group">
                    <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E3E5EC] hover:border-transparent hover:shadow-xl transition-all duration-300">
                      {/* Image strip */}
                      <div className="relative aspect-[16/7] overflow-hidden">
                        <Image
                          src={pillar.img}
                          alt={`${pillar.key} programme`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${pillar.accent}15`, color: pillar.accent }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors">
                          {t(`pillars.${pillar.key}.title`)}
                        </h3>
                        <p className="text-sm text-[#3C3A47] leading-relaxed mb-4">
                          {t(`pillars.${pillar.key}.desc`)}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00438A] group-hover:gap-2.5 transition-all">
                          {t("pillars.explore")} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ME SUBCATEGORIES — horizontal editorial sections
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#F0F4F8] to-white">
        <div className="container">
          <motion.div {...fadeIn} className="max-w-2xl mb-16">
            <span className="inline-block px-3.5 py-1 bg-[#00438A]/10 text-[#00438A] text-[11px] font-semibold rounded-full mb-4 tracking-[0.1em] uppercase">
              {t("meSubcategories.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#0A1628] leading-tight mb-4">
              {t("meSubcategories.title")}
            </h2>
            <p className="text-[#3C3A47] text-lg leading-relaxed">
              {t("meSubcategories.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-6">
            {ME_SUBS.map((sub, i) => {
              const Icon = sub.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={sub.key}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={sub.href as never} className="no-underline block group">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 md:p-8 rounded-xl bg-white border border-[#E3E5EC] hover:border-[#00438A]/20 hover:shadow-lg transition-all">
                      <div className="w-14 h-14 rounded-xl bg-[#00438A]/8 flex items-center justify-center shrink-0 group-hover:bg-[#00438A]/15 transition-colors">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-[#0A1628] mb-1 group-hover:text-[#00438A] transition-colors">
                          {t(`meSubcategories.${sub.key}.title`)}
                        </h3>
                        <p className="text-sm text-[#8A889A]">
                          {t(`meSubcategories.${sub.key}.subtitle`)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-medium text-[#C4922A] bg-[#C4922A]/10 px-3 py-1 rounded-full">
                          {sub.courses} {t("meSubcategories.coursesLabel")}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#8A889A] group-hover:text-[#00438A] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FULL-WIDTH EDITORIAL BREAK — observership image
          ═══════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.observership}
            alt="Clinical observership in UK hospital"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0A1628]/70" />
        </div>
        <div className="container relative z-10">
          <motion.div {...fadeInSlow} className="max-w-2xl mx-auto text-center">
            <Quote className="w-10 h-10 text-[#C4922A] mx-auto mb-6 opacity-80" />
            <blockquote className="font-display text-2xl md:text-3xl text-white font-medium leading-snug mb-8 italic">
              {t("editorialQuote.text")}
            </blockquote>
            <div className="text-white/60 text-sm">
              <span className="font-semibold text-white/80">{t("editorialQuote.author")}</span>
              <span className="mx-2">·</span>
              {t("editorialQuote.role")}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS CAROUSEL
          ═══════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ═══════════════════════════════════════════
          TRUST BAR
          ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div {...fadeIn}>
            <p className="text-center text-[11px] text-[#8A889A] uppercase tracking-[0.2em] mb-8 font-medium">
              {t("trust.title")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {["NHS", "University of Cambridge", "GMC", "BMA", "King's College London"].map((name) => (
                <span key={name} className="text-sm font-medium text-[#3C3A47]/50 hover:text-[#3C3A47] transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0A1628]">
        <div className="container">
          <motion.div {...fadeInSlow} className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-white leading-tight mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C4922A] text-white text-sm font-semibold rounded-lg hover:bg-[#B08324] transition-all hover:shadow-lg hover:shadow-[#C4922A]/20 no-underline"
              >
                {t("cta.btn1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-all no-underline"
              >
                {t("cta.btn2")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
