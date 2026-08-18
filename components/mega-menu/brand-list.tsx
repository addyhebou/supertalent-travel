"use client";

import { useBrands } from "@/hooks/use-brands";

export function BrandList({
  activeBrandId,
  onSelectBrand,
}: {
  activeBrandId: string | null;
  onSelectBrand: (brandId: string) => void;
}) {
  const { data: brands, isPending, isError } = useBrands();

  if (isPending) {
    return (
      <div className="grid grid-cols-6 gap-x-6 gap-y-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-[19px] w-4/5 animate-pulse rounded bg-[rgba(33,29,25,0.06)]" />
        ))}
      </div>
    );
  }

  if (isError || !brands?.length) {
    return (
      <p className="text-[14px] italic text-placeholder">
        Brands are unavailable right now — please check back shortly.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-4">
      {brands.map((brand) => {
        const isActive = brand.id === activeBrandId;
        return (
          <button
            key={brand.id}
            onClick={() => onSelectBrand(brand.id)}
            className="text-left text-[14.5px]"
            style={{
              color: isActive ? "var(--color-accent)" : "var(--color-ink)",
              fontWeight: isActive ? 600 : 400,
            }}
          >
            {brand.name}
          </button>
        );
      })}
    </div>
  );
}
