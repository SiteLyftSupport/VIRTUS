"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { ServiceIcon } from "./service-icon";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => {
        const isOpen = open === s.slug;
        return (
          <motion.li
            key={s.slug}
            id={s.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease, delay: (i % 6) * 0.04 }}
            className={`group relative overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors ${
              isOpen
                ? "border-[#d4ae5b]/40 bg-[#d4ae5b]/[0.04]"
                : "border-white/10 hover:border-[#d4ae5b]/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.slug)}
              className="flex w-full items-start gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
                <ServiceIcon name={s.iconName} className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-[var(--font-display)] text-base font-semibold tracking-tight text-[#f5f4ef]">
                  {s.name}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-[#a8a39a]">
                  {s.short}
                </span>
              </span>
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#a8a39a] transition-colors group-hover:border-[#d4ae5b]/40 group-hover:text-[#f0cc7a]">
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden border-t border-[#d4ae5b]/15 bg-[#07080b]/60 px-6"
                >
                  <p className="py-5 text-sm leading-relaxed text-[#f5f4ef]/85">
                    {s.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
