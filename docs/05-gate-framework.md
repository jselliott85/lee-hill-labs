# Gate Framework — LHL App

> **Status: Approved 2026-08-06.** John reviewed and approved this framework in full. The approval is recorded in `docs/04-decision-log.md`.

## Purpose

`docs/00-master-roadmap.md` tracks tasks well but does not show sequence, dependency, or what "done" means at a project level. This file supplies that layer. It defines six gates, what closes each one, and how existing and new work maps onto them.

The roadmap remains the sole canonical task tracker. This file is the sequencing reference that explains the roadmap's `Gate` column. Where the two disagree on task status, the roadmap wins. Where they disagree on sequence, this file wins until amended.

## Operating principles

- A gate closes only when its exit criteria are met and John has explicitly approved closure. This does not change the existing rule that John is the approval gate before any task is marked Complete.
- Gates are sequential for *closure*, not for *work*. Work on a later gate may begin before the prior gate closes. A gate cannot close before its dependencies and exit criteria are satisfied or before John explicitly approves closure; it may close before its target calendar date once those conditions are met.
- G1 and G2 explicitly run in parallel beginning 2026-08-06. G2 does not depend on G1 closing, but G2 must close before G3 begins.
- No gate closes on an external party's action. See "External dependency rule" below.
- A gate that closes on a decision must have that decision recorded in `docs/04-decision-log.md`. A gate that closes on an artifact must name the file.

---

## The six gates

### Gate 1 — Direction set

**Question it answers:** Who is this for, what is the first journey, and what are we explicitly not doing?

**Exit criteria:**
- Primary user and first test community named in `docs/03-mvp-requirements.md`
- First end-to-end user journey defined
- MVE-1 boundaries and explicit deferrals recorded
- Trust and tone principles recorded (see "Design and brand layering")
- Open FigJam comments on the approved resilience lifecycle board resolved, with resulting decisions written to canonical repo documents

**Explicitly not in Gate 1:** success criteria, acceptance criteria, and final scope. Those are Gate 3. Gate 1 produces a working direction that is allowed to change.

**Rationale for the change:** the previous structure asked Gate 1 to carry a full scope lock while the design work that informs scope had not started. The freeze now lives at Gate 3, where the information to support it actually exists.

---

### Gate 2 — Constraints confirmed

**Question it answers:** What does reality permit before we design around assumptions?

**Exit criteria:**
- Documented event taxonomy and finding on whether accessible, reliable, attributable external sources can support candidate Boulder Heights incident context. The finding covers recognized classifications, primary authorities, WildCAD or equivalent upstream sources, secondary/aggregator attribution, geographic matching, stable event/update identity, corrections/cancellations, access and data-sharing terms, and the fallback or omission required when evidence is insufficient.
- A founder-approved incident-notification eligibility matrix maps candidate event/source combinations to push, silent in-app, acknowledgement, or neither. Unknown or unmapped combinations default to no push.
- John-authored and John-approved written position on liability and safeguards for automated hazard and evacuation-status notification, including required disclaimers, native 911 routing behavior, and what the app must never imply. Recorded in `docs/04-decision-log.md`.
- Founder-approved closed-pilot participation and liability acknowledgment covering voluntary participation, pilot limitations, emergency/911 behavior, risk acknowledgment, privacy/data handling, withdrawal, and contact language; clearly marked for counsel review and not approved for public release.

**Explicitly not in Gate 2:** formal legal sign-off. See "External dependency rule."

**Rationale for the change:** both of these questions were sitting in the backlog behind the gates they need to inform. If either answer is unfavorable, the shape of MVE-1's core loop changes. They are inexpensive to research and expensive to discover late.

---

### Gate 3 — Product defined

**Question it answers:** What exactly are we building, and how will we know it is finished?

**Exit criteria:**
- Approved user flows and low-fidelity screens for MVE-1 across Ready, Alert, Active Incident, and Recovery
- Approved minimum data model and permission schema, covering time-bounded access, per-household hazard status, and leadership succession
- Approved reusable cross-platform UI rules and design tokens (type scale, spacing, color roles, states, component rules)
- Working product name selected and recorded as provisional
- Written acceptance criteria for MVE-1: the minimum screen and state inventory that proves each of the five approved flows on both iOS and Android
- **Scope freezes here.** Any change after this point requires a superseding decision-log entry.

**Rationale for the change:** the data model and permission schema had no home — the six technical gates are all provider-shaped, and this work is product-shaped. Acceptance criteria previously did not exist anywhere, leaving "done" undefined at build time.

