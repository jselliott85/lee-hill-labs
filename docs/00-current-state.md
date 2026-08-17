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
- NIFC's public WFIGS year-to-date and full-history incident-location services also contain the exact 0.1-acre Lefthand record under UFI `2026-COARF-001167` and a stable IRWIN ID. The record reports 2:33:59 p.m. MDT discovery but was not created in IRWIN until 3:51:56 p.m.; with WFIGS's five-minute refresh, this case supports lifecycle and closure enrichment but does not demonstrate sufficiently fast initial detection. The incident had no WFIGS perimeter and is absent from the Current layer after containment/control/out, so any evaluation must use the year-to-date or history layer rather than Current alone.
- The official WFIGS incident and 2026 perimeter items are public, authoritative ArcGIS services with query/extract access and a NIFC no-warranty disclaimer, but the inspected items do not state CC0. WFIGS remains a draft `Candidate / TBD` pending production-use clarification and live latency sampling; no source approval changed.
- A three-case timing comparison now separates four clocks that earlier reasoning had blurred: dispatch discovery, IRWIN record creation, public-information publication, and protective-action alerts. Retrospective WFIGS records show approximately 78 minutes from discovery to IRWIN creation for Lefthand, 86 minutes for the moderate Dinosaur Fire (dispatch name `Green Mountain`), and 71 minutes for evacuation-scale CalWood. This small sample does not show severity compressing IRWIN creation; growth and exposure instead drove additional operational and protective activity through other channels. The finding is research, not an approved source or notification-policy change.
- Dinosaur is the working moderate comparison: 3.5 acres, more than 75 firefighters, two helicopters, a Boulder ODM Advisory, and no residential evacuation order. Its ODM message was 53 minutes after WFIGS discovery by the message label and 63 minutes after discovery by the page-post time—not 10 minutes. CalWood is the evacuation-scale comparison: WFIGS discovery at 12:17 p.m. MDT, IRWIN creation at 1:28:03 p.m., and a Boulder County firsthand timeline placing the first evacuation orders at 1:37 p.m.; IRWIN therefore existed nine minutes before the first reported evacuation order, not nine minutes after it. Official Boulder County pages conflict on whether the first CalWood report was 12:06 or 12:22, so the discrepancy remains explicit rather than silently resolved.
- NWS observations at Boulder Municipal and Vance Brand airports recorded light rain during the Lefthand incident window. They corroborate precipitation in the broader area but do not establish the founder-observed intensity at the saved property. Weather, fire behavior, fuels, resources, and evacuation status remain sourced context; they do not replace the provisional rule that every newly reported fire from a qualifying source is a push candidate only after the saved address matches an approved geographic rule.
- InciWeb had no Lefthand page and depends on an agency or assigned incident team initiating and maintaining an incident, so it is not eligible as a systematic MVE-1 new-fire trigger. NASA FIRMS likewise produced no S-NPP, NOAA-20, or NOAA-21 VIIRS detection in the tight Lefthand area during Aug. 14–15 and is retained only as additional corroborating information, not a notification origin.
- Boulder ODM is now treated as a selective protective-alert and public-information candidate, not an exhaustive all-fire discovery feed. Its public ArcGIS layers were empty for Lefthand, while its Dinosaur and CalWood pages carried material local incident or protective information; therefore an empty ODM layer means no ODM-published event, not that no incident exists. The matrix row's notification eligibility is `TBD`, pending redistribution permission, completeness, stable identity, freshness, and lifecycle evidence. Boulder County Communications CAD remains authoritative but has no public live machine interface found. Watch Duty's public terms do not support direct MVE-1 integration.
- Structured resident incident reporting and a historical incident log are deferred to Post-G6 discovery and do not change MVE-1 scope.

## Resume Here

1. Continue the [Gate 2 Kickoff — Constraints and Research Packet](https://docs.google.com/document/d/1WxC3eztHIbslJbgwaxxmq-f2hefXhJtOdSLqM5IeiPo/edit) and [incident-notification eligibility matrix](https://docs.google.com/spreadsheets/d/1YjSBUpjJr9_YEPLnWssiF8ZB7Qw6pOIyL8SWgCK-gcA/edit). First handle the urgent WildWeb/WildCAD-E inquiry: To `concc@firenet.gov`; CC `jaymee_fojtik@ios.doi.gov` and `kara_stringer@ios.doi.gov`; Claude drafts in John's voice, then John reviews and sends. Its purpose is to clarify permission and operating terms for polling, commercial storage/redistribution, attribution, rate limits, endpoint support, and timestamp/update/correction/cancellation/closure semantics. Then resolve the point-fire geography rule and design a bounded WFIGS live-latency sample before any new-fire notification approval.
2. Complete Gate 3 product definition, including acceptance criteria, data/permissions, design tokens, and a provisional working name.
3. Approve Gate 4 technical foundations and identities before scaffolding the Gate 5 implementation.
4. Every status review must also cover active Ops and non-gate milestones, plus approaching backlog-review triggers; gate focus does not replace operational tracking.
