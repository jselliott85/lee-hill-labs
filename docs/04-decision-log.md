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

## 2026-08-06 — MVE-1 Request Claim/Close Lifecycle

- A community or Recovery request has exactly three states in MVE-1: Open, Claimed, Closed. Claiming is not closing.
- Only the original requester can close a request, done manually once the task is actually complete. The claiming helper cannot self-close.
- After a claim, coordination happens in an inline comment thread attached to that specific request, visible only to the requester and the claiming helper.
- No GPS, geofencing, ETA, or automatic proximity-based state transitions in MVE-1, consistent with the 2026-08-04 decision against continuous background location tracking absent a separately approved feature.
- This supersedes, for MVE-1 scope only, the richer state list sketched in the 2026-05-01 "Tasks vs Requests vs Answered Requests" functionality entry; that richer model remains a candidate for a later, separately approved iteration.
- Full detail and source: `docs/functionality-decision-log.md`, "2026-08-06 - MVE-1 Request Claim/Close Lifecycle."

## 2026-08-06 — Remaining Resilience Lifecycle FigJam Comment Resolutions

Resolves the last 7 previously-open FigJam comments (plus 2 replies already effectively settled on 2026-08-04), closing out all 19 board comments in the canonical docs:

- Offer Post (Flow D) keeps one mechanism with an optional Item/Tool vs. Skill/Labor category tag, usable in any phase; no phase-gated flow split. Expertise/referral requests remain out of scope.
- A standing, browsable "Everyday Tasks / Local Marketplace" concept (households listing borrowable equipment) is deferred post-MVE-1 as the top-priority backlog item, not MVE-1 scope. Default plan ships it after pilot findings, not mid-pilot; reassess pulling it into the same cycle only if the G5 build runs 2-3+ weeks ahead of schedule, since the pilot's own start date is fixed by the holiday blackout regardless of build speed. Must be reconciled against the existing "no marketplace" Safety+QA invariant before implementation.
- Admin-uploaded community resources (BMFD documents, etc.) are confirmed post-MVP, per the existing 2026-08-04 backlog entry — the app hosts community-sourced material, it does not generate advice.
- Home/room floor-plan mapping is excluded from MVP entirely. The then-proposed community hazard/route map was subsequently removed from MVE-1 by the 2026-08-07 Gate 1 boundary decision below.
- The "Transition log" wire-inventory placeholder stays as-is; what admin "curates community narrative" means in practice, and admin responsibilities during an active incident, are deferred to Gate 3 product-feature debate rather than settled now.
- Location sharing for hazard/status matching is confirmed home-address-only for MVE-1; a live "share my location" toggle for request-fulfillment ETA is a distinct, post-MVE-1 backlog idea.
- A claim "did you complete this?" reminder nudge is deferred post-MVE-1; MVE-1 ships with fully manual, requester-only closing and no reminder mechanic.
- Quiet community requests always appear in the request queue/list; MVE-1 ships with no notification option (on, off, or opt-in) for them at all.

Full detail for each item: `docs/functionality-decision-log.md`, entries dated 2026-08-06.

## 2026-08-06 — Six-Gate Schedule Baseline

- John approved the schedule baseline recorded in `docs/05-gate-framework.md` and `docs/00-master-roadmap.md`.
- G1 and G2 start together on 2026-08-06. G1 closes 2026-08-21; G2 closes 2026-08-28. G2 is parallel constraint work and does not depend on G1 closure.
- G3 runs 2026-09-01 through 2026-09-25. G4 runs 2026-09-29 through 2026-10-16, followed by a 2026-10-19 through 2026-10-23 buffer.
- G5 is divided into three build slices: 2026-10-26 through 2026-11-13, 2026-11-16 through 2026-12-04, and 2026-12-07 through 2026-12-18. Slice boundaries are defined at G3 closure.
- The pilot test plan is due 2026-11-20. Following a 2026-12-21 through 2027-01-02 holiday blackout, the six-week pilot runs 2027-01-05 through 2027-02-13, with the go/no-go decision due 2027-02-20.
- The pilot plan must define success and course-change thresholds before execution. The go/no-go decision must state which observed results support continuation, revision, another pilot, or stopping.
- These dates are milestone targets, not a public launch date.

