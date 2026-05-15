"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface CourseItem {
  titleKey: string;
  status: "active" | "future";
  /** If set, the card links to /programmes/{category}/{slug} */
  slug?: string;
}

export interface SubCategory {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  courses: CourseItem[];
}

interface PillarLandingPageProps {
  /** The i18n namespace key, e.g. "medicalEnglish" */
  pillarKey: string;
  /** The URL category slug, e.g. "medical-english" */
  categorySlug: string;
  icon: LucideIcon;
  color: string;
  subcategories: SubCategory[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function PillarLandingPage({
  pillarKey,
  categorySlug,
  icon: PillarIcon,
  color,
  subcategories,
}: PillarLandingPageProps) {
  const t = useTranslations(`programmes.${pillarKey}`);
  const tCommon = useTranslations("common");

  const activeCourses = subcategories.flatMap((sub) =>
    sub.courses.filter((c) => c.status === "active"),
  );
  const futureCourses = subcategories.flatMap((sub) =>
    sub.courses.filter((c) => c.status === "future"),
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A1628] to-[#00438A]">
        <div className="container">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-1 text-white/60 text-sm mb-6 hover:text-white/80 no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> {tCommon("backToProgrammes")}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}
            >
              <PillarIcon className="w-7 h-7" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
              {t("title")}
            </h1>
          </div>
          <p className="text-white/70 max-w-2xl text-lg">{t("description")}</p>
          <div className="flex gap-6 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#C4922A]">
                {activeCourses.length}
              </p>
              <p className="text-xs text-white/60">{tCommon("activeCourses")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white/40">
                {futureCourses.length}
              </p>
              <p className="text-xs text-white/60">{tCommon("futureCourses")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-16">
            {subcategories.map((sub) => {
              const Icon = sub.icon;
              const active = sub.courses.filter((c) => c.status === "active");
              return (
                <motion.div
                  key={sub.id}
                  id={sub.id}
                  {...fadeInUp}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#0A1628]">
                        {t(`subcategories.${sub.id}.title`)}
                      </h2>
                      <p className="text-sm text-[#8A889A]">
                        {t(`subcategories.${sub.id}.desc`)}
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-13">
                    {active.map((course) => {
                      const cardContent = (
                        <Card className="hover:shadow-md transition-shadow border h-full">
                          <CardContent className="p-5 h-full flex flex-col">
                            <h3 className="font-semibold text-[#0A1628] text-sm mb-2 flex-1">
                              {t(`courses.${course.titleKey}`)}
                            </h3>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#00438A] mt-auto">
                              {tCommon("viewDetails")}{" "}
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </CardContent>
                        </Card>
                      );

                      if (course.slug) {
                        return (
                          <Link
                            key={course.titleKey}
                            href={
                              `/programmes/${categorySlug}/${course.slug}` as never
                            }
                            className="no-underline block group"
                          >
                            {cardContent}
                          </Link>
                        );
                      }

                      return (
                        <div key={course.titleKey} className="opacity-80">
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Programmes */}
      {futureCourses.length > 0 && (
        <section className="py-12 bg-[#FAFBFC] border-t border-[#E3E5EC]">
          <div className="container">
            <h3 className="text-sm font-semibold text-[#8A889A] uppercase tracking-wider mb-4">
              {tCommon("futureProgrammes")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {futureCourses.map((course) => (
                <span
                  key={course.titleKey}
                  className="px-3 py-1.5 bg-[#C4922A]/10 text-[#C4922A] text-xs font-medium rounded-full"
                >
                  {t(`courses.${course.titleKey}`)}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
