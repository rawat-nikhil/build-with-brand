import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import "./brand-logo.scss";

interface BrandLogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
  /** Applied to the image, so callers control the rendered height. */
  className?: string;
  onClick?: () => void;
}

export function BrandLogo({
  width = 645,
  height = 140,
  priority = false,
  className,
  onClick,
}: BrandLogoProps) {
  return (
    <Link href="/" className="brand-logo" onClick={onClick}>
      <Image
        src="/header.png"
        alt="Build with Brand"
        width={width}
        height={height}
        priority={priority}
        className={cn("brand-logo__image", className)}
      />
    </Link>
  );
}
