# Gate 3 — A1 Review Companion — 2026-09-09

Dated review snapshot, not a competing canonical source. Prepared by Cody for Claude web and John. Use with **Gate 3 — A1 Review Sheets — 2026-09-09.pdf**. The repository wins if it changes after this export. Scope is Pass 1 / A1 only: X01 and S01–S05; resulting layouts await review and founder approval. No production work or later chunk is authorized by this packet.

## Reviewer instructions

Read the handback, inspect the PDF (start board, sheet 01, sheet 02), then use the traceability and source excerpts below. Return numbered findings with tier, frame/deep link, canonical reference, evidence, and proposed disposition. Explicitly state whether there are any Tier 1 findings. Distinguish genuinely missing A1 structure from explicitly assigned later state coverage. One review plus one re-review is the agreed allowance; John decides findings and approval. Do not rewrite the entire plan or begin A2.

Source hierarchy: approved decision log > approved requirements > approved gate/roadmap and design rules > working aids. The excerpts retain dated approval boundaries as historical evidence; later dated decisions govern the same issue. In particular the September 8 Twilio/member-ID decision supersedes September 3 authentication candidates. A1 drawing authorization is not resulting-layout approval.

---

## Part 1 — Handback

# Gate 3 — Pass 1 / A1 Handback

Prepared by Cody, GPT-6 Astra / High, 2026-09-09. Status: structural draft delivered for Claude's independent review and John's layout approval. Roadmap task `ECA Product Design / Finish approved user flows and low-fidelity screens` remains In Progress.

## Start here

- [Figma start-here / entry walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=12-2).
- [Sheet 01 — invitation through verification](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=7-2) and [Sheet 02 — consent through home setup](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-2).
- Review sheets PDF (repository: `docs/assets/gate-3-lowfi-a1/A1-review-sheets.pdf`), sheet 01 PNG (repository: `docs/assets/gate-3-lowfi-a1/contact-sheet-01.png`), sheet 02 PNG (repository: `docs/assets/gate-3-lowfi-a1/contact-sheet-02.png`).
- Repository traceability index and complete A1 state ledger (repository: `docs/gate-3-lowfi-traceability.md`).

## Delivered scope

John authorized A1 in chat and reiterated approval to begin. A1 now contains ten editable 390 × 844 frames: one external invitation sample and nine app viewports covering the five active parents S01–S05. S03 is split into contact fields, code verification, and required contact consent. S04 is split into required home information and optional practical details. S05 has both a usable-point review and a no-usable-coordinate route that preserves continued setup. Splitting these steps is a reviewable layout choice, not a new product requirement.

Two contact sheets and a separate entry walkthrough/index board organize the frames. Each panel includes actor, state, next-action conditions, draft-copy/sample-data notes, and canonical source references outside the mobile viewport. Twenty-four repeated field/action elements reuse editable frame patterns. No published library or final design tokens were created.

The source inventory's 53 semicolon-delimited A1 conditions are all accounted for as frames, annotations, or named later work. This is structural coverage for A1, not completion of every state or the full inventory. The remaining 24 app parents and external X02 are individually marked pending in the index.

## Verification and known limits

- Saved-file readback verified all ten viewport dimensions, Inter text, all action routes, and no text clipping at either viewport or ancestor-container bounds. The two overview sheets and isolated screen exports were visually inspected.
- The primary safety baseline is copied verbatim from approved requirements. No app-level 911 action, unapproved group access, household linking, optional SMS-capability checkbox, visible member_id input, or new provider choice appears.
- Required and optional profile/home fields match the latest rules. Contact consent is explicit and mandatory. Returning to edit account fields preserves verification of an unchanged phone number. Home information remains private until a later deliberate task grant.
- S02 separates device permission from the LHL preference. S05 shows LHL On by default; S05b explains the unavailable point-based notifications and continued app access.
- An early text-resizing issue and the connector's default nested-screen screenshot clipping were corrected. The final images use isolated rendering and were independently checked. The preflight's labeled empty page remains; no page deletion was retried.
- These are static wireframes. Controls have documented destinations and conditions but are not a wired prototype. Illustrative name, reserved 555 phone number, address, join code, and static map are samples. Consumer copy remains draft apart from the reused safety baseline.

Cody's self-review found **no unresolved Tier 1 product/safety contradiction within the scoped A1 structural draft**. This statement does not substitute for Claude's review or John's approval.

## Decisions and deferrals to review

Please assess the account → verification → consent sequence, the required-versus-optional home split, and whether the no-location route makes continued setup clear. S01's Get started / Skip introduction hierarchy remains a test for the scoped navigation-resolution step with S11; the random launch-message set is also unfinished. Exact consent and other consumer wording remain draft.

Required validation/error/offline/suspension, resend/code-expiry, replacement-number, address-correction, OS-permission recovery, and LHL-Off combinations are explicitly assigned to Pass 2/A or their S30/S31 dependencies. No arbitrary code length, timeout, rate limit, or auth implementation was chosen. S07–S12 await Pass 1/A2; sourced Events await B; coordination and sharing await C; Help/settings/access await D. The five complete product journeys depend on those later frames; only their common A1 entry segment is available now.

## Claude review packet protocol

Review against the repository, using the screenshots plus the traceability index, state dispositions, control routes, and five journey-dependency indexes. Return numbered findings with tier, frame/deep link, canonical source, evidence, and proposed disposition. Explicitly state when there are no Tier 1 findings.

Tier 1 product/safety findings block acceptance. Tier 2 structural findings go to John for a decision. Tier 3 cosmetics are logged without expanding the pass. One review plus one re-review is the agreed allowance; unresolved blockers remain unresolved after that cap. John decides outcomes, and Cody incorporates approved changes. No assistant self-approves a product rule, layout, task completion, or Gate 3 closure.

## Handoff state

The operative Google Doc and canonical operating records were updated in the same block. The pending-capture location now points to the founder-approved dated-file Drive folder rather than the earlier in-document queue suggestion. Previous uncommitted preparation/convention work was preserved. No commit or push was requested.

Next work is A1 review, followed by one bounded correction round if required. A2 remains a future authorization. No production app code, launch date, roadmap due date, task completion, or gate closure changed.


---

## Part 2 — Traceability and complete A1 state dispositions

# Gate 3 — Low-Fidelity Traceability Index

Status: Pass 1 / A1 drafted and self-verified on 2026-09-09; independent review and founder layout approval pending. John authorized A1 only. This index records 5 of 29 active app parent families and 1 of 2 external boundaries drawn; the other 24 parent families and X02 are explicitly pending below. Retired S06/S27 remain retired. Source inventory/product coverage is unchanged.

