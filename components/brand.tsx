import { clsx } from "clsx";

type Props = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * Inline Spartan helmet shield, drawn from the brand business card.
 * Pure CSS/SVG — no external image required.
 */
export function VirtusMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={clsx("h-9 w-9", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="vm-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0cc7a" />
          <stop offset="50%" stopColor="#d4ae5b" />
          <stop offset="100%" stopColor="#8c7332" />
        </linearGradient>
        <linearGradient id="vm-red" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a3132a" />
          <stop offset="100%" stopColor="#5d0913" />
        </linearGradient>
      </defs>
      {/* outer shield gold border */}
      <path
        d="M32 2 L58 10 V32 C58 47 47 58 32 62 C17 58 6 47 6 32 V10 Z"
        fill="url(#vm-gold)"
      />
      {/* inner shield red field */}
      <path
        d="M32 6 L54 12.5 V31 C54 44 45 54 32 58 C19 54 10 44 10 31 V12.5 Z"
        fill="url(#vm-red)"
      />
      {/* spartan helmet silhouette (simplified) */}
      <g fill="#0d1015" stroke="#f0cc7a" strokeWidth="0.7">
        {/* crest */}
        <path d="M22 14 C28 9 38 9 44 14 L42 19 C36 16 28 16 22 19 Z" />
        {/* helmet body */}
        <path d="M22 19 C20 23 20 30 22 35 L26 40 L34 40 L36 36 L33 33 L33 28 L36 26 L36 22 L33 20 Z" />
        {/* eye slot */}
        <path d="M27 24 L31 24 L31 28 L27 28 Z" fill="#a3132a" stroke="none" />
        {/* cheek guard */}
        <path d="M34 32 L38 32 L40 36 L37 39 L34 38 Z" />
      </g>
    </svg>
  );
}

export function VirtusWordmark({ className }: Props) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <VirtusMark className="h-9 w-9" />
      <div className="leading-none">
        <div className="font-[var(--font-display)] tracking-[0.18em] text-[18px] font-bold text-[#f5f4ef]">
          VIRTUS
        </div>
        <div className="mt-1 text-[9px] tracking-[0.32em] text-[#d4ae5b] font-[var(--font-mono)]">
          TECHNOLOGY SOLUTIONS
        </div>
      </div>
    </div>
  );
}
