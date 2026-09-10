import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Languages,
  Layers3,
  Network,
  Stethoscope,
  Users,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import type {
  CaseMetricIcon,
  InstitutionalCaseStudy,
} from "@/data/institutional-case-studies";


const METRIC_ICONS = {
  users: Users,
  layers: Layers3,
  workflow: Network,
  "book-open": BookOpen,
  languages: Languages,
  stethoscope: Stethoscope,
} satisfies Record<CaseMetricIcon, typeof Users>;


interface InstitutionalCaseStudyDetailProps {
  caseStudy: InstitutionalCaseStudy;
  locale: string;
}


export function InstitutionalCaseStudyDetail({
  caseStudy,
  locale,
}: InstitutionalCaseStudyDetailProps) {
  const isZh = locale === "zh-CN";

  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1628] pt-20 text-white">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:min-h-[620px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
          <div className="relative z-10 flex min-w-0 items-center px-6 py-12 sm:px-10 md:px-14 lg:px-[max(3.5rem,calc((100vw-1280px)/2))] lg:pr-14">
            <div className="min-w-0 max-w-2xl [overflow-wrap:anywhere]">
              <Link
                href="/insights"
                className="mb-9 inline-flex items-center gap-1.5 text-sm text-white/60 no-underline transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {isZh ? "返回洞察与案例" : "Back to Insights"}
              </Link>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D8AB50]">
                {caseStudy.category}
              </p>
              <h1 className="mb-6 max-w-full break-words font-display text-3xl font-bold leading-[1.14] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                {caseStudy.headline}
              </h1>
              <div className="mb-7 border-l-2 border-[#C4922A] pl-4">
                <p className="break-words text-sm font-semibold leading-relaxed text-white md:text-base">
                  {caseStudy.clientName}
                </p>
                <p className="mt-1 break-words text-sm leading-relaxed text-white/60">
                  {caseStudy.projectName}
                </p>
              </div>
              <p className="break-words text-base leading-8 text-white/70">
                {caseStudy.summary}
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] min-h-[360px] lg:aspect-auto lg:min-h-0">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/30 via-transparent to-transparent lg:block" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4922A] via-[#D8AB50] to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#E3E5EC] bg-white py-10 md:py-12">
        <div className="container">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {caseStudy.metrics.map((metric) => {
              const Icon = METRIC_ICONS[metric.icon];
              return (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="border-l-2 border-[#C4922A] bg-[#F8F9FC] px-4 py-5 md:px-6"
                >
                  <Icon className="mb-3 h-5 w-5 text-[#00438A]" />
                  <p className="font-display text-2xl font-bold text-[#0A1628] md:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#3C3A47] md:text-sm">
                    {metric.label}
                  </p>
                  {metric.subtext && (
                    <p className="mt-1 text-[11px] text-[#8A889A]">
                      {metric.subtext}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="eyebrow">{isZh ? "项目语境" : "Programme Context"}</p>
              <h2 className="mb-6 font-display text-3xl font-bold text-[#0A1628] md:text-4xl">
                {caseStudy.contextTitle}
              </h2>
              <div className="space-y-4 text-base leading-8 text-[#3C3A47]">
                {caseStudy.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="self-start border-l-4 border-[#C4922A] bg-[#F5F3EF] p-7 md:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#00438A]">
                {isZh ? "核心挑战" : "Core Challenge"}
              </p>
              <h2 className="mb-5 font-display text-2xl font-bold leading-snug text-[#0A1628]">
                {caseStudy.challengeTitle}
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[#3C3A47] md:text-base">
                {caseStudy.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FC]">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">{isZh ? "解决方案" : "Our Approach"}</p>
              <h2 className="mb-5 font-display text-3xl font-bold text-[#0A1628] md:text-4xl">
                {caseStudy.solutionTitle}
              </h2>
              <p className="text-base leading-8 text-[#3C3A47]">
                {caseStudy.solutionIntro}
              </p>
            </div>

            {caseStudy.modules && (
              <div className="grid gap-7 lg:grid-cols-2">
                {caseStudy.modules.map((module, index) => (
                  <article
                    key={module.title}
                    className="overflow-hidden border border-[#E3E5EC] bg-white shadow-sm"
                  >
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={module.image}
                        alt={module.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute left-0 top-0 bg-[#0A1628] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        {isZh ? `模块 ${index + 1}` : `Module ${index + 1}`}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="mb-3 font-display text-2xl font-bold text-[#0A1628]">
                        {module.title}
                      </h3>
                      <p className="mb-5 text-sm leading-7 text-[#3C3A47] md:text-base">
                        {module.description}
                      </p>
                      <ul className="space-y-3">
                        {module.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-[#3C3A47]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C4922A]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding overflow-hidden bg-[#0A1628] text-white">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D8AB50]">
                {isZh ? "设计与实施路径" : "Design & Delivery Path"}
              </p>
              <h2 className="mb-5 font-display text-3xl font-bold md:text-4xl">
                {caseStudy.methodTitle}
              </h2>
              <p className="text-base leading-8 text-white/70">
                {caseStudy.methodIntro}
              </p>
            </div>

            <div
              className={`grid gap-4 md:grid-cols-2 ${
                caseStudy.methodSteps.length === 5
                  ? "xl:grid-cols-5"
                  : "xl:grid-cols-4"
              }`}
            >
              {caseStudy.methodSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative border border-white/10 bg-white/[0.055] p-6"
                >
                  <span className="mb-5 block font-display text-3xl font-bold text-[#D8AB50]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F3EF]">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow">{isZh ? "课堂实践" : "Applied Practice"}</p>
                <h2 className="mb-5 font-display text-3xl font-bold text-[#0A1628] md:text-4xl">
                  {caseStudy.practiceTitle}
                </h2>
              </div>
              <div className="space-y-4 text-base leading-8 text-[#3C3A47]">
                {caseStudy.practice.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
              {caseStudy.gallery.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className={index === 0 ? "md:row-span-2" : ""}
                >
                  <div
                    className={`relative overflow-hidden bg-[#DDE2EA] ${
                      index === 0
                        ? "aspect-[4/3] md:h-full md:min-h-[500px] md:aspect-auto"
                        : "aspect-[3/2]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 60vw"
                          : "(max-width: 768px) 100vw, 40vw"
                      }
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[#6F6B7B]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">{isZh ? "阶段成果" : "Outcomes"}</p>
              <h2 className="mb-6 font-display text-3xl font-bold text-[#0A1628] md:text-4xl">
                {caseStudy.outcomesTitle}
              </h2>
              <div className="space-y-4">
                {caseStudy.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C4922A]" />
                    <p className="text-base leading-8 text-[#3C3A47]">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8F9FC] p-7 md:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#00438A]">
                {isZh ? "案例启示" : "What This Case Demonstrates"}
              </p>
              <h2 className="mb-5 font-display text-2xl font-bold leading-snug text-[#0A1628] md:text-3xl">
                {caseStudy.conclusionTitle}
              </h2>
              <div className="space-y-4 text-base leading-8 text-[#3C3A47]">
                {caseStudy.conclusion.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00438A] py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">
                {caseStudy.ctaTitle}
              </h2>
              <p className="text-sm leading-7 text-white/70 md:text-base">
                {caseStudy.ctaDescription}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#C4922A] px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#A97C20]"
            >
              {isZh ? "咨询机构培训" : "Discuss Institutional Training"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