## Review surfaces and source key

- [Start-here / entry walkthrough board](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=12-2).
- [Sheet 01 — invitation through phone verification](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=7-2) and [Sheet 02 — consent through saved-home setup](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-2).
- Review images: sheet 01 (repository: `docs/assets/gate-3-lowfi-a1/contact-sheet-01.png`), sheet 02 (repository: `docs/assets/gate-3-lowfi-a1/contact-sheet-02.png`). Individual screenshots use frame keys in the same directory.
- INV = approved screen/state inventory (repository: `docs/gate-3-screen-state-inventory.md`), identified row. REQ = MVP requirements (repository: `docs/03-mvp-requirements.md`), especially User Profile / Saved-Home Scope, Deliberate Helper Sharing, Trust and Tone, and 911 baseline. FUNC = functional decision log (repository: `docs/functionality-decision-log.md`), identified date/section. Decision log (repository: `docs/04-decision-log.md`) and AGENTS.md source order control conflicts.
- All screens are static, editable low-fidelity layouts; no wired prototype or functional input behavior is claimed. All consumer copy except the reused primary safety baseline is draft. Fictional sample name/phone/address/invitation code and schematic map are labeled in the review notes. Code length, timing, provider configuration, platform widgets, and final cross-platform design rules remain undecided.

## Drawn frame manifest

| Frame key / parent | Actor | State or structural step | Figma node / deep link | Canonical source | Pass / verification / disposition |
| --- | --- | --- | --- | --- | --- |
| X01 (X01) | Administrator → invitee | community invitation / You’re invited to try LHL | [8:8](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-8) | INV X01; FUNC Sep 3 — invitation/access. | Pass 1/A1; persisted + image verified; founder review pending |
| S01 (S01) | Resident | welcome to lhl / A place to coordinate | [10:17](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-17) | INV S01; REQ Trust and Tone; FUNC Sep 1 — 911 and first use. | Pass 1/A1; persisted + image verified; founder review pending |
| S02 (S02) | Resident | before you continue / About notifications | [10:41](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-41) | INV S02; FUNC Sep 3 — notification permission. | Pass 1/A1; persisted + image verified; founder review pending |
| S03a (S03) | Resident | your profile / Let’s start with you | [10:62](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-62) | INV S03; REQ User Profile; FUNC Sep 8 — SMS/contact/member ID. | Pass 1/A1; persisted + image verified; founder review pending |
| S03b (S03) | Resident | verify your number / Check your text messages | [10:92](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-92) | INV S03; REQ User Profile; FUNC Sep 8 — verification. | Pass 1/A1; persisted + image verified; founder review pending |
| S03c (S03) | Resident | member contact / How members can reach you | [10:115](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-115) | INV S03; REQ User Profile; FUNC Sep 8 — consent/member ID. | Pass 1/A1; persisted + image verified; founder review pending |
| S04a (S04) | Resident | your saved home / Add your home details | [10:138](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-138) | INV S04; REQ User Profile / Deliberate helper sharing; FUNC Sep 3. | Pass 1/A1; persisted + image verified; founder review pending |
| S04b (S04) | Resident | practical details · optional / What might help? | [10:163](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-163) | INV S04; REQ User Profile; FUNC Sep 3 — optional fields. | Pass 1/A1; persisted + image verified; founder review pending |
| S05 (S05) | Resident | your home location / Does this look close? | [10:194](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-194) | INV S05; FUNC Sep 3 — saved-home location/address recovery. | Pass 1/A1; persisted + image verified; founder review pending |
| S05b (S05) | Resident | your home location / Your address is saved | [10:220](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-220) | INV S05; FUNC Sep 3 — no usable coordinate/continued access. | Pass 1/A1; persisted + image verified; founder review pending |

## Remaining inventory — explicit deferral

All rows below have no Figma node yet and are not verified or approved as layouts. The named chunks are planning allocations, not additional execution authorization.

| ID | Parent / boundary | Actor | Structural chunk | State disposition |
| --- | --- | --- | --- | --- |
| X02 | Native Call/Text handoff | Approved member / native device | Pass 1/C | No frame yet; full required states carried from INV X02, then relevant Pass 2 slice |
| S07 | Join a community | Resident | Pass 1/A2 | No frame yet; full required states carried from INV S07, then relevant Pass 2 slice |
| S08 | Membership status | Resident | Pass 1/A2 | No frame yet; full required states carried from INV S08, then relevant Pass 2 slice |
| S09 | Administrator join-request queue | Administrator | Pass 1/A2 | No frame yet; full required states carried from INV S09, then relevant Pass 2 slice |
| S10 | Administrator join-request review | Administrator | Pass 1/A2 | No frame yet; full required states carried from INV S10, then relevant Pass 2 slice |
| S11 | First saved-home tour | Resident | Pass 1/A2 | No frame yet; full required states carried from INV S11, then relevant Pass 2 slice |
| S12 | Saved-home starting screen | Resident | Pass 1/A2 | No frame yet; full required states carried from INV S12, then relevant Pass 2 slice |
| S13 | Sourced Events feed | Resident / helper where permitted | Pass 1/B | No frame yet; full required states carried from INV S13, then relevant Pass 2 slice |
| S14 | Event detail and update history | Resident / helper where permitted | Pass 1/B | No frame yet; full required states carried from INV S14, then relevant Pass 2 slice |
| S15 | Event-update acknowledgement and community status | Resident / approved community member | Pass 1/B | No frame yet; full required states carried from INV S15, then relevant Pass 2 slice |
| S16 | Saved-home signals | Resident | Pass 1/B | No frame yet; full required states carried from INV S16, then relevant Pass 2 slice |
| S17 | Trusted-group activity | Resident / helper | Pass 1/C | No frame yet; full required states carried from INV S17, then relevant Pass 2 slice |
| S18 | Create community request | Resident | Pass 1/C | No frame yet; full required states carried from INV S18, then relevant Pass 2 slice |
| S19 | Create offer | Resident | Pass 1/C | No frame yet; full required states carried from INV S19, then relevant Pass 2 slice |
| S20 | Open Request or Offer detail | Resident / helper | Pass 1/C | No frame yet; full required states carried from INV S20, then relevant Pass 2 slice |
| S21 | Claim confirmation | Helper / offer taker | Pass 1/C | No frame yet; full required states carried from INV S21, then relevant Pass 2 slice |
| S22 | Claimed Request or Offer and private thread | Creator / claimant | Pass 1/C | No frame yet; full required states carried from INV S22, then relevant Pass 2 slice |
| S23 | Release or reopen claimed item | Claimant / creator | Pass 1/C | No frame yet; full required states carried from INV S23, then relevant Pass 2 slice |
| S24 | Task-specific sharing setup | Private-data owner | Pass 1/C | No frame yet; full required states carried from INV S24, then relevant Pass 2 slice |
| S25 | Active sharing and access management | Private-data owner / claimant | Pass 1/C | No frame yet; full required states carried from INV S25, then relevant Pass 2 slice |
| S26 | Claimed-item completion and closure | Creator / claimant | Pass 1/C | No frame yet; full required states carried from INV S26, then relevant Pass 2 slice |
| S28 | Member directory and member profile | Approved member | Pass 1/C | No frame yet; full required states carried from INV S28, then relevant Pass 2 slice |
| S29 | Help, safety, and guidance replay | Resident / helper / administrator | Pass 1/D | No frame yet; full required states carried from INV S29, then relevant Pass 2 slice |
| S30 | Notification settings | Resident | Pass 1/D | No frame yet; full required states carried from INV S30, then relevant Pass 2 slice |
| S31 | Account/access integrity | Any participant | Pass 1/D | No frame yet; full required states carried from INV S31, then relevant Pass 2 slice |

