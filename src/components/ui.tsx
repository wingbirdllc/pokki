import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Product, ProductImage, SceneKind } from "@/lib/types";
import { isAmazonActive } from "@/lib/catalogue";
import { Scene, isScene, sceneKind } from "./Scene";
import Image from "next/image";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
        dark ? "text-gold-300" : "text-gold-600"
      }`}
    >
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "line";
  dark?: boolean;
}) {
  const base =
    "group inline-flex min-h-12 items-center gap-3 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300";
  const styles =
    variant === "solid"
      ? dark
        ? "bg-gold-300 text-charcoal-950 hover:bg-ivory-50"
        : "bg-charcoal-950 text-ivory-50 hover:bg-gold-600"
      : dark
        ? "border border-ivory-50/40 text-ivory-50 hover:border-gold-300 hover:text-gold-300"
        : "border border-ink/40 text-ink hover:border-gold-600 hover:text-gold-600";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/** Renders either an original SVG scene or a real image file. */
export function Visual({ image, kindFallback, className = "" }: { image?: ProductImage; kindFallback?: SceneKind; className?: string }) {
  const src = image?.src ?? (kindFallback ? `scene:${kindFallback}` : "");
  return (
    <div className={`relative overflow-hidden bg-cream-200 ${className}`}>
      {isScene(src) ? (
        <div role="img" aria-label={image?.alt ?? "Illustration"} className="absolute inset-0">
          <Scene kind={sceneKind(src)} />
        </div>
      ) : (
        <Image src={src} alt={image?.alt ?? ""} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      )}
    </div>
  );
}

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  void priority;
  return (
    <article className="group relative">
      <Link href={`/products/${product.slug}/`} className="block focus-visible:outline-offset-4">
        <Visual
          image={product.images[0]}
          className="aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {product.brand}
            </p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-ink group-hover:text-gold-600">
              {product.name}
            </h3>
          </div>
          <ArrowUpRight
            size={20}
            aria-hidden
            className="mt-1 shrink-0 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
          />
        </div>
      </Link>
      <p className="mt-3 text-xs text-ink-soft">Third-party example · illustrative image</p>
    </article>
  );
}

export function AmazonButton({ product, className = "" }: { product: Product; className?: string }) {
  if (!isAmazonActive(product)) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex min-h-12 items-center gap-3 border border-ink/30 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink-soft ${className}`}
      >
        Amazon link not verified
      </span>
    );
  }
  return (
    <a
      href={product.amazon.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 items-center gap-3 bg-charcoal-950 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ivory-50 transition-colors duration-300 hover:bg-gold-600 ${className}`}
    >
      View on Amazon
      <ArrowUpRight size={16} aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      <span className="sr-only"> (opens Amazon.com in a new tab)</span>
    </a>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.78rem] text-ink-soft">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="underline-offset-4 hover:text-gold-600 hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">{it.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageShell({ children, narrow = false }: { children: React.ReactNode; narrow?: boolean }) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${narrow ? "max-w-3xl" : "max-w-[90rem]"}`}>{children}</div>
  );
}
