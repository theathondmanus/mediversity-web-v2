"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight, GraduationCap, Microscope, Stethoscope, BookOpen,
  Globe, BookOpenCheck, Plane, Award, ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const HERO_IMG = "/images/home/hero-main.webp";

// 4 Pillar data
const PILLARS = [
  { icon: GraduationCap, color: "bg-blue-50 text-[#00438A]", key: "medicalEnglish", href: "/programmes/medical-english" },
  { icon: Microscope, color: "bg-purple-50 text-purple-700", key: "research", href: "/programmes/research-academic" },
  { icon: Stethoscope, color: "bg-emerald-50 text-emerald-700", key: "observership", href: "/programmes/observership" },
  { icon: BookOpen, color: "bg-amber-50 text-amber-700", key: "humanities", href: "/programmes/humanities" },
];

// Medical English subcategories
const ME_SUBCATEGORIES = [
  { icon: BookOpenCheck, key: "foundations", courses: 3, href: "/programmes/medical-english#foundations" },
  { icon: Award, key: "oet", courses: 1, href: "/programmes/medical-english#oet" },
  { icon: ShieldCheck, key: "clinical", courses: 3, href: "/programmes/medical-english#clinical" },
  { icon: Plane, key: "globalMobility", courses: 1, href: "/programmes/medical-english#global-mobility" },
];

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#00438A]/70 to-transparent" />
        </div>
        <div className="container relative z-10 py-32 md:py-40">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#C4922A]/20 text-[#C4922A] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              {t("hero.badge")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4922A] text-white font-medium rounded-lg hover:bg-[#B08324] transition-colors no-underline"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                {t("hero.cta2")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Line Split: Medical English & Communication / Medical Navigator */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("businessLines.title")}
            </h2>
            <p className="text-[#3C3A47] max-w-2xl mx-auto">
              {t("businessLines.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <Link href="/programmes" className="no-underline block group">
                <Card className="h-full border-2 border-transparent hover:border-[#00438A]/20 transition-all hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#00438A]/10 flex items-center justify-center mx-auto mb-5">
                      <GraduationCap className="w-8 h-8 text-[#00438A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#00438A] transition-colors">
                      {t("businessLines.programmes.title")}
                    </h3>
                    <p className="text-sm text-[#3C3A47] leading-relaxed">
                      {t("businessLines.programmes.desc")}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Link href="/medical-navigator" className="no-underline block group">
                <Card className="h-full border-2 border-transparent hover:border-[#C4922A]/20 transition-all hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#C4922A]/10 flex items-center justify-center mx-auto mb-5">
                      <Globe className="w-8 h-8 text-[#C4922A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C4922A] transition-colors">
                      {t("businessLines.navigator.title")}
                    </h3>
                    <p className="text-sm text-[#3C3A47] leading-relaxed">
                      {t("businessLines.navigator.desc")}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillar Cards */}
      <section className="section-padding bg-[#FAFBFC]">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("pillars.title")}
            </h2>
            <p className="text-[#3C3A47] max-w-2xl mx-auto">
              {t("pillars.subtitle")}
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.key} {...fadeInUp}>
                  <Link href={pillar.href as never} className="no-underline block group">
                    <Card className="h-full hover:shadow-lg transition-all border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors">
                          {t(`pillars.${pillar.key}.title`)}
                        </h3>
                        <p className="text-sm text-[#3C3A47] leading-relaxed mb-4">
                          {t(`pillars.${pillar.key}.desc`)}
                        </p>
                        <span className="text-xs font-medium text-[#00438A] flex items-center gap-1">
                          {t("pillars.explore")} <ArrowRight className="w-3 h-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Medical English Subcategories */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#00438A]/10 text-[#00438A] text-xs font-semibold rounded-full mb-4">
              {t("meSubcategories.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("meSubcategories.title")}
            </h2>
            <p className="text-[#3C3A47] max-w-2xl mx-auto">
              {t("meSubcategories.subtitle")}
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ME_SUBCATEGORIES.map((sub) => {
              const Icon = sub.icon;
              return (
                <motion.div key={sub.key} {...fadeInUp}>
                  <Link href={sub.href as never} className="no-underline block group">
                    <Card className="h-full hover:shadow-lg transition-all border hover:border-[#00438A]/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-14 h-14 rounded-xl bg-[#00438A]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00438A]/20 transition-colors">
                          <Icon className="w-7 h-7 text-[#00438A]" />
                        </div>
                        <h3 className="font-semibold text-[#0A1628] text-sm mb-1">
                          {t(`meSubcategories.${sub.key}.title`)}
                        </h3>
                        <p className="text-xs text-[#8A889A] mb-3">
                          {t(`meSubcategories.${sub.key}.subtitle`)}
                        </p>
                        <span className="text-xs font-medium text-[#C4922A] flex items-center justify-center gap-1">
                          {sub.courses} {t("meSubcategories.coursesLabel")} <ArrowRight className="w-3 h-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Trust Bar */}
      <section className="py-12 bg-white border-t border-[#E3E5EC]">
        <div className="container">
          <p className="text-center text-xs text-[#8A889A] uppercase tracking-widest mb-6">
            {t("trust.title")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["NHS", "University of Cambridge", "GMC", "BMA", "King's College London"].map((name) => (
              <span key={name} className="text-sm font-medium text-[#3C3A47]">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#0A1628] to-[#00438A]">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4922A] text-white font-medium rounded-lg hover:bg-[#B08324] transition-colors no-underline"
              >
                {t("cta.btn1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors no-underline"
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
