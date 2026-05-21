"use client";

import { Stethoscope, Clock, Users, ArrowLeft, Globe2, Briefcase, BookOpen, GraduationCap, Microscope, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
};

type ProjectKey =
  | "internationalClinicalObservership"
  | "seniorVisitingScholar"
  | "shortTermOverseasStudy"
  | "nursingDegreeProgression"
  | "internationalMedicalDoctorate";

const PROJECTS: Array<{
  key: ProjectKey;
  icon: typeof Stethoscope;
  cover: string;
  durationKey: string;
  audienceCount: number;
  contentCount: number;
  advantagesCount: number;
  servicesCount: number;
}> = [
  { key: "internationalClinicalObservership", icon: Stethoscope, cover: "/images/courses/international-clinical-observership.webp", durationKey: "duration1", audienceCount: 3, contentCount: 5, advantagesCount: 5, servicesCount: 5 },
  { key: "seniorVisitingScholar",             icon: Microscope,  cover: "/images/courses/senior-visiting-scholar.webp",            durationKey: "duration2", audienceCount: 4, contentCount: 5, advantagesCount: 5, servicesCount: 5 },
  { key: "shortTermOverseasStudy",            icon: Globe2,      cover: "/images/courses/short-term-overseas-study.webp",          durationKey: "duration3", audienceCount: 4, contentCount: 6, advantagesCount: 5, servicesCount: 5 },
  { key: "nursingDegreeProgression",          icon: GraduationCap,cover:"/images/courses/nursing-degree-progression.webp",         durationKey: "duration4", audienceCount: 4, contentCount: 4, advantagesCount: 5, servicesCount: 5 },
  { key: "internationalMedicalDoctorate",     icon: BookOpen,    cover: "/images/courses/international-medical-doctorate.webp",    durationKey: "duration5", audienceCount: 4, contentCount: 5, advantagesCount: 5, servicesCount: 5 },
];

