# Gate 3 — MVE-1 Screen/State Inventory v0.1

Status: Slices A–B founder-approved for coverage on 2026-09-03. Slices C–D remain draft for founder coverage review. Not approved low-fidelity design.

Working review surface: [Gate 3 — MVE-1 Screen/State Inventory Review](https://docs.google.com/document/d/1X7I4xDkJPkYO32b2459yp4Ttl4LsBxi_JjkMzZCVSgw/edit). Comments and draft discussion remain non-canonical until John explicitly approves a slice and Cody promotes the resulting decision here.

## How to read this inventory

- A **parent screen** is a stable user destination or interaction container that may require several low-fidelity frames.
- A **state variant** is a materially different condition of that parent—such as loading, denied, stale, claimed, expired, or corrected—not automatically a separate navigation destination.
- **External surfaces** are needed for the pilot journey but are not necessarily designed as in-app LHL screens.
- John first reviews whether every necessary screen family and consequential state has a home. Layout, visual hierarchy, final copy, and reusable component rules follow after coverage approval.

## Coverage summary

- 30 active in-app parent screen families; retired ID S06 remains documented for traceability.
- 2 external pilot surfaces.
- 11 approved experience-map stages covered.
- Five role/responsibility lanes represented: resident/household, LHL+sourced information, trusted member/helper, administrator, and cross-cutting safety/privacy/permission/failure.
- Four internal lifecycle test contexts covered without requiring consumer-facing Ready/Alert/Active Incident/Recovery labels.

## External pilot surfaces

| ID | Surface | Purpose | Required conditions |
| --- | --- | --- | --- |
| X01 | Community-admin beta invitation | A community administrator sends the platform download/install invitation plus a separate `COMMUNITY JOIN CODE` that the invitee saves for later entry. | Invitation valid/invalid; platform handoff; download/install purpose explicit; the separate code and installation do not grant community membership. |
| X02 | Native Call/Text handoff | A member-profile action opens the device phone or messaging application. | Native app available/unavailable; member-provided number; no auto-send, capture, synchronization, or delivery guarantee. |

## Parent-screen inventory

| ID | Stage | Parent screen | Primary actor | Core purpose | Required state variants |
| --- | --- | --- | --- | --- | --- |
| S01 | 01 | App launch, welcome, role, and limits | Resident | Open the app, explain what LHL does and does not do, and provide a calm path into account setup. | First visit; returning visit; skippable guidance; random rotation of 5–7 short launch messages including occasional safety or community-value messages; mandatory safety disclosures remain on their required contextual surfaces. |
| S02 | 01 | Notification primer | Resident | Explain notification purpose and limits before requesting OS permission. | Not requested; explanation before the OS prompt; allowed; denied with continued app access; later disabled at OS level; clear path to OS and LHL notification settings; no delivery guarantee. |
| S03 | 01–02 | Resident account and contact information | Resident | Create one independent adult User Profile with required first name, last name, phone number, and Call/Text consent plus optional preferred first name. | Empty; incomplete; validation error; saved; failed save; account suspended; retry/recovery; multiple independent profiles may use the same address without household linking. |
| S04 | 02 | Home and assistance information | Resident | Capture saved home address, entry instructions, pets/animals, driveway or physical-access notes, utility-shutoff information, and mobility or other practical needs, with a brief explanation of future request value. | Empty; partial; complete; edit; save failure; private by default; address and entry instructions required; other approved fields optional; replaceable starter examples are never stored as resident data. |
| S05 | 02 | Incident-notification setup and saved-home location | Resident | After S04 address entry, show the interpreted address and static neighborhood pin, explain its incident-matching use, and present LHL notification settings with the default shown as on. | Resolving; usable point shown; `Use this location` or `Edit address`; approximate-but-close point accepted; correction suggestion; ambiguous/invalid address; legitimate unvalidated address saved; no usable coordinate; notifications enabled/disabled; address change triggers a new map result; no operator/admin verification. |
| S07 | 03 | Join a community | Resident | Enter the saved `COMMUNITY JOIN CODE` and request membership using generic community language; Boulder Heights is the only configured MVE-1 community. | Empty; invalid; valid code shows only the community name for confirmation; failed/rate-limited; submitted; pending approval; no member, request, activity, or other group content exposed before approval. |
| S08 | 03 | Membership status | Resident | Show pending, approved, denied, revoked, or suspended membership without exposing group content early. | Pending; approved; denied; retry/new-code path if permitted; revoked/suspended; offline shows the last successfully known state and that a newer decision cannot be checked. |
| S09 | 03 | Administrator join-request queue | Administrator | Show pending community membership requests to the authorized community administrator only. | Empty; loading; pending list; offline/error; community name in context; no moderation, incident-management, or community-phase controls. |
| S10 | 03 | Administrator join-request review | Administrator | Approve or deny one membership request. | Pending decision; confirmation; approved; denied; failed action/retry; already-reviewed or changed request stated plainly before returning to the current queue. |
| S11 | 04 | First saved-home tour | Resident | Provide a skippable orientation covering navigation, current sourced conditions, community membership, requests, the user profile, and tutorial replay. | First arrival; step progression; skip; completed; replay from Help; exact sequence, copy, and presentation finalized during low-fidelity design. |
| S12 | 04–11 | Saved-home starting screen | Resident | Provide the stable starting screen for the resident's saved-home context across all internal lifecycle test contexts. | No current sourced condition; sourced condition present; home signals present/missing/stale; community activity empty/active; loading; offline; corrected-content indicator; suspended account; paths to sourced conditions, signals, requests/offers, membership, profile, and Help without a social feed. |
| S13 | 05 | Sourced Events feed | Resident / helper where permitted | Present one current feed item per source-defined Event associated with the saved-home location. `Event` is the product umbrella for incidents, advisories, watches, warnings, orders, and other approved sourced types; the interface does not label push eligibility. | Empty; loading; offline; current; stale; source unavailable; corrected; expired/closed; prominent standalone evacuation warning/order when an approved source exists; simulated test data clearly separated. |
| S14 | 05–06 | Event detail and update history | Resident / helper where permitted | Show the Event's current/latest state followed by its chronological sourced update sequence, with Event Type, source attribution, update times, geography/relevance, limitations, status, contextual safety guidance, and source links. | Initial notice; material update; attributed multi-source update when common identity is established; related-Event link without merger; non-push condition; stale; correction/retraction; cancellation/closure; source unavailable; simulated test; acknowledgement eligible/ineligible. |
| S15 | 06 | Event-update acknowledgement and community status | Resident / approved community member | Offer the optional deliberate `I saw this update` action for one exact eligible Event update and provide scalable community-scoped acknowledgement visibility without placing an unlimited member list directly on Event detail. | Eligible-unacknowledged; acknowledged with timestamp; compact community-scoped summary; on-demand searchable/filterable `Acknowledged` and `No acknowledgement recorded` states; selected-community context; no cross-community exposure; no default compliance-style denominator; ineligible/no control; material update resets; stale/expired; failed action/retry; exact location and separate-screen need remain a wireframe hypothesis. |
| S16 | 06 | Saved-home signals | Resident | View and update voluntary saved-home presence and Event check-in separately for the adult User Profile and separately from acknowledgement. | Someone home; household away; not shared; no recent update/stale; not in/left Event-relevant area; missing; failed update; clearly self-reported—not verified safe; same-address adult profiles may report different states. |
| S17 | 04–11 | Trusted-group activity | Resident / helper | Browse approved requests and offers without creating a social feed or general chat. | Empty; loading; offline; Open/Claimed/Closed indicators; request/offer filters; recovery-context presentation; no quiet-item push implication. |
| S18 | 07 | Create community request | Resident | Create a structured request and clearly state that requests do not contact emergency services. | Empty; validation; review; published Open; failed publish/retry; optional task-specific private-field selection; cancel draft. |
| S19 | 07 | Create offer | Resident | Publish an offer with optional Item/Tool or Skill/Labor category. | Empty; validation; review; published; failed publish/retry; edit/cancel draft. |
| S20 | 07–08 | Open request or offer detail | Resident / helper | Show the coordination object, audience, creator, state, and eligible action. | Open request claimable; own Open request; offer detail; already claimed/stale action; failed claim; no pre-claim private messaging. |
| S21 | 08 | Claim confirmation | Helper | Make the transition from Open to Claimed deliberate before private coordination begins. | Confirm; cancel; success; failed/stale claim; safety/privacy reminder where relevant. |
| S22 | 08–10 | Claimed request and private thread | Requester / claimant | Coordinate only within the request-specific requester/claimant thread; either may message first. | Claimed/no messages; messages; send failure/retry; offline queued/draft behavior TBD by architecture; released/reopened; closed/read-only; participant access lost. |
| S23 | 08 | Release or reopen request | Claimant / requester | Return an unsuitable match from Claimed to Open without inventing a fourth persistent state. | Helper release confirmation; requester reopen confirmation; success; failed/stale action; participant notification treatment remains open. |
| S24 | 09 | Task-specific sharing setup | Requester | Select only the private information needed for the claimed task and explain purpose, recipient, and duration. | No eligible private fields; initial approved-field selection; field-level deselection where permitted; one-day default; validation; cancel; grant failure; consent absent/fail closed. |
| S25 | 09 | Active sharing and access management | Requester / claimant | Show exactly what is shared, with whom, why, and until when, and allow early revocation. | Active requester view; active claimant view; revoked; expired/re-masked; renewal/new grant; offline/stale access state; revocation failure with honest recovery. |
| S26 | 10 | Request completion and closure | Requester | Let only the original requester close completed work and distinguish request closure from incident resolution. | Close confirmation; closed success; failed/stale close; helper read-only closed state; requester reminder with `Close` or `Keep open`; no auto-close. |
| S27 | 11 | Recovery coordination context | Resident / helper | Reuse approved request, offer, claim, sharing, and closure patterns for remaining recovery needs. | Empty; active recovery requests/offers; created/claimed/closed; sourced context current/stale/closed; no universal community Recovery status required. |
| S28 | Cross-stage | Member directory and member profile | Approved member | Find approved members and use native Call/Text actions without exposing broader private profile data. | Directory empty/loading/offline; member profile; Call/Text available/unavailable; household signals visible only as approved; no email/general DM. |
| S29 | Cross-stage | Help, safety, and guidance replay | Resident / helper / administrator | Provide accessible safety guidance, LHL limits, privacy explanations, and replay of progressive guidance. | General Help; Safety/911 guidance; notification explanation; privacy/sharing explanation; replay first-use guidance; offline availability requirement to test. |
| S30 | Cross-stage | Notification settings | Resident | Disable all LHL notifications in-app and explain interaction with OS settings. | Enabled; disabled in LHL; OS-denied; permission changed externally; save failure; no app-defined quiet hours or rate controls. |
| S31 | Cross-stage | Account/access integrity | Any participant | Explain account suspension, revoked access, authentication/access failure, and next available action honestly. | Suspended; membership revoked; signed out/session expired; failed action; retry/contact path; minimal audit-only suspended behavior. |

## Retired inventory IDs

- **S06 — Household-member authority and consent:** Retired from MVE-1 on 2026-09-03. MVE-1 does not collect a standing field for people in the household relevant to an assistance request. Each adult uses an independent User Profile, and profiles sharing an address are not linked into a household account.

## Cross-cutting state requirements

Every applicable parent must be evaluated against these states; they should not be drawn as one generic error screen when the recovery action differs.

| State family | Required distinction |
| --- | --- |
| Loading vs empty | `No data yet` must not look like a request still in progress. |
| Offline vs source unavailable | Loss of the participant's connection differs from a failed/stale external source. |
| Current vs stale | Show timestamp and avoid presenting stale mutable context as current. |
| Corrected/retracted vs silently replaced | Material changes remain visible and reset acknowledgement where applicable. |
| Missing vs intentionally unshared | Do not imply that withheld household information is absent or forgotten. |
| Permission denied vs expired vs revoked | Explain whether access never began, ended automatically, or was deliberately ended early. |
| Failed action vs completed action | A tap is not success; show honest retry or next steps. |
| Closed request vs resolved incident | Closing coordination work never means the emergency or sourced condition is over. |
| Simulated vs real sourced content | Test/drill content must be unmistakable and never visually merge with real incident information. |
| Suspended vs ordinary offline | Pilot suspension suppresses new LHL notifications/drill content and exposes only the approved minimum state. |

## Remaining Gate 3 decisions exposed by the inventory

These are design questions, not missing product approval unless explicitly stated.

1. Minimal acknowledgement wording, prompt, expiry/staleness treatment, and exact material-update reset presentation; test whether community-scoped status belongs on a separate S15 screen, an expandable Event-detail section, a filtered member view, or another location, including findability, 10-versus-200-member scale, selected-community context, and social-pressure risk.
2. Requester reminder interval, whether it varies by context, and push versus in-app delivery.
3. Final progressive-guidance copy, number of steps, and replay presentation.
4. Release/reopen confirmation wording and participant-notification treatment.
5. Exact consumer-facing language, if any, replacing internal Ready/Alert/Active Incident/Recovery labels.
6. Field-level temporary-sharing interaction and renewal presentation within the approved task-specific boundary.
7. Which Help/Safety content must remain available offline.

## Recommended founder review order

Review coverage in four bounded slices rather than approving 30 active parent families at once:

1. **Slice A — Entry, trust, and access:** X01 and S01–S12, including retired S06 and administrator S09–S10. **Founder-approved for coverage on 2026-09-03.**
2. **Slice B — Sourced Events and saved-home signals:** S13–S16. **Founder-approved for coverage on 2026-09-03, with S15's UX location explicitly provisional for wireframe testing.**
3. **Slice C — Community coordination and temporary sharing:** S17–S26 plus X02/S28.
4. **Slice D — Recovery and cross-cutting integrity:** S27 and S29–S31, followed by the cross-cutting state audit.

After all four slices are founder-approved for coverage, hand the inventory to CC or Claude for low-fidelity visual layouts in Figma. Each parent screen may produce multiple wireframes for its consequential states.
