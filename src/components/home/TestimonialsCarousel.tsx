"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const t = useTranslations();

  return (
    <section className="section-padding bg-[#F0F4F8]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            {t("home.testimonials.title")}
          </h2>
          <p className="text-[#3C3A47] max-w-2xl mx-auto">
            {t("home.testimonials.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full bg-white border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-[#C4922A]/40 mb-4 shrink-0" />
                      <p className="text-[#3C3A47] text-sm leading-relaxed flex-1 mb-4">
                        {t(item.content)}
                      </p>
                      <div className="border-t border-[#E3E5EC] pt-4">
                        <p className="font-semibold text-[#0E0C19] text-sm">{item.name}</p>
                        <p className="text-xs text-[#8A889A]">{t(item.role)}</p>
                      </div>
                    </CardContent>
                  </Card>
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
