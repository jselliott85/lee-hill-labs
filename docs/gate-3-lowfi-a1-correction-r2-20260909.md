# Gate 3 — A1 Correction Round 2

Prepared 2026-09-09 by Cody. Roadmap task: **ECA Product Design / Finish approved user flows and low-fidelity screens** — In Progress. John authorized “START pass #2” after the explicit bounded-A1 recommendation. This is the **second A1 drawing round**, not A2 or the program-wide consequential-state Pass 2.

**Superseded current-state note, 2026-09-10:** Claude completed the bounded re-review with zero Tier 1 findings. John's dispositions were recorded and the authorized four-frame cleanup was executed in [A1 Correction Round 3](gate-3-lowfi-a1-correction-r3-20260910.md). This Round 2 document and its packet remain review provenance, not the current Figma status.

## Founder review completed; Claude re-review next

John completed Round 2 review on 2026-09-10 and left 11 new native Figma comments. His three explicit follow-up approvals are now canonical: S02/S02b will use one LHL action to open the native permission decision with no app-level `Not now`; usable saved-home location is critical to the full approved incident-matrix Event/alert experience but is not required for community actions; and the official-alerts sentence is approved as current placeholder copy. The updated [Claude re-review companion](assets/gate-3-lowfi-a1-r2-review/A1-R2-review-companion-20260910.md), [unannotated layouts PDF](assets/gate-3-lowfi-a1-r2-review/A1-R2-unannotated-layouts-20260910.pdf), and [separate comments PDF](assets/gate-3-lowfi-a1-r2-review/A1-R2-comments-20260910.pdf) are the next bounded review artifacts. The current Figma snapshot is intentionally unchanged for that review. Original Round 1 screens/comments and the existing one-review/one-re-review allowance remain unchanged.

- [Sheet 01 — email, entry, sign-in and account setup](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-2).
- [Sheet 02 — home, location and notification outcomes](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-126).
- Former [Sheet 03 link](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-2) now opens a relocation note beside the walkthrough; no screens remain in a separate bottom group.

**Same-day board reflow requested by John:** Read each expanded box left to right. Sheet 01 contains X01, S01, S01-signin, S01-code, S03a, S03b, S03d and S03c. Sheet 02 contains S04a, S04b, S05, S05b, S02, S02b and S02-OS. Sign-in, duplicate-number and no-location panels are alternative branches, not mandatory steps for every resident. All 15 panels retain their IDs, internal geometry and text. Only review-board organization/navigation changed; no product revision or new review round.

Review flow, missing dependencies, next actions, required/optional information, privacy and safety meaning. Functional placement is in scope; pixel positions, Figma canvas organization, branding, final copy and implementation are not. Flag unclear or misleading wording even though copy is draft. These are static editable layouts, not a wired prototype.

## Applied correction scope

- A-01–A-03: full address always included in deliberate sharing; selectable other details; one-day default, automatic expiry and early revocation; clearer home purpose; larger required Access instructions placeholder, never a saved value. Canonical field remains entry instructions. Empty required guidance has disabled Continue. Home address remains on S04.
- A-04: water-shutoff-in-crawlspace example added to optional utility field. All four optional fields retained.
- A-05–A-08: eligible Event and community notification purpose; limits/no guaranteed delivery; OS-only control, On recommended not presumed; actual native-prompt boundary with allow/deny/defer → S07.
- A-09–A-11: no-location title leads with failure; both no Event/alert pushes and no personalized Events feed disclosed before Continue without Events; primary Edit address; community-only S02b; old LHL master switch removed from current drafts.
- A-13–A-14: corrected sequence, routes and state ledger. New-account flow is S01 → S03 → S04 → S05 → S02 → joining/membership/guidance. Signed-out returning resident gets SMS sign-in; valid signed-in resident goes to saved starting screen subject to access rules.
- Additional approved directions: fixed signup safety retained verbatim; no rotating messages; email invitation; unique phone assignment with S03d duplicate-creation failure; existing-owner sign-in remains allowed, no username/password fields. Account identity remains independent of home/community; no multi-home UI.
- A-12 remains Tier 3, log-only; no cosmetic duplicate-heading rewrite. Positive C02/C11 comments are not whole-frame/final-copy approval. D1/C13 and structured-field C14 remain withdrawn. No product rule beyond the recorded approvals was inferred from the handback.

