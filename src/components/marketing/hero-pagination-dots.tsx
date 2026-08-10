"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function HeroPaginationDots({ count = 4 }: { count?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % count), 2400);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="hidden flex-col items-center gap-3 lg:flex">
      <span className="text-xs font-medium text-white/40">
        {String(active + 1).padStart(2, "0")}
      </span>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "size-1.5 rounded-full transition-colors",
            i === active ? "bg-brand-violet" : "bg-white/20"
          )}
        />
      ))}
    </div>
  );
}
