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
- A real emergency, official warning, or materially unsafe condition ends any active simulation drill and places participant safety and official instructions first. A real WFIGS/IRWIN-eligible incident does not by itself suspend the closed pilot; the later 2026-08-21 founder decision gives the LHL CEO/pilot owner sole suspension authority and requires a tested manual pull-the-plug procedure before participant access.
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

- John will serve as the initial membership administrator for the invitation-only Boulder Heights pilot. That participant-facing product role has no emergency-management or incident-interpretation duties. The later 2026-08-21 decision separately gives John, in his capacity as LHL CEO and pilot owner/operator, authority to suspend the experiment through an operational kill procedure; it does not create a broader member-facing incident-management role.
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

## 2026-08-18 — Gate 2 Point-Only Fire Report Definition

- A `point-only fire report` is a source-published fire incident record whose only usable event-linked geography, when LHL evaluates it, is a single coordinate or representative map point. The source has not supplied a usable incident-linked polygon, zone, perimeter, or address designation.
- The point identifies a location associated with the incident but does not establish its boundary, affected area, spread direction, evacuation area, smoke area, road impact, or threat to nearby properties.
- `Point-only` describes the record's available geometry, not its notification eligibility. A point-only record may generate a notification only when its source, freshness, stable source or upstream incident identity, and geographic matching rule independently satisfy the Gate 2 eligibility requirements.
- A point-only record without a stable source or upstream incident identifier remains geometrically point-only but fails closed to no push. MVE-1 does not invent a fuzzy composite key for point-based notification deduplication.
- Geographic relevance and source/record eligibility are independent notification gates. A record may match the saved address yet remain notification-ineligible because access or permission, reliability, attribution, freshness, incident identity or deduplication, correction, or lifecycle behavior is inadequate. Conversely, a reliable and permitted source does not justify notifying an address unless the record also matches an approved geographic rule. Both gates must pass before a device notification is eligible.
- This definition did not itself approve point-based notification, a radius model, a distance, or any source. The later MVE-1 hierarchy and universal-radius decisions approve the point-based rule without approving any individual source.

## 2026-08-18 — MVE-1 Point-Only Fire Geography Hierarchy

- MVE-1 uses a tiered geographic hierarchy for otherwise notification-eligible fire records. LHL uses qualifying source-authoritative, event-linked geography whenever it is available; it does not wait for a polygon, zone, perimeter, or affected-address designation when the eligible record is currently point-only and the approved point fallback passes.
- For MVE-1, every otherwise eligible point-only fire report uses one universal, pre-approved radius around the source point. This is Model 1 as the point-only fallback inside the broader Model 3 hierarchy, not Model 1 as a replacement for source-authoritative geometry.
- When either source/record eligibility or the applicable geographic rule fails, the record does not generate a device notification. When better qualifying source geometry arrives, it replaces the temporary radius for subsequent saved-address evaluation; separately approved material-update rules govern follow-up communication.
- The later MVE-1 universal-radius decision sets the distance, boundary behavior, evidence floor, and Gate 3 copy baseline. Individual source eligibility and exact freshness durations remain open.
- A source/class-specific radius model is considered the superior long-term refinement because it can account for differences in point meaning and source behavior. It is deferred from MVE-1 because the closed, invitation-only pilot is expected to use few sources and the additional evidence, configuration, testing, and maintenance are not presently justified. The refinement is recorded in the future roadmap backlog as potential product differentiation.

## 2026-08-18 — MVE-1 Saved-Home Geocoding Baseline

- MVE-1 converts each participant's saved home address into one Google-derived coordinate point for incident-distance calculations. It does not use a parcel or property-boundary polygon and does not fall back to device location.
- Because the Boulder Heights pilot is small and invitation-only, John or the pilot operator visually verifies every participant's derived home point before that household can receive point-based incident notifications. A clearly wrong, unresolved, or unverified result fails closed to no point-based push until corrected or verified.
- MVE-1 does not include a resident-adjustable map or satellite pin. A future resident-confirmed home-point flow is deferred and recorded in `docs/future-roadmap-backlog.md`.
- Gate 4 must select the exact Google service and approve its API configuration, billing, permitted storage and refresh behavior, attribution, privacy handling, and the metadata retained with the derived point. This decision approves the product baseline, not a specific API implementation or a claim that Google geocoding is uniformly accurate across Boulder Heights.
- John's visual verification of one founder property informed the decision but does not establish cohort-wide accuracy. The exact address, coordinate, and screenshot used for that check are intentionally not recorded in shared project artifacts.

## 2026-08-18 — MVE-1 Universal Point-Only Fire Rule

