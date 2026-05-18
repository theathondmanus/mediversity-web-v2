"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getFeaturedProgrammes } from "../../../content/programmes/registry";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/**
 * Locale-aware titles for featured courses.
 * When the registry grows, this could be replaced by loading from content files.
 */
const TITLES: Record<string, Record<string, { title: string; desc: string }>> = {
  "oet-preparation": {
    "zh-CN": {
      title: "OET 备考课程",
      desc: "提升您的医学英语能力，助力成功通过 OET 考试。",
    },
    en: {
      title: "OET Preparation",
      desc: "Boost your medical English skills and help you achieve success in the OET exam.",
    },
  },
};

export default function FeaturedCourses() {
  const t = useTranslations("home");
  const locale = useLocale();
  const featured = getFeaturedProgrammes();

  if (featured.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} custom={0} className="eyebrow">
            {locale === "zh-CN" ? "精选课程" : "Featured Programmes"}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="font-display text-3xl md:text-4xl font-bold text-[#0E0C19]"
          >
            {locale === "zh-CN" ? "热门推荐" : "Popular Programmes"}
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {featured.map((prog) => {
                const localeData = TITLES[prog.slug]?.[locale] ?? {
                  title: prog.title,
                  desc: prog.shortDescription,
                };

                return (
                  <CarouselItem
                    key={prog.slug}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      href={`/programmes/${prog.category}/${prog.slug}` as never}
                      className="no-underline block group h-full"
                    >
                      <div className="bg-white rounded-xl p-6 border-2 border-[#E3E5EC] hover:border-[#00438A]/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-4 h-4 text-[#C4922A]" />
                          <span className="text-xs font-medium text-[#C4922A] uppercase tracking-wide">
                            {locale === "zh-CN" ? "精选" : "Featured"}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg text-[#0E0C19] mb-2 group-hover:text-[#00438A] transition-colors">
                          {localeData.title}
                        </h3>
                        <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 flex-1">
                          {localeData.desc}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#00438A] group-hover:gap-2 transition-all">
                          {t("pillars.explore")} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
