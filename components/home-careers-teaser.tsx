"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { CAREERS } from "@/lib/careers";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeCareersTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-28 lg:py-36">
      <div className="circuitry pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <SectionEyebrow number="04" label="Careers" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              Cleared, senior, and
              <span className="block text-[#d4ae5b]">on the mission.</span>
            </h2>
          </motion.div>
          <div className="flex items-end lg:col-span-5">
            <p className="text-pretty text-base leading-relaxed text-[#a8a39a]">
              Open roles in Northern Virginia. Active FS Poly required for every
              currently posted position.
            </p>
          </div>
        </div>

        <ul className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAREERS.slice(0, 3).map((c, i) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="h-full"
            >
              <Link
                href={`/careers/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-[#d4ae5b]/30 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur-md">
                    Open Role
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#a8a39a]">
                    {c.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-[#d4ae5b]" />
                      {c.location}
                    </span>
                    <span className="text-[#a8a39a]/40">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="h-3 w-3 text-[#d4ae5b]" />
                      {c.clearance}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/careers"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
          >
            View all open roles
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
