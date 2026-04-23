"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, GraduationCap, Stethoscope, BookOpen,
  Award, Users, Globe, Pen, FileText, Microscope, Calendar,
  ShieldCheck, Zap, Heart, UserCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/hero-main-BsXNpmBbMh7ZCgcGCYZvu4.webp";
const MED_ENGLISH_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/programs-medical-english-Lz8prNuFYKH4tDUtNQ4EHv.webp";
const OBSERVERSHIP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/programs-observership-jNseAJMWdiRkTLXketgeju.webp";
const NAVIGATOR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/programs-navigator-UXZP9vJwkNmeq3o6zGtPZw.webp";

export default function HomePage() {
  const t = useTranslations("home");

  const EDUCATION_PROGRAMS = [
    { title: t("medEnglishTitle"), description: t("medEnglishDesc"), href: "/programs/medical-english", icon: BookOpen },
    { title: t("observershipTitle"), description: t("observershipDesc"), href: "/programs/clinical-observership", icon: Stethoscope },
    { title: t("humanitiesTitle"), description: t("humanitiesDesc"), href: "/programs/medical-humanities", icon: Pen },
    { title: t("writingTitle"), description: t("writingDesc"), href: "/programs/medical-writing", icon: FileText },
    { title: t("oetTitle"), description: t("oetDesc"), href: "/programs/medical-english", icon: GraduationCap },
    { title: t("researchTitle"), description: t("researchDesc"), href: "/programs/medical-research", icon: Microscope },
  ];

  const NAVIGATOR_SERVICES = [
    { icon: ShieldCheck, title: t("preventiveCare"), description: t("preventiveCareDesc") },
    { icon: Heart, title: t("criticalCare"), description: t("criticalCareDesc") },
    { icon: Zap, title: t("fastTrack"), description: t("fastTrackDesc") },
    { icon: UserCheck, title: t("tcm"), description: t("tcmDesc") },
  ];

  const SERVICE_VALUES = [
    { icon: Zap, title: t("speed"), description: t("speedDesc") },
    { icon: Award, title: t("professionalism"), description: t("professionalismDesc") },
    { icon: Globe, title: t("costEffectiveness"), description: t("costEffectivenessDesc") },
    { icon: Users, title: t("bilingualSupport"), description: t("bilingualSupportDesc") },
  ];

  const TESTIMONIALS = [
    { quote: t("testimonial1Quote"), name: t("testimonial1Name"), role: t("testimonial1Role"), program: t("testimonialProgram") },
    { quote: t("testimonial2Quote"), name: t("testimonial2Name"), role: t("testimonial2Role"), program: t("testimonialProgram") },
    { quote: t("testimonial3Quote"), name: t("testimonial3Name"), role: t("testimonial3Role"), program: t("testimonialProgram") },
    { quote: t("testimonial4Quote"), name: t("testimonial4Name"), role: t("testimonial4Role"), program: t("testimonialProgram") },
  ];

  const ZIGZAG_PROGRAMS = [
    {
      title: t("medEnglishTitle"),
      description: t("medEnglishDesc"),
      image: MED_ENGLISH_IMG,
      href: "/programs/medical-english",
      icon: BookOpen,
      features: [t("medEnglishF1"), t("medEnglishF2"), t("medEnglishF3"), t("medEnglishF4"), t("medEnglishF5")],
    },
    {
      title: t("observershipTitle"),
      description: t("observershipDesc"),
      image: OBSERVERSHIP_IMG,
      href: "/programs/clinical-observership",
      icon: Stethoscope,
      features: [t("observershipF1"), t("observershipF2"), t("observershipF3")],
    },
  ];

  const TRUST_ORGS = [t("trustOrg1"), t("trustOrg2"), t("trustOrg3"), t("trustOrg4"), t("trustOrg5")];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="International medical professionals collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00438A]/90 via-[#00438A]/70 to-transparent" />
        </div>
        <div className="container relative z-10 py-32 md:py-40">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#C4922A] font-medium text-sm tracking-widest uppercase mb-4"
            >
              {t("heroBadge")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 font-display"
            >
              {t("heroTitle1")}
              <br />
              {t("heroTitle2")}{" "}
              <span className="text-[#C4922A]">{t("heroTitleHighlight")}</span>,
              <br />
              {t("heroTitle3")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl"
            >
              {t("heroDescription")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#00438A] font-semibold rounded-md hover:bg-blue-50 transition-colors no-underline text-sm"
              >
                {t("heroExplore")} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/enquiries-mediversityglobal/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors no-underline text-sm"
              >
                <Calendar className="w-4 h-4" /> {t("heroSchedule")}
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══ MEDICAL EDUCATION — Zigzag ═══ */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} custom={0} className="text-[#C4922A] font-medium text-sm tracking-widest uppercase mb-3">
              {t("eduLabel")}
            </motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-4xl font-semibold text-[#0E0C19] mb-4 font-display">
              {t("eduTitle")}
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-lg text-[#3C3A47] max-w-3xl mx-auto">
              {t("eduDescription")}
            </motion.p>
          </motion.div>

          <div className="space-y-20 md:space-y-28 mb-16">
            {ZIGZAG_PROGRAMS.map((program, idx) => {
              const isReversed = idx % 2 === 1;
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.href}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
                >
                  <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-xl shadow-lg group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2.5 shadow-md">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4 font-display">
                      {program.title}
                    </h3>
                    <p className="text-[#3C3A47] leading-relaxed mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-8 list-none p-0">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#3C3A47]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4922A] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group/link"
                    >
                      {t("learnMore")} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EDUCATION_PROGRAMS.filter((p) => p.icon !== BookOpen && p.icon !== Stethoscope).map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={idx}
                >
                  <Link href={program.href} className="no-underline group block">
                    <div className="bg-white rounded-xl p-6 border border-[#E3E5EC] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-10 h-10 bg-[#00438A]/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#00438A]" />
                      </div>
                      <h4 className="text-base font-semibold text-[#0E0C19] mb-2 group-hover:text-[#00438A] transition-colors font-display">
                        {program.title}
                      </h4>
                      <p className="text-sm text-[#3C3A47] leading-relaxed line-clamp-3">{program.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ MEDICAL NAVIGATOR ═══ */}
      <section className="section-padding bg-[#F5F3EF]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16"
          >
            <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
              <p className="text-[#C4922A] font-medium text-sm tracking-widest uppercase mb-3">
                {t("navLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0E0C19] mb-4 font-display">
                {t("navTitle")}
              </h2>
              <p className="text-[#3C3A47] leading-relaxed mb-6">{t("navDescription")}</p>
              <Link
                href="/programs/medical-navigator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00438A] text-white font-semibold rounded-md hover:bg-[#003066] transition-colors no-underline text-sm"
              >
                {t("navExplore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={NAVIGATOR_IMG}
                  alt="Medical Navigator services"
                  className="w-full h-[300px] md:h-[380px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NAVIGATOR_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#E3E5EC]"
                >
                  <div className="w-10 h-10 bg-[#C4922A]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C4922A]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#0E0C19] mb-2 font-display">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#3C3A47] leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_VALUES.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={idx}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-[#00438A] mx-auto mb-3" />
                  <h5 className="text-sm font-semibold text-[#0E0C19] mb-1">{v.title}</h5>
                  <p className="text-xs text-[#8A889A]">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SUCCESS STORY ═══ */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeInUp} custom={0} className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://mediversityglobal.com/wp-content/uploads/2024/09/Health-Professionals-Team-1-1.png"
                  alt="Medical English Training Case Study"
                  className="w-full h-[300px] md:h-[380px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} custom={1} className="w-full md:w-1/2">
              <p className="text-[#C4922A] font-medium text-sm tracking-widest uppercase mb-3">
                {t("storyLabel")}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0E0C19] mb-4 font-display">
                {t("storyTitle")}
              </h2>
              <p className="text-[#3C3A47] leading-relaxed mb-4">{t("storyDescription")}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-[#F5F3EF] rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#00438A] font-display">85%</div>
                  <p className="text-xs text-[#8A889A] mt-1">{t("storyStat1")}</p>
                </div>
                <div className="text-center bg-[#F5F3EF] rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#00438A] font-display">90%</div>
                  <p className="text-xs text-[#8A889A] mt-1">{t("storyStat2")}</p>
                </div>
                <div className="text-center bg-[#F5F3EF] rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#C4922A] font-display">72.5</div>
                  <p className="text-xs text-[#8A889A] mt-1">{t("storyStat3")}</p>
                </div>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group/link"
              >
                {t("storyCta")} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding bg-[#F5F3EF]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeInUp} custom={0} className="text-[#C4922A] font-medium text-sm tracking-widest uppercase mb-3">
              {t("feedbackLabel")}
            </motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-4xl font-semibold text-[#0E0C19] font-display">
              {t("feedbackTitle")}
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx}
                className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-[#E3E5EC] relative"
              >
                <span className="absolute top-6 left-8 text-6xl font-bold text-[#C4922A]/20 leading-none font-display">
                  &ldquo;
                </span>
                <p className="text-[#3C3A47] leading-relaxed mb-6 relative z-10 italic">{item.quote}</p>
                <div>
                  <p className="font-semibold text-[#0E0C19] text-sm">{item.name}</p>
                  <p className="text-xs text-[#8A889A]">{item.role}</p>
                  <p className="text-xs text-[#C4922A] mt-1">{item.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-12 border-t border-[#E3E5EC]">
        <div className="container">
          <p className="text-center text-sm text-[#8A889A] mb-8">{t("trustBar")}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60">
            {TRUST_ORGS.map((name) => (
              <span key={name} className="text-sm font-medium text-[#3C3A47] tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
