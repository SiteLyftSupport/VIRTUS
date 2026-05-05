import { clsx } from "clsx";

type Props = {
  className?: string;
};

/**
 * Brand wordmark — combined helmet + "Virtus Technology Solutions"
 * sourced from the official logo SVG. The wrapper's height (passed via
 * className) controls the rendered size; the inner img is h-full w-auto.
 */
export function VirtusWordmark({ className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center",
        // Default size — consumers pass their own height class to override.
        className ?? "h-10 sm:h-11",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Virtus Technology Solutions"
        className="h-full w-auto"
        width={432}
        height={144}
      />
    </span>
  );
}
