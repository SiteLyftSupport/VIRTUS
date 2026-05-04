import type { Metadata } from "next";
import { Team } from "@/components/team";
import { CertsBand } from "@/components/certs-band";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The senior practitioners who lead Virtus Technology Solutions engagements.",
};

export default function TeamPage() {
  return (
    <div className="pt-24">
      <Team />
      <CertsBand />
    </div>
  );
}