S06: no frame; retired because adults remain independent profiles and no standing household-member field is collected. S27: no frame; retired because Recovery reuses S17–S26. These are reasoned non-applicable frame decisions, not gaps.

## A1 required-state ledger

Threshold: **where the participant meaning or next action changes**. Every semicolon-delimited required condition in INV X01/S01–S05 appears below. “Annotation + pending” records the intended handling, but does not claim the dedicated state layout exists. Error/permission expansion is Pass 2/A after the approved sequencing step; source conflicts return to John.

| State key | Canonical required condition | Treatment | Evidence / named pending work |
| --- | --- | --- | --- |
| X01.01 | Invitation valid/invalid | Frame + pending | X01 shows an illustrative valid invitation; invalid invitation recovery remains Pass 2/A (request a current administrator invitation, no app membership). |
| X01.02 | platform handoff | Frame + annotation | X01 Download LHL → administrator-supplied platform install link; installed app opens S01. External platform screens are boundary notes. |
| X01.03 | download/install purpose explicit | Frame | X01 explicitly separates download/install from saving and later entering the code. |
| X01.04 | the separate code and installation do not grant community membership. | Frame | X01 membership notice explicitly requires administrator approval. |
| S01.01 | First visit | Frame | S01 first-visit layout with role/limits and exact safety baseline. |
| S01.02 | returning visit | Annotation + pending | S01 Sign in → returning/session path S31, Pass 1/D; detailed returning visit states Pass 2/A. |
| S01.03 | skippable guidance | Frame + annotation | S01 Skip introduction → S02. Required safety remains visible; mandatory notification explanation is retained. |
| S01.04 | random rotation of 5–7 short launch messages including occasional safety or community-value messages | Annotation + pending | One example community-value message is drawn. Five-to-seven-message set, random rotation and occasional updates remain navigation resolution / Pass 3. |
| S01.05 | mandatory safety disclosures remain on their required contextual surfaces. | Frame | Exact primary safety baseline in S01; deterministic S02 notification limits. Later incident/request/Help contexts assigned to B/C/D. |
| S02.01 | Not requested | Frame | S02 shows permission not requested. |
| S02.02 | explanation before the OS prompt | Frame + annotation | Explanation precedes Choose notification permission; native OS prompt is a boundary note, not a reproduced OS screen. |
| S02.03 | allowed | Annotation + pending | Allow returns to S03a; S05 represents OS allowed + LHL On. Detailed allowed state Pass 2/A. |
| S02.04 | denied with continued app access | Frame + annotation + pending | S02 explicitly says app access continues after denial; deny returns to S03a. Dedicated denied-state presentation Pass 2/A. |
| S02.05 | later disabled at OS level | Annotation + pending | Later OS disablement preserves app access; recovery via device settings and S30. Pass 2/A. |
| S02.06 | clear path to OS and LHL notification settings | Frame + annotation + pending | S02 explains separate device permission; S05 shows LHL control. Explicit recovery links for denied/later-disabled states in Pass 2/A and S30 in Pass 1/D. |
| S02.07 | no delivery guarantee. | Frame | S02 clearly states possible delay/unavailability and no delivery guarantee. |
| S03.01 | Empty | Pending | Empty identity/contact fields: Pass 2/A. S03a uses fictional filled values; S03b code is empty. |
| S03.02 | incomplete | Pending | Required-field validation and retained incomplete values: Pass 2/A. |
| S03.03 | invalid phone | Pending | Invalid/non-SMS phone explanation and recovery: Pass 2/A; no paid line-type lookup. |
| S03.04 | verification code sent | Frame | S03b code sent, code entry empty, Verify unavailable until input. |
| S03.05 | incorrect/expired code | Annotation + pending | S03b note assigns incorrect/expired code feedback to Pass 2/A; no duration or code-length decision. |
| S03.06 | resend/recovery | Frame + pending | S03b Send another code and Change phone number actions; detailed resend limits/recovery feedback Pass 2/A; Gate 4 specifies mechanics. |
| S03.07 | verified | Frame | S03c explicitly shows Phone verified; verification establishes receipt/control for the attempt, not reachability assurance. |
| S03.08 | member record created with immutable `member_id` | Annotation | S03c note records member_id generated on member-record creation and stable thereafter. Never a consumer editable field. |
| S03.09 | replacement number pending verification | Annotation + pending | S03b explains later replacement verification; replacement-pending form/state Pass 2/A. |
| S03.10 | replacement number verified and active without changing `member_id` | Annotation + pending | S03c note preserves immutable member_id; replacement verified/active state Pass 2/A. |
| S03.11 | required consent not accepted | Frame + annotation | S03c has one unchecked mandatory consent and unavailable Continue; accepting it and saving leads to S04a. |
| S03.12 | saved | Annotation + pending | Successful consent/profile save → S04a; detailed save confirmation/feedback Pass 2/A. |
| S03.13 | failed save | Annotation + pending | Failed save retains entered information and offers honest retry; Pass 2/A, no success claim before confirmation. |
| S03.14 | account suspended | Pending | Suspension/access boundary in S31 Pass 1/D, consequential onboarding suspension state Pass 2/A and cross-cutting audit. |
| S03.15 | no periodic re-verification of an unchanged number | Frame + annotation | S03b says verify once; S03c note forbids periodic unchanged-number re-verification. |
| S03.16 | multiple independent profiles may use the same address without household linking | Frame + annotation | S01 says each adult has their own profile even at a shared home. No household linking or deduplication controls. |
| S03.17 | no redundant optional text-capability checkbox or paid MVE-1 line-type lookup. | Frame + annotation | Exactly one contact-consent checkbox; no SMS-capability self-attestation checkbox or paid lookup control. |
| S04.01 | Empty | Frame + pending | S04b optional fields are empty with example placeholders; empty required address/entry fields Pass 2/A. |
| S04.02 | partial | Pending | Partially filled required/optional forms and validation Pass 2/A; no silent skip of mandatory fields. |
| S04.03 | complete | Frame + annotation | S04a required fields filled with fictional data; S04b optional fields may remain blank. All optional fields filled is Pass 2/A. |
| S04.04 | edit | Frame + annotation | Back and S05 Edit address route to required home information; saved-profile edit variants Pass 2/A. |
| S04.05 | save failure | Annotation + pending | S04a note: show retained values and retry if save fails; Pass 2/A. Do not advance on failure. |
| S04.06 | private by default | Frame | S04a privacy explanation + S04b private-until-shared explanation; later grant mechanics are S24/S25. |
| S04.07 | address and entry instructions required | Frame | S04a required Complete home address and Entry instructions; codes, if applicable, belong in entry instructions. |
| S04.08 | other approved fields optional | Frame | S04b four optional practical fields and Skip optional details; no standing household-member field. |
| S04.09 | replaceable starter examples are never stored as resident data. | Frame + annotation | S04b fields explicitly display examples. Notes forbid saving placeholders unless deliberately adopted/replaced; empty skip saves no example data. |
| S05.01 | Resolving | Pending | Location resolving/loading: Pass 2/A; never label a pending result as usable. |
| S05.02 | usable point shown | Frame | S05 static illustrative point and interpreted fictional address; no real geocoding claim. |
| S05.03 | `Use this location` or `Edit address` | Frame | S05 shows Use this location and Edit address; accepted point → S07 (A2), edit → S04a/new result. |
| S05.04 | approximate-but-close point accepted | Frame + annotation | S05 copy allows an approximate pin close to home; no added operator verification or hidden accuracy rule. |
| S05.05 | correction suggestion | Pending | Correction suggestion with deliberate acceptance/editing: Pass 2/A. |
| S05.06 | ambiguous/invalid address | Pending | Ambiguous/invalid/likely mistyped address feedback: Pass 2/A; legitimate unvalidated address remains separately allowed. |
| S05.07 | legitimate unvalidated address saved | Frame + annotation | S05b shows legitimate saved address with continued setup; a reasonable point from an unvalidated address may be accepted in S05. |
| S05.08 | no usable coordinate | Frame | S05b explicit no usable coordinate: point-based incident notifications unavailable, rest of app remains accessible. |
| S05.09 | notifications enabled/disabled | Frame + annotation + pending | S05/S05b LHL preference defaults On, Turn off action present. Off presentation and combinations with OS states: Pass 2/A. |
| S05.10 | address change triggers a new map result | Annotation | S05/S05b Edit address → S04a → new location result; stale prior point must not silently persist as the new address result. |
| S05.11 | no operator/admin verification. | Frame + annotation | Static resident review only; no operator/admin verification, draggable pin, device GPS, parcel boundary, or satellite/map-provider choice. |

