import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink } from "lucide-react";
import { getInsight, getAllInsightPaths, getAllInsightSummaries } from "@/lib/insights";
import { renderMarkdown } from "@/lib/markdown";

interface InsightDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightPaths();
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const { locale, slug } = await params;
  const article = getInsight(slug, locale);
  if (!article) return { title: "Insight" };
  return {
    title: `${article.title} · Mediversity Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { locale, slug } = await params;
  const article = getInsight(slug, locale);
  const t = await getTranslations("insightDetail");

  if (!article) {
    notFound();
  }

  // Related: same locale, exclude current, take 3
  const related = getAllInsightSummaries(locale)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-[#0A1628] to-[#00438A]">
        <div className="container max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-white/60 text-sm mb-6 hover:text-white/80 no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> {t("backToInsights")}
          </Link>

          {article.category && (
            <span className="text-xs uppercase tracking-wide text-[#C4922A] font-semibold mb-3 inline-block">
              {article.category}
            </span>
          )}

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="inline-flex items-center gap-1">
              <User className="w-4 h-4" /> {article.author}
            </span>
            {article.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {article.date}
              </span>
            )}
            {article.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose-custom">{renderMarkdown(article.body)}</div>

          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E3E5EC] flex flex-wrap items-center gap-2 text-sm">
              <Tag className="w-4 h-4 text-[#8A889A]" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F4F2EE] text-[#3C3A47] px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {article.source && (
            <p className="mt-6 text-sm text-[#8A889A]">
              {t("sourceLabel")}{" "}
              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00438A] hover:underline inline-flex items-center gap-1"
              >
                {article.source} <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          )}
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-12 bg-[#FAFBFC] border-t border-[#E3E5EC]">
          <div className="container max-w-5xl">
            <h2 className="font-display text-xl font-bold text-[#0A1628] mb-6">
              {t("related")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}` as never}
                  className="no-underline group block bg-white border border-[#E3E5EC] rounded-lg p-5 hover:border-[#00438A]/30 hover:shadow-md transition-all"
                >
                  {rel.category && (
                    <span className="text-xs uppercase tracking-wide text-[#C4922A] font-semibold mb-2 block">
                      {rel.category}
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-[#0E0C19] text-base mb-2 group-hover:text-[#00438A] transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#8A889A]">{rel.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