## 2026-08-06 — MVE-1 Primary User

- The primary user is an adult resident—homeowner, tenant, or another household member—in a community exposed to recurring natural, environmental, or human-caused hazards.
- LHL's primary role is trusted-community coordination before, during, and after disruptive events. It may surface available hazard information associated with the user's saved home address when the source and limitations are clear, but it does not interpret the news, tell users what they should conclude, replace emergency authorities, or treat every community update as urgent.
- The experience must work for residents with varying technical comfort, minimize unnecessary cognitive and interaction burden, and clearly separate immediate-action information from quieter coordination.
- The complete approved narrative, core user perspective, job to be done, and product boundary are recorded in `docs/03-mvp-requirements.md`, "Primary User."

## 2026-08-06 — MVE-1 First Test Community and Simulation Rule

- Boulder Heights is the working name for the first test community. It is one closed, invitation-only group of adult residents connected through John's existing trusted relationships; property ownership is not required, and membership rather than a precise geographic boundary defines the group.
- The six-week live pilot means real participants use MVE-1 over time across all four lifecycle phases. It does not depend on an actual emergency occurring. Smaller controlled exercises may run concurrently using clearly identified test profiles and conditions that cannot be mistaken for real people, needs, or reports.
- The pilot intends to include one planned, time-bounded simulated-event drill. All simulated content must be unmistakably labeled `TEST`, `DRILL`, or `SIMULATION`; exact procedures, measures, thresholds, and stop conditions belong in the approved Gate 6 pilot test plan.
- A real emergency, official warning, or materially unsafe condition suspends any drill, observation, and data collection. Participant safety and official instructions take absolute priority; participants are never expected to use or evaluate LHL during a real event, and any use is voluntary.
- The complete cohort definition and testing safeguards are recorded in `docs/03-mvp-requirements.md`, "First Test Community."

## 2026-08-06 — Household-First Context and Minimal Administrator Role

- MVE-1 opens household-first. Available sourced incident information associated with a saved home address is presented separately from broader incident context, household-reported status, and activity within the trusted community.
- A trusted community may span multiple hazard or evacuation zones. MVE-1 does not declare one universal community hazard status or place the whole community into a shared lifecycle phase.
- The MVE-1 administrator role is limited to membership administration: reviewing and approving or denying requests to join the trusted group. Administrators do not set or confirm lifecycle phases, curate an incident narrative, add or validate hazard sources, interpret official information, maintain a transition log, or direct member behavior during an emergency.
- This supersedes the shared, admin-curated community narrative layer in the 2026-08-04 "Per-Household Automated Hazard Status" decision and the 2026-08-06 decision to retain the transition log for Gate 3 debate. The transition log and its underlying admin-controlled phase-transition responsibility are removed from MVE-1 now.
- The four lifecycle concepts remain in scope, but the exact household-facing representation of those concepts is still to be settled as part of the first journey and Gate 3 product definition.
- Open question: whether a membership administrator may remove an existing member after admission. No message/content moderation or broader incident-management authority is approved by this entry.
- Claude must reconcile the approved Resilience Lifecycle FigJam board to this decision under the roadmap task `Update FigJam for household-first context and minimal admin role`.

## 2026-08-06 — Boulder Heights Pilot Administrator and Member-Removal Deferral

- John will serve as the initial administrator for the invitation-only Boulder Heights pilot. This is appropriate for the small founder-led cohort because the administrator has no emergency-management or incident-operation duties.
- MVE-1 includes approve/deny join-request actions but no participant-facing ability to remove an existing member and no content/message moderation. Existing-member removal is deferred to the future backlog.
- Because trusted-group access may expose sensitive household information, the approved pilot operations plan must define a manual operator-level way to revoke access if a participant was admitted in error, withdraws, or presents a safety/privacy concern. This safeguard is operational and does not add an in-app removal feature to MVE-1.
- This resolves the existing-member-removal question left open in `Household-First Context and Minimal Administrator Role`.

