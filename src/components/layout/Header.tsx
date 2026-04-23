"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check if current path is home
  const isHome = pathname === "/" || pathname === `/${locale}`;

  const NAV_ITEMS = [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.programs"),
      href: "/programs",
      children: [
        { label: t("programsDropdown.medicalEnglish"), href: "/programs/medical-english" },
        { label: t("programsDropdown.clinicalObservership"), href: "/programs/clinical-observership" },
        { label: t("programsDropdown.medicalHumanities"), href: "/programs/medical-humanities" },
        { label: t("programsDropdown.medicalWriting"), href: "/programs/medical-writing" },
        { label: t("programsDropdown.medicalNavigator"), href: "/programs/medical-navigator" },
      ],
    },
    { label: t("nav.caseStudies"), href: "/case-studies" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const headerBg = scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#0E0C19]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#00438A]" : "text-white";

  // Language switch URL
  const switchLocaleHref = locale === "zh-CN" ? "/en" : "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container flex items-center justify-between h-[72px] md:h-20">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
            Mediversity<span className="font-light ml-1">Global</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setDropdownOpen(true)}
              onMouseLeave={() => item.children && setDropdownOpen(false)}
            >
              <Link
                href={item.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md no-underline flex items-center gap-1 ${textColor} hover:bg-white/10`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-[#E3E5EC] py-2 overflow-hidden"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#3C3A47] hover:bg-[#F0F2F6] hover:text-[#00438A] transition-colors no-underline"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Language Switcher */}
          <Link
            href={switchLocaleHref}
            locale={locale === "zh-CN" ? "en" : "zh-CN"}
            className={`ml-2 px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-200 flex items-center gap-1.5 no-underline ${
              scrolled || !isHome
                ? "border-[#E3E5EC] text-[#3C3A47] hover:bg-[#F0F2F6]"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "zh-CN" ? "EN" : "中文"}
          </Link>

          <Link
            href="/contact"
            className="ml-3 px-5 py-2 bg-[#00438A] text-white text-sm font-medium rounded-md hover:bg-[#003066] transition-colors no-underline"
          >
            {t("nav.getInTouch")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={switchLocaleHref}
            locale={locale === "zh-CN" ? "en" : "zh-CN"}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all flex items-center gap-1 no-underline ${
              scrolled || !isHome
                ? "border-[#E3E5EC] text-[#3C3A47]"
                : "border-white/30 text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "zh-CN" ? "EN" : "中文"}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-md transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E3E5EC] overflow-hidden"
          >
            <nav className="container py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[#0E0C19] font-medium rounded-md hover:bg-[#F0F2F6] no-underline"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#3C3A47] rounded-md hover:bg-[#F0F2F6] no-underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-[#00438A] text-white font-medium rounded-md no-underline"
                >
                  {t("nav.getInTouch")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
