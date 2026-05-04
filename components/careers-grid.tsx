"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { CAREERS } from "@/lib/careers";

const ease = [0.22, 1, 0.36, 1] as const;

export function CareersGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {CAREERS.map((c, i) => (
        <motion.li
          key={c.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: (i % 3) * 0.05 }}
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
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-[#d4ae5b]/30 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur-md">
                Job · {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-[#a8a39a] opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f0cc7a] group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-[var(--font-tactical)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
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
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
