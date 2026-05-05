"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { CAREERS } from "@/lib/careers";

const ease = [0.22, 1, 0.36, 1] as const;

// Each card pins at the same scroll position with a small per-card offset,
// so a stack of card edges peeks out behind the active card as you scroll.
const STICKY_BASE_PX = 96;
const STICKY_STEP_PX = 16;

export function CareersGrid() {
  return (
    <ul className="flex flex-col gap-6 lg:gap-0">
      {CAREERS.map((c, i) => (
        <motion.li
          key={c.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.55, ease }}
          className="lg:sticky"
          style={{
            top: `${STICKY_BASE_PX + i * STICKY_STEP_PX}px`,
            zIndex: 10 + i,
          }}
        >
          <Link
            href={`/careers/${c.slug}`}
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#0a0c11] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)] transition-all hover:border-[#d4ae5b]/40 lg:rounded-[28px]"
          >
            <div className="grid lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 lg:col-span-5 lg:aspect-auto lg:border-b-0 lg:border-r">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent lg:bg-gradient-to-r lg:from-[#0a0c11] lg:via-transparent lg:to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-[#d4ae5b]/30 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur-md">
                  Job · {String(i + 1).padStart(2, "0")} / {String(CAREERS.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col p-7 sm:p-9 lg:col-span-7 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
                    {c.location} · {c.clearance}
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#a8a39a] opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f0cc7a] group-hover:opacity-100" />
                </div>

                <h3 className="mt-5 font-[var(--font-tactical)] text-3xl font-extrabold leading-[1.1] tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-[40px]">
                  {c.title}
                </h3>

                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
                  {c.summary}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <MapPin className="h-3 w-3 text-[#d4ae5b]" />
                    {c.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <ShieldCheck className="h-3 w-3 text-[#d4ae5b]" />
                    {c.clearance}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0cc7a] transition-colors group-hover:bg-[#d4ae5b]/20">
                    View role
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]/70">
                    {(c.required.length + (c.desired?.length ?? 0))}+ requirements
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
