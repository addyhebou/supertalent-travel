"use client";

import { NAV_ITEMS, type NavCategory } from "@/lib/nav-items";

export function PrimaryNav({
  activeCategory,
  onOpenCategory,
}: {
  activeCategory: NavCategory | null;
  onOpenCategory: (category: NavCategory) => void;
}) {
  return (
    <nav className="flex h-[50px] items-center justify-center gap-9 border-t border-[rgba(33,29,25,0.1)]">
      {NAV_ITEMS.map((item) => {
        const isActive = activeCategory === item;
        return (
          <button
            key={item}
            onMouseEnter={() => onOpenCategory(item)}
            onClick={() => onOpenCategory(item)}
            className="border-b-[1.5px] pb-1 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors"
            style={{
              color: isActive ? "var(--color-accent)" : "var(--color-ink)",
              borderBottomColor: isActive ? "var(--color-accent)" : "transparent",
            }}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}