---

### Gate 4 — Architecture approved

**Question it answers:** What are we building it with?

**Exit criteria:** an approved decision recorded in `docs/04-decision-log.md` for each of the six technical foundations, unchanged from the existing structure:

1. Backend and data persistence
2. Authentication and account access
3. Push and local notifications
4. Maps, hazard, route, and external data sources
5. Offline persistence, reconnect sync, stale data, and secure device storage
6. Shared mobile framework, iOS/Android build, beta distribution, and store delivery

Plus:
- Production mobile-app repository name approved
- **Store identity approved** (see "Store and bundle identity" below)
- Apple Developer and Google Play Console access verified at the correct account type

---

### Gate 5 — MVE-1 built

**Question it answers:** Does the thing exist and does it meet what we said?

**Exit criteria:**
- Reviewed MVE-1 implementation in the approved production repository
- Validation performed against the Gate 3 acceptance criteria, not against a general impression of completeness
- Distributable to pilot participants via TestFlight and the equivalent Android channel

Gate 5 is delivered as three dated build slices. The acceptance boundary for each slice is defined at Gate 3 closure; the schedule dates are fixed in the approved baseline below.

---

### Gate 6 — Pilot validated

**Question it answers:** Did it work, and what do we do next?

**Exit criteria:**
- Pilot executed against an approved test plan with the Boulder Heights participant group
- Findings documented
- Go/no-go decision recorded in `docs/04-decision-log.md`, evaluated against thresholds declared before the pilot that identify which results require continuation, revision, another pilot, or stopping

**Note on pilot design:** the pilot test plan is not itself a separate gate and does not block work before its roadmap start date. It is nevertheless a required dependency for Gate 5 closure and must exist before Gate 5 closes or Gate 6 has nothing to run against. Draft it any time from Gate 3 onward. The closed neighborhood pilot runs for six weeks so it can measure household adoption and pre-incident information entry rather than installation alone.

**Note on seasonality:** the pilot must not depend on a live wildfire occurring. Boulder County's notable fires cluster across January, July, October, and December rather than a single summer season, and Front Range fire weather is effectively year-round. Red Flag Warning days, winter road and power events, and the simulation sandbox provide repeatable Alert and Active Incident triggers on demand. Ready phase is testable every day and carries the highest adoption risk.

---

## Design and brand layering

Three distinct layers, frequently conflated. They belong at different gates.

| Layer | What it covers | Where it lands |
| --- | --- | --- |
| Trust and tone | Product principles: calm over urgent, plain language over institutional, never implying official precision unless source and confidence are clear | Set at Gate 1, holds through Gate 6 |
| UI kit and components | Type scale, spacing, color roles, interaction states, reusable component rules, design tokens, cross-platform parity | Built at Gate 3 |
| Name and brand identity | Final product name, visual identity, trademark clearance, domain, store listing assets | Deferred to Gate 6 and after |

**Approved position:** brand is deferrable; trust is not. In an emergency coordination product, visual credibility is a functional property. If a pilot participant does not act on an alert because the interface did not look trustworthy, the pilot cannot distinguish a failed coordination model from a presentation failure.

**Two consequences:**

1. **Do not ship the pilot as "ECA."** A working name is selected at Gate 3. It is explicitly provisional, unregistered, and requires no trademark search. This removes an unnecessary confound from pilot feedback without committing to brand work.
2. **Do not treat the pilot as a naming study.** Pilot participants joined through an existing relationship with the founder. They will produce reliable signal on the coordination loop and unreliable signal on what name scales beyond Boulder Heights.

The UI kit must be token-based so that a later rebrand is a variable swap rather than a rebuild. This is the mechanism that makes deferral safe.

`docs/design-system.md` covers the paused investor presentation and is not an input to the MVE-1 UI kit.

---

## Store and bundle identity

Three separate identifiers that are commonly confused. Only one is permanent.

| Identifier | Visible to users | Changeable | Set by |
| --- | --- | --- | --- |
| Display name | Yes — under the app icon | Any time, any build, free | The build |
| Developer / seller name | Yes — on the store listing | Tied to account type | Apple Developer Program enrollment |
| Bundle identifier (iOS) / package name (Android) | No | Permanently locked once a build is uploaded | Gate 4 decision |

