"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface FadeInProps {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "section";
}

/**
 * Reusable fade-in-up animation wrapper.
 * Matches the prototype's staggered viewport-triggered entrance.
 */
export function FadeIn({ children, index = 0, className = "", as = "div" }: FadeInProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      custom={index}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Container that triggers staggered children animations.
 */
export function FadeInGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
