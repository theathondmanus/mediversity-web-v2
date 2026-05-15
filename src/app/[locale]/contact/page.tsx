"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_INFO = [
  { icon: Phone, key: "phone", value: "+44 (0)7345 169 054" },
  { icon: Mail, key: "email", value: "info@mediversityglobal.com" },
  { icon: MapPin, key: "address", value: "London, United Kingdom" },
  { icon: Clock, key: "hours", value: "Mon-Fri 9:00-18:00 (GMT)" },
];

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/hero-contact-YcHVLPaW5Pyg28SDovctox.webp"
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
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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

            {/* Contact Form */}
            <FadeIn index={1}>
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#0A1628] mb-4">
                    {t("form.title")}
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#3C3A47] mb-1">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-[#E3E5EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00438A]/20 focus:border-[#00438A]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3C3A47] mb-1">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 border border-[#E3E5EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00438A]/20 focus:border-[#00438A]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3C3A47] mb-1">
                        {t("form.message")}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2.5 border border-[#E3E5EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00438A]/20 focus:border-[#00438A] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#00438A] text-white font-medium rounded-lg hover:bg-[#003066] transition-colors"
                    >
                      {t("form.submit")}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
