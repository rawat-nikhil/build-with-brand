"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import "./floating-cube.scss";

interface FloatingCubeProps {
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
  tone?: "dark" | "violet";
}

export function FloatingCube({
  size = 160,
  className,
  delay = 0,
  duration = 8,
  tone = "dark",
}: FloatingCubeProps) {
  const reduceMotion = useReducedMotion();
  const half = size / 2;

  const faces =
    tone === "dark"
      ? {
          top: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(139,92,246,0.35))",
          front: "linear-gradient(160deg, #2a2438, #0c0a12)",
          side: "linear-gradient(160deg, #191621, #050408)",
        }
      : {
          top: "linear-gradient(135deg, #c9b9ff, #8b5cf6)",
          front: "linear-gradient(160deg, #7c5cfc, #4c37a8)",
          side: "linear-gradient(160deg, #5b41c4, #2f2270)",
        };

  return (
    <motion.div
      className={cn("floating-cube", className)}
      style={{ width: size, height: size }}
      animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <motion.div
        className="floating-cube__inner"
        style={{ transformStyle: "preserve-3d", transformPerspective: size * 5 }}
        animate={
          reduceMotion
            ? { rotateX: -18, rotateY: 32 }
            : { rotateY: [24, 40, 16, 24], rotateX: [-16, -22, -12, -16] }
        }
        transition={{
          duration: duration * 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <div
          className="floating-cube__face"
          style={{
            transform: `rotateX(90deg) translateZ(${half}px)`,
            background: faces.top,
          }}
        />
        <div
          className="floating-cube__face"
          style={{
            transform: `translateZ(${half}px)`,
            background: faces.front,
            boxShadow: "inset 0 0 40px rgba(139,92,246,0.2)",
          }}
        />
        <div
          className="floating-cube__face"
          style={{
            transform: `rotateY(90deg) translateZ(${half}px)`,
            background: faces.side,
          }}
        />
      </motion.div>
      <div
        className="floating-cube__glow"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />
    </motion.div>
  );
}
