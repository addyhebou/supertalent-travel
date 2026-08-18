"use client";

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 border-b border-transparent py-2 hover:border-ink"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#211d19" strokeWidth="1.6">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <span className="text-[11px] font-semibold tracking-[0.14em] text-ink">SEARCH</span>
    </button>
  );
}
