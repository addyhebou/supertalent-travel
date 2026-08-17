# Handoff: Supertalent Travel — Page 1 (Header, Navigation, Landing, Global Chains Mega-Menu)

## Overview
VVIP luxury OTA landing page: sticky header/nav, hero, and the Global Chains mega-menu (brand → city → dates → search). This is the first shippable slice per the Frontend System Design Doc (Phase 1, Page 1).

## About the Design Files
The bundled `.html` files are **design references** — interactive HTML/CSS/JS prototypes showing intended look, layout, and behavior. They are not production code to copy directly. The task is to **recreate this design in the target Next.js app** (`addyhebou/supertalent-travel`), using React components, the project's existing conventions, and the state/data-fetching approach specified in the PRD (React Query, MSW mocks) rather than the plain-JS state pattern used in the prototype.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and interaction states below are final for this round. Hero and brand imagery are placeholders (striped blocks) — swap for real assets when available; don't treat their labels as final copy.

## Screens / Views

### 1. Header + Primary Nav (persistent, sticky)
- **Purpose**: Global search entry, brand identity, account/cart access, category navigation.
- **Layout**: Fixed to viewport top, full width, z-index above page content.
  - Row 1: CSS grid `1fr auto 1fr`, height 84px, horizontal padding 48px, vertically centered.
    - Left cell: search trigger — magnifying-glass icon (16×16, 1.6px stroke) + "SEARCH" label (Inter 600, 11px, letter-spacing 0.14em), bottom border appears on hover.
    - Center cell: wordmark — "SUPERTALENT" (Inter 700, 22px, letter-spacing 0.22em) stacked above "TRAVEL" (Inter 500, 9px, letter-spacing 0.38em, color `#8a8178`), both centered.
    - Right cell: account icon + bag/cart icon (19×19, 1.6px stroke), 22px gap, right-aligned.
  - Row 2 (nav): flex row, centered, 36px gap between items, height 50px, top border `1px solid rgba(33,29,25,0.1)`.
    - 7 items: Global Chains, Free Travel, Exhibitions, Honeymoon, Golf, Castle, Villas.
    - Item style: Inter 600, 12px, letter-spacing 0.1em, uppercase, color `#211d19`.
    - Active/hovered: color `#C17A5B`, 1.5px bottom border in the same color.
- **Background transition**: transparent (no shadow) when at top of page and no menu/search open; becomes solid `#faf7f2` with `box-shadow: 0 1px 0 rgba(33,29,25,0.08)` when scrolled OR any mega-menu/search overlay is open. Transition: `background .25s ease, box-shadow .25s ease`.
- **Trigger behavior**: hovering (and clicking, for touch/keyboard parity) a nav item opens its panel. Moving the pointer off the entire header+panel area closes all menus.

### 2. Global Chains Mega-Menu
- **Purpose**: Browse ~20 hotel/travel brands, then drill into city and dates, then search.
- **Layout**: Full-width panel below the nav bar, white background, `box-shadow: 0 24px 48px rgba(33,29,25,0.12)`, top border `1px solid rgba(33,29,25,0.08)`. Inner content max-width 1280px, centered, padding 44px/48px.
  - **Brand grid** (always visible when panel open): label "BRANDS" (Inter 600, 10.5px, letter-spacing 0.14em, color `#8a8178`), then a CSS grid `repeat(6, 1fr)`, row-gap 16px, column-gap 24px, of ~20 brand names (Inter 400, 14.5px, `#211d19`; selected brand: Inter 600, color `#C17A5B`). This spans the full panel width — laid out like a category mega-menu (see Hermès reference), not a narrow scrollable list.
  - **Cities + Dates row** (appears only once a brand is selected): top border `1px solid rgba(33,29,25,0.08)`, padding-top 36px, CSS grid `1fr 2fr`, 56px gap.
    - Left: "{BRAND} — CITIES" label, then a vertical list of cities (same 4 for every brand in this mock: London, Paris, Rome, Tokyo). Same text styling as brand rows.
    - Right: once a city is picked, "DATES" label + a two-month custom calendar (current month + next), and the Search CTA. Before a city is picked, shows italic placeholder copy "Select a city to see dates" (`#b3aca2`, 14px).
- **Custom calendar**: two months side by side, 32px gap. Each month: label (Inter 600, 13px) + weekday header row (Su–Sa, 10px, `#b3aca2`) + week rows, 7-column grid, 28px cells, 4px gap.
  - Past dates (before today): text color `#c9c2b8`, not clickable.
  - Selected check-in/check-out: filled circle, background `#C17A5B`, white text.
  - In-range days (between check-in and check-out): background `rgba(193,122,91,0.14)`.
  - Selection logic: first click sets check-in (clears check-out); a click on a date ≤ check-in resets check-in; otherwise sets check-out.
