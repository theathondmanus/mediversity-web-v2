"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle, Quote } from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import { FadeIn } from "@/components/ui/fade-in";
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

/* ── Section renderers ── */

function IntroBlock({ section }: { section: IntroSection }) {
  return (
    <section className="section-padding bg-white">
      <div className="container max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.title}</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--body-text)" }}>
            {section.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ValuePropsBlock({ section }: { section: ValuePropsSection }) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--canvas)" }}>
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {section.title}
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.items.map((item, i) => (
            <FadeIn key={i} index={i}>
              <div className="bg-white rounded-xl p-6 h-full border border-[var(--subtle-border)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg" style={{ color: "var(--body-text)" }}>
              {section.subtitle}
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {section.features.map((feat, i) => (
            <FadeIn key={i} index={i}>
              <div className="bg-white rounded-xl p-6 h-full border border-[var(--subtle-border)] hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                  {feat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        {section.ctaLabel && (
          <FadeIn>
            <div className="text-center mt-10">
              <Link
                href={section.ctaHref as never ?? "/contact"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors"
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

/* ── Main template ── */

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
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 bg-gradient-to-br from-[#0A1628] to-[#00438A] overflow-hidden">
        <div className="container relative z-10">
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm">
                <Clock className="w-4 h-4" />
                {data.duration}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm">
                <Users className="w-4 h-4" />
                {data.audience.join(" · ")}
              </span>
            </div>

            <Link
              href={data.hero.ctaHref as never}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
              style={{ backgroundColor: "var(--brand-accent)" }}
            >
              {data.hero.ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <HeroCurve />
      </section>

      {/* ── Dynamic sections ── */}
      {data.sections.map((section, i) => {
        switch (section.type) {
          case "intro":
            return <IntroBlock key={i} section={section} />;
          case "value-props":
            return <ValuePropsBlock key={i} section={section} />;
          case "delivery-format": {
            const idx = deliveryIndex++;
            return <DeliveryFormatBlock key={i} section={section} index={idx} />;
          }
          default:
            return null;
        }
      })}

      {/* ── Testimonials ── */}
      {data.testimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--canvas)" }}>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {data.testimonials.map((t, i) => (
                <FadeIn key={i} index={i}>
                  <div className="bg-white rounded-xl p-8 h-full border border-[var(--subtle-border)] relative">
                    <Quote className="w-8 h-8 text-[var(--brand-accent)] opacity-30 absolute top-6 right-6" />
                    <p
                      className="text-base leading-relaxed mb-6 italic"
                      style={{ color: "var(--body-text)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-[var(--subtle-border)] pt-4">
                      <p className="font-semibold" style={{ color: "var(--ink)" }}>
                        {t.name}
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {t.role}，{t.location}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--brand-dark)" }}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {data.finalCta.headline}
            </h2>
            <Link
              href={data.finalCta.buttonHref as never}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
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
