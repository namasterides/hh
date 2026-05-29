"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menu, type MenuItem } from "@/data/menu";
import { Eyebrow, SectionTitle } from "./primitives";
import { BeeIcon } from "./icons";

/** One menu line: name, dotted leader, premium tag, special note. */
function MenuLine({ item }: { item: MenuItem }) {
  return (
    <li className="flex flex-col gap-0.5 py-2">
      <div className="flex items-baseline gap-2">
        <span className="font-body text-[0.95rem] text-charcoal">{item.name}</span>
        {item.premium && (
          <span className="font-script text-lg leading-none text-honey" title="Premium selection">
            premium
          </span>
        )}
        {/* dotted leader fills remaining space for a menu-card feel */}
        <span
          className="mx-1 hidden flex-1 translate-y-[-3px] border-b border-dotted border-charcoal/25 sm:block"
          aria-hidden="true"
        />
      </div>
      {item.note && (
        <span className="font-body text-xs italic text-soft-brown">({item.note})</span>
      )}
    </li>
  );
}

export function MenuShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(menu[0].id);
  const section = menu.find((s) => s.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <Eyebrow rules>The Heritage Honey Menu</Eyebrow>
          <SectionTitle className="mt-5">Our Menu</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-soft-brown">
            A living menu, customized for every event. Mix and match across the
            collections below to build your spread.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Menu categories"
        >
          {menu.map((s) => {
            const selected = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                type="button"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`rounded-full px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                  selected
                    ? "bg-terracotta text-cream shadow-md"
                    : "border border-charcoal/15 text-charcoal hover:border-terracotta hover:text-terracotta"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Active section panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={section.id}
            id={`panel-${section.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${section.id}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14"
          >
            {/* Section blurb */}
            <p className="mx-auto mb-12 max-w-2xl text-center font-display text-xl italic leading-relaxed text-charcoal">
              {section.blurb}
            </p>

            {/* Groups in a balanced multi-column layout */}
            <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              {section.groups.map((group) => (
                <motion.div
                  key={group.title}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-sm border border-charcoal/8 bg-warm-white p-7 shadow-sm"
                >
                  {/* Group heading with bee + dotted rule */}
                  <div className="flex items-center gap-3">
                    <BeeIcon className="h-5 w-5 shrink-0 text-terracotta" />
                    <h3 className="font-body text-xs font-semibold uppercase tracking-luxe text-terracotta">
                      {group.title}
                    </h3>
                  </div>
                  <span className="mt-3 mb-2 block h-px w-full bg-[repeating-linear-gradient(to_right,var(--honey)_0,var(--honey)_3px,transparent_3px,transparent_7px)] opacity-60" />

                  <ul className="divide-y divide-charcoal/5">
                    {group.items.map((item) => (
                      <MenuLine key={`${group.title}-${item.name}`} item={item} />
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footnote */}
        <p className="mt-14 text-center font-body text-xs uppercase tracking-[0.18em] text-soft-brown">
          Custom menus available • Dietary accommodations on request
        </p>
      </div>
    </section>
  );
}
