"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  /** i18n namespace key, e.g. "privacy" or "terms" */
  ns: "privacy" | "terms";
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
};

export default function LegalPage({ ns }: LegalPageProps) {
  const t = useTranslations(ns);
  // sections is an array of {heading, paragraphs[]}
  const sections = t.raw("sections") as LegalSection[];

  return (
    <>
      {/* ═══ Page header ═══ */}
      <section className="relative pt-28 md:pt-32 pb-12 bg-[#0A1628] overflow-hidden">
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <p className="eyebrow !text-[#C4922A] mb-3">{t("eyebrow")}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t("title")}
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {t("intro")}
            </p>
            <p className="text-white/50 text-sm mt-6">
              {t("lastUpdatedLabel")}: {t("lastUpdated")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Body ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-sm md:prose-base prose-headings:font-display prose-headings:text-[#0A1628] prose-p:text-[#3C3A47] prose-p:leading-relaxed prose-strong:text-[#0A1628] max-w-none">
            {sections.map((sec, idx) => (
              <FadeIn key={idx} index={idx}>
                <section className="mb-10">
                  <h2 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-4 mt-0">
                    {idx + 1}. {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-sm md:text-base text-[#3C3A47] leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                </section>
              </FadeIn>
            ))}
          </div>

          {/* Disclaimer */}
          <FadeIn className="mt-12 p-5 bg-[#F5F3EF] border border-[#E3E5EC] rounded-xl">
            <p className="text-xs md:text-sm text-[#8A889A] leading-relaxed italic">
              {t("disclaimer")}
            </p>
          </FadeIn>

          {/* Contact */}
          <FadeIn className="mt-8 text-sm md:text-base text-[#3C3A47]">
            <p>
              <strong className="text-[#0A1628]">{t("contactLabel")}:</strong>{" "}
              <a href="mailto:contact@mediversityglobal.com" className="text-[#00438A] underline">
                contact@mediversityglobal.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
