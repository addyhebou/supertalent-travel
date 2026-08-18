"use client";

import { useBrands } from "@/hooks/use-brands";
import { BrandList } from "./brand-list";
import { CityPanel } from "./city-panel";
import { DatesPanel } from "./dates-panel";
import type { DateRange } from "@/components/shell/app-shell";

export function GlobalChainsPanel({
  activeBrandId,
  selectedCityId,
  dateRange,
  onSelectBrand,
  onSelectCity,
  onPickDay,
  onSearch,
}: {
  activeBrandId: string | null;
  selectedCityId: string | null;
  dateRange: DateRange;
  onSelectBrand: (brandId: string) => void;
  onSelectCity: (cityId: string) => void;
  onPickDay: (iso: string) => void;
  onSearch: () => void;
}) {
  // Shares the ['brands'] cache with <BrandList /> (same query key) purely
  // to read the active brand's display name for the "{BRAND} — CITIES"
  // label — no extra network request.
  const { data: brands } = useBrands();
  const activeBrand = brands?.find((b) => b.id === activeBrandId) ?? null;

  return (
    <div>
      <div className="mb-9">
        <div className="mb-5 text-[10.5px] font-semibold tracking-[0.14em] text-muted">BRANDS</div>
        <BrandList activeBrandId={activeBrandId} onSelectBrand={onSelectBrand} />
      </div>

      {activeBrand ? (
        <div className="grid grid-cols-[1fr_2fr] gap-14 border-t border-line pt-9">
          <div>
            <div className="mb-4 text-[10.5px] font-semibold tracking-[0.14em] text-muted">
              {activeBrand.name.toUpperCase()} — CITIES
            </div>
            <CityPanel brandId={activeBrand.id} selectedCityId={selectedCityId} onSelectCity={onSelectCity} />
          </div>
          {selectedCityId ? (
            <DatesPanel dateRange={dateRange} onPickDay={onPickDay} onSearch={onSearch} />
          ) : (
            <div className="flex items-center text-[14px] italic text-placeholder">
              Select a city to see dates
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
