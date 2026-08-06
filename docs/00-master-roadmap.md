# Master Roadmap — LHL App

This file is the sole canonical task tracker for LHL. It is maintained in Git so John, Claude, and Codex share one reviewable record. The former Google Sheet is retired as a tracker; its source workbook remains outside this repository as a personal backup.

Use the exact task name when reporting progress or blockers. Active and backlog dates are approved targets unless labeled `Not set`, `Not recorded`, or `Not separately scheduled`; dates in the archive are historical completion dates. `docs/05-gate-framework.md` controls sequencing and gate exit criteria, while this roadmap controls task status.

Before marking any task Complete, verify its Target Output and ask John for explicit confirmation. Once confirmed, never delete the row: set Status to `Complete`, replace Due Date with `Historical: YYYY-MM-DD` using the actual completion date, and move the full row to Archive. Do not strikethrough task names; Archive placement is the completion indicator. Routine completion/archive moves do not require a changelog entry; material scope, priority, schedule, or task-structure changes still do.

## Approved Schedule Baseline

| Phase | Start | End |
| --- | --- | --- |
| G1 direction set | 2026-08-06 | 2026-08-21 |
| G2 constraints confirmed | 2026-08-06 | 2026-08-28 |
| G3 product defined | 2026-09-01 | 2026-09-25 |
| G4 architecture approved | 2026-09-29 | 2026-10-16 |
| Buffer | 2026-10-19 | 2026-10-23 |
| G5 slice 1 | 2026-10-26 | 2026-11-13 |
| G5 slice 2 | 2026-11-16 | 2026-12-04 |
| G5 slice 3 | 2026-12-07 | 2026-12-18 |
| Pilot test plan | Not separately scheduled | 2026-11-20 |
| Holiday blackout | 2026-12-21 | 2027-01-02 |
| G6 pilot execution | 2027-01-05 | 2027-02-13 |
| G6 go/no-go | Not separately scheduled | 2027-02-20 |

G1 and G2 run in parallel. Slice boundaries and acceptance criteria for the three G5 build slices are defined at G3 closure. The schedule contains milestone targets, not a public launch date.

## Active

