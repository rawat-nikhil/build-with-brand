"use client";

import { cn } from "@/lib/utils";

import { FloatingCube } from "./floating-cube";
import "./cube-cluster.scss";

interface CubeClusterProps {
  size?: number;
  className?: string;
  delay?: number;
}

export function CubeCluster({ size = 240, className, delay = 0 }: CubeClusterProps) {
  return (
    <div className={cn("cube-cluster", className)} style={{ width: size, height: size }}>
      <FloatingCube
        size={size * 0.55}
        tone="violet"
        delay={delay}
        duration={7}
        className="cube-cluster__top"
      />
      <FloatingCube
        size={size * 0.4}
        tone="dark"
        delay={delay + 0.6}
        duration={8}
        className="cube-cluster__bottom-left"
      />
      <FloatingCube
        size={size * 0.4}
        tone="dark"
        delay={delay + 1.2}
        duration={9}
        className="cube-cluster__bottom-right"
      />
    </div>
  );
}
