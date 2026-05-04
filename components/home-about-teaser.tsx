"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

const FACTS = [
  ["Established", "2010"],
  ["Designation", "SDVOSB · CVE"],
  ["HQ", "McLean, Virginia"],
  ["Customer Set", "DoD · IC · Federal"],
];

export function HomeAboutTeaser() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6"
          >
            <SectionEyebrow number="01" label="About Virtus" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
              Founded by IC and DoD professionals.
              <span className="block text-[#d4ae5b]">Built for the mission.</span>
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
              Established in 2010 by veterans of the U.S. Intelligence Community
              and the Department of Defense, Virtus delivers senior-grade
              engineering, integration, and operations support across the
              federal national-security enterprise.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">
              {FACTS.map(([k, v]) => (
                <div key={k} className="bg-[#07080b]/70 px-4 py-4">
                  <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                    {k}
                  </dt>
                  <dd className="mt-1 font-[var(--font-display)] text-base font-bold text-[#f5f4ef]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              Read the founding story
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={media.flag}
                alt="American flag with subtle circuitry overlay"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
              <Bracket className="left-4 top-4" />
              <Bracket className="right-4 top-4 rotate-90" />
              <Bracket className="left-4 bottom-4 -rotate-90" />
              <Bracket className="right-4 bottom-4 rotate-180" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6">
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  CVE-Certified · CMMC 2.0 · SAM Active
                </div>
                <div className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#f5f4ef]">
                  Virtus · Vincit · Veritas
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Bracket({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-5 w-5 text-[#d4ae5b] ${className}`}
      aria-hidden
    >
      <path
        d="M2 8 V2 H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
