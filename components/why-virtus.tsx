"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Cpu,
  Globe,
  Lock,
  HandCoins,
} from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";
import { media } from "@/lib/media";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "SDVOSB · CVE-Certified",
    body: "Virtus is a verified Service-Disabled Veteran-Owned Small Business — fully eligible for SDVOSB set-asides and sole-source actions.",
  },
  {
    icon: Cpu,
    title: "Engineering DNA",
    body: "Founded and led by working engineers and operators. We win technical fights because our partners architecting them have lived them.",
  },
  {
    icon: Globe,
    title: "Mission-Aware",
    body: "Direct, hands-on experience with IC Agencies, Combatant Commands, and Uniformed Services. We don't ramp on your time.",
  },
  {
    icon: Lock,
    title: "Cleared Workforce",
    body: "Deep bench of TS/SCI-cleared engineers, operators, and program managers — placed where the customer can put them to work on day one.",
  },
  {
    icon: Building2,
    title: "Right-Sized",
    body: "Small enough to move fast and stay accountable; experienced enough to compete on the largest IDIQs alongside the primes.",
  },
  {
    icon: HandCoins,
    title: "Fiscally Disciplined",
    body: "EVM-graded program execution and lean overhead — the customer's dollar buys mission, not corporate footprint.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyVirtus() {
  return (
    <section
      id="why"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src={media.spartanPlinth}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/85 via-[#07080b]/85 to-[#07080b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]/70" />
        <div className="circuitry absolute inset-0 opacity-15" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionEyebrow number="04" label="Why Virtus" />
          <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            A small business with the
            <span className="block text-[#d4ae5b]">posture of a prime.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#a8a39a]">
            Virtus combines the operational tempo of a small, veteran-owned shop
            with the engineering rigor and program discipline customers expect from
            top-tier defense primes.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="group relative bg-[#07080b]/70 p-8 transition-colors hover:bg-[#0d1015]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-[#f5f4ef]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a8a39a]">
                {body}
              </p>
              <div className="absolute right-6 top-6 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]/60">
                0{i + 1}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
