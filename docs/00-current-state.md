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
- Sequencing: the approved six-gate framework in `docs/05-gate-framework.md` controls project sequence and gate closure; the roadmap remains authoritative for task status.
- Schedule: G1 and G2 run in parallel from 2026-08-06; G1 closes 2026-08-21 and G2 closes 2026-08-28. G3 closes 2026-09-25, G4 closes 2026-10-16, three G5 slices end 2026-12-18, and the six-week G6 pilot runs 2027-01-05 through 2027-02-13 with go/no-go due 2027-02-20. These are milestones, not a launch date.
- Pilot risk posture: John is willing to proceed toward a closed, personal-invitation neighborhood pilot using an internal safeguards position and founder-approved participation/liability acknowledgment while counsel review continues. This does not authorize public release.
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
- `docs/05-gate-framework.md` — approved six-gate sequencing and exit criteria

## Resume Here

1. Complete the remaining Gate 1 direction work using the working [Gate 1 Closure Session — Decision Packet](https://docs.google.com/document/d/1aUKjE0y1wQtf3XIuifg57YCGALR9qY0qTeP7I8RzemA/edit): finalize the remaining MVE-1 boundaries and explicit deferrals, then approve trust/tone principles. The primary user, first test community, first end-to-end journey, and household-profile scope are approved. Roster presentation remains a Gate 3 design question, and address-validation provider selection remains Gate 4. The Drive packet is preparation only; canonical decisions remain in the repository. `Consolidate Resilience Lifecycle FigJam comments` and `Update FigJam for household-first context and minimal admin role` are both complete as of 2026-08-06.
2. Complete Gate 2 feasibility, liability-position, and closed-pilot participation-language work before approving Gate 3 design.
3. Complete Gate 3 product definition, including acceptance criteria, data/permissions, design tokens, and a provisional working name.
4. Approve Gate 4 technical foundations and identities before scaffolding the Gate 5 implementation.
