---
name: html-to-react
description: Convert a Paradise Hotel HTML template screen into React (TSX) screens built from small reusable components. Use when the user shares screen HTML (home, about, rooms, contacts...) and wants it split into components under src/components, reusing existing ones and keeping the UI identical.
---

# HTML screen -> small React components

Project: Vite + React + TypeScript + react-router-dom. Template CSS (bootstrap, style.css, vendors.min.css, custom.css, bootstrap-icons) is already imported in `src/main.tsx`. Do not rewrite or replace it.

## Workflow

1. **Inventory first.** List `src/components/` and read the existing components, `src/screens/`, and `src/App.tsx` routes. Never recreate something that exists.
2. **Split the HTML into sections.** One component per visually distinct section or repeated card (e.g. `Hero`, `SectionTitle`, `RoomCard`, `NewsCard`, `Footer`). Rules of thumb:
   - Repeated markup (cards, list items) -> a card component + data array mapped in the parent.
   - A heading block repeated across sections -> shared `SectionTitle`.
   - Sections that appear on every screen (`Header`, `Footer`, back-to-top) belong in `App.tsx`, not in screens.
3. **Reuse before creating.** If an existing component covers the HTML, use it and pass props. If it almost fits, extend it with optional props (keep defaults equal to the old behaviour so other screens do not change). Create a new component only when nothing fits.
4. **Props for anything that varies**: text, images, links, prices, lists, modifier classes. Keep the default values equal to the HTML so `<Component />` renders the original.
5. **Screens are composition only** (`src/screens/X.tsx`): data arrays + component tags. Keep wrapper `div`s (`container margin_120_95`, `pattern_2`, `bg_white`) in the screen when they wrap several components.
6. **Verify**: run `npx tsc -b` and `npm run lint`; fix errors. If asked to check visually, run the dev server.

## Fidelity rules (UI must match the HTML)

- Keep the exact DOM structure and class names. Do not "improve" markup or restyle.
- JSX conversions: `class`->`className`, `for`->`htmlFor`, `readonly`->`readOnly`, self-close `img/input/br`, `style="a:b"` -> `style={{ a: 'b' }}`, HTML comments removed, `&` in text -> `&amp;` or `{'&'}`, `<!-- -->` dropped. `data-*` and `aria-*` attributes stay as-is.
- Images: files live in `public/img/...`; reference as `/img/name.jpg` (same as existing `Header`/`Hero`). Videos as `/video/...`.
- Internal links `href="x.html"` -> `<Link to="...">` using the routes defined in `src/App.tsx` (add a route only if the user asks). Anchors like `#booking_section` and `#0` stay `<a>`; `#0` links get `onClick={(e) => e.preventDefault()}`.
- Template JS is **not** loaded in this project. Anything that depended on JS must be reproduced without it, the way `Hero` does:
  - `data-background="url(x)"` / `.background-image` -> inline `style={{ backgroundImage: 'url(/img/x.jpg)' }}`.
  - `jarallax` / `data-opacity-mask` -> inline `background: url(...) center / cover no-repeat` and `backgroundColor: 'rgba(0,0,0,0.5)'` on the overlay.
  - `owl-carousel` (hidden by CSS until `.owl-loaded`) -> the `OwlCarousel` wrapper (real Owl from `common_scripts.js`, options passed as props; see `HeroCarousel`, `RoomsCarousel`). Simple dot-only sliders may use a small React-state component like `TestimonialsCarousel`.
  - Inputs filled by JS (qty buttons) -> `defaultValue`.
  - `data-cue` / `data-cues` scroll animations: keep the attributes exactly. The CSS hides them (`opacity:0`) and `ScrollCue` (mounted once in `App.tsx`) reveals them on scroll. Never drop these attributes and never remove `ScrollCue`.
  - Date range pickers (`#dates`, `#date_booking`, easepick) -> the `DateRangePicker` component (loads `common_scripts.js` once via `utils/loadScript`). Reuse it; do not re-implement.
  - Any absolutely positioned overlay (`.opacity-mask`) needs `position: 'relative'` on its parent, which jarallax used to set.
- Links with a hash (`/contact-us.html#enquiry`) -> `<Link to="/contact-us#enquiry">`; `ScrollToHash` in `App.tsx` handles the scroll (and resets to top on navigation).
- Forms: use `onSubmit` with `preventDefault` and controlled/uncontrolled inputs; do not post to PHP.

## Conventions

- One component per file in `src/components/`, `PascalCase.tsx`, `function Name(props) {}` + `export default Name`, matching the existing style (2-space indent, no semicolons, single quotes).
- Props type declared inline above the component (`type Props = {...}`); optional props get defaults via destructuring.
- Dynamic content that changes (lists) goes in a typed data array in the screen or a `src/data/` file when used by more than one screen.
- If the HTML references assets missing from `public/img` / `public/video`, reuse the closest existing image, comment it, and list the missing files in the final report.
- Don't add libraries. Don't touch `src/css` or `src/js` unless asked.
- At the end, tell the user: which components were created, which were reused, and anything not reproducible (missing assets, JS behaviour).
