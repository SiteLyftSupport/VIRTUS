import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { CertsBand } from "@/components/certs-band";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Thirteen technical service areas — applications, cyber, data, networks, software, space systems, SETA, and more — delivered to the federal customer.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrowNumber="02"
        eyebrowLabel="Services"
        title={
          <>
            Thirteen disciplines.
            <span className="block text-[#d4ae5b]">One operating standard.</span>
          </>
        }
        subtitle="Virtus delivers across the full federal technology stack — from applications and cyber through space systems and SETA — with the same senior-grade staffing model we apply to every customer."
        image={media.capabilities.engineering}
      />

      <section className="relative bg-[#07080b] py-24 lg:py-32">
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef] sm:text-3xl">
              Tap any service to expand the capability brief.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              Discuss a requirement
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <ServicesGrid />
        </div>
      </section>

      <CertsBand />
    </>
  );
}
