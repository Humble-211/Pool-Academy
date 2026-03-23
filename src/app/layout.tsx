import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { siteSettings } from "@/content/site-settings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://poolacademy.com"
  ),
  title: {
    default: `${siteSettings.name} — ${siteSettings.tagline}`,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
  keywords: [
    "billiards",
    "pool table",
    "pool hall",
    "leagues",
    "tournaments",
    "Buffalo NY",
    "Western New York",
    "premium billiards",
    "pool academy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://poolacademy.com",
    siteName: siteSettings.name,
    title: `${siteSettings.name} — ${siteSettings.tagline}`,
    description: siteSettings.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteSettings.name} — ${siteSettings.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.name} — ${siteSettings.tagline}`,
    description: siteSettings.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
