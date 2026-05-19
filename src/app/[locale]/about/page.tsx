"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  GraduationCap,
  Plane,
  Handshake,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  WaveDivider,
  DotPattern,
  CornerAccent,
} from "@/components/ui/section-decorations";

/* ── Animation presets ── */
const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};



/* ── Who We Serve icons ── */
const SERVE_ICONS: Record<string, typeof Stethoscope> = {
  professionals: Stethoscope,
  institutions: Building2,
  schools: GraduationCap,
  patients: Plane,
  partners: Handshake,
};

interface ServeItem {
  key: string;
  title: string;
  desc: string;
}

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const serveItems = t.raw("whoWeServe.items") as ServeItem[];

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection
        image="/images/hero/about.webp"
        imageAlt="International conference room with panoramic city view"
      >
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="eyebrow !text-[#C4922A] mb-4">{t("title")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("subtitle")}
          </h1>
        </motion.div>
      </HeroSection>

      {/* ═══ Story — Editorial 3-paragraph layout ═══ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotPattern opacity={0.02} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Title with decorative accent */}
            <motion.div {...fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#C4922A] rounded-full" />
                <p className="text-sm font-medium text-[#C4922A] uppercase tracking-wider">
                  Our Story
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight">
                {t("story.title")}
              </h2>
            </motion.div>

            {/* Paragraphs with left border accent and staggered entry */}
            <motion.div
              {...staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={staggerItem} className="relative pl-8 border-l-2 border-[#00438A]/20">
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[#00438A]" />
                <p className="text-[#3C3A47] leading-relaxed text-lg md:text-xl">
                  {t("story.paragraph1")}
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="relative pl-8 border-l-2 border-[#C4922A]/20">
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[#C4922A]" />
                <p className="text-[#3C3A47] leading-relaxed text-lg md:text-xl">
                  {t("story.paragraph2")}
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="relative pl-8 border-l-2 border-[#047857]/20">
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[#047857]" />
                <p className="text-[#3C3A47] leading-relaxed text-lg md:text-xl">
                  {t("story.paragraph3")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Wave transition ═══ */}
      <WaveDivider fromColor="#FFFFFF" toColor="#F5F3EF" />

      {/* ═══ Who We Serve ═══ */}
      <section className="section-padding bg-[#F5F3EF] relative overflow-hidden">
        <CornerAccent position="top-right" color="#00438A" size={120} />
        <CornerAccent position="bottom-left" color="#C4922A" size={90} />

        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-14 max-w-3xl mx-auto">
            <p className="eyebrow">{t("whoWeServe.eyebrow")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-6">
              {t("whoWeServe.title")}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed text-base md:text-lg">
              {t("whoWeServe.intro")}
            </p>
          </motion.div>

          {/* 5 cards in responsive grid */}
          <motion.div
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-6xl mx-auto"
          >
            {serveItems.map((item) => {
              const Icon = SERVE_ICONS[item.key] || Stethoscope;
              return (
                <motion.div key={item.key} variants={staggerItem}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#00438A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#00438A]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00438A]/12 transition-colors">
                        <Icon className="w-7 h-7 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2 text-base">
                        {item.title}
                      </h3>
                      {item.desc && (
                        <p className="text-sm text-[#3C3A47]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ Wave transition ═══ */}
      <WaveDivider fromColor="#F5F3EF" toColor="#FFFFFF" />

      {/* ═══ Values — Diamond Quadrant ═══ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotPattern opacity={0.015} />
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <p className="eyebrow">Core Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628]">
              {t("values.title")}
            </h2>
          </motion.div>

          {/* Diamond quadrant — static infographic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={locale === "zh-CN"
                  ? "/images/about/values-diamond-zh.webp"
                  : "/images/about/values-diamond-en.webp"
                }
                alt={t("values.title")}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
