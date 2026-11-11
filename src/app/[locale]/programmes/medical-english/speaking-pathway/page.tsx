import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PathwayOverview from "@/components/programmes/PathwayOverview";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh-CN";
  return {
    title: isZh
      ? "医学英语口语与临床沟通能力提升课程体系"
      : "Medical Speaking & Clinical Communication Pathway",
    description: isZh
      ? "MVG 医学英语口语与临床沟通能力提升课程体系：四大课程方向，独立选课，系统进阶，灵活定制。从语言表达到临床沟通，从开口自信到专业胜任。"
      : "The MVG Medical Speaking & Clinical Communication Pathway — one pathway, four course stages, flexible learning. From language confidence to clinical communication competence.",
  };
}

export default async function SpeakingPathwayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PathwayOverview locale={locale} />;
}
