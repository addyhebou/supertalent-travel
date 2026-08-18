"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "@/lib/api/brands";
import { useMswReady } from "./use-msw-ready";

const TEN_MINUTES = 10 * 60 * 1000;

// Query key ['brands'] per the design doc's data layer — near-static
// reference data, so a long staleTime means re-hovering an already-viewed
// brand is instant and doesn't refetch.
export function useBrands() {
  const mswReady = useMswReady();
  return useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
    staleTime: TEN_MINUTES,
    enabled: mswReady,
  });
}
