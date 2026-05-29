"use client";

import Image from "next/image";
import { useState } from "react";
import { Monogram } from "./icons";

/**
 * next/image wrapper that degrades gracefully. If the source is missing
 * (e.g. before real photos are dropped in), it swaps to a styled
 * cream/terracotta gradient block with the H monogram so the layout
 * never collapses.
 *
 * Always used in `fill` mode inside a positioned (relative) parent.
 */

type SmartImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Tailwind classes for the placeholder fallback block. */
  placeholderClassName?: string;
};

export function SmartImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  placeholderClassName = "",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream via-[#f0e3d6] to-[#e7c6ad] ${placeholderClassName}`}
      >
        <Monogram className="w-1/3 max-w-[120px] min-w-[64px] text-terracotta/40" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