/* Thumbnail with graceful fallback: shows gradient + icon when image is missing */
function ProjectThumb({ src, alt, Icon, num }: { src: string; alt: string; Icon: typeof Stethoscope; num: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="relative h-32 md:h-40 w-full md:w-64 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#00438A] via-[#3550A0] to-[#C4922A] flex items-center justify-center">
        <Icon className="w-12 h-12 text-white/40" />
        <span className="absolute top-2 right-3 text-2xl font-bold text-white/30 leading-none">{num}</span>
      </div>
    );
  }
  return (
    <div className="relative h-32 md:h-40 w-full md:w-64 shrink-0 rounded-xl overflow-hidden bg-[#0A1628]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 256px"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function ObservershipPage() {
  const t = useTranslations("programmes.observership");
  const tCommon = useTranslations("common");

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection
        image="/images/hero/observership.webp"
        imageAlt="Chinese medical visitor observing a senior surgeon performing a procedure in a modern operating room"
      >
        <Link
          href="/programmes"
          className="inline-flex items-center gap-1.5 text-white/60 text-sm mb-6 hover:text-white/80 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {tCommon("backToProgrammes")}
        </Link>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Stethoscope className="w-7 h-7" />
          </div>
          <p className="eyebrow !text-[#C4922A]">{tCommon("programmesEyebrow")}</p>
        </div>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
          {t("title")}
        </h1>
        <p className="text-white/70 max-w-3xl text-lg md:text-xl leading-relaxed">
          {t("description")}
        </p>
      </HeroSection>

      {/* ═══ Core Value Points ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628]">
              {t("coreValue.title")}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <FadeIn key={i} index={i}>
                <div className="bg-[#F5F3EF] rounded-2xl p-6 h-full border border-[#E3E5EC]">
                  <h3 className="font-display text-base font-bold text-[#0A1628] mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C4922A] shrink-0" />
                    {t(`coreValue.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-[#3C3A47] leading-relaxed">
                    {t(`coreValue.items.${i}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Five Projects ═══ */}
      <section className="section-padding bg-[#F5F3EF]">
        <div className="container max-w-6xl">
          <FadeIn className="text-center mb-14">
            <p className="eyebrow !text-[#C4922A] mb-3">{t("projects.eyebrow")}</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628]">
              {t("projects.title")}
            </h2>
          </FadeIn>

          <div className="space-y-10">
            {PROJECTS.map((p, idx) => {
              const ProjectIcon = p.icon;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <FadeIn key={p.key} index={idx}>
                  <div className="bg-white rounded-2xl border border-[#E3E5EC] overflow-hidden shadow-sm">
                    {/* Header bar */}
                    <div className="bg-gradient-to-r from-[#00438A] to-[#3550A0] px-6 md:px-8 py-5 flex items-start gap-4">
                      <div className="text-3xl font-bold text-[#C4922A] shrink-0 leading-none">{num}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <ProjectIcon className="w-5 h-5 text-white/80 shrink-0" />
                          <h3 className="font-display text-lg md:text-xl font-bold text-white">
                            {t(`projects.items.${p.key}.title`)}
                          </h3>
                        </div>
                        <p className="text-sm text-white/70">
                          {t(`projects.items.${p.key}.subtitle`)}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Thumbnail + meta row */}
                      <div className="flex flex-col md:flex-row gap-5 md:gap-6 mb-6">
                        <ProjectThumb
                          src={p.cover}
                          alt={t(`projects.items.${p.key}.title`)}
                          Icon={ProjectIcon}
                          num={num}
                        />
                        <div className="flex-1 grid sm:grid-cols-2 gap-4 content-start">
                          <div className="flex items-start gap-3 text-sm">
                            <Clock className="w-4 h-4 text-[#C4922A] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[#8A889A] text-xs uppercase tracking-wide mb-0.5">{t("projects.label.duration")}</p>
                              <p className="text-[#0A1628] font-medium">{t(`projects.items.${p.key}.duration`)}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 text-sm">
                            <Users className="w-4 h-4 text-[#C4922A] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[#8A889A] text-xs uppercase tracking-wide mb-0.5">{t("projects.label.audience")}</p>
                              <p className="text-[#0A1628] font-medium">
                                {Array.from({ length: p.audienceCount }, (_, i) => t(`projects.items.${p.key}.audience.${i}`)).join(" · ")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Content */}
                        <div>
                          <h4 className="text-sm font-bold text-[#0A1628] mb-3 pb-2 border-b border-[#E3E5EC]">{t("projects.label.content")}</h4>
                          <ul className="space-y-2">
                            {Array.from({ length: p.contentCount }, (_, i) => (
                              <li key={i} className="text-sm text-[#3C3A47] flex items-start gap-2">
                                <span className="text-[#C4922A] mt-0.5">·</span>
                                <span>{t(`projects.items.${p.key}.content.${i}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Advantages */}
                        <div>
                          <h4 className="text-sm font-bold text-[#0A1628] mb-3 pb-2 border-b border-[#E3E5EC]">{t("projects.label.advantages")}</h4>
                          <ul className="space-y-2">
                            {Array.from({ length: p.advantagesCount }, (_, i) => (
                              <li key={i} className="text-sm text-[#3C3A47] flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#C4922A] mt-0.5 shrink-0" />
                                <span>{t(`projects.items.${p.key}.advantages.${i}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Services */}
                        <div>
                          <h4 className="text-sm font-bold text-[#0A1628] mb-3 pb-2 border-b border-[#E3E5EC]">{t("projects.label.services")}</h4>
                          <ul className="space-y-2">
                            {Array.from({ length: p.servicesCount }, (_, i) => (
                              <li key={i} className="text-sm text-[#3C3A47] flex items-start gap-2">
                                <Briefcase className="w-3.5 h-3.5 text-[#8A889A] mt-0.5 shrink-0" />
                                <span>{t(`projects.items.${p.key}.services.${i}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Bottom CTA ═══ */}
      <section className="relative py-16 bg-[#0A1628] overflow-hidden">
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("bottomCta.title")}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              {t("bottomCta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4922A] text-white rounded-lg font-medium hover:bg-[#A87822] transition-colors no-underline"
              >
                {tCommon("pillarBottomCtaBook")}
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors no-underline"
              >
                {tCommon("pillarBottomCtaBack")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
