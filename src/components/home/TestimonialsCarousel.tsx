"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function TestimonialsCarousel() {
  const t = useTranslations();

  return (
    <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} custom={0} className="eyebrow">
            {t("home.testimonials.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="font-display text-3xl md:text-4xl font-semibold text-[#0E0C19]">
            {t("home.testimonials.title")}
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2">
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-[#E3E5EC] relative h-full flex flex-col">
                    {/* Big decorative quote mark */}
                    <span className="absolute top-6 left-8 text-6xl font-bold text-[#C4922A]/20 leading-none font-display">
                      &ldquo;
                    </span>

                    {/* Quote text */}
                    <p className="text-[#3C3A47] leading-relaxed relative z-10 italic flex-1 mb-6 pt-4">
                      {t(item.content)}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-t border-[#E3E5EC] pt-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                        style={{ backgroundColor: item.accent || "#00438A" }}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0E0C19] text-sm">{item.name}</p>
                        <p className="text-xs text-[#8A889A]">{t(item.role)}</p>
                        {item.program && (
                          <p className="text-xs text-[#C4922A] mt-0.5">{t(item.program)}</p>
                        )}
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
