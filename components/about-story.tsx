"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";
import { ScrollLetterReveal } from "./scroll-letter-reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_STATS = [
  { k: "Founded", v: "2010" },
  { k: "HQ", v: "McLean, VA" },
  { k: "Designation", v: "SDVOSB · CVE" },
  { k: "Customers", v: "DoD · IC" },
];

export function AboutStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-b border-white/5 bg-[#07080b]"
    >
      <motion.div style={{ y: heroY }} className="absolute inset-0 -z-10">
        <Image
          src={media.foundingDesk}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/60 via-[#07080b]/85 to-[#07080b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-[#07080b]/55 to-[#07080b]/85" />
      </motion.div>
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 lg:px-10 lg:pt-44 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14"
        >
          <div className="flex flex-col lg:col-span-7">
            <SectionEyebrow number="01" label="About Virtus" />
            <h1 className="font-[var(--font-tactical)] text-balance text-5xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-[72px]">
              A small business
              <span className="block text-[#d4ae5b]">with a heavy weight class.</span>
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a] sm:text-lg">
              Virtus Technology Solutions was founded in 2010 by veterans of the
              U.S. Intelligence Community and the Department of Defense — engineers
              and operators who had built the systems they now wanted their company
              to deliver. Fifteen years on, that founding standard is still the
              floor.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4">
              {HERO_STATS.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.06 }}
                  className="bg-[#07080b]/70 px-4 py-4"
                >
                  <dt className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.28em] text-[#a8a39a]">
                    {s.k}
                  </dt>
                  <dd className="mt-1.5 font-[var(--font-tactical)] text-base font-bold tracking-tight text-[#f5f4ef]">
                    {s.v}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Engage Virtus
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#story"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f5f4ef] backdrop-blur-md transition-all hover:bg-white/10"
              >
                Read the story
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)] lg:col-span-5 lg:min-h-0"
          >
            <Image
              src={media.founderPortrait}
              alt="Lewis Rhodes, Founder & Owner"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/20 to-transparent" />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e21a3a]" />
              Founder · Owner
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-[var(--font-tactical)] text-3xl font-extrabold leading-tight tracking-tight text-[#f5f4ef] sm:text-4xl">
                Lewis Rhodes
              </div>
              <div className="mt-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                U.S. Navy · IC · 25+ Years on Mission
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function FounderStatement() {
  return (
    <section
      id="story"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-32 lg:py-48"
    >
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(212, 174, 91, 0.10) 0%, rgba(7, 8, 11, 0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <SectionEyebrow number="02" label="From the Founder" />
        <ScrollLetterReveal
          as="blockquote"
          granularity="letter"
          className="mt-4 font-[var(--font-tactical)] text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl"
          text={`"I started Virtus because the customer deserved better than a body shop. We send the people you would have asked for by name — engineers and operators who have already done the job, and who own the outcome the day they walk on."`}
        />
        <motion.figcaption
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-10 flex flex-wrap items-center gap-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]"
        >
          <span>Lewis Rhodes</span>
          <span className="h-px w-8 bg-[#d4ae5b]/40" />
          <span className="text-[#a8a39a]">Founder · Owner</span>
        </motion.figcaption>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    year: "2010",
    title: "Founded",
    body: "Lewis Rhodes founds Virtus Technology Solutions. Engineering-first, mission-aware, by-veterans-for-the-warfighter.",
  },
  {
    year: "2013",
    title: "First IC prime engagement",
    body: "Embeds senior engineers on a national-mission collection program. The customer asks Virtus to staff the next billet by name.",
  },
  {
    year: "2017",
    title: "SDVOSB CVE certified",
    body: "CVE verifies Virtus' Service-Disabled Veteran-Owned Small Business status, opening sole-source SDVOSB pathways.",
  },
  {
    year: "2020",
    title: "Mission Operations practice",
    body: "Stands up a 24/7/365 watch-floor support practice for combatant-command and IC customers.",
  },
  {
    year: "2023",
    title: "CMMC 2.0 certified",
    body: "Achieves CMMC 2.0 certification, hardening Virtus' cyber posture across every program touchpoint.",
  },
  {
    year: "2026",
    title: "Today",
    body: "Senior-grade staffing across thirteen federal technology disciplines — from applications to space systems — for DoD, IC, and federal partners nationwide.",
  },
];

export function Timeline() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#07080b] via-[#0a0c11] to-[#07080b] py-28 lg:py-40">
      <div className="circuitry pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <SectionEyebrow number="03" label="History" />
          <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
            Fifteen years on
            <span className="block text-[#d4ae5b]">the same standard.</span>
          </h2>
        </motion.div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col gap-4 bg-[#07080b]/70 p-7 transition-colors hover:bg-[#0d1015]"
            >
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-tactical)] text-3xl font-extrabold tracking-tight text-[#f0cc7a] sm:text-4xl">
                  {t.year}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#d4ae5b]/40 to-transparent" />
              </div>
              <h3 className="font-[var(--font-tactical)] text-xl font-bold tracking-tight text-[#f5f4ef]">
                {t.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#a8a39a]">{t.body}</p>
              <span className="mt-auto font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]/70">
                Phase {String(i + 1).padStart(2, "0")} / 06
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const VALUES = [
  {
    label: "Excellence",
    body: "Uncompromising rigor on every deliverable. The work is finished when the customer would defend it in front of theirs.",
  },
  {
    label: "Integrity",
    body: "Earned, never assumed. Every Virtus engineer carries the same standard regardless of who is in the room.",
  },
  {
    label: "Ethics",
    body: "Mission first; conscience never optional. We say no to work we shouldn't take.",
  },
  {
    label: "Character",
    body: "The people we send define the work. Hiring is the most important system in the company.",
  },
  {
    label: "Trust",
    body: "Built mission by mission. Kept across decades of customer relationships.",
  },
];

export function FoundingPrinciples() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={media.dcSkyline}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/85 via-[#07080b]/85 to-[#07080b]" />
        <div className="bg-grid absolute inset-0 opacity-20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <SectionEyebrow number="04" label="Founding Principles" />
          <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
            What "Virtus" means.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
            The Roman virtue of valor, courage, character, and worth. We took
            the name on purpose, and these five principles are how we measure
            ourselves against it.
          </p>
        </motion.div>

        <ul className="mt-16 grid gap-4 md:grid-cols-5">
          {VALUES.map((v, i) => (
            <motion.li
              key={v.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
            >
              <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
                0{i + 1}
              </div>
              <div className="mt-4 font-[var(--font-tactical)] text-xl font-extrabold tracking-tight text-[#f5f4ef]">
                {v.label.toUpperCase()}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#a8a39a]">
                {v.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-24 lg:py-32">
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <h3 className="font-[var(--font-tactical)] text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-[#f5f4ef] sm:text-4xl lg:text-5xl">
            Ready to put a senior practitioner on your program?
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
            >
              Engage Virtus
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] backdrop-blur-md transition-all hover:bg-white/10"
            >
              Meet the team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
