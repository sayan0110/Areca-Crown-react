---
name: hotel-content-update
description: Apply a client website-content document (PDF/DOCX with per-page Small Tag / Heading / Description / CTA / SEO blocks) to the Areca Crown Hariyali React project. Use when the user shares or updates a content guide and wants every page's text, meta tags, FAQs and contact details replaced to match it.
---

# Content guide -> React project

Project: Vite + React + TS. Content lives in `src/screens/*.tsx` (page copy, FAQs, SEO), `src/data/*.ts` (shared lists), and component prop defaults (Header, Footer, Hero, BookingSection, EnquirySection, ContactForm). Layout/CSS stays untouched; this skill only changes text and the minimum props/markup needed to hold it.

## Workflow

1. **Read the whole document first** (PDF: every page, text and screenshots). Build a per-page list: Banner, intro, sections, FAQs, final CTA, SEO block (Meta Title, Meta Description, Suggested URL).
2. **Inventory the code**: `src/routes.tsx` (URL per page), each screen, `src/components` props. Reuse existing components; add optional props rather than new components (see the html-to-react skill for conventions).
3. **Replace text verbatim.** Keep the document's wording, punctuation and numbers (tariffs, phones, hours, room counts). Tags in the doc are ALL CAPS; write them in sentence case in code (CSS uppercases them), keeping `•` separators.
4. **Section -> component map** (current project):
   - Banner -> `PageHero` (`eyebrow`, `title`=H1, `text`, optional `cta={{label,to}}`); Home banner -> `Hero` (title is the H1, has text, 2 CTAs and the booking strip).
   - Text + image blocks -> `StoryBlock` / `AboutIntro` / `LocalAmenity`; centred text -> `CenteredTextSection`.
   - Card grids (facilities, inclusions, experiences, itinerary, name meaning) -> `Facilities` (`eyebrow`, `heading`, `text`, items `{icon,title,text}`, `columnClass`).
   - Room rows -> `RoomListItem`; room detail pages -> `RoomDetail`, driven by `src/data/rooms.ts`.
   - FAQs -> `FaqSection` (`{question, answer}[]`); final CTA -> `EnquirySection` (page-specific eyebrow/heading/text) or `BookingSection` (Home/Contact).
5. **SEO**: every screen calls `usePageMeta(title, description)` (`src/utils/usePageMeta.ts`) with the doc's Meta Title/Description. URLs must match `routes.tsx`. One H1 per page. `index.html` keeps `noindex` until the doc says the site is ready to index.
6. **Shared details**: phones, WhatsApp number, email, address and check-in/out times appear in Footer, Contacts, EnquirySection, ContactForm, Restaurant, Rooms FAQ and BookingSection. Update them together so they stay identical.
7. **Remove template leftovers** the doc doesn't include (lorem ipsum, "Paradise Hotel", `$` prices, testimonials, news, marquee, fake pagination). Never invent reviews, menu items, distances, coordinates, social links or room features.
8. **Honour the document's editorial notes** (usually its last pages): don't call tariffs "per night", don't promise sightings or included activities, keep placeholder images labelled illustrative, no map pin until supplied.
9. **Internal-facing wording** in visitor copy (e.g. "client-listed") -> use the visitor-facing equivalent ("listed") and tell the user.
10. **Sections that exist only in screenshots** (no text supplied): keep the existing copy and say so in the report.
11. Verify with `npx tsc -b` and `npm run lint`. For layout changes, screenshot with `google-chrome --headless=new --screenshot` against `npx vite --port 5199` (hero sections are viewport-tall, so don't use a very tall window). Stop the server by PID, not `pkill -f` (it can kill your own shell).

## Report back

List pages changed, components given new props, components now unused (`RoomCategories`, `RoomCategoryCard`, `RoomsCarousel`, `HeroCarousel`, `TestimonialsCarousel`, `NewsSection`, `Marquee`), copy kept because the doc had no text, wording deviations, and assets still missing (real property photos/video).