| Gate | Epic | Task Name | Priority | Target Output | Status | Start Date | Due Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| G1 | ECA MVP Foundation | Define initial MVP scope and success criteria | High | Approved primary user, first test community, first end-to-end journey, MVE-1 boundaries, all four lifecycle phases, and explicit deferrals in `docs/03-mvp-requirements.md`; success and acceptance criteria are defined at G3 | In Progress | 2026-08-06 | 2026-08-21 |
| G1 | ECA Product Design | Consolidate Resilience Lifecycle FigJam comments | High | Review and resolve open comments on the approved lifecycle board; record resulting decisions in canonical repo documents | In Progress — 5 of 19 comments resolved (2 more ready for John to resolve in Figma) | 2026-08-06 | 2026-08-21 |
| G1 | ECA Product Design | Define trust and tone principles | High | Approved product principles governing voice, urgency, and claims of official precision, recorded in `docs/03-mvp-requirements.md` | Not Started | 2026-08-06 | 2026-08-21 |
| G2 | Data Integrations | Research External Warning Feed Feasibility | High | Document whether a reliable evacuation-zone-level feed exists for the pilot county, its fallback if unavailable, and the accessibility and API/data-sharing terms of WildCAD or equivalent upstream primary sources | Not Started — runs in parallel with G1 | 2026-08-06 | 2026-08-28 |
| G2 | Product, Legal & Safety | Blocker 2: 911 Call Liability & Legal Strategy | High | John-authored and John-approved position on automated hazard and evacuation-status notification, including disclaimers, native 911 routing, and claims the app must never imply; record in `docs/04-decision-log.md`; counsel review runs in parallel | Not Started — runs in parallel with G1; counsel track parallel | 2026-08-06 | 2026-08-28; Counsel Requested: not yet sent; Counsel Needed By: before public release; Counsel Escalate: not set |
| G2 | Product, Legal & Safety | Draft closed-pilot participation and liability acknowledgment | High | Founder-approved draft covering voluntary participation, pilot limitations, emergency/911 behavior, risk acknowledgment, privacy/data handling, withdrawal, and contact language; clearly marked for counsel review and not approved for public release | Not Started — runs in parallel with G1; counsel review parallel | 2026-08-06 | 2026-08-28 |
| G3 | ECA Product Design | Finish approved user flows and low-fidelity screens | High | Approved flows and low-fidelity states for MVE-1 across Ready, Alert, Active Incident, and Recovery | Not Started — after G2 closure | 2026-09-01 | 2026-09-25 |
| G3 | ECA Product Design | Approve data model and permission schema | High | Approved minimum data model and permission rules covering time-bounded access, per-household hazard status, and leadership succession, recorded in `docs/04-decision-log.md` | Not Started — after G2 closure | 2026-09-01 | 2026-09-25 |
| G3 | ECA Product Design | Blocker 5: Cross-Platform UI Synchronization | Med | Audit approved Figma frames and lock reusable iOS/Android layout and component rules plus design tokens for type scale, spacing, color roles, and interaction states | Not Started — after approved flows | 2026-09-01 | 2026-09-25 |
| G3 | ECA Product Design | Write MVE-1 acceptance criteria | High | Minimum screen and state inventory proving each of the five approved flows on iOS and Android; define the scope and acceptance boundary of each G5 build slice | Not Started — after approved flows | 2026-09-01 | 2026-09-25 |
| G3 | ECA Product Design | Select provisional working product name | Med | Approved provisional name recorded as explicitly non-final; find-and-replace of `ECA` scoped | Not Started | 2026-09-01 | 2026-09-25 |
| G4 | ECA Technical Foundation | Approve backend approach | High | Approved backend and data-persistence decision recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Approve authentication approach | High | Approved authentication and account-access decision recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Approve notification approach | High | Approved push/local notification decision recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Approve maps and external-data approach | High | Approved map, hazard, route, and external-source provider decision recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Approve offline and secure-storage approach | High | Approved local persistence, reconnect synchronization, stale-data, and sensitive device-storage decision recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Approve build and delivery approach | High | Approved shared mobile framework, iOS/Android build, beta distribution, store delivery, company-derived iOS bundle identifier, and Android package name recorded in `docs/04-decision-log.md` | Not Started — after G3 closure | 2026-09-29 | 2026-10-16 |
| G4 | ECA Technical Foundation | Choose production mobile-app repository name | Med | Approved repository name and documented relationship between the production app and `01_app/` | Not Started — before application scaffold | 2026-09-29 | 2026-10-16 |
| G4 | Technical & AI Setup | Verify Apple Developer / Google Play Console Access | High | Active developer accounts ready for build provisioning, with Apple and Google enrollment account types confirmed and documented | Not Started — before G4 closure | 2026-09-29 | 2026-10-16 |
| G5 | ECA MVP Build | Build MVE-1 slice 1 | High | First Gate 3-defined implementation slice reviewed in the approved production repository and validated against its assigned acceptance criteria | Blocked — awaiting G1–G4 closure | 2026-10-26 | 2026-11-13 |
| G5 | ECA MVP Build | Build MVE-1 slice 2 | High | Second Gate 3-defined implementation slice reviewed in the approved production repository and validated against its assigned acceptance criteria | Blocked — awaiting slice 1 | 2026-11-16 | 2026-12-04 |
| G5 | ECA MVP Build | Build MVE-1 slice 3 | High | Final Gate 3-defined implementation slice reviewed against its assigned acceptance criteria; complete MVE-1 distributable through TestFlight and the equivalent Android channel | Blocked — awaiting slice 2 | 2026-12-07 | 2026-12-18 |
| G6 | Product Validation | Design Boulder Heights pilot test plan | High | Approved test plan defining what is measured, what triggers a test, what participants are asked to do, what constitutes success, and which result thresholds require changing course | Not Started — may begin at G3 and must exist before G5 closes | Not separately scheduled | 2026-11-20 |
| G6 | Product Validation | Execute Boulder Heights pilot | High | Six-week closed, personal-invitation neighborhood pilot run against the approved test plan; adoption and preparedness behavior tracked and findings documented | Not Started — after G5 closure and holiday blackout | 2027-01-05 | 2027-02-13 |
| G6 | Product Validation | MVE-1 go/no-go decision | High | Approved go/no-go recorded in `docs/04-decision-log.md`, evaluated against pre-declared success and course-change thresholds from the pilot test plan; decision states which observed results require continuation, revision, a new pilot, or stopping | Not Started — after pilot findings | Not separately scheduled | 2027-02-20 |
| Ops | Founder Transition & Admin | Legal Review Prep | High | Finish reviewing Bylaws; route post-incorporation pack to Cara O'Brien | In Progress — dependent on Cara; simplified ask and resource approach under review | 2026-07-14 | 2026-08-21; Requested: 2026-07-14; Needed By: 2026-08-21; Escalate: 2026-08-31 |
| Ops | Founder Transition & Admin | Knowledge Transfer Session | Med | Schedule and execute a live, recorded technical handover session with Randall in his limited advisory capacity | In Progress | Not recorded | 2026-08-21 |
| Ops | Founder Transition & Admin | Final Signatures | Med | Route and execute electronic signatures for founder transitions | Not Started — dependent on Legal Review Prep | Not set | 2026-08-25; Requested: not yet sent; Needed By: 2026-08-25; Escalate: founder decision required |

