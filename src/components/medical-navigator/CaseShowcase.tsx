"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MapPin, Calendar, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

/* ── Types ── */
export interface CaseStudy {
  id: string;
  type: { "zh-CN": string; en: string };
  narrative: { "zh-CN": string; en: string };
  quote: { "zh-CN": string; en: string };
  identity: { "zh-CN": string; en: string };
  /** Optional timeline milestones for sub-page expansion */
  milestones?: {
    date: { "zh-CN": string; en: string };
    event: { "zh-CN": string; en: string };
  }[];
  /** Optional hero image for the case */
  image?: string;
  /** Optional location tag */
  location?: { "zh-CN": string; en: string };
  /** Whether this is the primary/featured case */
  featured?: boolean;
}

interface CaseShowcaseProps {
  sectionTitle: string;
  sectionSubtitle: string;
  cases: CaseStudy[];
  locale: "zh-CN" | "en";
}

function t2(obj: { "zh-CN": string; en: string }, locale: "zh-CN" | "en"): string {
  return obj[locale] || obj["en"];
}

/* ── Main Component ── */
export default function CaseShowcase({
  sectionTitle,
  sectionSubtitle,
  cases,
  locale,
}: CaseShowcaseProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeCase = cases[activeIndex];

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < cases.length) setActiveIndex(idx);
  };

  return (
    <div>
      {/* Section header */}
      <FadeIn className="text-center mb-12">
        <p className="eyebrow">{sectionTitle}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
          {sectionSubtitle}
        </h2>
      </FadeIn>

      {/* Main showcase area */}
      <div className="max-w-6xl mx-auto">
        {/* ── Primary Case Card (large) ── */}
        <FadeIn>
          <div className="relative bg-white rounded-2xl shadow-lg border border-[#E3E5EC] overflow-hidden mb-8">
            {/* Top accent gradient */}
            <div className="h-1.5 bg-gradient-to-r from-[#00438A] via-[#3550A0] to-[#C4922A]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-12"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  {/* Left: Content */}
                  <div>
                    {/* Type badge + location */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="inline-block text-xs font-semibold text-white bg-[#00438A] px-4 py-1.5 rounded-full tracking-wide uppercase">
                        {t2(activeCase.type, locale)}
                      </span>
                      {activeCase.location && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#8A889A]">
                          <MapPin className="w-3.5 h-3.5" />
                          {t2(activeCase.location, locale)}
                        </span>
                      )}
                    </div>

                    {/* Narrative */}
                    <p className="text-[#3C3A47] text-base md:text-lg leading-relaxed mb-8">
                      {t2(activeCase.narrative, locale)}
                    </p>

                    {/* Quote block */}
                    <div className="relative bg-[#F5F3EF] rounded-xl p-6 md:p-8 mb-6">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-[#C4922A]/20" />
                      <p className="text-[#0A1628] italic font-display text-base md:text-lg leading-relaxed pl-6">
                        {t2(activeCase.quote, locale)}
                      </p>
                      <p className="text-sm text-[#8A889A] mt-4 pl-6">
                        — {t2(activeCase.identity, locale)}
                      </p>
                    </div>

                    {/* Timeline milestones (if available) */}
                    {activeCase.milestones && activeCase.milestones.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold text-[#0A1628] mb-4 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#C4922A]" />
                          {locale === "zh-CN" ? "服务时间线" : "Service Timeline"}
                        </h4>
                        <div className="relative pl-6 border-l-2 border-[#E3E5EC] space-y-4">
                          {activeCase.milestones.map((ms, i) => (
                            <div key={i} className="relative">
                              {/* Dot on timeline */}
                              <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#C4922A] ring-4 ring-white" />
                              <p className="text-xs font-medium text-[#C4922A] mb-0.5">
                                {t2(ms.date, locale)}
                              </p>
                              <p className="text-sm text-[#3C3A47]">
                                {t2(ms.event, locale)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Case number indicator (desktop) */}
                  <div className="hidden md:flex flex-col items-center gap-2">
                    <span className="text-6xl font-display font-bold text-[#00438A]/10">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[#8A889A]">
                      / {String(cases.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="w-10 h-10 rounded-full border border-[#E3E5EC] flex items-center justify-center text-[#3C3A47] hover:bg-[#F5F3EF] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous case"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === cases.length - 1}
                className="w-10 h-10 rounded-full border border-[#E3E5EC] flex items-center justify-center text-[#3C3A47] hover:bg-[#F5F3EF] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next case"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* ── Thumbnail Navigation Strip (Carousel) ── */}
        <FadeIn>
          <div className="px-12">
            <Carousel opts={{ align: "start", loop: false }}>
              <CarouselContent className="-ml-3">
                {cases.map((c, idx) => (
                  <CarouselItem key={c.id} className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3">
                    <button
                      type="button"
                      onClick={() => goTo(idx)}
                      className={`group relative text-left p-5 rounded-xl border transition-all duration-300 w-full ${
                        idx === activeIndex
                          ? "bg-white border-[#00438A] shadow-md ring-1 ring-[#00438A]/20"
                          : "bg-white/60 border-[#E3E5EC] hover:border-[#00438A]/40 hover:shadow-sm"
                      }`}
                    >
                      {/* Active indicator bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300 ${
                          idx === activeIndex
                            ? "bg-gradient-to-r from-[#00438A] to-[#C4922A]"
                            : "bg-transparent"
                        }`}
                      />

                      {/* Number + type */}
                      <div className="flex items-start gap-3">
                        <span
                          className={`text-2xl font-display font-bold shrink-0 transition-colors ${
                            idx === activeIndex ? "text-[#00438A]" : "text-[#E3E5EC]"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p
                            className={`text-sm font-semibold mb-1 transition-colors ${
                              idx === activeIndex ? "text-[#0A1628]" : "text-[#8A889A]"
                            }`}
                          >
                            {t2(c.type, locale)}
                          </p>
                          <p className="text-xs text-[#8A889A] line-clamp-2">
                            {t2(c.identity, locale)}
                          </p>
                        </div>
                      </div>

                      {/* Arrow indicator for active */}
                      {idx === activeIndex && (
                        <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-[#C4922A]" />
                      )}
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
