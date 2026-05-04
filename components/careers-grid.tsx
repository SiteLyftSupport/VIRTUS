"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { CAREERS } from "@/lib/careers";

const ease = [0.22, 1, 0.36, 1] as const;

export function CareersGrid() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {CAREERS.map((c, i) => (
        <motion.li
          key={c.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: (i % 3) * 0.05 }}
        >
          <Link
            href={`/careers/${c.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
          >
            <div className="flex items-center justify-between">
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                Job · {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="h-4 w-4 -translate-x-1 text-[#a8a39a] opacity-60 transition-all group-hover:translate-x-0 group-hover:text-[#f0cc7a] group-hover:opacity-100" />
            </div>

            <h3 className="mt-5 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
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

            <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a]">
              Details
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
