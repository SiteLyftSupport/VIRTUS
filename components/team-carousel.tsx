"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
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

  // Scroll-pin host: each member gets one viewport segment.
  // The carousel is sticky-centered while we scroll through these segments.
  const pinRef = useRef<HTMLDivElement>(null);
  const total = TEAM.length;

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  // Track scroll progress → active index. We allow manual changes (arrows,
  // dots, drag) to take over by scrolling to the matching segment instead
  // of fighting state.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (open) return;
    const clamped = Math.max(0, Math.min(0.9999, v));
    const idx = Math.min(total - 1, Math.floor(clamped * total));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const scrollToIndex = useCallback(
    (idx: number) => {
      const host = pinRef.current;
      if (!host) {
        setActive(idx);
        return;
      }
      const rect = host.getBoundingClientRect();
      const totalScrollable = host.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) {
        setActive(idx);
        return;
      }
      // Aim for the middle of segment `idx`.
      const ratio = (idx + 0.5) / total;
      const target =
        window.scrollY + rect.top + ratio * totalScrollable;
      window.scrollTo({ top: target, behavior: "smooth" });
    },
    [total],
  );

  const prev = useCallback(() => {
    const next = (active - 1 + total) % total;
    scrollToIndex(next);
  }, [active, total, scrollToIndex]);

  const next = useCallback(() => {
    const n = (active + 1) % total;
    scrollToIndex(n);
  }, [active, total, scrollToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
      if (e.key === "Enter") setOpen(TEAM[active]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, open, prev, next]);

  function onDragEnd(_: unknown, info: PanInfo) {
    const threshold = 60;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
    dragX.set(0);
  }

  return (
    <section
      id="team"
      ref={pinRef}
      className="relative bg-[#07080b]"
      style={{ height: `${total * 100}vh` }}
    >
      {/* Sticky stage — pins to viewport while user scrolls through segments */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/3 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(163, 19, 42, 0.18) 0%, rgba(7, 8, 11, 0) 70%)",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-24 pb-10 lg:px-10 lg:pt-28 lg:pb-12">
          {/* Header — tightened so carousel is visible above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <SectionEyebrow number="03" label="The Team" align="center" />
            <h2 className="font-[var(--font-tactical)] text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              The people we send
              <span className="block text-[#d4ae5b]">define the work.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-sm leading-relaxed text-[#a8a39a] sm:text-base">
              Scroll, drag, or use the arrow keys. Tap any portrait for the full bio.
            </p>
          </motion.div>

          {/* Carousel stage — fills remaining vertical space */}
          <div
            className="relative mt-6 flex flex-1 select-none items-center justify-center"
            style={{ perspective: "1400px", minHeight: 360 }}
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
                let offset = i - active;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const abs = Math.abs(offset);
                const isActive = offset === 0;

                return (
                  <motion.button
                    key={m.name}
                    type="button"
                    onClick={() =>
                      isActive ? setOpen(m) : scrollToIndex(i)
                    }
                    aria-label={
                      isActive ? `Open ${m.name} bio` : `Focus ${m.name}`
                    }
                    initial={false}
                    animate={{
                      x: `${offset * 30}%`,
                      rotateY: offset * -16,
                      scale: isActive ? 1 : 0.82 - abs * 0.05,
                      // Hide cards beyond the immediate neighbours so we
                      // don't see the layered overlap behind them.
                      opacity: abs > 2 ? 0 : 1,
                      zIndex: 100 - abs,
                    }}
                    transition={{ duration: 0.7, ease }}
                    className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className={`relative aspect-[3/4] w-[240px] overflow-hidden rounded-2xl border bg-[#0d1015] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:w-[300px] lg:w-[340px] ${
                        isActive
                          ? "border-[#d4ae5b]/60 shadow-[0_0_0_1px_rgba(212,174,91,0.2),0_60px_120px_-30px_rgba(212,174,91,0.18)]"
                          : "border-white/10"
                      }`}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 240px"
                        className={`object-cover transition-all duration-700 ${
                          isActive ? "" : "scale-[1.02] blur-[3px]"
                        }`}
                        priority={isActive}
                      />

                      {/* Branded red overlay on inactive cards (replaces grayscale/tilt look) */}
                      {!isActive && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(107, 10, 24, 0.55) 0%, rgba(163, 19, 42, 0.55) 100%)",
                            mixBlendMode: "multiply",
                          }}
                        />
                      )}
                      {!isActive && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-[#07080b]/45"
                        />
                      )}

                      {/* Bottom plate fades the portrait into the page so name plate stays legible */}
                      <div
                        className={`absolute inset-0 ${
                          isActive
                            ? "bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent"
                            : "bg-gradient-to-t from-[#07080b] via-[#07080b]/55 to-[#07080b]/10"
                        }`}
                      />

                      {m.badge && isActive && (
                        <div className="absolute left-4 top-4 rounded-full border border-[#d4ae5b]/40 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur">
                          {m.badge}
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div
                          className={`font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] ${
                            isActive ? "text-[#d4ae5b]" : "text-[#f0cc7a]/80"
                          }`}
                        >
                          {m.role}
                        </div>
                        <div className="mt-1 font-[var(--font-tactical)] text-2xl font-extrabold tracking-tight text-[#f5f4ef]">
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
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {TEAM.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => scrollToIndex(i)}
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
            className="mt-3 font-[var(--font-tactical)] text-3xl font-extrabold leading-tight tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl"
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
