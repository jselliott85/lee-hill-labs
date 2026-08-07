# Functionality Decision Log - Lee Hill Labs / ECA

## Purpose

This log captures product behavior, logic, data needs, and user-story seeds for ECA. Some early entries originated in presentation mockups; they remain useful product context, but presentation work is paused and does not create new scope.

## Capture Keyword

Use `devlog` when an approved product discussion creates a functional product rule.

When `devlog` appears, capture the decision here, organize it by feature area, and convert it into planning-ready notes:

- Product rule: what must be true in the app
- User story seed: who needs it and why
- Data / logic notes: fields, state, permissions, or workflows implied
- Open questions: unresolved assumptions before build
- Source: slide, conversation context, or related mock screen

## Feature Areas

- Incident dashboard
- Group coordination
- Household profile
- Requests and tasks
- Emergency text feed
- Map, routes, and hazard perimeter
- Check-ins and safety status
- Offline plan
- Partner / civic view
- Onboarding and groups
- Notifications and escalation
- Permissions and privacy

## Decisions

### 2026-05-01 - App Placeholder Naming

- Product rule: Use `ECA` as the in-app placeholder name until the final product name is chosen.
- User story seed: As a deck reviewer, I need consistent app naming so product screens feel like one coherent system.
- Data / logic notes: Keep `ECA` easy to find/replace in UI copy and documentation.
- Open questions: Final app name and shorthand.
- Source: App screen mockups, docs/memory find/replace notes.

### 2026-05-01 - Demo Community

- Product rule: Use `Boulder Heights` as the current demo community in app mockups.
- User story seed: As an emergency partner or local group admin, I need the app scoped to a recognizable community so coordination context is clear.
- Data / logic notes: Community name should be configurable per group or deployment.
- Open questions: Final first-test geography or UAT community.
- Source: Slide 5 and slide 9 app screens.

### 2026-05-01 - Incident Dashboard

- Product rule: The dashboard should foreground the active incident, check-in count, urgent requests, emergency feed, safety action, and offline plan readiness.
- User story seed: As a household member during an incident, I need one screen that tells me what is happening, whether my group is accounted for, what is needed, and how to report my status quickly.
- Data / logic notes: Requires incident name/status, group check-in counts, request count, emergency feed items, user safety status, and offline cache state.
- Open questions: Who can publish emergency feed items, and how are official vs community updates distinguished?
- Source: Slide 5 dashboard mockup.

### 2026-05-01 - Group Coordination

- Product rule: Group coordination should combine incident context, chat/action access, urgent request count, and emergency news updates.
- User story seed: As a group member, I need urgent requests and emergency updates separated from general conversation so action items do not get buried.
- Data / logic notes: Requests should be countable and status-based; news updates may need source labels, timestamps, and priority levels.
- Open questions: Whether `Group chat` is a full chat surface, a filtered coordination thread, or a button into chat.
- Source: Slide 9 screen 2.

### 2026-05-01 - Household Profile

- Product rule: A household profile should store emergency-relevant details: address, door code, animal locations, and supplies.
- User story seed: As a trusted group member helping during an evacuation, I need authorized household details so I can assist quickly without searching old messages.
- Data / logic notes: Sensitive fields require explicit permissions, access logging, and incident-mode visibility rules.
- Open questions: Which fields are always visible, incident-only, or hidden unless shared with specific trusted contacts?
- Source: Slide 9 `My Household` screen.

### 2026-05-01 - Open Requests

- Product rule: Requests should be concrete, urgent, and written as needs such as `Horse Trailer`, `Jumper Cables`, and `Dogs in house`.
- User story seed: As a neighbor or emergency partner, I need a clear request list so I can volunteer help or route the need to someone who can act.
- Data / logic notes: Requests need type, urgency, requester, location/household association, status, assignee, and resolution state.
- Open questions: Whether requests can be created by households, coordinators, emergency partners, or all group members.
- Source: Slide 9 screen 5.

### 2026-05-01 - Tasks vs Requests vs Answered Requests

- Product rule: Separate pre-evacuation `tasks` from help `requests` and `answered requests` so users do not confuse private/checklist work with group help coordination.
- User story seed: As a user who needs more horse trailers than I have access to, I need to post a request to my group so a neighbor can answer it, assign themselves, and make the group aware that the need is covered.
- Data / logic notes: Requests need lifecycle states such as open, answered, assigned, en route, arrived, completed, and canceled. Answered requests need responder identity, assignment status, ETA/location sharing state, and notification trail.
- Data / logic notes: Tasks can remain checklist-style items to complete before evacuating, such as closing vents, loading supplies, or checking animals. Requests are social/coordination objects that invite another person to respond.
- Data / logic notes: Answered requests may trigger notification strings based on GPS or geofencing, including responder en route, responder nearby, responder arrived, household departed, or request completed.
- Open questions: What location-sharing permissions are required for responders, requesters, and coordinators? Should geofence updates be automatic, manually confirmed, or both?
- Source: `devlog` discussion on request/assignment semantics.

### 2026-05-01 - Preparedness Drills and Certification

