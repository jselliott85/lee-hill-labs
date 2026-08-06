# Decision Log — LHL App

This is the source of truth for approved operating and product decisions. Add new entries; do not silently revise a past decision. A later decision may supersede an earlier one when it says so explicitly.

## 2026-08-04 — Ownership and Contributor Access

- John Elliott is LHL's sole founder, operator, and project decision-maker.
- Randall Fransen is no longer an active LHL contributor and does not have project access.
- Randall may be consulted in a limited advisory capacity only at John's discretion.
- This entry records the current operating policy; it does not revise historical records of prior collaboration.

## 2026-08-04 — Product Priority and Presentation Status

- Development of the Emergency Coordination App (ECA) is LHL's highest priority.
- The investor presentation and all work under `public/presentation/` are paused indefinitely.
- Preserve presentation assets and historical records, but do not modify, extend, or prioritize them unless John explicitly reopens that work.

## 2026-08-04 — Roadmap System of Record and GEM Role

- `docs/00-master-roadmap.md` is LHL's sole canonical task tracker.
- The former Google Sheet is retired as a task tracker. Its source workbook is retained outside Git as a personal backup and is not maintained as a competing record.
- Claude and Codex maintain approved roadmap updates in Git.
- GEM is a read-only supporting agent: it may summarize Google Workspace material and propose tasks, but may not create, edit, or change the status of canonical roadmap or project records.

## 2026-08-04 — Resilience Lifecycle Terminology

- Ready, Alert, Active Incident, and Recovery are the canonical names for LHL's four resilience lifecycle phases.
- These names supersede earlier phase labels throughout requirements, roadmap planning, design references, and future implementation copy.
- This terminology change does not alter the approved decision that all four lifecycle phases are part of MVP scope.
- MVE-1 is the first validation slice within MVP scope. It covers the approved lifecycle flows across all four phases and is not a post-MVP expansion.

## 2026-08-04 — Product Design Before Technical Architecture

- Approve user flows, low-fidelity screens, and reusable cross-platform design rules before approving providers or beginning production application code.
- Technical architecture decisions are separate gates for backend, authentication, notifications, maps/external data, offline/secure storage, and mobile build delivery.
- Each technical gate closes only when its own approved decision is recorded in this log.

## 2026-08-04 — Asana Retirement

- Asana is retired as an LHL task tracker following the completed data rescue and communications decommission.
- Historical Asana exports may be used as reference material, but they do not outrank or modify the canonical Git-tracked roadmap.
- `docs/00-master-roadmap.md` remains the sole canonical task tracker.

## 2026-08-04 — Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger

- Individual household hazard/evacuation status is automated wherever a reliable, confirmed-accessible open feed exists (NOAA/NWS CAP first); it is not gated behind a single admin-declared community phase.
- The four lifecycle phase labels (Ready, Alert, Active Incident, Recovery) remain the shared, admin-curated community narrative layer; they no longer represent the sole source of a member's actual safety status.
- MVE-1 scope: automate only against confirmed-accessible sources. Watch Duty draws on multiple sources; WildCAD or another upstream primary source requires research before integration. Watch Duty and county-vendor evacuation systems (e.g., reverse-911 platforms) are not integrated without confirmed API access or a partnership; unavailable feeds fall back to admin- or self-reported status.
- This supersedes the open question in "2026-07-23 — Full 4-Phase Resilience Lifecycle MVP Scope" regarding what triggers a phase shift and who holds that authority.
- Full detail, open questions, and source: `docs/functionality-decision-log.md`, "2026-08-04 - Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger."

## 2026-08-04 — Preparedness Checklist Removed from MVE-1 Scope

- The structured preparedness-checklist flow (item tracking, readiness counter) is removed from MVE-1/MVP entirely, not deferred-in-place.
- Supersedes the flow list in "2026-08-04 — Resilience Lifecycle Terminology" / MVE-1 Is the First MVP Validation Slice: MVE-1 now covers five flows, not six.
- A future, separate concept — admin-uploaded reference documents/checklists with no app-tracked completion state — is logged in `docs/future-roadmap-backlog.md` as a post-MVE-1/post-MVP idea pending feedback.
- Full detail and source: `docs/functionality-decision-log.md`, "2026-08-04 - Preparedness Checklist Removed from MVE-1 Scope."

