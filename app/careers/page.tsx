import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CareersGrid } from "@/components/careers-grid";
import { CertsBand } from "@/components/certs-band";
import { media } from "@/lib/media";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Virtus Technology Solutions across software engineering, systems engineering, and database administration. All positions require an active FS Poly clearance.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrowNumber="04"
        eyebrowLabel="Careers"
        title={
          <>
            Cleared, senior, and
            <span className="block text-[#d4ae5b]">on the mission.</span>
          </>
        }
        subtitle="Every Virtus role is a senior-grade billet with the customer. We hire engineers and operators who can step in on day one — and we put them on programs that matter."
        image={media.corridor}
      />

      <section className="relative bg-[#07080b] py-24 lg:py-32">
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[#f5f4ef] sm:text-3xl">
                Open positions
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#a8a39a]">
                All currently open roles are based in Northern Virginia and
                require an active FS Poly clearance.
              </p>
            </div>
            <Link
              href={`mailto:${SITE.generalEmail}?subject=Careers Inquiry`}
              className="group inline-flex items-center gap-2 rounded-full border border-[#d4ae5b]/40 bg-[#d4ae5b]/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0cc7a] transition-all hover:bg-[#d4ae5b]/15"
            >
              <Mail className="h-3.5 w-3.5" />
              Submit a résumé
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <CareersGrid />
        </div>
      </section>

      <CertsBand />
    </>
  );
}
