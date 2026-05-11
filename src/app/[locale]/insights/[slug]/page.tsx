import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface InsightDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const t = await getTranslations("insightDetail");

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
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="inline-flex items-center gap-1">
              <User className="w-4 h-4" /> {t("placeholder.author")}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {t("placeholder.date")}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" /> {t("placeholder.readTime")}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-[#8A889A] text-center py-12">
              {t("placeholder.body")}
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-[#FAFBFC] border-t border-[#E3E5EC]">
        <div className="container max-w-3xl">
          <h2 className="font-display text-xl font-bold text-[#0A1628] mb-6">
            {t("related")}
          </h2>
          <p className="text-sm text-[#8A889A]">{t("relatedEmpty")}</p>
        </div>
      </section>
    </>
  );
}
