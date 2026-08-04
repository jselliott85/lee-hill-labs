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

## Product Decisions

The detailed functional product rules are maintained in `docs/functionality-decision-log.md`. The following entries are currently controlling:

- 2026-07-23 — Temporal Access Control Layer for Household Profiles
- 2026-07-23 — Full 4-Phase Resilience Lifecycle MVP Scope
- 2026-07-23 — Stale Data Connection Logic & Peer Presence
