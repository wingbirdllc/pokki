# POKKI — project status (2026-11-02)

## Implemented
- Next.js 16.4.4 (App Router), React 19.3, TypeScript strict, Tailwind 4, Motion, Lucide. Lockfile: package-lock.json.
- Static export (`output: "export"`, `trailingSlash: true`) → `out/` for Cloudflare Pages or Vercel.
- Pages: Home, Shop, 4 collection pages, 9 product pages, About, Our Story, Contact, FAQ, Privacy, Terms, 404, sitemap, robots.
- Catalogue search, collection filter, sort, empty state + reset, breadcrumbs, active nav, mobile menu, gallery controls.
- Supplied logo (original kept in `assets-original/`, web copy in `public/`). Favicon made from the bird.
- Self-hosted fonts (Fraunces, Manrope; both SIL OFL) in `src/fonts`.
- Original SVG illustrations in `src/components/Scene.tsx` (labelled illustrative, never product photos).
- Whole site is `noindex` (src/app/layout.tsx). Crawling allowed so the directive is readable.

## Tested (local only, headless Chrome in the build sandbox)
- `tsc --noEmit`, `eslint`, `next build`: pass.
- 75 browser checks (overflow at 360/390/768/1024/1440 on 11 pages, search/filter/sort/empty/reset, 9 Amazon links, mobile menu open/Escape/navigate, reduced-motion): all pass except the 404 check, which only fails because the local python server has its own 404 page. `out/404.html` contains the custom page.
- Lighthouse (lab, mobile preset, local server): Home 86 perf / 100 a11y / 100 best-practices; Shop 100/100/100; Product 98/100/100. SEO shows 66 on every page ONLY because of the intentional noindex. Home LCP 4.1 s (lab-simulated) is below the 90 target; the logo image is the LCP element. No field data exists.
- Automated checks do not prove WCAG compliance; no manual screen-reader test done.

## NOT done / pending
- Amazon listings: pages could not be opened (amazon.com blocks automated fetch). Names, brands, ASINs and URLs come from search results only. No price/rating/stock/seller. Someone must open each link in a normal browser before relying on it.
- CMS / authentication: OWNER DECISION (2026-11-02): not needed. No Sanity, no login, no admin. Content is edited in source files (see below). `src/lib/catalogue.ts` remains the adapter if a CMS is wanted later.
- Forms / data capture: OWNER DECISION: not needed. No contact, newsletter or lead-capture forms.
- No repository, no hosting, no deployment. Live URL: none.
- Contact email: none supplied, so no contact details and no forms.
- Logo file has speckled/noisy edges around the POKKI letters (visible when large). A cleaner export would be better.

## Permissions needed next (ask the owner; none granted yet)
1. GitHub: create a private repo in the owner's account and push source.
2. Cloudflare Pages (free) or existing Vercel plan: connect repo, build, publish (public URL).
3. Owner: a verified contact email (optional), a cleaner logo (optional), and a real-browser check of the 9 Amazon links.

## Edit products today (without CMS)
Edit `src/data/products.ts` (products) and `src/data/categories.ts`, brand in `src/config/brand.ts`, FAQ in `src/content/faq.ts`. Run `npm run build`; deploy the `out/` folder.
To launch for real: remove `robots: { index: false, follow: false }` in `src/app/layout.tsx` and set `NEXT_PUBLIC_SITE_URL`.
