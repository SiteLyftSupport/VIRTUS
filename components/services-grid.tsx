"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { SERVICES, type Service } from "@/lib/services";
import { ServiceIcon } from "./service-icon";
import { Modal } from "./modal";
import { Magnetic } from "./magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesGrid() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.li
            key={s.slug}
            id={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 3) * 0.07 }}
            className="h-full"
          >
            <Magnetic strength={10} tilt={3} className="h-full">
            <button
              type="button"
              onClick={() => setActive(s)}
              aria-label={`${s.name} — open detail`}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-colors hover:border-[#d4ae5b]/40 hover:bg-[#d4ae5b]/[0.04]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#07080b]/70 text-[#f0cc7a] backdrop-blur-md">
                  <ServiceIcon name={s.iconName} className="h-5 w-5" />
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#07080b]/70 px-2.5 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a] backdrop-blur-md">
                  S·{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-[var(--font-tactical)] text-lg font-semibold leading-snug tracking-tight text-[#f5f4ef]">
                  {s.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[#a8a39a]">
                  {s.short}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 self-start rounded-full border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-colors group-hover:bg-[#d4ae5b]/15">
                  <Plus className="h-3 w-3" />
                  Capability brief
                </span>
              </div>
            </button>
            </Magnetic>
          </motion.li>
        ))}
      </ul>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        labelledBy="service-modal-title"
      >
        {active && <ServiceModalContent service={active} />}
      </Modal>
    </>
  );
}

function ServiceModalContent({ service }: { service: Service }) {
  return (
    <div className="grid h-full md:grid-cols-2">
      {/* Image side */}
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-[min(72vh,600px)]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent md:bg-gradient-to-r" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-3 rounded-full border border-[#d4ae5b]/30 bg-[#07080b]/70 px-3 py-1.5 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#f0cc7a] backdrop-blur-md">
          <ServiceIcon name={service.iconName} className="h-3.5 w-3.5" />
          Service Brief
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 md:h-[min(72vh,600px)] md:overflow-hidden">
        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
            Virtus · Service
          </div>
          <h2
            id="service-modal-title"
            className="mt-3 font-[var(--font-tactical)] text-3xl font-semibold leading-tight tracking-tight text-[#f5f4ef] sm:text-4xl"
          >
            {service.name}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#f5f4ef]/85">
            {service.short}
          </p>
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#d4ae5b]/30 to-transparent" />
          <p className="text-sm leading-relaxed text-[#a8a39a]">
            {service.detail}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_40px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
          >
            Discuss requirement
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/services"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8a39a] hover:text-[#f0cc7a]"
          >
            All services →
          </Link>
        </div>
      </div>
    </div>
  );
}
