"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Users,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { pathwayCourses } from "../../../content/programmes/pathway";
import { pathwayOverview } from "../../../content/programmes/speaking-pathway-overview";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CHOICE_ICONS = [Layers, BookOpen, Users];
const WHY_ICONS = [Sparkles, GraduationCap, Layers, Users, BookOpen, Sparkles];

export default function PathwayOverview({ locale }: { locale: string }) {
  const copy = pathwayOverview[locale] ?? pathwayOverview["zh-CN"];
  const isZh = locale === "zh-CN";

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection
        // TODO(Manus): 体系主视觉，待补 public/images/hero/speaking-pathway.webp
        image="/images/hero/medical-english.webp"
        imageAlt={
          isZh
            ? "医学英语口语与临床沟通课堂现场"
            : "Medical speaking and clinical communication training session"
        }
      >
        <FadeIn>
          <Link
            href="/programmes/medical-english"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white/90 text-sm mb-6 transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            {isZh ? "返回医学英语与沟通" : "Back to Medical English"}
          </Link>
          <p className="eyebrow !text-[#C4922A] mb-4">{copy.heroEyebrow}</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {copy.heroTitle}
          </h1>
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed mb-6">
            {copy.heroLede}
          </p>
          <p className="text-[#C4922A] text-sm font-medium mb-8">
            {copy.heroTagline}
          </p>
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg no-underline"
            style={{ backgroundColor: "var(--brand-accent)" }}
          >
            {copy.coursesTitle}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </HeroSection>

      {/* ═══ Intro ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--ink)" }}
            >
              {copy.introTitle}
            </h2>
            <div className="relative pl-6 border-l-4 border-[var(--brand-primary)]/30 space-y-4">
              {copy.introBody.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--body-text)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Four courses ═══ */}
      <section
        id="courses"
        className="section-padding scroll-mt-24"
        style={{ backgroundColor: "var(--canvas)" }}
      >
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: "var(--ink)" }}
              >
                {copy.coursesTitle}
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {copy.coursesNote}
              </p>
            </div>
          </FadeIn>

          <motion.div
            {...staggerContainer}
            className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto"
          >
            {pathwayCourses.map((course) => {
              const t = course[isZh ? "zh" : "en"];
              return (
                <motion.div key={course.slug} variants={staggerItem}>
                  <Link
                    href={`/programmes/medical-english/speaking-pathway/${course.slug}` as never}
                    className="no-underline block group h-full"
                  >
                    <Card className="h-full border transition-all duration-300 hover:shadow-xl hover:border-[#00438A]/20 hover:-translate-y-1">
                      <CardContent className="p-7 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <span
                            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-white font-bold text-sm shrink-0"
                            style={{ backgroundColor: "var(--brand-primary)" }}
                          >
                            {String(course.order).padStart(2, "0")}
                          </span>
                          <h3
                            className="font-display text-lg font-bold leading-snug pt-1"
                            style={{ color: "var(--ink)" }}
                          >
                            {t.title}
                          </h3>
                        </div>
                        <p
                          className="text-sm leading-relaxed flex-1"
                          style={{ color: "var(--body-text)" }}
                        >
                          {t.tagline}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00438A] mt-5 group-hover:gap-2.5 transition-all">
                          {copy.exploreCourse}
                          <ArrowRight className="w-3.5 h-3.5" />
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

      {/* ═══ Flexible choice ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: "var(--ink)" }}
            >
              {copy.choiceTitle}
            </h2>
          </FadeIn>
          <motion.div {...staggerContainer} className="grid gap-6 md:grid-cols-3">
            {copy.choices.map((item, i) => {
              const Icon = CHOICE_ICONS[i] ?? Layers;
              return (
                <motion.div key={item.title} variants={staggerItem}>
                  <div className="h-full rounded-2xl border border-[var(--subtle-border)] p-7 bg-white">
                    <div className="w-11 h-11 rounded-xl bg-[#00438A]/5 text-[#00438A] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="font-semibold text-base mb-3 leading-snug"
                      style={{ color: "var(--ink)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--body-text)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ Why choose MVG ═══ */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--canvas)" }}
      >
        <div className="container max-w-5xl">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: "var(--ink)" }}
            >
              {copy.whyTitle}
            </h2>
          </FadeIn>
          <motion.div
            {...staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {copy.whyItems.map((item, i) => {
              const Icon = WHY_ICONS[i] ?? Sparkles;
              return (
                <motion.div key={item.title} variants={staggerItem}>
                  <div className="h-full rounded-2xl bg-white border border-[var(--subtle-border)] p-6">
                    <Icon className="w-5 h-5 text-[var(--brand-accent)] mb-3" />
                    <h3
                      className="font-semibold text-base mb-2"
                      style={{ color: "var(--ink)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--body-text)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ Audience ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--ink)" }}
            >
              {copy.audienceTitle}
            </h2>
            <div className="space-y-4">
              {copy.audienceBody.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--body-text)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Journey ═══ */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--canvas)" }}
      >
        <div className="container max-w-4xl">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ color: "var(--ink)" }}
            >
              {copy.journeyTitle}
            </h2>
          </FadeIn>
          <div className="relative pl-8 border-l-2 border-[var(--brand-primary)]/20 space-y-8">
            {copy.journey.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeInUp}
                className="relative"
              >
                <span
                  className="absolute -left-[41px] top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                >
                  {i + 1}
                </span>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--body-text)" }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="container text-center relative z-10 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.finalTitle}
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">{copy.finalBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium transition-all hover:scale-[1.02] no-underline"
                style={{ backgroundColor: "var(--brand-accent)" }}
              >
                {copy.finalCtaPrimary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-white/25 text-white hover:bg-white/10 transition-colors no-underline"
              >
                {copy.finalCtaSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
