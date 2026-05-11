"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function InsightsPage() {
  const t = useTranslations("insights");

  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A1628] to-[#00438A]">
        <div className="container">
          <motion.div {...fadeInUp}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center py-16">
            <Newspaper className="w-16 h-16 text-[#E3E5EC] mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-[#0A1628] mb-3">
              {t("empty.title")}
            </h2>
            <p className="text-[#8A889A]">
              {t("empty.desc")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
