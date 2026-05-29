"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { Wordmark } from "./Wordmark";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();

  // Staggered entrance for the stacked hero content.
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.16, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background photo + warm gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src="/images/hero.jpg"
          alt="A beautifully plated Heritage Honey dish"
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 pb-20 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Wordmark size="xl" tone="light" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-body text-xs font-semibold uppercase tracking-luxe text-honey sm:text-sm"
        >
          Afro-Caribbean &amp; Southern Cuisine
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.28em] text-cream/80 sm:text-xs"
        >
          Catering &nbsp;•&nbsp; Private Chef &nbsp;•&nbsp; Luxury Events
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 max-w-2xl font-display text-4xl font-light italic leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          Bold flavor. <span className="text-honey not-italic">Rooted in heritage.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="rounded-full bg-terracotta px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            View The Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/70 px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Book Your Event
          </a>
        </motion.div>
      </motion.div>

      {/* Floating scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 transition-colors hover:text-cream"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
