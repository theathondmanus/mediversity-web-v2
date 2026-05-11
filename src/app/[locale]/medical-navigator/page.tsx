"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, MapPin, FileCheck, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SERVICES = [
  { icon: MapPin, key: "consultation" },
  { icon: FileCheck, key: "documentation" },
  { icon: Users, key: "matching" },
  { icon: Globe, key: "support" },
];

export default function MedicalNavigatorPage() {
  const t = useTranslations("medicalNavigator");

  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A1628] via-[#1a2d4a] to-[#2a1a0a]">
        <div className="container">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#C4922A]/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#C4922A]" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                {t("title")}
              </h1>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mt-4">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-[#0A1628] mb-4">
              {t("services.title")}
            </h2>
            <p className="text-[#3C3A47] max-w-xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.key} {...fadeInUp}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#C4922A]/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-[#C4922A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-[#3C3A47]">
                        {t(`services.${service.key}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAFBFC]">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-2xl font-bold text-[#0A1628] mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-[#3C3A47] mb-8 max-w-lg mx-auto">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4922A] text-white font-medium rounded-lg hover:bg-[#B08324] transition-colors no-underline"
            >
              {t("cta.button")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
