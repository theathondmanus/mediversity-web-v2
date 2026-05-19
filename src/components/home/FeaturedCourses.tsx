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

/**
 * Locale-aware content for featured courses (bookshelf-style).
 */
const COURSE_DATA: Record<string, Record<string, { title: string; desc: string; duration: string; level: string; tags: string[] }>> = {
  "oet-preparation": {
    "zh-CN": {
      title: "OET 备考课程",
      desc: "系统化提升医学英语听说读写能力，针对 OET 考试各模块进行专项训练，助力医疗专业人士顺利通过国际认证。",
      duration: "12 周",
      level: "中高级",
      tags: ["考试备考", "国际认证", "医学英语"],
    },
    en: {
      title: "OET Preparation",
      desc: "Systematically improve medical English across all four skills with module-specific training designed to help healthcare professionals pass this international certification.",
      duration: "12 Weeks",
      level: "Upper-Intermediate",
      tags: ["Exam Prep", "Certification", "Medical English"],
    },
  },
  "medical-english-for-doctors": {
    "zh-CN": {
      title: "医生英语",
      desc: "面向临床医生的专业英语沟通课程，涵盖病史采集、查体描述、医患沟通等核心场景，提升国际诊疗能力。",
      duration: "8 周",
      level: "中级",
      tags: ["临床沟通", "医患对话", "查房英语"],
    },
    en: {
      title: "Medical English for Doctors",
      desc: "Professional English communication for clinicians covering history-taking, physical examination descriptions, and patient consultations in international settings.",
      duration: "8 Weeks",
      level: "Intermediate",
      tags: ["Clinical", "Consultation", "Ward Rounds"],
    },
  },
  "medical-english-for-nurses": {
    "zh-CN": {
      title: "护士英语",
      desc: "护理专业英语沟通能力提升课程，覆盖交接班、患者教育、多学科协作等护理核心场景。",
      duration: "8 周",
      level: "中级",
      tags: ["护理沟通", "交接班", "患者教育"],
    },
    en: {
      title: "Medical English for Nurses",
      desc: "Nursing-specific English communication covering handovers, patient education, and multidisciplinary team collaboration scenarios.",
      duration: "8 Weeks",
      level: "Intermediate",
      tags: ["Nursing", "Handover", "Patient Education"],
    },
  },
  "pre-departure-medical-english": {
    "zh-CN": {
      title: "出国前医学英语",
      desc: "12 周强化语言项目，专为即将海外临床实习的医疗专业人士打造，涵盖文化适应与临床场景双重准备。",
      duration: "12 周",
      level: "中高级",
      tags: ["海外实习", "文化适应", "强化训练"],
    },
    en: {
      title: "Pre-departure Medical English",
      desc: "A 12-week intensive programme for healthcare professionals preparing for overseas clinical placements, covering both cultural adaptation and clinical scenarios.",
      duration: "12 Weeks",
      level: "Upper-Intermediate",
      tags: ["Overseas", "Cultural Prep", "Intensive"],
    },
  },
};

/* Hero images for bookshelf covers */
const COVER_IMAGES: Record<string, string> = {
  "oet-preparation": "/images/hero/oet-preparation.webp",
  "medical-english-for-doctors": "/images/hero/medical-english.webp",
  "medical-english-for-nurses": "/images/hero/medical-english.webp",
  "pre-departure-medical-english": "/images/hero/observership.webp",
};

/* Spine colors for bookshelf effect */
const SPINE_COLORS = ["#00438A", "#1A5BA0", "#2D6DB8", "#C4922A"];

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

        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
            ]}
          >
            <CarouselContent className="-ml-5">
              {featured.map((prog, idx) => {
                const data = COURSE_DATA[prog.slug]?.[locale] || COURSE_DATA[prog.slug]?.["zh-CN"] || {
                  title: prog.title,
                  desc: prog.shortDescription,
                  duration: "",
                  level: "",
                  tags: [],
                };
                const coverImage = COVER_IMAGES[prog.slug] || "/images/hero/medical-english.webp";
                const spineColor = SPINE_COLORS[idx % SPINE_COLORS.length];

                return (
                  <CarouselItem
                    key={prog.slug}
                    className="pl-5 basis-full sm:basis-1/2"
                  >
                    <Link
                      href={`/programmes/${prog.category}/${prog.slug}` as never}
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
                            alt={data.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                          {/* Category badge */}
                          <div className="absolute top-4 left-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <GraduationCap className="w-3.5 h-3.5 text-[#00438A]" />
                            <span className="text-[11px] font-medium text-[#00438A]">
                              {locale === "zh-CN" ? "精选" : "Featured"}
                            </span>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="flex-1 p-5 md:p-6 pl-6 md:pl-7 flex flex-col">
                          <h3 className="font-display text-lg md:text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#00438A] transition-colors leading-tight">
                            {data.title}
                          </h3>
                          <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 flex-1 line-clamp-3">
                            {data.desc}
                          </p>

                          {/* Meta info */}
                          <div className="flex items-center gap-4 mb-4 text-xs text-[#8A889A]">
                            {data.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {data.duration}
                              </span>
                            )}
                            {data.level && (
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3.5 h-3.5" />
                                {data.level}
                              </span>
                            )}
                          </div>

                          {/* Tags */}
                          {data.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {data.tags.map((tag) => (
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
            <CarouselPrevious className="-left-2 md:-left-6" />
            <CarouselNext className="-right-2 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
