"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft, ArrowRight, Clock, Users, CheckCircle, Quote,
  ChevronDown, Target, Lightbulb, BookOpen, Zap, Star,
} from "lucide-react";
import Image from "next/image";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type {
  ProgrammeData,
  IntroSection,
  ValuePropsSection,
  DeliveryFormatSection,
} from "../../../content/programmes/types";

/* ── Animation presets ── */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ── Icon mapping for value-prop items ── */
const ICON_MAP: Record<string, typeof Target> = {
  target: Target,
  lightbulb: Lightbulb,
  book: BookOpen,
  zap: Zap,
  star: Star,
  check: CheckCircle,
};

function getIcon(iconName?: string) {
  if (!iconName) return CheckCircle;
  return ICON_MAP[iconName] || CheckCircle;
}

/* ══════════════════════════════════════════════════════════════
   SECTION RENDERERS — strict brand palette only:
   Primary: var(--brand-primary) = #00438A
   Accent:  var(--brand-accent) = #C4922A
   ══════════════════════════════════════════════════════════════ */

/* ── Intro: text-only or left-text-right-image ── */
function IntroBlock({ section, isAlt }: { section: IntroSection; isAlt?: boolean }) {
  const hasImage = !!section.image;

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container">
        <FadeIn>
          {hasImage ? (
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--ink)" }}>
                  {section.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line" style={{ color: "var(--body-text)" }}>
                  {section.body}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={section.image!}
                    alt={section.imageAlt || section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--ink)" }}>
                {section.title}
              </h2>
              <div className="relative pl-6 border-l-4 border-[var(--brand-primary)]/30">
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line" style={{ color: "var(--body-text)" }}>
                  {section.body}
                </p>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Value Props: GRID (honeycomb-inspired, brand colors only) ── */
function ValuePropsGrid({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: "var(--ink)" }}>
            {section.title}
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {section.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            const isPrimary = i % 2 === 0;
            const accentColor = isPrimary ? "var(--brand-primary)" : "var(--brand-accent)";
            return (
              <FadeIn key={i} index={i}>
                <div className="bg-white rounded-xl p-6 h-full border border-[var(--subtle-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${isPrimary ? "#00438A" : "#C4922A"}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Value Props: LIST (step list with brand-colored progress indicators) ── */
function ValuePropsList({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "var(--ink)" }}>
            {section.title}
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {section.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            const isLast = i === section.items.length - 1;
            return (
              <FadeIn key={i} index={i}>
                <div className="flex gap-5 items-start group">
                  {/* Step indicator with connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                      style={{ backgroundColor: "var(--brand-primary)" }}
                    >
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div className="w-0.5 h-full min-h-[3rem] bg-[var(--brand-primary)]/20 mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4" style={{ color: "var(--brand-accent)" }} />
                      <h3 className="font-semibold text-lg" style={{ color: "var(--ink)" }}>
                        {item.title}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--body-text)" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Value Props: TIMELINE (horizontal step flow, brand colors only) ── */
function ValuePropsTimeline({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  const t = useTranslations("common");
  return (
    <section
      className="section-padding overflow-hidden"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center" style={{ color: "var(--ink)" }}>
            {section.title}
          </h2>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {section.items.length <= 6 ? (
            /* ≤6 nodes: centered grid, no scroll */
            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-primary)]" />
              <div className="grid" style={{ gridTemplateColumns: `repeat(${section.items.length}, 1fr)` }}>
                {section.items.map((item, i) => (
                  <FadeIn key={i} index={i}>
                    <div className="relative pt-14 px-3 text-center">
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                        style={{ backgroundColor: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-accent)" }}
                      >
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--ink)" }}>
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-xs leading-relaxed" style={{ color: "var(--body-text)" }}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ) : (
            /* >6 nodes: horizontal scroll */
            <>
              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-primary)] z-0" />
                <div
                  className="flex relative z-10"
                  style={{ minWidth: `${section.items.length * 160}px` }}
                >
                  {section.items.map((item, i) => (
                    <FadeIn key={i} index={i}>
                      <div className="relative pt-14 px-3 text-center flex-shrink-0" style={{ width: `${100 / section.items.length}%`, minWidth: '140px' }}>
                        <div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                          style={{ backgroundColor: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-accent)" }}
                        >
                          {i + 1}
                        </div>
                        <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--ink)" }}>
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-xs leading-relaxed" style={{ color: "var(--body-text)" }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              <p className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>
                {t("swipeToSeeMore")}
              </p>
            </>
          )}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-accent)]" />

          <div className="space-y-8">
            {section.items.map((item, i) => (
              <FadeIn key={i} index={i}>
                <div className="relative">
                  {/* Node */}
                  <div
                    className="absolute -left-8 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md -translate-x-1/2"
                    style={{ backgroundColor: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-accent)" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Value Props: ACCORDION (collapsible panels) ── */
function ValuePropsAccordion({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "var(--ink)" }}>
            {section.title}
          </h2>
        </FadeIn>
        <div className="space-y-3">
          {section.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} index={i}>
                <div className="bg-white rounded-xl border border-[var(--subtle-border)] overflow-hidden hover:shadow-sm transition-shadow">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: "var(--brand-primary)" }}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "var(--body-text)" }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && item.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[4.5rem]">
                          <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Value Props: TABLE (structured data table for syllabus/curriculum) ── */
function ValuePropsTable({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  const t = useTranslations("common");
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "var(--ink)" }}>
            {section.title}
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-[var(--subtle-border)] shadow-sm">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "var(--brand-primary)" }}>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white w-16">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t("tableModule")}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white hidden md:table-cell">{t("tableContent")}</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t border-[var(--subtle-border)] hover:bg-[var(--canvas)] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: "var(--brand-accent)" }}
                      >
                        {i + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-sm" style={{ color: "var(--ink)" }}>
                        {item.title}
                      </p>
                      {/* Show description on mobile below title */}
                      {item.description && (
                        <p className="text-xs leading-relaxed mt-1 md:hidden" style={{ color: "var(--body-text)" }}>
                          {item.description}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                        {item.description || "—"}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Value Props Router ── */
function ValuePropsBlock({ section, isAlt }: { section: ValuePropsSection; isAlt?: boolean }) {
  const display = section.display || "grid";
  switch (display) {
    case "list":
      return <ValuePropsList section={section} isAlt={isAlt} />;
    case "timeline":
      return <ValuePropsTimeline section={section} isAlt={isAlt} />;
    case "accordion":
      return <ValuePropsAccordion section={section} isAlt={isAlt} />;
    case "table":
      return <ValuePropsTable section={section} isAlt={isAlt} />;
    default:
      return <ValuePropsGrid section={section} isAlt={isAlt} />;
  }
}

/* ── Delivery Format (enhanced, brand colors only) ── */
function DeliveryFormatBlock({
  section,
  index,
}: {
  section: DeliveryFormatSection;
  index: number;
}) {
  const isAlt = index % 2 === 1;
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isAlt ? "var(--canvas)" : "white" }}
    >
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--ink)" }}>
              {section.title}
            </h2>
            <p className="text-lg" style={{ color: "var(--body-text)" }}>
              {section.subtitle}
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {section.features.map((feat, i) => {
            const Icon = getIcon(feat.icon);
            const isPrimary = i % 2 === 0;
            const accentColor = isPrimary ? "var(--brand-primary)" : "var(--brand-accent)";
            return (
              <FadeIn key={i} index={i}>
                <div className="bg-white rounded-xl p-6 h-full border border-[var(--subtle-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  />
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${isPrimary ? "#00438A" : "#C4922A"}15` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: accentColor }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                    {feat.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        {section.ctaLabel && (
          <FadeIn>
            <div className="text-center mt-10">
              <Link
                href={section.ctaHref as never ?? "/contact"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                {section.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN TEMPLATE
   ══════════════════════════════════════════════════════════════ */

interface ProgramDetailTemplateProps {
  data: ProgrammeData;
}

export default function ProgramDetailTemplate({ data }: ProgramDetailTemplateProps) {
  const t = useTranslations("common");

  // Track delivery-format section index for alternating backgrounds
  let deliveryIndex = 0;

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        image={data.hero.image}
        imageAlt={data.hero.imageAlt}
      >
        <motion.div {...fadeInUp}>
          <Link
            href={`/programmes/${data.category}` as never}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white/90 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToProgrammes")}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            {data.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            {data.hero.lede}
          </p>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              {data.duration}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm">
              <Users className="w-4 h-4" />
              {data.audience.join(" · ")}
            </span>
          </div>

          <Link
            href={data.hero.ctaHref as never}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: "var(--brand-accent)" }}
          >
            {data.hero.ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </HeroSection>

      {/* ── Dynamic sections — alternating background for visual rhythm ── */}
      {data.sections.map((section, i) => {
        const isAlt = i % 2 === 1;
        switch (section.type) {
          case "intro":
            return <IntroBlock key={i} section={section} isAlt={isAlt} />;
          case "value-props":
            return <ValuePropsBlock key={i} section={section} isAlt={isAlt} />;
          case "delivery-format": {
            const idx = deliveryIndex++;
            return <DeliveryFormatBlock key={i} section={section} index={idx} />;
          }
          default:
            return null;
        }
      })}

      {/* ── Testimonials (sliding carousel) ── */}
      {data.testimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--canvas)" }}>
          <div className="container max-w-6xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: "var(--ink)" }}>
                {t("testimonials")}
              </h2>
            </FadeIn>
            <div className="px-4 md:px-12">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[
                  Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true }),
                ]}
              >
                <CarouselContent className="-ml-4">
                  {data.testimonials.map((testimonial, i) => (
                    <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-2xl p-8 h-full border border-[var(--subtle-border)] relative shadow-sm hover:shadow-md transition-shadow">
                        <Quote className="w-10 h-10 text-[var(--brand-accent)] opacity-20 absolute top-6 right-6" />
                        <p
                          className="text-base md:text-lg leading-relaxed mb-8 italic relative z-10"
                          style={{ color: "var(--body-text)" }}
                        >
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="border-t border-[var(--subtle-border)] pt-4 flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: i % 2 === 0 ? "var(--brand-primary)" : "var(--brand-accent)" }}
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold" style={{ color: "var(--ink)" }}>
                              {testimonial.name}
                            </p>
                            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                              {testimonial.role}，{testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-14 h-9 w-9 bg-white/90 backdrop-blur-sm shadow-md border-[#00438A]/20 hover:bg-[#00438A] hover:text-white transition-colors" />
                <CarouselNext className="-right-4 md:-right-14 h-9 w-9 bg-white/90 backdrop-blur-sm shadow-md border-[#00438A]/20 hover:bg-[#00438A] hover:text-white transition-colors" />
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "var(--brand-dark)" }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-white" />
        </div>
        <div className="container text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {data.finalCta.headline}
            </h2>
            <Link
              href={data.finalCta.buttonHref as never}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-accent)" }}
            >
              {data.finalCta.buttonLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
