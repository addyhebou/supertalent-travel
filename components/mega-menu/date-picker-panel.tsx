"use client";

import { useMemo } from "react";
import type { DateRange } from "@/components/shell/app-shell";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type DayCell = {
  day: number;
  iso: string;
  disabled: boolean;
  isCheckIn: boolean;
  isCheckOut: boolean;
  inRange: boolean;
};

type Month = {
  label: string;
  weeks: (DayCell | null)[][];
};

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildMonth(base: Date, dateRange: DateRange, today: Date): Month {
  const year = base.getFullYear();
  const month = base.getMonth();
  const label = base.toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const { checkIn, checkOut } = dateRange;

  const cells: (DayCell | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const iso = toIso(date);
    cells.push({
      day,
      iso,
      disabled: date < today,
      isCheckIn: checkIn === iso,
      isCheckOut: checkOut === iso,
      inRange: Boolean(checkIn && checkOut && iso > checkIn && iso < checkOut),
    });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (DayCell | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return { label, weeks };
}

// Fully custom calendar — no native <input type="date"> — per the PRD's
// explicit ban on default browser form controls. Disabled-date logic is
// pure/local (no fetch), matching the design doc's data-layer notes.
export function DatePickerPanel({
  dateRange,
  onPickDay,
}: {
  dateRange: DateRange;
  onPickDay: (iso: string) => void;
}) {
  const months = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return [0, 1].map((offset) =>
      buildMonth(new Date(today.getFullYear(), today.getMonth() + offset, 1), dateRange, today),
    );
  }, [dateRange]);

  return (
    <div className="mb-5 flex gap-8">
      {months.map((month) => (
        <div key={month.label}>
          <div className="mb-2.5 text-[13px] font-semibold text-ink">{month.label}</div>
          <div className="mb-1 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((wd) => (
              <div key={wd} className="w-7 text-center text-[10px] text-placeholder">
                {wd}
              </div>
            ))}
          </div>
          {month.weeks.map((week, wi) => (
            <div key={wi} className="mb-1 grid grid-cols-7 gap-1">
              {week.map((cell, ci) =>
                cell ? (
                  <button
                    key={ci}
                    disabled={cell.disabled}
                    onClick={() => onPickDay(cell.iso)}
                    aria-label={cell.disabled ? `${cell.iso}, unavailable` : cell.iso}
                    className="flex h-7 w-7 items-center justify-center text-[12.5px]"
                    style={{
                      borderRadius: cell.isCheckIn || cell.isCheckOut ? "50%" : "5px",
                      background:
                        cell.isCheckIn || cell.isCheckOut
                          ? "var(--color-accent)"
                          : cell.inRange
                            ? "rgba(193,122,91,0.14)"
                            : "transparent",
                      color:
                        cell.isCheckIn || cell.isCheckOut
                          ? "#fff"
                          : cell.disabled
                            ? "var(--color-calendar-disabled)"
                            : "var(--color-ink)",
                      cursor: cell.disabled ? "default" : "pointer",
                    }}
                  >
                    {cell.day}
                  </button>
                ) : (
                  <div key={ci} className="h-7 w-7" />
                ),
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
