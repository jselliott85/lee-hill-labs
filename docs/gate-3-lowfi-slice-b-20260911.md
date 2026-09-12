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
- [Sheet 03 — exact-update responses](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-278)

Review the app frames left to right on each sheet. Comment on the new Slice B frames only and tell Cody when the first review is finished. Do not treat surrounding annotations as consumer copy.

## Structural coverage

| Frame | Node | Coverage |
| --- | --- | --- |
| S13a | [`112:30`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-30) | Current sourced Events feed: one row per source lifecycle identity; Event Type displays; Evacuation Order `LEAVE NOW`, Wildfire, Red Flag Warning, and Special Weather Statement samples; simulated/source-pending label; no internal push-eligibility label. |
| S13b | [`112:86`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-86) | Required location-needed alternative: both Event/alert-notification and personalized-feed losses are explicit; not presented as an empty Events result; Edit address recovery and global footer remain. |
| S14a | [`112:157`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-157) | Shared S14 pattern with a verified related Event present: Evacuation Order `LEAVE NOW`, current source state before chronological history, consistently placed exact-update acknowledgement/response controls, source-link placeholder, and an explicit `Related Events — Wildfire` route. |
| S14b | [`112:213`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-213) | The same S14 pattern with no related Event established: Shelter-in-Place `STAY INDOORS / DO NOT LEAVE`, source-governed current/history, the same acknowledgement/response placement, source-link placeholder, and no related-Event control. |
| S15a | [`112:284`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-284) | Provisional separate response view for one exact update: selected-community context, search/filter treatment, `Acknowledged` and `No acknowledgement recorded`, no cross-community exposure, denominator, or safety/compliance meaning. |

S16 has been deleted. The live corrected A2 frames [S12a](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-8) and [S12b](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-64) now contain individual inline `Home`, `Away`, and `Left affected area` actions. Selecting a state records the adult profile's update directly without opening another screen.

All Event examples are marked simulated and source-pending. No layout asserts that automated Protective Action coverage is available.

## Validation

- Five Slice B app frames are exactly 390 × 844; corrected A2 S12a/S12b remain 390 × 844.
- Persisted containment audit found zero descendants outside an app viewport.
- Every new text layer uses Inter; the existing low-fidelity file has no local variables, component instances, or applied text/effect styles to reuse.
- All five new top-level frames begin at x=10600; A2 Round 2 remains at x=8500 with right edge x=10244.
- Required-string audit passed for explicit leave/stay language, simulated/source-pending treatment, location-needed losses, exact-update acknowledgement, and no default denominator. The 2026-09-11 founder clarifications replaced S13a's Shelter-in-Place sample with Special Weather Statement, normalized S14's optional related-Event and acknowledgement presentation, removed Event-specific check-ins from MVE-1, added `Left affected area` directly to both S12 Home Status sections, and deleted S16. All affected sheets plus the updated guide/walkthrough were visually rechecked.
- Stale-content audit found none of the cloned A2 community-summary, last-visit, or correction-boundary text.
- No placeholder shimmer remains.
- Visual inspection covered all three sheets, the read-first guide, and the walkthrough. One boundary-note text-order issue on Sheet 01 was corrected and rechecked before handback.

## Review and scope boundary

Slice B is not founder-approved low-fidelity. S13/S14 founder-clarification corrections are applied and self-verified. S15's separate-screen placement remains a wireframe hypothesis. S16 is retired and deleted; S12 owns the inline status update.

Final copy/layout; detailed empty/loading/offline/stale/corrected/retracted/expired/closed/source-unavailable states; exact Event geographic-match presentation; preview-slot competition/grouping; NWS VTEC verification; Protective Action identity/lifecycle; source/provider selection; the S12 source-pending annotation choice; S15 placement; status confirmation/failure/staleness treatment; the roadmap task; and Gate 3 remain open. John authorized the revised canonical-first Claude packet after this correction. No production code, dependency, commit, or push is authorized by this handback.