- An otherwise notification-eligible point-only fire report generates one device notification when its source-published incident point is within or exactly 10 miles of the resident's stored, operator-verified saved-home point, measured as straight-line distance.
- The boundary is inclusive: distance less than or equal to 10 miles qualifies. LHL calculates with full stored coordinate precision, displays the distance rounded to the nearest whole mile with no decimals, and adds no hidden buffer. The published 10-mile rule already includes the pilot's chosen sensitivity and ordinary point/address uncertainty tolerance.
- A stable source or upstream incident identifier is mandatory for MVE-1 point-based push and deduplication. Missing identity fails closed; LHL does not invent a fuzzy composite incident key for this path.
- Qualifying source-authoritative, event-linked geography replaces the temporary radius when available. LHL re-evaluates saved addresses: newly included households receive their first incident notification; previously notified households that become excluded receive a qualified geography update that is explicitly not an all-clear; and source-limited closure reaches every address ever matched.
- For conflicting points, LHL first confirms that records represent the same incident, then applies the pre-approved source hierarchy and applicable record-class rules. When identity, correction state, timestamp ordering, spatial meaning, or hierarchy applicability remains ambiguous, new point-based push fails closed and the sourced disagreement may appear in-app. Coordinates are never averaged.
- An advisory is not an evacuation warning or mandatory evacuation order. It follows its own event/source matrix row and remains a silent in-app update under the current working rule unless separately approved for push.
- Gate 3 uses the approved drafting baseline: a programmatic incident-type label, source attribution, distance rounded to the nearest whole mile, the published radius rule, an explicit statement that point proximity is not an affected-area boundary or evacuation notice, and an in-app source link. Final UX/UI layout and exact copy remain Gate 3 work.
- Exact initial-notification and current-context freshness durations remain open pending WildWeb lifecycle evidence and the bounded WFIGS latency sample. This rule does not make any source notification-eligible.

## 2026-08-18 — Genasys/ODM Parallel Outreach and Scalability Boundary

- Evaluate Genasys Protect through two parallel inquiries rather than treating Boulder permission and platform scalability as the same question.
- The vendor-level inquiry asks Genasys whether LHL can obtain one supported commercial API or partner agreement for authoritative evacuation-zone geometry and live status across participating jurisdictions; what attribution, storage, polling or webhook, lifecycle, and redistribution terms apply; and whether each jurisdiction must separately opt in or approve access.
- The local inquiry asks Boulder ODM and/or Boulder County Sheriff's Office who controls Boulder's Genasys zone and status data, whether the local contract permits third-party access or redistribution, which supported feed exists, and whether Boulder approval is sufficient or must be paired with Genasys authorization.
- A Boulder-only grant may be used as a local MVE-1 enhancement if it independently passes the source-eligibility requirements. It is not evidence of a nationally scalable source. Genasys is treated as a scalable source candidate only if the vendor-level technical and permission model can be reused across participating jurisdictions without repeated one-off negotiations at every locality.
- Even a reusable Genasys agreement covers only jurisdictions participating in the platform. Nationally oriented authoritative sources remain necessary as the base layer, with Genasys evaluated as a potentially repeatable—but non-universal—protective-action enhancement.
- Genasys's public consumer terms do not currently authorize LHL's intended commercial automated use. Until written permission, API terms, local authority, attribution, freshness, stable identity, correction, and lifecycle behavior are confirmed, Genasys and Boulder evacuation-zone data remain notification-ineligible.
- John sent the Boulder ODM/BCSO inquiry and attempted the Genasys inquiry on 2026-08-18. The Genasys email later bounced and was rerouted through the official Partner Network form, as corrected in the entry below. The former combined outreach task was therefore superseded; at this stage, the separate Genasys task remained In Progress. The later 2026-08-26 Gate 2 closure entry records its no-response completion.

## 2026-08-18 — Genasys Outreach Rerouted After Bounced Email

- Correct the earlier delivery record: the message to `info@genasys.com` bounced as Address not found, and the `support@genasys.com` CC address was not independently verified. Neither address is treated as valid Genasys routing.
- Genasys's current Contact Us page routes inquiries through web forms. The applicable path is the Partner Network interest form reached from the official Partner Network page.
- The Partner Network's `Community Resiliency and Safety` category expressly describes sharing agency-activated emergency communications with for-profit and nonprofit partners that redistribute the information to the public in real time. This supports a vendor-level scalable agreement as a live possibility, not an approved outcome.
- John submitted the full nine-question inquiry through the partner-interest form on 2026-08-18 with Area of interest `Genasys Protect (SaaS)`, Product interest `Genasys Protect – Zone-based, multi-channel communication`, and Partner interest `Becoming a partner`.
- The form displayed a `Partner Interest` thank-you confirmation stating, `Thank you. A member of our team will be in touch with you soon.` No reference number was provided. The bounced email in John's Sent folder remains the canonical record of message content, not evidence of delivery; the confirmation screenshot is evidence of form submission.
- Follow up on 2026-08-25 if no substantive response is received.
- At this stage, `Send Genasys evacuation-data partnership inquiry` remained In Progress awaiting response. The later 2026-08-26 Gate 2 closure entry records the no-response checkpoint and task completion; no source, agreement, permission, or scalability outcome was approved.

