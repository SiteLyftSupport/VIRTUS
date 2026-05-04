import type { Metadata } from "next";
import { Inter, Big_Shoulders, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Display: Big Shoulders Display — wide, bold geometric letterforms that
// mirror the industrial / inscribed feel of the printed VIRTUS wordmark
// far better than Saira (which read as too neutral against the brand).
const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
      className={`${sans.variable} ${display.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#07080b] text-[#f5f4ef]">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
