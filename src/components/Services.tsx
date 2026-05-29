import { ChefHat, UtensilsCrossed, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow, SectionTitle } from "./primitives";

type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const SERVICES: Service[] = [
  {
    icon: UtensilsCrossed,
    title: "Catering",
    copy: "Full-service spreads for gatherings of every size — chafing-dish elegance to plated courses, built around a menu we craft with you.",
  },
  {
    icon: ChefHat,
    title: "Private Chef",
    copy: "An intimate, in-home dining experience. We shop, cook, serve, and clean — you simply sit, savor, and host like royalty.",
  },
  {
    icon: Sparkles,
    title: "Luxury Events",
    copy: "Weddings, milestones, and corporate affairs styled end to end — bespoke menus, refined presentation, and seamless service.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow rules>What We Offer</Eyebrow>
          <SectionTitle className="mt-5">Services</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-soft-brown">
            Three ways to bring Heritage Honey to your table — each one
            hand-crafted, never off the shelf.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, copy }) => (
            <RevealItem
              key={title}
              className="group flex flex-col items-center rounded-sm border border-charcoal/8 bg-cream p-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta/30 hover:shadow-xl"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 text-terracotta transition-colors duration-300 group-hover:bg-terracotta group-hover:text-cream">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium uppercase tracking-[0.1em] text-charcoal">
                {title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-soft-brown">
                {copy}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