## 2026-08-17 — Gate 2 Provisional Incident-Notification Working Rules

- These are founder-approved provisional Gate 2 rules for populating and testing the incident-notification eligibility matrix. They remain subject to source research, event-specific stress testing, and later founder approval of the completed matrix.
- Incident pushes are never community-wide. Eligibility is evaluated separately for each resident using that resident's saved property address, with no device-location fallback. A resident may qualify while another member of the same trusted group does not.
- Formal warning-level products are the working push baseline. Watches, advisories, and statements are in-app by default unless a specific event/source matrix row establishes a reason for push. A newly reported fire is evaluated as an incident and is not forced into the weather-warning hierarchy.
- Every newly reported fire from a verified, trusted, notification-eligible source is a push candidate when it matches the resident's approved geographic-relevance rule, regardless of small initial acreage. An unverified resident report alone does not generate an incident push in MVE-1.
- Qualifying source-issued polygons, zones, perimeters, and address designations remain the preferred match. The later 2026-08-18 MVE-1 universal rule establishes an inclusive 10-mile point-only fallback with no hidden buffer and a mandatory stable source/upstream incident identifier. Approximate location is not blanket notification permission, and every source remains subject to separate eligibility approval.
- Watch Duty is classified as a trusted secondary aggregator rather than a primary authority. It may qualify for push only if it preserves upstream attribution and independently satisfies reliability, access/licensing, freshness, geography, stable identity, and update/correction requirements. Fire coverage remains a critical Gate 2 feasibility problem rather than an accepted omission.
- A source-limited material closure update goes to every saved address that matched the incident at any point, including addresses added by a later boundary expansion and addresses no longer included after a later contraction, regardless of whether the resident opened or acknowledged an earlier update. LHL repeats the source's status and does not call it an independent all-clear.
- MVE-1 retains the three previously approved voluntary household signals: acknowledgement of a specific sourced incident update, self-reported household presence, and a self-reported incident check-in that the household is outside or has left the incident-relevant area. It does not add a generic `I'm okay` or verified `Safe` status.
- Structured resident incident reporting and a user-visible historical incident log are explicitly deferred to Post-G6 discovery. Neither changes MVE-1 scope.

## 2026-08-21 — WFIGS/IRWIN MVE-1 Role, Freshness Controls, and Founder-Controlled Pilot Suspension

- WFIGS/IRWIN is approved as the bounded MVE-1 wildfire incident backbone for incident identity, live or simulated incident workflows, and lifecycle context. WFIGS is LHL's public polling surface and IRWIN is its upstream incident source. A previously unseen wildfire record may generate a participant-facing proof-of-concept notification only when LHL first detects its stable `IRWINID` through a successful WFIGS query no later than 30 minutes after IRWIN `CreatedOnDateTime`, and it independently passes the approved source/record, validity, feed-health, identity, and geographic gates. LHL stores the first successful observation as `first_seen_at`.
- `FireDiscoveryDateTime` remains the reported discovery/confirmation time for display, audit, and latency analysis; it does not start or disqualify the 30-minute notification clock. This corrected clock supersedes the earlier same-day wording that compared IRWIN creation with `FireDiscoveryDateTime`.
- LHL polls WFIGS on a consistent five-minute interval without depending on its upstream refresh phase. WFIGS states that it refreshes from IRWIN every five minutes; the two unsynchronized five-minute cycles imply nominal first detection in less than about ten minutes plus processing after IRWIN creation, not a guaranteed service level. More aggressive WFIGS polling cannot eliminate latency before IRWIN creates the record.
- The remaining operative controls are unchanged: after 15 minutes without a successful WFIGS query, WFIGS-dependent current context fails closed; after 60 minutes from the applicable source modification time, mutable incident fields retain their timestamp but are not presented as current or used to escalate a notification.
- Lefthand Canyon reports `FireDiscoveryDateTime` near 2:33:59 p.m. MDT and IRWIN `CreatedOnDateTime` at 3:51:56.730 p.m. MDT. Under the corrected rule it satisfies the freshness gate if LHL first sees its previously unseen stable `IRWINID` by approximately 4:21:56.730 p.m. MDT and all other gates pass. Its roughly 78-minute discovery-to-creation interval remains material latency evidence but is not a reason to suppress the initial proof-of-concept notification.
- Approval is limited to the closed MVE-1 proof of concept. It does not approve WFIGS/IRWIN as the eventual public-production warning architecture, resolve production licensing or redistribution terms, or remove the need for longer-duration latency and completeness validation.
- A real WFIGS/IRWIN-eligible incident does not automatically suspend the pilot. John, as LHL CEO and the Boulder Heights pilot owner/administrator, has sole authority to suspend or terminate pilot operations. This supersedes the 2026-08-06 automatic-suspension language.
- This operational authority does not broaden the MVE-1 membership-administrator feature, permit incident interpretation, or create authority to direct participant behavior.
- The pilot may observe how a small incident that is not threatening life or property is detected and handled. If the incident grows or appears materially threatening, John may execute the manual `PULL THE PLUG` procedure. The detailed indicators, checklist, backup authority, notification-disabling steps, participant communications, audit trail, and restart rules must be defined and tested before participant access through the 911-liability and Gate 6 pilot-operations workstreams.
- Participant terms must disclose the experimental proof-of-concept nature of the system, possible live-incident display, founder-controlled suspension, and non-reliance boundary. Official instructions and personal safety always take priority; LHL does not declare safety, direct emergency response, or imply emergency-authority status.
- At this stage, WildWeb remained `Candidate / TBD` pending an answer or cold-lead decision. The later 2026-08-26 Gate 2 closure entry records `Notification Eligibility: No` for MVE-1 after the no-response checkpoint. Direct Watch Duty integration remains `No` for MVE-1 under current public terms; a future paid or enterprise relationship remains viable.
- The detailed functional record and outstanding questions are maintained in `docs/functionality-decision-log.md`. The supporting research record is the Google Doc `Gate 2 Research Exercise — WFIGS-IRWIN Live-Latency Sample & Freshness Windows — 2026-08-21`.

