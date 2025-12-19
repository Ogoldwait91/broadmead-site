import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import TopBar from "../components/TopBar";
import SiteFooter from "../components/SiteFooter";

const serif = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Broadmead Boutique B&B | Tenby, Pembrokeshire",
    template: "%s | Broadmead Boutique B&B",
  },
  description:
    "A quiet, design-led boutique B&B in Tenby — calm rooms, seasonal breakfasts, and an unhurried coastal stay.",
  metadataBase: new URL("https://broadmead.example.com"),
  openGraph: {
    title: "Broadmead Boutique B&B",
    description:
      "A quiet, design-led boutique B&B in Tenby — calm rooms, seasonal breakfasts, and an unhurried coastal stay.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function HotelJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Broadmead Boutique B&B",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tenby",
      addressRegion: "Pembrokeshire",
      addressCountry: "GB",
    },
    url: "https://broadmead.example.com",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <HotelJsonLd />
        <TopBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}


