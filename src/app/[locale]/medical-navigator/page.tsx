"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  HeartPulse,
  Zap,
  Leaf,
  Phone,
  Mail,
  MessageCircle,
  Compass,
  Plane,
  Building2,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import DualDirectionCards from "@/components/medical-navigator/DualDirectionCards";
import CaseShowcase, { type CaseStudy } from "@/components/medical-navigator/CaseShowcase";
import content from "../../../../content/pages/medical-navigator.json";

/* ── Map JSON case items to CaseStudy shape ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const caseStudies: CaseStudy[] = content.cases.items.map((item: any, idx: number) => ({
  id: `case-${idx}`,
  type: item.type,
  narrative: item.narrative,
  quote: item.quote,
  identity: item.identity,
  milestones: item.milestones,
  location: item.location,
  image: item.image,
  featured: idx === 0,
}));

type Locale = "zh-CN" | "en";

// Helper to get bilingual text
function t2(obj: { "zh-CN": string; en: string }, locale: Locale): string {
  return obj[locale] || obj["en"];
}

// Helper to get bilingual array
function t2arr(obj: { "zh-CN": string[]; en: string[] }, locale: Locale): string[] {
  return obj[locale] || obj["en"];
}

const SERVICE_ICONS = {
  preventive: Shield,
  major: HeartPulse,
  rapid: Zap,
  tcm: Leaf,
} as const;

/* ── Sticky TOC anchors ── */
const TOC_ITEMS = [
  { id: "directions", labelZh: "双向导航", labelEn: "Directions" },
  { id: "services", labelZh: "核心服务", labelEn: "Services" },
  { id: "process", labelZh: "服务流程", labelEn: "Process" },
  { id: "cases", labelZh: "客户案例", labelEn: "Cases" },
  { id: "partners", labelZh: "合作机构", labelEn: "Partners" },
  { id: "contact", labelZh: "联系我们", labelEn: "Contact" },
];

