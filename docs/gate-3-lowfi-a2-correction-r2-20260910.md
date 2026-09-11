# Gate 3 Low-Fidelity — A2 Round 2 Correction Handback

Prepared 2026-09-10 by Cody under `ECA Product Design / Finish approved user flows and low-fidelity screens`.

## Authorization and boundary

Claude completed the independent A2 review and supplied a review amendment. John resolved every open question, approved the resulting product/display boundaries, and authorized the bounded Round 2 correction. Product decisions were recorded in the canonical requirements and decision log before Figma mutation.

This correction does not approve final copy, final layout, the detailed consequential-state pass, the roadmap task, or Gate 3. Original A2 review frames/comments (`59`–`61`) and the separately approved S12 exploration (`73`) remain unchanged as provenance.

## Review entry points

- [Read first](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=84-2)
- [Route and state walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=84-11)
- [Sheet 01 — join code and pending membership](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=85-2)
- [Sheet 02 — denial and administrator review](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=86-2)
- [Sheet 03 — post-approval Home shell](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-2)

## Corrected structural coverage

| Frame | State | Correction |
| --- | --- | --- |
| S07a R2 `85:8` | Code entry | Preserves the pre-approval content gate and names unable-to-check-code as distinct service-failure coverage. |
| S07c R2 `85:21` | Invalid code | New explicit bad-code result with a direct re-entry action; it is not a connection failure. |
| S07b R2 `85:34` | Valid-code confirmation | Uses generic `Community Administrator` language. |
| S08a R2 `85:49` | Pending membership | Uses generic administrator language and retains the no-access boundary. |
| S08b R2 `86:8` | Denied membership | New resident recovery screen: named community, resubmit-code action, and pre-addressed administrator email action without displaying the address. |
| S09a R2 `86:21` | Administrator queue | Shows a count and vertically scrollable oldest-first previews; each preview includes full self-provided address and `Verified phone` status, not a phone number. |
| S10a R2 `86:35` | Administrator review | Separates `Verified phone` status from `Self-provided address — not verified`, omits the phone number, and returns both dispositions to the current queue. |
| S11a R2 `86:50` | First approved arrival | Uses `Welcome to Your Community` and is explicitly the final footer-free onboarding screen. |
| S12a R2 `87:8` | Home / usable location | Uses the approved Home shell, three separate current Event previews, a `[RELEVANCE — TBD]` slot on every row, Community Summary, inline Home Status, and the first global footer. |
| S12b R2 `87:64` | Home / location needed | Replaces Events with both location-dependent losses and `Edit address`, while retaining Community Summary, Home Status, and the global footer. |

`Verified phone` means only that the required phone-verification step completed. It is not identity, residency, administrator-vetting, or bot-detection proof. The `Event geographic match basis` outcome, final relevance copy/presentation, related-Event visual grouping, and preview-slot competition remain open.

## Verification

- Ten app viewports across S07–S12 are exactly 390 × 844.
- Persisted containment audit found no descendant outside any app viewport.
- Every new text layer uses Inter Regular.
- Footer audit found zero global footers on S07–S11 and one on each S12 alternative.
- Required-content audit found the bad-code result, denied-access result, both S09 preview addresses, and all three in-screen relevance placeholders.
- Forbidden-content audit found no displayed `(303) 555-0148` and no John-specific administrator wording in the new correction area.
- Eighteen named action routes plus the visibly unavailable empty-code `Continue` control are present.
- Visual inspection covered the read-first guide, walkthrough, and all three sheets after a multiline text-geometry correction.
- Original A2 sheets `59:16`, `59:20`, and S12 exploration `73:2` retain their original IDs, names, positions, and dimensions.

## Review status

Round 2 is ready for John's review. It is not yet founder-approved low-fidelity. Final wording, final visual design, detailed loading/offline/error/corrected/suspended states, Event ordering beyond evacuation-first, the `Event geographic match basis` decision, and full A2 approval remain open.
