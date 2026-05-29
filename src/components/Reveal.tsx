"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper: fades + slides children up when they enter the
 * viewport (once). Respects prefers-reduced-motion by rendering instantly.
 *
 * Use `as="ul"` / `as="li"` etc. to keep semantic markup. For staggered
 * groups, wrap children in <Reveal stagger> and make each child a
 * <RevealItem/>.
 */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical offset (px) to slide from. */
  y?: number;
  /** Delay before the reveal starts (seconds). */
  delay?: number;
  /** Enable staggered reveal of <RevealItem/> children. */
  stagger?: boolean;
  /** Semantic element to render. */
  as?: "div" | "section" | "ul" | "ol" | "li" | "span";
};

export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger = false,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const container: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 0.7,
            ease: EASE,
            delay,
            when: stagger ? "beforeChildren" : undefined,
            staggerChildren: stagger ? 0.1 : undefined,
          },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

/** Child item for staggered Reveal groups. */
export function RevealItem({
  children,
  className,
  y = 22,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.6, ease: EASE },
    },
  };

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
