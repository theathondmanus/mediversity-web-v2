"use client";

import { Stethoscope, Eye, Layers, GraduationCap } from "lucide-react";
import PillarLandingPage, { type SubCategory } from "@/components/programmes/PillarLandingPage";

const subcategories: SubCategory[] = [
  {
    id: "clinical-observer",
    icon: Eye,
    titleKey: "clinicalObserver",
    descKey: "clinicalObserverDesc",
    courses: [
      { titleKey: "shortTermObservership", status: "future" },
      { titleKey: "specialtyBasedObservership", status: "future" },
      { titleKey: "hospitalAttachment", status: "future" },
    ],
  },
  {
    id: "advanced-clinical",
    icon: Layers,
    titleKey: "advancedClinical",
    descKey: "advancedClinicalDesc",
    courses: [
      { titleKey: "advancedClinicalObserver", status: "future" },
      { titleKey: "consultantShadowing", status: "future" },
      { titleKey: "departmentImmersion", status: "future" },
    ],
  },
  {
    id: "visiting-scholar",
    icon: GraduationCap,
    titleKey: "visitingScholar",
    descKey: "visitingScholarDesc",
    courses: [
      { titleKey: "visitingScholarProgramme", status: "future" },
      { titleKey: "researchAttachment", status: "future" },
      { titleKey: "internationalAcademicExchange", status: "future" },
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
