"use client";

import { Microscope, FlaskConical, PenTool, MessageSquare } from "lucide-react";
import PillarLandingPage, { type SubCategory } from "@/components/programmes/PillarLandingPage";

const subcategories: SubCategory[] = [
  {
    id: "research-training",
    icon: FlaskConical,
    titleKey: "researchTraining",
    descKey: "researchTrainingDesc",
    courses: [
      { titleKey: "medicalResearchEssentials", status: "active" },
      { titleKey: "researchMethodology", status: "future" },
      { titleKey: "evidenceBasedMedicine", status: "future" },
    ],
  },
  {
    id: "academic-writing",
    icon: PenTool,
    titleKey: "academicWriting",
    descKey: "academicWritingDesc",
    courses: [
      { titleKey: "medicalWritingBootcamp", status: "active" },
      { titleKey: "sciWritingSupport", status: "future" },
      { titleKey: "academicPresentationSkills", status: "future" },
    ],
  },
  {
    id: "academic-communication",
    icon: MessageSquare,
    titleKey: "academicCommunication",
    descKey: "academicCommunicationDesc",
    courses: [
      { titleKey: "conferencePresentationSkills", status: "future" },
      { titleKey: "academicEnglishHealthcare", status: "future" },
      { titleKey: "researchCommunication", status: "future" },
    ],
  },
];

export default function ResearchAcademicPage() {
  return (
    <PillarLandingPage
      pillarKey="researchAcademic"
      icon={Microscope}
      color="bg-purple-50 text-purple-700"
      subcategories={subcategories}
    />
  );
}