export default function MedicalNavigatorPage() {
  const locale = useLocale() as Locale;
  const [activeSection, setActiveSection] = useState("directions");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          § 1  HERO
          ═══════════════════════════════════════════════════ */}
      <HeroSection
        image="/images/hero/medical-navigator.webp"
        imageAlt="International medical team reviewing global healthcare network"
      >
        <FadeIn>
          <p className="eyebrow !text-[#C4922A]/80 mb-3">
            {t2(content.hero.eyebrow, locale)}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
            {t2(content.hero.title, locale)}
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed md:whitespace-nowrap">
            {t2(content.hero.lede, locale)}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4922A] text-white font-medium rounded-md hover:bg-[#A87822] transition-colors no-underline shadow-lg shadow-[#C4922A]/25"
            >
              <Plane className="w-4 h-4" />
              {t2(content.hero.ctaInbound, locale)}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors no-underline"
            >
              <Compass className="w-4 h-4" />
              {t2(content.hero.ctaOutbound, locale)}
            </a>
          </div>
        </FadeIn>
      </HeroSection>

      {/* ── Sticky TOC (desktop only) ── */}
      <nav className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <ul className="space-y-2 list-none p-0 m-0">
          {TOC_ITEMS.map(({ id, labelZh, labelEn }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-xs px-3 py-1.5 rounded-full transition-all no-underline ${
                  activeSection === id
                    ? "bg-[#C4922A] text-white shadow-md"
                    : "text-[#8A889A] hover:text-[#0A1628] hover:bg-[#F5F3EF]"
                }`}
              >
                {locale === "zh-CN" ? labelZh : labelEn}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ═══════════════════════════════════════════════════
          § 2  DUAL-DIRECTION OVERVIEW (with creative effects)
          ═══════════════════════════════════════════════════ */}
      <section id="directions" className="section-padding bg-white scroll-mt-20">
        <div className="container">
          <DualDirectionCards
            sectionTitle={t2(content.directions.title, locale)}
            sectionSubtitle={t2(content.directions.subtitle, locale)}
            inbound={{
              title: t2(content.directions.inbound.title, locale),
              desc: t2(content.directions.inbound.desc, locale),
              scenarios: t2arr(content.directions.inbound.scenarios, locale),
              cta: t2(content.directions.inbound.cta, locale),
            }}
            outbound={{
              title: t2(content.directions.outbound.title, locale),
              desc: t2(content.directions.outbound.desc, locale),
              scenarios: t2arr(content.directions.outbound.scenarios, locale),
              cta: t2(content.directions.outbound.cta, locale),
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 3  CORE SERVICE AREAS (4 cards)
          ═══════════════════════════════════════════════════ */}
      <section id="services" className="section-padding scroll-mt-20" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <FadeIn className="text-center mb-14">
            <p className="eyebrow">{t2(content.services.title, locale)}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t2(content.services.subtitle, locale)}
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.services.items.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.key as keyof typeof SERVICE_ICONS];
              return (
                <FadeIn key={service.key} index={idx}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                    {/* Colored top accent bar */}
                    <div className="h-1.5" style={{ backgroundColor: service.color }} />
                    <CardContent className="p-6 flex flex-col h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#0A1628] mb-1">
                        {t2(service.title, locale)}
                      </h3>
                      <p className="text-xs text-[#8A889A] mb-4 italic">
                        {t2(service.tagline, locale)}
                      </p>
                      <ul className="space-y-2 flex-1">
                        {t2arr(service.items, locale).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#3C3A47]">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                              style={{ backgroundColor: service.color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 4  PROCESS TIMELINE (6 steps)
          ═══════════════════════════════════════════════════ */}
      <section id="process" className="section-padding bg-white scroll-mt-20">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <p className="eyebrow">{t2(content.process.title, locale)}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t2(content.process.subtitle, locale)}
            </h2>
          </FadeIn>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="grid grid-cols-6 gap-4">
              {content.process.steps.map((step, idx) => {
                const isHighlight = step.highlight;
                return (
                  <FadeIn key={idx} index={idx}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Step number */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 ${
                          isHighlight
                            ? "bg-[#C4922A] text-white shadow-lg shadow-[#C4922A]/30 ring-4 ring-[#C4922A]/20"
                            : "bg-[#00438A]/10 text-[#00438A]"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      {/* Connector line */}
                      {idx < 5 && (
                        <div className="absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-[#E3E5EC]" />
                      )}
                      <h4
                        className={`text-sm font-semibold mb-2 leading-tight ${
                          isHighlight ? "text-[#C4922A]" : "text-[#0A1628]"
                        }`}
                      >
                        {t2(step.title, locale)}
                      </h4>
                      <p className="text-xs text-[#8A889A] leading-relaxed">
                        {t2(step.desc, locale)}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden space-y-0">
            {content.process.steps.map((step, idx) => {
              const isHighlight = step.highlight;
              return (
                <FadeIn key={idx} index={idx}>
                  <div className="flex gap-4">
                    {/* Left: number + line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          isHighlight
                            ? "bg-[#C4922A] text-white shadow-lg shadow-[#C4922A]/30 ring-4 ring-[#C4922A]/20"
                            : "bg-[#00438A]/10 text-[#00438A]"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      {idx < 5 && <div className="w-0.5 flex-1 bg-[#E3E5EC] my-2" />}
                    </div>
                    {/* Right: content */}
                    <div className="pb-8">
                      <h4
                        className={`text-sm font-semibold mb-1 ${
                          isHighlight ? "text-[#C4922A]" : "text-[#0A1628]"
                        }`}
                      >
                        {t2(step.title, locale)}
                      </h4>
                      <p className="text-sm text-[#8A889A] leading-relaxed">
                        {t2(step.desc, locale)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 5  CLIENT CASES — 1-main + carousel
          ═══════════════════════════════════════════════════ */}
      <section id="cases" className="section-padding scroll-mt-20" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <CaseShowcase
            sectionTitle={t2(content.cases.title, locale)}
            sectionSubtitle={t2(content.cases.subtitle, locale)}
            cases={caseStudies}
            locale={locale}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 6  PARTNER LOGO WALL
          ═══════════════════════════════════════════════════ */}
      <section id="partners" className="section-padding bg-white scroll-mt-20">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628]">
              {t2(content.partners.title, locale)}
            </h2>
          </FadeIn>

          <div className="flex flex-wrap items-center justify-center gap-12 max-w-3xl mx-auto">
            {content.partners.logos.map((logo, idx) => (
              <FadeIn key={idx} index={idx}>
                <div className="group flex flex-col items-center gap-3">
                  {/* Placeholder logo block — grayscale, hover color */}
                  <div className="w-20 h-20 rounded-xl bg-[#F5F3EF] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Building2 className="w-8 h-8 text-[#8A889A] group-hover:text-[#00438A] transition-colors" />
                  </div>
                  <span className="text-xs text-[#8A889A] group-hover:text-[#0A1628] transition-colors text-center">
                    {locale === "zh-CN" ? logo.name : logo.nameEn}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          {/* TODO: Replace Building2 icons with actual brand logos when provided by owner (brand-assets/) */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 7  CONTACT / REACH
          ═══════════════════════════════════════════════════ */}
      <section id="contact" className="section-padding scroll-mt-20" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
              {t2(content.contact.title, locale)}
            </h2>
            <p className="text-[#3C3A47] max-w-lg mx-auto">
              {t2(content.contact.subtitle, locale)}
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {/* Contact channels */}
            <FadeIn>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <a
                  href={`tel:${content.contact.phone.replace(/\s|\(|\)/g, "")}`}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-[#E3E5EC] hover:shadow-md transition-shadow no-underline"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00438A]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00438A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A889A]">UK</p>
                    <p className="text-sm font-medium text-[#0A1628]">{content.contact.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-[#E3E5EC] hover:shadow-md transition-shadow no-underline"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C4922A]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C4922A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A889A]">Email</p>
                    <p className="text-sm font-medium text-[#0A1628] break-all">{content.contact.email}</p>
                  </div>
                </a>

                {/* WhatsApp — placeholder */}
                <div className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-[#E3E5EC] opacity-60">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8A889A]">WhatsApp</p>
                    <p className="text-sm text-[#8A889A] italic">
                      {locale === "zh-CN" ? "即将开通" : "Coming soon"}
                    </p>
                    {/* TODO: Add WhatsApp number when provided by owner */}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Dual CTA */}
            <FadeIn>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#00438A] text-white font-medium rounded-xl hover:bg-[#003066] transition-colors no-underline shadow-md"
                >
                  {t2(content.contact.ctaC, locale)}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#C4922A] text-white font-medium rounded-xl hover:bg-[#A87822] transition-colors no-underline shadow-md"
                >
                  {t2(content.contact.ctaB, locale)}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          § 8  DARK CTA BAR
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A1628] py-16 md:py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">
              {t2(content.darkCta.title, locale)}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4922A] text-white font-medium rounded-md hover:bg-[#A87822] transition-colors no-underline shadow-lg shadow-[#C4922A]/25"
              >
                {t2(content.darkCta.cta1, locale)}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {/* TODO: Link to actual service guide PDF when available */}
              <button
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => {
                  // Placeholder — toast or download when PDF is ready
                  alert(locale === "zh-CN" ? "服务手册即将上线" : "Service guide coming soon");
                }}
              >
                {t2(content.darkCta.cta2, locale)}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
