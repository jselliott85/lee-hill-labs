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
- GEM: read-only Google Workspace support; it may summarize and propose work but cannot change canonical project records.

## Validation Snapshot

- `npm run build` succeeds.
- `npm run lint` currently fails because `eslint.config.mjs` imports `eslint-config-next`, which is not installed.
- The build warns that `metadataBase` is not set for social-image URLs.
- No automated test suite is configured.

## Active Documentation

- `docs/04-decision-log.md` — approved operating and product decisions
- `docs/02-product-brief.md` — product intent and ownership
- `docs/03-mvp-requirements.md` — approved MVP requirements and unresolved scope
- `docs/00-master-roadmap.md` — canonical execution plan

## Resume Here

1. Approve the initial MVP scope and success criteria in `docs/03-mvp-requirements.md`.
2. Turn approved scope into roadmap tasks in `docs/00-master-roadmap.md`.
3. Resolve the lint configuration before establishing CI.
4. Scaffold the approved first MVP slice in `01_app/`.
