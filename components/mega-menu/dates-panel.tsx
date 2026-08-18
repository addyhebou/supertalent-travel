"use client";

import { DatePickerPanel } from "./date-picker-panel";
import { SearchCta } from "./search-cta";
import type { DateRange } from "@/components/shell/app-shell";

export function DatesPanel({
  dateRange,
  onPickDay,
  onSearch,
}: {
  dateRange: DateRange;
  onPickDay: (iso: string) => void;
  onSearch: () => void;
}) {
  const canSearch = Boolean(dateRange.checkIn && dateRange.checkOut);

  return (
    <div>
      <div className="mb-4 text-[10.5px] font-semibold tracking-[0.14em] text-muted">DATES</div>
      <DatePickerPanel dateRange={dateRange} onPickDay={onPickDay} />
      <SearchCta enabled={canSearch} onClick={onSearch} />
    </div>
  );
}
