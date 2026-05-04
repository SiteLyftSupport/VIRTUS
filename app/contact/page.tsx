import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { CertsBand } from "@/components/certs-band";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engage Virtus Technology Solutions about a recompete, teaming arrangement, sole-source action, or new requirement.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
      <CertsBand />
    </div>
  );
}
