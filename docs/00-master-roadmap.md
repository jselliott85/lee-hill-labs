# Master Roadmap — LHL App

This file is the sole canonical task tracker for LHL. It is maintained in Git so John, Claude, and Codex share one reviewable record. The former Google Sheet is retired as a tracker; its source workbook remains outside this repository as a personal backup.

Use the exact task name when reporting progress or blockers. Active and backlog dates are approved targets; dates in the archive are historical completion dates.

Before marking any task Complete, verify its Target Output and ask John for explicit confirmation. Once confirmed, never delete the row: set Status to `Complete`, replace Due Date with `Historical: YYYY-MM-DD` using the actual completion date, and move the full row to Archive. Do not strikethrough task names; Archive placement is the completion indicator. Routine completion/archive moves do not require a changelog entry; material scope, priority, schedule, or task-structure changes still do.

## Active

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| ECA MVP Foundation | Define initial MVP scope and success criteria | High | Approved primary user, first end-to-end journey, MVE-1 boundaries, all four lifecycle phases, success criteria, and explicit deferrals in `docs/03-mvp-requirements.md` | In Progress | 2026-08-07 |
| Founder Transition & Admin | Legal Review Prep | High | Finish reviewing Bylaws; route post-incorporation pack to Cara O'Brien | In Progress — dependent on Cara | 2026-08-21 |
| Founder Transition & Admin | SaaS Billing Sweep | Med | Re-authenticate Claude/OpenAI APIs and update default billing cards | In Progress | 2026-08-05 |
| Founder Transition & Admin | Knowledge Transfer Session | Med | Schedule and execute a live, recorded technical handover session with Randall in his limited advisory capacity | In Progress | 2026-08-21 |
| Founder Transition & Admin | Final Signatures | Med | Route and execute electronic signatures for founder transitions | Not Started — dependent on Legal Review Prep | 2026-08-25 |
| ECA MVP Foundation | Resolve lint configuration | High | `npm run lint` completes successfully with a documented ESLint setup | Not Started | 2026-08-05 |
| Technical & AI Setup | Install Figma MCP for Claude Code | High | Connect Claude Code to Figma's remote MCP server and verify it can read the approved resilience-lifecycle FigJam board | Complete | Historical: 2026-08-04 |
| ECA Product Design | Consolidate Resilience Lifecycle FigJam comments | High | Review and resolve open comments on the approved lifecycle board; record resulting decisions in canonical repo documents | Not Started | 2026-08-06 |
| ECA Product Design | Finish approved user flows and low-fidelity screens | High | Approved flows and low-fidelity states for MVE-1 across Ready, Alert, Active Incident, and Recovery | Not Started — after MVP scope reconciliation | 2026-08-19 |
| ECA Product Design | Blocker 5: Cross-Platform UI Synchronization | Med | Audit approved Figma frames and lock reusable iOS/Android layout and component rules | Not Started — after user flows and low-fidelity screens | 2026-08-21 |
| ECA Technical Foundation | Approve backend approach | High | Approved backend and data-persistence decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-08-24 |
| ECA Technical Foundation | Approve authentication approach | High | Approved authentication and account-access decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-08-25 |
| ECA Technical Foundation | Approve notification approach | High | Approved push/local notification decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-08-27 |
| ECA Technical Foundation | Approve maps and external-data approach | High | Approved map, hazard, route, and external-source provider decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-08-31 |
| ECA Technical Foundation | Approve offline and secure-storage approach | High | Approved local persistence, reconnect synchronization, stale-data, and sensitive device-storage decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-09-02 |
| ECA Technical Foundation | Approve build and delivery approach | High | Approved shared mobile framework, iOS/Android build, beta distribution, and store-delivery decision recorded in `docs/04-decision-log.md` | Not Started — after design approval | 2026-09-04 |
| ECA Technical Foundation | Choose production mobile-app repository name | Med | Approved repository name and documented relationship between the production app and `01_app/` | Not Started — before application scaffold | 2026-09-04 |
| ECA MVP Build | Build the first approved MVP slice | High | Reviewed MVE-1 implementation in the approved production repository with proportionate validation | Blocked — awaiting approved scope, design, and technical foundation | 2026-10-02 |

