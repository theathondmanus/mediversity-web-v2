"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
    [t("footer.sectionPrograms")]: [
      { label: t("footer.linkMedicalEnglish"), href: "/programmes/medical-english" },
      { label: t("footer.linkResearch"), href: "/programmes/research-academic" },
      { label: t("footer.linkObservership"), href: "/programmes/observership" },
      { label: t("footer.linkHumanities"), href: "/programmes/humanities" },
    ],
    [t("footer.sectionCompany")]: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.medicalNavigator"), href: "/medical-navigator" },
      { label: t("footer.insights"), href: "/insights" },
    ],
    [t("footer.sectionSupport")]: [
      { label: t("footer.contactUs"), href: "/contact" },
      { label: t("footer.privacyPolicy"), href: "/privacy" },
      { label: t("footer.termsOfService"), href: "/terms" },
    ],
  };

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#00438A] to-[#003370]">
        <div className="container py-14 md:py-18 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">
              {t("footer.ctaTitle")}
            </h3>
            <p className="text-blue-100/80 text-lg">{t("footer.ctaSubtitle")}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/programmes"
              className="px-7 py-3.5 bg-white text-[#00438A] font-semibold rounded-lg hover:bg-blue-50 transition-colors no-underline text-sm"
            >
              {t("footer.explorePrograms")}
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline text-sm flex items-center gap-2"
            >
              {t("footer.contactUs")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Mediversity<span className="font-light ml-1 text-white/70">Global</span>
            </span>
            <p className="mt-5 text-sm text-[#8A889A] leading-relaxed">
              {t("footer.brandDescription")}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-[#8A889A]">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 shrink-0 text-[#C4922A]" />
                <span>{t("footer.locations")}</span>
              </div>
              <a
                href="mailto:enquiries@mediversityglobal.com"
                className="text-[#8A889A] hover:text-white transition-colors no-underline block"
              >
                enquiries@mediversityglobal.com
              </a>
              <a
                href="tel:+447345169054"
                className="text-[#8A889A] hover:text-white transition-colors no-underline block"
              >
                +44 (0)7345 169 054
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-semibold text-[#C4922A] uppercase tracking-[0.15em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3 list-none p-0">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as never}
                      className="text-sm text-[#8A889A] hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A889A]/70">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#8A889A]/70">{t("footer.accredited")}</p>
            <p className="text-xs text-[#8A889A]/70">{t("footer.icp")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
