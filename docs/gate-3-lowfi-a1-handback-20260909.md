# Gate 3 — Pass 1 / A1 Handback

Prepared by Cody, GPT-6 Astra / High, 2026-09-09. Status: structural draft delivered for Claude's independent review and John's layout approval. Roadmap task `ECA Product Design / Finish approved user flows and low-fidelity screens` remains In Progress.

## Start here

- [Review packet on Drive: visual PDF](https://drive.google.com/file/d/1X8OIsMVcDOG-FArsaghEnAnLCbnd9Kkp/view) and [Markdown companion for Claude](https://drive.google.com/file/d/11vRjy_oCcDeqfCh_73wX5Dv4N9iOazXh/view). The companion bundles this handback, traceability, and dated source excerpts; use it with the PDF. [Local companion](assets/gate-3-lowfi-a1/A1-review-companion.md).
- [Figma start-here / entry walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=12-2).
- [Sheet 01 — invitation through verification](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=7-2) and [Sheet 02 — consent through home setup](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=8-2).
- [Review sheets PDF](assets/gate-3-lowfi-a1/A1-review-sheets.pdf), [sheet 01 PNG](assets/gate-3-lowfi-a1/contact-sheet-01.png), [sheet 02 PNG](assets/gate-3-lowfi-a1/contact-sheet-02.png).
- [Repository traceability index and complete A1 state ledger](gate-3-lowfi-traceability.md).

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
