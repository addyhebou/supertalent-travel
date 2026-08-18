"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "@/lib/api/brands";
import { useMswReady } from "./use-msw-ready";

const TEN_MINUTES = 10 * 60 * 1000;

// Query key ['brands', brandId, 'cities'] per the design doc — hierarchical
// under 'brands' so a future brand-level invalidation can target it without
// over-fetching unrelated brands' city lists.
export function useCities(brandId: string | null) {
  const mswReady = useMswReady();
  return useQuery({
    queryKey: ["brands", brandId, "cities"],
    queryFn: () => fetchCities(brandId as string),
    enabled: mswReady && Boolean(brandId),
    staleTime: TEN_MINUTES,
  });
}
