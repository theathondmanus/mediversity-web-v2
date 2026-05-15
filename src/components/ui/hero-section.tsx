/**
 * HeroSection — shared hero component for all secondary pages.
 *
 * Features:
 * - Full-width background image with dark gradient overlay
 * - Increased height (~600-700px) with generous CTA-to-curve breathing room
 * - HeroCurve S-transition at bottom
 * - Fallback to gradient-only when no image is provided
 */

import { HeroCurve } from "./hero-curve";

interface HeroSectionProps {
  /** Background image URL. Falls back to gradient if omitted. */
  image?: string;
  /** Alt text for the background image (for accessibility / SEO). */
  imageAlt?: string;
  /** Override the fill color of the bottom S-curve. Default: "white" */
  curveFill?: string;
  /** Additional className for the outer section */
  className?: string;
  /** Content to render inside the hero */
  children: React.ReactNode;
}

export function HeroSection({
  image,
  imageAlt,
  curveFill = "white",
  className = "",
  children,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: "600px" }}
    >
      {/* ── Background layer ── */}
      {image ? (
        <>
          {/* Real image — external CDN, not optimizable by next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt || ""}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(10,22,40,0.82) 0%, rgba(0,67,138,0.65) 50%, rgba(10,22,40,0.78) 100%)",
            }}
          />
        </>
      ) : (
        /* Fallback: pure gradient (legacy behavior) */
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2d4a] to-[#00438A]" />
      )}

      {/* ── Content ── */}
      {/* pt-36 md:pt-44 = top breathing room; pb-32 md:pb-40 = CTA-to-curve gap */}
      <div className="container relative z-10 pt-36 pb-32 md:pt-44 md:pb-40">
        {children}
      </div>

      {/* ── S-curve transition ── */}
      <HeroCurve fill={curveFill} />
    </section>
  );
}
