import { Reveal } from "./Reveal";
import { BeeIcon } from "./icons";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-terracotta py-20 sm:py-28">
      {/* Subtle darker rust radial for depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--rust)_0%,transparent_70%)] opacity-40"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <BeeIcon className="h-9 w-9 text-cream/90" />
        <p className="mt-6 font-display text-3xl font-light italic leading-tight text-cream sm:text-5xl">
          Made with love. Served with purpose.
        </p>
        <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-cream/85">
          Let&apos;s build something unforgettable for your next celebration.
          Tell us about your event and we&apos;ll craft a menu that&apos;s
          entirely your own.
        </p>
        <a
          href="#contact"
          className="mt-9 rounded-full bg-cream px-9 py-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-warm-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          Book Your Event
        </a>
      </Reveal>
    </section>
  );
}
