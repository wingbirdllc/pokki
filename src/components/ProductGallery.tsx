"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductImage } from "@/lib/types";
import { Visual } from "./ui";

/** Accessible gallery: arrow buttons + thumbnails + left/right keys. Controls hide when there is one image. */
export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const cur = images[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <figure
      className="relative"
      role="group"
      aria-roledescription="gallery"
      aria-label="Product images"
      onKeyDown={(e) => {
        if (n < 2) return;
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <Visual image={cur} className="aspect-[4/5] w-full" />
      {n > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ivory-50 text-ink hover:bg-gold-300"
          >
            <ChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ivory-50 text-ink hover:bg-gold-300"
          >
            <ChevronRight aria-hidden />
          </button>
          <div className="mt-4 flex gap-3" role="group" aria-label="Choose image">
            {images.map((im, idx) => (
              <button
                key={im.src + idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show image ${idx + 1} of ${n}`}
                aria-current={idx === i}
                className={`h-16 w-16 overflow-hidden border-2 ${idx === i ? "border-gold-600" : "border-transparent"}`}
              >
                <Visual image={im} className="h-full w-full" />
              </button>
            ))}
          </div>
        </>
      )}
      <figcaption className="mt-4 text-xs leading-relaxed text-ink-soft" aria-live="polite">
        {cur.illustrative
          ? "Illustrative image: an original POKKI illustration, not a photograph of the actual product."
          : cur.note}
        {n > 1 && ` (Image ${i + 1} of ${n})`}
      </figcaption>
    </figure>
  );
}
