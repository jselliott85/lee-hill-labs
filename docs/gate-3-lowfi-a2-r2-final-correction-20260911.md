# Gate 3 Low-Fidelity — A2 Round 2 Final Correction Record

Prepared 2026-09-11 by Cody under `ECA Product Design / Finish approved user flows and low-fidelity screens`.

## Authorization and review result

Claude completed the one permitted bounded A2 Round 2 re-review and John dispositioned all findings in [Gate 3 — A2 Round 2 Findings and Founder Dispositions](https://docs.google.com/document/d/1lJgojfODKrtt9v98MPXWUgh5T67G2qXbRXG4_LQ6ook/edit). The review found zero Tier 1 issues, four Tier 2 issues, and verified all ten prior Round 2 corrections. Claude inspected live Figma independently but later compared findings with John's screenshots/comments #44 and #45 during discussion rather than opening the founder-review PDF; no finding changed, and the protocol deviation is preserved in the decision log.

John also supplied [Event Display Level and Lifecycle Identity](https://docs.google.com/document/d/1_yzpwXYf-yVFaN1Ge7Nlu2le6f-bO3zl8tCehQRJxjg/edit), which corrects the earlier explanation that treated `Evacuation Order` as an Alert. It is an Event Type. Family governs policy and ordering, Type displays to residents, and source-issued Alert lifecycle governs identity.

## Executed Figma corrections

Only the existing correction frames below changed. Original A2 frames/comments and the separately approved S12 exploration remain provenance.

| Frame | Node change | Result |
| --- | --- | --- |
| [S08b `86:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-8) | Title `86:10`; body position `86:11` | `Access denied` → `Your request wasn't approved.` The unchanged body moved down only far enough to avoid overlap with the approved two-line headline. Resubmit and administrator-contact actions are unchanged. |
| [S12a `87:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-8) | Helper `87:56` | `Share or refresh your household status.` → `Voluntary status for this adult profile`. `HOME STATUS` remains unchanged for this pass. |
| [S12b `87:64`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-64) | Saved-home label `87:70`; helper `87:106` | `Home address needs attention` → `25 Example Lane`. After John surfaced native comment #46 (`update to match s12a`), `Home Status remains usable without a mapped coordinate.` → `Voluntary status for this adult profile`, exactly matching S12a. The separate location-needed treatment and `Edit address` action still carry the mapped-coverage warning; everything else is unchanged. |

## Canonical consequences

- Home Status is one adult profile's voluntary report. Same-address adults may report differently; both reports are valid and MVE-1 does not reconcile them.
- S09 and S10 retain the full self-provided address for authorized administrator review; queue-level visibility supports triage while S10 remains detail.
- Denial copy is honest about a human decision; recovery options provide warmth. Repeat-denial cooldown/cap/settled-state behavior is Post-G6 discovery.
- `EVENTS & ALERTS` remains acceptable consumer language. Internally, Event Family governs, Event Type displays, and a source-issued Alert carries lifecycle identity.
- NWS VTEC is verification-required before implementation. Protective Action lifecycle remains source-dependent and must be asked of Steve alongside access.
- Gate 6 must recruit at least one address with multiple participating adults to test independent status attribution.

## Verification and boundary

- The three target frames remain 390 × 844.
- Persisted text readback matches all four approved replacements across the three correction frames, including exact S12a/S12b helper equality after comment #46.
- The S08b headline/body no longer overlap; S12a and S12b retain their existing structure.
- Visual inspection covered all three corrected frames.
- Event Matrix header notes record the three-level model and lifecycle boundary without changing any row value, family policy, Push Eligible, Notification Eligibility, or source status.

John explicitly approved corrected A2 low-fidelity on 2026-09-11 after this correction and verification. The approved structural baseline is the existing Round 2 correction area beginning at Figma node `84:2`; original A2 review material remains provenance. Slice B (S13–S16) is next. This approval does not settle final copy/layout, detailed consequential states, source or provider selection, lifecycle implementation, the roadmap task, or Gate 3; it does not authorize production code, commit, or push.
