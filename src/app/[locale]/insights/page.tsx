import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import { ARTICLES } from "@/data/insights";

export default async function InsightsPage() {
  const t = await getTranslations("insights");

  // 已按日期降序
  const sorted = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A1628] to-[#00438A]">
        <div className="container">
          <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-[11px] font-semibold rounded-full mb-5 tracking-wider uppercase">
            {t("eyebrow")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-white">
        <div className="container">
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center no-underline"
          >
            <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-xl bg-[#0A1628]">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition group-hover:scale-[1.02]"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs text-[#8A889A] mb-4">
                <span className="inline-flex items-center gap-1.5 text-[#00438A] font-semibold">
                  <Tag className="w-3.5 h-3.5" /> {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {featured.date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] leading-snug group-hover:text-[#00438A] transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-[#3C3A47] leading-relaxed line-clamp-4">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00438A] group-hover:gap-2.5 transition-all">
                {t("readMore")} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      {rest.length > 0 && (
        <section className="pb-24 bg-white">
          <div className="container">
            <div className="border-t border-[#E3E5EC] pt-12">
              <h3 className="font-display text-lg font-semibold text-[#0A1628] mb-8">
                {t("moreTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}`}
                    className="group flex flex-col no-underline"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#0A1628] mb-4">
                      <Image
                        src={a.cover}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#8A889A] mb-2">
                      <span className="text-[#00438A] font-semibold">{a.category}</span>
                      <span>·</span>
                      <span>{a.date}</span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-[#0A1628] leading-snug group-hover:text-[#00438A] transition-colors">
                      {a.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#8A889A] line-clamp-3">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
