"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Pixel range the element can drift toward the cursor. Default 14. */
  strength?: number;
  /** Tilt strength in degrees. Default 4. */
  tilt?: number;
  className?: string;
};

/**
 * Subtle magnetic-cursor card. The element drifts a few pixels toward the
 * cursor when hovered, and tilts gently in 3D. Falls back to no transform
 * once the pointer leaves.
 */
export function Magnetic({
  children,
  strength = 14,
  tilt = 4,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });

  const rotateX = useTransform(springY, [-strength, strength], [tilt, -tilt]);
  const rotateY = useTransform(springX, [-strength, strength], [-tilt, tilt]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set((dx / (rect.width / 2)) * strength);
    y.set((dy / (rect.height / 2)) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    setHover(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={className}
      data-magnetic-hover={hover}
    >
      {children}
    </motion.div>
  );
}
