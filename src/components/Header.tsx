"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/shop/", label: "Shop" },
  { href: "/collections/home-living/", label: "Home & Living" },
  { href: "/collections/kitchen-dining/", label: "Kitchen & Dining" },
  { href: "/collections/travel-everyday-carry/", label: "Travel & Carry" },
  { href: "/collections/desk-organization/", label: "Desk" },
  { href: "/about/", label: "About" },
];

function isActive(pathname: string, href: string) {
  const p = pathname.endsWith("/") ? pathname : pathname + "/";
  return p === href || p.startsWith(href);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  // Menu is "open" only for the page it was opened on, so navigating closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (v: boolean | ((prev: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenPath(next ? pathname : null);
  };
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape, scroll lock, simple focus management
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const items = [toggleRef.current, ...Array.from(f)].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="on-dark sticky top-0 z-50 bg-charcoal-950 text-ivory-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory-50 focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="POKKI — home" className="text-ivory-50">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.8rem] uppercase tracking-[0.16em]">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 transition-colors hover:text-gold-300 ${
                      active ? "text-gold-300" : "text-ivory-100/90"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold-300 transition-transform duration-500 origin-left ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-[70] -mr-2 flex h-12 w-12 items-center justify-center lg:hidden"
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[65] overflow-y-auto bg-charcoal-950 px-6 pb-12 pt-28 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35 }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {[{ href: "/", label: "Home" }, ...links, { href: "/our-story/", label: "Our Story" }, { href: "/faq/", label: "FAQ" }, { href: "/contact/", label: "Contact" }].map(
                  (l, i) => (
                    <motion.li
                      key={l.href}
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: 0.5 }}
                    >
                      <Link
                        href={l.href}
                        aria-current={isActive(pathname, l.href) && l.href !== "/" ? "page" : undefined}
                        className="block border-b border-ivory-50/10 py-4 font-serif text-3xl text-ivory-50"
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>
            </nav>
            <p className="mt-10 text-sm text-ivory-100/70">
              POKKI is a demonstration site. Products are third-party examples.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
