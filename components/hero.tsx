"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";

const HERO_IMG =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3DGemBMxT4FfcPiEmry1eOUH5l4/hf_20260504_175437_ad6525a4-1c97-48e7-ad02-9e82496e84a3.png";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/40 via-[#07080b]/70 to-[#07080b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]/50" />
        <div className="radial-spotlight absolute inset-0" />
        <div className="bg-grid absolute inset-0 opacity-50" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pt-32 pb-20 lg:px-10">
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]"
        >
          <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[#e21a3a]" />
          <span className="text-[#f0cc7a]">Mission Active</span>
          <span className="text-[#a8a39a]/50">·</span>
          <span>SDVOSB · CVE Verified</span>
          <span className="text-[#a8a39a]/50">·</span>
          <span>Established 2010</span>
        </motion.div>

        <div className="flex flex-1 items-center">
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.05 }}
              className="font-[var(--font-display)] text-balance text-[44px] font-bold leading-[0.95] tracking-tight sm:text-[64px] lg:text-[96px] xl:text-[112px]"
            >
              ENGINEERED FOR
              <br />
              <span className="bg-gradient-to-r from-[#f0cc7a] via-[#d4ae5b] to-[#8c7332] bg-clip-text text-transparent">
                THE MISSION
              </span>
              <br />
              <span className="text-[#f5f4ef]/70">THAT MATTERS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-[#a8a39a] sm:text-lg"
            >
              Virtus Technology Solutions is a Service-Disabled Veteran-Owned
              Small Business delivering systems engineering, integration, program
              management, and mission operations support to the U.S. Department
              of Defense, the Intelligence Community, and federal partners across
              the national security enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] backdrop-blur-md transition-all hover:bg-white/10"
              >
                <Shield className="h-4 w-4 text-[#d4ae5b]" />
                Engage a Team Lead
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.55 }}
              className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md sm:grid-cols-4"
            >
              <Stat n="14+" label="Years on Mission" />
              <Stat n="100%" label="Cleared Workforce" />
              <Stat n="DoD · IC" label="Customer Set" />
              <Stat n="SDVOSB" label="CVE Certified" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="overflow-hidden py-4">
          <div className="marquee flex w-max items-center gap-12 whitespace-nowrap font-[var(--font-mono)] text-[11px] uppercase tracking-[0.32em] text-[#a8a39a]/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {[
                  "Department of Defense",
                  "U.S. Army",
                  "U.S. Navy",
                  "U.S. Air Force",
                  "U.S. Marine Corps",
                  "U.S. Space Force",
                  "U.S. Coast Guard",
                  "Intelligence Community",
                  "Office of the Secretary of Defense",
                  "Combatant Commands",
                ].map((c) => (
                  <span key={`${i}-${c}`} className="flex items-center gap-12">
                    <span>{c}</span>
                    <span className="text-[#d4ae5b]/50">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 bg-[#07080b]/60 px-5 py-5">
      <div className="font-[var(--font-display)] text-2xl font-semibold text-[#f0cc7a] sm:text-3xl">
        {n}
      </div>
      <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {label}
      </div>
    </div>
  );
}