- **Search CTA**: full-width-ish button, 13px/28px padding, 11.5px/600/0.1em label.
  - Disabled (brand+city+both dates not all set): background `#e5e0d7`, text `#a89c86`, label "SELECT DATES TO CONTINUE".
  - Enabled: background `#C17A5B`, text white, label "SEARCH AVAILABILITY" — routes to results page (out of scope for this slice; prototype just closes the menu).

### 3. Other 6 nav categories (Free Travel, Exhibitions, Honeymoon, Golf, Castle, Villas)
- Placeholder panel only: same panel chrome as Global Chains, shows the category name as a label and italic copy "Category content coming soon — structure to follow the Global Chains pattern once itineraries are finalized." Build these out later using the same brand→filter→CTA pattern.

### 4. Hero
- **Layout**: full-bleed section, `height: 100vh` (min-height 640px), background is a placeholder (striped pattern) labeled "hero: full-bleed pool/beach photo or video loop" — replace with real photo/video.
- **Content**: bottom-anchored, 88px bottom padding, vertical gradient scrim (`rgba(33,29,25,0.28)` to transparent) behind text for contrast over real imagery.
  - Tagline: Fraunces 600, `clamp(56px, 9vw, 116px)`, letter-spacing -0.02em, line-height 0.95, white, centered. Copy is placeholder ("Endless Summer") — real copy TBD.
  - CTA "START THE JOURNEY": background `#C17A5B` (hover `#a5644a`), white text, 17px/40px padding, 12px/600/0.14em label, 2px border-radius. On click: smooth-scrolls down (stand-in for a transition into the booking flow).

### 5. Search overlay (full-screen)
- **Trigger**: search icon/label in header.
- **Layout**: fixed, full viewport, backdrop `rgba(33,29,25,0.5)` + `backdrop-filter: blur(3px)`, z-index above mega-menus. Content card: `#faf7f2` background, max-width 640px, centered, 14vh from top, 40px padding, 4px border-radius, heavy drop shadow.
  - Close (X) button top-right, 32×32px circular hover state.
  - Input row: search icon + text input, 2px bottom border `#211d19`, placeholder "Search destinations, brands, experiences", 18px Inter.
  - "POPULAR SEARCHES" label (10.5px/600/0.14em, `#8a8178`) + 5 mock suggestion rows (clock icon + text, 14.5px, hover background `rgba(33,29,25,0.05)`).
- Clicking the backdrop or the X closes the overlay.

## Interactions & Behavior Summary
- Header background: transparent-over-hero → solid on scroll (scrollY > 30px) OR any menu/overlay open.
- Nav hover/click opens that category's panel; leaving the header area closes all.
- Global Chains: click brand → reveals cities; click city → reveals calendar; two date clicks → enables Search CTA.
- Search icon toggles the full-screen overlay (closes any open nav menu).
- No page navigation/routing is wired up in the prototype — CTAs are visual/demo only.

## State Management (as prototyped — reimplement per your app's conventions)
- Local UI state: `isScrolled`, `activeCategory`, `activeBrand`, `selectedCity`, `checkIn`, `checkOut`, `isSearchOpen`.
- Per the PRD: brand/city data should come from React Query (`['brands']`, `['brands', brandId, 'cities']`), backed by MSW mocks pre-launch, 10-min `staleTime`. Local-only UI state (menu open/closed, hover) should stay in component state, not the query cache.

## Design Tokens
- **Colors**: Paper `#faf7f2` · Panel `#ffffff` · Ink `#211d19` · Muted `#8a8178` · Line `rgba(33,29,25,0.08–0.12)` · Accent (terracotta) `#C17A5B` · Accent hover `#a5644a` · Disabled bg `#e5e0d7` · Disabled text `#a89c86`.
- **Typography**: Display — Fraunces, weights 600/700/900. Body/UI — Inter, weights 400/500/600/700. Uppercase UI labels use 0.1–0.14em letter-spacing.
- **Radii**: 2px (buttons), 3–5px (rows/cells), 50% (calendar selection, icon buttons).
- **Shadows**: mega-menu `0 24px 48px rgba(33,29,25,0.12)`; search overlay card `0 30px 80px rgba(0,0,0,0.35)`.

## Assets
No real photography used — hero and any brand imagery are striped placeholder blocks with monospace labels describing what belongs there. Source real photography before shipping (hero: pool/beach; brand logos for the grid, optional).

## Responsive
Desktop-first; only desktop (1280px+) is mocked. Per the PRD, the mega-menu must degrade to a full-screen accordion/drawer on mobile (<768px) — not yet designed, flagged as follow-up work.

## Files
- `Page 1 (Landing + Global Chains).dc.html` — the interactive prototype described above.
- `Style Guide.dc.html` — colors, type scale, buttons, nav states, mega-menu anatomy (companion reference).
- `screenshots/01-hero.png` — header + hero, menu closed.
- `screenshots/02-megamenu-open.png` — Global Chains open, full brand grid, nothing selected.
- `screenshots/03-aloft-dates.png` — Aloft selected → London → date range picked, Search CTA enabled.
- `screenshots/04-search.png` — full-screen search overlay with popular searches.