**The constraint:** TestFlight distribution requires an app record in App Store Connect, and that record binds to a bundle identifier. Once any build is uploaded — even for TestFlight only, even if never submitted for App Store review — the bundle identifier is locked to that record. Changing it requires creating a new application in App Store Connect, which means pilot participants delete and reinstall as a new app with no update path, all testers are re-invited, and push credentials are reissued. Android package names behave the same way in Play Console.

**Approved position:** derive the bundle identifier and package name from the company, not the product. A reverse-domain identifier under `com.leehilllabs.` is invisible to users, never has to match whatever the app is eventually named, and keeps the entire brand layer deferrable to Gate 6. This must be an explicit line item in the Gate 4 build-and-delivery decision entry, not an incidental choice made during scaffold.

**Long-lead risk — Apple account type.** The store listing seller name comes from Apple Developer Program enrollment. Individual enrollment lists a personal name; organization enrollment lists the legal entity. Organization enrollment requires the incorporated entity, a D-U-N-S number, and verification, and converting an existing individual account to an organization is not a settings toggle. Verify the current enrollment type and correct it well ahead of Gate 4.

`leehilllabs.com` is not required for the reverse-domain convention — Apple does not verify domain ownership — but should be acquired if not already held.

---

## External dependency rule

LHL is a solo operation. Several roadmap items depend on parties who are not employees, are not compensated, and hold no equity position. Cara O'Brien's legal review is the current example: documents routed after incorporation have been outstanding for an extended period.

**Rules:**

1. **No gate closes on an external party's action.** Gates close on positions John authors and approves. External review runs as a parallel track and attaches to a later milestone.
2. **Every externally-dependent task carries three dates, not one:** a `Requested` date, a `Needed By` date, and an `Escalate` date. The `Escalate` date is when John reassesses the resource rather than waiting further.
3. **Minimum lead time for uncompensated external legal work is six weeks** from `Requested` to `Needed By`, unless a written commitment says otherwise.
4. **Externally-dependent tasks never sit on the critical path.** If a gate cannot proceed without one, the gate definition is wrong and must be restructured — as Gate 2 was.

**Applied to Gate 2:** the liability and safeguards position is authored and approved by John, informs design at Gate 3, and is reviewed by counsel on a parallel track. Formal counsel sign-off is a hard requirement before any public release, and a soft target before the pilot. Whether a documented internal position is a sufficient risk posture for a closed pilot with known participants is itself a question for counsel; this framework sequences the work but does not make that determination.

**Open founder decision, not a task:** whether Cara remains the right legal resource, and whether an offer of compensation or an equity position is warranted to secure reliable turnaround. This is noted here because it is a live constraint on the schedule. It does not belong in the roadmap until John decides to act on it.

---

## Historical roadmap restructuring record — completed 2026-08-06

The following instructions were implemented after John's 2026-08-06 approval and are retained as historical rationale for the current roadmap structure. They are not an active migration checklist. Current task status and approved dates come from `docs/00-master-roadmap.md`.

### 1. Add a `Gate` column

Current column order for Active and Backlog tables:

`| Gate | Epic | Task Name | Priority | Target Output | Status | Start Date | Due Date |`

The `Gate` column takes values `G1` through `G6`, `Post-G6`, or `Ops`. Do not remove or repurpose the `Epic` column — gate describes sequence, epic describes type of work, and both are load-bearing. Ops and admin work that does not gate product progress takes `Ops`.

The Archive table is not modified. Do not backfill a `Gate` value onto historical rows.

### 2. Sort the Active table by gate

Order: `G1`, `G2`, `G3`, `G4`, `G5`, `G6`, `Ops`. Preserve every existing row. This is a reordering and column addition, not a rewrite.

### 3. Map existing rows

