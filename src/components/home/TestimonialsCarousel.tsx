"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-32 bg-[#F7F8FA]">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-[11px] font-semibold text-[#00438A] tracking-[0.15em] uppercase mb-4">
            {t("home.testimonials.label")}
          </span>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#0A1628] leading-tight mb-4">
            {t("home.testimonials.title")}
          </h2>
          <p className="text-[#3C3A47] text-lg leading-relaxed">
            {t("home.testimonials.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-6 md:basis-1/2"
                >
                  <div className="h-full bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#E3E5EC]/60 flex flex-col">
                    {/* Quote icon */}
                    <Quote
                      className="w-8 h-8 mb-6 shrink-0"
                      style={{ color: `${item.accent}40` }}
                    />

                    {/* Content */}
                    <p className="text-[#3C3A47] text-[15px] leading-[1.75] flex-1 mb-8">
                      &ldquo;{t(item.content)}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-[#E3E5EC]">
                      {/* Avatar with initials */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0A1628] text-sm">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#8A889A] mt-0.5">
                          {t(item.role)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
