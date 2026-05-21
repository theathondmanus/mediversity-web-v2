"use client";

import { Stethoscope, Compass } from "lucide-react";
import PillarLandingPage, { type SubCategory } from "@/components/programmes/PillarLandingPage";

const subcategories: SubCategory[] = [
  {
    id: "all",
    icon: Compass,
    titleKey: "all",
    descKey: "allDesc",
    courses: [
      {
        titleKey: "internationalClinicalObservership",
        status: "active",
        slug: "international-clinical-observership",
        cover: "/images/courses/international-clinical-observership.webp",
        descriptionKey: "international-clinical-observership",
      },
      {
        titleKey: "seniorVisitingScholar",
        status: "active",
        slug: "senior-visiting-scholar",
        cover: "/images/courses/senior-visiting-scholar.webp",
        descriptionKey: "senior-visiting-scholar",
      },
      {
        titleKey: "shortTermOverseasStudy",
        status: "active",
        slug: "short-term-overseas-study",
        cover: "/images/courses/short-term-overseas-study.webp",
        descriptionKey: "short-term-overseas-study",
      },
      {
        titleKey: "nursingDegreeProgression",
        status: "active",
        slug: "nursing-degree-progression",
        cover: "/images/courses/nursing-degree-progression.webp",
        descriptionKey: "nursing-degree-progression",
      },
      {
        titleKey: "internationalMedicalDoctorate",
        status: "active",
        slug: "international-medical-doctorate",
        cover: "/images/courses/international-medical-doctorate.webp",
        descriptionKey: "international-medical-doctorate",
      },
    ],
  },
];

export default function ObservershipPage() {
  return (
    <PillarLandingPage
      pillarKey="observership"
      categorySlug="observership"
      icon={Stethoscope}
      color="bg-emerald-50 text-emerald-700"
      subcategories={subcategories}
      heroImage="/images/hero/observership.webp"
      heroImageAlt="Chinese medical visitor observing a senior surgeon performing a procedure in a modern operating room"
    />
  );
}
