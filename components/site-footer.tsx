import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { VirtusWordmark } from "./brand";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-[#07080b]">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <VirtusWordmark />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#a8a39a]">
              A Service-Disabled Veteran-Owned Small Business delivering
              mission-critical engineering, integration, and operations support
              to the U.S. Department of Defense and the Intelligence Community.
            </p>
            <div className="mt-8 inline-flex flex-wrap items-center gap-3">
              <Badge>SDVOSB · CVE-Certified</Badge>
              <Badge>CMMC 2.0 Certified</Badge>
              <Badge>SAM.gov Registered</Badge>
            </div>
            <div className="mt-6 grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <FooterFact k="DUNS" v={SITE.duns} />
              <FooterFact k="CAGE" v={SITE.cage} />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol
              title="Services"
              items={SERVICES.slice(0, 6).map(
                (s) => [s.name, `/services#${s.slug}`] as [string, string],
              )}
            />
            <FooterCol
              title="Company"
              items={[
                ["About", "/about"],
                ["Our Team", "/team"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ]}
            />
            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4ae5b]">
                Headquarters
              </h4>
              <ul className="space-y-3 text-sm text-[#a8a39a]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#d4ae5b]" />
                  <span>
                    {SITE.hq}
                    <br />
                    {SITE.hqRegion}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#d4ae5b]" />
                  <a href={`tel:${SITE.ownerPhoneTel}`} className="hover:text-[#f5f4ef]">
                    {SITE.ownerPhone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#d4ae5b]" />
                  <a
                    href={`mailto:${SITE.generalEmail}`}
                    className="hover:text-[#f5f4ef]"
                  >
                    {SITE.generalEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-xs text-[#a8a39a]">
          <span className="font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#d4ae5b]">
            EOE Statement —
          </span>{" "}
          Virtus TS is an Equal Opportunity Employer. We are committed to a workplace free of
          discrimination on the basis of race, color, religion, sex, sexual orientation, gender
          identity, national origin, age, disability, protected veteran status, or any other
          characteristic protected by law.
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[#a8a39a] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] tracking-wider">
            <span>© {new Date().getFullYear()} VIRTUS TECHNOLOGY SOLUTIONS, INC.</span>
            <span className="text-[#d4ae5b]/70">{SITE.motto.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE.generalEmail}?subject=Privacy Inquiry`}
              className="hover:text-[#f5f4ef]"
            >
              Privacy
            </a>
            <a
              href={`mailto:${SITE.generalEmail}?subject=Terms Inquiry`}
              className="hover:text-[#f5f4ef]"
            >
              Terms
            </a>
            <a
              href={`mailto:${SITE.generalEmail}?subject=Accessibility Inquiry`}
              className="hover:text-[#f5f4ef]"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4ae5b]">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-[#a8a39a]">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="transition-colors hover:text-[#f5f4ef]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterFact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-[#07080b]/70 px-4 py-3">
      <div className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {k}
      </div>
      <div className="mt-0.5 font-[var(--font-mono)] text-[12px] tracking-wider text-[#f5f4ef]">
        {v}
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#d4ae5b]">
      {children}
    </span>
  );
}
