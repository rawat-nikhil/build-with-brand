"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import "./pagination-dots.scss";

export function PaginationDots({ count = 4 }: { count?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % count), 2400);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="pagination-dots">
      <span className="pagination-dots__counter">
        {String(active + 1).padStart(2, "0")}
      </span>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "pagination-dots__dot",
            i === active
              ? "pagination-dots__dot--active"
              : "pagination-dots__dot--inactive"
          )}
        />
      ))}
    </div>
  );
}
