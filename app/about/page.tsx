import type { Metadata } from "next";
import {
  AboutStory,
  FounderStatement,
  Timeline,
  FoundingPrinciples,
  AboutCTA,
} from "@/components/about-story";
import { QuickFacts } from "@/components/quick-facts";
import { CertsBand } from "@/components/certs-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2010 by Intelligence Community and Department of Defense professionals. Headquartered in McLean, Virginia.",
};

export default function AboutPage() {
  return (
    <>
      <AboutStory />
      <FounderStatement />
      <Timeline />
      <FoundingPrinciples />
      <QuickFacts />
      <CertsBand />
      <AboutCTA />
    </>
  );
}
