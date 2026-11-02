import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { brand } from "@/config/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-wght-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-latin-wght-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: brand.siteUrl ? new URL(brand.siteUrl) : undefined,
  title: { default: `${brand.name} — ${brand.tagline}`, template: `%s · ${brand.name}` },
  description: brand.description,
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
    type: "website",
  },
  // Demo site: keep out of search indexes. Crawling stays allowed so the directive can be read.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        {/* Without JavaScript the scroll reveals can't run, so show everything. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
