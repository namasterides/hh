"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow, SectionTitle } from "./primitives";

/** Eight gallery dishes. Swap the filenames for real photos later. */
const DISHES = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/dish-${i + 1}.jpg`,
  alt: `Heritage Honey signature dish ${i + 1}`,
}));

export function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  // Close lightbox on Escape.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow rules>From Our Table</Eyebrow>
          <SectionTitle className="mt-5">Gallery</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-soft-brown">
            A taste of what we plate. Tap any dish to take a closer look.
          </p>
        </Reveal>

        {/* Masonry-style responsive grid */}
        <Reveal
          stagger
          className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 *:mb-4"
        >
          {DISHES.map((dish, i) => (
            <RevealItem key={dish.src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${dish.alt}`}
                className={`group relative block w-full overflow-hidden rounded-sm shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                  // vary tile heights for a masonry rhythm
                  i % 3 === 0 ? "aspect-3/4" : "aspect-square"
                }`}
              >
                <SmartImage
                  src={dish.src}
                  alt={dish.alt}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/25" />
              </button>
            </RevealItem>
          ))}
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 rounded-full p-2 text-cream/80 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              className="relative aspect-square w-full max-w-3xl overflow-hidden rounded-sm shadow-2xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <SmartImage
                src={DISHES[active].src}
                alt={DISHES[active].alt}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
