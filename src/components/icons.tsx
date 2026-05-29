/**
 * Heritage Honey — inline SVG brand marks.
 * Built as crisp, scalable SVG (no image files) so they stay sharp anywhere.
 * All are server-safe (no client hooks) and accept a className for sizing/color.
 */

type IconProps = {
  className?: string;
  title?: string;
};

/** Instagram glyph (brand icons were removed from lucide-react v1). */
export function InstagramIcon({ className, title = "Instagram" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Facebook glyph. */
export function FacebookIcon({ className, title = "Facebook" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      <path d="M14 8.5V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C12 2.5 11 4 11 6.5v2H8.5V12H11v9.5h3V12h2.3l.5-3.5H14z" />
    </svg>
  );
}

/** Simple line-style bee mark. Uses currentColor so it inherits text color. */
export function BeeIcon({ className, title = "Bee" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {/* Wings */}
      <ellipse cx="22" cy="22" rx="11" ry="7" transform="rotate(-28 22 22)" />
      <ellipse cx="42" cy="22" rx="11" ry="7" transform="rotate(28 42 22)" />
      {/* Body */}
      <ellipse cx="32" cy="38" rx="11" ry="15" fill="currentColor" stroke="none" />
      {/* Stripes (cut out using the page color) */}
      <path d="M22.5 33.5h19" stroke="var(--cream)" strokeWidth={2.6} />
      <path d="M22 41h20" stroke="var(--cream)" strokeWidth={2.6} />
      <path d="M25 48.5h14" stroke="var(--cream)" strokeWidth={2.6} />
      {/* Antennae */}
      <path d="M28 24c-2-4-5-6-8-6.5" />
      <path d="M36 24c2-4 5-6 8-6.5" />
    </svg>
  );
}

/**
 * Circular monogram: a centered "H", a small bee, and the words
 * "ROOTED IN HERITAGE" curved around the top of the ring.
 * Used in the logo lockup, section dividers, and footer.
 */
export function Monogram({ className, title = "Rooted in Heritage" }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        {/* Invisible arc the curved text follows (upper ring) */}
        <path
          id="hh-curve-top"
          d="M 18 60 A 42 42 0 0 1 102 60"
          fill="none"
        />
        {/* Lower arc for the bottom flourish */}
        <path
          id="hh-curve-bottom"
          d="M 22 60 A 38 38 0 0 0 98 60"
          fill="none"
        />
      </defs>

      {/* Outer + inner rings */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="60" cy="60" r="47" fill="none" stroke="currentColor" strokeWidth={0.9} opacity={0.6} />

      {/* Curved brand text */}
      <text
        fill="currentColor"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "9px",
          letterSpacing: "3px",
          fontWeight: 600,
        }}
      >
        <textPath href="#hh-curve-top" startOffset="50%" textAnchor="middle">
          ROOTED IN HERITAGE
        </textPath>
      </text>
      <text
        fill="currentColor"
        opacity={0.7}
        style={{ fontFamily: "var(--font-body)", fontSize: "7px", letterSpacing: "4px" }}
      >
        <textPath href="#hh-curve-bottom" startOffset="50%" textAnchor="middle">
          • EST · HH •
        </textPath>
      </text>

      {/* Center H */}
      <text
        x="60"
        y="62"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 600 }}
      >
        H
      </text>

      {/* Tiny bee accent under the H */}
      <g transform="translate(60 84)">
        <ellipse cx="0" cy="0" rx="4.5" ry="6" fill="currentColor" />
        <line x1="-4.5" y1="-1.5" x2="4.5" y2="-1.5" stroke="var(--cream)" strokeWidth={1.2} />
        <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="var(--cream)" strokeWidth={1.2} />
        <path
          d="M-1.5 -6 C -6 -10 -10 -10 -12 -8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
        />
        <path
          d="M1.5 -6 C 6 -10 10 -10 12 -8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
