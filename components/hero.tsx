"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { HeroSignal } from "./hero-signal";
import { Magnetic } from "./magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { n: "14+", label: "Years on Mission" },
  { n: "100%", label: "Cleared Workforce" },
  { n: "DoD · IC", label: "Customer Set" },
  { n: "SDVOSB", label: "CVE Certified" },
];

export function Hero() {
  return (
    <>
      <section className="relative isolate flex min-h-[760px] flex-col overflow-hidden bg-[#07080b] lg:h-[100svh]">
        {/* Full-bleed signal mesh + gradient mask */}
        <div className="absolute inset-0">
          <HeroSignal />
          {/* Left-side darken so the copy stays legible over the canvas (alphas reduced ~10%) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.9) 0%, rgba(7,8,11,0.83) 28%, rgba(7,8,11,0.50) 50%, rgba(7,8,11,0.09) 78%, rgba(7,8,11,0) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, rgba(163, 19, 42, 0.20) 0%, rgba(7, 8, 11, 0) 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#07080b]"
          />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        </div>

        {/* Top status bar */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]"
          >
            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[#e21a3a]" />
            <span className="text-[#f0cc7a]">Mission Active</span>
            <span className="text-[#a8a39a]/50">·</span>
            <span>SDVOSB · CVE Verified</span>
            <span className="text-[#a8a39a]/50">·</span>
            <span>Established 2010</span>
          </motion.div>
        </div>

        {/* Centered content (left-anchored on desktop) */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 lg:px-10">
          <div className="w-full max-w-[1080px]">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.05 }}
              className="font-[var(--font-display)] text-balance text-[40px] font-black uppercase leading-[0.92] tracking-[-0.015em] sm:text-[54px] lg:text-[68px] xl:text-[80px]"
            >
              Engineered for{" "}
              <span className="bg-gradient-to-r from-[#f0cc7a] via-[#d4ae5b] to-[#8c7332] bg-clip-text text-transparent">
                the mission
              </span>
              <br />
              <span className="text-[#f5f4ef]/65">that matters.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a] sm:text-lg"
            >
              Veteran-owned engineering for the U.S. Intelligence Community
              and Department of Defense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] backdrop-blur-md transition-all hover:bg-white/10"
              >
                <Shield className="h-4 w-4 text-[#d4ae5b]" />
                Engage a Team Lead
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats strip — flush with bottom of viewport on desktop, with breathing room above */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 pb-8 lg:px-10 lg:pt-20 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <Magnetic key={s.label} strength={8} tilt={3}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07080b]/65 px-5 py-4 backdrop-blur-md transition-colors hover:border-[#d4ae5b]/40 hover:bg-[#0d1015]/80">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-[var(--font-display)] text-2xl font-black uppercase tracking-tight text-[#f0cc7a] sm:text-3xl">
                      {s.n}
                    </div>
                    <div className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.22em] text-[#a8a39a]/70">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                    {s.label}
                  </div>
                  <span
                    aria-hidden
                    className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#d4ae5b]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </div>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer marquee — outside the 100svh hero so the stats can be flush */}
      <div className="relative border-y border-white/5 bg-black/40 backdrop-blur-md">
        <div className="overflow-hidden py-4">
          <div className="marquee flex w-max items-center gap-12 whitespace-nowrap font-[var(--font-mono)] text-[11px] uppercase tracking-[0.32em] text-[#a8a39a]/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {[
                  "Department of Defense",
                  "U.S. Army",
                  "U.S. Navy",
                  "U.S. Air Force",
                  "U.S. Marine Corps",
                  "U.S. Space Force",
                  "U.S. Coast Guard",
                  "Intelligence Community",
                  "Office of the Secretary of Defense",
                  "Combatant Commands",
                ].map((c) => (
                  <span key={`${i}-${c}`} className="flex items-center gap-12">
                    <span>{c}</span>
                    <span className="text-[#d4ae5b]/50">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
