import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { getCategories, getProducts } from "@/lib/catalogue";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Absolute URLs need the real deployed address (NEXT_PUBLIC_SITE_URL). Until it is known, the sitemap is empty.
  if (!brand.siteUrl) return [];
  const base = brand.siteUrl.replace(/\/$/, "");
  const fixed = ["/", "/shop/", "/about/", "/our-story/", "/contact/", "/faq/", "/privacy/", "/terms/"];
  return [
    ...fixed.map((p) => ({ url: `${base}${p}` })),
    ...getCategories().map((c) => ({ url: `${base}/collections/${c.slug}/` })),
    ...getProducts().map((p) => ({ url: `${base}/products/${p.slug}/` })),
  ];
}
