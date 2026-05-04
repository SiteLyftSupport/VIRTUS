import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { VirtusWordmark } from "./brand";

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
              <Badge>SAM.gov Registered</Badge>
              <Badge>Cleared Workforce</Badge>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol
              title="Capabilities"
              items={[
                ["Systems Engineering & Integration", "#cap-sei"],
                ["Program Management", "#cap-pm"],
                ["Subject Matter Expertise", "#cap-sme"],
                ["Information Systems", "#cap-is"],
                ["Mission Operations", "#cap-ops"],
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                ["About Virtus", "#about"],
                ["Our Team", "#team"],
                ["Past Performance", "#past-performance"],
                ["Careers", "#careers"],
                ["Contact", "#contact"],
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
                    Northern Virginia
                    <br />
                    Washington, D.C. Metro
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#d4ae5b]" />
                  <a href="tel:+17038688653" className="hover:text-[#f5f4ef]">
                    (703) 868-8653
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#d4ae5b]" />
                  <a
                    href="mailto:info@virtusts.com"
                    className="hover:text-[#f5f4ef]"
                  >
                    info@virtusts.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[#a8a39a] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] tracking-wider">
            <span>© {new Date().getFullYear()} VIRTUS TECHNOLOGY SOLUTIONS, INC.</span>
            <span className="text-[#d4ae5b]/70">VIRTUS · VINCIT · VERITAS</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#f5f4ef]">Privacy</Link>
            <Link href="#" className="hover:text-[#f5f4ef]">Terms</Link>
            <Link href="#" className="hover:text-[#f5f4ef]">Accessibility</Link>
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
            <a href={href} className="transition-colors hover:text-[#f5f4ef]">
              {label}
            </a>
          </li>
        ))}
      </ul>
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
