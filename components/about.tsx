"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";
import { Award, ShieldCheck, Compass, Users, Flame } from "lucide-react";

const VALUES = [
  { icon: Award, label: "Excellence", desc: "Uncompromising rigor on every deliverable." },
  { icon: ShieldCheck, label: "Integrity", desc: "Earned, never assumed. Always defensible." },
  { icon: Compass, label: "Ethics", desc: "Mission first; conscience never optional." },
  { icon: Users, label: "Character", desc: "The people we send define the work." },
  { icon: Flame, label: "Trust", desc: "Built mission by mission, kept for the long haul." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col lg:col-span-5"
          >
            <SectionEyebrow number="01" label="About Virtus" />
            <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-4xl">
              Founded by intelligence and defense professionals.
              <span className="block text-[#d4ae5b]"> Built for the mission.</span>
            </h2>
            <p className="mt-8 text-pretty text-base leading-relaxed text-[#a8a39a]">
              Established in 2010, Virtus Technology Solutions, Inc. is a privately
              held, technology-based small business founded by veterans of the U.S.
              Intelligence Community and the Department of Defense. We deliver
              systems engineering and integration, program management, subject
              matter expertise, information systems, and mission operations support
              to every branch of the U.S. military, DoD agencies, and the IC.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[#a8a39a]">
              Our staff includes former military officers, intelligence
              professionals, and senior engineers with deep, hands-on experience
              across Intelligence, Surveillance, and Reconnaissance (ISR) systems
              and communications systems development.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <Fact k="Established" v="2010" />
              <Fact k="Designation" v="SDVOSB · CVE" />
              <Fact k="Customer Set" v="DoD · IC · Federal" />
              <Fact k="HQ" v="McLean, Virginia" />
            </dl>
            <div className="mt-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={media.flag}
                alt="American flag with subtle circuitry overlay"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
              {/* corner brackets */}
              <Bracket className="left-4 top-4" />
              <Bracket className="right-4 top-4 rotate-90" />
              <Bracket className="left-4 bottom-4 -rotate-90" />
              <Bracket className="right-4 bottom-4 rotate-180" />

              <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6">
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  CVE-Certified · SAM Registered · Cleared Workforce
                </div>
                <div className="font-[var(--font-tactical)] text-2xl text-[#f5f4ef]">
                  Virtus · Vincit · Veritas
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-1 flex-col">
              <div className="mb-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                Founding Principles
              </div>
              <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {VALUES.map(({ icon: Icon, label, desc }) => (
                  <li
                    key={label}
                    className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[#d4ae5b]/30 hover:bg-[#d4ae5b]/[0.04]"
                  >
                    <Icon className="h-5 w-5 text-[#d4ae5b] transition-transform group-hover:scale-110" />
                    <div className="mt-3 font-[var(--font-tactical)] text-sm font-semibold tracking-wider text-[#f5f4ef]">
                      {label.toUpperCase()}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[#a8a39a]">
                      {desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-[#07080b]/60 px-5 py-4">
      <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {k}
      </dt>
      <dd className="mt-1 font-[var(--font-tactical)] text-base font-semibold text-[#f5f4ef]">
        {v}
      </dd>
    </div>
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
