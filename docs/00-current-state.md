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
- Domain: `leehilllabs.com` is transferred to John's GoDaddy account and publicly live. The acquisition task completed on 2026-08-07; a separate low-priority Ops task tracks reconciliation of stale public copy, including the unsupported "escape route sharing" claim.

## Validation Snapshot

- `npm run build` succeeds.
- `npm run lint` succeeds with no warnings or errors after installing the Next.js-matched ESLint preset and its ESLint 9 compatibility adapter.
- The build warns that `metadataBase` is not set for social-image URLs.
- The latest dependency installation reported four audit findings (three high, one critical); these have not yet been assessed or remediated.
- No automated test suite is configured.

## Active Documentation

- `docs/04-decision-log.md` — approved operating and product decisions
- `docs/functionality-decision-log.md` — detailed functional product rules, including later entries that supersede the 2026-08-04 shared-phase model
- `docs/02-product-brief.md` — product intent and ownership
- `docs/03-mvp-requirements.md` — approved MVP requirements and unresolved scope
- `docs/00-master-roadmap.md` — canonical execution plan
- `docs/05-gate-framework.md` — approved six-gate sequencing and exit criteria

## Gate 1 Validation Snapshot

- **Primary user and first test community:** Met in `docs/03-mvp-requirements.md`.
- **First end-to-end journey:** Met in `docs/03-mvp-requirements.md`.
- **MVE-1 boundaries and explicit deferrals:** Met in `docs/03-mvp-requirements.md`, including the consolidated `Explicit MVE-1 Deferrals and Exclusions` inventory.
- **Trust and tone:** Met in `docs/03-mvp-requirements.md` and recorded in `docs/04-decision-log.md`.
- **Open Resilience Lifecycle FigJam comments:** Met; all 19 were resolved and the roadmap task was archived on 2026-08-06.
- **Roadmap target outputs:** Both active Gate 1 rows have their stated artifacts recorded. The `Define initial MVP scope and success criteria` task name retains legacy wording, but its approved target output and the gate framework explicitly route success and acceptance criteria to Gate 3.
- **Closure authority:** Met. John explicitly confirmed Gate 1 closure on 2026-08-07; both Gate 1 roadmap rows are Complete and archived.
- **Additional consistency pass:** Complete. CC synchronized the Resilience Lifecycle FigJam board with the 2026-08-07 boundary and trust/tone decisions on 2026-08-07 (see `00_project-os/.lhl_ai_context.md` for the node-level record). Gate 1 is otherwise unblocked pending John's closure confirmation.

## Resume Here

1. Gate 1 closed on 2026-08-07. On John's return, begin with the [Gate 2 Kickoff — Constraints and Research Packet](https://docs.google.com/document/d/1WxC3eztHIbslJbgwaxxmq-f2hefXhJtOdSLqM5IeiPo/edit) and the linked incident-notification eligibility matrix. The Gate 2 framework and roadmap are already reconciled to the broader event/source mandate approved at Gate 1; begin with event taxonomy and the first bounded source-research batch.
2. Complete Gate 3 product definition, including acceptance criteria, data/permissions, design tokens, and a provisional working name.
3. Approve Gate 4 technical foundations and identities before scaffolding the Gate 5 implementation.
4. Every status review must also cover active Ops and non-gate milestones, plus approaching backlog-review triggers; gate focus does not replace operational tracking.
