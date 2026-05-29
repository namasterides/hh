import Image from "next/image";

type WordmarkProps = {
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "dark" | "light";
  className?: string;
};

const HEIGHTS: Record<NonNullable<WordmarkProps["size"]>, number> = {
  sm: 68,
  md: 68,
  lg: 96,
  xl: 130,
};

export function Wordmark({ size = "md", tone = "dark", className = "" }: WordmarkProps) {
  const h = HEIGHTS[size];
  return (
    <span
      aria-label="Heritage Honey"
      role="img"
      className={`inline-block ${tone === "dark" ? "mix-blend-multiply" : ""} ${className}`.trim()}
    >
      <Image
        src="/assets/logo.png"
        alt="Heritage Honey"
        width={1080}
        height={1080}
        className="w-auto object-contain"
        style={{ height: h, width: "auto" }}
        priority={size === "sm" || size === "xl"}
      />
    </span>
  );
}
