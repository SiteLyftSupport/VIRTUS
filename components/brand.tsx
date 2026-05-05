import { clsx } from "clsx";

type Props = {
  className?: string;
};

/**
 * Brand wordmark — combined helmet + "Virtus Technology Solutions"
 * sourced from the official logo SVG. Used in the header and footer.
 */
export function VirtusWordmark({ className }: Props) {
  return (
    <span className={clsx("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Virtus Technology Solutions"
        className="h-10 w-auto sm:h-11"
        width={432}
        height={144}
      />
    </span>
  );
}
