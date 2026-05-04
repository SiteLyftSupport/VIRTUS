export type Service = {
  slug: string;
  name: string;
  short: string;
  detail: string;
  image: string;
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

const BASE = "https://d8j0ntlcm91z4.cloudfront.net/user_3DGemBMxT4FfcPiEmry1eOUH5l4";

export const SERVICES: Service[] = [
  {
    slug: "applications-development",
    name: "Applications Development",
    iconName: "AppWindow",
    image: `${BASE}/hf_20260504_191022_b6d6ab8a-6b4d-4f72-bff1-da905f658f8d.png`,
    short:
      "Mission-grade applications across web, mobile, and desktop, engineered for classified and contested environments.",
    detail:
      "Full-lifecycle delivery of custom applications that are accredited for high-side networks and resilient under operational load. We pair experienced full-stack engineers with mission analysts to ensure every feature lands on workflow, not against it.",
  },
  {
    slug: "customer-services-help-desk",
    name: "Customer Services & Help Desk Support",
    iconName: "LifeBuoy",
    image: `${BASE}/hf_20260504_191030_52f18abf-1aa1-41d3-af02-247f9c71207c.png`,
    short:
      "Tier 1–3 user-support operations for federal customers running multi-classification environments at scale.",
    detail:
      "Cleared, ITIL-aligned help-desk teams capable of supporting 24×7 shift operations, classified ticketing systems, and the high-touch escalation paths that intelligence and DoD users require.",
  },
  {
    slug: "cyber-security",
    name: "Cyber Security Engineering, Analysis & Forensics",
    iconName: "ShieldCheck",
    image: `${BASE}/hf_20260504_191038_b950e459-0a32-4b64-bcb1-a4b7c794d1fe.png`,
    short:
      "Protect, detect, respond. Hardened cyber engineering, threat hunting, and digital forensics across the federal enterprise.",
    detail:
      "RMF accreditation support, SOC and threat-hunt operations, incident response, and digital forensics. We bring engineers who have run the toolchain and analysts who have closed the case.",
  },
  {
    slug: "data-architecting",
    name: "Data Architecting, Visualization & Analytics",
    iconName: "BarChart3",
    image: `${BASE}/hf_20260504_191045_dd97fa21-9a34-499f-9df7-958d6c5d7a57.png`,
    short:
      "From schema to story: data architectures, dashboards, and analytics that put answers in the customer's hands.",
    detail:
      "Cloud-native data lakes, ETL/ELT pipelines, semantic layers, and the visualization layer on top. We optimize for analyst tempo, not vendor demos.",
  },
  {
    slug: "database-development",
    name: "Database Development & Administration",
    iconName: "Database",
    image: `${BASE}/hf_20260504_191101_714e9777-ce9f-4e44-99b7-4e0e85b278e9.png`,
    short:
      "Performance-tuned relational and NoSQL data tiers, with the operational discipline classified workloads demand.",
    detail:
      "Schema and query design, replication, backup/restore strategy, and ongoing administration across Oracle, PostgreSQL, AWS RDS, MongoDB, and beyond.",
  },
  {
    slug: "network-engineering",
    name: "Network Engineering & Analysis",
    iconName: "Network",
    image: `${BASE}/hf_20260504_191108_54561260-7150-4d9e-919a-b8e340b9d94d.png`,
    short:
      "Resilient, high-assurance network architectures for fixed-site and forward-deployed customers.",
    detail:
      "Routing/switching, segmentation, encryption-overlay design, and the operational analytics that prove the network is doing its job under stress.",
  },
  {
    slug: "program-project-management",
    name: "Program & Project Management",
    iconName: "ClipboardList",
    image: `${BASE}/hf_20260504_175510_cb84322c-b405-4031-ac61-2bfb80f07d19.png`,
    short:
      "PMP-led program execution against DoD 5000 and IC milestones — earned-value disciplined, never theatre.",
    detail:
      "Acquisition strategy support, EVM-graded reporting, risk and stakeholder management, and the post-mortem culture that compounds delivery quality.",
  },
  {
    slug: "risk-management",
    name: "Risk Management & Mitigation",
    iconName: "TriangleAlert",
    image: `${BASE}/hf_20260504_191115_986ef8be-d3d2-4943-9c4c-bfe9ba92e16a.png`,
    short:
      "Defensible risk posture across cyber, supply chain, and program execution — for customers who can't afford surprise.",
    detail:
      "Quantitative and qualitative risk assessment, mitigation roadmaps, third-party / supply-chain risk reviews, and the operating cadence that keeps the picture current.",
  },
  {
    slug: "software-engineering",
    name: "Software Engineering, Development & Testing",
    iconName: "Code2",
    image: `${BASE}/hf_20260504_191123_eef432d9-e5a8-417d-9bf3-c149131c73eb.png`,
    short:
      "End-to-end software engineering — from architecture through automated test — under federal accreditation regimes.",
    detail:
      "Senior engineers across Java, Python, JavaScript/TypeScript, modern web frameworks, and CI/CD. We write tests, we own production, we keep the on-call.",
  },
  {
    slug: "space-systems",
    name: "Space Systems Engineering & Operations",
    iconName: "Satellite",
    image: `${BASE}/hf_20260504_191158_3e4f42a6-434d-49c5-b8b3-d3c17f8abd55.png`,
    short:
      "Engineering and operations support across the space enterprise — ground stations, ISR pipelines, and constellation tasking.",
    detail:
      "Mission planning, telemetry processing, ground-segment systems engineering, and the operations expertise that keeps space-based capability productive for the warfighter.",
  },
  {
    slug: "seta",
    name: "Systems Engineering & Technical Assistance (SETA)",
    iconName: "Cog",
    image: `${BASE}/hf_20260504_191207_699a0614-cbb0-4e51-88d2-9311e45feeab.png`,
    short:
      "Independent SETA support to government program offices: requirements, architecture, integration, test, and trade-space analysis.",
    detail:
      "Trusted, conflict-of-interest-aware technical advisory embedded in the program office. We give the government an honest read of the program and the path forward.",
  },
  {
    slug: "web-development",
    name: "Web Development & Content Administration",
    iconName: "Globe",
    image: `${BASE}/hf_20260504_191215_60759236-c96c-493b-8c67-bd59d83eeaf4.png`,
    short:
      "Modern web platforms and the content-operations discipline that keeps them current after launch.",
    detail:
      "Headless CMS architectures, accessible front ends, secure publication workflows, and content-administration training so the customer stays in control.",
  },
  {
    slug: "wireless-communications",
    name: "Wireless Communications",
    iconName: "Radio",
    image: `${BASE}/hf_20260504_191223_333378cf-2203-4c46-b0f3-dac214a6f066.png`,
    short:
      "Tactical and strategic wireless engineering — from spectrum analysis to deployable communications kit.",
    detail:
      "RF and SATCOM engineering, link budget and spectrum work, and the integration / sustainment skills required to keep links up in contested environments.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
