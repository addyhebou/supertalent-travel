import { delay, http, HttpResponse } from "msw";
import { BRANDS, CITIES_BY_BRAND } from "./data";

// Mirrors design_handoff_page1_landing/Frontend_Design_Doc_Phase1_Page1.pdf
// section 4 (Interface — API Contracts). Swapping this for the real backend
// later is a base-URL change in lib/api/brands.ts, not a refactor.
export const handlers = [
  http.get("/api/brands", async () => {
    await delay(120);
    return HttpResponse.json({ brands: BRANDS });
  }),

  http.get("/api/brands/:brandId/cities", async ({ params }) => {
    await delay(120);
    const brandId = String(params.brandId);
    const cities = CITIES_BY_BRAND[brandId];

    if (!cities) {
      // Unknown brandID -> 404 per contract; CityPanel renders "no cities
      // available" rather than an error state.
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({ cities });
  }),
];