## Current frame manifest

13 app viewports across the same five parent families, one external email sample, and one OS-permission boundary panel: 15 panels total. The OS panel is explanatory, not an invented native dialog or extra inventory parent.

| Frame key / parent | Actor | State | Figma node | Source | Verification / disposition |
| --- | --- | --- | --- | --- | --- |
| X01 (X01) | Administrator → invitee | You’re invited to try LHL | [37:8](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-8) | INV X01; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S01 (S01) | Resident | A place to coordinate | [37:30](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-30) | INV S01; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S03a (S03) | Resident | Let’s start with you | [37:75](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-75) | INV S03; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S03b (S03) | Resident | Check your text messages | [37:105](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-105) | INV S03; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S03c (S03) | Resident | How members can reach you | [37:132](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-132) | INV S03; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S04a (S04) | Resident | Add your home details | [37:155](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-155) | INV S04; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S04b (S04) | Resident | What might help? | [37:180](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-180) | INV S04; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S05 (S05) | Resident | Does this look close? | [37:211](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-211) | INV S05; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S05b (S05) | Resident | We couldn’t locate your home | [37:237](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-237) | INV S05; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S02 (S02) | Resident | About notifications | [37:54](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-54) | INV S02; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S01-signin (S01) | Resident | Sign in to LHL | [38:8](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-8) | INV S01; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S01-code (S01) | Resident | Enter your sign-in code | [38:38](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-38) | INV S01; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S03d (S03) | Resident | This number is already in use | [38:61](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-61) | INV S03; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S02b (S02) | Resident | Community notifications | [38:82](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-82) | INV S02; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |
| S02-OS (S02) | Resident | Device permission handoff (not app UI) | [38:103](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-103) | INV S02; REQ; approved 2026-09-09 corrections | Round 2; persisted/image checked; founder review pending |

## Main flow and boundary checks

| Source frame | Visible action / condition | Destination or result |
| --- | --- | --- |
| [X01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-8) | Download LHL | external-install |
| [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-30) | Create account | S03a |
| [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-30) | Sign in | S01-signin |
| [S03a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-75) | Send verification code | S03b |
| [S03a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-75) | Back | S01 |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-105) | Send another code | resend |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-105) | Change phone number | S03a |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-105) | Verify number | S03c-after-valid-code |
| [S03c](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-132) | Continue | S04a-after-consent-and-save |
| [S03c](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-132) | Back | S03a |
| [S04a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-155) | Save and continue (requires entry instructions) | S04b |
| [S04a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-155) | Back | S03c |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-180) | Save and continue | S05 |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-180) | Skip optional details | S05 |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-180) | Back | S04a |
| [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-211) | Use this location | S02 (after successful save) |
| [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-211) | Edit address | S04a |
| [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-237) | Edit address | S04a → fresh S05 lookup |
| [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-237) | Continue without Events | S02b |
| [S02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-54) | Choose device permission | S02-OS boundary → S07 |
| [S02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-54) | `Not now — continue` — superseded 2026-09-10, current snapshot only | Remove on next authorized redraw; native OS decision returns to S07 |
| [S01-signin](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-8) | Send sign-in code | S01-code after successful send |
| [S01-signin](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-8) | Back | S01 |
| [S01-code](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-38) | Send another code | resend |
| [S01-code](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-38) | Change phone number | S01-signin |
| [S01-code](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-38) | Sign in | saved starting screen after successful authentication/access check |
| [S03d](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-61) | Sign in | S01-signin |
| [S03d](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-61) | Use another number | S03a |
| [S02b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-82) | Choose device permission | S02-OS boundary → S07 (no Events) |
| [S02b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-82) | `Not now — continue` — superseded 2026-09-10, current snapshot only | Remove on next authorized redraw; native OS decision returns to S07 (no Events) |


