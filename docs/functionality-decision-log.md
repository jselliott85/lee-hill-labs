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
- **Data / logic notes**: MVE-1 covers phase change, preparedness checklist, community request, offer post, Active Incident regression, and Recovery request flows. Detailed screens, interaction states, and acceptance criteria remain subject to design review.
- **Open questions**: What minimum screen/state inventory proves each flow on both iOS and Android?
- **Source**: Founder-approved reconciliation of Claude's strategic audit with the Resilience Lifecycle FigJam board.

### 2026-07-23 - Stale Data Connection Logic & Peer Presence

- **Product rule**: The application enforces a strict 5-minute server handshake timeout. Passing this window triggers an active "Connection Lost" interface locally and flags the user's status as "Offline" to their group to prevent reliance on outdated information during incidents (`devlog`).
- **User story seed**: As an incident responder or group member, I need to know instantly if a neighbor's safety status or location data is older than 5 minutes so I do not make critical rescue assumptions based on stale coordinates.
- **Data / logic notes**: Requires a background heartbeat service tracking the last successful synchronization timestamp. Deep local database caching protocols are explicitly deferred to MVP field and user testing.
- **Open questions**: How gracefully does the UI transition back to active state when a low-bandwidth or intermittent connection flashes on and off?
- **Source**: Solo founder product design directive.

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
