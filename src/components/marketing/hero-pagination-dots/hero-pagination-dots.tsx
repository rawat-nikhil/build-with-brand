"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import "./hero-pagination-dots.scss";

export function HeroPaginationDots({ count = 4 }: { count?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % count), 2400);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="hero-pagination-dots">
      <span className="hero-pagination-dots__counter">
        {String(active + 1).padStart(2, "0")}
      </span>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "hero-pagination-dots__dot",
            i === active
              ? "hero-pagination-dots__dot--active"
              : "hero-pagination-dots__dot--inactive"
          )}
        />
      ))}
    </div>
  );
}