## Visible controls and transition routes

Route suffixes such as `after-valid-code` describe a condition, not an invented Figma frame. `S07` and `S31` are approved inventory destinations pending their named chunks. `notifications-off` is a required S05 variant pending Pass 2/A. `native-OS-prompt`, `external-install`, and `resend` are boundary/action annotations.

| Source frame | Visible action | Destination or result | Condition / status |
| --- | --- | --- | --- |
| [X01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-8) | Download LHL | external-install | Draft control; transition occurs only after any required operation succeeds |
| [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-17) | Get started | S02 | Draft control; transition occurs only after any required operation succeeds |
| [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-17) | Skip introduction | S02 | Draft control; transition occurs only after any required operation succeeds |
| [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-17) | Already have a profile? Sign in | S31 | Draft control; transition occurs only after any required operation succeeds |
| [S02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-41) | Choose notification permission | native-OS-prompt | Draft control; transition occurs only after any required operation succeeds |
| [S02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-41) | Not now | S03a | Draft control; transition occurs only after any required operation succeeds |
| [S03a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-62) | Send verification code | S03b | Draft control; transition occurs only after any required operation succeeds |
| [S03a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-62) | Back | S02 | Draft control; transition occurs only after any required operation succeeds |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-92) | Send another code | resend | Draft control; transition occurs only after any required operation succeeds |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-92) | Change phone number | S03a | Draft control; transition occurs only after any required operation succeeds |
| [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-92) | Verify number | S03c-after-valid-code | Unavailable until code/required consent condition is satisfied |
| [S03c](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-115) | Continue | S04a-after-consent-and-save | Unavailable until code/required consent condition is satisfied |
| [S03c](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-115) | Back | S03a | Draft control; transition occurs only after any required operation succeeds |
| [S04a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-138) | Save and continue | S04b | Draft control; transition occurs only after any required operation succeeds |
| [S04a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-138) | Back | S03c | Draft control; transition occurs only after any required operation succeeds |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-163) | Save and continue | S05 | Draft control; transition occurs only after any required operation succeeds |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-163) | Skip optional details | S05 | Draft control; transition occurs only after any required operation succeeds |
| [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-163) | Back | S04a | Draft control; transition occurs only after any required operation succeeds |
| [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-194) | Turn LHL notifications off | S05-notifications-off | Draft control; transition occurs only after any required operation succeeds |
| [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-194) | Use this location | S07 | Draft control; transition occurs only after any required operation succeeds |
| [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-194) | Edit address | S04a | Draft control; transition occurs only after any required operation succeeds |
| [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-220) | Turn LHL notifications off | S05b-notifications-off | Draft control; transition occurs only after any required operation succeeds |
| [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-220) | Continue setup | S07 | Draft control; transition occurs only after any required operation succeeds |
| [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-220) | Edit address | S04a | Draft control; transition occurs only after any required operation succeeds |

Editable field controls: S03a first name, last name, SMS-capable phone are required; preferred first name is optional. S03b code input allows verification only after entry and successful check. S03c's single checkbox records mandatory member-contact consent and gates successful profile save/Continue. S04a complete address and entry instructions are required. S04b pets/animals, physical access, utility shutoffs, and mobility/practical needs are optional. Fields change only the resident's own data; optional example placeholders are not saved by skipping.

