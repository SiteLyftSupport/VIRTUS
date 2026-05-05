type Props = {
  number: string;
  label: string;
  align?: "left" | "center";
};

export function SectionEyebrow({ number, label, align = "left" }: Props) {
  return (
    <div
      className={`mb-6 flex w-fit items-center gap-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-[#d4ae5b] ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      <span className="text-[#d4ae5b]/70">{number}</span>
      <span className="h-px w-10 bg-[#d4ae5b]/40" />
      <span>{label}</span>
    </div>
  );
}
