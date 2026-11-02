import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";

/** Native <details> — keyboard accessible with no client JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-serif text-xl text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus size={20} aria-hidden className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-6 text-[0.98rem] leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
