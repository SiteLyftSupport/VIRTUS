"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const VARIANTS: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  },
  wipe: {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    show: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.85, ease },
    },
  },
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  delay?: number;
  amount?: number;
  /** When true, animate only on first reveal; when false (default), animate
   *  again every time the element re-enters or leaves the viewport. */
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "ul";
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  amount = 0.25,
  once = false,
  className,
  as = "div",
}: Props) {
  const Component = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "-60px 0px -60px 0px" }}
      variants={VARIANTS[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * RevealStagger — apply to a parent that contains <RevealItem> children.
 * The parent triggers `staggerChildren`; each item animates with its
 * own variant.
 */
export function RevealStagger({
  children,
  className,
  amount = 0.2,
  once = false,
  stagger = 0.08,
  delayChildren = 0.05,
  as = "ul",
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
  stagger?: number;
  delayChildren?: number;
  as?: "ul" | "div";
}) {
  const Component = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  variant = "up",
  className,
  as = "li",
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
  as?: "li" | "div";
}) {
  const Component = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <Component variants={VARIANTS[variant]} className={className}>
      {children}
    </Component>
  );
}
