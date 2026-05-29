import { Leaf, BookHeart, Crown, Soup } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow, SectionTitle } from "./primitives";

type Value = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const VALUES: Value[] = [
  {
    icon: Leaf,
    title: "Made Fresh, Never Frozen",
    copy: "Sourced close to home and cooked to order — flavor at its peak, every single plate.",
  },
  {
    icon: BookHeart,
    title: "Authentic Heritage Recipes",
    copy: "Family techniques and island traditions, honored and elevated for the modern table.",
  },
  {
    icon: Crown,
    title: "Full-Service Luxury",
    copy: "From first tasting to final cleanup, we handle the details so you can be a guest at your own event.",
  },
  {
    icon: Soup,
    title: "Custom Menus, Any Occasion",
    copy: "Intimate dinners to grand celebrations — your menu is built around your story and your guests.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow rules>The Heritage Honey Difference</Eyebrow>
          <SectionTitle className="mt-5">Why Choose Us</SectionTitle>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, copy }, i) => (
            <RevealItem
              key={title}
              className="group relative flex flex-col rounded-sm border border-charcoal/8 bg-warm-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Faint index number */}
              <span className="font-display text-5xl font-light text-terracotta/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon
                className="mt-2 h-7 w-7 text-terracotta transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.6}
              />
              <h3 className="mt-5 font-display text-xl font-medium uppercase tracking-[0.08em] text-charcoal">
                {title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-soft-brown">
                {copy}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