## 2026-08-06 — First End-to-End MVE-1 Journey and Internal Lifecycle Language

- The approved first journey begins with a resident joining a private trusted group, establishing a household profile with a saved home address, and storing sensitive assistance information that remains private unless deliberately shared for a limited period.
- Sourced incident information associated with the saved address opens into household context and remains separate from broader incident information and trusted-community activity. LHL does not interpret what the resident should conclude or assign a universal phase/status to the community.
- A resident away from home creates a practical assistance request; another trusted member claims it; the two coordinate in the private request thread; the requester may grant specific sensitive instructions for a defined period with a one-day default; the helper acts only when independently safe and consistent with official instructions; and the original requester closes the fulfilled request.
- Household status is self-reported, not inferred from device movement. Recovery-oriented requests and offers continue coordination after immediate conditions pass.
- `Ready`, `Alert`, `Active Incident`, and `Recovery` remain internal working language for product organization and test coverage. Consumer-facing lifecycle terminology and presentation are explicitly TBD for Gate 3 design and must follow the approved trust-and-tone principles.
- The full approved journey is recorded in `docs/03-mvp-requirements.md`, "First End-to-End MVE-1 Journey."

## 2026-08-06 — Boulder Heights Access-Code Onboarding and Approval

- Pilot onboarding has three separate gates: John personally sends the TestFlight or approved Android-testing invitation; the participant installs the app, creates a profile, and enters a preconfigured Boulder Heights community access code; entering the code submits a pending membership request but grants no group access; and John's approve action grants trusted-group access.
- MVE-1 includes participant code entry, pending/approved/denied membership states, and a minimal role-gated admin surface in the resident app showing enough applicant identity for John to approve or deny the request.
- MVE-1 does not include an admin code-generation or management interface. Code creation, rotation, expiration, multiple-code support, and invitation analytics are deferred. The code is not an authentication credential and cannot expose group information by itself; exact rate-limiting and security mechanics belong to Gate 4.
- Before pilot credentials are issued, the selected backend/authentication approach must provide a protected operator-level method to revoke previously approved access. This is an operational safeguard, not a participant-facing remove-member feature.

## 2026-08-06 — Single Trusted Group in MVE-1

- MVE-1 supports exactly one trusted community group: Boulder Heights.
- A pilot participant cannot create another group, join multiple groups, switch group context, or receive requests, offers, statuses, or notifications from more than one group.
- Multi-group membership and group creation are deferred beyond MVE-1 because they add navigation, notification-routing, privacy, and permission complexity without contributing to validation of the first journey.

## 2026-08-06 — No General Chat or Neighborhood Forum

- LHL will not include a general group chat, open-ended direct messaging, neighborhood discussion forum, email-list replacement, gossip channel, or Nextdoor-style social feed. This is a permanent product boundary, not a deferred feature.
- In-app communication must remain attached to concrete coordination: structured requests and offers may be visible to the trusted group, and private conversation is limited to the requester and helper inside the thread for a claimed request.
- Reactions, general discussion threads, status posts without a coordination purpose, and other engagement mechanics must not be introduced indirectly through later design work without an explicit superseding founder decision.
- This resolves earlier ambiguity about whether `Group chat` is a full chat surface, a filtered coordination thread, or a link into chat: there is no general chat surface in the approved product direction.

## 2026-08-06 — Native Call and Text Actions in MVE-1

- Approved trusted-group member profiles include Call and Text actions using the member-provided phone number. These actions launch the device's native phone or messaging application and do not create an LHL direct-message or chat surface.
- LHL does not auto-send communications, capture or synchronize native call/text content, or guarantee delivery. Text may be useful when voice service is unavailable, including as carrier/device capabilities evolve, but MVE-1 makes no promise of carrier, degraded-network, or satellite delivery.
- The actions are available only within the approved trusted-group context. The later 2026-08-06 household-profile decision resolves phone requirement and visibility: phone/consent are mandatory for the pilot, and profiles show action buttons rather than printing the number. Gate 3 retains only the exact consent presentation.
- Email profile actions are excluded from MVE-1 because they do not contribute to the first journey.