| Existing task name | Gate | Change required |
| --- | --- | --- |
| Define initial MVP scope and success criteria | G1 | Target Output narrows to direction only; success and acceptance criteria move to G3 |
| Consolidate Resilience Lifecycle FigJam comments | G1 | No change |
| Blocker 6: External Warning Feed API Structuring | G2 | Move from Backlog to Active; raise Priority to High; retitle to reflect feasibility research rather than integration mapping; must precede G3 |
| Blocker 2: 911 Call Liability & Legal Strategy | G2 | Move from Backlog to Active; Target Output becomes a John-authored position, not counsel sign-off; add `Requested` / `Needed By` / `Escalate` dates for the parallel counsel track |
| Finish approved user flows and low-fidelity screens | G3 | No change |
| Blocker 5: Cross-Platform UI Synchronization | G3 | Expand Target Output to include design tokens — type scale, spacing, color roles, states — not layout parity alone |
| Approve backend approach | G4 | No change |
| Approve authentication approach | G4 | No change |
| Approve notification approach | G4 | No change |
| Approve maps and external-data approach | G4 | No change |
| Approve offline and secure-storage approach | G4 | No change |
| Approve build and delivery approach | G4 | Add bundle identifier and Android package name to Target Output as explicit required content |
| Choose production mobile-app repository name | G4 | No change |
| Verify Apple Developer / Google Play Console Access | G4 | Move from Backlog to Active; raise Priority to High; Target Output must confirm enrollment account type, not just access |
| Build the first approved MVP slice | G5 | Target Output references Gate 3 acceptance criteria explicitly rather than "proportionate validation" |
| Blocker 7: UAT Simulation Engine Boundary Limits | G6 | Remains in Backlog; no longer the only validation-related row |
| Legal Review Prep | Ops | Add `Requested` / `Needed By` / `Escalate` dates |
| Knowledge Transfer Session | Ops | No change |
| Final Signatures | Ops | Add `Requested` / `Needed By` / `Escalate` dates |
| Research Banking Options | Ops | No change |
| Expense & Receipt Reconciliation | Ops | No change |
| Low-Bandwidth / Satellite Data Mode | Post-G6 | No change |

### 4. Add new rows

| Gate | Epic | Task Name | Priority | Target Output |
| --- | --- | --- | --- | --- |
| G1 | ECA Product Design | Define trust and tone principles | High | Approved product principles governing voice, urgency, and claims of official precision, recorded in `docs/03-mvp-requirements.md` |
| G3 | ECA Product Design | Approve data model and permission schema | High | Approved minimum data model and permission rules covering time-bounded access, per-household hazard status, and leadership succession, recorded in `docs/04-decision-log.md` |
| G3 | ECA Product Design | Write MVE-1 acceptance criteria | High | Minimum screen and state inventory proving each of the five approved flows on iOS and Android |
| G3 | ECA Product Design | Select provisional working product name | Med | Approved provisional name recorded as explicitly non-final; find-and-replace of `ECA` scoped |
| Ops | Business Infrastructure & Ops | Acquire leehilllabs.com | Low | Domain registered to LHL |
| G6 | Product Validation | Design Boulder Heights pilot test plan | High | Approved test plan defining what is measured, what triggers a test, what participants are asked to do, and what constitutes success |
| G6 | Product Validation | Execute Boulder Heights pilot | High | Pilot run against the approved test plan; findings documented |
| G6 | Product Validation | MVE-1 go/no-go decision | High | Approved go/no-go recorded in `docs/04-decision-log.md` |
| Post-G6 | ECA Product Design | Product name and brand identity | Med | Final name, visual identity, trademark clearance, and store listing assets |

### 5. Approved schedule baseline

John approved this baseline on 2026-08-06:

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
| Pilot test plan | 2026-09-01 | 2026-11-20 |
| Holiday blackout | 2026-12-21 | 2027-01-02 |
| G6 pilot execution | 2027-01-05 | 2027-02-13 |
| G6 go/no-go | 2027-02-15 | 2027-02-20 |

Ordering constraints that must hold in any re-baseline:

- G2 closes before G3 design work is approved
- G3 closes before any G4 decision is approved
- G4 closes before any production application code is written
- Pilot test plan exists before G5 closes

Planning assumes 20 hours per week, Monday through Friday, with no scheduled deliverables 2026-08-10 through 2026-08-14. G1 and G2 run in parallel. The December 21 through January 2 holiday blackout protects pilot participation quality; the six-week January/February pilot is intended to measure repeat adoption behavior.

### 6. Changelog

Add a single roadmap changelog entry describing the gate restructuring, the column addition, and the newly added rows, identifying Claude as the proposing agent and Codex as the implementing agent. Do not write separate changelog entries per row.

---

## Founder decisions resolved 2026-08-06

1. John will select the provisional working name at Gate 3 without a pilot-participant naming round. The pilot remains focused on validating the coordination model.
2. John is willing to proceed to a closed, personal-invitation neighborhood pilot using a documented internal safeguards position and founder-approved pilot participation/liability acknowledgment while counsel review continues. This does not authorize public release or represent formal legal sign-off.
3. The post-incorporation documents were sent to Cara on 2026-07-14. John will reassess the legal-resource approach on 2026-08-31. A simplified request and possible compensation or equity arrangement are being explored with Claude but are not approved roadmap actions unless John decides to proceed.