All transitions requiring send, verification, authentication or save are contingent on success. Invalid/expired code and connectivity failure are distinct; detailed presentations remain Pass 2/A. One required member-contact checkbox; no profile creation through the sign-in route; immutable member_id is never displayed. The duplicate screen illustrates a confirmed assignment conflict without deciding proof/check timing or permitting recycled-number account takeover.

Location acceptance uses a usable resident-accepted home point, not merely any map result or postal validation. Approximate-but-close is acceptable; wrong result edits S04 and produces a fresh lookup. A usable location is critical to all alerts and Event Types in the approved incident Matrix, but community actions remain available without it under their own access rules. No-location continuation reaches S02b and S07 without restoring Events. A usable location plus denied OS permission still permits the Events feed; no-location plus allowed OS permission does not. Material address match/find/validation failure rates are a major product risk to measure; no provider, threshold, or metric is selected.

## Explicit remaining work

- Pass 2/A: invalid/expired versus network-failed codes, resend/rate/recovery and unknown-account feedback; empty/incomplete/save failures; ambiguous/coarse/no-result distinctions, temporary lookup outage, preview-only failure, accepted-location save failure; OS denied/later-disabled states and settings recovery. Earlier lookup results cannot replace newer edited input (acceptance criterion, no standalone frame).
- A2: S07–S12 joining, approval, guidance and saved starting screen, with location-needed/Edit address persistence. Slice B: S13 no-location feed state. Other inventory parents and all five full product journeys remain incomplete; Round 2 does not claim them drawn.
- Gate 4: session lifecycle/security, normalization and atomic uniqueness enforcement, ownership-proof/collision timing and privacy, SMS abuse controls, recovery and reassignment. No automatic transfer based on receiving SMS.
- Future roadmap: granular in-app notification settings, rotating app-load messages, multiple homes/community memberships under one adult account. None implemented here.
- Founder review/layout approval and the remaining bounded Claude re-review are pending. No task/gate marked Complete.

## Verification and synchronized records

Persisted Figma readback checked 15 viewports at 390 × 844, Inter throughout, no text outside viewports, no obsolete in-app master controls, named routes and exactly one contact-consent checkbox. Consequential revised screens and the review guide were visually inspected. Original source roots and comment-bearing nodes remain at their original locations; mutation calls targeted new Round 2 IDs only. Native comments were not edited or resolved.

The operative Google Doc and combined feedback Doc were updated in place to the recorded decisions, provenance, review order and scoped authorization; 145 and 221 paragraphs respectively retain their tab/heading/list/table topology and native elements. No new review packet was generated before John's review. Earlier PDF/MD exports remain dated historical snapshots, not the current Round 2 baseline.

Repository batch: decision log (execution authorization), current state/live sync (review checkpoint), roadmap (same task, In Progress and same dates), execution preparation, traceability and this handback. No production code, new dependencies, commit or push. Staged evidence: .tmp-trusted-a1-correction-r2-20260909/.

## Same-day review-board organization follow-up

John paused closeout and requested integrating the new bottom-sheet variants into review order. Existing auto-layout boxes now measure 3464 × 1228 (Sheet 01, eight panels) and 3034 × 1228 (Sheet 02, seven panels). Former Sheet 03 is a 1204 × 314 relocation note beside the walkthrough, preserving its link. Removed only its empty row container (38:5); no screen deleted. The guide/review labels describe the integrated sequence and branch distinction.

Verification: all 15 panel preservation signatures match before/after (IDs, internal geometry, text and fonts); all use the existing Inter font; zero enclosure overflow, panel overlap or top-level overlap; screenshots of both sheets, the relocation note and walkthrough checked. Original Round 1 positions unchanged; no native comments modified. Evidence: .tmp-trusted-a1-r2-reflow-20260909/. End-of-day closeout remains paused; John review is the next action. No task completion, commit or push.
