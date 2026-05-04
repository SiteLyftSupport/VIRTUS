"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Globe2, Clock } from "lucide-react";
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

const CODES = [
  ["NAICS", "541330 · 541512 · 541611 · 541715"],
  ["Designation", "SDVOSB · CVE-Verified"],
  ["SAM", "Active · Registered"],
  ["Cage Code", "Available on request"],
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src={media.heroAlt}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/60 via-[#07080b]/85 to-[#07080b]" />
        <div className="bg-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered hero block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionEyebrow number="06" label="Engage Virtus" />
          <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
            Tell us about
            <span className="block text-[#d4ae5b]">the mission.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-[#a8a39a]">
            Whether it is a sole-source SDVOSB action, a teaming arrangement, a
            recompete, or a new requirement — we'd value the conversation. Senior
            leadership responds personally.
          </p>
        </motion.div>

        {/* Two columns naturally similar height */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-12">
          {/* Compact contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-[#07080b]/70 p-7 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  Direct Lines
                </div>
                <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e21a3a]" />
                  Live
                </span>
              </div>

              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
                <Tile
                  icon={<Phone className="h-4 w-4" />}
                  k="Direct"
                  v="(703) 868-8653"
                  href="tel:+17038688653"
                />
                <Tile
                  icon={<Mail className="h-4 w-4" />}
                  k="Owner"
                  v="lrhodes@virtusts.com"
                  href="mailto:lrhodes@virtusts.com"
                />
                <Tile
                  icon={<Mail className="h-4 w-4" />}
                  k="General"
                  v="info@virtusts.com"
                  href="mailto:info@virtusts.com"
                />
                <Tile
                  icon={<Globe2 className="h-4 w-4" />}
                  k="Web"
                  v="virtusts.com"
                  href="https://virtusts.com"
                />
                <Tile
                  icon={<MapPin className="h-4 w-4" />}
                  k="HQ"
                  v="McLean, Virginia"
                />
                <Tile
                  icon={<Clock className="h-4 w-4" />}
                  k="Response"
                  v="Within 24h, business days"
                />
              </ul>

              <dl className="mt-auto grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2">
                {CODES.map(([k, v]) => (
                  <div key={k} className="bg-[#07080b]/70 px-4 py-3">
                    <dt className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.22em] text-[#a8a39a]">
                      {k}
                    </dt>
                    <dd className="mt-1 font-[var(--font-mono)] text-[11px] tracking-wider text-[#f5f4ef]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              action="mailto:lrhodes@virtusts.com"
              method="post"
              encType="text/plain"
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#07080b]/80 p-7 backdrop-blur-md sm:p-9"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  Secure Inquiry
                </div>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]">
                  All fields routed to senior leadership
                </span>
              </div>

              <div className="grid flex-1 gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="name" label="Name" required />
                  <Field name="org" label="Organization" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="email" type="email" label="Email" required />
                  <Field name="phone" label="Phone" />
                </div>
                <Field
                  name="topic"
                  label="Topic"
                  placeholder="Recompete · Teaming · Sole Source · Other"
                />
                <label className="flex flex-1 flex-col">
                  <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#f5f4ef] outline-none transition-colors placeholder:text-[#a8a39a]/60 focus:border-[#d4ae5b]/50 focus:bg-white/[0.05]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#a3132a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Send Inquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {label}
        {required && <span className="ml-1 text-[#e21a3a]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#f5f4ef] outline-none transition-colors placeholder:text-[#a8a39a]/60 focus:border-[#d4ae5b]/50 focus:bg-white/[0.05]"
      />
    </label>
  );
}

function Tile({
  icon,
  k,
  v,
  href,
}: {
  icon: React.ReactNode;
  k: string;
  v: string;
  href?: string;
}) {
  const inner = (
    <div className="flex flex-col gap-2 bg-[#07080b]/70 p-4 transition-colors hover:bg-[#0d1015]">
      <div className="flex items-center justify-between text-[#d4ae5b]">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#d4ae5b]/30 bg-[#d4ae5b]/5">
          {icon}
        </span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.22em] text-[#a8a39a]">
          {k}
        </span>
      </div>
      <div className="text-sm text-[#f5f4ef]">{v}</div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block">
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}