## A1 structural entry walkthrough

Invitee receives [X01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-8) → external install/open boundary → resident [S01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-17) → [S02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-41) → [S03a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-62) → [S03b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-92) → [S03c](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-115) → [S04a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-138) → [S04b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-163) → [S05](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-194) or [S05b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=10-220) → **S07 pending A2**.

- S01 Get started and Skip introduction both retain the deterministic safety and S02 notification explanation. Returning Sign in goes to the pending S31 path. The duplicate first-use choices and final tutorial hierarchy remain a navigation experiment.
- S02 allow/deny/defer all preserve app access. Native permission is an annotated boundary; dedicated allowed/denied/disabled variants remain pending.
- S03a sends a code only after valid required fields; S03b proceeds only after verification succeeds. S03c proceeds only after mandatory consent is accepted and saved. Back from consent edits account fields and preserves verification for an unchanged number. Disabled representative controls therefore have explicit annotated next states; this is not an end-to-end interactive prototype.
- S04a required fields must save. S04b can save genuine optional inputs or skip them without storing examples. No private grant is created during home setup.
- S05 accepts a usable point; S05b explicitly permits continuing with a legitimate saved address and no point. Either proceeds to S07 only; no group membership or content is granted by A1.

## Five required journey indexes — current availability

A1 supplies the common setup segment above. None of the five full product journeys is complete at this checkpoint. The frame IDs below are inventory dependencies, not claims that later frames exist.

| Journey | Available segment / actor | Missing dependency and named chunk | Required transition check later |
| --- | --- | --- | --- |
| J1 — Sourced Event awareness | Common entry; resident | S07–S12 A2; S13–S16 B | Source attribution → exact update → optional acknowledgement; no awareness/safety inference |
| J2 — Community Request coordination | Common entry; resident | A2 membership/home; S17/S18/S20–S26/S28 and X02 C | Requester → claimant after claim; requester-only close; temporary grant separately consented |
| J3 — Offer coordination | Common entry; resident | A2 membership/home; S17/S19/S20–S26/S28 and X02 C | Offer claim action; only originator releases/reopens/closes |
| J4 — Changing/worsening sourced condition | Common entry; resident | A2; S13–S16 B; consequential states Pass 2/B | Current/stale/corrected/retracted and simulated/real stay distinct; exact-update acknowledgement reset |
| J5 — Recovery-context coordination | Common entry; resident | A2; reuse S17–S26 C; wording Pass 3 | Same Request/Offer mechanics, no S27 or administrator phase controls |

## Ten-distinction audit — A1 and carried work

| Required distinction | A1 treatment | Explicit pending coverage / reasoned N/A |
| --- | --- | --- |
| Loading vs empty | S03b code empty and S04b optional empty are drawn; processing/loading is not claimed | Pass 2/A: send/verify/save/resolving/loading; later slices apply their full inventory |
| Offline vs external source unavailable | S05b is a location-result failure, not an offline screen | Pass 2/A: separate offline/retry and external location lookup unavailable; sourced-feed unavailable states B |
| Current vs stale | No live Event or stale home signal shown | Event context B; stale saved location/address and permission feedback as applicable Pass 2/A |
| Corrected/retracted vs silently replaced | S05 edit routes to a new result, annotated | Event corrections/retractions B; address correction suggestion Pass 2/A; never silently substitute old point |
| Missing vs intentionally unshared | S04b empty fields versus S04 private-until-deliberately-shared explanation | Recipient missing/unshared states C/S24/S25; no recipient data display in A1 |
| Denied vs expired vs revoked permission | S02 denial preserves app access; S03c consent not accepted drawn | OS denied recovery Pass 2/A; sharing expiry/revocation C, membership revocation D; distinct actions retained |
| Failed action vs completed action | S03b sent and S03c verified; S05b explicitly unsuccessful location matching | Save/send/verify failures and success feedback Pass 2/A; transitions contingent on success |
| Closed coordination vs resolved incident | N/A to A1: no coordination object or sourced incident displayed | Mandatory in B/C and cross-cutting D audit |
| Simulated vs real sourced content | Fictional examples and schematic locator are explicitly marked outside participant screens; neither is a sourced incident | Simulation/live-incident labels and permission tests B and Pass 2; no live incident is implied here |
| Suspended vs ordinary offline | No active suspension/offline UI drafted in A1 | S31 D, Pass 2/A and D audit; suspended access must not be represented as ordinary retry/offline |

## Verification and review boundary

Independent persisted readback found ten 390 × 844 frames, Inter throughout, no text clipped by any containing frame, and no text beyond viewport bounds. All visible actions have named routes. Primary safety baseline matches REQ exactly; no 911 action exists. Required/optional field sets, single required contact consent, unchanged-number rule, independent adult model, private home data, default LHL On versus OS permission, static location review, and no-coordinate continuation were checked. Twenty-four repeated field/action elements reuse earlier editable frame patterns; no published library or design tokens were created.

Two export checks were corrected before handback: explicit text-height resizing fixed early title/card clipping; individual exports use isolated rendering because the default overlapping-context export clipped nested panels. Final contact sheets and isolated images were re-read and inspected. These are resolved rendering issues, not unresolved product decisions.

Cody's self-review found no unresolved Tier 1 product/safety contradiction in A1's scoped structural draft. That is not Claude's independent review or founder approval. The complete required-state ledger deliberately carries dedicated states to later chunks. Source interpretation and draft-copy choices remain reviewable. See A1 handback (repository: `docs/gate-3-lowfi-a1-handback-20260909.md`).


---

## Part 3 — Exact source excerpts

These are selected repository passages, not a replacement requirements document. Unrelated sections are intentionally omitted. Source paths and section headings are preserved below.

### Source: docs/04-decision-log.md

## 2026-09-01 — MVE-1 911 Action Excluded; Contextual Safety Instructions Required

- John approved the Gate 3 decision that MVE-1 includes no app-level `Call 911` or `Text 911` action. This resolves the explicit Gate 3 carryover from the 2026-08-21 safeguards decision.
- LHL does not automatically call, act as an intermediary, or transmit participant, location, request, or incident information to emergency services. The approved group-member Call and Text actions remain separate native handoffs to another member's phone number and must remain visibly distinct from 911 or emergency reporting.
- MVE-1 uses contextual safety instructions instead of a 911 control. Required locations are onboarding or the point before incident notifications are enabled, relevant incident-detail surfaces, request creation where LHL could be mistaken for emergency reporting, and an accessible Help/Safety location. The instruction is not limited to an LHL-classified active incident because personal danger can precede, outlast, or differ from LHL's incident state. It is not a repetitive app-wide banner.
- The primary copy baseline is `Follow instructions from public authorities. If you believe you are in danger, move to safety and call 911 when able. LHL does not contact emergency services.` The shorter incident baseline is `Follow official instructions. If you are in danger, move to safety and call 911 when able.` Request creation states `Requests in LHL do not contact emergency services.`
- Gate 3 wireframes and scenario testing finalize wording, visual hierarchy, accessibility, and exact placement. Those presentation decisions may refine the copy but do not reopen the approved no-action boundary. This decision does not constitute counsel approval or authorize participant use or public release.

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