## Backlog

| Gate | Epic | Task Name | Priority | Target Output | Status | Start Date | Due Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| G6 | Product Validation | Blocker 7: UAT Simulation Engine Boundary Limits | Low | Finalize data-scope bounds for the Boulder Heights testing sandbox after the initial test community and MVP journey are approved | Backlog | 2026-09-01 | 2026-11-20 |
| Post-G6 | Post-MVP Product Evolution | Low-Bandwidth / Satellite Data Mode | Low | Evaluate reduced-data and satellite-compatible experiences after the core MVP; see `docs/future-roadmap-backlog.md` | Backlog — scheduling review only | Not set | Not set |
| Post-G6 | ECA Product Design | Product name and brand identity | Med | Final name, visual identity, trademark clearance, and store listing assets | Backlog | Not set | Not set |
| Ops | Business Infrastructure & Ops | Research Banking Options | Med | Evaluate solo-founder platforms for fees and developer API access | Backlog — dependent on legal review and final signatures | Not set | 2026-08-28 |
| Ops | Business Infrastructure & Ops | Expense & Receipt Reconciliation | Med | Gather historical expense data and upload receipts to the finance folder | Backlog | Not set | 2026-08-18 |
| Ops | Business Infrastructure & Ops | Acquire leehilllabs.com | Low | Domain registered to LHL | Backlog | Not set | Not set |

## Archive

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| Founder Transition & Admin | Asana Data Rescue | High | Download all archive-tracking CSVs from the Asana workspace | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | Randall Personal Drive Scrape | High | Audit and pull down active files, calendars, or video assets from Randall's personal drive | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | Delete Randall Profile | High | Decommission Randall's Workspace seat and transition Drive files to John | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | Decommission Team Communications | Med | Offload files, archive channels, and cancel paid Asana and Slack accounts | Complete | Historical: 2026-07-25 |
| Founder Transition & Admin | WIP Asset Migration | Med | Collect offline files/repos from Randall and upload them to the central LHL Drive | Complete | Historical: 2026-07-25 |
| Technical & AI Setup | Clone Core Repo | High | Securely pull down the primary `00_project-os` application codebase | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | Set Git Identity | High | Configure local Git identity for John | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | Repository Transfer Verification | High | Confirm destination profile for the private repository transfer notice from Randall | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | Codex AI Integration Setup | High | Install and authenticate the VS Code AI coding extension | Superseded — historical workbook decision; Codex is currently active | Historical: 2026-07-21 |
| Technical & AI Setup | AI Context Loop Integration | High | Establish the shared `.lhl_ai_context.md` handoff file | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | Freeze MVP Feature Line | Med | Lock specific MVP feature bounds to stop solo scope creep | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | Sign in to GitHub Copilot / Cursor in VS Code | High | Verify an active AI programming assistant in the local workspace | Complete | Historical: 2026-07-24 |
| Technical & AI Setup | Authenticate VS Code AI Coding Extension | High | Complete editor account sign-in for autocomplete and line-by-line generation | Complete | Historical: no date recorded |
| Technical & AI Setup | Verify Local Dev Server Script Execution | High | Run the baseline start command and verify local front-end compilation | Complete | Historical: no date recorded |
| Technical & AI Setup | Install Figma MCP for Claude Code | High | Connect Claude Code to Figma's remote MCP server and verify it can read the approved resilience-lifecycle FigJam board | Complete | Historical: 2026-08-04 |
| ECA MVP Foundation | Resolve lint configuration | High | `npm run lint` completes successfully with a documented ESLint setup | Complete | Historical: 2026-08-04 |
| Founder Transition & Admin | SaaS Billing Sweep | Med | Re-authenticate Claude/OpenAI APIs and update default billing cards | Complete | Historical: 2026-08-04 |
| Business Infrastructure & Ops | Initialize Master PM Log Sheet | Low | Create the original Google Sheet visual roadmap | Complete — retired at Markdown cutover | Historical: 2026-07-22 |
| Business Infrastructure & Ops | Define Connector Architecture | Med | Define Claude/Codex workspace access and GEM's Google Workspace-only supporting role | Complete | Historical: 2026-07-22 |
| Blockers | Blocker 1: Phase Expansion Scope Freeze | High | Log the final four-phase expansion decision in the decision log | Complete | Historical: 2026-07-24 |
| Blockers | Blocker 3: Privacy Engine & Access Toggles | High | Log temporal permission-engine architecture rules | Complete | Historical: 2026-07-24 |
| Blockers | Blocker 4: Stale / Offline Sync Logic Rules | Med | Document caching protocols for map vectors and emergency indicators | Complete | Historical: 2026-07-25 |
| Business Infrastructure & Ops | Reassess MVP Timeline | Med | Re-baseline development milestones and calculate a solo rollout date | Superseded — no launch date is approved; use milestone planning when John directs | Historical: 2026-07-22 |