- Product rule: Add a later-state preparedness section for drills, mock evacuations, and neighbor readiness practice.
- User story seed: As a community organizer or emergency partner, I need to run mock evacuations with neighbors so the group can practice roles, routes, requests, check-ins, and offline plans before a real incident.
- Data / logic notes: Drill mode should simulate incidents without sending real emergency alerts. It may need templates, scheduled drills, participant status, completion metrics, after-action notes, and improvement tasks.
- Data / logic notes: Preparedness progress could support certification concepts such as FireSafe Certified or lower readiness levels that may be useful for civic partners, insurers, HOAs, or community programs.
- Open questions: Who can create certification criteria, and what evidence would be required for insurance discounts or formal readiness recognition?
- Open questions: Should certifications belong to households, groups, neighborhoods, or partner organizations?
- Source: `devlog` discussion on preparedness and mock evacuation feature planning.

### 2026-05-01 - Map Context

- Product rule: Map states should show evacuation routes and hazard perimeter while avoiding claims of official precision.
- User story seed: As a household member, I need route and perimeter context so I can understand options without mistaking the app for an official command source.
- Data / logic notes: Route status, hazard perimeter source, timestamp, confidence/source labeling, and cached map behavior are required.
- Open questions: Which data sources provide hazard perimeter and route status in MVP?
- Source: App screen decisions and design system.

### 2026-05-01 - Verified Info Escalation and Chat Hierarchy

- Product rule: Private groups should be able to push verified information to a larger community info aggregator when the information is useful beyond the group.
- User story seed: As a group member who sees a sudden road closure, dangerous creek crossing, or downed tree, I need a way to escalate verified local information from my trusted group to the wider community so others can avoid danger.
- Data / logic notes: Requires a hierarchy between private group chat, verified group reports, and a community-level aggregator. Escalated items need source group, reporter, verification status, timestamp, location, category, and visibility scope.
- Data / logic notes: Likely report categories include road closure, creek crossing, downed tree, blocked route, utility hazard, animal/livestock issue, shelter/resource, and official update reference.
- Open questions: Who can verify before escalation: group mods, multiple group members, emergency partners, or community moderators?
- Open questions: How should the UX prevent noisy chat messages from flooding the community aggregator?
- Source: `devlog` discussion on private-to-community information flow.

### 2026-05-01 - Leadership Succession and Role Acknowledgement

- Product rule: Groups need a chain of succession for mods/leaders when primary leaders do not respond during an incident.
- User story seed: As a group member in an active incident, I need the app to identify an available leader if the current mod is offline, unsafe, or on the move, so coordination does not stall.
- Data / logic notes: Succession should notify users based on status and role. A user inheriting lead must actively accept and acknowledge they can fill the role, or mark `not safe` / `on the move` so the app can skip them and notify the next eligible user.
- Data / logic notes: If a user has no network connection or does not respond within the incident time window, the app should mark them as `not online` for succession purposes.
- Data / logic notes: A static phase at the beginning of an incident or defined time window may be needed to prevent leadership from bouncing too rapidly between users.
- Open questions: What timeout determines non-response? Should timeout vary by incident severity, group size, or role priority?
- Open questions: Which roles are eligible for succession, and can users opt out before an incident?
- Source: `devlog` discussion on chain of succession and active-user role handling.

### 2026-07-23 - Temporal Access Control Layer for Household Profiles

- **Product rule**: Implement a time-bounded permission engine for sensitive household details (e.g., door codes, access tokens, lockboxes, pet data) (`devlog`).
- **User story seed**: As a user, I need to expose explicit sharing triggers in the active Assistance Request workflow or directly on a target User Profile details card so responders have time-bounded access to my property metrics.
- **Data / logic notes**: All shared credentials must bind to a specific expiration timestamp natively (`1-day` default, `1-week`, or custom duration). The underlying data layer must automatically expire the temporary access token and re-mask fields instantly upon crossing the expiration timestamp.
- **Open questions**: Are there override controls for users to manually revoke a token before the expiration timestamp lapses?
- **Source**: Solo founder product design directive.

### 2026-07-23 - Full 4-Phase Resilience Lifecycle MVP Scope

- **Product rule**: The baseline MVP will include all 4 phases of the resilience lifecycle: Ready, Alert, Active Incident, and Recovery. This overrides the previous "emergency-only" scope limit (`devlog`).
- **User story seed**: As a community member, I need resource sharing during Ready and recovery tracking during Recovery so the app remains valuable outside of active fire or flood windows.
- **Data / logic notes**: App architecture must support state transitions between phases at both the household and group levels, tracking separate UI states and feature permissions based on the active phase.
- **Open questions**: What automation triggers the shift from Ready to Alert on a community scale, and who has the authority to declare the transition?
- **Source**: Solo founder architectural directive.

### 2026-08-04 - Resilience Lifecycle Terminology

