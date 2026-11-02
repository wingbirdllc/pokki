"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Subtle vertical parallax for a child that is taller than its frame. Static when reduced motion is on. */
export function Parallax({ children, amount = 60, className = "" }: { children: React.ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[70px] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
