"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { media } from "@/lib/media";

const ease = [0.22, 1, 0.36, 1] as const;

export function DoctrineBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/5 bg-black">
      <div className="absolute inset-0">
        <Image
          src={media.spartan}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-[#07080b]/70 to-[#07080b]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/40 via-transparent to-[#07080b]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
            <span className="h-px w-10 bg-[#d4ae5b]/40" />
            <span>Doctrine</span>
          </div>
          <h2 className="font-[var(--font-tactical)] text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl">
            "Virtus" is the Roman virtue of valor, courage, character, and
            worth.
            <span className="mt-4 block text-[#d4ae5b]">
              We took the name on purpose.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
            Every program we touch is staffed with engineers and operators whose
            standard is the same one they held when they wore the uniform: do
            the work, finish the work, and own the outcome.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
