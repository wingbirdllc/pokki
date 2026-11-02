import Image from "next/image";
import { brand } from "@/config/brand";

/** Supplied logo when brand.logo.src is set; otherwise a text wordmark. */
export function Wordmark({ className = "", logoClassName = "h-12" }: { className?: string; logoClassName?: string }) {
  if (brand.logo.src) {
    return (
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        priority
        className={`w-auto ${logoClassName} ${className}`}
      />
    );
  }
  return (
    <span className={`font-serif text-[1.55rem] leading-none tracking-[0.34em] ${className}`} style={{ fontWeight: 400 }}>
      {brand.name}
    </span>
  );
}
