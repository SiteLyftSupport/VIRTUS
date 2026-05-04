"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Globe2 } from "lucide-react";
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
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/40 via-[#07080b]/85 to-[#07080b]" />
        <div className="bg-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6"
          >
            <SectionEyebrow number="06" label="Engage Virtus" />
            <h2 className="font-[var(--font-display)] text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Tell us about
              <span className="block text-[#d4ae5b]">the mission.</span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-[#a8a39a]">
              Whether it is a sole-source SDVOSB action, a teaming arrangement, a
              recompete, or a new requirement — we'd value the conversation.
              Senior leadership responds personally.
            </p>

            <ul className="mt-10 space-y-4">
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Direct"
                value="(703) 868-8653"
                href="tel:+17038688653"
              />
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Owner"
                value="lrhodes@virtusts.com"
                href="mailto:lrhodes@virtusts.com"
              />
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="General"
                value="info@virtusts.com"
                href="mailto:info@virtusts.com"
              />
              <ContactRow
                icon={<Globe2 className="h-4 w-4" />}
                label="Web"
                value="virtusts.com"
                href="https://virtusts.com"
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Headquarters"
                value="McLean, Virginia · Washington, D.C. Metro"
              />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <form
              action="mailto:lrhodes@virtusts.com"
              method="post"
              encType="text/plain"
              className="rounded-3xl border border-white/10 bg-[#07080b]/80 p-8 backdrop-blur-md gold-border"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  Secure Inquiry
                </div>
                <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#a8a39a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e21a3a]" />
                  Live
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="org" label="Organization" required />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field name="email" type="email" label="Email" required />
                <Field name="phone" label="Phone" />
              </div>
              <div className="mt-4">
                <Field
                  name="topic"
                  label="Topic"
                  placeholder="Recompete · Teaming · Sole Source · Other"
                />
              </div>
              <div className="mt-4">
                <label className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#f5f4ef] outline-none transition-colors placeholder:text-[#a8a39a]/60 focus:border-[#d4ae5b]/50 focus:bg-white/[0.05]"
                />
              </div>
              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#a3132a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Send Inquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2">
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

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-[#d4ae5b]/30 hover:bg-white/[0.04]">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4ae5b]/30 bg-[#d4ae5b]/10 text-[#f0cc7a]">
        {icon}
      </span>
      <div>
        <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-[#f5f4ef]">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
}
