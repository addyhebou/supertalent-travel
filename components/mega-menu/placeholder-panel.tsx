import type { NavCategory } from "@/lib/nav-items";

export function PlaceholderPanel({ category }: { category: NavCategory }) {
  return (
    <div>
      <div className="mb-[18px] text-[10.5px] font-semibold tracking-[0.14em] text-muted">
        {category.toUpperCase()}
      </div>
      <p className="text-[14px] italic text-placeholder">
        Category content coming soon — structure to follow the Global Chains pattern once itineraries are
        finalized.
      </p>
    </div>
  );
}
