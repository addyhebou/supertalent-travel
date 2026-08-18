import type { Brand, City } from "./types";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// GET /api/brands — see design_handoff_page1_landing/Frontend_Design_Doc_Phase1_Page1.pdf, section 4.
export async function fetchBrands(): Promise<Brand[]> {
  const res = await fetch("/api/brands");
  if (!res.ok) {
    throw new ApiError("Failed to load brands", res.status);
  }
  const data: { brands: Brand[] } = await res.json();
  return data.brands;
}

// GET /api/brands/:brandID/cities — a 404 (unknown brand) is a valid empty
// state per the contract, not an error: callers should show "no cities
// available" rather than an error message.
export async function fetchCities(brandId: string): Promise<City[]> {
  const res = await fetch(`/api/brands/${brandId}/cities`);
  if (res.status === 404) {
    return [];
  }
  if (!res.ok) {
    throw new ApiError("Failed to load cities", res.status);
  }
  const data: { cities: City[] } = await res.json();
  return data.cities;
}
