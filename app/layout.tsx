import type { Metadata } from "next";
import { Inter, Audiowide, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Display: Audiowide — techy/military letterforms with the signature
// horizontal grooves that mirror the printed VIRTUS wordmark. Single
// weight only, but it reads as clearly bold and clearly tech.
const display = Audiowide({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

// Sub-display: Rajdhani — narrow, geometric, defense/HUD aesthetic.
// Used for sub-heads and tactical labels where Audiowide would be too loud.
const subDisplay = Rajdhani({
  variable: "--font-tactical",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtusts.com"),
  title: {
    default:
      "Virtus Technology Solutions — Intelligence, Defense & Mission Engineering",
    template: "%s — Virtus Technology Solutions",
  },
  description:
    "A Service-Disabled Veteran-Owned Small Business delivering systems engineering, integration, program management, and mission operations support to the U.S. Department of Defense and the Intelligence Community.",
  keywords: [
    "Virtus Technology Solutions",
    "VirtusTS",
    "SDVOSB",
    "GovCon",
    "DoD contractor",
    "Intelligence Community",
    "Systems Engineering",
    "Program Management",
    "Mission Operations",
    "ISR",
  ],
  openGraph: {
    title: "Virtus Technology Solutions",
    description:
      "Mission-critical engineering for the Department of Defense and Intelligence Community. SDVOSB certified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${subDisplay.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#07080b] text-[#f5f4ef]">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