## 2026-08-21 — Gate 2 Internal Safeguards Position and Closed-Pilot Acknowledgment Approved

- John approved `docs/gate-2-liability-safeguards-position.md` as the controlling internal product/pilot position and approved `docs/closed-pilot-participation-liability-acknowledgment.md` as the closed-pilot draft for counsel review. This approval completes the target outputs for `Blocker 2: 911 Call Liability & Legal Strategy` and `Draft closed-pilot participation and liability acknowledgment`; it does not constitute counsel approval, authorize participant use or public release, or close Gate 2 by itself.
- MVE-1 has no approved app-level `Call 911` or `Text 911` action. Gate 3 must decide whether a `Call 911` action belongs in the product. The controlling participant instruction is to move to safety and call 911 immediately when the participant believes they are in danger. If a later founder decision includes an action, it must require deliberate initiation, use a native phone handoff, never call automatically or make LHL an intermediary, and never imply that emergency services or participant/location data were reached.
- John may suspend or terminate the pilot using his CEO/pilot-owner judgment without satisfying quantified thresholds. Before participant access, the Gate 6 plan must test a single authenticated pull-the-plug action that presents a participant-facing `PILOT SUSPENDED` takeover, suppresses new participant notifications and drill content, preserves only minimum backend processing/logging needed for audit, and requires an explicit founder safety check before restart. A pre-designated alternate must have access and at least one plain-language condition for acting without first reaching John.
- The approved intent is local-first participant data handling without a centralized participant-data warehouse. This is not approval of zero backend, any provider, or an exact architecture. Gate 4 must determine the minimum server-side processing required for source polling, APNs/FCM fan-out, enforceable expiry/revocation, suspension, and audit; approve on-device protection; and define local/central data categories, retention, and post-pilot deletion. Centrally stored pilot participant data is deleted after documented closeout unless a specified minimum record must temporarily be retained for security, incident review, legal obligations, or pilot integrity.
- An enrolling adult must confirm authority to provide information about household members and obtain any permission reasonably required from them. The final participant privacy notice and Gate 3 permission design must state the data purpose, visibility, storage location, protection, retention, correction/deletion behavior, and withdrawal process before collection begins.
- The participant contact is `john@leehilllabs.com`; a backup contact remains required before participant use. Insurance and corporate risk controls require an owned, dated pre-pilot scheduling decision. Full unresolved carryover is in `docs/gate-2-safeguards-gap-analysis-2026-08-21.md`.
- Formal counsel review remains required before public release. At the time of this approval, WildWeb remained pending/unavailable and external-feed feasibility remained In Progress. The later 2026-08-26 Gate 2 closure entry records John's completion and closure decisions.

## 2026-08-26 — MVE-1 Weather Event-Family Notification Rules

