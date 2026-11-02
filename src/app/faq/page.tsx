import type { Metadata } from "next";
import { faqs } from "@/content/faq";
import { FaqList } from "@/components/FaqList";
import { Breadcrumbs, Eyebrow, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about the POKKI demonstration: products, links, images and checks.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <div className="py-10 pb-28 lg:py-14">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <header className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[1]">Good to know.</h1>
          </header>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={faqs} />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