- **Product rule**: Use Ready, Alert, Active Incident, and Recovery as the canonical names for the four resilience lifecycle phases across product requirements, roadmap work, design references, and implementation copy (`devlog`).
- **User story seed**: As a community member, I need calm, plain-language phase names so the app communicates urgency without militarized framing.
- **Data / logic notes**: This is a terminology change only. It does not alter the approved four-phase lifecycle or expand implementation scope.
- **Open questions**: Which exact screens, interaction states, and acceptance criteria complete MVE-1?
- **Source**: Founder terminology decision after review of the Production Waterfall and Resilience Lifecycle FigJam boards.

### 2026-08-04 - MVE-1 Is the First MVP Validation Slice

- **Product rule**: MVE-1 is the first validation slice within MVP scope and must exercise Ready, Alert, Active Incident, and Recovery; it is not a post-MVP expansion (`devlog`).
- **User story seed**: As a community member, I need the first validated product slice to preserve the same navigation and core coordination model as conditions move across the full resilience lifecycle.
- **Data / logic notes**: Historical six-flow definition: phase change, preparedness checklist, community request, offer post, Active Incident regression, and Recovery request. **Superseded 2026-08-04:** the preparedness-checklist flow was removed from MVE-1/MVP, leaving five flows. See "Preparedness Checklist Removed from MVE-1 Scope" below. Detailed screens, interaction states, and acceptance criteria remain subject to design review.
- **Open questions**: What minimum screen/state inventory proves each flow on both iOS and Android?
- **Source**: Founder-approved reconciliation of Claude's strategic audit with the Resilience Lifecycle FigJam board.

### 2026-07-23 - Stale Data Connection Logic & Peer Presence

- **Product rule**: The application enforces a strict 5-minute server handshake timeout. Passing this window triggers an active "Connection Lost" interface locally and flags the user's status as "Offline" to their group to prevent reliance on outdated information during incidents (`devlog`).
- **User story seed**: As an incident responder or group member, I need to know instantly if a neighbor's safety status or location data is older than 5 minutes so I do not make critical rescue assumptions based on stale coordinates.
- **Data / logic notes**: Requires a background heartbeat service tracking the last successful synchronization timestamp. Deep local database caching protocols are explicitly deferred to MVP field and user testing.
- **Open questions**: How gracefully does the UI transition back to active state when a low-bandwidth or intermittent connection flashes on and off?
- **Source**: Solo founder product design directive.

### 2026-08-04 - Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger

- **Product rule**: Community status is per-household, not a single shared binary phase gating the whole group. Each household's hazard/evacuation status is derived automatically wherever a reliable, confirmed-accessible open feed exists (NOAA/NWS CAP first), with no admin gate required for that status to reach the member. The four lifecycle phase labels (Ready, Alert, Active Incident, Recovery) remain the canonical shared community-level narrative/context layer — admin-curated, used for messaging, tone, and coordination — but no longer solely represent or gate an individual member's actual hazard state (`devlog`).
- **User story seed**: As a community member, I need my own evacuation/hazard status to reflect my actual situation (home address relative to an official evacuation zone) automatically where possible, even when other members of my same group are in a different status, so I am not waiting on an admin to manually declare one shared phase before I learn my home is in a mandatory evacuation zone.
- **Data / logic notes**: Per-household hazard/evacuation status is sourced automatically from confirmed-accessible official feeds, falling back to self-reported or admin-entered status when no automated feed covers that hazard type or jurisdiction. Correlating external zone data to a saved home address does not require continuous background tracking or device-location permission. Location permission and graceful degradation are required only if a separate current-device-location feature is later approved. The admin role shifts from "declares the phase for the whole group" to "curates shared community narrative and source context" layered on top of automatically tracked individual statuses; this extends rather than replaces the existing Leadership Succession model (2026-05-01). Watch Duty (the app named in the founding Core Loop narrative) draws on multiple public, official, partner, and human-reviewed sources. Before any integration attempt, research whether WildCAD or another upstream primary source offers accessible API/data-sharing terms. A direct Watch Duty partnership is a separate, later business-development conversation, not an MVP dependency.
- **Open questions**: Does a reliable, open feed exist for evacuation-zone-level (not just weather-hazard-level) data in the pilot county, or does MVE-1 launch with weather-hazard automation only and admin/self-reported evacuation-zone status? What does the legal review (`Blocker 2: 911 Call Liability & Legal Strategy`) require before shipping any automated "your home is in a mandatory evacuation zone" notification? What is the fallback UX when automated status is unavailable or stale for a given household?
- **Source**: Founder review of the founding Core Loop narrative (Google Drive, predates the Resilience Lifecycle FigJam board) against open Resilience Lifecycle FigJam comments (nodes 3:39, 3:61, 3:191, 3:247). Resolves the open question in "2026-07-23 - Full 4-Phase Resilience Lifecycle MVP Scope" regarding what triggers a phase shift and who holds that authority.

### 2026-08-06 - MVE-1 Request Claim/Close Lifecycle

