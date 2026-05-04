import { Hero } from "@/components/hero";
import { HomeAboutTeaser } from "@/components/home-about-teaser";
import { DoctrineBand } from "@/components/doctrine-band";
import { HomeServicesTeaser } from "@/components/home-services-teaser";
import { HomeTeamTeaser } from "@/components/home-team-teaser";
import { HomeCareersTeaser } from "@/components/home-careers-teaser";
import { QuickFacts } from "@/components/quick-facts";
import { CertsBand } from "@/components/certs-band";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutTeaser />
      <DoctrineBand />
      <HomeServicesTeaser />
      <HomeTeamTeaser />
      <HomeCareersTeaser />
      <QuickFacts />
      <CertsBand />
      <Contact />
    </>
  );
}
