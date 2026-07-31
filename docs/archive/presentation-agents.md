# Archived — Presentation / Pitch Deck Operating Rules

Status: PAUSED as of 2026-07-31. Not active work. Revisit after LHL App MVP exists. Consolidated from the former root `AGENTS.md`, `CLAUDE.md`, and the presentation-related portion of `gem-framework.md` so nothing is lost and nothing is duplicated across files anymore.

## Project Goal

Build a standalone presentation project for Lee Hill Labs. Keep the technical foundation stable while content/visual direction is developed.

## Rules

- Keep the repo deployable at all times.
- Keep edits small and reviewable.
- Do not add dependencies unless clearly justified.
- Preserve the static presentation architecture unless the task explicitly changes it.
- Keep visual assets in `public/assets/`.
- Keep presentation shell files in `public/presentation/`.
- Call out assumptions instead of silently making them.

## Frontend Expectations

- Strong hierarchy, clean alignment, intentional responsive behavior.
- Slides are 16:9 and scale proportionally in-browser.
- Preserve the Wrenching 101 interaction model: same index/password page pattern, same animated blob/grain background behavior, same deck navigation rhythm.
- Grain backgrounds: use only the locked `Original MTTL Grain Background` or `Presentation Grain Background` presets in `docs/grain-background-presets.md`. Palette swaps may change hex colors only — not motion or texture — unless explicitly instructed otherwise.
- Use the Lee Hill Labs swatch palette in `docs/design-system.md`.
- Typography: Gotham throughout — Black/Heavy for headlines, Medium for subheads/markers, Light/Regular for body copy.
- Avoid in-slide instructional text about controls or implementation details.
- Verify mobile and desktop behavior before calling presentation work complete.

## Technical Boundaries

- Main deck file: `public/presentation/slides.html`
- Slide styling: `public/presentation/css/slides.css`
- Shared deck tokens: `public/presentation/css/base.css`
- Deck behavior: `public/presentation/js/slides.js`
- Gate page: `public/presentation/index.html`
- Gate behavior: `public/presentation/js/gate.js`

## Output

At the end of a deck work session:

- Summarize files changed.
- Note risks or regressions.
- Update `docs/current-state.md` and `docs/handoff.md` if this project is reopened.