- **Product rule**: A community or Recovery request has exactly three states in MVE-1: Open, Claimed, and Closed. A member claims an open request, which sets status to "Claimed by [name]" — claiming is not closing. Only the original requester can close the request, done manually once the task is actually complete; the claiming helper cannot self-close. After a claim, the requester and the claiming helper coordinate in an inline comment thread attached to that specific request, visible only to the two of them (`devlog`).
- **User story seed**: As a requester, I need to see that someone has taken on my need without the request disappearing as done, and I need to be the one who confirms it's actually finished — not have it close just because someone said they'd help.
- **Data / logic notes**: Applies to Flow C (Community request) and Flow F (Recovery request). Request record needs `status: open | claimed | closed`, `claimedBy`, `closedBy` (always the original requester), and a per-request thread scoped to requester + claimer only. No GPS, geofencing, ETA, or automatic proximity-based state transitions in MVE-1 — this stays consistent with the 2026-08-04 decision against continuous background location tracking absent a separately approved feature. No dispute/reopen mechanic and no auto-close timeout in MVE-1.
- **Relationship to prior entry**: This supersedes the MVE-1-scope portion of "2026-05-01 - Tasks vs Requests vs Answered Requests," which sketched a richer state list (open, answered, assigned, en route, arrived, completed, canceled) with GPS/geofence-triggered notifications. That richer model is not deleted — it remains a candidate for a later, separately approved iteration if pilot feedback shows a need for finer-grained status or location-aware coordination, but it is not in scope for MVE-1 and requires its own location-permission decision before any future approval.
- **Open questions**: None blocking MVE-1. If a later slice adds location-aware states, that requires its own device-location-permission decision (see the fallback note in "2026-08-04 - Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger").
- **Source**: Founder decision resolving FigJam node 3:132 (Randall — "claim ≠ close, needs an active/in-progress state") and its two reply threads (John — when/how a request closes; where post-claim communication happens).

### 2026-08-06 - Offer Post Category Tag and Pre/Post-Planning Confirmation

