"use client";

import { useState, useEffect, useRef } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown, Globe, GraduationCap, Microscope, Stethoscope, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  const PILLARS = [
    {
      icon: GraduationCap,
      label: t("nav.pillars.medicalEnglish"),
      desc: t("nav.pillars.medicalEnglishDesc"),
      href: "/programmes/medical-english" as const,
    },
    {
      icon: Microscope,
      label: t("nav.pillars.research"),
      desc: t("nav.pillars.researchDesc"),
      href: "/programmes/research-academic" as const,
    },
    {
      icon: Stethoscope,
      label: t("nav.pillars.observership"),
      desc: t("nav.pillars.observershipDesc"),
      href: "/programmes/observership" as const,
    },
    {
      icon: BookOpen,
      label: t("nav.pillars.humanities"),
      desc: t("nav.pillars.humanitiesDesc"),
      href: "/programmes/humanities" as const,
    },
  ];

  const NAV_ITEMS = [
    { label: t("nav.medicalNavigator"), href: "/medical-navigator" as const },
    { label: t("nav.insights"), href: "/insights" as const },
    { label: t("nav.about"), href: "/about" as const },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const headerBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#0E0C19]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#00438A]" : "text-white";

  const targetLocale = locale === "zh-CN" ? "en" : "zh-CN";
  const handleSwitchLocale = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container flex items-center justify-between h-[72px] md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <span className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
            Mediversity<span className="font-light ml-1">Global</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Programmes with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <Link
              href="/programmes"
              className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-md no-underline flex items-center gap-1 ${textColor} hover:bg-white/10`}
            >
              {t("nav.programmes")}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-xl shadow-2xl border border-[#E3E5EC] p-6 grid grid-cols-2 gap-4"
                >
                  {PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <Link
                        key={pillar.href}
                        href={pillar.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0F4F8] transition-colors no-underline group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#00438A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00438A]/20 transition-colors">
                          <Icon className="w-5 h-5 text-[#00438A]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0E0C19] group-hover:text-[#00438A] transition-colors">
                            {pillar.label}
                          </p>
                          <p className="text-xs text-[#8A889A] mt-0.5 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-3 mt-2 border-t border-[#E3E5EC]">
                    <Link
                      href="/programmes"
                      className="text-xs font-medium text-[#00438A] hover:underline no-underline"
                    >
                      {t("nav.viewAllProgrammes")} →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Items */}
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-md no-underline ${textColor} hover:bg-white/10`}
            >
              {item.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={handleSwitchLocale}
            className={`ml-2 px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              scrolled || !isHome
                ? "border-[#E3E5EC] text-[#3C3A47] hover:bg-[#F0F2F6] bg-transparent"
                : "border-white/30 text-white hover:bg-white/10 bg-transparent"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "zh-CN" ? "EN" : "中文"}
          </button>

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 bg-[#00438A] text-white text-sm font-medium rounded-md hover:bg-[#003066] transition-colors no-underline"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleSwitchLocale}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all flex items-center gap-1 cursor-pointer ${
              scrolled || !isHome
                ? "border-[#E3E5EC] text-[#3C3A47] bg-transparent"
                : "border-white/30 text-white bg-transparent"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "zh-CN" ? "EN" : "中文"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-md transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E3E5EC] overflow-hidden shadow-lg"
          >
            <nav className="container py-4 space-y-1">
              {/* Programmes Section */}
              <div className="px-4 py-2">
                <Link href="/programmes" className="block text-[#0E0C19] font-semibold text-sm mb-2 no-underline">
                  {t("nav.programmes")}
                </Link>
                <div className="space-y-1 pl-2">
                  {PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <Link
                        key={pillar.href}
                        href={pillar.href}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#3C3A47] rounded-md hover:bg-[#F0F2F6] no-underline"
                      >
                        <Icon className="w-4 h-4 text-[#00438A]" />
                        {pillar.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[#E3E5EC] my-2" />

              {/* Other Items */}
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-[#0E0C19] font-medium rounded-md hover:bg-[#F0F2F6] no-underline"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-[#00438A] text-white font-medium rounded-md no-underline"
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
