# Current State — LHL App

## Status

LHL is in MVP definition and foundation-planning mode. The priority is the Emergency Coordination App (ECA), a community emergency-coordination product. No production MVP application code has been started yet.

John Elliott is the sole founder, operator, and project decision-maker. Randall Fransen is not an active project contributor and has no project access; he may be consulted in a limited advisory capacity only at John's discretion. See `docs/04-decision-log.md` for the approved operating decision.

The former investor presentation is retained in `public/presentation/` as a paused historical asset. It is not active scope and must not be modified unless John explicitly reopens it.

## Technical State

- Framework: Next.js App Router, TypeScript, npm
- Active implementation: public landing page at `/`
- MVP application workspace: `01_app/` (empty; foundation work has not started)
- Backend, authentication, notifications, and map/data provider: not selected
- Legacy presentation: static HTML/CSS/JS under `public/presentation/` (paused)
- Repository: `main` tracks `origin/main`; the configured remote is `https://github.com/jselliott85/lee-hill-labs.git`
- Roadmap: `docs/00-master-roadmap.md` is the sole canonical tracker; the former Google Sheet is retired and retained only as an external personal backup.
- Asana: retired as a task tracker; exports are historical reference only.
- GEM: read-only Google Workspace support; it may summarize and propose work but cannot change canonical project records.

## Validation Snapshot

- `npm run build` succeeds.
- `npm run lint` succeeds with no warnings or errors after installing the Next.js-matched ESLint preset and its ESLint 9 compatibility adapter.
- The build warns that `metadataBase` is not set for social-image URLs.
- The latest dependency installation reported four audit findings (three high, one critical); these have not yet been assessed or remediated.
- No automated test suite is configured.

## Active Documentation

- `docs/04-decision-log.md` — approved operating and product decisions
- `docs/functionality-decision-log.md` — detailed functional product rules, including the 2026-08-04 per-household automated hazard status decision
- `docs/02-product-brief.md` — product intent and ownership
- `docs/03-mvp-requirements.md` — approved MVP requirements and unresolved scope
- `docs/00-master-roadmap.md` — canonical execution plan

## Resume Here

1. Approve the initial MVP scope and success criteria in `docs/03-mvp-requirements.md`.
2. Reconcile open Resilience Lifecycle FigJam comments — in progress, 5 of 19 resolved as of 2026-08-04 (2 more ready for John to resolve in Figma: nodes 3:137, 3:64 — checklist removal is fully closed out in docs and on the board). Remaining comments, grouped by theme: claim/close request-lifecycle correction (3:132, plus two related open questions on when/how a request closes), location-tracking/privacy (3:255), added design-process scope (3:282), and standalone open product questions (3:70, 3:34, 3:58, 3:195, 3:67). Full detail in `00_project-os/.lhl_ai_context.md`.
3. Finish and approve MVE-1 user flows, low-fidelity screens, and cross-platform component rules.
4. Approve each technical-foundation decision gate.
5. Choose the production mobile-app repository name, then scaffold the approved MVE-1 slice.
