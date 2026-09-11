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
| S08b R2 `86:8` | Denied membership | New resident recovery screen: named community, honest `Your request wasn't approved.` headline, resubmit-code action, and pre-addressed administrator email action without displaying the address. |
| S09a R2 `86:21` | Administrator queue | Shows a count and vertically scrollable oldest-first previews; each preview includes full self-provided address and `Verified phone` status, not a phone number. |
| S10a R2 `86:35` | Administrator review | Separates `Verified phone` status from `Self-provided address — not verified`, omits the phone number, and returns both dispositions to the current queue. |
| S11a R2 `86:50` | First approved arrival | Uses `Welcome to Your Community` and is explicitly the final footer-free onboarding screen. |
| S12a R2 `87:8` | Home / usable location | Uses the approved Home shell, three separate current Event Type previews, a `[RELEVANCE — TBD]` slot on every row, Community Summary, inline adult-profile Home Status with `Voluntary status for this adult profile`, and the first global footer. |
| S12b R2 `87:64` | Home / location needed | Retains the entered `25 Example Lane`, replaces Events with both location-dependent losses and `Edit address`, and retains Community Summary, adult-profile Home Status, and the global footer. Native comment #46 aligns its helper exactly with S12a: `Voluntary status for this adult profile`. |

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

John completed his Round 2 review on 2026-09-11 and reported no additional comments. The bounded Claude re-review [companion](https://drive.google.com/file/d/1i2Rsa6AmZ6hlk4sSptFp6HJZMG7ElMd4/view), [unannotated layouts](https://drive.google.com/file/d/18tiPwKsNibA8wmWP0jyZK1C6xgzRmYL-/view), and separate [founder-review record](https://drive.google.com/file/d/1TXGAYQCX76IA8KGkCmhSBYxfPZgCjhXy/view) were uploaded and verified in the Gate 3 Drive folder; canonical repo copies remain in `docs/assets/gate-3-lowfi-a2-r2-review/`. Claude completed the permitted bounded re-review with zero Tier 1 findings and four founder-dispositioned Tier 2 findings. Cody applied the bounded corrections on 2026-09-11. While confirming those changes and resolving comments, John surfaced native comment #46; Cody aligned S12b's helper with S12a and revalidated it within the same three-frame scope. See the [final-correction record](gate-3-lowfi-a2-r2-final-correction-20260911.md). John then explicitly approved corrected A2 low-fidelity on 2026-09-11. Slice B (S13–S16) is next. Final wording, final visual design, detailed loading/offline/error/corrected/suspended states, Event match-basis and source-lifecycle verification, and preview-slot competition/grouping remain open.
