import type { Metadata } from "next";
import { About } from "@/components/about";
import { DoctrineBand } from "@/components/doctrine-band";
import { WhyVirtus } from "@/components/why-virtus";
import { QuickFacts } from "@/components/quick-facts";
import { CertsBand } from "@/components/certs-band";
import { PastPerformance } from "@/components/past-performance";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2010 by Intelligence Community and Department of Defense professionals. Headquartered in McLean, Virginia.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <QuickFacts />
      <DoctrineBand />
      <WhyVirtus />
      <PastPerformance />
      <CertsBand />
    </div>
  );
}
