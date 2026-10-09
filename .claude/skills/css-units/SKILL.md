---
name: css-units
description: Unit rules for any CSS added or edited in src/css/style.css (or any project stylesheet). Use whenever writing or changing CSS, including new component styles, so sizes use rem/vh/vw instead of px.
---

# CSS unit rules

Applies to every change made in `src/css/style.css` (and any other project stylesheet).

1. **No `px` values**, except border widths (`border: 1px solid ...`, `border-width`, `outline-width`).
2. **Main section width/height**: use `vh` / `vw` (and `%` where it is relative to the parent).
3. **Everything else uses `rem`** (1rem = 16px): image width/height, margin, padding, gap, font-size, border-radius, top/left/right/bottom offsets, min/max sizes, box-shadow offsets and blur, letter-spacing.
4. Convert as px / 16. Round to a readable value (e.g. 30px -> 1.875rem, 15px -> 0.9375rem, 420px -> 26.25rem).
5. Media query breakpoints stay in `px` (they are screen widths, not sizes). Do not change existing breakpoints.
6. Only convert CSS you add or edit. Do not mass-convert untouched template rules, since that changes the layout the user did not ask to change.
7. Do not undo values the user has already set by hand (for example `.room_showcase__image` height).
