import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProduct, getProducts, getRelatedProducts } from "@/lib/catalogue";
import { ProductGallery } from "@/components/ProductGallery";
import { AmazonButton, Breadcrumbs, Eyebrow, PageShell, ProductCard } from "@/components/ui";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.brand}`,
    description: `${p.summary} Third-party example on the POKKI demonstration site.`,
  };
}

const statusLabel = {
  unverified: "Not verified",
  "search-index": "Identity seen in search results; listing page not opened",
  "page-checked": "Listing page checked",
} as const;

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = getRelatedProducts(product, 3);

  return (
    <PageShell>
      <div className="py-10 lg:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop/" },
            ...(category ? [{ label: category.name, href: `/collections/${category.slug}/` }] : []),
            { label: product.name },
          ]}
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <ProductGallery images={product.images} />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow>{product.brand}</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04]">{product.name}</h1>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">{product.summary}</p>

            <div className="mt-8">
              <AmazonButton product={product} />
              <p className="mt-3 text-xs text-ink-soft">
                Opens the Amazon.com listing in a new tab. Check price and availability there.
              </p>
            </div>

            <dl className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[1fr_1.4fr] gap-4 py-4 text-sm">
                  <dt className="text-ink-soft">{s.label}</dt>
                  <dd className="text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-ink-soft">
              Details come only from the listing title. Open the listing for the full, current specification.
            </p>

            <section aria-labelledby="demo-note" className="mt-10 bg-cream-200 p-6">
              <h2 id="demo-note" className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
                Demonstration note
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                This is a third-party product by {product.brand}. POKKI does not make or sell it. The image is an
                illustration, not a photograph of the item.
              </p>
            </section>

            <details className="mt-6 text-sm">
              <summary className="cursor-pointer py-2 font-semibold text-ink">Source and verification record</summary>
              <dl className="mt-3 space-y-3 text-ink-soft">
                <div>
                  <dt className="font-semibold text-ink">Status</dt>
                  <dd>{statusLabel[product.amazon.status]}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">ASIN (from listing URL)</dt>
                  <dd>{product.amazon.asin ?? "Not recorded"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Checked on</dt>
                  <dd>{product.amazon.verifiedOn}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Source</dt>
                  <dd>{product.amazon.sourceUrl}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Limitations</dt>
                  <dd>{product.amazon.limitations}</dd>
                </div>
              </dl>
            </details>
          </div>
        </div>

        <section aria-labelledby="related-heading" className="mt-28 border-t border-ink/15 pt-14 pb-24">
          <h2 id="related-heading" className="font-serif text-3xl">
            More examples
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
          <p className="mt-12">
            <Link href="/shop/" className="font-semibold underline decoration-gold-400 underline-offset-8 hover:text-gold-600">
              Back to all collections
            </Link>
          </p>
        </section>
      </div>
    </PageShell>
  );
}
