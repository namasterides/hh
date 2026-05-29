import { Mail, Phone } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { Monogram, InstagramIcon, FacebookIcon } from "./icons";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Us", href: "#contact" },
] as const;

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Email us", href: "mailto:hello@heritagehoney.com", Icon: Mail },
  { label: "Call us", href: "tel:+10000000000", Icon: Phone },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Wordmark size="md" tone="light" />
          <p className="mt-5 max-w-xs font-body text-xs uppercase tracking-[0.18em] text-cream/60">
            Afro-Caribbean &amp; Southern Cuisine
          </p>
          <p className="mt-2 max-w-xs font-body text-xs uppercase tracking-[0.18em] text-cream/60">
            Catering • Private Chef • Luxury Events
          </p>
          <p className="mt-6 font-display text-lg italic text-honey">
            Bold flavor. Rooted in heritage.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h2 className="font-body text-xs font-semibold uppercase tracking-luxe text-honey">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-cream/80 transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Monogram + socials */}
        <div className="flex flex-col items-start gap-6">
          <Monogram className="h-24 w-24 text-cream/80" />
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row sm:px-8">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-cream/50">
            © {2026} Heritage Honey. All rights reserved.
          </p>
          <p className="font-body text-xs uppercase tracking-[0.18em] text-cream/50">
            Made with love. Served with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