## Changelog

- 2026-08-06 — Amended the approved gate restructure with John's schedule baseline and added the `Start Date` column to Active and Backlog: G1 and G2 now run in parallel from 2026-08-06; G1 closes 2026-08-21 and G2 closes 2026-08-28; G3 and G4 run through 2026-09-25 and 2026-10-16; G5 is split into three dated build slices ending 2026-12-18; the six-week pilot runs 2027-01-05 through 2027-02-13 after the holiday blackout, with go/no-go due 2027-02-20. The pilot plan and go/no-go output now require pre-declared course-change thresholds. No task was marked Complete.
- 2026-08-06 — Recorded John's gate-framework founder decisions, added G2 task `Draft closed-pilot participation and liability acknowledgment`, and set `Legal Review Prep` external dates to Requested 2026-07-14, Needed By 2026-08-21, and Escalate 2026-08-31. Counsel review remains parallel and required before public release; no compensation or equity arrangement is yet approved.
- 2026-08-06 — Implemented the six-gate restructuring proposed by Claude and approved by John: added the Gate column to Active and Backlog, reordered Active work by gate, promoted Gate 2 constraints and store-account verification into Active, added trust/tone, data/permissions, acceptance-criteria, provisional-name, domain, pilot, go/no-go, and post-G6 brand rows, and flagged affected dates for re-approval. Codex implemented the approved changes; no task was marked Complete.
- 2026-08-04 — Migrated the 31-row `LHL Master Roadmap 8426.xlsx` workbook into this Git-tracked roadmap. Active work was re-baselined, legacy July dates were retired, and the workbook remains outside Git as a personal backup.
- 2026-08-04 — Retired Google Sheets as a task tracker. GEM is a read-only Google Workspace support agent and may propose work, but cannot create or change canonical roadmap records.
- 2026-08-04 — Added Figma MCP setup for Claude Code as active work to support direct review of approved FigJam and design context.
- 2026-08-04 — Reconciled Claude's strategic audit: added MVE-1 design work, moved cross-platform design synchronization to Active, split technical foundation into six decision gates, added production-repository naming and FigJam-comment review, and sequenced implementation after scope, design, and architecture approval.
- 2026-08-04 — Added provisional target dates based on a 20-hour Monday–Friday workweek, no scheduled deliverables during 2026-08-10 through 2026-08-14, and dependency-first sequencing. The 2026-10-02 MVE-1 target is not a launch date.
- 2026-08-04 — Marked "Install Figma MCP for Claude Code" Complete: `whoami` confirmed authenticated session (John Elliott, John's Workspace, Pro/Full seat); `get_figjam` confirmed read access to the approved Resilience Lifecycle FigJam board (all 7 sections readable).
- 2026-08-04 — Codex closed "SaaS Billing Sweep" with a legacy-credential exception: Google, OpenAI, Claude, Figma, and GoDaddy are under John-controlled billing; Slack and Asana are canceled. Legacy API credentials were not transferred into the repository, were reportedly stale and associated with inactive Randall-linked service accounts, and Randall stated that his local copies will be deleted. Future integrations must use newly created John/LHL-controlled credentials.
- 2026-08-04 — Claude started "Consolidate Resilience Lifecycle FigJam comments." Reconciled the founding Core Loop narrative (Google Drive, predates the FigJam board) against 4 comments disputing the board's "no automatic signal ingestion" invariant; recorded a superseding decision (per-household automated hazard status, admin-curated shared phase layer) in `docs/04-decision-log.md` and `docs/functionality-decision-log.md`, and reworked the corresponding FigJam board sections (Phase Model, Flow A, Flow E, two invariants, two Admin stickies) to match. 5 of 19 board comments resolved; 14 remain for the next session.
- 2026-08-04 — Claude removed the structured preparedness-checklist flow from MVE-1/MVP scope entirely (node-3:137 and node-3:64 FigJam comments). Updated `docs/03-mvp-requirements.md` and `docs/02-product-brief.md` flow lists, added a superseding entry to `docs/04-decision-log.md` and `docs/functionality-decision-log.md`, logged a future admin-uploaded-resources concept in `docs/future-roadmap-backlog.md`, and marked the corresponding FigJam board nodes (Flow B, "Checklist overview," "Checklist item detail...", "Readiness counter") as removed from MVP. 2 of the 14 remaining comments are ready for John to resolve in Figma.
