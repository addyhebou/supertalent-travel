export const NAV_ITEMS = [
  "Global Chains",
  "Free Travel",
  "Exhibitions",
  "Honeymoon",
  "Golf",
  "Castle",
  "Villas",
] as const;

export type NavCategory = (typeof NAV_ITEMS)[number];
