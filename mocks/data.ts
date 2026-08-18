import type { Brand, City } from "@/lib/api/types";

// Full Global Chains brand roster from the PRD (page 8) — ~110 multinational
// hotel brands, standing in for the real /api/brands payload pre-launch.
const BRAND_NAMES = [
  "Aloft", "Aman", "Anantara", "Andaz", "APA", "Armani", "B&B", "Baccarat", "Banyan Tree", "Barceló",
  "Belmond", "Best Western", "Bvlgari", "Capella", "Catalonia", "Cheval Blanc", "Choice Hotels", "Citadines", "COMO", "Conrad",
  "Courtyard", "Crowne Plaza", "Daiwa Roynet", "Dedeman", "Dorchester Collection", "Dorint", "DoubleTree", "Dusit",
  "EDITION", "Eurostars", "Fairfield", "Fairmont", "Four Points", "Four Seasons", "Fraser", "Golden Tulip", "H10", "Hampton",
  "Hilton", "Hilton Garden Inn", "Holiday Inn", "Holiday Inn Express", "Hoshinoya", "Hyatt Centric", "Hyatt House", "Hyatt Place", "Hyatt Regency",
  "Iberostar", "Ibis", "InterContinental", "Janu", "Joali", "Jumeirah", "Kempinski", "Leonardo", "Lotte City Hotels",
  "Mandarin Oriental", "Maritim", "Marriott", "Meliá", "Mercure", "Moxy", "NH Hotels", "Novotel", "Novum", "Oberoi",
  "Oetker Collection", "Okura Nikko", "One&Only", "OZEN", "Palladium", "Pan Pacific", "Paradores", "Park Hyatt", "Patina",
  "Pullman", "Radisson", "Raffles", "Ramada", "Regent", "Renaissance", "Riu", "Ritz-Carlton", "Rosewood",
  "Scandic", "Shangri-La", "Sheraton", "Shilla Stay", "Six Senses", "Sofitel", "Somerset", "Soneva", "SpringHill Suites",
  "St. Regis", "Starhotels", "Steigenberger", "Swissotel", "The Peninsula", "Thistle", "Thon", "Tru", "TRYP", "Viceroy",
  "Vincci", "voco", "Waldorf Astoria", "W Hotels", "Westin", "Wyndham", "YOTEL",
] as const;

const COMBINING_DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const BRANDS: Brand[] = BRAND_NAMES.map((name) => ({
  id: slugify(name),
  name,
  logoURL: null,
}));

// Every brand operates in the same four cities in this mock, matching the
// design handoff's stated simplification (see README.md, "Global Chains
// Mega-Menu" section).
const CITY_TEMPLATE: Array<{ name: string; countryCode: string; propertyCount: number }> = [
  { name: "London", countryCode: "GB", propertyCount: 14 },
  { name: "Paris", countryCode: "FR", propertyCount: 11 },
  { name: "Rome", countryCode: "IT", propertyCount: 8 },
  { name: "Tokyo", countryCode: "JP", propertyCount: 9 },
];

export const CITIES_BY_BRAND: Record<string, City[]> = Object.fromEntries(
  BRANDS.map((brand) => [
    brand.id,
    CITY_TEMPLATE.map((city) => ({
      id: `${brand.id}-${slugify(city.name)}`,
      name: city.name,
      countryCode: city.countryCode,
      propertyCount: city.propertyCount,
    })),
  ]),
);
