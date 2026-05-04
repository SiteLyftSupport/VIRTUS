import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { CAREERS, getCareer } from "@/lib/careers";
import { SITE } from "@/lib/site";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function generateStaticParams() {
  return CAREERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) return { title: "Career not found" };
  return {
    title: career.title,
    description: career.summary,
  };
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();

  const idx = CAREERS.findIndex((c) => c.slug === slug);
  const next = CAREERS[(idx + 1) % CAREERS.length];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5 bg-[#07080b]">
        <div className="absolute inset-0">
          <Image
            src={career.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/60 via-[#07080b]/85 to-[#07080b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]/60" />
        </div>
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="radial-spotlight pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 pt-36 pb-20 lg:px-10 lg:pt-44 lg:pb-28">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#a8a39a] transition-colors hover:text-[#f0cc7a]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Careers
          </Link>

          <div className="mt-8">
            <SectionEyebrow
              number={`Job · ${String(idx + 1).padStart(2, "0")}`}
              label="Open Position"
            />
            <h1 className="font-[var(--font-display)] text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              {career.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#a8a39a] sm:text-lg">
              {career.summary}
            </p>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3">
              <Meta label="Location" value={career.location} icon={<MapPin className="h-4 w-4" />} />
              <Meta label="Clearance" value={career.clearance} icon={<ShieldCheck className="h-4 w-4" />} />
              <Meta label="Employer" value="Virtus TS · SDVOSB" />
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE.generalEmail}?subject=Application: ${encodeURIComponent(
                  career.title,
                )}`}
                className="group inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
              >
                Apply for this role
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] backdrop-blur-md transition-all hover:bg-white/10"
              >
                Browse all roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-[#07080b] py-24 lg:py-32">
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  On this page
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="#required" className="text-[#a8a39a] hover:text-[#f5f4ef]">
                      Required experience
                    </a>
                  </li>
                  {career.technologies && career.technologies.length > 0 && (
                    <li>
                      <a href="#technologies" className="text-[#a8a39a] hover:text-[#f5f4ef]">
                        Technologies
                      </a>
                    </li>
                  )}
                  {career.desired && career.desired.length > 0 && (
                    <li>
                      <a href="#desired" className="text-[#a8a39a] hover:text-[#f5f4ef]">
                        Highly desired
                      </a>
                    </li>
                  )}
                  <li>
                    <a href="#apply" className="text-[#a8a39a] hover:text-[#f5f4ef]">
                      Apply
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <article className="lg:col-span-8">
              <Section id="required" title="Required experience" eyebrow="01" icon={<CheckCircle2 className="h-4 w-4" />}>
                <ul className="space-y-3">
                  {career.required.map((r, i) => (
                    <Bullet key={i} text={r} />
                  ))}
                </ul>
              </Section>

              {career.technologies && career.technologies.length > 0 && (
                <Section
                  id="technologies"
                  title="Technologies"
                  eyebrow="02"
                  icon={<Sparkles className="h-4 w-4" />}
                >
                  <p className="mb-5 text-sm leading-relaxed text-[#a8a39a]">
                    The contractor team shall have experience with the following
                    technologies, including but not limited to:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {career.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-[var(--font-mono)] text-[11px] tracking-wider text-[#f5f4ef]/85"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {career.desired && career.desired.length > 0 && (
                <Section
                  id="desired"
                  title="Highly desired"
                  eyebrow={career.technologies ? "03" : "02"}
                  icon={<Sparkles className="h-4 w-4" />}
                >
                  <p className="mb-5 text-sm leading-relaxed text-[#a8a39a]">
                    The following experience is highly desired, though not
                    required.
                  </p>
                  <ul className="space-y-3">
                    {career.desired.map((d, i) => (
                      <Bullet key={i} text={d} />
                    ))}
                  </ul>
                </Section>
              )}

              {/* Apply */}
              <div
                id="apply"
                className="mt-16 overflow-hidden rounded-3xl border border-[#d4ae5b]/30 bg-[#d4ae5b]/[0.04] p-8 sm:p-10"
              >
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                  Apply
                </div>
                <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-[#f5f4ef] sm:text-4xl">
                  Ready to step on?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#a8a39a]">
                  Send a current résumé and a brief note on availability and clearance status.
                  Hiring decisions at Virtus are made by senior leadership — not a portal.
                </p>
                <a
                  href={`mailto:${SITE.generalEmail}?subject=Application: ${encodeURIComponent(
                    career.title,
                  )}`}
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#a3132a] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f5f4ef] shadow-[0_0_0_1px_rgba(212,174,91,0.25),0_20px_60px_-20px_rgba(163,19,42,0.6)] transition-all hover:bg-[#e21a3a]"
                >
                  Email {SITE.generalEmail}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Next role */}
              <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
                <div>
                  <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#d4ae5b]">
                    Next role
                  </div>
                  <Link
                    href={`/careers/${next.slug}`}
                    className="mt-2 inline-block font-[var(--font-display)] text-xl font-semibold text-[#f5f4ef] transition-colors hover:text-[#f0cc7a]"
                  >
                    {next.title} →
                  </Link>
                </div>
                <Link
                  href="/careers"
                  className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a8a39a] hover:text-[#f0cc7a]"
                >
                  All careers
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  id,
  title,
  eyebrow,
  icon,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <div className="mb-6 flex items-center gap-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b]">
        <span>{eyebrow}</span>
        <span className="h-px w-10 bg-[#d4ae5b]/40" />
        <span>{title}</span>
      </div>
      <h2 className="mb-6 flex items-center gap-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-[#f5f4ef]">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4ae5b]/30 bg-[#d4ae5b]/5 text-[#f0cc7a]">
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm leading-relaxed text-[#f5f4ef]/85">
      <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-[#d4ae5b]" />
      <span>{text}</span>
    </li>
  );
}

function Meta({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-[#07080b]/70 px-5 py-4">
      <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#a8a39a]">
        {label}
      </dt>
      <dd className="mt-1.5 flex items-center gap-2 font-[var(--font-display)] text-base font-semibold text-[#f5f4ef]">
        {icon && <span className="text-[#d4ae5b]">{icon}</span>}
        {value}
      </dd>
    </div>
  );
}
