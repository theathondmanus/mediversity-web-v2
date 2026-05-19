"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
    [t("footer.sectionPrograms")]: [
      { label: t("nav.pillars.medicalEnglish"), href: "/programmes/medical-english" },
      { label: t("nav.pillars.research"), href: "/programmes/research-academic" },
      { label: t("nav.pillars.observership"), href: "/programmes/observership" },
      { label: t("nav.pillars.humanities"), href: "/programmes/humanities" },
    ],
    [t("footer.sectionCompany")]: [
      { label: t("nav.about"), href: "/about" },
      { label: t("nav.insights"), href: "/insights" },
      { label: t("nav.medicalNavigator"), href: "/medical-navigator" },
    ],
    [t("footer.sectionSupport")]: [
      { label: t("nav.contact"), href: "/contact" },
      { label: t("footer.privacyPolicy"), href: "/privacy" },
      { label: t("footer.termsOfService"), href: "/terms" },
    ],
  };

  return (
    <footer className="bg-[#0E0C19] text-white">
      {/* CTA Banner */}
      <div className="bg-[#00438A]">
        <div className="container py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 font-display">
              {t("footer.ctaTitle")}
            </h3>
            <p className="text-blue-100 text-lg">{t("footer.ctaSubtitle")}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/programmes"
              className="px-6 py-3 bg-white text-[#00438A] font-semibold rounded-md hover:bg-blue-50 transition-colors no-underline text-sm"
            >
              {t("footer.explorePrograms")}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors no-underline text-sm flex items-center gap-2"
            >
              {t("footer.contactUs")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/brand/logo-128.png" alt="Mediversity Global" className="h-9 w-auto" />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Mediversity<span className="font-light ml-1">Global</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {t("footer.brandDescription")}
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 shrink-0" />
                <span>{t("footer.locations")}</span>
              </div>
              <a
                href="mailto:enquiries@mediversityglobal.com"
                className="text-gray-400 hover:text-white transition-colors no-underline block"
              >
                enquiries@mediversityglobal.com
              </a>
              <a
                href="tel:+447345169054"
                className="text-gray-400 hover:text-white transition-colors no-underline block"
              >
                +44 (0)7345 169 054
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[#C4922A] uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3 list-none p-0">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-500">{t("footer.accredited")}</p>
            <p className="text-xs text-gray-500">{t("footer.icp")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
