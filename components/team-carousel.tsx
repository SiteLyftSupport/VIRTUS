"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { TEAM, type Member } from "@/lib/team";
import { Modal } from "./modal";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12V20.5h-4v-4.92c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V20.5h-4v-11Z" />
    </svg>
  );
}

export function TeamCarousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<Member | null>(null);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = TEAM.length;
  const prev = useCallback(
    () => setActive((a) => (a - 1 + total) % total),
    [total],
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % total),
    [total],
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Enter") setOpen(TEAM[active]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, open, prev, next]);

  // Auto-rotate (paused while modal open or hovered)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || open) return;
    const id = window.setInterval(() => next(), 5500);
    return () => window.clearInterval(id);
  }, [paused, open, next]);

  function onDragEnd(_: unknown, info: PanInfo) {
    const threshold = 60;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
    dragX.set(0);
  }

  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(163, 19, 42, 0.18) 0%, rgba(7, 8, 11, 0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionEyebrow number="03" label="The Team" />
          <h2 className="font-[var(--font-display)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
            The people we send
            <span className="block text-[#d4ae5b]">define the work.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
            Drag, swipe, or use the arrow keys. Tap any portrait for the full bio.
          </p>
        </motion.div>

        {/* Carousel stage */}
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-20 h-[560px] select-none sm:h-[640px]"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            drag="x"
            dragElastic={0.18}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
            style={{ x: dragX }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {TEAM.map((m, i) => {
              // Wrap-around offset (-3..-2..-1..0..1..2..3 etc., shortest path)
              let offset = i - active;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const abs = Math.abs(offset);
              const isActive = offset === 0;

              return (
                <motion.button
                  key={m.name}
                  type="button"
                  onClick={() => (isActive ? setOpen(m) : setActive(i))}
                  aria-label={
                    isActive ? `Open ${m.name} bio` : `Focus ${m.name}`
                  }
                  initial={false}
                  animate={{
                    x: `${offset * 32}%`,
                    rotateY: offset * -22,
                    scale: isActive ? 1 : 0.78 - abs * 0.06,
                    opacity: abs > 3 ? 0 : 1 - abs * 0.18,
                    zIndex: 100 - abs,
                  }}
                  transition={{ duration: 0.7, ease }}
                  className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`relative aspect-[3/4] w-[260px] overflow-hidden rounded-2xl border bg-[#0d1015] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:w-[320px] ${
                      isActive
                        ? "border-[#d4ae5b]/60 shadow-[0_0_0_1px_rgba(212,174,91,0.2),0_60px_120px_-30px_rgba(212,174,91,0.18)]"
                        : "border-white/10"
                    }`}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 640px) 320px, 260px"
                      className={`object-cover transition-all duration-700 ${
                        isActive ? "" : "grayscale"
                      }`}
                      priority={isActive}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />

                    {m.badge && isActive && (
                      <div className="absolute left-4 top-4 rounded-full border border-[#d4ae5b]/40 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur">
                        {m.badge}
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                        {m.role}
                      </div>
                      <div className="mt-1 font-[var(--font-display)] text-2xl font-extrabold tracking-tight text-[#f5f4ef]">
                        {m.name}
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, ease, delay: 0.15 }}
                          className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a]"
                        >
                          Open bio
                          <ArrowUpRight className="h-3 w-3" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous member"
            className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-[#07080b]/70 p-3 text-[#a8a39a] backdrop-blur-md transition-colors hover:border-[#d4ae5b]/40 hover:text-[#f0cc7a] sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next member"
            className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-[#07080b]/70 p-3 text-[#a8a39a] backdrop-blur-md transition-colors hover:border-[#d4ae5b]/40 hover:text-[#f0cc7a] sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Counter / dot row */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
            {String(active + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {TEAM.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${m.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-10 bg-[#d4ae5b]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#a8a39a]">
            / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Detail modal */}
      <Modal open={!!open} onClose={() => setOpen(null)} labelledBy="team-modal-title">
        {open && <TeamModalContent member={open} />}
      </Modal>
    </section>
  );
}

function TeamModalContent({ member }: { member: Member }) {
  return (
    <div className="grid h-full md:grid-cols-2">
      <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[min(80vh,720px)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent md:bg-gradient-to-r" />
      </div>

      <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 md:h-[min(80vh,720px)]">
        <div>
          {member.badge && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/10 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a]">
              {member.badge}
            </div>
          )}
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
            {member.role}
          </div>
          <h2
            id="team-modal-title"
            className="mt-3 font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl"
          >
            {member.name}
          </h2>
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#d4ae5b]/30 to-transparent" />
          <p className="text-sm leading-relaxed text-[#a8a39a]">{member.bio}</p>

          <div className="mt-6">
            <div className="mb-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
              Pedigree
            </div>
            <ul className="flex flex-wrap gap-2">
              {member.pedigree.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#f5f4ef]/85"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-white/5 pt-5">
          <a
            href={`mailto:info@virtusts.com?subject=${encodeURIComponent(
              `Re: ${member.name}`,
            )}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0cc7a] hover:bg-[#d4ae5b]/15"
          >
            <Mail className="h-3.5 w-3.5" />
            Engage
          </a>
          <a
            href="#"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8a39a] hover:border-[#d4ae5b]/30 hover:text-[#f0cc7a]"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
