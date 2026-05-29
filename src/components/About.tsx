import { SmartImage } from "./SmartImage";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./primitives";
import { Monogram } from "./icons";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image with monogram accent */}
        <Reveal className="relative" y={36}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
            <SmartImage
              src="/images/about.jpg"
              alt="Heritage Honey chef plating a dish with care"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* Floating monogram badge */}
          <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 items-center justify-center rounded-full bg-cream p-3 shadow-lg sm:flex">
            <Monogram className="h-full w-full text-terracotta" />
          </div>
        </Reveal>

        {/* Story */}
        <Reveal className="max-w-xl" y={28} delay={0.1}>
          <Eyebrow rules>Rooted in Heritage</Eyebrow>
          <SectionTitle className="mt-5">Our Story</SectionTitle>

          <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-soft-brown">
            <p>
              Heritage Honey was born from a simple belief — that food is
              memory made edible. Our kitchen draws from the islands and the
              American South, where every recipe carries a name, a hand, and a
              story passed down across generations.
            </p>
            <p>
              We braise our oxtails low and slow, glaze our salmon in honey and
              fire, and finish every plate the way family taught us: with
              patience and intention. Afro-Caribbean spice meets Southern
              comfort — refined, never rushed.
            </p>
            <p className="font-display text-2xl italic text-charcoal">
              “Made with love. Served with purpose.”
            </p>
          </div>

          <a
            href="#menu"
            className="mt-9 inline-block rounded-full border border-terracotta px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta transition-colors hover:bg-terracotta hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Explore the Menu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
