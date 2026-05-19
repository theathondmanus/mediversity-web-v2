"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";

/* ── Animation variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const countUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Content data ── */
const CONTENT = {
  "zh-CN": {
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
  },
  en: {
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
  },
};

export default function CaseStudyHighlight() {
  const locale = useLocale() as "zh-CN" | "en";
  const content = CONTENT[locale] || CONTENT["zh-CN"];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #00438A 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }} />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            {content.title}
          </h2>
          <p className="text-lg text-[#3C3A47]">{content.subtitle}</p>
        </motion.div>

        {/* Main content: image + data */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14"
        >
          {/* Left: Image + quote overlay */}
          <motion.div variants={fadeInLeft} className="w-full lg:w-5/12">
            <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/cases/maternity-hospital-english.jpg"
                alt="Medical communication training session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />

              {/* Quote overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/90 text-sm md:text-base italic leading-relaxed mb-2">
                  &ldquo;{content.quote}&rdquo;
                </p>
                <p className="text-white/60 text-xs">
                  — {content.quoteAuthor}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Metrics + description */}
          <motion.div variants={fadeInRight} className="w-full lg:w-7/12 flex flex-col justify-center">
            <p className="text-[#3C3A47] leading-relaxed text-base md:text-lg mb-8">
              {content.description}
            </p>

            {/* Metrics grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {content.metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    variants={countUp}
                    transition={{ delay: i * 0.1 }}
                    className="relative bg-gradient-to-br from-[#F8F9FC] to-[#EEF1F8] rounded-xl p-5 text-center border border-[#E3E5EC]/60 hover:shadow-md transition-shadow"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#00438A]/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-4.5 h-4.5 text-[#00438A]" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-[#00438A] mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs text-[#3C3A47] font-medium">{metric.label}</p>
                    {metric.subtext && (
                      <p className="text-[10px] text-[#8A889A] mt-0.5">{metric.subtext}</p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#00438A] font-semibold hover:text-[#003066] transition-colors no-underline group/link self-start"
            >
              {content.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
