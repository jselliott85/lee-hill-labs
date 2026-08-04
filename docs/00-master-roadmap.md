# Master Roadmap — LHL App

This file is the sole canonical task tracker for LHL. It is maintained in Git so John, Claude, and Codex share one reviewable record. The former Google Sheet is retired as a tracker; its source workbook remains outside this repository as a personal backup.

Use the exact task name when reporting progress or blockers. Do not mark a task complete until its output is verified and John confirms it. All active and backlog dates are `TBD` until John approves a milestone; dates in the archive are historical only.

## Active

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| ECA MVP Foundation | Define initial MVP scope and success criteria | High | Approved primary user, first end-to-end journey, in-scope phases, and explicit deferrals in `docs/03-mvp-requirements.md` | In Progress | TBD |
| Founder Transition & Admin | Legal Review Prep | High | Finish reviewing Bylaws; route post-incorporation pack to Cara O'Brien | In Progress | TBD |
| Founder Transition & Admin | SaaS Billing Sweep | Med | Re-authenticate Claude/OpenAI APIs and update default billing cards | In Progress | TBD |
| Founder Transition & Admin | Knowledge Transfer Session | Med | Schedule and execute a live, recorded technical handover session with Randall in his limited advisory capacity | In Progress | TBD |
| Founder Transition & Admin | Final Signatures | Med | Route and execute electronic signatures for founder transitions | Not Started | TBD |
| ECA MVP Foundation | Resolve lint configuration | High | `npm run lint` completes successfully with a documented ESLint setup | Not Started | TBD |
| ECA MVP Foundation | Approve technical foundation | High | Recorded decisions for application structure, backend, authentication, notifications, and map/data approach before implementation | Not Started | TBD |
| ECA MVP Foundation | Build the first approved MVP slice | High | Reviewed implementation in `01_app/` with proportionate validation | Blocked — awaiting approved MVP scope and technical foundation | TBD |

## Backlog

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| Technical & AI Setup | Verify Apple Developer / Google Play Console Access | Med | Active developer accounts ready for eventual build provisioning; no production code required | Backlog | TBD |
| Business Infrastructure & Ops | Research Banking Options | Med | Evaluate solo-founder platforms for fees and developer API access | Backlog | TBD |
| Business Infrastructure & Ops | Expense & Receipt Reconciliation | Med | Gather historical expense data and upload receipts to the finance folder | Backlog | TBD |
| Product, Legal & Safety | Blocker 2: 911 Call Liability & Legal Strategy | High | Define explicit disclaimers and localized native-routing safeguards; defer to backlog per founder directive | Backlog | TBD |
| Product Design | Blocker 5: Cross-Platform UI Synchronization | Med | Audit Figma visual frames to lock shared iOS/Android layouts | Backlog | TBD |
| Data Integrations | Blocker 6: External Warning Feed API Structuring | Med | Select and map integration endpoints for external alert feeds after provider approval | Backlog | TBD |
| Product Validation | Blocker 7: UAT Simulation Engine Boundary Limits | Low | Finalize data-scope bounds for the Boulder Heights testing sandbox after the initial test community and MVP journey are approved | Backlog | TBD |
| Post-MVP Product Evolution | Low-Bandwidth / Satellite Data Mode | Low | Evaluate reduced-data and satellite-compatible experiences after the core MVP; see `docs/future-roadmap-backlog.md` | Backlog | TBD |

## Archive

| Epic | Task Name | Priority | Target Output | Status | Due Date |
| --- | --- | --- | --- | --- | --- |
| Founder Transition & Admin | ~~Asana Data Rescue~~ | High | Download all archive-tracking CSVs from the Asana workspace | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | ~~Randall Personal Drive Scrape~~ | High | Audit and pull down active files, calendars, or video assets from Randall's personal drive | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | ~~Delete Randall Profile~~ | High | Decommission Randall's Workspace seat and transition Drive files to John | Complete | Historical: 2026-07-24 |
| Founder Transition & Admin | ~~Decommission Team Communications~~ | Med | Offload files, archive channels, and cancel paid Asana and Slack accounts | Complete | Historical: 2026-07-25 |
| Founder Transition & Admin | ~~WIP Asset Migration~~ | Med | Collect offline files/repos from Randall and upload them to the central LHL Drive | Complete | Historical: 2026-07-25 |
| Technical & AI Setup | ~~Clone Core Repo~~ | High | Securely pull down the primary `00_project-os` application codebase | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | ~~Set Git Identity~~ | High | Configure local Git identity for John | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | ~~Repository Transfer Verification~~ | High | Confirm destination profile for the private repository transfer notice from Randall | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | ~~Codex AI Integration Setup~~ | High | Install and authenticate the VS Code AI coding extension | Superseded — historical workbook decision; Codex is currently active | Historical: 2026-07-21 |
| Technical & AI Setup | ~~AI Context Loop Integration~~ | High | Establish the shared `.lhl_ai_context.md` handoff file | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | ~~Freeze MVP Feature Line~~ | Med | Lock specific MVP feature bounds to stop solo scope creep | Complete | Historical: 2026-07-21 |
| Technical & AI Setup | ~~Sign in to GitHub Copilot / Cursor in VS Code~~ | High | Verify an active AI programming assistant in the local workspace | Complete | Historical: 2026-07-24 |
| Technical & AI Setup | ~~Authenticate VS Code AI Coding Extension~~ | High | Complete editor account sign-in for autocomplete and line-by-line generation | Complete | Historical: no date recorded |
| Technical & AI Setup | ~~Verify Local Dev Server Script Execution~~ | High | Run the baseline start command and verify local front-end compilation | Complete | Historical: no date recorded |
| Business Infrastructure & Ops | ~~Initialize Master PM Log Sheet~~ | Low | Create the original Google Sheet visual roadmap | Complete — retired at Markdown cutover | Historical: 2026-07-22 |
| Business Infrastructure & Ops | ~~Define Connector Architecture~~ | Med | Define Claude/Codex workspace access and GEM's Google Workspace-only supporting role | Complete | Historical: 2026-07-22 |
| Blockers | ~~Blocker 1: Phase Expansion Scope Freeze~~ | High | Log the final four-phase expansion decision in the decision log | Complete | Historical: 2026-07-24 |
| Blockers | ~~Blocker 3: Privacy Engine & Access Toggles~~ | High | Log temporal permission-engine architecture rules | Complete | Historical: 2026-07-24 |
| Blockers | ~~Blocker 4: Stale / Offline Sync Logic Rules~~ | Med | Document caching protocols for map vectors and emergency indicators | Complete | Historical: 2026-07-25 |
| Business Infrastructure & Ops | ~~Reassess MVP Timeline~~ | Med | Re-baseline development milestones and calculate a solo rollout date | Superseded — no launch date is approved; use milestone planning when John directs | Historical: 2026-07-22 |

## Changelog

- 2026-08-04 — Migrated the 31-row `LHL Master Roadmap 8426.xlsx` workbook into this Git-tracked roadmap. Active work was re-baselined, legacy July dates were retired, and the workbook remains outside Git as a personal backup.
- 2026-08-04 — Retired Google Sheets as a task tracker. GEM is a read-only Google Workspace support agent and may propose work, but cannot create or change canonical roadmap records.
