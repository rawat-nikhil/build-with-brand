"use client";

import { cn } from "@/lib/utils";

import { FloatingCube } from "./floating-cube";

interface CubeClusterProps {
  size?: number;
  className?: string;
  delay?: number;
}

export function CubeCluster({ size = 240, className, delay = 0 }: CubeClusterProps) {
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <FloatingCube
        size={size * 0.55}
        tone="violet"
        delay={delay}
        duration={7}
        className="absolute left-1/2 top-0 -translate-x-1/2"
      />
      <FloatingCube
        size={size * 0.4}
        tone="dark"
        delay={delay + 0.6}
        duration={8}
        className="absolute left-0 bottom-2"
      />
      <FloatingCube
        size={size * 0.4}
        tone="dark"
        delay={delay + 1.2}
        duration={9}
        className="absolute right-0 bottom-2"
      />
    </div>
  );
}
