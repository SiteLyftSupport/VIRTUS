import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { DoctrineBand } from "@/components/doctrine-band";
import { Capabilities } from "@/components/capabilities";
import { Team } from "@/components/team";
import { WhyVirtus } from "@/components/why-virtus";
import { PastPerformance } from "@/components/past-performance";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DoctrineBand />
      <Capabilities />
      <Team />
      <WhyVirtus />
      <PastPerformance />
      <Contact />
    </>
  );
}
