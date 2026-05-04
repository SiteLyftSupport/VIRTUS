import type { Metadata } from "next";
import { TeamCarousel } from "@/components/team-carousel";
import { CertsBand } from "@/components/certs-band";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The senior practitioners who lead Virtus Technology Solutions engagements.",
};

export default function TeamPage() {
  return (
    <div className="pt-16">
      <TeamCarousel />
      <CertsBand />
    </div>
  );
}
