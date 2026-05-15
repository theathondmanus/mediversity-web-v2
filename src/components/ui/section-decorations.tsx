"use client";

/**
 * Decorative elements for visual density enhancement (Issue #39).
 * Pure CSS/SVG — no new dependencies.
 */

/* ── Wave divider between sections ── */
export function WaveDivider({
  flip = false,
  fromColor = "#F5F3EF",
  toColor = "#FFFFFF",
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}) {
  return (
    <div
      className="relative w-full h-12 md:h-16 lg:h-20 -my-px overflow-hidden"
      style={{
        transform: flip ? "scaleY(-1)" : undefined,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,20 480,40 720,25 C960,10 1200,35 1440,60 L1440,60 L0,60 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

/* ── Subtle dot grid pattern background ── */
export function DotPattern({
  className = "",
  opacity = 0.04,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, #00438A 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}

/* ── Corner accent lines — geometric decoration ── */
export function CornerAccent({
  position = "top-left",
  color = "#00438A",
  size = 80,
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
  size?: number;
}) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const transforms = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1)",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none opacity-[0.08]`}
      style={{ width: size, height: size, transform: transforms[position] }}
    >
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L80 0 L80 4 L4 4 L4 80 L0 80 Z" fill={color} />
        <path d="M0 20 L40 20 L40 24 L4 24 L4 60 L0 60 Z" fill={color} opacity="0.5" />
      </svg>
    </div>
  );
}

/* ── Floating accent shapes (absolute positioned) ── */
export function FloatingShape({
  className = "",
  shape = "circle",
  color = "#00438A",
  size = 120,
  opacity = 0.04,
}: {
  className?: string;
  shape?: "circle" | "ring" | "cross";
  color?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {shape === "circle" && (
          <circle cx="60" cy="60" r="55" fill={color} />
        )}
        {shape === "ring" && (
          <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="3" />
        )}
        {shape === "cross" && (
          <>
            <rect x="55" y="10" width="10" height="100" rx="5" fill={color} />
            <rect x="10" y="55" width="100" height="10" rx="5" fill={color} />
          </>
        )}
      </svg>
    </div>
  );
}

/* ── Stat counter row — data banner ── */
export function StatBanner({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#00438A] mb-1">
            {stat.value}
          </p>
          <p className="text-sm text-[#8A889A]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
