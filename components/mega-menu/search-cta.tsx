"use client";

export function SearchCta({ enabled, onClick }: { enabled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={enabled ? onClick : undefined}
      disabled={!enabled}
      className="rounded-[2px] px-7 py-[13px] text-[11.5px] font-semibold tracking-[0.1em]"
      style={{
        background: enabled ? "var(--color-accent)" : "var(--color-disabled-bg)",
        color: enabled ? "#fff" : "var(--color-disabled-text)",
        cursor: enabled ? "pointer" : "default",
      }}
    >
      {enabled ? "SEARCH AVAILABILITY" : "SELECT DATES TO CONTINUE"}
    </button>
  );
}
