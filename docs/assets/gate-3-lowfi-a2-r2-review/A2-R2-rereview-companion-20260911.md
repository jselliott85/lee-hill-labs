# Gate 3 A2 Round 2 — Claude Bounded Re-Review Companion

Prepared 2026-09-11 for the single permitted re-review of **ECA Product Design / Finish approved user flows and low-fidelity screens**. This packet covers only the corrected A2 Round 2 area: S07–S12 joining, membership, administrator review, first-arrival guidance, and the post-approval Home shell.

John reviewed the Round 2 area and reported no additional comments. That completes the founder-review step; it is **not** A2 low-fidelity approval. This packet is not Slice B, the global consequential-state pass, final copy or final visual-design approval, implementation, task completion, or Gate 3 closure.

## Required reading order

1. Read this companion and the linked canonical repository sources.
2. Review `A2-R2-unannotated-layouts-20260911.pdf` in page order and record independent re-review findings **without opening the founder-review record**.
3. Complete the correction-verification matrix below and identify any new Tier 1, Tier 2, or Tier 3 findings introduced or left unresolved by Round 2.
4. Only after recording those findings, open `A2-R2-founder-review-record-20260911.pdf`. Compare it with the independent findings while keeping the comparison distinguishable.
5. Return the bounded re-review to John. Do not edit Figma or repository files, approve A2, authorize another correction, or mark the roadmap task or Gate 3 complete.

This is A2's one permitted re-review after correction. The review cap is not acceptance: unresolved blocking findings remain unresolved and return to John. Explicitly state if there are zero Tier 1 findings.

## Live board and canonical sources

- [A2 Round 2 read-first guide](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=84-2)
- [A2 Round 2 route and state walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=84-11)
- [A2 Round 2 sheet 01 — join code and pending membership](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-2)
- [A2 Round 2 sheet 02 — denial and administrator review](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-2)
- [A2 Round 2 sheet 03 — post-approval Home shell](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-2)
- [Round 2 correction handback](../../gate-3-lowfi-a2-correction-r2-20260910.md)
- [Original A2 handback and review provenance](../../gate-3-lowfi-a2-20260910.md)
- [Founder-approved S12 exploration handback](../../gate-3-lowfi-s12-home-shell-exploration-20260910.md)
- [Screen/state inventory](../../gate-3-screen-state-inventory.md)
- [Current traceability and route ledger](../../gate-3-lowfi-traceability.md)
- [MVP requirements](../../03-mvp-requirements.md), especially `Community Joining and Post-Approval Home`
- [Decision log](../../04-decision-log.md), especially `2026-09-10 — A2 Claude Review Dispositions and Round 2 Correction Authorized`
- [Execution and review protocol](../../gate-3-lowfi-execution-prep.md)

The canonical repository controls if this dated snapshot conflicts with live Figma, prior comments, or older exports. The original A2 review packet remains provenance; this re-review targets only nodes `84`–`87`.

## Round 2 correction-verification matrix

For each item, report `Confirmed`, `Not confirmed`, or `New issue`, with the frame/deep link and evidence.