- The existing NWS baseline remains controlling: formal Warning-tier products are push-eligible by default when every independent source/record and saved-address geographic gate also passes. Watch, Advisory, and Statement tiers remain in-app only unless an explicit event-family or event/source matrix exception applies. The separate verified-wildfire incident rule remains outside this weather hierarchy.
- Fire weather is an MVE-1 family-level exception. `Fire Weather Watch` and `Red Flag Warning` are both push-eligible, so this family begins pushing at Watch tier rather than Warning tier. This exception reflects the Boulder Heights pilot's wildfire mission and does not waive any source, identity, freshness, lifecycle, or geographic gate.
- Heat is the opposite MVE-1 family-level exception. `Heat Advisory` and `Extreme Heat Warning` are both in-app only and never push in MVE-1, including at Warning tier. `Extreme Heat Warning` is the current NWS CAP/API event string; NWS renamed the former `Excessive Heat Warning` product effective 2025-03-04 without changing `Heat Advisory`.
- Flood, severe-convective, wind, and winter families follow the general baseline without a family exception: Warning tier pushes; Watch and Advisory tiers remain in-app only. Exact covered event strings are maintained in the Gate 2 Event Matrix and must match the live NWS API vocabulary.
- No coastal-flood, tsunami, hurricane/typhoon, storm-surge, or marine rows or exclusion rules are added for the Boulder County pilot. Current saved-address geographic matching already prevents an out-of-area product from qualifying. These families remain deliberately undecided so a stale regional exclusion cannot silently suppress a relevant hazard if LHL later serves another geography.
- At this stage, the twenty populated family rows remained `Decision Status: Draft` pending John's completed-matrix review. The later 2026-08-26 Gate 2 closure entry records approval of rows 3–23 and supersedes this temporary status.

## 2026-08-26 — Gate 2 Closure

- John approved the completed Gate 2 Event Matrix rows 3–23 as written. This includes the earlier `NWS Special Weather Statement` row and the twenty weather-family rows populated on 2026-08-26. Their `Decision Status` is `Approved`.
- `Acknowledgement Eligible: TBD` is an intentional Gate 3 carryover, consistent with the existing decision that exact incident-acknowledgement eligibility, reset behavior, wording, prompting, and hierarchy must be tested in Gate 3. It does not leave Gate 2's push or in-app eligibility undecided.
- John confirmed that no WildWeb or Genasys response had arrived by the 2026-08-26 closure checkpoint. Both remain `Candidate` research paths but have `Notification Eligibility: No` for MVE-1. WildWeb requires later written authorization and lifecycle evidence for any prospective decision; the Genasys vendor inquiry is closed at the no-response checkpoint. Boulder County's separate response remains recorded, with Boulder ODM `Candidate/TBD` and Steve Silbermann as the county-policy conduit.
- NOAA NGFS remains an `Additional Information Only`, research-only `Candidate` with `Notification Eligibility: No`. NOAA Fire Weather Testbed outreach and further NGFS learning may continue in parallel. New source information will be evaluated when received and does not require reopening Gate 2.
- The documented event/source taxonomy and source finding, founder-approved eligibility matrix, founder-approved liability/safeguards position, and founder-approved closed-pilot participation/liability acknowledgment satisfy all Gate 2 exit criteria. John explicitly closed Gate 2 on 2026-08-26. Gate 3 is now the current product gate.
- Gate 2 closure does not approve a public-production warning architecture, public release, unresolved source reuse, any unauthorized interface, or formal legal sign-off. Production licensing, longer-duration source validation, Boulder authorization, NGFS authorization/semantics, final acknowledgement behavior, technical architecture, and pre-pilot operational safeguards remain assigned to their documented later gates or parallel tracks.

## 2026-08-31 — Post-Incorporation Issuance Direction After Cara Response

- Based on John's supplied summary of Cara O'Brien's response, the two-track post-incorporation structure is workable: complete John's issuance while leaving a reserve authorized but unissued, then complete Randall's direct company issuance and IP-transfer documents later as one purpose-built transaction. This resolves the prior question of whether Randall's IP transfer should move separately now; the current direction keeps it with his later issuance package.
- John rejected the previously floated second non-voting stock class after Cara raised unresolved tax and ownership-control concerns that would require specialist tax review. Randall's later shares will use the same class of common stock as John's, with voting constrained through a separate agreement rather than through the stock class itself.
- The exact vote-alignment instrument remains unapproved pending Cara's advice on a voting agreement versus an irrevocable proxy. No Randall Board Consent, Stock Purchase Agreement, Notice of Stock Issuance, IP-assignment/CIIAA-equivalent, voting instrument, cap-table update, execution, or filing is approved by this entry.
- John asked Cara to schedule a separate discussion about a possible ongoing engagement and possible equity compensation. No engagement, equity award, percentage, vesting terms, grant type, Stock Plan, reserve, or timing is approved. A rough figure of approximately 5% discussed internally was not proposed to Cara and is not a commitment.
- Because a later service-provider equity reserve could change the current issuance allocation, the final number of shares issued to John now remains open. Randall's intended 1,000,000-share allocation is not repurposed by this entry.
- Clerky Stock Plan Adoption remains the wrong tool for Randall's one-time direct issuance. It may be considered for a future vesting service-provider pool only if John and Cara separately approve that structure.
- Evidence boundary: this entry records John's decisions and his supplied 2026-08-31 Claude session summary; Cody did not inspect Cara's original response and provides no independent legal conclusion.

