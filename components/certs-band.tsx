"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const CERTS = [
  {
    icon: ShieldCheck,
    name: "SDVOSB",
    sub: "CVE-Verified Service-Disabled Veteran-Owned Small Business",
  },
  {
    icon: Award,
    name: "CMMC 2.0 Certified",
    sub: "Cybersecurity Maturity Model Certification, current cycle",
  },
  {
    icon: Lock,
    name: "SAM.gov Active",
    sub: "Federally registered for award and contract execution",
  },
];

export function CertsBand() {
  return (
    <section className="relative border-y border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-16 lg:py-20">
      <div className="circuitry pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
              Compliance · Trust
            </div>
            <h3 className="mt-2 font-[var(--font-tactical)] text-2xl font-semibold tracking-tight text-[#f5f4ef] sm:text-3xl">
              Built defensible. Audited continuously.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#a8a39a]">
            Virtus TS maintains the certifications and registrations the federal
            customer expects from a serious partner — and stays ready for the
            ones the next program will require.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {CERTS.map(({ icon: Icon, name, sub }, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-[var(--font-tactical)] text-lg font-semibold text-[#f5f4ef]">
                  {name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-[#a8a39a]">
                  {sub}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
