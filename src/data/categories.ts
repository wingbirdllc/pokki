import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-home-living",
    slug: "home-living",
    name: "Home & Living",
    tagline: "Soft layers for quiet rooms",
    intro:
      "Textiles and small pieces that make a room feel settled. Third-party examples chosen for a calm, tactile look.",
    order: 1,
    scene: "home",
  },
  {
    id: "cat-kitchen-dining",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    tagline: "Rituals at the counter",
    intro:
      "Simple tools for slow mornings and shared tables. Third-party examples, shown to demonstrate the catalogue.",
    order: 2,
    scene: "kitchen",
  },
  {
    id: "cat-travel-everyday-carry",
    slug: "travel-everyday-carry",
    name: "Travel & Everyday Carry",
    tagline: "Carry less, arrive composed",
    intro:
      "Practical organisers for bags and suitcases. Third-party examples that suit a considered, minimal kit.",
    order: 3,
    scene: "travel",
  },
  {
    id: "cat-desk-organization",
    slug: "desk-organization",
    name: "Desk & Organization",
    tagline: "A clear surface, a clear head",
    intro:
      "Wooden trays and organisers for a tidy workspace. Third-party examples, chosen to show how a desk edit could look.",
    order: 4,
    scene: "desk",
  },
];