## 2026-09-01 — MVE-1 911 Action Excluded; Contextual Safety Instructions Required

- John approved the Gate 3 decision that MVE-1 includes no app-level `Call 911` or `Text 911` action. This resolves the explicit Gate 3 carryover from the 2026-08-21 safeguards decision.
- LHL does not automatically call, act as an intermediary, or transmit participant, location, request, or incident information to emergency services. The approved group-member Call and Text actions remain separate native handoffs to another member's phone number and must remain visibly distinct from 911 or emergency reporting.
- MVE-1 uses contextual safety instructions instead of a 911 control. Required locations are onboarding or the point before incident notifications are enabled, relevant incident-detail surfaces, request creation where LHL could be mistaken for emergency reporting, and an accessible Help/Safety location. The instruction is not limited to an LHL-classified active incident because personal danger can precede, outlast, or differ from LHL's incident state. It is not a repetitive app-wide banner.
- The primary copy baseline is `Follow instructions from public authorities. If you believe you are in danger, move to safety and call 911 when able. LHL does not contact emergency services.` The shorter incident baseline is `Follow official instructions. If you are in danger, move to safety and call 911 when able.` Request creation states `Requests in LHL do not contact emergency services.`
- Gate 3 wireframes and scenario testing finalize wording, visual hierarchy, accessibility, and exact placement. Those presentation decisions may refine the copy but do not reopen the approved no-action boundary. This decision does not constitute counsel approval or authorize participant use or public release.

## 2026-09-01 — Gate 3 Experience-Map Role and Coordination Rules

- John approved the five-lane Gate 3 experience-map framework for low-fidelity screen drafting: resident/household, LHL and sourced information, trusted member/helper, administrator, and the cross-cutting safety/privacy/permission/failure lane. A lane represents the role or system responsibility active at a moment, not necessarily a distinct person; one participant may appear in different human-role lanes at different points.
- MVE-1 retains exactly three persistent request states: Open, Claimed, and Closed. A trusted member claims an Open request before private in-app coordination begins. The claim opens a request-specific thread visible only to the requester and claimant, and either participant may send the first message.
- If the match is unsuitable, the claimant may release the claim or the requester may reopen the request. Either action returns the request to Open without creating a fourth persistent state. Only the original requester may close a completed request; the helper cannot close it.
- MVE-1 may remind the original requester that a Claimed request remains open and ask them to close it or keep it open. LHL never closes the request automatically. Exact timing, whether timing varies by request context, and whether delivery is push or in-app remain Gate 3 testing decisions.
- The reminder rule above supersedes the 2026-08-06 blanket deferral of claim reminder mechanics beyond MVE-1. It does not approve a universal seven-day threshold, a push-notification provider, or automatic closure.
- Gate 3 screen inventory includes lightweight, skippable first-use guidance rather than one long tutorial. Invitation/onboarding explains LHL's role and limits, notification behavior, and the 911 boundary. First arrival at the household-first home identifies sourced information, household signals, and community activity. The guidance can be reopened from Help.
- The sourced-information stage includes approved in-app-only advisories, watches, and other non-push conditions as well as push-eligible incident information, always under the controlling Gate 2 Event Matrix, source, geography, freshness, correction, and limitation rules.
- Temporary private-information sharing is limited to the information needed for the specific task. Unrelated entry instructions and household details remain private. The existing purpose, recipient, expiry, and revocation controls remain required.
- These approvals advance the experience-map and screen-inventory work but do not approve the acknowledgement alternative, final reminder timing/channel, final tutorial copy/layout, all low-fidelity screens, or Gate 3 closure.

## 2026-09-01 — Minimal Incident Acknowledgement Approved as MVE-1 Baseline

- John approved the experience-map option `B — Minimal “I saw this update”` as the MVE-1 acknowledgement direction to prototype and test. This resolves the open choice among no acknowledgement, the minimal action, and a fuller visible treatment.
- This decision supersedes the 2026-08-06 provisional alternative-selection question: acknowledgement is now approved MVE-1 scope with option B as the baseline. It does not erase the requirement to test the interaction or the separate open eligibility and presentation details below.
- The baseline is one optional, deliberate action tied to one exact sourced update. Absence is shown as `No acknowledgement recorded`. Receipt, notification delivery, opening the app, or viewing an update does not count.
- Acknowledgement never proves awareness, comprehension, agreement, compliance, or safety. A material correction or source update must not silently inherit the earlier acknowledgement; freshness applies to the exact referenced source version.
- John currently leans toward the fuller visible option C as a possible later evolution, but it is not approved as the MVE-1 baseline. It must first be compared with the minimal baseline and tested for added pressure, complexity, stale carry-forward, and false reassurance.
- Still open in Gate 3: final consumer wording; prompt and placement; hierarchy and audience within the approved group; expiry/staleness; and the exact reset presentation after a material source change. Acknowledgement eligibility is resolved by the later 2026-09-01 push-derived eligibility decision. This decision does not approve all low-fidelity screens, complete the active roadmap task, or close Gate 3.

