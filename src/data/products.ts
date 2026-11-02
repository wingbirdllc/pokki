import type { Product, ProductImage, SceneKind, CategorySlug } from "@/lib/types";

/**
 * Third-party Amazon.com examples.
 *
 * HOW THESE WERE CHECKED (2026-11-02):
 *  - Product name, brand, size/material details and the direct URL/ASIN come from the
 *    listing title and URL as returned by a web search index.
 *  - amazon.com blocks automated page fetches (robots), so listing pages were NOT opened.
 *    Nothing here comes from the page body: no prices, ratings, reviews, stock or seller info.
 *  - A reachable listing does not prove availability or seller authenticity.
 *  - No affiliate tag is attached.
 * Re-verify each listing in a normal browser before any real launch.
 */

const VERIFIED_ON = "2026-11-02";
const LIMITS =
  "Identity and URL taken from a web-search result (title + link). The Amazon page itself could not be fetched by automated tools, so specs beyond the title, price, stock and seller are unchecked.";

function illustration(scene: SceneKind, alt: string): ProductImage[] {
  return [
    {
      src: `scene:${scene}`,
      alt,
      provenance: "original-illustration",
      illustrative: true,
      note: "Original POKKI demo illustration. Not a photograph of the actual product.",
    },
  ];
}

interface Seed {
  slug: string;
  name: string;
  brand: string;
  categorySlug: CategorySlug;
  summary: string;
  specs: { label: string; value: string }[];
  scene: SceneKind;
  alt: string;
  asin: string;
  url: string;
  searchQuery: string;
  featured?: boolean;
}

