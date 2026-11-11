import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  loadPathwayCourse,
  getAllPathwaySlugs,
} from "../../../../../../../content/programmes/pathway";
import ProgramDetailTemplate from "@/components/programmes/ProgramDetailTemplate";

/* ── Static params for all pathway courses × all locales ── */

export function generateStaticParams() {
  const slugs = getAllPathwaySlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = await loadPathwayCourse(slug, locale);
  if (!data) return {};

  return {
    title: data.title,
    description: data.metaDescription,
  };
}

/* ── Page ── */

export default async function PathwayCoursePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const data = await loadPathwayCourse(slug, locale);
  if (!data) notFound();

  return <ProgramDetailTemplate data={data} />;
}
