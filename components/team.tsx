"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12V20.5h-4v-4.92c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V20.5h-4v-11Z" />
    </svg>
  );
}
import { media } from "@/lib/media";
import { SectionEyebrow } from "./section-eyebrow";

type Member = {
  name: string;
  role: string;
  bio: string;
  pedigree: string[];
  image: string;
  badge?: string;
};

// Names other than the documented Owner are placeholders — populated to
// communicate the breadth of the bench while the customer finalises bios.
const TEAM: Member[] = [
  {
    name: "Lewis Rhodes",
    role: "Founder & Owner",
    bio: "U.S. Navy veteran and Intelligence Community professional. Founded Virtus in 2010 after 25+ years across DoD and IC programs, with a focus on ISR and communications systems engineering.",
    pedigree: ["U.S. Navy", "DoD", "IC", "ISR Programs"],
    image: media.team[0],
    badge: "Owner",
  },
  {
    name: "Maya Howard",
    role: "Vice President, Engineering",
    bio: "Two-decade systems engineer leading complex integration efforts across multi-INT collection, dissemination, and cloud-edge architectures. PMP, ISC2 CISSP.",
    pedigree: ["DoD SETA", "Multi-INT", "Cloud Architecture"],
    image: media.team[1],
  },
  {
    name: "Arthur Whitlock",
    role: "Director, Mission Operations",
    bio: "Career intelligence officer with deep experience leading 24/7 watch-floor operations and forward-deployed analyst teams across two combatant commands.",
    pedigree: ["Career Intelligence Officer", "Combatant Commands"],
    image: media.team[2],
  },
  {
    name: "Camila Soto",
    role: "Director, Program Management",
    bio: "PMP-certified program lead with EVM-graded experience on $100M+ federal acquisition programs. Specializes in DoD 5000 milestone navigation and stakeholder alignment.",
    pedigree: ["PMP", "EVM", "DoD 5000"],
    image: media.team[3],
  },
  {
    name: "Rohan Mehta",
    role: "Chief Technologist",
    bio: "Former intelligence agency tech lead. Architects secure information systems across classified networks, with a focus on zero-trust, identity, and cross-domain solutions.",
    pedigree: ["IC Technical Leadership", "Zero Trust", "CDS"],
    image: media.team[4],
  },
  {
    name: "Daniel Reeves",
    role: "Senior Subject Matter Expert",
    bio: "Decorated Marine Corps veteran. Subject matter expert in tactical communications, signal exploitation, and operational planning for forward-deployed forces.",
    pedigree: ["U.S. Marine Corps", "Tactical Comms", "SIGINT"],
    image: media.team[5],
  },
  {
    name: "Allison Carver",
    role: "Director, Contracts & Compliance",
    bio: "Former federal contracting officer. Stewards Virtus' SAM, SDVOSB, and CMMC compliance posture, and leads our acquisition strategy support practice.",
    pedigree: ["Federal Contracting", "CMMC", "SAM/SDVOSB"],
    image: media.team[6],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/5 bg-[#07080b] py-28 lg:py-40"
    >
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <SectionEyebrow number="03" label="The Team" />
            <h2 className="font-[var(--font-tactical)] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[52px]">
              The people we send
              <span className="block text-[#d4ae5b]">define the work.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-pretty text-base leading-relaxed text-[#a8a39a]">
              Virtus is a small business by design. Every engagement is led by a
              senior practitioner who has done the job in uniform, in an agency, or
              both. We don't pad teams to meet a price point. We staff the people
              the customer needs and we send them on day one.
            </p>
          </div>
        </motion.div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#d4ae5b]/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/30 to-transparent" />
                {m.badge && (
                  <div className="absolute left-4 top-4 rounded-full border border-[#d4ae5b]/40 bg-[#07080b]/70 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#f0cc7a] backdrop-blur">
                    {m.badge}
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  {m.role}
                </div>
                <div className="mt-1 font-[var(--font-tactical)] text-2xl font-semibold tracking-tight text-[#f5f4ef]">
                  {m.name}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#a8a39a] line-clamp-3">
                  {m.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.pedigree.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[#a8a39a]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#contact"
                    aria-label={`Email ${m.name}`}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-[#a8a39a] transition-colors hover:border-[#d4ae5b]/30 hover:text-[#f0cc7a]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`${m.name} on LinkedIn`}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-[#a8a39a] transition-colors hover:border-[#d4ae5b]/30 hover:text-[#f0cc7a]"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
