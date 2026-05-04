"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final integer value to count to. */
  value: number;
  /** Duration in ms. */
  duration?: number;
  /** Optional suffix (e.g. "+"). */
  suffix?: string;
  /** Optional prefix. */
  prefix?: string;
  className?: string;
};

/**
 * Counts from 0 → value when the element scrolls into view. Honors prefers-reduced-motion.
 */
export function CountUp({
  value,
  duration = 1400,
  suffix = "",
  prefix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.floor(eased * value));
              if (t < 1) requestAnimationFrame(tick);
              else setN(value);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
