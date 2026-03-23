# Technical Spec

**Title**: Flat Aesthetic Redesign (Render-inspired) - Technical Spec
**Author**: Chukwuemelie Jason Obumse | **Status**: Draft | **Date**: 2026-03-23

---

## Overview

**Product Context**: Apply a flat, border-driven visual aesthetic (inspired by Render.com) to the portfolio's landing page and impact stories page — sharp rectangular corners, subtle grid-line background textures in hero sections, and borders as structural separators instead of shadows.

**Technical Approach**: Set the global CSS radius variable to `0px` and flatten all derived theme radius values. Remove hard-coded `rounded-*` Tailwind classes from specific components. Add a `.grid-bg` CSS utility using a gradient-based repeating grid pattern. Preserve all existing colors, fonts, animations, and spacing.

**Key Technologies**: Next.js 14, TailwindCSS v4, CSS custom properties (`@theme inline`), Framer Motion, `color-mix()` CSS function.

---

## Goals & Non-Goals

**Goals**:
- Zero border-radius on all UI elements on the landing page and impact stories page
- Subtle repeating grid background visible in hero sections (adapts to light/dark mode via `var(--border)`)
- Header floating pill becomes a flat rectangle (no rounded corners)
- Flat impact story cards: no `hover:shadow-lg`, rely on `border-border` for definition
- No regressions: page layout, colors, fonts, animations, and responsiveness unchanged
- No TypeScript or lint errors introduced

**Non-Goals**:
- Redesigning the color palette or typography
- Changing the design of the footer, blog cards, project cards, or sticky widgets
- Adding grid lines to sections other than the hero sections
- Modifying pages other than `index.tsx` and `impact-stories.tsx`
- Changing the navigation structure or content

---

## Current System

**Existing Architecture**:
- Design tokens defined as CSS custom properties in `src/styles/globals.css` under `:root` and `.dark`
- Tailwind v4 consumes theme tokens via the `@theme inline` block — custom `--radius-*` values control the output of `rounded-sm/md/lg/xl` utilities
- Standard Tailwind utilities (`rounded-2xl`, `rounded-full`) use fixed pixel values independent of CSS variables

**Limitations**:
- `--radius: 0.7rem` produces rounded corners globally; currently cannot be toggled per-page without class overrides
- `rounded-2xl` and `rounded-full` are hard-coded in specific components and are not affected by the `--radius` CSS variable
- No grid background utility exists in the current design system

**What We'll Leverage**:
- The `@theme inline` block in `globals.css` to drive rounded-utility flattening globally with a single variable change
- The existing `var(--border)` CSS variable for grid line color — ensures grid adapts automatically to both light and dark modes without additional variables
- The `color-mix()` CSS function (supported in all modern browsers) to produce semi-transparent grid lines from the border color

---

## Proposed Architecture

### Component Dependency Map

```
globals.css (--radius: 0px, @theme inline, .grid-bg)
    │
    ├── header.tsx          → remove rounded-2xl
    ├── ui/card.tsx         → rounded-xl resolves via --radius-xl (0px) ✓ automatic
    ├── impact-story-card.tsx → remove hover:shadow-lg
    ├── pages/index.tsx     → add grid-bg to hero; remove rounded-full, rounded-2xl, shadow-sm, hover:shadow-lg from About section
    └── pages/impact-stories.tsx → add grid-bg to hero; remove rounded-full from quick-nav buttons
```

### Component Change Summary

| File | Change | Why |
|---|---|---|
| `globals.css` | `--radius: 0px`; flatten `@theme inline` radius values; add `.grid-bg` | Central design token change + new utility |
| `header.tsx` | Remove `rounded-2xl` | Fixed Tailwind class not affected by CSS variable |
| `impact-story-card.tsx` | Remove `hover:shadow-lg` | Flat design relies on borders, not shadow depth |
| `pages/index.tsx` | Add `grid-bg` to hero section; remove `rounded-full`, `rounded-2xl`, `shadow-sm`, `hover:shadow-lg` from About section | Fixed classes + grid texture |
| `pages/impact-stories.tsx` | Add `grid-bg` to hero section; remove `rounded-full` from quick-nav anchors | Fixed classes + grid texture |

---

## Architecture Decisions

### Decision 1: Global radius change vs. per-page overrides

**Decision**: Set `--radius: 0px` globally rather than adding per-page `[&>*]:rounded-none` overrides.

