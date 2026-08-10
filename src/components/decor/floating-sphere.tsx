"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingSphereProps {
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
  tone?: "dark" | "violet";
}

export function FloatingSphere({
  size = 100,
  className,
  delay = 0,
  duration = 7,
  tone = "dark",
}: FloatingSphereProps) {
  const reduceMotion = useReducedMotion();

  const gradient =
    tone === "dark"
      ? "radial-gradient(circle at 32% 28%, #4c3f66, #1a1522 45%, #05040a 100%)"
      : "radial-gradient(circle at 32% 28%, #cbb8ff, #7c5cfc 45%, #2b1f66 100%)";

  return (
    <motion.div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: gradient,
        boxShadow:
          "0 0 70px 14px rgba(124,92,252,0.3), inset -10px -10px 26px rgba(0,0,0,0.45)",
      }}
      animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
