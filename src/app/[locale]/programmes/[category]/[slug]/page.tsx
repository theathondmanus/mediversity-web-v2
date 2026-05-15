import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  loadProgramme,
  getAllPublishedPaths,
} from "../../../../../../content/programmes/registry";
import ProgramDetailTemplate from "@/components/programmes/ProgramDetailTemplate";

/* ── Static params for all published programmes × all locales ── */

export function generateStaticParams() {
  const paths = getAllPublishedPaths();
  const params: { locale: string; category: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const p of paths) {
      params.push({ locale, category: p.category, slug: p.slug });
    }
  }

  return params;
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const data = await loadProgramme(category, slug, locale);
  if (!data) return {};

  return {
    title: data.title,
    description: data.metaDescription,
  };
}

/* ── Page ── */

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);

  const data = await loadProgramme(category, slug, locale);
  if (!data) notFound();

  return <ProgramDetailTemplate data={data} />;
}
