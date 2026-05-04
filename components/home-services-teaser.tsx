"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { ServiceIcon } from "./service-icon";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeServicesTeaser() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-28 lg:py-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <SectionEyebrow number="02" label="Services" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              Thirteen disciplines.
              <span className="block text-[#d4ae5b]">One operating standard.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
              From applications and cyber to space systems and SETA, Virtus
              delivers the full federal technology stack with senior-grade
              staffing on every engagement.
            </p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              View all services
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {featured.map((s, i) => (
              <motion.li
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease, delay: (i % 6) * 0.04 }}
                className="bg-[#07080b]/70"
              >
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full items-start gap-4 p-6 transition-colors hover:bg-[#0d1015]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
                    <ServiceIcon name={s.iconName} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="font-[var(--font-display)] text-[15px] font-semibold leading-snug tracking-tight text-[#f5f4ef]">
                      {s.name}
                    </div>
                    <div className="mt-1.5 text-[13px] leading-relaxed text-[#a8a39a] line-clamp-2">
                      {s.short}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 text-[#a8a39a] opacity-0 transition-all group-hover:translate-x-0 group-hover:text-[#f0cc7a] group-hover:opacity-100" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
