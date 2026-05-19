/**
 * Programme content types — single source of truth for all course data.
 *
 * Every programme detail page, hub card, and homepage featured card
 * reads from files that conform to these types.
 *
 * @see docs/programmes/ARCHITECTURE.md for the full guide.
 */

/* ── Section building blocks ── */

export interface ValuePropItem {
  title: string;
  description: string;
  /** Optional lucide icon name for visual variety */
  icon?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface DeliveryFormatSection {
  type: "delivery-format";
  title: string;
  subtitle: string;
  features: ValuePropItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ValuePropsSection {
  type: "value-props";
  title: string;
  items: ValuePropItem[];
  /**
   * Visual display mode for this section.
   * - "grid": Default 2-4 column card grid (current behavior)
   * - "list": Numbered vertical list with accent bar (good for objectives)
   * - "timeline": Horizontal step-by-step flow (good for methods/process)
   * - "accordion": Collapsible panels (good for syllabus/curriculum)
   *
   * If omitted, defaults to "grid" for backward compatibility.
   */
  display?: "grid" | "list" | "timeline" | "accordion";
}

export interface IntroSection {
  type: "intro";
  title: string;
  body: string; // plain text or simple HTML
  /** Optional image URL for left-text-right-image layout */
  image?: string;
  imageAlt?: string;
}

export type ProgrammeSection =
  | IntroSection
  | ValuePropsSection
  | DeliveryFormatSection;

/* ── Top-level programme data ── */

export interface ProgrammeData {
  /** URL slug, e.g. "oet-preparation" */
  slug: string;
  /** Parent category slug, e.g. "medical-english" */
  category: string;
  /** Subcategory id matching PillarLandingPage subcategory ids */
  subcategory: string;
  /** Full display title */
  title: string;
  /** 1-2 sentence summary for cards */
  shortDescription: string;
  /** SEO meta description */
  metaDescription: string;
  /** e.g. "3-12 months" */
  duration: string;
  /** Target audience tags */
  audience: string[];
  /** Show on homepage featured section */
  featured: boolean;
  /** Sort order within category (lower = first) */
  order: number;
  /** Only "published" courses are rendered */
  status: "published" | "draft";

  /* ── Page sections ── */
  hero: {
    headline: string;
    lede: string;
    ctaLabel: string;
    ctaHref: string;
    /** Optional hero background image URL */
    image?: string;
    /** Alt text for the hero image */
    imageAlt?: string;
  };
  sections: ProgrammeSection[];
  testimonials: TestimonialItem[];
  finalCta: {
    headline: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

/* ── Registry entry (lightweight, for cards / lists) ── */

export interface ProgrammeRegistryEntry {
  slug: string;
  category: string;
  subcategory: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  order: number;
  status: "published" | "draft";
}
