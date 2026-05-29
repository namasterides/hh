"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Eyebrow, SectionTitle } from "./primitives";

type Testimonial = {
  quote: string;
  name: string;
  event: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Heritage Honey didn't just cater our wedding — they told our story through food. Every guest is still talking about the oxtails and that rum cornbread.",
    name: "Alicia & Marcus T.",
    event: "Wedding • 180 guests",
  },
  {
    quote:
      "Our private chef dinner felt like the finest restaurant in the city, except it was in our home. Effortless, elegant, and unforgettable.",
    name: "The Okafor Family",
    event: "Private Dinner • 12 guests",
  },
  {
    quote:
      "We hired them for a corporate gala and they exceeded every expectation — flawless service, stunning presentation, and flavor that wowed the whole team.",
    name: "Janelle R., Operations Lead",
    event: "Corporate Event • 250 guests",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const active = TESTIMONIALS[index];

  return (
    <section className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Eyebrow rules>Kind Words</Eyebrow>
        <SectionTitle className="mt-5">Testimonials</SectionTitle>

        <div className="relative mt-14">
          <Quote className="mx-auto h-10 w-10 text-honey" strokeWidth={1.4} aria-hidden="true" />

          {/* Crossfading quote */}
          <div className="mt-6 min-h-[220px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-2xl font-light italic leading-relaxed text-charcoal sm:text-3xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-7">
                  <span className="block font-body text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {active.name}
                  </span>
                  <span className="mt-1 block font-body text-xs uppercase tracking-[0.18em] text-soft-brown">
                    {active.event}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="rounded-full border border-charcoal/15 p-2.5 text-charcoal transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Select testimonial">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                    i === index ? "w-7 bg-terracotta" : "w-2.5 bg-charcoal/20 hover:bg-charcoal/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="rounded-full border border-charcoal/15 p-2.5 text-charcoal transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