**Options**:
- **Global CSS variable (chosen)**: One change in `globals.css`; all themed `rounded-*` utilities resolve to 0 everywhere. Clean, minimal diff.
- **Per-component `rounded-none`**: Add `rounded-none` to every card, button, and container individually. More verbose, error-prone, harder to revert.
- **Page-level CSS scope**: Wrap page content in a class that resets radius. Adds nesting complexity and doesn't help with fixed Tailwind utilities.

**Choice**: Global CSS variable — minimal code change, consistent result.

**Trade-offs**: The radius change affects all pages/components (blog cards, project cards, etc.) even though only two pages were specified. This is acceptable because the entire site benefits from visual consistency and no other pages exist beyond Home and Impact Stories.

---

### Decision 2: Grid background implementation

**Decision**: CSS `background-image` gradient approach using `color-mix()`.

**Options**:
- **CSS gradient grid (chosen)**: Two `linear-gradient` layers at right angles, `background-size: 80px 80px`. Pure CSS, zero JS, adapts to theme via `var(--border)`.
- **SVG background pattern**: More flexible but adds an asset file or base64 inline blob.
- **Canvas/JS-generated grid**: Overkill; adds runtime cost and complexity.

**Choice**: CSS gradient. Simplest, fastest, and uses existing design tokens.

**Trade-offs**: `color-mix()` requires a modern browser (Chrome 111+, Firefox 113+, Safari 16.2+). This is acceptable for a personal portfolio targeting technical audiences.

---

### Decision 3: Handling `rounded-2xl` and `rounded-full` (fixed Tailwind utilities)

**Decision**: Remove the classes entirely (not replace with `rounded-none`).

**Rationale**: If `--radius: 0px` is the global intent, adding `rounded-none` is redundant. Removing the class produces the same zero-radius result while keeping the code cleaner. This was explicitly confirmed by the author.

---

## Testing

**Manual Visual Checks**:
- `npm run dev` → inspect Home page and Impact Stories page at desktop, tablet, and mobile widths
- Verify hero sections show subtle grid lines in both light and dark mode
- Verify all cards, buttons, and the header have zero rounded corners
- Verify About Me section has no shadow (flat border only)
- Verify animations (fadeIn, Framer Motion) still run correctly
- Toggle theme (light/dark/system) — no color regressions

**Regression Checks**:
- Other pages (none beyond Home and Impact Stories) unaffected
- Footer layout unchanged
- Blog cards, project cards, sticky widgets unchanged
- No console errors or React warnings
- No TypeScript errors (`npm run build` or `tsc --noEmit`)

---

## Implementation Plan

### Phase 1: Design System Update
**Goal**: Set global flat radius and add grid-bg utility

**Tasks**:
- Set `--radius: 0px` in `:root` in `globals.css`
- Override all `--radius-*` derived values in `@theme inline` to `0px`
- Add `.grid-bg` utility class with gradient grid pattern

**Acceptance Criteria**: All `rounded-lg/xl/sm/md` Tailwind utilities produce 0px borders across the app

---

### Phase 2: Component Cleanup
**Goal**: Remove hard-coded rounded classes from specific components

**Tasks**:
- `header.tsx`: remove `rounded-2xl`
- `impact-story-card.tsx`: remove `hover:shadow-lg`

**Acceptance Criteria**: Header is a flat rectangle; impact story cards have no shadow on hover

---

### Phase 3: Page Updates
**Goal**: Apply grid background and flatten remaining About section styling

**Tasks**:
- `pages/index.tsx`:
  - Add `grid-bg` to hero `<section>`
  - Remove `rounded-full` from vertical timeline bar in About section
  - Remove `rounded-2xl`, `shadow-sm`, `hover:shadow-lg` from About card
- `pages/impact-stories.tsx`:
  - Add `grid-bg` to hero `<section>`
  - Remove `rounded-full` from all quick-nav anchor elements

**Acceptance Criteria**: Hero sections show grid; About card and impact stories nav buttons are flat rectangles

---

## Dependencies & Risks

**Technical Risks**:

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| `color-mix()` not supported in very old browsers | Grid lines invisible | Low (portfolio targets tech audience) | Graceful degradation — page still readable, just no grid |
| Negative computed radius values (`--radius-sm: calc(0px - 4px)`) causing unexpected rendering | Visual glitch | Medium | Explicitly set all `--radius-*` to `0px` in `@theme inline` rather than relying on `calc()` |
| Removing `shadow-sm` from About card makes it visually indistinct | Poor UX | Low | Card still has `border border-border` which provides clear visual separation |

---

## Documentation

- [x] Implementation plan above covers all files and changes
- [ ] Commit message should reference the Render-inspired flat aesthetic
