"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Users, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const VALUES = [
  { icon: Award, key: "excellence" },
  { icon: Users, key: "collaboration" },
  { icon: Globe, key: "international" },
  { icon: Heart, key: "empathy" },
];

export default function AboutPage() {
  const t = useTranslations("about");

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
        <div className="container max-w-3xl">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-2xl font-bold text-[#0A1628] mb-6">
              {t("mission.title")}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed mb-8">
              {t("mission.content")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#FAFBFC]">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-[#0A1628]">
              {t("values.title")}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.key} {...fadeInUp}>
                  <Card className="h-full text-center border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00438A]/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2 text-sm">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-xs text-[#3C3A47]">
                        {t(`values.${value.key}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
