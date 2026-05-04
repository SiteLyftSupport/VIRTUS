"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeTeamTeaser() {
  // Six images — first is featured (large), then five smaller in a 2x2 grid alongside.
  const images = media.team.slice(0, 6);
  const [featured, ...rest] = images;

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-36">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <SectionEyebrow number="03" label="The Team" />
              <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
                Senior practitioners.
                <span className="block text-[#d4ae5b]">From day one.</span>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
                Every Virtus engagement is led by an engineer or operator who has
                done the job in uniform, in an agency, or both. We don't pad
                teams to meet a price point. We send the right name and we send
                them on day one.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3">
              <Stat n="7" label="Senior practitioners" />
              <Stat n="100%" label="TS/SCI eligible" />
              <Stat n="14+" label="Years on mission" />
            </div>

            <Link
              href="/team"
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              Meet the team
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 lg:col-span-7 lg:grid-cols-3">
            {/* Featured large portrait spanning rows */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={featured}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 66vw"
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  Owner · Founder
                </div>
                <div className="mt-1 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
                  Lewis Rhodes
                </div>
              </div>
            </motion.div>

            {/* Small portraits */}
            {rest.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-[#07080b]/70 px-4 py-4">
      <div className="font-[var(--font-display)] text-2xl font-semibold text-[#f0cc7a]">
        {n}
      </div>
      <div className="mt-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {label}
      </div>
    </div>
  );
}
