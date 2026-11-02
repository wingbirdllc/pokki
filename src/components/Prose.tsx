import { Breadcrumbs, Eyebrow, PageShell } from "./ui";

export function ProsePage({
  eyebrow,
  title,
  lede,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  crumb: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <div className="py-10 pb-28 lg:py-14">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumb }]} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <header className="lg:col-span-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1]">{title}</h1>
            {lede && <p className="mt-6 max-w-md font-serif text-xl italic text-ink-soft">{lede}</p>}
          </header>
          <div className="space-y-6 text-[1.02rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_a]:text-ink [&_a]:underline [&_a]:decoration-gold-400 [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
