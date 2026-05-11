import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, findArticle, type InsightBlock } from "@/data/insights";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

function Block({ block }: { block: InsightBlock }) {
  switch (block.t) {
    case "p":
      return <p className="text-[#3C3A47] leading-[1.85] mb-5">{block.text}</p>;
    case "h": {
      const Tag = (`h${block.level}` as unknown) as keyof React.JSX.IntrinsicElements;
      const sizeCls =
        block.level === 2
          ? "text-2xl md:text-3xl mt-12 mb-5"
          : block.level === 3
          ? "text-xl md:text-2xl mt-10 mb-4"
          : "text-lg md:text-xl mt-8 mb-3";
      return (
        <Tag className={`font-display font-bold text-[#0A1628] leading-tight ${sizeCls}`}>
          {block.text}
        </Tag>
      );
    }
    case "list": {
      if (block.ordered) {
        return (
          <ol className="list-decimal pl-6 space-y-2 text-[#3C3A47] leading-[1.85] mb-6 marker:text-[#00438A] marker:font-semibold">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="space-y-2.5 mb-6">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[#3C3A47] leading-[1.85] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.85em] before:w-2 before:h-2 before:rounded-full before:bg-[#00438A]/30"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-[#00438A] bg-[#F0F4F8] pl-6 pr-5 py-5 rounded-r-md">
          <p className="text-[#0A1628] text-lg leading-relaxed italic">{block.text}</p>
        </blockquote>
      );
    case "img":
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#0A1628]">
            {/* 远程图保留 native img，不做 next/image 优化以避免 remotePatterns 配置 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={block.src} alt={block.alt || ""} className="w-full h-full object-cover" />
          </div>
          {block.alt && (
            <figcaption className="text-xs text-[#8A889A] text-center mt-3">{block.alt}</figcaption>
          )}
        </figure>
      );
  }
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const t = await getTranslations("insightDetail");

  // 相关文章：同 category，按日期降序，剔除自己，最多 3 篇
  const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-[#0A1628] to-[#00438A] overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-white/60 text-sm mb-6 hover:text-white/90 no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> {t("backToInsights")}
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" /> {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover */}
      <section className="bg-white">
        <div className="container max-w-4xl -mt-12 relative z-20">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#0A1628] shadow-2xl ring-1 ring-black/5">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white pt-12 pb-20">
        <div className="container max-w-3xl">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Source attribution */}
          <div className="mt-16 pt-6 border-t border-[#E3E5EC] text-xs text-[#8A889A] flex flex-wrap items-center gap-2">
            <span>{t("sourceLabel")}</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#00438A] hover:underline no-underline break-all"
            >
              mediversityglobal.cn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#FAFBFC] border-t border-[#E3E5EC] py-16">
          <div className="container max-w-5xl">
            <h2 className="font-display text-xl font-bold text-[#0A1628] mb-8">{t("related")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group no-underline">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#0A1628] mb-3">
                    <Image
                      src={a.cover}
                      alt={a.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="text-[10px] text-[#8A889A] mb-1">{a.date}</div>
                  <h3 className="font-display text-base font-semibold text-[#0A1628] leading-snug group-hover:text-[#00438A] transition-colors">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