- **Product rule**: Offer Post (Flow D) keeps one mechanism, extended with an optional category tag — Item/Tool or Skill/Labor — usable in any phase. No phase-gated flow split. Pre-Planning (forecasted-event prep: boarding windows, borrowing generator gas) and Post-Planning (post-event cleanup: tree removal, flood pumping) are confirmed as instances of the existing Alert and Recovery flows respectively, not new mechanisms. Expertise/referral requests ("does anyone have a good roofer") are explicitly out of scope — that shape duplicates a public forum and LHL is not positioned to broker referrals (`devlog`).
- **User story seed**: As a member posting an offer during an Alert-phase prep window, I need my "I can help evacuate animals" post to read differently from a peacetime "I have a ladder to lend" post, without the app needing two separate flows.
- **Data / logic notes**: Offer Post and Community Request record types gain an optional `category: item_tool | skill_labor` field. No phase-conditional branching in the flow logic; any skew toward item-matching in Ready/peacetime versus skill/labor claims in Alert/Recovery is expected to emerge from usage, not be enforced by the app.
- **Open questions**: None blocking MVE-1.
- **Source**: Founder review of a "Secondary Narrative Loops" write-up (John's prior document to Randall, not yet confirmed to be committed elsewhere in the repo) against FigJam node 3:70 (offer-post mechanic, peacetime vs. prep/recovery).

### 2026-08-06 - Everyday Tasks / Local Marketplace Deferred Post-MVE-1

- **Product rule**: The standing-inventory "local marketplace" concept — households listing borrowable equipment (ladders, chainsaws, wood splitters, etc.) in a persistent, browsable catalog rather than one-off Offer Post entries — is out of MVE-1/MVP scope. It is logged as the top-priority post-MVE-1 backlog concept, not built now (`devlog`).
- **User story seed**: As a founder, I believe this feature drives community engagement and app value beyond emergency use, but it is a materially larger feature shape (persistent catalog + browse UI) than the ephemeral Offer Post it would extend, so it does not belong in the first validation slice.
- **Data / logic notes**: Default plan is to build and ship this after MVE-1 pilot findings land, not mid-pilot, to keep the pilot's signal attributable to the core coordination model. Exception: if the G5 build cycle runs meaningfully ahead of schedule (2-3+ weeks), reassess pulling this feature into the same MVE-1 cycle — the pilot start date itself is fixed by the holiday blackout regardless of build speed, so early slack could instead be used to build this feature before pilot kickoff. This is a reassessment trigger, not a commitment. Before this is ever built, confirm it doesn't conflict with the existing Safety+QA invariant "No marketplace: no money, ratings, vendors, rankings" (node 3:251) — the current concept has no money or ratings, but the word "marketplace" needs explicit reconciliation with that invariant before implementation.
- **Open questions**: Does the existing "no marketplace" invariant need rewording to distinguish a non-monetary peer-lending catalog from what it was written to exclude? What naming applies once this gets a validation slice (Gate 3 will define slice/naming structure)?
- **Source**: Same "Secondary Narrative Loops" write-up as above, "Everyday Tasks & Local 'Marketplace'" section; founder decision to prioritize but defer.

### 2026-08-06 - Admin-Uploaded Community Resources Confirmed Post-MVP (FigJam 3:34)

- **Product rule**: Confirms the existing 2026-08-04 "Admin-Uploaded Preparedness Resources" backlog concept as the answer to FigJam node 3:34: the app does not generate or curate expert advice; it only hosts documents admins/communities choose to upload and share (`devlog`).
- **User story seed**: No change from the existing backlog entry.
- **Data / logic notes**: No new scope. This resolves node 3:34 by reference to `docs/future-roadmap-backlog.md`, "Admin-Uploaded Preparedness Resources." The stale "wildfire checklist" reference on FigJam node 3:34 (Lifecycle Journey step 1) was also corrected to reflect the 2026-08-04 checklist removal, which that node had not yet picked up.
- **Open questions**: None blocking.
- **Source**: FigJam node 3:34 comment (admin document upload — advice vs. community-hosted).

### 2026-08-06 - Home/Room Mapping Excluded from MVP (FigJam 3:58)

- **Product rule**: Home/room floor-plan mapping ("room counting" or similar) is excluded from MVE-1/MVP scope entirely. The app's "Map" surface refers to the community hazard/route map, not a home floor plan (`devlog`).
- **User story seed**: As the founder, this felt like a nice-to-have that adds complexity without validating the core coordination loop.
- **Data / logic notes**: No home/room data model in MVE-1. Logged as a possible post-MVP idea in `docs/future-roadmap-backlog.md`.
- **Open questions**: None blocking.
- **Source**: FigJam node 3:58 comment.

### 2026-08-06 - Admin Phase-Narrative Curation Definition Deferred (FigJam 3:195)

- **Product rule**: The "Transition log" wire-inventory placeholder stays as-is; no scope change now. Per the 2026-08-04 decision, admins still set/confirm the shared four-phase community narrative (Flow A) even though they no longer gate individual member hazard status by doing so — the transition log is the audit trail for that narrower, still-real task. What "curates community narrative" means in practice, and what admin responsibilities apply during an active incident (including whether this needs to run itself if the whole group is affected), is deferred to Gate 3 product-feature debate rather than settled now (`devlog`).
- **User story seed**: As a member, I may want to see a history of why/when the shared community phase changed and what basis the admin cited.
- **Data / logic notes**: No new data model committed. Revisit at Gate 3 alongside "Approve data model and permission schema" and "Finish approved user flows and low-fidelity screens."
- **Open questions**: Should the transition log (or the underlying phase-curation responsibility) be automated rather than admin-driven during an active incident if the admin is unreachable? Left open for Gate 3.
- **Source**: FigJam node 3:195 comment (Randall — transition log can stay for now, debate its need/efficacy later).

### 2026-08-06 - Location Sharing Confirmed Home-Address-Only for MVE-1 (FigJam 3:255)

- **Product rule**: Confirms the existing 2026-08-04 decision: per-household hazard/status matching uses the saved home address only in MVE-1, with no continuous background location tracking. A live "share my location" toggle, scoped only to an active help request (for responder ETA), is a distinct, separately approved post-MVE-1 concept — not built now (`devlog`).
- **User story seed**: As a member, the only location-sharing case I'd expect soon is opting in to share my live location for a specific request I'm fulfilling or waiting on.
- **Data / logic notes**: No change to MVE-1 data model. Logged as a post-MVE-1 backlog idea.
- **Open questions**: None blocking MVE-1.
- **Source**: FigJam node 3:255 comment.

### 2026-08-06 - Claim Reminder Nudge Deferred Post-MVE-1

- **Product rule**: A "did you complete this task?" reminder nudge after some time claimed (raised in the original FigJam 3:132 comment, distinct from auto-close, which was already rejected) is deferred post-MVE-1. MVE-1 ships with fully manual, requester-only closing and no reminder mechanic (`devlog`).
- **User story seed**: As a requester, a future reminder could reduce abandoned claims, but it isn't necessary to validate the core claim/close model.
- **Data / logic notes**: No timer/notification logic in MVE-1. Logged as a post-MVE-1 backlog idea alongside the claim/close lifecycle entry above.
- **Open questions**: What timeout would be appropriate, and should it vary by request urgency? Left for later.
- **Source**: FigJam node 3:132 original comment (Randall).

### 2026-08-06 - Quiet Community Requests: No Notification Option in MVE-1 (FigJam 3:67)

- **Product rule**: "Quiet" community requests (Flow C, ranked below emergency items) always appear in the request queue/list — that visibility is never optional. MVE-1 ships with no notification option (on, off, or opt-in) for quiet requests at all; queue/list visibility is the only discovery mechanism (`devlog`).
- **User story seed**: As a member, I should never miss a community need just because it's "quiet," but I also shouldn't be interrupted by a notification for it.
- **Data / logic notes**: No notification-preference field for community requests in MVE-1. A future notification-opt-in feature remains possible but is not committed.
- **Open questions**: None blocking MVE-1.
- **Source**: FigJam node 3:67 comment (Randall).

### 2026-08-04 - Preparedness Checklist Removed from MVE-1 Scope

- **Product rule**: The structured preparedness-checklist flow (household reviews a wildfire checklist, marks item status, readiness counter updates) is removed from MVE-1 and MVP scope entirely, not deferred-in-place. This supersedes the flow list in "2026-08-04 - MVE-1 Is the First MVP Validation Slice": MVE-1 now covers five flows — phase change, community request, offer post, Active Incident regression, and Recovery request — not six (`devlog`).
- **User story seed**: As the founder, I do not want the app positioned as an authority on preparedness content; item-by-item checklist guidance implies expertise LHL is not positioned to provide or maintain.
- **Data / logic notes**: No checklist data model, item-status tracking, or readiness-counter logic ships in MVE-1/MVP. A future, separate concept — admins uploading reference documents/checklists to a shared file space, with no app-tracked completion state — is captured as a post-MVE-1/post-MVP idea in `docs/future-roadmap-backlog.md`, pending user feedback. This also resolves the open thread on FigJam node 3:64, where Randall proposed a related but distinct borrowing/tool-sharing concept for prep tasks (ladders, generators, etc.) — that idea is already covered by the existing Offer Post (D) and Community Request (C) flows and needs no new scope.
- **Open questions**: None blocking. If admin-uploaded resources are pursued post-MVP, file size/format limits and server-space costs need scoping then.
- **Source**: Founder decision on FigJam comments (node 3:137 — "We are not doing checklists for MVP"; node 3:64 — "I'd like to remove this flow from the MVP").

### 2026-08-06 - Household-First Context and Minimal Administrator Role

- **Product rule**: MVE-1 opens on the resident's household context, not a universal community phase. Available sourced incident information associated with the saved home address, broader incident context, household-reported status, and trusted-community activity are separate information layers. A geographically broad community may contain households in different hazard or evacuation zones, so the app does not declare that the entire community is in one hazard status or lifecycle phase (`devlog`).
- **User story seed**: As a resident, I need the app to begin with my home and clearly sourced information associated with its saved address, while keeping that separate from what other community members report or need, so I am not shown a blanket community declaration that may not apply to my household.
- **Data / logic notes**: Remove the admin-set shared phase, admin-curated narrative, admin-added incident source, member-visible transition basis, and transition-log concepts from MVE-1. The administrator only reviews and approves or denies join requests. No admin availability is required during an emergency. The four lifecycle concepts remain, but their exact household-facing display or internal use is still open for the first journey and Gate 3 product definition.
- **Relationship to prior entries**: Supersedes the shared, admin-curated community narrative layer in "2026-08-04 - Per-Household Automated Hazard Status Replaces Single Shared Phase Trigger" and fully supersedes "2026-08-06 - Admin Phase-Narrative Curation Definition Deferred (FigJam 3:195)." The transition log is removed now rather than carried into Gate 3.
- **Open questions**: May an administrator remove an existing member after admission? Are the four lifecycle labels explicitly displayed as a household state, or used as an internal product structure that changes interface emphasis without declaring "Your home: Alert"? No content/message moderation is approved yet.
- **Source**: Founder clarification during first end-to-end journey definition, following review of the FigJam Household/Admin wire inventory and the earlier 2026-08-04 decision.

### 2026-08-06 - Boulder Heights Pilot Administrator and Member-Removal Deferral

- **Product rule**: John is the initial Boulder Heights administrator. In MVE-1, an administrator may approve or deny a request to join the trusted group but cannot remove an existing member in-app and has no content/message moderation tools (`devlog`).
- **User story seed**: As the founder administering a small invitation-only pilot, I need to admit verified participants without taking on incident-management duties or building a full community-governance toolset before the core coordination model is validated.
- **Data / logic notes**: The membership state must support pending, approved, and denied join requests. Participant-facing MVE-1 does not require an existing-member removal interface. Because admitted members may receive access to sensitive household information, the pilot operations plan must define a manual operator-level revocation path for mistaken admission, withdrawal, or a safety/privacy concern; the implementation mechanism depends on the later authentication/backend decision.
- **Relationship to prior entry**: Resolves the existing-member-removal question in "2026-08-06 - Household-First Context and Minimal Administrator Role." Content/message moderation remains outside MVE-1.
- **Open questions**: None blocking Gate 1. The manual revocation mechanism must be specified before pilot access is issued.
- **Source**: Founder decision during first end-to-end MVE-1 journey definition.

### 2026-08-06 - First End-to-End MVE-1 Journey and Internal Lifecycle Language

- **Product rule**: The first journey is household-first and proves the complete trusted-assistance loop: join a private group and establish a household profile; store sensitive assistance information privately; receive clearly sourced incident information associated with the saved address; create a practical request while away; have a trusted member claim it; coordinate in the private request thread; deliberately grant only the needed sensitive instructions for a limited period; let the helper independently determine whether action is safe; and have the original requester close the fulfilled request (`devlog`).
- **User story seed**: As a resident away from home during developing conditions, I need a trusted neighbor to claim a concrete household need and receive only the time-limited instructions necessary to help, without LHL interpreting the incident, tracking either person's movement, or directing unsafe action.
- **Data / logic notes**: Sensitive assistance information is stored in the household profile but private by default. A grant selects specific information, is scoped to the requester and authorized helper, uses a one-day default, and expires automatically. Request state is Open → Claimed → Closed, requester-only close. Household status is manually reported rather than geofence-derived. Recovery-oriented requests/offers continue after immediate conditions pass.
- **Lifecycle-language rule**: `Ready`, `Alert`, `Active Incident`, and `Recovery` are internal planning and test-coverage terms for now. Consumer-facing lifecycle labels and interface presentation remain TBD until Gate 3 design and must conform to the Gate 1 trust-and-tone principles.
- **Relationship to source narrative**: Preserves the original Core Loop's household profile, private group, saved-address incident association, away-from-home need, trusted helper, and time-bounded access. It excludes provider-specific Watch Duty assumptions, universal community status, Aware/Unaware tracking, geofenced Home/Away/Safe inference, indefinite sensitive access, general group chat as a required first-journey mechanism, and app-directed entry into unsafe areas.
- **Open questions**: Exact consumer-facing lifecycle terminology, household-status vocabulary, notification acknowledgement, general group chat, contact actions, and profile-field inventory remain for Gate 3 or their applicable architecture/permission decision.
- **Source**: Founder-authored original "Core Loop" narrative, reconciled against controlling decisions on 2026-08-06. Real names, addresses, contact information, access notes, and example codes from the source are intentionally excluded from canonical product requirements and future test fixtures.

### 2026-08-06 - Boulder Heights Access-Code Onboarding and Approval

- **Product rule**: John personally invites each pilot participant to install the app through TestFlight or the approved Android equivalent. After creating a profile, the participant enters a preconfigured Boulder Heights community access code, which creates a pending membership request but grants no group access. John approves or denies that request through a minimal role-gated admin surface in the resident app; only approval grants group access (`devlog`).
- **User story seed**: As an invited pilot participant, I need a simple code to find and request access to the correct trusted group, while the group administrator still verifies me before I can see any member or household information.
- **Data / logic notes**: Membership states are pending, approved, and denied. The participant sees a waiting state until a decision and a neutral denial state if denied. The admin sees a pending-request list, enough applicant identity to match the personal invitation, and approve/deny actions. The access code is a group-discovery/request key, not authentication; it exposes no group data by itself. Exact code entropy, guessing protection, and auth controls are Gate 4 decisions.
- **MVE-1 boundary**: The Boulder Heights code is preconfigured for the pilot. In-app generation, rotation, expiration, multiple-code support, and invitation analytics are deferred. The selected auth/backend must still permit protected operator-level revocation of an approved membership before pilot credentials are issued.
- **Open questions**: Exact applicant identity fields and the approved backend/auth revocation mechanism are settled in Gate 3 data/permissions and Gate 4 architecture respectively.
- **Source**: Founder decision during MVE-1 boundary review.

### 2026-08-06 - Single Trusted Group in MVE-1

- **Product rule**: MVE-1 supports exactly one trusted community group, Boulder Heights. A participant cannot create, join, switch among, or receive activity from multiple groups (`devlog`).
- **User story seed**: As a Boulder Heights pilot participant, I need one unambiguous trusted-group context so requests, offers, household visibility, and notifications cannot be confused with activity from another community.
- **Data / logic notes**: MVE-1 still needs group-scoped membership and data boundaries, but no group switcher, group creation flow, multi-membership routing, or cross-group activity. The data model should not unnecessarily prevent later multi-group evolution, but future support is not an MVE-1 acceptance requirement.
- **Open questions**: None blocking MVE-1.
- **Source**: Founder decision during MVE-1 boundary review.

### 2026-08-06 - No General Chat or Neighborhood Forum

- **Product rule**: LHL has no general group chat, open-ended direct messaging, neighborhood forum, email-list replacement, gossip channel, or Nextdoor-style social feed. This is a permanent product invariant, not a post-MVE-1 deferral (`devlog`).
- **User story seed**: As a resident under stress, I need communication to remain attached to a concrete request or offer so essential coordination is not buried in casual conversation, opinion, gossip, or a high-volume social feed.
- **Data / logic notes**: Structured requests and offers may be visible to the trusted group. Private conversation exists only inside the request-specific thread after a helper claims a request and is visible only to requester and helper. No general channel, free-standing DM inbox, reactions-as-engagement, general discussion thread, or unstructured status-post feed is required or approved.
- **Relationship to prior entries**: Resolves the 2026-05-01 open question about whether `Group chat` is a full chat surface, filtered thread, or chat link, and closes the general-chat/contact ambiguity left in the 2026-08-06 first-journey entry. Any later departure requires a superseding founder decision rather than ordinary backlog prioritization.
- **Open questions**: Whether profiles may launch the device's native phone or email application remains separate; such external contact actions would not create an LHL chat surface.
- **Source**: Founder decision during MVE-1 boundary review.

### 2026-08-06 - Native Call and Text Actions in MVE-1

- **Product rule**: An approved trusted-group member profile includes Call and Text actions that launch the device's native phone or messaging application using the member-provided phone number. Email is excluded from MVE-1. Native Call/Text does not create an LHL direct-message or chat feature (`devlog`).
- **User story seed**: As a trusted resident coordinating during degraded or rapidly changing conditions, I need to call or text another approved member through the communication services already available on my device when in-app request-thread coordination is not sufficient.
- **Data / logic notes**: Use native platform handoff; do not auto-send, store, ingest, or synchronize external call/text content. LHL request state does not change based on external communication. The app cannot guarantee carrier, degraded-network, or satellite delivery. Actions are visible only inside the approved group context. The later household-profile decision makes the phone number and consent mandatory for the pilot and shows action buttons rather than printing the number.
- **Relationship to prior entry**: Resolves the native-contact question left open by "No General Chat or Neighborhood Forum." Request-specific in-app threads remain the structured coordination record; external Call/Text is an escape hatch, not a replacement social channel.
- **Open questions**: Gate 3 retains only the exact consent copy and interaction treatment; phone requirement and profile visibility are resolved by the later household-profile decision.
- **Source**: Founder decision during MVE-1 boundary review.

### 2026-08-06 - Household Signals and Provisional Incident Acknowledgement

- **Product rule**: MVE-1 intends to provide three distinct, voluntary, time-stamped signals within the approved Boulder Heights group: acknowledgement of a specific sourced incident update; self-reported household presence; and a self-reported incident check-in indicating the household was not in, or has left, the area relevant to the incident (`devlog`).
- **User story seed**: As a trusted neighbor, I need to know whether someone has deliberately acknowledged the latest incident update, whether anyone reports being at their home, and whether the household reports being outside the incident-relevant area so I can avoid redundant contact and coordinate assistance without assuming facts the app cannot verify.
- **Data / logic notes**: Acknowledgement requires an explicit action and is versioned to a specific sourced incident update; receipt/open does not count. Display affirmative acknowledgement plus timestamp or `No acknowledgement recorded`, never `Aware`/`Unaware`. Presence is manually reported as someone home, household away, not shared, or no recent update; no geofence inference. Incident check-in is manual, time-stamped, and labeled self-reported; do not use it as a verified `Safe` status. Missing, stale, and intentionally unshared states are distinct. Assistance needs remain structured requests.
- **Provisional-scope rule**: Incident acknowledgement remains in MVE-1 intent but must earn its place in Gate 3 wireframes. Gate 3 tests whether it can fit the household-first hierarchy without noise, cognitive burden, or false confidence. If it cannot, removal requires a superseding founder decision. Presence and incident check-in remain approved MVE-1 capabilities.
- **Open questions**: Exact consumer labels, prompting mechanism, roster hierarchy, visibility/consent, status expiry and stale thresholds, and what source change counts as a material update requiring renewed acknowledgement are Gate 3 decisions.
- **Source**: Founder clarification of the original Core Loop's Aware/Unaware, Home/Away, and Safe intent during MVE-1 boundary review.

### 2026-08-06 - MVE-1 Household Profile Source, Derived Display, and Helper Sharing

- **Product rule**: MVE-1 separates resident-provided profile data from system-derived display values. Residents provide first name, last name, phone number, complete home address, entry instructions, and required Call/Text consent; preferred first name is optional. They cannot author a custom display name or household label (`devlog`).
- **User story seed**: As a resident in a trusted pilot group, I need the app to identify me and my household consistently while keeping sensitive household details masked until I deliberately share what a specific helper needs.
- **Derived values**: Generate the approved-group display name as preferred first name, or first name if blank, plus the last-name initial. Generate the household label from the saved address as street number plus street name without the road/street type. Generate Call/Text actions from the required phone number and the administrator badge from role state. Roster grouping, ordering, and visual placement are Gate 3 concerns, not user-authored profile data.
- **Private profile fields**: Complete address and entry instructions are mandatory; an access code, when applicable, is contained within entry instructions. Assistance-relevant household members, pets/animals, physical-access notes, utility-shutoff details, and mobility or other practical needs are optional. Ownership status, biography, preparedness score, standing equipment inventory, and a general medical record are excluded.
- **Sharing logic**: Private information remains masked until the requester deliberately confirms a share with the authorized helper. Start the confirmation with all applicable fields selected; permit deselection except for the complete home address, which is locked into every deliberate helper share. Scope the grant to requester and helper, default it to one day, expire it automatically, and re-mask the data without deleting the resident's stored profile.
- **Contact/privacy notes**: Show Call and Text actions rather than printing the phone number. Native application handoff may reveal the number. Consent is mandatory for pilot participation, and Gate 3 defines concise disclosure/consent copy. LHL does not control or capture the external communication.
- **Open questions**: Gate 3 decides roster layout, household/resident grouping, sorting, and the placement of derived labels. Gate 4 decides address validation and provider implementation. Neither question reopens the approved profile scope.
- **Source**: Founder review of the MVE-1 Household Profile scope working document and Google Doc comment resolutions on 2026-08-06.

## Export Format

When exporting for dev planning, convert entries into this structure:

```text
Feature:
User story:
Acceptance criteria:
Data / state:
Permissions:
Open questions:
Source:
```
