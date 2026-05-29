/**
 * Small presentational primitives shared across sections.
 * Server-safe (no client hooks).
 */

import type { ReactNode } from "react";
import { BeeIcon } from "./icons";

/** Spaced-uppercase eyebrow label, optionally flanked by short rules. */
export function Eyebrow({
  children,
  className = "",
  rules = false,
}: {
  children: ReactNode;
  className?: string;
  rules?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-luxe text-honey ${className}`}
    >
      {rules && <span className="h-px w-8 bg-honey/60" aria-hidden="true" />}
      {children}
      {rules && <span className="h-px w-8 bg-honey/60" aria-hidden="true" />}
    </span>
  );
}

/** Big editorial section heading in the display serif. */
export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-4xl font-medium uppercase tracking-[0.12em] text-charcoal sm:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

/** Dotted terracotta divider with a centered bee mark. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 max-w-[120px] bg-[repeating-linear-gradient(to_right,var(--terracotta)_0,var(--terracotta)_3px,transparent_3px,transparent_8px)] opacity-70" />
      <BeeIcon className="h-6 w-6 text-terracotta" />
      <span className="h-px flex-1 max-w-[120px] bg-[repeating-linear-gradient(to_right,var(--terracotta)_0,var(--terracotta)_3px,transparent_3px,transparent_8px)] opacity-70" />
    </div>
  );
}
