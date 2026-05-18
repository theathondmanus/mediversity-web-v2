"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";

const CONTACT_INFO = [
  { icon: Phone, key: "phone", value: "+44 (0)7345 169 054" },
  { icon: Mail, key: "email", value: "info@mediversityglobal.com" },
  { icon: MapPin, key: "address", value: "London, United Kingdom" },
  { icon: Clock, key: "hours", value: "Mon-Fri 9:00-18:00 (GMT)" },
];

/* ── Tally form embed (auto-resize iframe) ── */
const TALLY_FORM_ID = "xXRv6v";

export default function ContactPage() {
  const t = useTranslations("contact");

  // Load Tally embed script for dynamicHeight auto-resize
  useEffect(() => {
    const TALLY_SRC = "https://tally.so/widgets/embed.js";
    const existing = document.querySelector(`script[src="${TALLY_SRC}"]`);

    const loadEmbeds = () => {
      // @ts-expect-error Tally global injected by their script
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };

    if (existing) {
      loadEmbeds();
      return;
    }
    const script = document.createElement("script");
    script.src = TALLY_SRC;
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/hero/contact.webp"
        imageAlt="Aerial view of illuminated bridges connecting across a river at twilight"
      >
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </FadeIn>
      </HeroSection>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeIn index={0}>
              <h2 className="font-display text-2xl font-bold text-[#0A1628] mb-6">
                {t("info.title")}
              </h2>
              <div className="space-y-6">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#00438A]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#00438A]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0A1628]">
                          {t(`info.${item.key}`)}
                        </p>
                        <p className="text-sm text-[#3C3A47]">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* Tally Form Embed */}
            <FadeIn index={1}>
              <h2 className="font-display text-2xl font-bold text-[#0A1628] mb-6">
                {t("form.title")}
              </h2>
              <iframe
                data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                loading="lazy"
                width="100%"
                height="500"
                frameBorder={0}
                title={t("form.title")}
                className="block w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
