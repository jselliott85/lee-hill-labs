# Gate 3 A2 — Claude Independent Review Companion

Prepared 2026-09-10 for the bounded independent review of **ECA Product Design / Finish approved user flows and low-fidelity screens**. This packet covers A2 only: S07–S12 joining, membership, administrator review, first-arrival guidance, and the post-approval Home shell. It is not Slice B, global Pass 2, final copy or visual-design approval, implementation, task completion, or Gate 3 closure.

## Required reading order

1. Read this companion and the linked canonical repository sources.
2. Review `A2-unannotated-layouts-20260910.pdf` in page order and record independent findings **without opening the comments PDF**.
3. Open `A2-comments-20260910.pdf`, compare John's observations and later dispositions with the independent findings, and keep comment-informed additions or revisions distinguishable.
4. Return the combined review to John. Do not edit Figma or repository files, treat a comment as approval by itself, authorize a redraw, or mark A2 approved.

This is A2's independent review before any correction pass. A review cap is not acceptance: unresolved blocking findings remain unresolved. Explicitly state if there are zero Tier 1 findings.

## Live board and canonical sources

- [A2 read-first guide](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=59-2)
- [A2 walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=59-9)
- [A2 sheet 01](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=59-16)
- [A2 sheet 02](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=59-20)
- [Founder-approved S12 structural exploration](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=73-2)
- [A2 handback](../../gate-3-lowfi-a2-20260910.md)
- [S12 exploration handback](../../gate-3-lowfi-s12-home-shell-exploration-20260910.md)
- [Screen/state inventory](../../gate-3-screen-state-inventory.md)
- [Current traceability and route ledger](../../gate-3-lowfi-traceability.md)
- [MVP requirements](../../03-mvp-requirements.md), especially `Community Joining and Post-Approval Home`
- [Decision log](../../04-decision-log.md), especially `2026-09-10 — A2 Founder Review Dispositions and S12 Home-Shell Exploration Authorized` and `2026-09-10 — S12 Home-Shell Exploration Approved`
- [Execution and review protocol](../../gate-3-lowfi-execution-prep.md)

The canonical repository controls if this dated snapshot conflicts with live Figma, comments, or older exports.

## Snapshot relationship

The first four PDF pages preserve the original eight self-verified A2 views exactly as John reviewed them. They have not been corrected. Page five is a separate S12 exploration created from John's paper sketch and subsequent approved decisions. John approved that exploration as S12's **structural baseline** only.

Do not mistake page five for an edited replacement of S12a/S12b. Do not treat the material outside its 390 × 844 phone frame as consumer copy; it is design/review annotation. The location-needed wording and all in-phone wording remain provisional low-fidelity copy.

## Current approved comparison baseline

- **Access gate:** A participant cannot reach first-arrival guidance or the normal app shell until a community administrator approves membership. MVE-1 has no community-less sourced-Events mode.
- **Join-code outcomes:** A bad/invalid code is distinct from a service or connection failure that prevents checking it. The latter preserves the entered code and offers retry. A valid code reveals only the configured community name before the resident requests access.
- **Membership outcomes:** Pending shows no group content. Denial names the community, routes resubmission through S07, and offers a pre-addressed `Contact Community Administrator` email action without printing the recipient address. Approval and denial may notify the requester, subject to OS permission.
- **Administrator boundary:** John is pre-provisioned as Boulder Heights administrator. A new request may notify the authorized administrator. The pending queue scrolls vertically and orders oldest first. Pending detail may show the resident's full self-provided address only to the authorized administrator; it is not verified, ordinary-member-visible, or retained as administrator-facing disposition history. Administrator authority is limited to approve/deny membership.
- **Guidance:** S11 occurs after approval. `Welcome to Your Community` is approved placeholder copy. The tour is lightweight, skippable, and replayable from Help. Detailed tutorial progression is still required before Gate 3 low-fidelity closes but is deferred until the core screens exist.
- **S12 shell:** The approved starting structure is LHL header; short saved-home row such as `25 Example Lane`; up to three current source-defined Events with one latest timestamped state each and a path to the full feed; Community Summary; inline Home Status; and a fixed, equally spaced footer with labeled icons in this order: Home, Community, Messages, Profile, Help.
- **Event hierarchy:** Evacuation protective-action Events remain highest. Ordering below that is a separate open workstream. An Event appears once in the Home preview; its detail owns the attributed update history. This does not create a separate Alert entity.
- **Community Summary:** Show community name, approved-member count, Open Request count, Open Offer count, and per-resident new/unviewed indicators. For the starting definition, `new` means created since that resident last viewed Community and clears as items are viewed. This is not a social feed.
- **Home Status:** Remains directly editable on Home with latest voluntary status and timestamp, inline Home/Away controls, and no freeform field. The two-state taxonomy is provisional. Adults at the same address report independently.
- **Location needed:** Replace only the Event preview with both losses—no Event/alert device notifications and no personalized Events feed—and an `Edit address` action. Do not present this as no current Events. Community Summary, Home Status, and global navigation remain available after membership approval.
- **Global destinations:** Messages contains claimed Request/Offer threads only. Profile includes onboarding/profile information, membership, and Notification Settings that reports actual OS status and opens native OS settings. Help retains safety/911, privacy, tutorial replay, concern reporting, and notification guidance. The footer is persistent on post-approval root destinations, with documented exceptions for onboarding/pre-approval, native OS surfaces, and blocking confirmations.

