import { media } from "./media";

export type Member = {
  name: string;
  role: string;
  bio: string;
  pedigree: string[];
  image: string;
  badge?: string;
};

// Lewis Rhodes is the documented Owner. Other members are placeholder
// senior bios populated to communicate the depth of bench while real
// names + photos are finalised by the customer.
export const TEAM: Member[] = [
  {
    name: "Lewis Rhodes",
    role: "Founder & Owner",
    bio: "U.S. Navy veteran and Intelligence Community professional. Founded Virtus in 2010 after 25+ years across DoD and IC programs, with a focus on ISR and communications systems engineering.",
    pedigree: ["U.S. Navy", "DoD", "IC", "ISR Programs"],
    image: media.team[0],
    badge: "Owner",
  },
  {
    name: "Maya Howard",
    role: "Vice President, Engineering",
    bio: "Two-decade systems engineer leading complex integration efforts across multi-INT collection, dissemination, and cloud-edge architectures. PMP, ISC2 CISSP.",
    pedigree: ["DoD SETA", "Multi-INT", "Cloud Architecture"],
    image: media.team[1],
  },
  {
    name: "Arthur Whitlock",
    role: "Director, Mission Operations",
    bio: "Career intelligence officer with deep experience leading 24/7 watch-floor operations and forward-deployed analyst teams across two combatant commands.",
    pedigree: ["Career Intelligence Officer", "Combatant Commands"],
    image: media.team[2],
  },
  {
    name: "Camila Soto",
    role: "Director, Program Management",
    bio: "PMP-certified program lead with EVM-graded experience on $100M+ federal acquisition programs. Specializes in DoD 5000 milestone navigation and stakeholder alignment.",
    pedigree: ["PMP", "EVM", "DoD 5000"],
    image: media.team[3],
  },
  {
    name: "Rohan Mehta",
    role: "Chief Technologist",
    bio: "Former intelligence agency tech lead. Architects secure information systems across classified networks, with a focus on zero-trust, identity, and cross-domain solutions.",
    pedigree: ["IC Technical Leadership", "Zero Trust", "CDS"],
    image: media.team[4],
  },
  {
    name: "Daniel Reeves",
    role: "Senior Subject Matter Expert",
    bio: "Decorated Marine Corps veteran. Subject matter expert in tactical communications, signal exploitation, and operational planning for forward-deployed forces.",
    pedigree: ["U.S. Marine Corps", "Tactical Comms", "SIGINT"],
    image: media.team[5],
  },
  {
    name: "Allison Carver",
    role: "Director, Contracts & Compliance",
    bio: "Former federal contracting officer. Stewards Virtus' SAM, SDVOSB, and CMMC compliance posture, and leads our acquisition strategy support practice.",
    pedigree: ["Federal Contracting", "CMMC", "SAM/SDVOSB"],
    image: media.team[6],
  },
];
