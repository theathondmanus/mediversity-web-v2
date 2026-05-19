"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Clock, Award, MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

/* ── Animation variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Case study data (array-driven for future expansion) ── */
interface CaseMetric {
  icon: typeof TrendingUp;
  value: string;
  label: string;
  subtext?: string;
}

interface CaseStudy {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: CaseMetric[];
  quote: string;
  quoteAuthor: string;
  cta: string;
  ctaLink: string;
  location?: string;
}

const CASES: Record<string, CaseStudy[]> = {
  "zh-CN": [
    {
      image: "/images/cases/maternity-hospital-english.jpg",
      imageAlt: "妇幼医院医学英语培训现场",
      eyebrow: "成功案例",
      title: "12 周训练，84% 能力提升",
      subtitle: "妇幼专科医院国际医疗沟通能力建设项目",
      description:
        "某妇幼专科医院通过 Mediversity Global 为期 12 周的定制化医学沟通培训，医护团队临床英语能力实现跨越式提升，为国际化服务拓展奠定坚实基础。",
      metrics: [
        { icon: TrendingUp, value: "84%", label: "能力提升幅度" },
        { icon: Award, value: "72.5", label: "结业平均分", subtext: "（入学 39.4）" },
        { icon: Clock, value: "12", label: "周定制训练" },
        { icon: Users, value: "100%", label: "学员完成率" },
      ],
      quote: "以前总担心说错，现在可以更自信地与患者沟通，老师的反馈非常有帮助。",
      quoteAuthor: "生殖医学科医生",
      cta: "阅读完整案例",
      ctaLink: "/insights",
    },
    {
      image: "/images/cases/indonesia-tcm-rehab.jpg",
      imageAlt: "印尼患者在康复诊所接受中医针灸治疗",
      eyebrow: "服务案例",
      title: "跨境康复，本地化落地",
      subtitle: "印尼患者 · 血栓术后中医康复导航",
      location: "东南亚 · 印尼",
      description:
        "一位印尼患者在血栓切除术后面临肢体恢复缓慢的困境。我们以「先评估、再匹配」为核心，对接当地合法执业中医专家，设计多阶段康复路径，实现稳定、本地化、可持续的康复支持。",
      metrics: [
        { icon: MapPin, value: "4", label: "阶段康复路径" },
        { icon: Users, value: "1v1", label: "专家匹配" },
        { icon: Clock, value: "持续", label: "长期跟进" },
        { icon: Award, value: "0", label: "次跨境奔波" },
      ],
      quote: "频繁跨境奔波并不是答案——稳定、本地化、可持续的康复支持，才是患者真正需要的。",
      quoteAuthor: "Mediversity 导航团队",
      cta: "了解医疗导航",
      ctaLink: "/medical-navigator",
    },
  ],
  en: [
    {
      image: "/images/cases/maternity-hospital-english.jpg",
      imageAlt: "Medical communication training session",
      eyebrow: "Case Study",
      title: "12 Weeks, 84% Improvement",
      subtitle: "Maternity Hospital International Medical Communication Programme",
      description:
        "A leading maternity hospital achieved transformative improvement in clinical English communication through Mediversity Global's 12-week customised training programme, establishing a solid foundation for international service expansion.",
      metrics: [
        { icon: TrendingUp, value: "84%", label: "Improvement" },
        { icon: Award, value: "72.5", label: "Final Score", subtext: "(from 39.4)" },
        { icon: Clock, value: "12", label: "Weeks" },
        { icon: Users, value: "100%", label: "Completion Rate" },
      ],
      quote: "I used to worry about making mistakes. Now I can communicate with patients more confidently.",
      quoteAuthor: "Reproductive Medicine Specialist",
      cta: "Read Full Case Study",
      ctaLink: "/insights",
    },
    {
      image: "/images/cases/indonesia-tcm-rehab.jpg",
      imageAlt: "Indonesian patient receiving TCM acupuncture treatment",
      eyebrow: "Service Case",
      title: "Cross-border Recovery, Localised Care",
      subtitle: "Indonesian Patient · Post-thrombectomy TCM Rehabilitation",
      location: "Southeast Asia · Indonesia",
      description:
        "An Indonesian patient facing slow recovery after thrombectomy received a multi-stage rehabilitation pathway designed around local feasibility, continuity of care, and long-term sustainability — matched with locally licensed TCM specialists.",
      metrics: [
        { icon: MapPin, value: "4", label: "Stage Pathway" },
        { icon: Users, value: "1v1", label: "Expert Match" },
        { icon: Clock, value: "Ongoing", label: "Follow-up" },
        { icon: Award, value: "0", label: "Border Crossings" },
      ],
      quote: "Frequent international travel wasn't the answer — stable, local, sustainable rehabilitation support was what the patient truly needed.",
      quoteAuthor: "Mediversity Navigation Team",
      cta: "Learn About Medical Navigator",
      ctaLink: "/medical-navigator",
    },
  ],
};

export default function CaseStudyHighlight() {
  const locale = useLocale() as "zh-CN" | "en";
  const cases = CASES[locale] || CASES["zh-CN"];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00438A 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <p className="eyebrow">{locale === "zh-CN" ? "成功案例" : "Case Studies"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628]">
            {locale === "zh-CN" ? "真实成果，数据说话" : "Real Results, Data-Driven"}
          </h2>
        </motion.div>

        {/* Carousel of case study cards */}
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {cases.map((caseItem, caseIdx) => (
                <CarouselItem key={caseIdx} className="pl-4 basis-full">
                  {/* Single large card */}
                  <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-gradient-to-br from-[#F8F9FC] to-white rounded-2xl border border-[#E3E5EC]/60 shadow-lg overflow-hidden">
                    {/* Left: Image + quote overlay */}
                    <div className="w-full lg:w-5/12 relative min-h-[320px] lg:min-h-[420px]">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />
                      {/* Quote overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="text-white/90 text-sm md:text-base italic leading-relaxed mb-2">
                          &ldquo;{caseItem.quote}&rdquo;
                        </p>
                        <p className="text-white/60 text-xs">— {caseItem.quoteAuthor}</p>
                      </div>
                    </div>

                    {/* Right: Content + metrics */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center p-6 md:p-8 lg:py-10 lg:pr-10 lg:pl-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C4922A]">
                          {caseItem.eyebrow}
                        </span>
                        {caseItem.location && (
                          <span className="text-xs text-[#8A889A] flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {caseItem.location}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-base text-[#3C3A47] mb-2 font-medium">
                        {caseItem.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-[#3C3A47] leading-relaxed mb-6">
                        {caseItem.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {caseItem.metrics.map((metric, i) => {
                          const Icon = metric.icon;
                          return (
                            <div
                              key={i}
                              className="bg-white rounded-xl p-4 text-center border border-[#E3E5EC]/60 shadow-sm"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#00438A]/8 flex items-center justify-center mx-auto mb-2">
                                <Icon className="w-4 h-4 text-[#00438A]" />
                              </div>
                              <p className="text-xl md:text-2xl font-bold text-[#00438A] mb-0.5">
                                {metric.value}
                              </p>
                              <p className="text-[11px] text-[#3C3A47] font-medium">{metric.label}</p>
                              {metric.subtext && (
                                <p className="text-[10px] text-[#8A889A]">{metric.subtext}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* CTA */}
                      <Link
                        href={caseItem.ctaLink as never}
                        className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group/link self-start"
                      >
                        {caseItem.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 md:-left-6" />
            <CarouselNext className="-right-2 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