## 2026-08-06 — Household Signals and Provisional Incident Acknowledgement

- MVE-1 intends to support three separate, voluntary, time-stamped signals visible to approved Boulder Heights members: incident acknowledgement, self-reported household presence, and a self-reported incident check-in.
- Incident acknowledgement is tied to a specific sourced incident update and requires deliberate user action. Absence is `No acknowledgement recorded`, never `Unaware`; opening the app or receiving a notification does not count, and acknowledgement does not imply comprehension, agreement, safety, or compliance.
- Household presence is self-reported as someone home, household away, not shared, or no recent update. LHL does not infer it from device location or geofencing.
- Incident check-in lets a resident report that the household was not in, or has left, the area relevant to the incident. It is displayed as time-stamped and self-reported, not as a verified declaration that the household is safe. A need for assistance remains a structured request rather than another status value.
- Missing, stale, and intentionally unshared information must be visually distinct. Exact consumer wording, prompts, visibility, expiry/staleness, and material-update behavior belong to Gate 3.
- Incident acknowledgement is provisional MVE-1 scope. Gate 3 must attempt to fit and test it without adding noise or false confidence; removing it requires an explicit superseding decision rather than silent omission.

## 2026-08-06 — MVE-1 Household Profile Source, Derived Display, and Helper-Sharing Scope

- MVE-1 distinguishes resident-provided source information from system-derived display values. Residents do not author separate custom display names or household labels.
- Mandatory resident-provided identity/contact fields are first name, last name, phone number, and consent to approved-group Call/Text actions. Preferred first name is optional. The community-visible display name is generated as preferred first name—or first name if blank—plus the last-name initial.
- The member profile shows Call and Text actions rather than printing the underlying phone number. Using the native device application may expose the phone number; onboarding and consent language must state this without implying that LHL controls external delivery or content.
- A complete saved home address and entry instructions are mandatory private household fields. Door or gate codes, when applicable, are part of entry instructions. Optional private fields include assistance-relevant household members, pets/animals, physical-access notes, utility-shutoff information, and mobility or other practical assistance needs.
- The system derives a household label from the saved address as street number plus street name, omitting the road/street type. Address validation/provider selection is a Gate 4 implementation decision. Exact roster layout, sorting, grouping, and placement of the derived label remain Gate 3 presentation decisions.
- Private household information is masked until deliberately shared with the member helping fulfill a request. The confirmation starts with all applicable private fields selected; the resident may deselect unnecessary fields except the complete address, which is always included in a deliberate helper share. Access is requester/helper-only, uses a one-day default, expires automatically, and re-masks rather than deletes the stored profile information.
- Homeowner/tenant status, custom biography or identity text, preparedness score, standing equipment inventory, and a general medical record are excluded from the MVE-1 household profile. Structured request/offer content and necessary entry instructions remain purpose-limited user input rather than open-ended profile content.
- This resolves the phone requirement/visibility, household-label derivation, first-journey private fields, field-versus-bundle sharing, and exact-address helper-sharing questions. It does not approve a roster UI or select an address-validation provider.

## 2026-08-07 — Gate 1 Remaining MVE-1 Boundary Set

