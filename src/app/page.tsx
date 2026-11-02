import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategories, getFeaturedProducts, getProduct } from "@/lib/catalogue";
import { faqs } from "@/content/faq";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { Scene } from "@/components/Scene";
import { FaqList } from "@/components/FaqList";
import { ButtonLink, Eyebrow, ProductCard, Visual, PageShell } from "@/components/ui";

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts();
  const story = getProduct("segarty-ceramic-pour-over-dripper");

  return (
    <>
      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-charcoal-950 text-ivory-50">
        <PageShell>
          <div className="grid items-center gap-12 pb-20 pt-14 lg:min-h-[44rem] lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
            <div className="lg:col-span-7">
              <div className="hero-in">
                <Eyebrow dark>A demonstration catalogue</Eyebrow>
              </div>
              <div className="hero-in" style={{ "--d": "0.08s" } as React.CSSProperties}>
                <h1 className="mt-6 text-[clamp(3rem,8.2vw,7.5rem)] leading-[0.95] text-ivory-50">
                  Quiet objects,
                  <br />
                  <em className="font-light italic text-gold-300">carefully</em> chosen.
                </h1>
              </div>
              <div className="hero-in" style={{ "--d": "0.2s" } as React.CSSProperties}>
                <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ivory-100/80">
                  POKKI shows how a calm, editorial product catalogue can look and work. Every product is a third-party
                  example with a direct link to Amazon.
                </p>
              </div>
              <div className="hero-in" style={{ "--d": "0.3s" } as React.CSSProperties}>
                <div className="mt-10">
                  <ButtonLink href="/shop/" dark>
                    Explore the collections
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="hero-in relative lg:col-span-5" style={{ "--d": "0.15s" } as React.CSSProperties}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:ml-auto">
                <div className="absolute -right-4 -top-4 h-full w-full border border-gold-300/50" aria-hidden />
                <Visual
                  image={{
                    src: "scene:throw",
                    alt: "Illustration: a linen throw draped over a sofa arm beside a small table with a vase.",
                    provenance: "original-illustration",
                    illustrative: true,
                  }}
                  className="h-full w-full"
                />
              </div>
              <p className="mt-6 text-xs text-ivory-100/60 lg:text-right">Original illustration · not a product photograph</p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* CATEGORIES */}
      <section className="bg-ivory-50 py-24 lg:py-36" aria-labelledby="cat-heading">
        <PageShell>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Four collections</Eyebrow>
              <h2 id="cat-heading" className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02]">
                Rooms, rituals, journeys and desks.
              </h2>
            </div>
            <p className="max-w-md self-end text-ink-soft lg:col-span-4 lg:col-start-9">
              Four collections, each a short edit of third-party examples. Browse them one by one, or search the whole
              catalogue.
            </p>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-16" : ""}>
                <Link href={`/collections/${c.slug}/`} className="group block">
                  <Visual
                    image={{ src: `scene:${c.scene}`, alt: `Illustration for ${c.name}`, provenance: "original-illustration", illustrative: true }}
                    className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600">0{i + 1}</p>
                  <h3 className="mt-1 font-serif text-2xl text-ink group-hover:text-gold-600">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </PageShell>
      </section>

      {/* FEATURED */}
      <section className="bg-cream-200 py-24 lg:py-32" aria-labelledby="feat-heading">
        <PageShell>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Featured examples</Eyebrow>
              <h2 id="feat-heading" className="mt-5 text-[clamp(2rem,4vw,3.4rem)]">
                A few to start with.
              </h2>
            </div>
            <Link href="/shop/" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] hover:text-gold-600">
              View all
              <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 0.07}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </PageShell>
      </section>

      {/* PRODUCT STORYTELLING */}
      {story && (
        <section className="bg-ivory-50 py-24 lg:py-36" aria-labelledby="story-heading">
          <PageShell>
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <Visual image={story.images[0]} className="aspect-[5/6] w-full" />
              </Reveal>
              <div className="lg:col-span-5 lg:col-start-8">
                <Eyebrow>How an entry is made</Eyebrow>
                <h2 id="story-heading" className="mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
                  One object, three honest steps.
                </h2>
                <ol className="mt-10 space-y-8">
                  {[
                    ["Look", `We pick an ordinary, useful object. Here: a ceramic pour-over dripper by ${story.brand}.`],
                    ["Check", "The name, brand and link are confirmed from search results. What could not be checked is written on the page."],
                    ["Link", "The button goes straight to the Amazon listing. No prices, ratings or claims we cannot stand behind."],
                  ].map(([t, d], i) => (
                    <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ink/15 pt-6">
                      <span className="font-serif text-lg text-gold-600">0{i + 1}</span>
                      <div>
                        <h3 className="font-serif text-2xl">{t}</h3>
                        <p className="mt-2 text-ink-soft">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-10">
                  <ButtonLink href={`/products/${story.slug}/`} variant="line">
                    See this entry
                  </ButtonLink>
                </div>
              </div>
            </div>
          </PageShell>
        </section>
      )}

      {/* CINEMATIC */}
      <section className="on-dark relative isolate overflow-hidden bg-charcoal-950 text-ivory-50" aria-label="Editorial statement">
        <Parallax className="absolute inset-0 -z-10 opacity-80" amount={50}>
          <Scene kind="throw" />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-charcoal-950/60" aria-hidden />
        <PageShell>
          <div className="flex min-h-[34rem] flex-col justify-end py-20 lg:min-h-[44rem] lg:py-28">
            <Reveal>
              <p className="max-w-4xl font-serif text-[clamp(2.4rem,6.4vw,6rem)] leading-[1] text-ivory-50">
                Fewer things,
                <br />
                <em className="font-light italic text-gold-300">chosen better.</em>
              </p>
            </Reveal>
          </div>
        </PageShell>
      </section>

      {/* CONCEPT */}
      <section className="bg-ivory-100 py-24 lg:py-32" aria-labelledby="concept-heading">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>The POKKI concept</Eyebrow>
              <h2 id="concept-heading" className="mt-5 text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">
                A catalogue that points, not sells.
              </h2>
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-6">
              <p>
                POKKI is a design and workflow test. It shows how a refined brand site can present everyday products,
                link out to the retailer, and be edited by its owner without touching code.
              </p>
              <p>
                There is no basket and no checkout. Every product belongs to its maker; POKKI only frames it.
              </p>
              <Link href="/about/" className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-gold-400 underline-offset-8 hover:text-gold-600">
                Read more about POKKI
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-ivory-50 py-24 lg:py-32" aria-labelledby="faq-heading">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Good to know</Eyebrow>
              <h2 id="faq-heading" className="mt-5 text-[clamp(2rem,3.6vw,3rem)]">
                Quick answers.
              </h2>
              <div className="mt-8">
                <ButtonLink href="/faq/" variant="line">
                  All questions
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList items={faqs.slice(0, 4)} />
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
