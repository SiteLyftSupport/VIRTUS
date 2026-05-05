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
  startOffset?: string;
  endOffset?: string;
};

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

  const words = text.split(/(\s+)/);

  // Pre-count animatable units so each can be assigned a slice of progress.
  let totalUnits = 0;
  for (const w of words) {
    if (w.trim().length === 0) continue;
    totalUnits += granularity === "letter" ? Array.from(w).length : 1;
  }

  const Component = motion[as] as typeof motion.p;

  let unitIndex = -1;
  const sliceFor = () => {
    unitIndex += 1;
    const start = unitIndex / Math.max(totalUnits, 1);
    const end = Math.min(1, start + 1 / Math.max(totalUnits, 1) + 0.08);
    return { start, end };
  };

  return (
    <Component ref={ref as never} className={className}>
      {words.map((word, i) => {
        if (word.trim().length === 0) {
          return (
            <span key={i} aria-hidden style={{ whiteSpace: "pre" }}>
              {word}
            </span>
          );
        }
        // Wrap each word in a non-breaking inline-block so the browser
        // never breaks mid-word, even though letter spans are inline-block.
        return (
          <span
            key={i}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {granularity === "letter"
              ? Array.from(word).map((ch, j) => {
                  const { start, end } = sliceFor();
                  return (
                    <Token
                      key={j}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                    >
                      {ch}
                    </Token>
                  );
                })
              : (() => {
                  const { start, end } = sliceFor();
                  return (
                    <Token
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                    >
                      {word}
                    </Token>
                  );
                })()}
          </span>
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
    <motion.span style={{ opacity, y, filter, display: "inline-block" }}>
      {children}
    </motion.span>
  );
}
