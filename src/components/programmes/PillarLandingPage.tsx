"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, type LucideIcon } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  WaveDivider,
  DotPattern,
  FloatingShape,
  CornerAccent,
} from "@/components/ui/section-decorations";

export interface CourseItem {
  titleKey: string;
  status: "active" | "future";
  /** If set, the card links to /programmes/{category}/{slug} */
  slug?: string;
  /** Cover image for the card */
  cover?: string;
  /** Alt text for the cover image */
  coverAlt?: string;
  /** Short description for the card */
  description?: string;
}

export interface SubCategory {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  courses: CourseItem[];
}

interface PillarLandingPageProps {
  /** The i18n namespace key, e.g. "medicalEnglish" */
  pillarKey: string;
  /** The URL category slug, e.g. "medical-english" */
  categorySlug: string;
  icon: LucideIcon;
  color: string;
  subcategories: SubCategory[];
  /** Optional hero background image URL */
  heroImage?: string;
  /** Alt text for the hero image */
  heroImageAlt?: string;
}

/* ── Animation presets ── */
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

export default function PillarLandingPage({
  pillarKey,
  categorySlug,
  icon: PillarIcon,
  color,
  subcategories,
  heroImage,
  heroImageAlt,
}: PillarLandingPageProps) {
  const t = useTranslations(`programmes.${pillarKey}`);
  const tCommon = useTranslations("common");

  const activeCourses = subcategories.flatMap((sub) =>
    sub.courses.filter((c) => c.status === "active"),
  );
  const futureCourses = subcategories.flatMap((sub) =>
    sub.courses.filter((c) => c.status === "future"),
  );

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection image={heroImage} imageAlt={heroImageAlt}>
        <Link
          href="/programmes"
          className="inline-flex items-center gap-1.5 text-white/60 text-sm mb-6 hover:text-white/80 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {tCommon("backToProgrammes")}
        </Link>
        <div className="flex items-center gap-4 mb-5">
          <div
            className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}
          >
            <PillarIcon className="w-7 h-7" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t("title")}
          </h1>
        </div>
        <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
          {t("description")}
        </p>
        {/* Stats */}
        <div className="flex gap-8 mt-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#C4922A]">
              {activeCourses.length}
            </p>
            <p className="text-xs text-white/60">{tCommon("activeCourses")}</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white/40">
              {futureCourses.length}
            </p>
            <p className="text-xs text-white/60">{tCommon("futureCourses")}</p>
          </div>
        </div>
      </HeroSection>

      {/* ═══ Subcategories ═══ */}
      {subcategories
        .filter((sub) => sub.courses.some((c) => c.status === "active"))
        .map((sub, idx) => {
        const Icon = sub.icon;
        const active = sub.courses.filter((c) => c.status === "active");
        const isEven = idx % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-[#F5F3EF]";

        return (
          <div key={sub.id}>
            {/* Wave divider between sections */}
            {idx > 0 && (
              <WaveDivider
                fromColor={isEven ? "#F5F3EF" : "#FFFFFF"}
                toColor={isEven ? "#FFFFFF" : "#F5F3EF"}
              />
            )}

            <section
              id={sub.id}
              className={`section-padding ${bgColor} relative overflow-hidden scroll-mt-24`}
            >
              {/* Decorative elements on alternating sections */}
              {!isEven && <DotPattern opacity={0.025} />}
              {isEven && idx === 0 && (
                <FloatingShape
                  className="top-8 -right-6 hidden lg:block"
                  shape="ring"
                  color="#00438A"
                  size={120}
                  opacity={0.035}
                />
              )}

              <div className="container relative z-10">
                {/* Subcategory header */}
                <motion.div {...fadeInUp} className="mb-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                        {t(`subcategories.${sub.id}.title`)}
                      </h2>
                    </div>
                  </div>
                  <p className="text-[#3C3A47] leading-relaxed ml-16 max-w-2xl">
                    {t(`subcategories.${sub.id}.desc`)}
                  </p>
                </motion.div>

                {/* Course cards — dynamic grid adapts to item count */}
                {active.length > 0 && (
                  <motion.div
                    {...staggerContainer}
                    className={`grid gap-6 ml-0 md:ml-16 ${
                      active.length === 1
                        ? "grid-cols-1 max-w-2xl"
                        : active.length === 2
                          ? "grid-cols-1 sm:grid-cols-2 max-w-4xl"
                          : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {active.map((course) => {
                      const isLinked = !!course.slug;
                      const hasCover = !!course.cover;
                      const cardInner = (
                        <Card
                          className={`h-full border transition-all duration-300 relative overflow-hidden ${
                            isLinked
                              ? "hover:shadow-xl hover:border-[#00438A]/20 hover:-translate-y-1 cursor-pointer"
                              : "opacity-90"
                          }`}
                        >
                          {/* Cover image */}
                          {hasCover && (
                            <div className="relative aspect-[16/9] overflow-hidden">
                              <img
                                src={course.cover}
                                alt={course.coverAlt || t(`courses.${course.titleKey}`)}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                          )}
                          {/* Left accent bar on hover */}
                          {isLinked && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00438A] to-[#C4922A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}
                          <CardContent className="h-full flex flex-col p-6">
                            <h3 className="font-semibold text-[#0A1628] mb-2 leading-snug text-lg">
                              {t(`courses.${course.titleKey}`)}
                            </h3>
                            {course.description && (
                              <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 line-clamp-2">
                                {course.description}
                              </p>
                            )}
                            <div className="mt-auto pt-3">
                              {isLinked ? (
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00438A] group-hover:gap-2.5 transition-all duration-300">
                                  {tCommon("viewDetails")}
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 text-xs text-[#8A889A]">
                                  <Clock className="w-3 h-3" />
                                  即将上线
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      );

                      return (
                        <motion.div key={course.titleKey} variants={staggerItem}>
                          {isLinked ? (
                            <Link
                              href={
                                `/programmes/${categorySlug}/${course.slug}` as never
                              }
                              className="no-underline block group"
                            >
                              {cardInner}
                            </Link>
                          ) : (
                            <div className="group">{cardInner}</div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </section>
          </div>
        );
      })}

      {/* ═══ Future Programmes ═══ */}
      {futureCourses.length > 0 && (
        <>
          <WaveDivider
            fromColor={subcategories.length % 2 === 0 ? "#F5F3EF" : "#FFFFFF"}
            toColor="#FAFBFC"
          />
          <section className="py-16 bg-[#FAFBFC] relative overflow-hidden">
            <CornerAccent position="top-left" color="#C4922A" size={80} />
            <CornerAccent position="bottom-right" color="#00438A" size={80} />

            <div className="container relative z-10">
              <motion.div {...fadeInUp}>
                <h3 className="text-sm font-semibold text-[#8A889A] uppercase tracking-wider mb-2">
                  {tCommon("futureProgrammes")}
                </h3>
                <p className="text-[#3C3A47] text-sm mb-6 max-w-xl">
                  以下课程正在开发中，敬请期待。如您对特定课程感兴趣，欢迎联系我们了解最新进展。
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {futureCourses.map((course) => (
                    <span
                      key={course.titleKey}
                      className="px-4 py-2 bg-[#C4922A]/8 text-[#C4922A] text-sm font-medium rounded-full border border-[#C4922A]/15 hover:bg-[#C4922A]/12 transition-colors"
                    >
                      {t(`courses.${course.titleKey}`)}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* ═══ Bottom CTA ═══ */}
      <section className="py-16 bg-[#0A1628] relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              找到适合您的课程了吗？
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              立即预约免费咨询，我们的课程顾问将根据您的背景和目标，为您定制学习方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4922A] text-white rounded-lg font-medium hover:bg-[#A87822] transition-colors no-underline"
              >
                预约咨询
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors no-underline"
              >
                返回全部项目
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
