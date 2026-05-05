"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /**
   * Granularity of the reveal animation.
   *  - "letter" animates each character (denser, slower feel)
   *  - "word" animates each word (lighter, snappier — better for long blocks)
   */
  granularity?: "letter" | "word";
  /** Element type to render. */
  as?: "p" | "blockquote" | "div" | "h2" | "h3";
  /**
   * Scroll offset used to drive the reveal. The element fully reveals
   * between the start and end progress points.
   *  - start: when the element top hits this point of the viewport (0 = top, 1 = bottom)
   *  - end:   when the element bottom hits this point of the viewport
   */
  startOffset?: string;
  endOffset?: string;
};

/**
 * ScrollLetterReveal — animates each letter (or word) in/out tied to
 * scroll progress. The text reveals as the element enters the viewport
 * and dims as it leaves, so it works on scroll up and scroll down.
 */
export function ScrollLetterReveal({
  text,
  className = "",
  granularity = "word",
  as = "p",
  startOffset = "start 90%",
  endOffset = "start 25%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset, endOffset] as [string, string] as never,
  });

  // Tokenize: keep whitespace as its own token so the layout matches the
  // original string, while still letting us animate per-word/per-letter.
  const tokens =
    granularity === "letter"
      ? Array.from(text)
      : text.split(/(\s+)/);

  const visibleTokens = tokens.filter((t) => t.trim().length > 0).length;
  let visibleIndex = -1;

  const Component = motion[as] as typeof motion.p;

  return (
    <Component
      ref={ref as never}
      className={className}
      // Allow letters to wrap at whitespace naturally.
      style={{ display: "inline-block" }}
    >
      {tokens.map((token, i) => {
        const isWhitespace = token.trim().length === 0;
        if (isWhitespace) {
          return (
            <span key={i} aria-hidden style={{ whiteSpace: "pre" }}>
              {token}
            </span>
          );
        }
        visibleIndex += 1;
        const start = visibleIndex / Math.max(visibleTokens, 1);
        const end = Math.min(1, start + 1 / Math.max(visibleTokens, 1) + 0.08);
        return (
          <Token
            key={i}
            progress={scrollYProgress}
            start={start}
            end={end}
          >
            {token}
          </Token>
        );
      })}
    </Component>
  );
}

function Token({
  children,
  progress,
  start,
  end,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);
  const filter = useTransform(progress, [start, end], [
    "blur(4px)",
    "blur(0px)",
  ]);
  return (
    <motion.span
      style={{ opacity, y, filter, display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}
