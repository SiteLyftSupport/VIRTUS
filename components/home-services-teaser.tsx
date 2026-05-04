"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { ServiceIcon } from "./service-icon";
import { SectionEyebrow } from "./section-eyebrow";
import { Magnetic } from "./magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeServicesTeaser() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Stacked header — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <SectionEyebrow number="02" label="Services" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[72px]">
              Thirteen disciplines.
              <span className="block text-[#d4ae5b]">One operating standard.</span>
            </h2>
          </div>
          <div className="flex items-end justify-between gap-6 lg:col-span-5">
            <p className="max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
              From applications and cyber to space systems and SETA, Virtus
              delivers the full federal technology stack with senior-grade
              staffing on every engagement.
            </p>
            <Link
              href="/services"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15 sm:inline-flex"
            >
              All 13
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* 3-col grid with image headers */}
        <ul className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              className="h-full"
            >
              <Magnetic strength={8} tilt={2} className="h-full">
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/40 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#07080b]/70 text-[#f0cc7a] backdrop-blur-md">
                      <ServiceIcon name={s.iconName} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-[var(--font-display)] text-base font-bold leading-snug tracking-tight text-[#f5f4ef]">
                      {s.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#a8a39a]">
                      {s.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 self-start font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#d4ae5b]">
                      Open brief
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Magnetic>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
          >
            View all 13 services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
