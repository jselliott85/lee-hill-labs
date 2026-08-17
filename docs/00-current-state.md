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
- Schedule: the approved baseline targeted G1 for 2026-08-06 through 2026-08-21, but John approved its early completion on 2026-08-07 after its dependencies and exit criteria were met. G2 remains targeted to close 2026-08-28. G3 closes 2026-09-25, G4 closes 2026-10-16, three G5 slices end 2026-12-18, and the six-week G6 pilot runs 2027-01-05 through 2027-02-13 with go/no-go due 2027-02-20. These are milestones, not a launch date.
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
- **Roadmap target outputs:** Both archived Gate 1 rows have their stated artifacts recorded. The `Define initial MVP scope and success criteria` task name retains legacy wording, but its approved target output and the gate framework explicitly route success and acceptance criteria to Gate 3.
- **Closure authority:** Met. John explicitly confirmed Gate 1 closure on 2026-08-07; both Gate 1 roadmap rows are Complete and archived.
- **Additional consistency pass:** Complete. CC synchronized the Resilience Lifecycle FigJam board with the 2026-08-07 boundary and trust/tone decisions on 2026-08-07 (see `00_project-os/.lhl_ai_context.md` for the node-level record). John then confirmed Gate 1 closure; no Gate 1 closure action remains pending.

## Gate 2 Working Snapshot

- The Lefthand-fire review established founder-approved provisional matrix rules, recorded in `docs/04-decision-log.md`. Incident eligibility remains individual and saved-address-specific, never community-wide.
- Formal warning-level products are the working push baseline; lower formal products are in-app unless a specific event/source row justifies push. Verified-source new fires may qualify regardless of small initial acreage when the resident's approved geographic rule matches.
- Source polygons, zones, and address designations are preferred. Gate 2 must define incident-specific radius/polygon treatment for an eligible fire source that supplies only an approximate point.
- Watch Duty is a trusted secondary aggregator, not a primary authority, and remains subject to licensing, access, attribution, freshness, identity, and lifecycle evidence before notification eligibility can be approved.
- The first Lefthand stress-test batch is now in the Gate 2 matrix. NWS CAP is mapped for approved weather rows; its address-point query excluded the unrelated 2:59 p.m. Denver-area Special Weather Statement returned by the broader Boulder County query. The FEMA IPAWS archive contained no Boulder-area incident record.
- Northern Colorado's officially linked WildWeb/WildCAD-E public view contained incident 1167, `Lefthand Canyon`, at 0.1 acre with same-day point and status data. It is the strongest discovered new-fire source candidate, but remains fail-closed for notification use until written redistribution permission plus timestamp, polling/freshness, update, correction, and closure semantics are verified.
- The Boulder ODM public ArcGIS incident layers were empty and did not evidence the small fire; Boulder County Communications CAD remains authoritative but has no public live machine interface found. Watch Duty's public terms do not support direct MVE-1 integration.
- Structured resident incident reporting and a historical incident log are deferred to Post-G6 discovery and do not change MVE-1 scope.

## Resume Here

1. Continue the [Gate 2 Kickoff — Constraints and Research Packet](https://docs.google.com/document/d/1WxC3eztHIbslJbgwaxxmq-f2hefXhJtOdSLqM5IeiPo/edit) and [incident-notification eligibility matrix](https://docs.google.com/spreadsheets/d/1YjSBUpjJr9_YEPLnWssiF8ZB7Qw6pOIyL8SWgCK-gcA/edit). Review the populated Lefthand batch, then resolve the point-fire geography rule and pursue WildWeb/WildCAD-E access, timestamp, freshness, update, correction, and closure evidence before any new-fire notification approval.
2. Complete Gate 3 product definition, including acceptance criteria, data/permissions, design tokens, and a provisional working name.
3. Approve Gate 4 technical foundations and identities before scaffolding the Gate 5 implementation.
4. Every status review must also cover active Ops and non-gate milestones, plus approaching backlog-review triggers; gate focus does not replace operational tracking.
