"use client";

import { useEffect } from "react";
import { useCities } from "@/hooks/use-cities";

export function CityPanel({
  brandId,
  selectedCityId,
  onSelectCity,
}: {
  brandId: string;
  selectedCityId: string | null;
  onSelectCity: (cityId: string) => void;
}) {
  const { data: cities, isPending, isError } = useCities(brandId);

  // Auto-select the first city as soon as a brand's cities load, so the
  // dates panel appears alongside the city list instead of waiting on an
  // extra click — selectedCityId is reset to null on every brand change,
  // which is what re-arms this for the newly active brand.
  useEffect(() => {
    if (!selectedCityId && cities && cities.length > 0) {
      onSelectCity(cities[0].id);
    }
  }, [cities, selectedCityId, onSelectCity]);

  if (isPending) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[36px] w-3/4 animate-pulse rounded-[3px] bg-[rgba(33,29,25,0.06)]" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-[14px] italic text-placeholder">Unable to load cities right now.</p>;
  }

  if (!cities?.length) {
    return <p className="text-[14px] italic text-placeholder">No cities available.</p>;
  }

  return (
    <div className="flex flex-col gap-0.5">
      {cities.map((city) => {
        const isActive = city.id === selectedCityId;
        return (
          <button
            key={city.id}
            onClick={() => onSelectCity(city.id)}
            className="rounded-[3px] px-3 py-[9px] text-left text-[14.5px]"
            style={{
              color: isActive ? "#fff" : "var(--color-ink)",
              background: isActive ? "var(--color-accent)" : "transparent",
              fontWeight: isActive ? 600 : 400,
            }}
          >
            {city.name}
          </button>
        );
      })}
    </div>
  );
}
