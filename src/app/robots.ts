import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export const dynamic = "force-static";

// Crawling is allowed so search engines can read the page-level noindex directive.
// To launch for real: remove `robots: { index: false }` in src/app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(brand.siteUrl ? { sitemap: `${brand.siteUrl}/sitemap.xml` } : {}),
  };
}
