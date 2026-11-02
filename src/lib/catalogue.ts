import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Category, CategorySlug, Product } from "./types";

/**
 * Data-access adapter. Everything in the UI reads through these functions.
 * When a CMS (e.g. Sanity) is connected, swap the bodies here — pages and components stay unchanged.
 */

export function getCategories(): Category[] {
  return categories.filter((c) => !c.hidden).sort((a, b) => a.order - b.order);
}

export function getCategory(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  return products.filter((p) => !p.hidden).sort((a, b) => a.order - b.order);
}

export function getProduct(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return getProducts().filter((p) => p.categorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const same = getProducts().filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug,
  );
  const others = getProducts().filter(
    (p) => p.id !== product.id && p.categorySlug !== product.categorySlug,
  );
  return [...same, ...others].slice(0, limit);
}

/** Amazon button is active only when the listing identity has been checked at least via search index. */
export function isAmazonActive(product: Product): boolean {
  return product.amazon.status !== "unverified" && product.amazon.url.startsWith("https://www.amazon.com/");
}
