import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/catalogue";
import { CatalogueExplorer } from "@/components/CatalogueExplorer";
import { Breadcrumbs, Eyebrow, PageShell, Visual } from "@/components/ui";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  return { title: c.name, description: `${c.tagline}. ${c.intro}` };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProductsByCategory(category.slug);
  const others = getCategories().filter((c) => c.slug !== category.slug);

  return (
    <>
      <section className="on-dark bg-charcoal-950 text-ivory-50">
        <PageShell>
          <div className="grid items-end gap-10 pb-16 pt-10 lg:grid-cols-12 lg:pb-24 lg:pt-12">
            <div className="lg:col-span-7">
              <div className="text-ivory-100/80 [&_a:hover]:text-gold-300 [&_li>span]:text-ivory-50 [&_nav]:text-ivory-100/70">
                <Breadcrumbs
                  items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop/" }, { label: category.name }]}
                />
              </div>
              <div className="mt-10">
                <Eyebrow dark>Collection</Eyebrow>
                <h1 className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] text-ivory-50">{category.name}</h1>
                <p className="mt-5 font-serif text-2xl italic text-gold-300">{category.tagline}</p>
                <p className="mt-6 max-w-lg text-ivory-100/80">{category.intro}</p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Visual
                image={{ src: `scene:${category.scene}`, alt: `Illustration for ${category.name}`, provenance: "original-illustration", illustrative: true }}
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </PageShell>
      </section>

      <PageShell>
        <div className="py-14 lg:py-20">
          <h2 className="sr-only">Products</h2>
          <CatalogueExplorer products={items} categories={getCategories()} fixedCategory={category.slug} />
        </div>

        <nav aria-label="Other collections" className="border-t border-ink/15 pb-24 pt-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">Other collections</p>
          <ul className="mt-5 flex flex-wrap gap-x-10 gap-y-3 font-serif text-2xl">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}/`} className="hover:text-gold-600">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageShell>
    </>
  );
}
