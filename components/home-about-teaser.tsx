"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeAboutTeaser() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <SectionEyebrow number="01" label="About Virtus" />
            <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-[52px]">
              Founded by IC and DoD professionals.
              <span className="block text-[#d4ae5b]">Built for the mission.</span>
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
              Established in 2010 by veterans of the U.S. Intelligence Community
              and the Department of Defense, Virtus delivers senior-grade
              engineering, integration, and operations support across the
              federal national-security enterprise.
            </p>

            <Link
              href="/about"
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              Read the founding story
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={media.flag}
                alt="American flag with subtle circuitry overlay"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
              <Bracket className="left-4 top-4" />
              <Bracket className="right-4 top-4 rotate-90" />
              <Bracket className="left-4 bottom-4 -rotate-90" />
              <Bracket className="right-4 bottom-4 rotate-180" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  CVE-Certified · CMMC 2.0 · SAM Active
                </div>
                <div className="font-[var(--font-tactical)] text-2xl font-bold uppercase tracking-tight text-[#f5f4ef] sm:text-3xl">
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