## 2026-09-08 — MVE-1 SMS Verification, Member-Contact Consent, and Internal Member ID

- Every MVE-1 pilot participant must provide a phone number capable of receiving SMS and successfully complete a one-time SMS verification through Twilio Verify during onboarding. Twilio Verify is the approved MVE-1 verification-provider direction; Gate 4 finalizes configuration and implementation rather than reopening provider selection.
- Successful verification establishes control and receipt for that attempt; it does not guarantee future SMS, call, carrier, network, or device delivery. LHL does not periodically or routinely re-verify an unchanged verified number. If a resident replaces the stored phone number, the replacement must be verified once before it becomes active.
- The existing Call/Text consent remains mandatory for pilot participation. Its disclosure must state that approved group members may use LHL to initiate native calls or texts and that the native phone or messaging application may reveal the participant's number. Do not add a second optional checkbox asking the participant to self-attest that the number can receive texts.
- MVE-1 does not require a paid phone-number line-type lookup. Successful SMS verification is the bounded pilot check; it does not identify every carrier or device limitation.
- John approved a separate system-generated immutable internal `member_id` for every member record. It anchors internal product records and future CRM relationships. The verified phone number remains a changeable contact/authentication attribute; changing it never changes the `member_id` or rewrites prior record ownership.
- Gate 4 defines `member_id` format, generation, storage, authentication implementation, Twilio configuration, code expiry, resend and rate limits, phone-change transaction, recovery path, and later CRM integration. Those implementation choices may not replace the approved durable-identifier rule with the phone number.
- MVE-1 does not enforce one phone number per active profile. A Post-MVE-1 discovery item will decide whether one normalized number may be assigned to only one active profile and must define reassignment, account recovery, recycled-number disputes, and legitimate shared-number exceptions before enforcement.
- Exact final disclosure copy remains low-fidelity design work. This decision updates S03 and the X02/S28 boundary but does not approve Slice C coverage, the active roadmap task, or Gate 3 closure.

## 2026-09-09 — Gate 3 Low-Fidelity Producer Allocation and Execution Preparation

