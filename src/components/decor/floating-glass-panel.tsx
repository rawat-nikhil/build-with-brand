"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingGlassPanelProps {
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingGlassPanel({
  width = 130,
  height = 170,
  className,
  delay = 0,
  duration = 8,
}: FloatingGlassPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("rounded-2xl border border-white/15 backdrop-blur-md", className)}
      style={{
        width,
        height,
        background:
          "linear-gradient(160deg, rgba(139,92,246,0.35), rgba(255,255,255,0.04))",
        boxShadow: "0 8px 40px rgba(139,92,246,0.25)",
      }}
      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-6, -2, -6] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
