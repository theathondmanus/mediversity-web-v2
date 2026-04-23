import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-primary">
        {t("home.heroTitle")}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {t("home.heroSubtitle")}
      </p>
    </main>
  );
}
