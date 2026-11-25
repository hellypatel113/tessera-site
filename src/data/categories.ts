export type CategoryKey =
  | "sell-more"
  | "trust"
  | "retention"
  | "b2b"
  | "checkout"
  | "operations"
  | "global"
  | "social"
  | "marketing"
  | "compliance";

export interface Category {
  key: CategoryKey;
  name: string;
  description: string;
  /** Two colours for the category's gradient. */
  from: string;
  to: string;
}

export const CATEGORIES: Category[] = [
  { key: "sell-more", name: "Sell more", description: "Raise order value with offers, bundles, gifts and sales.", from: "#7C3AED", to: "#EC4899" },
  { key: "trust", name: "Trust", description: "Give shoppers the confidence to buy.", from: "#F59E0B", to: "#EF4444" },
  { key: "retention", name: "Bring them back", description: "Turn first-time buyers into regulars.", from: "#EC4899", to: "#F97316" },
  { key: "b2b", name: "Wholesale", description: "Sell to trade customers on their terms.", from: "#0EA5E9", to: "#6366F1" },
  { key: "checkout", name: "Checkout", description: "Shape how customers pay and receive orders.", from: "#10B981", to: "#0EA5E9" },
  { key: "operations", name: "Orders", description: "Run orders, documents and fulfilment.", from: "#6366F1", to: "#A855F7" },
  { key: "global", name: "Global selling", description: "Welcome visitors from every country the right way.", from: "#14B8A6", to: "#84CC16" },
  { key: "social", name: "Social", description: "Bring video and social content into your store.", from: "#F43F5E", to: "#A855F7" },
  { key: "marketing", name: "Marketing", description: "Measure every visit and sale in the tools you already use.", from: "#2563EB", to: "#7C3AED" },
  { key: "compliance", name: "Store care", description: "Keep the store tidy, legal and safe.", from: "#F97316", to: "#FACC15" },
];

export function categoryOf(key: CategoryKey): Category {
  const found = CATEGORIES.find((category) => category.key === key);
  if (!found) throw new Error(`Unknown category: ${key}`);
  return found;
}
