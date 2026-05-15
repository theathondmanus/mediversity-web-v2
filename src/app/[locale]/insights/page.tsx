import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import { HeroCurve } from "@/components/ui/hero-curve";
import { FadeIn } from "@/components/ui/fade-in";
import { getAllInsightSummaries } from "@/lib/insights";

interface InsightsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("insights");
  const insights = getAllInsightSummaries(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0A1628] to-[#00438A] overflow-hidden">
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
        <HeroCurve />
      </section>

      {/* Article list */}
      <section className="section-padding bg-white">
        <div className="container">
          {insights.length === 0 ? (
            <FadeIn className="max-w-2xl mx-auto text-center py-16">
              <Newspaper className="w-16 h-16 text-[#E3E5EC] mx-auto mb-6" />
              <h2 className="text-xl font-semibold text-[#0A1628] mb-3">
                {t("empty.title")}
              </h2>
              <p className="text-[#8A889A]">{t("empty.desc")}</p>
            </FadeIn>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {insights.map((article, idx) => (
                <FadeIn key={article.slug} index={idx}>
                  <Link
                    href={`/insights/${article.slug}` as never}
                    className="no-underline group block h-full"
                  >
                    <article className="bg-white border border-[#E3E5EC] rounded-xl overflow-hidden h-full flex flex-col hover:border-[#00438A]/30 hover:shadow-lg transition-all duration-300">
                      {article.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={article.cover}
                          alt={article.title}
                          className="w-full aspect-video object-cover bg-[#F4F2EE]"
                        />
                      ) : (
                        <div className="w-full aspect-video bg-gradient-to-br from-[#0A1628] to-[#00438A] flex items-center justify-center">
                          <Newspaper className="w-12 h-12 text-white/20" />
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        {article.category && (
                          <span className="text-xs uppercase tracking-wide text-[#C4922A] font-semibold mb-2">
                            {article.category}
                          </span>
                        )}

                        <h2 className="font-display font-semibold text-lg text-[#0E0C19] mb-3 group-hover:text-[#00438A] transition-colors">
                          {article.title}
                        </h2>

                        <p className="text-sm text-[#3C3A47] leading-relaxed mb-4 flex-1">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-[#8A889A] mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          {article.readTime && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#00438A] group-hover:gap-2 transition-all">
                          {t("readMore")} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
