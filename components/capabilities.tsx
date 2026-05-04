"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Cog,
  ClipboardList,
  Brain,
  ServerCog,
  Radar,
  ArrowUpRight,
} from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

type Cap = {
  id: string;
  num: string;
  icon: React.ElementType;
  title: string;
  blurb: string;
  bullets: string[];
  image: string;
};

const CAPABILITIES: Cap[] = [
  {
    id: "cap-sei",
    num: "C-01",
    icon: Cog,
    title: "Systems Engineering & Integration",
    blurb:
      "End-to-end engineering of complex defense and intelligence systems — from requirements through integration, test, and lifecycle sustainment.",
    bullets: [
      "Requirements engineering & architecture",
      "Hardware/software integration",
      "Test, evaluation & verification",
      "DevSecOps & continuous integration",
    ],
    image: media.capabilities.engineering,
  },
  {
    id: "cap-pm",
    num: "C-02",
    icon: ClipboardList,
    title: "Program Management",
    blurb:
      "PMI/PMP-led program execution against DoD 5000-series and IC milestones. We run programs the way the customer needs them run.",
    bullets: [
      "Acquisition strategy support",
      "Cost, schedule & risk control",
      "Earned value management (EVM)",
      "Stakeholder & milestone reporting",
    ],
    image: media.capabilities.pm,
  },
  {
    id: "cap-sme",
    num: "C-03",
    icon: Brain,
    title: "Subject Matter Expertise",
    blurb:
      "Hands-on operators and engineers with extensive experience across the IC Agencies and Uniformed Services, embedded directly in the customer's mission.",
    bullets: [
      "ISR collection & analysis",
      "Communications systems development",
      "Operational planning & doctrine",
      "Red-team and tradecraft advisory",
    ],
    image: media.capabilities.sme,
  },
  {
    id: "cap-is",
    num: "C-04",
    icon: ServerCog,
    title: "Information Systems",
    blurb:
      "Secure, resilient, hardened information systems engineered for classified environments and contested networks.",
    bullets: [
      "Cloud, on-prem & hybrid architectures",
      "Cybersecurity & RMF accreditation",
      "Identity, access & zero trust",
      "Data engineering & analytics",
    ],
    image: media.capabilities.infosys,
  },
  {
    id: "cap-ops",
    num: "C-05",
    icon: Radar,
    title: "Mission Operations Support",
    blurb:
      "24/7/365 operations support to the warfighter and the analyst — the work that doesn't stop when the briefing ends.",
    bullets: [
      "Watchfloor & shift operations",
      "ISR mission management",
      "Forward-deployed augmentation",
      "Crisis response & surge support",
    ],
    image: media.capabilities.missionOps,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = CAPABILITIES[active];

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionEyebrow number="02" label="Capabilities" />
              <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
                Five disciplines.
                <span className="block text-[#d4ae5b]">One mindset.</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
                Every Virtus engagement combines the same five capability areas in
                whatever proportion the mission demands. We staff small. We move
                fast. We deliver work the customer can defend.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/5 border-y border-white/10">
              {CAPABILITIES.map((c, i) => {
                const Icon = c.icon;
                const open = active === i;
                return (
                  <li key={c.id} id={c.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center gap-6 py-6 text-left transition-colors ${
                        open
                          ? "text-[#f5f4ef]"
                          : "text-[#a8a39a] hover:text-[#f5f4ef]"
                      }`}
                    >
                      <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                        {c.num}
                      </span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                          open
                            ? "border-[#d4ae5b]/40 bg-[#d4ae5b]/10 text-[#f0cc7a]"
                            : "border-white/10 bg-white/[0.02] text-[#a8a39a] group-hover:border-[#d4ae5b]/30"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 font-[var(--font-tactical)] text-xl font-semibold tracking-tight sm:text-2xl">
                        {c.title}
                      </span>
                      <ArrowUpRight
                        className={`h-5 w-5 shrink-0 transition-all ${
                          open
                            ? "translate-x-0 text-[#f0cc7a]"
                            : "-translate-x-2 opacity-50 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mt-10 grid gap-8 lg:grid-cols-5"
            >
              <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07080b] via-[#07080b]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                    {cap.num} · {cap.title}
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-pretty text-base leading-relaxed text-[#a8a39a]">
                  {cap.blurb}
                </p>
                <ul className="mt-6 space-y-3">
                  {cap.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[#f5f4ef]/85"
                    >
                      <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-[#d4ae5b]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