const seeds: Seed[] = [
  {
    slug: "king-linens-linen-throw-blanket",
    name: "100% Linen Throw Blanket with Fringe",
    brand: "King Linens",
    categorySlug: "home-living",
    summary:
      "A washed-flax linen throw with fringed edges, listed for couch, bed or sofa use.",
    specs: [
      { label: "Material (per listing title)", value: "100% linen" },
      { label: "Size (per listing title)", value: '55" x 75"' },
      { label: "Detail", value: "Fringe edges" },
    ],
    scene: "throw",
    alt: "Illustration of a folded linen throw with a fringed edge, in warm cream tones.",
    asin: "B0BY47CV8N",
    url: "https://www.amazon.com/King-Linens-Blanket-Breathable-Farmhouse/dp/B0BY47CV8N",
    searchQuery: "linen throw blanket",
    featured: true,
  },
  {
    slug: "simple-opulence-natural-linen-throw",
    name: "100% Natural Linen Throw Blanket with Tassel",
    brand: "Simple&Opulence",
    categorySlug: "home-living",
    summary:
      "A natural-colour linen throw with tassels, listed as a decorative double-flax blanket for sofas and beds.",
    specs: [
      { label: "Material (per listing title)", value: "100% natural linen" },
      { label: "Size (per listing title)", value: "50\" x 60\"" },
      { label: "Detail", value: "Tassel edges" },
    ],
    scene: "throw",
    alt: "Illustration of a natural linen throw draped over a sofa arm, with tassels.",
    asin: "B0C4GJ68YT",
    url: "https://www.amazon.com/Simple-Opulence-Natural-Blanket-Decorative/dp/B0C4GJ68YT",
    searchQuery: "linen throw blanket",
  },
  {
    slug: "segarty-ceramic-pour-over-dripper",
    name: "Ceramic Pour Over Coffee Dripper, Size No.2",
    brand: "Segarty",
    categorySlug: "kitchen-dining",
    summary:
      "A single-cup white ceramic dripper with a reusable-style filter cone and a three-hole flat base.",
    specs: [
      { label: "Material (per listing title)", value: "Ceramic" },
      { label: "Size (per listing title)", value: "No.2" },
      { label: "Design (per listing title)", value: "3 holes, flat bottom" },
    ],
    scene: "pourover",
    alt: "Illustration of a white ceramic pour-over dripper resting on a cup.",
    asin: "B07SBQR86W",
    url: "https://www.amazon.com/Ceramic-Dripper-Segarty-Enthusiast-Baristas/dp/B07SBQR86W",
    searchQuery: "pour over coffee dripper ceramic",
    featured: true,
  },
  {
    slug: "simply-charmed-ceramic-pour-over",
    name: "Ceramic Pour Over Coffee Maker with 40 Melitta Filters",
    brand: "Simply Charmed",
    categorySlug: "kitchen-dining",
    summary:
      "A compact ceramic single-serve dripper sold with 40 Melitta filters.",
    specs: [
      { label: "Material (per listing title)", value: "Ceramic" },
      { label: "Base / height (per listing title)", value: '4" base, 3" height' },
      { label: "Brews (per listing title)", value: "8–16 oz" },
      { label: "Included (per listing title)", value: "40 Melitta filters" },
    ],
    scene: "pourover",
    alt: "Illustration of a compact ceramic pour-over cone beside a stack of paper filters.",
    asin: "B017WWE1ZS",
    url: "https://www.amazon.com/Pour-Over-Coffee-Simply-Charmed/dp/B017WWE1ZS",
    searchQuery: "pour over coffee dripper ceramic",
  },
  {
    slug: "beeyond-compression-packing-cubes",
    name: "Compression Packing Cubes Set, 6 Pieces",
    brand: "Beeyond",
    categorySlug: "travel-everyday-carry",
    summary:
      "A six-piece packing set with large and small cubes, an accessories bag and a laundry bag.",
    specs: [
      { label: "Pieces (per listing title)", value: "6" },
      { label: "Includes (per listing title)", value: "Large & small cubes, accessories bag, laundry bag" },
      { label: "Colour (listing variant)", value: "Green and white" },
    ],
    scene: "cubes",
    alt: "Illustration of three zippered packing cubes in graduated sizes.",
    asin: "B0BK7137Y5",
    url: "https://www.amazon.com/Compression-Packing-Cubes-for-Travel/dp/B0BK7137Y5",
    searchQuery: "packing cubes travel set",
    featured: true,
  },
  {
    slug: "olarhike-10-set-compression-packing-cubes",
    name: "10 Set Compression Packing Cubes with Mesh Panels",
    brand: "OlarHike",
    categorySlug: "travel-everyday-carry",
    summary:
      "A ten-piece compressible, expandable packing cube set with mesh panels, listed in black.",
    specs: [
      { label: "Pieces (per listing title)", value: "10" },
      { label: "Feature (per listing title)", value: "Compressible, expandable, mesh holes" },
      { label: "Colour (listing variant)", value: "Black" },
    ],
    scene: "cubes",
    alt: "Illustration of black zippered packing cubes with mesh panels, stacked.",
    asin: "B0D99J3X5L",
    url: "https://www.amazon.com/Compression-Essentials-Compressible-Expandable-OlarHike/dp/B0D99J3X5L",
    searchQuery: "packing cubes travel set",
  },
  {
    slug: "timber-box-design-walnut-desk-tray",
    name: "Walnut Wood Office Desk Tray Organizer, Multi-Compartment",
    brand: "Timber Box Design",
    categorySlug: "desk-organization",
    summary:
      "A walnut-wood multi-compartment desk caddy for supplies, listed for home and office workspaces.",
    specs: [
      { label: "Material (per listing title)", value: "Walnut wood" },
      { label: "Layout (per listing title)", value: "Multi-compartment" },
    ],
    scene: "tray",
    alt: "Illustration of a walnut desk tray with several compartments holding pens.",
    asin: "B0DW9MSPBF",
    url: "https://www.amazon.com/Timber-Box-Design-Multi-Compartment-Organization/dp/B0DW9MSPBF",
    searchQuery: "desk organizer walnut wood",
    featured: true,
  },
  {
    slug: "ample-co-walnut-desk-organizer",
    name: "Walnut Wood Desk Organizer with Multiple Compartments",
    brand: "The Ample Co.",
    categorySlug: "desk-organization",
    summary:
      "A desktop pen holder and organiser in walnut wood with multiple compartments for office supplies.",
    specs: [
      { label: "Material (per listing title)", value: "Walnut wood" },
      { label: "Layout (per listing title)", value: "Multiple compartments" },
    ],
    scene: "tray",
    alt: "Illustration of a compact walnut desktop organiser with upright compartments.",
    asin: "B0BVB5WSGY",
    url: "https://www.amazon.com/Ample-Co-Organizer-Organizers-stationary/dp/B0BVB5WSGY",
    searchQuery: "desk organizer walnut wood",
  },
  {
    slug: "bamber-wood-letter-tray",
    name: "Wood Letter Tray Desk Organizer, Black Walnut",
    brand: "Bamber",
    categorySlug: "desk-organization",
    summary:
      "A wooden letter tray for papers, folders and notebooks, listed in a black walnut finish.",
    specs: [
      { label: "Material (per listing title)", value: "Wood" },
      { label: "Finish (per listing title)", value: "Black walnut" },
      { label: "Use (per listing title)", value: "Paper, folders, notebooks" },
    ],
    scene: "tray",
    alt: "Illustration of a flat wooden letter tray holding a slim stack of papers.",
    asin: "B0C583TMBT",
    url: "https://www.amazon.com/Bamber-Organizer-Collection-Stationery-Accessories/dp/B0C583TMBT",
    searchQuery: "desk organizer walnut wood",
  },
];

export const products: Product[] = seeds.map((s, i) => ({
  id: `prod-${s.asin.toLowerCase()}`,
  slug: s.slug,
  name: s.name,
  brand: s.brand,
  categorySlug: s.categorySlug,
  summary: s.summary,
  specs: s.specs,
  images: illustration(s.scene, s.alt),
  amazon: {
    url: s.url,
    asin: s.asin,
    status: "search-index",
    verifiedOn: VERIFIED_ON,
    sourceUrl: `Web search for "${s.searchQuery}" restricted to amazon.com, run ${VERIFIED_ON}`,
    limitations: LIMITS,
  },
  demo: true,
  featured: Boolean(s.featured),
  order: i + 1,
}));
