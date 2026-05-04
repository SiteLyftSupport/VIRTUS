"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { SectionEyebrow } from "./section-eyebrow";
import { CountUp } from "./count-up";

const ease = [0.22, 1, 0.36, 1] as const;

type Fact =
  | { label: string; value: string; note?: string }
  | { label: string; count: number; suffix?: string; prefix?: string; note?: string };

const FACTS: Fact[] = [
  { label: "Designation", value: "SDVOSB", note: "Service Disabled Veteran Owned Small Business" },
  { label: "Established", count: SITE.founded, note: "Mission engineering since" },
  { label: "Headquarters", value: SITE.hq, note: "Northern Virginia" },
  { label: "DUNS", value: SITE.duns, note: "Federal awardee identifier" },
  { label: "CAGE", value: SITE.cage, note: "Commercial and government entity code" },
];

export function QuickFacts() {
  return (
    <section className="relative border-t border-white/5 bg-[#07080b] py-24 lg:py-32">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionEyebrow number="00" label="Quick Facts" />
          <h2 className="font-[var(--font-display)] text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
            The data sheet at a glance.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3 lg:grid-cols-5">
          {FACTS.map((f, i) => (
            <motion.li
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              className="bg-[#07080b]/70 p-6 transition-colors hover:bg-[#0d1015]"
            >
              <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                {f.label}
              </div>
              <div className="mt-3 font-[var(--font-display)] text-2xl font-extrabold tracking-tight text-[#f0cc7a] sm:text-[28px]">
                {"count" in f ? (
                  <CountUp
                    value={f.count}
                    suffix={f.suffix ?? ""}
                    prefix={f.prefix ?? ""}
                  />
                ) : (
                  f.value
                )}
              </div>
              {f.note && (
                <div className="mt-2 text-[11px] leading-snug text-[#a8a39a]">
                  {f.note}
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
