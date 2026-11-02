import Link from "next/link";
import { getCategories } from "@/lib/catalogue";
import { ButtonLink, Eyebrow, PageShell } from "@/components/ui";

export default function NotFound() {
  return (
    <PageShell>
      <div className="py-24 lg:py-36">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">That page isn&apos;t here.</h1>
        <p className="mt-6 max-w-md text-ink-soft">The link may be old, or the product may have been removed from the demo.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/shop/" variant="line">
            Browse the catalogue
          </ButtonLink>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-serif text-2xl">
          {getCategories().map((c) => (
            <li key={c.slug}>
              <Link href={`/collections/${c.slug}/`} className="hover:text-gold-600">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