## 2026-08-06 — Six-Gate MVE-1 Sequencing Framework

- John approved the six-gate framework in `docs/05-gate-framework.md` in full.
- The gates are: G1 Direction set, G2 Constraints confirmed, G3 Product defined, G4 Architecture approved, G5 MVE-1 built, and G6 Pilot validated. Post-G6 and Ops classify work outside the product gate sequence.
- Gates are sequential for closure, not for starting work. Each gate closes only when its exit criteria are met and John explicitly approves closure.
- G2 constraint research must close before G3 approval; G3 scope and acceptance criteria must close before G4 approval; G4 must close before production application code begins; the pilot test plan must exist before G5 closes.
- Scope freezes at G3. Later scope changes require a superseding decision-log entry.
- No gate closes on an external party's action. John-authored and John-approved positions close internal gates while outside review proceeds on a parallel track; formal counsel sign-off remains required before public release.
- Trust and tone are set at G1, the token-based UI kit and provisional working product name at G3, store and bundle identity at G4, and final name and brand identity at G6 or later.
- This decision supersedes the earlier sequencing implied by "2026-08-04 — Product Design Before Technical Architecture" where the approved gate framework is more specific. The six technical-foundation decisions remain required.

## 2026-08-06 — Gate-Framework Founder Decisions

- John will select the Gate 3 provisional working product name. Pilot participants will not be asked to evaluate names; the pilot remains focused on the coordination model.
- John approves proceeding toward a closed, personal-invitation neighborhood pilot using a documented internal liability/safeguards position and founder-approved pilot participation/liability acknowledgment while counsel review continues in parallel.
- This internal position does not constitute legal advice, formal counsel sign-off, or authorization for public release. Formal counsel sign-off remains required before public release, and any legal draft remains subject to counsel review.
- The post-incorporation documents were sent to Cara O'Brien on 2026-07-14. John will reassess the legal-resource approach on 2026-08-31.
- John and Claude are exploring a simplified request to Cara and whether compensation or equity would improve turnaround. No compensation, equity, or roadmap action is approved by this entry.

## 2026-08-06 — Six-Gate Schedule Baseline

- John approved the schedule baseline recorded in `docs/05-gate-framework.md` and `docs/00-master-roadmap.md`.
- G1 and G2 start together on 2026-08-06. G1 closes 2026-08-21; G2 closes 2026-08-28. G2 is parallel constraint work and does not depend on G1 closure.
- G3 runs 2026-09-01 through 2026-09-25. G4 runs 2026-09-29 through 2026-10-16, followed by a 2026-10-19 through 2026-10-23 buffer.
- G5 is divided into three build slices: 2026-10-26 through 2026-11-13, 2026-11-16 through 2026-12-04, and 2026-12-07 through 2026-12-18. Slice boundaries are defined at G3 closure.
- The pilot test plan is due 2026-11-20. Following a 2026-12-21 through 2027-01-02 holiday blackout, the six-week pilot runs 2027-01-05 through 2027-02-13, with the go/no-go decision due 2027-02-20.
- The pilot plan must define success and course-change thresholds before execution. The go/no-go decision must state which observed results support continuation, revision, another pilot, or stopping.
- These dates are milestone targets, not a public launch date.

## Product Decisions

The detailed functional product rules are maintained in `docs/functionality-decision-log.md`. The following entries are currently controlling:

- 2026-07-23 — Temporal Access Control Layer for Household Profiles
- 2026-07-23 — Full 4-Phase Resilience Lifecycle MVP Scope
- 2026-07-23 — Stale Data Connection Logic & Peer Presence
- 2026-08-04 — Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger
- 2026-08-04 — Preparedness Checklist Removed from MVE-1 Scope
