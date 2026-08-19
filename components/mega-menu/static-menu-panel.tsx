import type { NavCategory } from "@/lib/nav-items";
import { NAV_MENU_DATA, type MenuEntry, type MenuSection } from "@/lib/nav-menu-data";
import { PlaceholderPanel } from "./placeholder-panel";

function EntryLine({ entry }: { entry: MenuEntry }) {
  if (typeof entry === "string") {
    return <div className="text-[14.5px] text-ink">{entry}</div>;
  }
  return (
    <div className="text-[14.5px] leading-[1.5] text-ink">
      <span className="font-semibold">{entry.label}:</span> <span className="text-muted">{entry.items.join(", ")}</span>
    </div>
  );
}

function Section({ section }: { section: MenuSection }) {
  return (
    <div className="mb-9 break-inside-avoid">
      <div className="mb-4 text-[10.5px] font-semibold tracking-[0.14em] text-muted">
        {section.heading.toUpperCase()}
      </div>
      <div className="flex flex-col gap-2">
        {section.entries.map((entry, i) => (
          <EntryLine key={i} entry={entry} />
        ))}
      </div>
    </div>
  );
}

// Non-interactive: no cities/dates flow here, just the flattened region ->
// country/city listing per the design handoff, matching the Global Chains
// grid's typography so the categories feel like one family.
export function StaticMenuPanel({ category }: { category: NavCategory }) {
  const data = NAV_MENU_DATA[category];
  if (!data) return <PlaceholderPanel category={category} />;

  if (data.layout === "grid") {
    return (
      <div className="grid gap-x-12 gap-y-9" style={{ gridTemplateColumns: `repeat(${data.columnCount}, minmax(0,1fr))` }}>
        {data.sections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ columns: data.columnCount, columnGap: "56px" }}>
      {data.sections.map((section) => (
        <Section key={section.heading} section={section} />
      ))}
    </div>
  );
}
