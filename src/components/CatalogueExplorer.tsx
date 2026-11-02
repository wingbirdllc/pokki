"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Category, Product } from "@/lib/types";
import { ProductCard } from "./ui";

type Sort = "featured" | "name-asc" | "name-desc" | "brand-asc";

const sorts: { value: Sort; label: string }[] = [
  { value: "featured", label: "Curated order" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
  { value: "brand-asc", label: "Brand A–Z" },
];

export function CatalogueExplorer({
  products,
  categories,
  fixedCategory,
}: {
  products: Product[];
  categories: Category[];
  fixedCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const active = fixedCategory ?? category;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => active === "all" || p.categorySlug === active);
    if (q) {
      list = list.filter((p) =>
        [p.name, p.brand, p.summary, ...p.specs.map((s) => s.value)].join(" ").toLowerCase().includes(q),
      );
    }
    const sorted = [...list];
    if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "brand-asc") sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    return sorted;
  }, [products, query, active, sort]);

  const filtersOn = query !== "" || sort !== "featured" || (!fixedCategory && category !== "all");
  const reset = () => {
    setQuery("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <div>
      <div role="search" className="grid gap-5 border-y border-ink/15 py-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <label htmlFor="catalogue-search" className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Search
          </label>
          <div className="relative mt-2">
            <Search size={18} aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              id="catalogue-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Linen, ceramic, walnut…"
              className="min-h-12 w-full border border-ink/25 bg-ivory-50 py-3 pl-11 pr-4 text-base text-ink placeholder:text-ink-soft/70"
            />
          </div>
        </div>

        {!fixedCategory && (
          <div className="lg:col-span-4">
            <label htmlFor="catalogue-category" className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Collection
            </label>
            <select
              id="catalogue-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 min-h-12 w-full border border-ink/25 bg-ivory-50 px-4 py-3 text-base text-ink"
            >
              <option value="all">All collections</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className={fixedCategory ? "lg:col-span-4 lg:col-start-9" : "lg:col-span-3"}>
          <label htmlFor="catalogue-sort" className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Sort
          </label>
          <select
            id="catalogue-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="mt-2 min-h-12 w-full border border-ink/25 bg-ivory-50 px-4 py-3 text-base text-ink"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex min-h-10 items-center justify-between gap-4 text-sm text-ink-soft">
        <p role="status" aria-live="polite">
          {results.length} {results.length === 1 ? "example" : "examples"}
        </p>
        {filtersOn && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-10 items-center gap-2 px-2 font-semibold uppercase tracking-[0.14em] text-ink hover:text-gold-600"
          >
            <X size={16} aria-hidden /> Reset
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 border border-dashed border-ink/25 px-6 py-20 text-center">
          <p className="font-serif text-3xl">Nothing matches that.</p>
          <p className="mt-3 text-ink-soft">Try a different word, or clear the filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 min-h-12 bg-charcoal-950 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ivory-50 hover:bg-gold-600"
          >
            Reset search and filters
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
