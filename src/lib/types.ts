export type CategorySlug =
  | "home-living"
  | "kitchen-dining"
  | "travel-everyday-carry"
  | "desk-organization";

/** How well a listing has been checked. Only "search-index" or better may show an active Amazon button. */
export type VerificationStatus =
  | "unverified" // candidate only — Amazon button inactive
  | "search-index" // URL + title seen in a web search index; page itself not fetched
  | "page-checked"; // listing page content checked directly

export type ImageProvenance =
  | "original-illustration" // drawn for this demo (SVG), not a product photo
  | "supplied" // supplied by the site owner
  | "licensed"; // properly licensed photo (record licence in `note`)

export interface ProductImage {
  /** Scene id for generated illustrations, or a /public path for real files. */
  src: string;
  alt: string;
  provenance: ImageProvenance;
  /** True when the image is representative only, not an exact product photograph. */
  illustrative: boolean;
  note?: string;
}

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  tagline: string;
  intro: string;
  order: number;
  hidden?: boolean;
  scene: SceneKind;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Actual third-party brand, as shown in the Amazon listing title. */
  brand: string;
  categorySlug: CategorySlug;
  summary: string;
  /** Only facts that appear in the accessible source (listing title). */
  specs: { label: string; value: string }[];
  images: ProductImage[];
  amazon: {
    url: string;
    asin: string | null;
    status: VerificationStatus;
    verifiedOn: string; // ISO date
    sourceUrl: string; // where the identity was seen
    limitations: string;
  };
  demo: true;
  featured: boolean;
  order: number;
  hidden?: boolean;
  /** Only set when known. Not shown unless present. */
  availability?: string;
}

export type SceneKind =
  | "throw"
  | "pourover"
  | "cubes"
  | "tray"
  | "home"
  | "kitchen"
  | "travel"
  | "desk";

export interface FaqItem {
  q: string;
  a: string;
}
