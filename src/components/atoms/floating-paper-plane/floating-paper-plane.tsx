"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import "./floating-paper-plane.scss";

interface FloatingPaperPlaneProps {
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingPaperPlane({
  size = 90,
  className,
  delay = 0,
  duration = 6,
}: FloatingPaperPlaneProps) {
  const reduceMotion = useReducedMotion();
  const gradientId = useId();

  return (
    <motion.svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={cn("floating-paper-plane", className)}
      animate={
        reduceMotion ? undefined : { y: [0, -14, 0], x: [0, 6, 0], rotate: [-8, -2, -8] }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c5cfc" />
        </linearGradient>
      </defs>
      <path d="M4 34 L60 6 L40 60 L32 40 Z" fill={`url(#${gradientId})`} />
      <path d="M32 40 L60 6 L20 46 Z" fill="#4c37a8" opacity="0.7" />
    </motion.svg>
  );
}
