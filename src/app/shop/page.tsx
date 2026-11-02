import type { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/catalogue";
import { CatalogueExplorer } from "@/components/CatalogueExplorer";
import { Breadcrumbs, Eyebrow, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Shop all collections",
  description: "Browse every third-party example in the POKKI demonstration catalogue. Search, filter and sort.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <div className="py-10 lg:py-14">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
        <div className="mt-10 max-w-3xl">
          <Eyebrow>All collections</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1]">The whole catalogue.</h1>
          <p className="mt-6 text-ink-soft">
            Third-party examples shown for demonstration. Each links to its Amazon.com listing; nothing is sold here.
          </p>
        </div>
        <div className="mt-12 pb-24">
          <h2 className="sr-only">Products</h2>
          <CatalogueExplorer products={getProducts()} categories={getCategories()} />
        </div>
      </div>
    </PageShell>
  );
}