- Evidence: John accepted the amended plan and Claude's final notes in [Claude response and review protocol](https://docs.google.com/document/d/18yMH_mYgsnmY_fl6fcEFc2GPo_ZTCXdGnCALlT7uZp0/edit), then explicitly requested all preparation in this pass before beginning layouts.
- Cody is the selected primary producer; Claude web supplies bounded independent review after Cody's verification. CC remains selectively available and must not write concurrently with Cody. Both have repository authority and recorded Figma capability; the historical CC setup row is not an exclusivity claim.
- John reports OpenAI Pro 5x and Anthropic Pro. Claude web and Claude Code share the Anthropic allowance; both providers impose usage limits. Use measured throughput and actual account indicators, preserving review/correction/handback capacity rather than promising a whole pass fits a window.
- The existing [Gate 3 — Low-Fidelity Layout Handoff](https://docs.google.com/document/d/1owFvXyw2HOs4W0kJoTErh_JNx71kYb-ePqEyWE5rx-U/edit) is the single operative working brief. Earlier review/game-plan Docs are superseded history. This operating decision supersedes the September 8 CC-executor assignment, not the approved 29-parent inventory or product rules.
- Sequence: resumable Pass 1 structural skeleton; scoped navigation resolution for S15 and S01/S11, conditionally S25; Pass 2 consequential states in C → B → A → D order; Pass 3 remaining presentation experiments. Preserve distinctions “where the participant meaning or next action changes.” Record every required state as frame, annotation, reasoned N/A, or explicit named-chunk deferral; no contradictory actor composites or silent omissions.
- Review: screenshots, repository traceability, deferrals, and handback; one review plus one re-review per chunk. Tier 1 product/safety findings block; Tier 2 structural findings go to John; Tier 3 cosmetics are logged. Unresolved blockers remain unresolved after the review cap. John alone approves outcomes.
- Authorized now: brief consolidation, canonical operating-record synchronization, and isolated Figma preflight. A known scripting/context issue permits one inspected corrective retry; owned cleanup remains permitted after errors. Product pass/chunk authorization and resulting-layout approval remain separate. No roadmap task or gate is marked Complete.
- Preflight verified creation, existing-content revision, clone reuse, screenshot inspection, and independent persistence. The connector cannot delete the diagnostic page; all 22 diagnostic descendants were removed and only labeled empty page 4:2 remains. This is a nonblocking housekeeping limitation. Target: [Gate 3: Low Fidelity Layouts](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK), page 0:1, `Gate 3 — Low-Fi Pass 1`.
- Execution preparation and recommended first chunk: [gate-3-lowfi-execution-prep.md](gate-3-lowfi-execution-prep.md). Pass 1 / A1 (X01, S01–S05) is recommended, not yet begun or separately authorized. Layouts, final copy, cross-platform design rules, data/permissions, architecture, implementation, task completion, and Gate 3 closure remain open.

## 2026-09-09 — Pass 1 / A1 Drawing Authorized

- John explicitly approved starting Pass 1 / A1 (X01 and S01–S05), confirmed GPT-6 Astra with High reasoning, and reiterated approval to begin after plugging in his laptop.
- Scope is the structural draft for invitation, welcome/limits, notification primer, independent account/contact and verification/consent, required and optional private home information, and saved-home location review/recovery. Additional frames within those parent families are layout experiments; they do not add product scope.
- Cody produced nine app viewports and one external invitation sample, two contact sheets, an entry walkthrough/index board, and the complete 53-condition A1 state ledger. Detailed states outside this structural draft are assigned to named later chunks. Evidence: [A1 handback](gate-3-lowfi-a1-handback-20260909.md) and [traceability index](gate-3-lowfi-traceability.md).
- Authorization to draw is not approval of resulting layouts, final copy, other chunks, roadmap-task completion, or Gate 3 closure. Next is independent Claude review and John's disposition, with the agreed one correction/re-review allowance.
- The founder's separate pending-additions convention is implemented in AGENTS.md: dated Markdown capture files in the non-canonical Drive folder, highest same-day version controlling queue status, and retained provenance. The operative handoff and preparation record now point there rather than maintaining an in-document capture queue.

## Product Decisions

The detailed functional product rules are maintained in `docs/functionality-decision-log.md`. The following entries are currently controlling:

### Source: docs/03-mvp-requirements.md

## MVE-1 User Profile and Saved-Home Scope

MVE-1 uses one independent User Profile per adult. When its member record is created, LHL assigns one system-generated immutable internal `member_id` that anchors product records and future CRM relationships. The verified phone number remains a changeable contact/authentication attribute; replacing it never changes the `member_id`. An SMS-capable phone number and successful one-time SMS verification through Twilio Verify during onboarding are required. Verification establishes control and SMS receipt for that attempt but does not guarantee future reachability or delivery. LHL does not periodically or routinely re-verify an unchanged verified number. If a resident replaces the stored number, the replacement must be verified once before it becomes active. `member_id` format, generation, storage, code expiry, resend and rate-limit behavior, recovery, Twilio configuration, and later CRM integration remain Gate 4 implementation decisions. MVE-1 does not enforce one-number-per-active-profile uniqueness; that future control requires explicit reassignment, recovery, recycled-number, and legitimate shared-number treatment. Multiple adults may save the same address, but their profiles, home information, requests, notification eligibility, and self-reported signals remain independent. MVE-1 does not link, merge, or deduplicate profiles into a household account. The profile separates resident-provided source information from system-derived display values. Residents do not author custom display names, household labels, biographies, slogans, or other open-ended identity content.

### Resident-provided source information

- First name and last name are mandatory identity fields. An optional preferred first name may be supplied.
- An SMS-capable phone number, successful one-time SMS verification through Twilio Verify, and explicit consent to approved-group Call and Text actions are mandatory for every pilot participant. The consent must explain that approved members may initiate native calls or texts and that the native application may expose the number to the other member or their device. Do not add a second optional self-attestation checkbox about receiving texts, a paid MVE-1 line-type lookup requirement, or periodic re-verification of an unchanged number. Verify a replacement number once before activation.
- A complete saved home address is mandatory and remains private from ordinary approved-group profile visibility. Address validation and provider selection are Gate 4 implementation decisions.
- Entry instructions are mandatory private home information. Door or gate codes, when applicable, are part of entry instructions rather than a separate profile category.
- Pets or animals, driveway or physical-access notes, utility-shutoff information, and mobility or other practical assistance needs are optional private fields in MVE-1. A standing field for people in the household relevant to an assistance request is excluded.
- Optional assistance fields may use replaceable starter examples, such as `breaker box located ___; gas shutoff ___`, to explain appropriate content. Starter text is never saved as resident data unless the resident actively replaces or adopts it.
- Homeowner-versus-tenant status, a general biography, a preparedness score, a standing equipment inventory, and a general medical record are not household-profile fields in MVE-1.

### System-derived values

- The internal `member_id` is generated once when the member record is created, is not user-editable, and remains stable across phone-number, profile, and saved-address changes. It is the durable association key for internal product records and future CRM relationships; it is not the member's public display name.
- The community-visible display name is generated as preferred first name, or first name when preferred name is blank, plus the last-name initial. The resident cannot enter a separate custom display name.
- A household label is generated from the saved address as street number plus street name, omitting the road/street type; for example, `25 Palamino`. The resident cannot enter a separate custom household label.
- Call and Text actions are generated from the required phone number, and the administrator badge is generated from the account's role.
- Exact roster layout, ordering, grouping, and placement of the derived household label remain Gate 3 presentation decisions. These decisions do not change the approved source fields or permit custom identity content.

### Deliberate helper sharing

Private household information remains masked until the resident deliberately shares it with the other participant in a claimed Request or Offer. The share confirmation begins with all applicable private fields selected; the resident may deselect fields that are unnecessary for the task, except the complete home address. The address is always included in a deliberate helper share.

The grant is limited to the private-data owner and the other participant in the claimed Request or Offer, uses a one-day default, expires automatically, and re-masks the shared information. The resident may revoke an active grant before its scheduled expiry; automatic expiry is the backstop rather than the resident's only privacy control. Every renewal requires a new deliberate confirmation and may never silently extend access. The product must briefly explain these protections at the point where residents provide and share private information. Expiry or early revocation removes the recipient's access; it does not delete the information stored in the resident's profile. Gate 3 defines the interaction and confirmation, and Gate 4 defines secure enforcement.

## Trust and Tone Principles

These principles govern product language, information hierarchy, and interaction design. They do not prescribe final consumer copy, which Gate 3 must design and test.

- **Coordinate; do not command.** LHL helps trusted people coordinate but never directs emergency behavior, tells a helper to enter an affected area, or implies authority over official instructions.
- **Source; do not interpret.** Show the source, timestamp, coverage, and limitations of incident information without telling residents what to conclude or presenting LHL's interpretation as official guidance.
- **Describe relevance carefully.** Associate sourced information with a saved home address without claiming certainty, verification, or geographic precision the source cannot support.
- **Reserve urgency.** Interrupt only for genuinely time-sensitive incident or direct-coordination events approved under the MVE-1 notification boundary. Quieter activity remains available without demanding attention.
- **Use calm, plain language.** Prefer short factual statements, explicit timestamps, and clear actions over dramatic, speculative, emotionally loaded, or engagement-oriented language.
- **Distinguish every information state.** Official or clearly sourced information, resident-reported information, missing information, stale information, intentionally unshared information, and simulated content must never appear equivalent.
- **Make privacy deliberate and legible.** Explain why information is requested, the future user benefit it enables, what is shared, with whom, for how long, and when access ends. Do not imply that masked information was deleted when access merely expired or was revoked.
- **Put safety and official instructions first.** Never imply that app participation, helping a neighbor, completing a request, or supporting a pilot takes priority over personal safety or official direction.
- **Avoid social pressure and engagement mechanics.** Do not use streaks, popularity signals, reactions, public rankings, shame, or language that pressures residents to report, respond, help, or remain active in the app.

The founder-provided communication-saturation whitepaper is one perspective supporting discussion of reserved urgency, calm hierarchy, and reduced cognitive load. It is not proof of a universal or precisely measurable `Saturation Parameter`, and its claims must not be presented as settled scientific fact without stronger evidence. Its proposals for continuous coordinate tracking, mesh networking, automated cross-municipal synchronization, and sensor integration are not approved MVE-1 scope.


### Source: docs/gate-3-screen-state-inventory.md

## How to read this inventory

- A **parent screen** is a stable user destination or interaction container that may require several low-fidelity frames.
- A **state variant** is a materially different condition of that parent—such as loading, denied, stale, claimed, expired, or corrected—not automatically a separate navigation destination.
- **External surfaces** are needed for the pilot journey but are not necessarily designed as in-app LHL screens.
- John first reviews whether every necessary screen family and consequential state has a home. Layout, visual hierarchy, final copy, and reusable component rules follow after coverage approval.

## Coverage summary

- 29 active in-app parent screen families; retired IDs S06 and S27 remain documented for traceability.
- 2 external pilot surfaces.
- 11 approved experience-map stages covered.
- Five role/responsibility lanes represented: resident/household, LHL+sourced information, trusted member/helper, administrator, and cross-cutting safety/privacy/permission/failure.
- Four internal lifecycle test contexts covered without requiring consumer-facing Ready/Alert/Active Incident/Recovery labels. Recovery reuses the existing coordination screens rather than creating a separate parent.

## External pilot surfaces

| ID | Surface | Purpose | Required conditions |
| --- | --- | --- | --- |
| X01 | Community-admin beta invitation | A community administrator sends the platform download/install invitation plus a separate `COMMUNITY JOIN CODE` that the invitee saves for later entry. | Invitation valid/invalid; platform handoff; download/install purpose explicit; the separate code and installation do not grant community membership. |
| X02 | Native Call/Text handoff | A member-profile action opens the device phone or messaging application outside LHL; this is distinct from the in-app claimed-item thread in S22. | Check Call and Text separately for a compatible native handler on the initiating device; explain directly when an action cannot open; member-provided number; after handoff, user cancellation and carrier/network/device/recipient-line limitations remain outside LHL; no auto-send, capture, synchronization, or delivery guarantee; no hidden LHL DM or email fallback. |

## Parent-screen inventory

| ID | Stage | Parent screen | Primary actor | Core purpose | Required state variants |
| --- | --- | --- | --- | --- | --- |
| S01 | 01 | App launch, welcome, role, and limits | Resident | Open the app, explain what LHL does and does not do, and provide a calm path into account setup. | First visit; returning visit; skippable guidance; random rotation of 5–7 short launch messages including occasional safety or community-value messages; mandatory safety disclosures remain on their required contextual surfaces. |
| S02 | 01 | Notification primer | Resident | Explain notification purpose and limits before requesting OS permission. | Not requested; explanation before the OS prompt; allowed; denied with continued app access; later disabled at OS level; clear path to OS and LHL notification settings; no delivery guarantee. |
| S03 | 01–02 | Resident account and contact information | Resident | Create one independent adult User Profile, assign its immutable internal `member_id`, and capture required first name, last name, SMS-capable phone number, successful one-time SMS verification through Twilio Verify, and explicit approved-member Call/Text consent plus optional preferred first name. | Empty; incomplete; invalid phone; verification code sent; incorrect/expired code; resend/recovery; verified; member record created with immutable `member_id`; replacement number pending verification; replacement number verified and active without changing `member_id`; required consent not accepted; saved; failed save; account suspended; no periodic re-verification of an unchanged number; multiple independent profiles may use the same address without household linking; no redundant optional text-capability checkbox or paid MVE-1 line-type lookup. |
| S04 | 02 | Home and assistance information | Resident | Capture saved home address, entry instructions, pets/animals, driveway or physical-access notes, utility-shutoff information, and mobility or other practical needs, with a brief explanation of future request value. | Empty; partial; complete; edit; save failure; private by default; address and entry instructions required; other approved fields optional; replaceable starter examples are never stored as resident data. |
| S05 | 02 | Incident-notification setup and saved-home location | Resident | After S04 address entry, show the interpreted address and static neighborhood pin, explain its incident-matching use, and present LHL notification settings with the default shown as on. | Resolving; usable point shown; `Use this location` or `Edit address`; approximate-but-close point accepted; correction suggestion; ambiguous/invalid address; legitimate unvalidated address saved; no usable coordinate; notifications enabled/disabled; address change triggers a new map result; no operator/admin verification. |
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

### Source: docs/functionality-decision-log.md — latest SMS/consent implementation boundary

### 2026-09-08 - MVE-1 SMS Verification, Member-Contact Consent, and Internal Member ID

- **Onboarding rule**: Require every pilot participant to provide an SMS-capable phone number and successfully complete a one-time SMS verification through Twilio Verify during onboarding (`devlog`).
- **Verification meaning**: Successful verification proves control and SMS receipt for that attempt only. It does not guarantee future reachability, recipient-line capability, carrier/network service, native-device capability, or delivery (`devlog`).
- **Re-verification rule**: Do not periodically or routinely re-verify an unchanged verified number. When a resident replaces the stored number, verify the replacement once before activating it (`devlog`).
- **Consent rule**: Retain one explicit mandatory approved-member Call/Text consent. State that approved group members may initiate native calls or texts through LHL and that the native app may reveal the participant's number. Do not add a redundant optional checkbox asking whether the number can receive texts (`devlog`).
- **MVE-1 boundary**: Do not require a paid line-type lookup. A successful SMS verification is sufficient for the bounded pilot check (`devlog`).
- **Member identity rule**: Assign one system-generated immutable internal `member_id` when each member record is created. Use it to anchor internal product records and future CRM relationships. The verified phone number is a changeable contact/authentication attribute; replacing it never changes the `member_id`, creates a new identity, or rewrites prior record ownership (`devlog`).
- **Gate 4 boundary**: Twilio Verify is the approved MVE-1 verification-provider direction. Gate 4 finalizes `member_id` format/generation/storage, provider configuration, authentication implementation, code expiry, resend, rate limits, phone-change, recovery, and later CRM integration. Those implementation decisions may not make the phone number the permanent record key.
- **Post-MVE-1 boundary**: MVE-1 does not enforce one number per active profile. Future discovery must decide whether one normalized number may belong to only one active profile and define reassignment, recovery, recycled-number disputes, and legitimate shared-number exceptions before enforcement.
- **Design boundary**: Exact final disclosure copy remains low-fidelity design work. Offer lifecycle authority and other remaining Slice C decisions stay open.
- **Source**: John's approval of Cody's SMS-verification and member-contact-consent recommendations, followed by his no-periodic-reverification and Twilio direction, future phone-uniqueness question, and explicit `aligned` approval of the immutable internal member-ID recommendation in chat on 2026-09-08.
