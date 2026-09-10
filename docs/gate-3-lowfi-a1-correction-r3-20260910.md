# Gate 3 — A1 Correction Round 3

Prepared 2026-09-10 by Cody. Roadmap task: **ECA Product Design / Finish approved user flows and low-fidelity screens** — In Progress.

## Authorization checkpoint

Claude completed the remaining bounded Round 2 re-review against live Figma and John's 11 Round 2 comments. It found zero Tier 1 issues. John resolved both review questions and supplied the resulting handoff to Cody. The controlling decision is recorded in `docs/04-decision-log.md` before any Figma mutation.

Round 3 is a bounded correction, not a new review allowance or approval gate.

## Authorized Figma scope

| Frame | Node | Authorized correction |
| --- | --- | --- |
| S05 | [37:211](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-211) | Combine the approximate-location paragraph and confirmation callout into one element; remove the notification-next sentence entirely. |
| S02 | [37:54](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-54) | Remove app-level `Not now — continue`; retain one action opening native permission. |
| S02b | [38:82](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-82) | Remove app-level `Not now — continue`; retain one action opening native permission. |
| S02-OS | [38:103](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-103) | Remove stale narration that the app-level `Not now` action skips the native prompt; retain accurate native outcomes. |

S02 does not require four formal boxes if its four content topics remain clear. No box-count change is required. S04 Tier 3 comments remain logged and outside this bounded correction.

## Verification required before handback

- S05 contains one combined guidance/confirmation element and no notification-next sentence.
- S02 and S02b each expose one LHL action; neither contains `Not now`.
- S02-OS contains no stale app-level defer narration and accurately records Allow, Deny, and Android dismissal/permission-not-determined behavior.
- All affected text fits, panels remain 390 × 844, Sheet 02 has no overlap/overflow, and unrelated Round 2 panels retain their IDs and content.
- Current route ledger falls from 30 drawn routes to the approved 28.

## Boundary and next batch

A1 remains unapproved for final layout and final copy after this correction. A2 (S07–S12) is confirmed next after the Round 3 handback; A2 drawing is not part of this pass and Slice B does not precede it. No task or gate is marked Complete.

## Execution status

Executed and self-verified on 2026-09-10. The four target frames retain their existing IDs and 390 × 844 geometry:

- S05 now has one `Confirm your home location` element containing the approximate-location/edit guidance and local-Events consequence. The separate paragraph and the notification-next sentence were removed.
- S02 and S02b now each contain only `Choose device permission`; the two app-level defer controls were removed.
- S02-OS and the directly affected Round 2 route annotations now describe Allow, Deny, and Android dismissal without an app-level defer path. Round 1 history was not changed.
- Persisted readback found no target-screen overflow and no current Round 2 `Not now` text. The only remaining matches are two historical Round 1 nodes. Sheet 02 and individual S05, S02, and S02-OS renders were visually inspected.
- The current visible-action ledger contains 28 routes. A2 remains next but unstarted; A1 remains In Progress and is not approved for final layout or final copy.
