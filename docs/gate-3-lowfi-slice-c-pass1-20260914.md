# Gate 3 Slice C Pass 1 — Founder Review Handback

**Status:** Cody's structural first pass, drawn and self-verified on 2026-09-14. It is ready for John's first review, **not founder-approved low-fidelity**. No final copy, implementation, provider, data schema, Gate 3 closure, or roadmap-task completion is claimed.

## Start here

1. [Read-first board](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-2)
2. [Request/Offer route and state walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-5)
3. [Board 01 — activity, creation, Open Request](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-8)
4. [Board 02 — Open Offer, claim, Messages entry](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-11)
5. [Board 03 — thread, actor-specific release/reopen, sharing setup](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-14)
6. [Board 04 — owner/recipient access and creator closure](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-17)
7. [Board 05 — member directory/profile, X02 native handoff, Recovery reuse, deferrals](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=166-20)

The seven boards begin at x=14,900, right of Slice B R2. All earlier A1/A2/B frames and their comments are preserved. There are **19 app views** across 11 active parent families, plus three non-app panels for X02, Recovery reuse, and Pass 2/C states. Board and frame wording is provisional except the inherited approved S18 safety baseline.

## Drawn main-path views

| Parent | Actor or state contrast | Figma node |
| --- | --- | --- |
| S17 | Approved-member Request/Offer activity | [167:2](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=167-2) |
| S18 | Request creation, including approved safety wording | [167:32](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=167-32) |
| S19 | Claimable Offer creation, optional category | [167:62](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=167-62) |
| S20 | Open Request with `I'll help` | [167:92](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=167-92) |
| S20 | Open Offer with `I'll take you up on that` | [172:2](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=172-2) |
| S21 | Deliberate Request-claim confirmation | [172:32](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=172-32) |
| S21 | Deliberate Offer-claim confirmation | [172:41](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=172-41) |
| S22 | Always-present, claimed-item-only Messages inbox | [172:50](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=172-50) |
| S22 | Creator/claimant-only Request thread | [173:2](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=173-2) |
| S23 | Request claimant releases to Open | [173:32](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=173-32) |
| S23 | Original requester reopens to Open | [173:41](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=173-41) |
| S23 | Offer originator alone returns claimed Offer to Open | [173:50](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=173-50) |
| S24 | Task-specific owner sharing setup | [173:59](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=173-59) |
| S25 | Private-data owner active-grant management | [174:2](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=174-2) |
| S25 | Recipient active-access view | [174:32](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=174-32) |
| S26 | Original requester manual closure / seven-day reminder context | [174:62](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=174-62) |
| S26 | Offer originator manual closure | [174:71](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=174-71) |
| S28 | Approved-member directory | [175:2](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=175-2) |
| S28 | Member profile with separate native Call/Text actions | [175:32](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=175-32) |

X02's [native handoff boundary panel](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=175-82) is not an LHL app screen. The adjacent [Recovery note](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=175-84) confirms S17–S26 reuse; S27 remains retired.

## Review and deferral boundaries

Please focus comments on whether the structural path, actor-specific controls, privacy visibility, and next actions make sense. In particular, check that the distinction between `I'll help` and `I'll take you up on that` is legible; no pre-claim private thread appears; Offer claimant authority is limited; every deliberate task-specific private-information share includes the complete address while the group listing does not expose it; owner and recipient access are not conflated; and member Call/Text visibly leaves LHL. The sample names and needs are illustrative.

The [Pass 2/C panel](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=175-86) names the consequential empty/loading/offline/stale, validation/publish/claim/transition/close failures, honest message-delivery, grant/renew/revoke/expiry, access-loss/read-only and native-handler outcomes still to draw or explicitly disposition. The first pass does not imply those states are approved or safely omitted. Whether S25's recipient view is its own destination remains a navigation-resolution hypothesis, not a product decision.

John reviews first in native Figma comments and tells Cody when his pass is finished. Cody then prepares the canonical-first unannotated Claude packet and a separate exact-comment reference, preserving Claude's independent first look. A comment or suggestion is not an approved change. Slice C remains unapproved until John explicitly approves the corrected structural low-fidelity result.

## Verification

Persisted readback confirmed all seven board nodes, 19 named app views, three distinct non-app panels, and unchanged presence of Slice B R1 `112:2` and R2 `143:2`. The approved S18 safety string was read back exactly. Geometry/text checks found no zero-size text, literal escaped line breaks, card clipping or phone-content overflow after a targeted board-01 correction. All seven boards were visually inspected. No production code, Drive file, commit, or push was created by this drawing block.
