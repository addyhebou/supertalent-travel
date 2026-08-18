"use client";

import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Header } from "@/components/header/header";
import { MegaMenu } from "@/components/mega-menu/mega-menu";
import { SearchOverlay } from "@/components/search/search-overlay";
import { fetchBrands } from "@/lib/api/brands";
import { useMswReady } from "@/hooks/use-msw-ready";
import { type NavCategory } from "@/lib/nav-items";

export type DateRange = {
  checkIn: string | null;
  checkOut: string | null;
};

const EMPTY_RANGE: DateRange = { checkIn: null, checkOut: null };
const TEN_MINUTES = 10 * 60 * 1000;

// Owns every piece of local UI state the header + mega-menu share (per the
// design doc's component tree). Server-derived brand/city data lives in the
// React Query cache instead, read directly by BrandList/CityPanel.
export function AppShell({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const mswReady = useMswReady();
  const [activeCategory, setActiveCategory] = useState<NavCategory | null>(null);
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>(EMPTY_RANGE);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenus = useCallback(() => {
    setActiveCategory(null);
    setActiveBrandId(null);
    setSelectedCityId(null);
    setDateRange(EMPTY_RANGE);
  }, []);

  const openCategory = useCallback(
    (category: NavCategory) => {
      setActiveCategory(category);
      if (category === "Global Chains" && mswReady) {
        // Route-level prefetch: warm the brands cache as soon as the user
        // shows intent, before the menu has finished opening. Gated on
        // mswReady so this can't race the mock worker's own startup and
        // hit the real (routeless) /api/brands in dev.
        queryClient.prefetchQuery({
          queryKey: ["brands"],
          queryFn: fetchBrands,
          staleTime: TEN_MINUTES,
        });
      }
    },
    [queryClient, mswReady],
  );

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((open) => !open);
    setActiveCategory(null);
  }, []);

  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  const selectBrand = useCallback((brandId: string) => {
    setActiveBrandId(brandId);
    setSelectedCityId(null);
    setDateRange(EMPTY_RANGE);
  }, []);

  const selectCity = useCallback((cityId: string) => {
    setSelectedCityId(cityId);
    setDateRange(EMPTY_RANGE);
  }, []);

  const pickDay = useCallback((iso: string) => {
    setDateRange(({ checkIn, checkOut }) => {
      if (!checkIn || (checkIn && checkOut)) return { checkIn: iso, checkOut: null };
      if (iso <= checkIn) return { checkIn: iso, checkOut: null };
      return { checkIn, checkOut: iso };
    });
  }, []);

  const isMenuOpen = activeCategory !== null;

  return (
    <>
      <div onMouseLeave={closeMenus} className="fixed inset-x-0 top-0 z-[60]">
        <Header
          isMenuOpen={isMenuOpen}
          isSearchOpen={isSearchOpen}
          activeCategory={activeCategory}
          onOpenCategory={openCategory}
          onToggleSearch={toggleSearch}
        />
        <MegaMenu
          activeCategory={activeCategory}
          activeBrandId={activeBrandId}
          selectedCityId={selectedCityId}
          dateRange={dateRange}
          onSelectBrand={selectBrand}
          onSelectCity={selectCity}
          onPickDay={pickDay}
          onSearch={closeMenus}
        />
      </div>
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
      {children}
    </>
  );
}
