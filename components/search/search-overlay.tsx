"use client";

import { useEffect } from "react";

const POPULAR_SEARCHES = [
  "Aman Tokyo",
  "Rome, Italy",
  "Golf resorts in Scotland",
  "Honeymoon villas, Santorini",
  "Six Senses Maldives",
];

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-start justify-center pt-[14vh]"
      style={{ background: "rgba(33,29,25,0.5)", backdropFilter: "blur(3px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[640px] rounded-[4px] bg-paper p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        <div className="mb-2 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[rgba(33,29,25,0.06)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#211d19" strokeWidth="1.8">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>
        <div className="mb-7 flex items-center gap-3.5 border-b-2 border-ink pb-3.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#211d19" strokeWidth="1.6">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            autoFocus
            placeholder="Search destinations, brands, experiences"
            className="flex-1 border-none bg-transparent text-[18px] text-ink outline-none"
          />
        </div>
        <div className="mb-3.5 text-[10.5px] font-semibold tracking-[0.14em] text-muted">
          POPULAR SEARCHES
        </div>
        <div className="flex flex-col gap-0.5">
          {POPULAR_SEARCHES.map((s) => (
            <button
              key={s}
              className="flex items-center gap-3 rounded-[3px] px-2.5 py-[11px] text-left text-[14.5px] text-ink hover:bg-[rgba(33,29,25,0.05)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a8178" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
