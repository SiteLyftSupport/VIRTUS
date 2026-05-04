"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";
import { media } from "@/lib/media";

const ENGAGEMENTS = [
  {
    customer: "U.S. Department of Defense",
    title: "Multi-INT Architecture Refresh",
    period: "Multi-Year",
    summary:
      "Led the systems engineering and integration of a multi-intelligence collection architecture, replatforming legacy capability onto a hardened, cloud-edge backbone.",
    metrics: [
      ["Reduced cycle time", "61%"],
      ["RMF accreditation", "Achieved on schedule"],
    ],
  },
  {
    customer: "Intelligence Community Agency",
    title: "Mission Operations Augmentation",
    period: "Ongoing",
    summary:
      "24/7/365 watch-floor support and forward-deployed analyst surge for a national-mission collection cell, with measurable improvements in tipping & cueing tempo.",
    metrics: [
      ["Tip-to-cue latency", "↓ 47%"],
      ["Customer NPS", "9.4 / 10"],
    ],
  },
  {
    customer: "Combatant Command",
    title: "Tactical Communications Modernization",
    period: "Multi-Year",
    summary:
      "Engineered and integrated a contested-environment communications stack supporting forward-deployed elements across two theaters of operations.",
    metrics: [
      ["Resilient links delivered", "100%"],
      ["EVM cost variance", "< 2%"],
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Virtus brought senior-grade engineers and operators on day one — they ran the program the way we needed it run, not the way that was easy for them.",
    name: "Senior Government Customer",
    title: "Program Office, DoD",
  },
  {
    quote:
      "Their bench is small, but every name on it is the right name. That has been the difference between hitting milestones and slipping them.",
    name: "Senior Technical Lead",
    title: "Intelligence Community",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function PastPerformance() {
  return (
    <section
      id="past-performance"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src={media.archive}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/80 via-[#07080b]/85 to-[#07080b]" />
        <div className="bg-grid-fine absolute inset-0 opacity-20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="05" label="Past Performance" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[28px]">
              Programs that
              <span className="block text-[#d4ae5b]">moved the needle.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
              Representative engagements across DoD and the IC. Specifics are
              available under appropriate engagement and clearance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              {ENGAGEMENTS.map((e, i) => (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  className="group relative bg-[#07080b]/70 p-7 transition-colors hover:bg-[#0d1015]"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em]">
                    <span className="text-[#d4ae5b]">{e.customer}</span>
                    <span className="text-[#a8a39a]/70">{e.period}</span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
                    {e.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#a8a39a]">
                    {e.summary}
                  </p>
                  <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2">
                    {e.metrics.map(([k, v]) => (
                      <div key={k} className="bg-[#07080b]/70 px-4 py-3">
                        <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                          {k}
                        </div>
                        <div className="mt-1 font-[var(--font-display)] text-lg font-semibold text-[#f0cc7a]">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#d4ae5b]/20" />
              <blockquote className="font-[var(--font-display)] text-pretty text-xl leading-snug text-[#f5f4ef]/95">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#d4ae5b]">
                {t.name}
                <span className="ml-3 text-[#a8a39a]">{t.title}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
