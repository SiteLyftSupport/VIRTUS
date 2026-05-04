export type Service = {
  slug: string;
  name: string;
  short: string;
  detail: string;
  iconName:
    | "AppWindow"
    | "LifeBuoy"
    | "ShieldCheck"
    | "BarChart3"
    | "Database"
    | "Network"
    | "ClipboardList"
    | "TriangleAlert"
    | "Code2"
    | "Satellite"
    | "Cog"
    | "Globe"
    | "Radio";
};

export const SERVICES: Service[] = [
  {
    slug: "applications-development",
    name: "Applications Development",
    iconName: "AppWindow",
    short:
      "Mission-grade applications across web, mobile, and desktop, engineered for classified and contested environments.",
    detail:
      "Full-lifecycle delivery of custom applications that are accredited for high-side networks and resilient under operational load. We pair experienced full-stack engineers with mission analysts to ensure every feature lands on workflow, not against it.",
  },
  {
    slug: "customer-services-help-desk",
    name: "Customer Services & Help Desk Support",
    iconName: "LifeBuoy",
    short:
      "Tier 1–3 user-support operations for federal customers running multi-classification environments at scale.",
    detail:
      "Cleared, ITIL-aligned help-desk teams capable of supporting 24×7 shift operations, classified ticketing systems, and the high-touch escalation paths that intelligence and DoD users require.",
  },
  {
    slug: "cyber-security",
    name: "Cyber Security Engineering, Analysis & Forensics",
    iconName: "ShieldCheck",
    short:
      "Protect, detect, respond. Hardened cyber engineering, threat hunting, and digital forensics across the federal enterprise.",
    detail:
      "RMF accreditation support, SOC and threat-hunt operations, incident response, and digital forensics. We bring engineers who have run the toolchain and analysts who have closed the case.",
  },
  {
    slug: "data-architecting",
    name: "Data Architecting, Visualization & Analytics",
    iconName: "BarChart3",
    short:
      "From schema to story: data architectures, dashboards, and analytics that put answers in the customer's hands.",
    detail:
      "Cloud-native data lakes, ETL/ELT pipelines, semantic layers, and the visualization layer on top. We optimize for analyst tempo, not vendor demos.",
  },
  {
    slug: "database-development",
    name: "Database Development & Administration",
    iconName: "Database",
    short:
      "Performance-tuned relational and NoSQL data tiers, with the operational discipline classified workloads demand.",
    detail:
      "Schema and query design, replication, backup/restore strategy, and ongoing administration across Oracle, PostgreSQL, AWS RDS, MongoDB, and beyond.",
  },
  {
    slug: "network-engineering",
    name: "Network Engineering & Analysis",
    iconName: "Network",
    short:
      "Resilient, high-assurance network architectures for fixed-site and forward-deployed customers.",
    detail:
      "Routing/switching, segmentation, encryption-overlay design, and the operational analytics that prove the network is doing its job under stress.",
  },
  {
    slug: "program-project-management",
    name: "Program & Project Management",
    iconName: "ClipboardList",
    short:
      "PMP-led program execution against DoD 5000 and IC milestones — earned-value disciplined, never theatre.",
    detail:
      "Acquisition strategy support, EVM-graded reporting, risk and stakeholder management, and the post-mortem culture that compounds delivery quality.",
  },
  {
    slug: "risk-management",
    name: "Risk Management & Mitigation",
    iconName: "TriangleAlert",
    short:
      "Defensible risk posture across cyber, supply chain, and program execution — for customers who can't afford surprise.",
    detail:
      "Quantitative and qualitative risk assessment, mitigation roadmaps, third-party / supply-chain risk reviews, and the operating cadence that keeps the picture current.",
  },
  {
    slug: "software-engineering",
    name: "Software Engineering, Development & Testing",
    iconName: "Code2",
    short:
      "End-to-end software engineering — from architecture through automated test — under federal accreditation regimes.",
    detail:
      "Senior engineers across Java, Python, JavaScript/TypeScript, modern web frameworks, and CI/CD. We write tests, we own production, we keep the on-call.",
  },
  {
    slug: "space-systems",
    name: "Space Systems Engineering & Operations",
    iconName: "Satellite",
    short:
      "Engineering and operations support across the space enterprise — ground stations, ISR pipelines, and constellation tasking.",
    detail:
      "Mission planning, telemetry processing, ground-segment systems engineering, and the operations expertise that keeps space-based capability productive for the warfighter.",
  },
  {
    slug: "seta",
    name: "Systems Engineering & Technical Assistance (SETA)",
    iconName: "Cog",
    short:
      "Independent SETA support to government program offices: requirements, architecture, integration, test, and trade-space analysis.",
    detail:
      "Trusted, conflict-of-interest-aware technical advisory embedded in the program office. We give the government an honest read of the program and the path forward.",
  },
  {
    slug: "web-development",
    name: "Web Development & Content Administration",
    iconName: "Globe",
    short:
      "Modern web platforms and the content-operations discipline that keeps them current after launch.",
    detail:
      "Headless CMS architectures, accessible front ends, secure publication workflows, and content-administration training so the customer stays in control.",
  },
  {
    slug: "wireless-communications",
    name: "Wireless Communications",
    iconName: "Radio",
    short:
      "Tactical and strategic wireless engineering — from spectrum analysis to deployable communications kit.",
    detail:
      "RF and SATCOM engineering, link budget and spectrum work, and the integration / sustainment skills required to keep links up in contested environments.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
