# Gate 3 — MVE-1 Screen/State Inventory v0.1

Status: Draft for founder coverage review. Not approved low-fidelity design.

Working review surface: [Gate 3 — MVE-1 Screen/State Inventory Review](https://docs.google.com/document/d/1X7I4xDkJPkYO32b2459yp4Ttl4LsBxi_JjkMzZCVSgw/edit). Comments and draft discussion remain non-canonical until John explicitly approves a slice and Cody promotes the resulting decision here.

## How to read this inventory

- A **parent screen** is a stable user destination or interaction container that may require several low-fidelity frames.
- A **state variant** is a materially different condition of that parent—such as loading, denied, stale, claimed, expired, or corrected—not automatically a separate navigation destination.
- **External surfaces** are needed for the pilot journey but are not necessarily designed as in-app LHL screens.
- John first reviews whether every necessary screen family and consequential state has a home. Layout, visual hierarchy, final copy, and reusable component rules follow after coverage approval.

## Coverage summary

- 31 in-app parent screen families.
- 2 external pilot surfaces.
- 11 approved experience-map stages covered.
- Five role/responsibility lanes represented: resident/household, LHL+sourced information, trusted member/helper, administrator, and cross-cutting safety/privacy/permission/failure.
- Four internal lifecycle test contexts covered without requiring consumer-facing Ready/Alert/Active Incident/Recovery labels.

## External pilot surfaces

| ID | Surface | Purpose | Required conditions |
| --- | --- | --- | --- |
| X01 | Personal beta invitation | John provides the TestFlight or approved Android-testing invitation that permits installation. | Invitation valid/invalid; platform handoff; LHL must not imply that installation grants Boulder Heights membership. |
| X02 | Native Call/Text handoff | A member-profile action opens the device phone or messaging application. | Native app available/unavailable; member-provided number; no auto-send, capture, synchronization, or delivery guarantee. |

## Parent-screen inventory

| ID | Stage | Parent screen | Primary actor | Core purpose | Required state variants |
| --- | --- | --- | --- | --- | --- |
| S01 | 01 | Welcome, role, and limits | Resident | Explain what LHL does and does not do before account setup. | First visit; returning visit; skippable guidance; contextual 911/official-instructions baseline. |
| S02 | 01 | Notification primer | Resident | Explain notification purpose and limits before requesting OS permission. | Not requested; allowed; denied; later disabled at OS level; link to LHL notification setting; no delivery guarantee. |
| S03 | 01–02 | Account and resident profile | Resident | Create the adult participant account and required resident identity/contact fields. | Empty; incomplete; validation error; saved; failed save; account suspended; retry/recovery. |
| S04 | 02 | Household profile | Resident | Capture approved household source fields and explain why each is requested. | Empty; partial; complete; edit; save failure; private-by-default assistance fields. |
| S05 | 02 | Saved home address and pilot verification | Resident / operator-supported | Enter the address and show whether its derived point is eligible for address-based incident matching. | Address entry; resolving; resolved-awaiting-operator-verification; verified; unverifiable/wrong; notifications remain off; changed address requiring re-verification. |
| S06 | 02 | Household-member authority and consent | Resident | Confirm authority/permission before information about other household members is stored. | No additional members; disclosure; confirmed; declined; validation/error; later edit or member removal. |
| S07 | 03 | Boulder Heights code entry | Resident | Submit the preconfigured code as a request to join the one supported trusted group. | Empty; invalid; failed/rate-limited; submitted; code exposes no group information. |
| S08 | 03 | Membership status | Resident | Show the result of the join request without exposing group content early. | Pending; approved; denied; retry/new-code path if permitted; access revoked/suspended; offline status read. |
| S09 | 03 | Admin join-request queue | Administrator | Show pending Boulder Heights membership requests only. | Empty; loading; pending list; offline/error; no content-moderation or phase-setting controls. |
| S10 | 03 | Admin join-request review | Administrator | Approve or deny one membership request. | Pending decision; confirmation; approved; denied; failed action/retry; stale/already-decided request. |
| S11 | 04 | First household-home tour | Resident | Introduce sourced information, household signals, and community activity without a long blocking tutorial. | First arrival; step progression; skip; completed; replay from Help. |
| S12 | 04–11 | Household-first home | Resident | Provide the stable household-first starting point across all internal lifecycle test contexts. | No current sourced condition; sourced condition present; household signals present/missing/stale; community activity empty/active; loading; offline; corrected-content indicator; suspended account. |
| S13 | 05 | Sourced conditions list | Resident / helper where permitted | Present push-eligible incidents plus approved in-app advisories, watches, and non-push conditions associated with the verified saved address. | Empty; loading; offline; current; stale; source unavailable; corrected; expired/closed; simulated test data clearly separated. |
| S14 | 05–06 | Sourced condition or incident detail | Resident / helper where permitted | Show source, event type, update time, geography/relevance, limitations, status, contextual safety guidance, and source link. | Current initial notice; material update; non-push informational condition; stale; correction/retraction; cancellation/closure; source unavailable; simulated test; acknowledgement eligible/ineligible. |
| S15 | 06 | Minimal update acknowledgement | Resident | Offer the optional deliberate `I saw this update` action only for the exact eligible sourced update. | Eligible-unacknowledged; acknowledged with timestamp; no acknowledgement recorded; ineligible/no control; material update resets; stale/expired presentation; failed action/retry. |
| S16 | 06 | Household signals | Resident | View and update voluntary household presence and incident check-in separately from acknowledgement. | Someone home; household away; not shared; no recent update/stale; not in/left incident-relevant area; missing; failed update; clearly self-reported—not verified safe. |
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

1. Minimal acknowledgement wording, prompt and placement, group audience/hierarchy, expiry/staleness treatment, and exact material-update reset presentation.
2. Requester reminder interval, whether it varies by context, and push versus in-app delivery.
3. Final progressive-guidance copy, number of steps, and replay presentation.
4. Release/reopen confirmation wording and participant-notification treatment.
5. Exact consumer-facing language, if any, replacing internal Ready/Alert/Active Incident/Recovery labels.
6. Exact household-member consent copy and later-edit behavior.
7. Field-level temporary-sharing interaction and renewal presentation within the approved task-specific boundary.
8. Which Help/Safety content must remain available offline.

## Recommended founder review order

Review coverage in four bounded slices rather than approving 31 parent families at once:

1. **Slice A — Entry, trust, and access:** X01 and S01–S12, including admin S09–S10.
2. **Slice B — Sourced information and household signals:** S13–S16.
3. **Slice C — Community coordination and temporary sharing:** S17–S26 plus X02/S28.
4. **Slice D — Recovery and cross-cutting integrity:** S27 and S29–S31, followed by the cross-cutting state audit.

After all four slices are founder-approved for coverage, hand the inventory to CC or Claude for low-fidelity visual layouts in Figma. Each parent screen may produce multiple wireframes for its consequential states.
