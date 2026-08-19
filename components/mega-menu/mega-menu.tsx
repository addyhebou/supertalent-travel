"use client";

import dynamic from "next/dynamic";
import type { NavCategory } from "@/lib/nav-items";
import type { DateRange } from "@/components/shell/app-shell";
import { MegaMenuErrorBoundary } from "./mega-menu-error-boundary";

// Not needed on initial paint — code-split so the brand list, city panel,
// and calendar bundle only loads on the user's first mega-menu interaction.
const GlobalChainsPanel = dynamic(
  () => import("./global-chains-panel").then((m) => m.GlobalChainsPanel),
  { ssr: false },
);

const StaticMenuPanel = dynamic(
  () => import("./static-menu-panel").then((m) => m.StaticMenuPanel),
  { ssr: false },
);

export function MegaMenu({
  activeCategory,
  activeBrandId,
  selectedCityId,
  dateRange,
  onSelectBrand,
  onSelectCity,
  onPickDay,
  onSearch,
}: {
  activeCategory: NavCategory | null;
  activeBrandId: string | null;
  selectedCityId: string | null;
  dateRange: DateRange;
  onSelectBrand: (brandId: string) => void;
  onSelectCity: (cityId: string) => void;
  onPickDay: (iso: string) => void;
  onSearch: () => void;
}) {
  if (!activeCategory) return null;

  return (
    <div className="max-h-[min(600px,calc(100vh-200px))] overflow-y-auto border-t border-line bg-panel shadow-[0_24px_48px_rgba(33,29,25,0.12)]">
      <div className="mx-auto max-w-[1280px] px-12 py-11">
        <MegaMenuErrorBoundary>
          {activeCategory === "Global Chains" ? (
            <GlobalChainsPanel
              activeBrandId={activeBrandId}
              selectedCityId={selectedCityId}
              dateRange={dateRange}
              onSelectBrand={onSelectBrand}
              onSelectCity={onSelectCity}
              onPickDay={onPickDay}
              onSearch={onSearch}
            />
          ) : (
            <StaticMenuPanel category={activeCategory} />
          )}
        </MegaMenuErrorBoundary>
      </div>
    </div>
  );
}
