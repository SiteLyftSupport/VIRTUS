"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeTeamTeaser() {
  const previewImages = media.team.slice(0, 4);

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-36">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <SectionEyebrow number="03" label="The Team" />
            <h2 className="font-[var(--font-display)] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              Senior practitioners.
              <span className="block text-[#d4ae5b]">From day one.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
              Every Virtus engagement is led by an engineer or operator who has
              done the job in uniform, in an agency, or both.
            </p>
            <Link
              href="/team"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              Meet the team
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:grid-cols-4">
            {previewImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
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
