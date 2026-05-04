"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TEAM, type Member } from "@/lib/team";
import { Modal } from "./modal";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * One team row in the sticky-scroll list. Uses useInView with a tight
 * vertical band so the card scales up and de-blurs only when it's
 * properly in frame (and reverses when it leaves).
 */
function TeamRow({
  m,
  i,
  onOpen,
}: {
  m: Member;
  i: number;
  onOpen: (m: Member) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });
  return (
    <motion.li
      ref={ref}
      animate={{
        scale: inView ? 1 : 0.94,
        opacity: inView ? 1 : 0.45,
        filter: inView ? "blur(0px)" : "blur(3px)",
      }}
      transition={{ duration: 0.55, ease }}
      className="will-change-transform"
    >
      <button
        type="button"
        onClick={() => onOpen(m)}
        aria-label={`Open ${m.name} bio`}
        className="group flex w-full items-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-all hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
      >
        <div className="relative aspect-[3/4] w-32 shrink-0 sm:w-40">
          <Image
            src={m.image}
            alt={m.name}
            fill
            sizes="160px"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/40 to-transparent" />
          {m.badge && (
            <span className="absolute left-2 top-2 rounded-full border border-[#d4ae5b]/40 bg-[#07080b]/70 px-2 py-0.5 font-[var(--font-mono)] text-[8px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur">
              {m.badge}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3 p-5 sm:p-6">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  {m.role}
                </div>
                <h3 className="mt-1 font-[var(--font-tactical)] text-xl uppercase tracking-tight text-[#f5f4ef] sm:text-2xl">
                  {m.name}
                </h3>
              </div>
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]/60">
                0{i + 1}
              </span>
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#a8a39a] sm:line-clamp-3">
              {m.bio}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {m.pedigree.slice(0, 2).map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[#a8a39a]"
                >
                  {p}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#d4ae5b]">
              Open bio
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </button>
    </motion.li>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12V20.5h-4v-4.92c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V20.5h-4v-11Z" />
    </svg>
  );
}

export function HomeTeamTeaser() {
  const [open, setOpen] = useState<Member | null>(null);

  return (
    <section className="relative border-t border-white/5 bg-[#07080b] py-28 lg:py-40">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          {/* Left column — sticky on desktop. Sticky must live on the same
              element as the col-span/grid child; nesting it inside a
              transform-applying motion.div breaks position:sticky. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start"
          >
            <div>
              <SectionEyebrow number="03" label="The Team" />
              <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-medium leading-[1.0] tracking-tight sm:text-5xl lg:text-[52px]">
                Senior practitioners.
                <span className="block text-[#d4ae5b]">From day one.</span>
              </h2>
              <p className="mt-7 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
                Every Virtus engagement is led by an engineer or operator who
                has done the job in uniform, in an agency, or both. Click any
                name on the right for the full bio.
              </p>

              <div className="mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <Stat n={`${TEAM.length}`} label="Senior practitioners" />
                <Stat n="100%" label="TS/SCI eligible" />
                <Stat n="14+" label="Years on mission" />
              </div>

              <Link
                href="/team"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
              >
                Meet the team
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Scrolling member list — each row scales + de-blurs as it enters frame */}
          <ul className="space-y-5 lg:col-span-7">
            {TEAM.map((m, i) => (
              <TeamRow key={m.name} m={m} i={i} onOpen={setOpen} />
            ))}
          </ul>
        </div>
      </div>

      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        labelledBy="home-team-modal-title"
      >
        {open && (
          <div className="grid h-full md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[min(80vh,720px)]">
              <Image
                src={open.image}
                alt={open.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 md:h-[min(80vh,720px)]">
              <div>
                {open.badge && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/10 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a]">
                    {open.badge}
                  </div>
                )}
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
                  {open.role}
                </div>
                <h2
                  id="home-team-modal-title"
                  className="mt-3 font-[var(--font-tactical)] text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl"
                >
                  {open.name}
                </h2>
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#d4ae5b]/30 to-transparent" />
                <p className="text-sm leading-relaxed text-[#a8a39a]">{open.bio}</p>
                <div className="mt-6">
                  <div className="mb-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                    Pedigree
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {open.pedigree.map((p) => (
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
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0cc7a] hover:bg-[#d4ae5b]/15"
                >
                  Full team
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#"
                  aria-label={`${open.name} on LinkedIn`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8a39a] hover:border-[#d4ae5b]/30 hover:text-[#f0cc7a]"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-[#07080b]/70 px-4 py-4">
      <div className="font-[var(--font-tactical)] text-2xl font-extrabold text-[#f0cc7a]">
        {n}
      </div>
      <div className="mt-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {label}
      </div>
    </div>
  );
}
