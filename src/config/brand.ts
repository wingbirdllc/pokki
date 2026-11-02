/**
 * Brand settings — the single place to change name, tagline and demo disclosure.
 * Logo: supplied by the owner (origami bird + POKKI wordmark, transparent PNG).
 * Original is kept untouched in /assets-original; /public holds a downscaled copy at the same aspect ratio.
 * To replace it, swap the file in /public and update width/height here. Set src to null for the text wordmark.
 */
export const brand = {
  name: "POKKI",
  tagline: "A considered home for everyday things",
  description:
    "POKKI is a demonstration of a premium editorial catalogue: calm, well-made everyday objects shown as third-party examples with direct links to Amazon.",
  logo: { src: "/pokki-logo.png" as string | null, alt: "POKKI", width: 480, height: 160 },
  demoNotice:
    "POKKI is a demonstration website. Products shown are third-party examples, not made or sold by POKKI.",
  // Set to the real deployed URL once known; used for canonical URLs and sitemap.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  // Verified contact details only. Left empty on purpose — never invent one.
  contact: { email: null as string | null },
} as const;