## 2026-09-01 — Push-Derived Acknowledgement Eligibility and Evacuation-Source Critical Path

- For MVE-1, acknowledgement eligibility follows push eligibility. An initial notice or material update is acknowledgement-eligible only when that exact sourced update independently warrants an LHL push under the founder-approved Event Matrix. This is source/update eligibility, not proof of device delivery; an eligible update remains eligible even if a particular device does not receive the push.
- `Event Matrix!J2:J23` is approved to mirror the existing `Push Eligible` decisions: every push-eligible row is `Acknowledgement Eligible: Yes`, and every in-app-only row is `No`. Unknown or unmapped combinations continue to fail closed.
- Boulder ODM's internal Everbridge-to-Incident-Map publishing path, pursued through Steve Silbermann as conduit to the county policy group, is the preferred prospective MVE-1 path for automated evacuation warnings and orders. This is a route to seek county-authorized, technically supported access, not a claim that access, permission, completeness, or a usable feed already exists.
- Begin this work immediately and carry substantial lead time through Gate 4. A negative or delayed access outcome does not cancel the MVE-1 pilot, but it materially reduces pilot viability. The fallback is an explicit no-automated-evacuation-coverage pilot boundary, with only unmistakably simulated protective-action data used for approved testing; LHL must not substitute an unauthorized interface or imply real coverage.
- Post-MVE-1, continue evaluating repeatable government, vendor, and national-backbone-plus-local-enhancement approaches. MVE-1 prototypes and pilot evidence may support the later partnership/use-case argument but do not themselves confer access or approval.
- This decision does not approve a source provider, integration architecture, outbound proposal, technical endpoint, contract, or public-production warning capability. Those require their assigned authorization and later-gate decisions.

## 2026-09-03 — Gate 3 Slice A Entry, Profile, Membership, and Saved-Home Coverage

- John approved Slice A coverage in the Gate 3 screen/state inventory: X01 and S01–S12, with S06 retired. This approves necessary screen families and consequential states only; it does not approve low-fidelity layouts, final copy, Slices B–D, the complete Gate 3 inventory, the active roadmap task, or Gate 3 closure.
- X01 is a generic community-administrator invitation. It must clearly identify the platform link as an invitation to download and install the app and separately provide a `COMMUNITY JOIN CODE` for later entry. Neither installation nor possession of the code grants membership.
- S01 may randomly rotate five to seven short launch messages, including safety and community-value themes, and the set may be updated occasionally. Mandatory 911, official-instruction, notification-limit, and emergency-service disclosures remain on their required contextual surfaces and cannot depend on a random rotation.
- S02 retains the explanation-before-permission flow. Denial or later OS-level disabling leaves the app usable and provides a clear recovery path to OS and LHL notification settings.
- S03 is `Resident account and contact information`; S04 is `Home and assistance information`. Each adult has one independent User Profile. Multiple adults may save the same address, but MVE-1 does not link, merge, or deduplicate their profiles into a household account. Their home information, requests, notification eligibility, and self-reported signals may differ independently.
- The required resident/contact fields are first name, last name, phone number, and Call/Text consent; preferred first name is optional. A phone number as unique identifier with six-digit SMS confirmation is a Gate 4 authentication candidate, not an approved provider or architecture choice.
- Saved home address and entry instructions are required home/assistance fields. Pets or animals, driveway or physical-access notes, utility-shutoff information, and mobility or other practical needs are optional. The standing field `people in the household relevant to an assistance request` is removed. Replaceable starter examples may explain optional fields but must never be saved as resident data unless actively adopted or replaced.
- S05 is `Incident-notification setup and saved-home location`. It shows the interpreted address and a static neighborhood pin after address entry, explains incident-matching use, and presents LHL notification settings with the default shown as on. The resident may use the shown location or edit the address. An approximate-but-close point is acceptable for MVE-1's inclusive 10-mile rule.
- MVE-1 has no operator or community-administrator home-point verification. An ambiguous, invalid, or likely mistyped address produces a suggested correction or edit path. A legitimate address that cannot be validated may still be saved. If a reasonable coordinate is returned, the resident may use it. If no usable coordinate is returned, profile setup and the rest of LHL continue, but point-based incident notifications remain unavailable until a location is established. This supersedes the operator-verification portion of the 2026-08-18 saved-home decision; the movable resident pin remains Post-MVE-1.
- S06 is retired because MVE-1 neither links adults into a household profile nor collects the removed standing household-member field. S07 uses generic `Join a community` language; a valid code may reveal only the community name for confirmation before the separate administrator approval. It does not reveal roster, request, activity, or other group content.
- S08 shows last successfully known membership state offline and says a newer decision cannot be checked. S09–S10 use generic community-administrator language, remain limited to approve/deny membership, and present already-reviewed or changed requests plainly. The administrator gains no emergency-management role.
- S11 records six tutorial topics for later low-fidelity design: general navigation, current sourced conditions, community membership, viewing/making requests, the user profile, and replay from Help. S12 is the saved-home starting screen with clear paths to sourced conditions, signals, requests/offers, membership, profile, and Help. Exact tutorial sequence, launch-message set, final copy, and visual treatment remain Gate 3 design work.