- A resident may revoke an active temporary private-information grant before its scheduled expiry. Automatic expiry remains the privacy backstop; Gate 3 defines the interaction and Gate 4 defines secure enforcement.
- Every approved adult member may create structured community requests and offers. Administrator status provides no publishing, alerting, or emergency-communication advantage.
- No private preparedness-task or personal-checklist concept remains in MVE-1. This removes the stale private-task constraint left after the structured checklist and readiness counter were removed from MVP.
- The community hazard/route map is removed as an MVE-1 requirement. LHL does not maintain evacuation routes, hazard perimeters, or preparedness guidance. Dependable external incident data may be shown in a clearly sourced non-map presentation if Gate 2 confirms feasibility; otherwise the capability is omitted. Administrator-uploaded static resources remain a possible post-MVP concept and do not expand the MVE-1 administrator role.
- Newly created community requests and offers are in-app only and never generate device notifications in MVE-1, regardless of lifecycle phase. Direct participant activity may notify: a claim on the participant's request, a new message in a private request thread involving the participant, and a material request/access change involving the participant, including request closure or private-information access ending.
- Incident notification relevance is matched to the saved property address only, with no device-location fallback. Source-defined authoritative polygons, zones, or address-level designations take precedence over any distance interpretation. Gate 2 decides whether a distance fallback is permissible.
- Sources are not equally notification-eligible. Gate 2 must confirm reliability, attribution, machine readability, geography, classification, timestamps, stable event/update identity, and correction/cancellation behavior. Primary authoritative sources are preferred; secondary sources or aggregators qualify only when they preserve upstream attribution and independently meet the approved requirements. LHL does not adjudicate conflicting agency claims or create its own interpretation.
- Gate 2 must produce and John must approve an expandable incident-notification eligibility matrix for candidate MVE-1/Boulder Heights event types and sources. The matrix controls push eligibility, silent in-app eligibility, recognized hierarchy, threshold, geography, updates, acknowledgement eligibility, source mapping, decision status, and evidence/limitations. Unknown or unmapped combinations default to `Push Eligible: No`; sources are evaluated against LHL policy rather than defining it.
- MVE-1 has no app-defined quiet hours, bundling, or rate limits; device settings govern quiet behavior. It includes one in-app control to disable all LHL notifications. If relevance, source authority, freshness, classification, or matrix eligibility cannot be established, no incident notification is sent.
- Lock-screen notifications contain no PII or sensitive request/household information. Drill notifications must be unmistakably labeled as tests, using the approved `THIS IS A TEST ONLY` baseline. LHL is not intended to be the first incident-alert source; notifications repeat sourced information to open collaboration context and do not replace official alerts.
- Corrections, cancellations, expirations, and authoritative boundary changes update the in-app event record. Gates 2 and 3 determine follow-up notification rules. Incident acknowledgement belongs to the event, not each notification, and may use a higher threshold; exact eligibility and reset behavior belong to Gate 3. Gate 4 selects delivery architecture, and LHL never guarantees delivery.
- Full detailed rules are recorded in `docs/03-mvp-requirements.md`, "Gate 1 MVE-1 Boundary Set" and "MVE-1 Device-Notification Boundary," and `docs/functionality-decision-log.md`, "2026-08-07 - Gate 1 Remaining MVE-1 Boundaries and Device Notifications."

## 2026-08-07 — Gate 1 Trust and Tone Principles

- Approved nine governing principles for MVE-1 language, information hierarchy, and interaction design: coordinate rather than command; source rather than interpret; describe relevance carefully; reserve urgency; use calm, plain language; distinguish every information state; make privacy deliberate and legible; put safety and official instructions first; and avoid social pressure and engagement mechanics.
- Privacy explanations must state why information is requested and the future user benefit it enables, as well as what is shared, with whom, for how long, and when access ends. Masking, expiry, and revocation must not be described as deletion.
- The founder-provided communication-saturation whitepaper is an input for debate, not proof of a universal or precisely measurable scientific threshold. Its out-of-scope technical proposals do not enter MVE-1 through this decision.
- These are durable product principles. Gate 3 remains responsible for final consumer wording, hierarchy, and usability testing.
- Full controlling language is recorded in `docs/03-mvp-requirements.md`, "Trust and Tone Principles."

## 2026-08-07 — Gate 1 Closure

- John explicitly confirmed Gate 1 completion after reviewing the canonical reconciliation and confirming CC's final Resilience Lifecycle FigJam synchronization.
- Every Gate 1 exit criterion in `docs/05-gate-framework.md` is met: primary user and first test community named; first end-to-end journey defined; MVE-1 boundaries and explicit deferrals recorded; Trust-and-Tone principles recorded; and all open comments on the approved Resilience Lifecycle FigJam board resolved with resulting decisions reflected in canonical repository documents.
- Both Gate 1 roadmap target outputs are satisfied. `Define initial MVP scope and success criteria` and `Define trust and tone principles` are Complete and archived with the historical completion date 2026-08-07.
- Gate 1 establishes working direction rather than final frozen scope. Success criteria, acceptance criteria, final user flows/screens, and scope freeze remain Gate 3 work. Gate 2 constraint work continues in parallel and must close before Gate 3 begins.