## Routes to verify

Primary resident path: S02 native outcome → S07 code entry → valid-code confirmation → request submitted → S08 pending → administrator review → approval → S11 first-arrival guidance (or skip) → S12 Home.

Required alternatives:

- Invalid code → remain in S07 with a correction path.
- Unable to check code → preserve input and retry.
- Pending → continue showing last confirmed state without community content.
- Denied → community-named denial → resubmit through S07 or contact the community administrator by pre-addressed email.
- Approved → requester notification when permitted → S11/S12.
- Administrator → S09 oldest-first pending queue → S10 pending detail → approve or deny → return to the current queue; already-reviewed/changed outcomes remain honest.
- Approved resident without a usable saved-home coordinate → S12 location-needed variant, retaining community and Home Status functions but withholding both Event capabilities.

## Named deferrals and exclusions

- Pass 2/A remains responsible for the detailed loading, offline, empty, retry, failed-action, already-reviewed/changed, revoked/suspended, corrected, and combined consequential states unless the approved A2 dispositions specifically require a structural correction now.
- Slice B owns S13–S16 sourced Events, detailed Event presentation, acknowledgement coverage, and the broader saved-home-signal set.
- Gate 4 owns providers, data model/JSON, authentication/session/recovery implementation, notification delivery, and security enforcement.
- Future scope includes administrator creation/selection, multiple administrators, role transfer, unavailable-administrator recovery, leaving a community, and multi-community/multi-home behavior.
- Excluded from this review: final copy, final iconography or polish, reusable production components, production code, provider selection, general direct messaging, group chat, social feed, and any administrator incident-management role.

## Finding format

Number every finding and include: Tier, frame/deep link, canonical reference, evidence, and proposed disposition.

- **Tier 1:** product/safety contradiction, prohibited scope, unapproved capability, collapsed meaning/action distinction, privacy/access failure, or falsely approved safety copy. Blocking.
- **Tier 2:** structural gap, actor/permission ambiguity, dead end, traceability mismatch, or broken walkthrough. Founder decision required only when the canonical record does not already settle it.
- **Tier 3:** cosmetic naming, spacing, low-fi wording, or polish. Log only during this pass.

Keep four result sections separate:

1. `Independent findings before comments`
2. `Comment comparison and additions`
3. `Already-approved corrections` — canonical mismatches that can be implemented without reopening the product decision
4. `New questions for John` — only genuinely unresolved decisions

End with: Tier 1 count; Tier 2 count and questions; Tier 3 log; whether the combined A2 set is ready for one bounded correction pass; and any unresolved conflict among the repository baseline, original A2 snapshot, approved S12 exploration, or comments.

## Packet integrity

- Unannotated layout reference: `A2-unannotated-layouts-20260910.pdf`
- Open only after initial findings: `A2-comments-20260910.pdf`
- Source PNG snapshots: `a2-review-guide.png`, `a2-walkthrough.png`, `a2-sheet-01.png`, `a2-sheet-02.png`, and `s12-home-shell-exploration.png`
- Comment reference: 12 exact messages across 10 threads, obtained read-only from the Figma Comments API on 2026-09-10; thread IDs, node context, timestamps, resolution state, and founder-approved dispositions are preserved.
- Snapshot date: 2026-09-10, after John's original A2 comment pass and S12 structural approval, before any A2 correction.
- No Figma node/comment was changed while preparing this packet.
