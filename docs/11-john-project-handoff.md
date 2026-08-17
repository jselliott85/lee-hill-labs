# John / Project Handoff (Background & Glossary)

## Background

Lee Hill Labs is building the Emergency Coordination App (ECA), a trusted-community coordination product for residents before, during, and after disruptive events. It complements official information; it is not an emergency authority and does not tell residents what conclusions or safety actions to take.

John Elliott is the sole founder, operator, and project decision-maker. Randall Fransen is not an active contributor and has no project access. The former investor presentation is paused historical material. The MVP application workspace is `01_app/`; production MVP implementation has not started.

The first test community is one closed, invitation-only Boulder Heights group. MVE-1 is the first validation slice within the MVP. Gate 1 closed on 2026-08-07. Gate 2 now tests external incident-source feasibility and defines notification, liability, safeguard, and closed-pilot constraints before Gate 3 product definition.

## How to orient

- `docs/04-decision-log.md` controls approved decisions and scope.
- `docs/02-product-brief.md` and `docs/03-mvp-requirements.md` control approved product intent and requirements.
- `docs/05-gate-framework.md` controls sequence and gate exit criteria.
- `docs/00-master-roadmap.md` controls task presence, status, priority, and approved task dates.
- `docs/00-current-state.md` is the current summary; `00_project-os/.lhl_ai_context.md` is the live handoff between authorized repository writers.

## Glossary

- **ECA:** Emergency Coordination App, the current working product description; no final product name is approved.
- **MVP:** Minimum viable product, the broader product being defined and built through the six-gate plan.
- **MVE-1:** The first validation slice within the MVP: the approved household-first coordination journey.
- **Gate:** A project decision or validation boundary. A gate closes only when its dependencies and exit criteria are met and John explicitly approves closure.
- **Boulder Heights:** Working name for the first closed pilot community; membership, not a formal geographic boundary, defines the group.
- **Saved property address:** The resident's stored home address used for external-incident relevance in MVE-1. Device location is not a fallback.
- **Sourced incident context:** Attributable external incident information associated with the saved property address. LHL presents the source and limitations without interpreting it as official direction.
- **Push:** A device notification. Unknown or unapproved event/source combinations fail closed to no push.
- **In-app:** Information visible after opening the application; visibility does not imply device-notification eligibility.
- **CAP:** Common Alerting Protocol, a standard format used by authorities to publish alert classifications, geography, timestamps, identifiers, and updates.
- **IPAWS:** FEMA's Integrated Public Alert and Warning System; a candidate CAP source requiring access and Gate 2 evaluation, not an approved MVE-1 provider.
- **GEM:** The read-only Google Workspace support agent. GEM may summarize and propose work but cannot change canonical project records.
- **CC / Cody:** Claude Code and Codex, the repository assistants authorized alongside John to update canonical records under the shared editing protocol.
