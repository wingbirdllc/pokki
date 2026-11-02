import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { brand } from "@/config/brand";
import { getCategories } from "@/lib/catalogue";

export function Footer() {
  const cats = getCategories();
  return (
    <footer className="on-dark bg-charcoal-950 text-ivory-100">
      <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark logoClassName="h-20" />
            <p className="mt-6 max-w-sm font-serif text-2xl leading-snug text-ivory-50/90">
              {brand.tagline}.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-100/70">
              {brand.demoNotice}
            </p>
          </div>

          <nav aria-label="Collections" className="lg:col-span-2 lg:col-start-7">
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              Collections
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="hover:text-gold-300" href="/shop/">All collections</Link></li>
              {cats.map((c) => (
                <li key={c.slug}>
                  <Link className="hover:text-gold-300" href={`/collections/${c.slug}/`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About POKKI" className="lg:col-span-2">
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              POKKI
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="hover:text-gold-300" href="/about/">About</Link></li>
              <li><Link className="hover:text-gold-300" href="/our-story/">Our Story</Link></li>
              <li><Link className="hover:text-gold-300" href="/faq/">FAQ</Link></li>
              <li><Link className="hover:text-gold-300" href="/contact/">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Legal" className="lg:col-span-2">
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              Legal
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="hover:text-gold-300" href="/privacy/">Privacy Policy</Link></li>
              <li><Link className="hover:text-gold-300" href="/terms/">Terms</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory-50/10 pt-8 text-xs text-ivory-100/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} POKKI demonstration. Not a shop.</p>
          <p>Product links open Amazon.com. Amazon and product names belong to their owners.</p>
        </div>
      </div>
    </footer>
  );
}
