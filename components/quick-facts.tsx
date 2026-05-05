"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { SectionEyebrow } from "./section-eyebrow";
import {
  Building2,
  Calendar,
  MapPin,
  FileBadge2,
  Hash,
  ShieldCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Fact = {
  label: string;
  value: string;
  note: string;
  icon: React.ComponentType<{ className?: string }>;
};

const FACTS: Fact[] = [
  {
    label: "Established",
    value: String(SITE.founded),
    note: "Mission engineering since founding by veterans of the U.S. IC and DoD.",
    icon: Calendar,
  },
  {
    label: "Designation",
    value: "SDVOSB",
    note: "CVE-Verified Service-Disabled Veteran-Owned Small Business",
    icon: ShieldCheck,
  },
  {
    label: "Headquarters",
    value: SITE.hq,
    note: "Northern Virginia · Washington D.C. metro",
    icon: MapPin,
  },
  {
    label: "DUNS",
    value: SITE.duns,
    note: "Federal awardee identifier",
    icon: Hash,
  },
  {
    label: "CAGE",
    value: SITE.cage,
    note: "Commercial and Government Entity code",
    icon: FileBadge2,
  },
  {
    label: "Customer Set",
    value: "DoD · IC · Federal",
    note: "Every branch of the U.S. military, OSD, and IC partners",
    icon: Building2,
  },
];

export function QuickFacts() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-24 lg:py-32">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[40%] opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 30% 0%, rgba(212, 174, 91, 0.10) 0%, rgba(7, 8, 11, 0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="00" label="Quick Facts" />
            <h2 className="font-[var(--font-tactical)] text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              The data sheet
              <span className="block text-[#d4ae5b]">at a glance.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pretty text-sm leading-relaxed text-[#a8a39a] sm:text-base">
              The identifiers, designations, and locations the federal customer
              asks for first — kept current, kept defensible.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((f, i) => (
            <motion.li
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#d4ae5b]/30 hover:bg-[#d4ae5b]/[0.04] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
                  <f.icon className="h-4 w-4" />
                </span>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]/70">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-6 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                {f.label}
              </div>
              <div className="mt-2 font-[var(--font-tactical)] text-2xl font-extrabold tracking-tight text-[#f0cc7a] sm:text-[28px]">
                {f.value}
              </div>
              <div className="mt-3 text-[12px] leading-snug text-[#a8a39a]">
                {f.note}
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#d4ae5b]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
