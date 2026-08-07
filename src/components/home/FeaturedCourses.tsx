"use client";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
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

/* Hero images for bookshelf covers */
const COVER_IMAGES: Record<string, string> = {
  "oet-preparation": "/images/home/featured-doctors.webp",
  "medical-english-for-doctors": "/images/home/featured-doctors.webp",
  "medical-english-for-nurses": "/images/home/featured-nurses.webp",
  "pre-departure-medical-english": "/images/home/featured-scholar.webp",
  "international-clinical-observership": "/images/home/featured-observership.webp",
  "senior-visiting-scholar": "/images/home/featured-scholar.webp",
};

/* Spine colors for bookshelf effect */
const SPINE_COLORS = ["#00438A", "#1A5BA0", "#2D6DB8", "#C4922A"];

/* Course slug keys for i18n lookup */
const COURSE_SLUGS = [
  "oet-preparation",
  "medical-english-for-doctors",
  "medical-english-for-nurses",
  "pre-departure-medical-english",
] as const;

export default function FeaturedCourses() {
  const t = useTranslations("home");
  const locale = useLocale();
  const featured = getFeaturedProgrammes();

  if (featured.length === 0) return null;

  return (
    <section className="section-padding bg-[#FAFBFD]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} custom={0} className="eyebrow">
            {t("featuredCourses.eyebrow")}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="font-display text-3xl md:text-4xl font-bold text-[#0E0C19]"
          >
            {t("featuredCourses.title")}
          </motion.h2>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
            ]}
          >
            <CarouselContent className="-ml-5">
              {featured.map((prog, idx) => {
                const slug = prog.slug;
                const courseKey = COURSE_SLUGS.includes(slug as typeof COURSE_SLUGS[number])
                  ? slug
                  : null;

                const title = courseKey
                  ? t(`featuredCourses.courses.${courseKey}.title`)
                  : prog.title;
                const desc = courseKey
                  ? t(`featuredCourses.courses.${courseKey}.desc`)
                  : prog.shortDescription;
                const duration = courseKey
                  ? t(`featuredCourses.courses.${courseKey}.duration`)
                  : "";
                const level = courseKey
                  ? t(`featuredCourses.courses.${courseKey}.level`)
                  : "";
                const tags: string[] = courseKey
                  ? [
                      t(`featuredCourses.courses.${courseKey}.tags.0`),
                      t(`featuredCourses.courses.${courseKey}.tags.1`),
                      t(`featuredCourses.courses.${courseKey}.tags.2`),
                    ]
                  : [];

                const coverImage = COVER_IMAGES[slug] || "/images/hero/medical-english.webp";
                const spineColor = SPINE_COLORS[idx % SPINE_COLORS.length];

                return (
                  <CarouselItem
                    key={slug}
                    className="pl-5 basis-full sm:basis-1/2"
                  >
                    <Link
                      href={`/programmes/${prog.category}/${slug}` as never}
                      className="no-underline block group h-full"
                    >
                      {/* Bookshelf-style card: spine + cover + content */}
                      <div className="relative h-full rounded-xl overflow-hidden border border-[#E3E5EC]/80 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        {/* Spine accent */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
                          style={{ backgroundColor: spineColor }}
                        />

                        {/* Cover image area */}
                        <div className="relative h-44 md:h-52 overflow-hidden">
                          <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                          {/* Category badge */}
                          <div className="absolute top-4 left-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <GraduationCap className="w-3.5 h-3.5 text-[#00438A]" />
                            <span className="text-[11px] font-medium text-[#00438A]">
                              {t("featuredCourses.eyebrow")}
                            </span>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="flex-1 p-5 md:p-6 pl-6 md:pl-7 flex flex-col">
                          <h3 className="font-display text-lg md:text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors leading-tight">
                            {title}
                          </h3>
                          <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 flex-1 line-clamp-3">
                            {desc}
                          </p>

                          {/* Meta info */}
                          <div className="flex items-center gap-4 mb-4 text-xs text-[#8A889A]">
                            {duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {duration}
                              </span>
                            )}
                            {level && (
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3.5 h-3.5" />
                                {level}
                              </span>
                            )}
                          </div>

                          {/* Tags */}
                          {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#00438A]/5 text-[#00438A] border border-[#00438A]/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* CTA */}
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00438A] group-hover:gap-2.5 transition-all mt-auto">
                            {t("pillars.explore")} <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-14 h-9 w-9 bg-white/90 backdrop-blur-sm shadow-md border-[#00438A]/20 hover:bg-[#00438A] hover:text-white transition-colors" />
            <CarouselNext className="-right-4 md:-right-14 h-9 w-9 bg-white/90 backdrop-blur-sm shadow-md border-[#00438A]/20 hover:bg-[#00438A] hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