## 2026-08-17 — Gate 2 Provisional Incident-Notification Working Rules

- These are founder-approved provisional Gate 2 rules for populating and testing the incident-notification eligibility matrix. They remain subject to source research, event-specific stress testing, and later founder approval of the completed matrix.
- Incident pushes are never community-wide. Eligibility is evaluated separately for each resident using that resident's saved property address, with no device-location fallback. A resident may qualify while another member of the same trusted group does not.
- Formal warning-level products are the working push baseline. Watches, advisories, and statements are in-app by default unless a specific event/source matrix row establishes a reason for push. A newly reported fire is evaluated as an incident and is not forced into the weather-warning hierarchy.
- Every newly reported fire from a verified, trusted, notification-eligible source is a push candidate when it matches the resident's approved geographic-relevance rule, regardless of small initial acreage. An unverified resident report alone does not generate an incident push in MVE-1.
- Source-issued polygons, zones, and address designations remain the preferred match. When an eligible fire source supplies only an approximate incident point, Gate 2 must establish an incident-specific radius or polygon rule before that point can qualify an address; approximate location is not blanket notification permission.
- Watch Duty is classified as a trusted secondary aggregator rather than a primary authority. It may qualify for push only if it preserves upstream attribution and independently satisfies reliability, access/licensing, freshness, geography, stable identity, and update/correction requirements. Fire coverage remains a critical Gate 2 feasibility problem rather than an accepted omission.
- A source-limited material closure update goes to every saved address that matched the incident at any point, including addresses added by a later boundary expansion and addresses no longer included after a later contraction, regardless of whether the resident opened or acknowledged an earlier update. LHL repeats the source's status and does not call it an independent all-clear.
- MVE-1 retains the three previously approved voluntary household signals: acknowledgement of a specific sourced incident update, self-reported household presence, and a self-reported incident check-in that the household is outside or has left the incident-relevant area. It does not add a generic `I'm okay` or verified `Safe` status.
- Structured resident incident reporting and a user-visible historical incident log are explicitly deferred to Post-G6 discovery. Neither changes MVE-1 scope.

## Product Decisions

The detailed functional product rules are maintained in `docs/functionality-decision-log.md`. The following entries are currently controlling:

- 2026-07-23 — Temporal Access Control Layer for Household Profiles
- 2026-07-23 — Full 4-Phase Resilience Lifecycle MVP Scope
- 2026-07-23 — Stale Data Connection Logic & Peer Presence
- 2026-08-04 — Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger
- 2026-08-04 — Preparedness Checklist Removed from MVE-1 Scope
- 2026-08-06 — MVE-1 Request Claim/Close Lifecycle
- 2026-08-06 — Remaining Resilience Lifecycle FigJam Comment Resolutions
- 2026-08-06 — MVE-1 Primary User
- 2026-08-06 — MVE-1 First Test Community and Simulation Rule
- 2026-08-06 — Household-First Context and Minimal Administrator Role
- 2026-08-06 — Boulder Heights Pilot Administrator and Member-Removal Deferral
- 2026-08-06 — First End-to-End MVE-1 Journey and Internal Lifecycle Language
- 2026-08-06 — Boulder Heights Access-Code Onboarding and Approval
- 2026-08-06 — Single Trusted Group in MVE-1
- 2026-08-06 — No General Chat or Neighborhood Forum
- 2026-08-06 — Native Call and Text Actions in MVE-1
- 2026-08-06 — Household Signals and Provisional Incident Acknowledgement
- 2026-08-06 — MVE-1 Household Profile Source, Derived Display, and Helper-Sharing Scope
- 2026-08-07 — Gate 1 Remaining MVE-1 Boundary Set
- 2026-08-07 — Gate 1 Trust and Tone Principles
- 2026-08-07 — Gate 1 Closure
- 2026-08-17 — Gate 2 Provisional Incident-Notification Working Rules
