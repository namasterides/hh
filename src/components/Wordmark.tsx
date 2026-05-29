/**
 * Heritage Honey wordmark — built in markup (no logo image) so it stays crisp.
 * "HERITAGE" in spaced uppercase Cormorant with the script word "Honey"
 * overlapping below it in terracotta.
 *
 * `size` scales the lockup; `tone` switches between dark text (on cream) and
 * light text (over the hero / dark backgrounds).
 */

type WordmarkProps = {
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "dark" | "light";
  className?: string;
};

const SIZES: Record<
  NonNullable<WordmarkProps["size"]>,
  { heritage: string; honey: string; gap: string }
> = {
  sm: { heritage: "text-base sm:text-lg", honey: "text-2xl sm:text-3xl", gap: "-mt-3" },
  md: { heritage: "text-xl sm:text-2xl", honey: "text-4xl sm:text-5xl", gap: "-mt-4" },
  lg: { heritage: "text-3xl sm:text-4xl", honey: "text-6xl sm:text-7xl", gap: "-mt-5 sm:-mt-6" },
  xl: { heritage: "text-4xl sm:text-6xl", honey: "text-7xl sm:text-8xl", gap: "-mt-6 sm:-mt-8" },
};

export function Wordmark({ size = "md", tone = "dark", className = "" }: WordmarkProps) {
  const s = SIZES[size];
  const heritageColor = tone === "light" ? "text-cream" : "text-charcoal";

  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className}`}
      aria-label="Heritage Honey"
      role="img"
    >
      <span
        aria-hidden="true"
        className={`font-display font-medium uppercase tracking-luxe ${s.heritage} ${heritageColor}`}
      >
        Heritage
      </span>
      <span
        aria-hidden="true"
        className={`font-script text-terracotta ${s.honey} ${s.gap}`}
      >
        Honey
      </span>
    </span>
  );
}