| Frame | Required correction to verify |
| --- | --- |
| [S07a R2 `85:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-8) | Empty-code entry preserves the pre-approval content gate; unable-to-check-code remains a distinct named service-failure state assigned to Pass 2/A. |
| [S07c R2 `85:21`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-21) | Checked-and-invalid code is distinct from connection/service failure and has a direct correction/re-entry action. |
| [S07b R2 `85:34`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-34) | Valid code reveals only the configured community name before requesting access and uses generic `Community Administrator` language. |
| [S08a R2 `85:49`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-49) | Pending membership retains the no-community-content gate and generic administrator language. |
| [S08b R2 `86:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-8) | Denial names the community, permits resubmission through S07, and offers a pre-addressed administrator email action without displaying the address. |
| [S09a R2 `86:21`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-21) | Queue shows a count and vertically scrollable oldest-first previews; pending preview may show the full self-provided address plus `Verified phone` status, never the phone number. |
| [S10a R2 `86:35`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-35) | Review detail separates `Verified phone` from `Self-provided address — not verified`, omits the phone number, and returns approve/deny to the current queue. |
| [S11a R2 `86:50`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-50) | Uses the approved placeholder `Welcome to Your Community`; remains lightweight, skippable, replayable from Help, and the final footer-free onboarding screen. |
| [S12a R2 `87:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-8) | Uses the founder-approved Home shell, three separate Event previews, one reserved `[RELEVANCE — TBD]` slot on every row, Community Summary, inline Home Status, and the first global footer. |
| [S12b R2 `87:64`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-64) | Replaces only Events with both location-dependent losses plus `Edit address`, while retaining Community Summary, Home Status, and global navigation. |

`Verified phone` proves only completion of the required phone-verification step. It does not prove identity, residency, administrator vetting, or human/bot status. Different Event Types remain separate. Every relevance slot is a reserved information requirement, not approved consumer copy, iconography, placement, or implementation representation.

## Routes to verify

Primary resident path: S02 native outcome → S07 code entry → valid-code confirmation → request submitted → S08 pending → administrator review → approval → S11 first-arrival guidance or skip → S12 Home.

Required alternatives:

- Invalid code → remain in S07 with a correction path.
- Unable to check code → preserve input and retry; detailed frame remains Pass 2/A.
- Pending → continue showing the last confirmed state without community content.
- Denied → community-named denial → resubmit through S07 or contact the community administrator by pre-addressed email.
- Approved → requester notification when permitted → S11/S12.
- Administrator → S09 oldest-first pending queue → S10 pending detail → approve or deny → return to the current queue; detailed failed/already-reviewed/changed states remain Pass 2/A.
- Approved resident without a usable saved-home coordinate → S12 location-needed variant, retaining community and Home Status functions but withholding both Event capabilities.

## Named deferrals and exclusions

- Pass 2/A remains responsible for detailed loading, offline, empty, retry, failed-action, already-reviewed/changed, revoked/suspended, corrected, and combined consequential states unless Round 2 explicitly drew the structural state.
- Slice B owns S13–S16 sourced Events, detailed Event presentation, acknowledgement coverage, and the broader saved-home-signal set.
- `Event geographic match basis`, final relevance presentation, related-Event grouping, and preview-slot competition remain open workstreams; do not treat `[RELEVANCE — TBD]` as a defect requiring copy selection in this re-review.
- Event ordering below evacuation-first remains open.
- Gate 4 owns providers, data model/JSON, authentication/session/recovery implementation, notification delivery, and security enforcement.
- Excluded: final copy, final iconography or polish, reusable production components, production code, provider selection, general direct messaging, group chat, social feed, and administrator incident-management authority.

## Finding and handback format

Number every finding and include: Tier, frame/deep link, canonical reference, evidence, and proposed disposition.

- **Tier 1:** product/safety contradiction, prohibited scope, unapproved capability, collapsed meaning/action distinction, privacy/access failure, or falsely approved safety copy. Blocking.
- **Tier 2:** structural gap, actor/permission ambiguity, dead end, traceability mismatch, broken walkthrough, or correction not implemented. Founder decision is required only when the canonical record does not already settle it.
- **Tier 3:** cosmetic naming, spacing, low-fi wording, or polish. Log only during this pass.

Keep these result sections separate:

1. `Independent re-review findings before founder record`
2. `Round 2 correction-verification matrix`
3. `Founder review comparison`
4. `Already-approved corrections still incomplete`, if any
5. `New questions for John`, only for genuinely unresolved decisions

End with: Tier 1 count; Tier 2 count and questions; Tier 3 log; whether the corrected A2 low-fidelity structure is ready for John's explicit approval; and any unresolved conflict among the repository baseline, original A2 snapshot, approved S12 exploration, Round 2 correction, or founder-review record.

## Packet integrity

- Unannotated layout reference: `A2-R2-unannotated-layouts-20260911.pdf`
- Open only after independent findings: `A2-R2-founder-review-record-20260911.pdf`
- Source PNG snapshots: `a2-r2-read-first.png`, `a2-r2-walkthrough.png`, `a2-r2-sheet-01.png`, `a2-r2-sheet-02.png`, and `a2-r2-sheet-03.png`
- Live snapshot: 2026-09-11 after John's Round 2 review and before Claude's re-review
- Founder-review record: one exact current-session statement; no new Figma comments were added
- No Figma node or comment was changed while preparing this packet
