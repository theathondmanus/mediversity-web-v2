"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

/* 5门课按文档要求的顺序 */
const COURSES = [
  {
    slug: "preparatory-medical-english",
    zhTitle: "医学英语预备课程",
    enTitle: "Preparatory Medical English",
    zhDesc: "医疗从业者通用英语基础课程，为进阶医疗英语培训奠定基础",
    enDesc: "Foundation English course designed for healthcare professionals, preparing you for advanced medical English training",
  },
  {
    slug: "pre-departure-medical-english",
    zhTitle: "出国前医学英语",
    enTitle: "Pre-Departure Medical English",
    zhDesc: "专为即将赴海外临床实习的医疗专业人士打造的强化语言准备项目",
    enDesc: "Intensive language preparation programme for healthcare professionals preparing for overseas clinical placements",
  },
  {
    slug: "medical-english-for-doctors",
    zhTitle: "医生医学英语",
    enTitle: "Medical English for Doctors",
    zhDesc: "以真实医疗情境为核心，培养医生自信沟通能力和跨文化意识",
    enDesc: "Focused on real clinical contexts, building confident communication skills and cross-cultural awareness for doctors",
  },
  {
    slug: "medical-english-for-nurses",
    zhTitle: "护士医学英语",
    enTitle: "Medical English for Nurses",
    zhDesc: "为护理从业人员量身定制的高级实践导向课程，提升语言能力和沟通技巧",
    enDesc: "An advanced, practice-oriented programme tailored for nursing professionals to enhance language and communication skills",
  },
  {
    slug: "oet-preparation",
    zhTitle: "OET备考课程",
    enTitle: "OET Preparation",
    zhDesc: "系统备考职业英语考试（OET），助力成功通过并开拓国际执业资格",
    enDesc: "Systematic OET preparation to help you achieve success in the exam and advance your international professional credentials",
  },
];

export default function MedicalEnglishPage() {
  const locale = useLocale();
  const t = useTranslations("programmes.medicalEnglish");
  const tCommon = useTranslations("common");
  const isZh = locale === "zh-CN";

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/hero/medical-english.webp"
        imageAlt="Medical English learning environment with international video conference"
      >
        <FadeIn>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-1.5 text-white/60 text-sm mb-6 hover:text-white/80 no-underline transition-colors"
          >
            ← {tCommon("backToProgrammes")}
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#00438A] flex items-center justify-center">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("title")}
            </h1>
          </div>
          <p className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed">
            {t("description")}
          </p>
        </FadeIn>
      </HeroSection>

      {/* Compact course grid */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeIn className="mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-2">
              {isZh ? "在授课程" : "Active Programmes"}
            </h2>
            <p className="text-[#3C3A47] text-base">
              {isZh ? "点击课程卡片查看详情" : "Click a programme card to learn more"}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map((course, idx) => (
              <motion.div key={course.slug} {...fadeInUp} transition={{ duration: 0.45, delay: idx * 0.06 }}>
                <Link
                  href={`/programmes/medical-english/${course.slug}` as never}
                  className="no-underline block group h-full"
                >
                  <div className="h-full bg-white rounded-xl border-2 border-[#E3E5EC] hover:border-[#00438A]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-3 relative overflow-hidden">
                    {/* index badge */}
                    <span className="absolute top-4 right-4 text-xs font-bold text-[#E3E5EC] select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-[#0A1628] text-base leading-snug group-hover:text-[#00438A] transition-colors pr-8">
                      {isZh ? course.zhTitle : course.enTitle}
                    </h3>
                    <p className="text-sm text-[#3C3A47] leading-relaxed flex-1">
                      {isZh ? course.zhDesc : course.enDesc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#00438A] group-hover:gap-2 transition-all mt-auto">
                      {tCommon("viewDetails")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0A1628]">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {isZh ? "找到适合您的课程了吗？" : "Found the right programme?"}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              {isZh
                ? "立即预约免费咨询，我们的课程顾问将根据您的背景和目标，为您定制学习方案。"
                : "Book a free consultation and our advisors will tailor a learning plan based on your background and goals."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4922A] text-white rounded-lg font-medium hover:bg-[#A87822] transition-colors no-underline"
              >
                {isZh ? "预约咨询" : "Book a Consultation"}
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors no-underline"
              >
                {tCommon("backToProgrammes")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
