"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Plane, Compass } from "lucide-react";

/* ── Types ── */
interface DirectionData {
  title: string;
  desc: string;
  scenarios: string[];
  cta: string;
}

interface DualDirectionCardsProps {
  sectionTitle: string;
  sectionSubtitle: string;
  inbound: DirectionData;
  outbound: DirectionData;
}

/* ── Flowing particles along the bridge path ── */
function FlowingBridge() {
  return (
    <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
      <svg
        viewBox="0 0 120 200"
        className="w-[120px] h-[200px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bridge path — S-curve connecting left card to right card */}
        <path
          d="M60 0 C60 40, 10 60, 60 100 C110 140, 60 160, 60 200"
          stroke="url(#bridgeGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.4"
        />
        {/* Flowing dot — top to bottom (inbound) */}
        <circle r="3" fill="#00438A" opacity="0.8">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M60 0 C60 40, 10 60, 60 100 C110 140, 60 160, 60 200"
          />
        </circle>
        {/* Flowing dot — bottom to top (outbound) */}
        <circle r="3" fill="#C4922A" opacity="0.8">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M60 200 C60 160, 110 140, 60 100 C10 60, 60 40, 60 0"
          />
        </circle>
        <defs>
          <linearGradient id="bridgeGrad" x1="60" y1="0" x2="60" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00438A" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#8A889A" stopOpacity="0.3" />
            <stop offset="1" stopColor="#C4922A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── 3D Tilt Card ── */
function TiltCard({
  children,
  accentColor,
  gradientFrom,
  gradientTo,
  borderColor,
}: {
  children: React.ReactNode;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);

  // Subtle gradient shift on hover
  const bgX = useTransform(mouseX, [0, 1], ["30%", "70%"]);
  const bgY = useTransform(mouseY, [0, 1], ["30%", "70%"]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 800,
      }}
      className="relative h-full"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 blur-sm transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${isHovered ? "var(--glow-x, 50%)" : "50%"} ${isHovered ? "var(--glow-y, 50%)" : "50%"}, ${accentColor}30, transparent 70%)`,
          opacity: isHovered ? 0.6 : 0,
        }}
      />
      <motion.div
        className={`relative rounded-2xl p-8 md:p-10 border h-full flex flex-col overflow-hidden`}
        style={{
          borderColor: borderColor,
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {/* Animated radial highlight that follows cursor */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useTransform(
              [bgX, bgY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, ${accentColor}08, transparent 60%)`
            ),
            opacity: isHovered ? 1 : 0,
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function DualDirectionCards({
  sectionTitle,
  sectionSubtitle,
  inbound,
  outbound,
}: DualDirectionCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef}>
      {/* Section header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
          {sectionTitle}
        </h2>
        <p className="text-[#3C3A47] max-w-xl mx-auto">
          {sectionSubtitle}
        </p>
      </motion.div>

      {/* Cards with bridge */}
      <div className="relative grid md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto">
        {/* Flowing bridge between cards (desktop only) */}
        <FlowingBridge />

        {/* ── Inbound Card ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <TiltCard
            accentColor="#00438A"
            gradientFrom="rgba(0,67,138,0.05)"
            gradientTo="rgba(0,67,138,0.12)"
            borderColor="rgba(0,67,138,0.15)"
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon with animated ring */}
              <div className="relative w-14 h-14 mb-6">
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#00438A]/10"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-14 h-14 rounded-xl bg-[#00438A]/10 flex items-center justify-center">
                  <Plane className="w-7 h-7 text-[#00438A]" />
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0A1628] mb-3">
                {inbound.title}
              </h3>
              <p className="text-[#3C3A47] mb-6 leading-relaxed">
                {inbound.desc}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {inbound.scenarios.map((s, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#3C3A47]"
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <ChevronRight className="w-4 h-4 text-[#00438A] shrink-0 mt-0.5" />
                    {s}
                  </motion.li>
                ))}
              </ul>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#00438A] hover:text-[#003066] no-underline mt-auto group/link"
              >
                {inbound.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Outbound Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TiltCard
            accentColor="#C4922A"
            gradientFrom="rgba(196,146,42,0.05)"
            gradientTo="rgba(196,146,42,0.12)"
            borderColor="rgba(196,146,42,0.15)"
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon with animated ring */}
              <div className="relative w-14 h-14 mb-6">
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#C4922A]/10"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <div className="relative w-14 h-14 rounded-xl bg-[#C4922A]/10 flex items-center justify-center">
                  <Compass className="w-7 h-7 text-[#C4922A]" />
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0A1628] mb-3">
                {outbound.title}
              </h3>
              <p className="text-[#3C3A47] mb-6 leading-relaxed">
                {outbound.desc}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {outbound.scenarios.map((s, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#3C3A47]"
                    initial={{ opacity: 0, x: 12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <ChevronRight className="w-4 h-4 text-[#C4922A] shrink-0 mt-0.5" />
                    {s}
                  </motion.li>
                ))}
              </ul>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C4922A] hover:text-[#A87822] no-underline mt-auto group/link"
              >
                {outbound.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  );
}
