"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { SectionEyebrow } from "./section-eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrowNumber: string;
  eyebrowLabel: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrowNumber,
  eyebrowLabel,
  title,
  subtitle,
  image,
  imageAlt = "",
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5 bg-[#07080b]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/60 via-[#07080b]/85 to-[#07080b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]/60" />
        <div className="bg-grid absolute inset-0 opacity-25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
          <h1 className="font-[var(--font-tactical)] text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-[#a8a39a] sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