## 2026-09-03 — Gate 3 Slice B Event Hierarchy, Evacuation, and Acknowledgement Coverage

- John approved Slice B coverage for S13–S16. This approves the necessary sourced-Event, update-history, acknowledgement-visibility, and saved-home-signal coverage; it does not approve final layouts, final copy, Slices C–D, complete-inventory handoff, the active roadmap task, or Gate 3 closure.
- `Event` is the product-level and user-facing umbrella for a source-defined occurrence or official notice series. `Incident` remains internal/reference language when it accurately describes an actual occurrence and is not a separate product hierarchy level.
- Each Event has exactly one Event Type, one stable source-defined identity, a current/latest state, and a chronological update sequence. The feed shows one current item per Event rather than every update as another feed item; Event detail presents the current state and the sourced update history.
- Different Event Types remain separate. A Winter Storm Warning, High Wind Warning, and Special Weather Statement are separate Events rather than one inferred master winter-storm Event. Time, geography, or similar language alone are insufficient grounds to merge records.
- Multiple attributable sources may contribute to one Event only through a shared stable identifier or a separately approved deterministic relationship. Source and field/update provenance must remain visible; LHL does not average or independently adjudicate conflicting facts. Related Events may link without merging, and no administrator manually groups Events during MVE-1.
- Evacuation warnings and orders are prominent standalone Events with their own type, authority, geography, identity, and lifecycle. They may link to a related wildfire or other Event only when authoritative identity evidence or an approved deterministic rule establishes the relationship. Boulder ODM remains a prospective pilot source path rather than an assumed or approved source.
- The interface does not label Events or updates as push-eligible or in-app-only. Those are internal Event Matrix and delivery rules. The existing rule remains that acknowledgement is offered only for an exact initial or material update that independently qualifies for push.
- S15 gives acknowledgement visibility an explicit, community-scoped coverage home for one exact Event update. The current hypothesis is a compact summary on Event detail plus an on-demand searchable/filterable view using `Acknowledged` and `No acknowledgement recorded`, never awareness, safety, or compliance language. Event identity remains independent of a community, and acknowledgement visibility must not expose membership or activity across communities.
- S15's location and separate-screen necessity are not locked. Wireframes must test a separate screen versus an expandable Event section, filtered member view, or other placement; findability; 10-versus-200-member scale; selected-community clarity; and surveillance/social-pressure risk. Avoid an unlimited inline member list and a default `x of total members` denominator. The visual pattern may change without reopening the underlying acknowledgement-visibility requirement.
- S16 is `Saved-home signals`. Presence and Event check-in belong to the reporting adult profile, remain separate from acknowledgement and any verified-safety claim, and are not inherited by another profile using the same address.

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
- 2026-08-21 — WFIGS/IRWIN MVE-1 Role, Freshness Controls, and Founder-Controlled Pilot Suspension
- 2026-08-21 — Gate 2 Internal Safeguards Position and Closed-Pilot Acknowledgment Approved
- 2026-09-01 — Minimal Incident Acknowledgement Approved as MVE-1 Baseline
- 2026-09-01 — Push-Derived Acknowledgement Eligibility and Evacuation-Source Critical Path
- 2026-08-06 — No General Chat or Neighborhood Forum
- 2026-08-06 — Native Call and Text Actions in MVE-1
- 2026-08-06 — Household Signals and Provisional Incident Acknowledgement
- 2026-08-06 — MVE-1 Household Profile Source, Derived Display, and Helper-Sharing Scope
- 2026-08-07 — Gate 1 Remaining MVE-1 Boundary Set
- 2026-08-07 — Gate 1 Trust and Tone Principles
- 2026-08-07 — Gate 1 Closure
- 2026-08-17 — Gate 2 Provisional Incident-Notification Working Rules
- 2026-08-26 — Gate 2 Closure
- 2026-09-01 — MVE-1 911 Action Excluded; Contextual Safety Instructions Required
- 2026-09-01 — Gate 3 Experience-Map Role and Coordination Rules
- 2026-09-03 — Gate 3 Slice A Entry, Profile, Membership, and Saved-Home Coverage
- 2026-09-03 — Gate 3 Slice B Event Hierarchy, Evacuation, and Acknowledgement Coverage