## Backlog

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| Technical & AI Setup | Verify Apple Developer / Google Play Console Access | Med | Active developer accounts ready for eventual build provisioning; no production code required | Backlog | 2026-08-21 |
| Business Infrastructure & Ops | Research Banking Options | Med | Evaluate solo-founder platforms for fees and developer API access | Backlog — dependent on legal review and final signatures | 2026-08-28 |
| Business Infrastructure & Ops | Expense & Receipt Reconciliation | Med | Gather historical expense data and upload receipts to the finance folder | Backlog | 2026-08-18 |
| Product, Legal & Safety | Blocker 2: 911 Call Liability & Legal Strategy | High | Define explicit disclaimers and localized native-routing safeguards; defer to backlog per founder directive | Backlog — dependent on legal input | 2026-09-04 |
| Data Integrations | Blocker 6: External Warning Feed API Structuring | Med | Select and map integration endpoints for external alert feeds after provider approval | Backlog | 2026-09-11 |
| Product Validation | Blocker 7: UAT Simulation Engine Boundary Limits | Low | Finalize data-scope bounds for the Boulder Heights testing sandbox after the initial test community and MVP journey are approved | Backlog | 2026-09-11 |
| Post-MVP Product Evolution | Low-Bandwidth / Satellite Data Mode | Low | Evaluate reduced-data and satellite-compatible experiences after the core MVP; see `docs/future-roadmap-backlog.md` | Backlog — scheduling review only | 2026-10-02 |

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
| Business Infrastructure & Ops | Initialize Master PM Log Sheet | Low | Create the original Google Sheet visual roadmap | Complete — retired at Markdown cutover | Historical: 2026-07-22 |
| Business Infrastructure & Ops | Define Connector Architecture | Med | Define Claude/Codex workspace access and GEM's Google Workspace-only supporting role | Complete | Historical: 2026-07-22 |
| Blockers | Blocker 1: Phase Expansion Scope Freeze | High | Log the final four-phase expansion decision in the decision log | Complete | Historical: 2026-07-24 |
| Blockers | Blocker 3: Privacy Engine & Access Toggles | High | Log temporal permission-engine architecture rules | Complete | Historical: 2026-07-24 |
| Blockers | Blocker 4: Stale / Offline Sync Logic Rules | Med | Document caching protocols for map vectors and emergency indicators | Complete | Historical: 2026-07-25 |
| Business Infrastructure & Ops | Reassess MVP Timeline | Med | Re-baseline development milestones and calculate a solo rollout date | Superseded — no launch date is approved; use milestone planning when John directs | Historical: 2026-07-22 |

## Changelog

- 2026-08-04 — Migrated the 31-row `LHL Master Roadmap 8426.xlsx` workbook into this Git-tracked roadmap. Active work was re-baselined, legacy July dates were retired, and the workbook remains outside Git as a personal backup.
- 2026-08-04 — Retired Google Sheets as a task tracker. GEM is a read-only Google Workspace support agent and may propose work, but cannot create or change canonical roadmap records.
- 2026-08-04 — Added Figma MCP setup for Claude Code as active work to support direct review of approved FigJam and design context.
- 2026-08-04 — Reconciled Claude's strategic audit: added MVE-1 design work, moved cross-platform design synchronization to Active, split technical foundation into six decision gates, added production-repository naming and FigJam-comment review, and sequenced implementation after scope, design, and architecture approval.
- 2026-08-04 — Added provisional target dates based on a 20-hour Monday–Friday workweek, no scheduled deliverables during 2026-08-10 through 2026-08-14, and dependency-first sequencing. The 2026-10-02 MVE-1 target is not a launch date.
- 2026-08-04 — Marked "Install Figma MCP for Claude Code" Complete: `whoami` confirmed authenticated session (John Elliott, John's Workspace, Pro/Full seat); `get_figjam` confirmed read access to the approved Resilience Lifecycle FigJam board (all 7 sections readable).
