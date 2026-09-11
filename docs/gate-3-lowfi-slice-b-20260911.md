# Gate 3 Low-Fidelity — Slice B Handback

Prepared 2026-09-11 by Cody under `ECA Product Design / Finish approved user flows and low-fidelity screens`.

## Authorization and placement

After approving corrected A2 low-fidelity, John said: `Lets begin slice B - continue moving RIGHT for the new slice b locations (to the right of A2R2)`.

Slice B is a Pass 1 structural batch for S13–S16. Every new top-level frame begins at x=10600, 356 px to the right of A2 Round 2's right edge at x=10244. A1, A2, their comment history, and all prior review/provenance nodes remain unchanged.

## Review entry points

- [Read first](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-2)
- [Route and state walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-11)
- [Sheet 01 — Events feed and location recovery](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-24)
- [Sheet 02 — Event detail and opposite actions](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-151)
- [Sheet 03 — exact-update responses and adult signals](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-278)

Review the app frames left to right on each sheet. Comment on the new Slice B frames only and tell Cody when the first review is finished. Do not treat surrounding annotations as consumer copy.

## Structural coverage

| Frame | Node | Coverage |
| --- | --- | --- |
| S13a | [`112:30`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-30) | Current sourced Events feed: one row per source lifecycle identity; Event Type displays; explicit Evacuation Order `LEAVE NOW` and Shelter-in-Place `STAY INDOORS`; simulated/source-pending label; no internal push-eligibility label. |
| S13b | [`112:86`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-86) | Required location-needed alternative: both Event/alert-notification and personalized-feed losses are explicit; not presented as an empty Events result; Edit address recovery and global footer remain. |
| S14a | [`112:157`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-157) | Evacuation Order detail: `LEAVE NOW`, current source state before chronological history, exact-update acknowledgement, compact response route, source-link placeholder, and related Wildfire kept separate. |
| S14b | [`112:213`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-213) | Shelter-in-Place detail: `STAY INDOORS / DO NOT LEAVE`, source-governed state/history, exact-update acknowledgement, source-link placeholder, and related hazard kept separate. |
| S15a | [`112:284`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-284) | Provisional separate response view for one exact update: selected-community context, search/filter treatment, `Acknowledged` and `No acknowledgement recorded`, no cross-community exposure, denominator, or safety/compliance meaning. |
| S16a | [`112:340`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-340) | Adult-profile Home Status and Event check-in detail: attribution to one adult, self-reported/not verified safe, same-address divergence permitted, and explicit separation from exact-update acknowledgement. |

All Event examples are marked simulated and source-pending. No layout asserts that automated Protective Action coverage is available.

## Validation

- Six app frames are exactly 390 × 844.
- Persisted containment audit found zero descendants outside an app viewport.
- Every new text layer uses Inter; the existing low-fidelity file has no local variables, component instances, or applied text/effect styles to reuse.
- All five new top-level frames begin at x=10600; A2 Round 2 remains at x=8500 with right edge x=10244.
- Required-string audit passed for explicit leave/stay language, simulated/source-pending treatment, location-needed losses, exact-update acknowledgement, no default denominator, adult-profile attribution, and same-address divergence.
- Stale-content audit found none of the cloned A2 community-summary, last-visit, or correction-boundary text.
- No placeholder shimmer remains.
- Visual inspection covered all three sheets, the read-first guide, and the walkthrough. One boundary-note text-order issue on Sheet 01 was corrected and rechecked before handback.

## Review and scope boundary

Slice B is constructed and self-verified, ready for John's first review, and is not founder-approved low-fidelity yet. S15's separate-screen placement is intentionally a wireframe hypothesis.

Final copy/layout; detailed empty/loading/offline/stale/corrected/retracted/expired/closed/source-unavailable states; exact Event geographic-match presentation; preview-slot competition/grouping; NWS VTEC verification; Protective Action identity/lifecycle; source/provider selection; the S12 source-pending annotation choice; the roadmap task; and Gate 3 remain open. No production code, dependency, commit, or push is authorized by this handback.
