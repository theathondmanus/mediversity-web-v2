/**
 * Hero S-Curve SVG — prototype's signature bottom transition.
 * Used at the bottom of hero sections to create a smooth visual break.
 */
export function HeroCurve({ fill = "white", className = "" }: { fill?: string; className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
