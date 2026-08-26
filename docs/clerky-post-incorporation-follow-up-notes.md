# Clerky Post-Incorporation Follow-Up Notes

## Status and limits

John reported receiving a more substantive response from Cara O'Brien on the evening of August 17, 2026. The research below came from Claude's review of Clerky's public help center and template library. Claude could not inspect John's Clerky account, so these notes are a starting map only. They do not confirm which fields, forms, or Switch Forms options are available in John's document set and are not legal advice.

## Thursday action checkpoint — August 20, 2026 — Complete

1. Opened the actual Clerky Post-Incorporation Setup RSPA and inspected the editable vesting fields.
2. Tested whether Randall's RSPA could be customized independently of John's via Switch Forms — see the standing constraint below; it cannot be, at least not without risking bleed-through into John's own documents.
3. Investigated Clerky's Stock Plan Adoption product as a possible path for issuing Randall's shares — ruled out; it creates an option pool for future service-provider grants, not a direct one-time founder issuance. No distinct "issue already-authorized-but-unissued shares to a founder" product was found in the account's four template categories (Foreign Qualification, Incorporation, Post-Incorporation Setup, Stock Plan Adoption); whether one exists is an open question pending a Clerky support inquiry, not yet sent.
4. Result: rather than a single focused follow-up question, John proposed a structural change to Cara on 2026-08-20 — see "Proposal sent to Cara, 2026-08-20" below. Not yet confirmed.

## Standing constraint — Switch Forms shared master template (found 2026-08-20)

Clerky's Switch Forms feature (the download-edit-reupload workflow used to customize documents beyond basic field entry) operates on **one shared master `.doc`/`.docx` per document type for the entire Post-Incorporation Setup document set — not a separate editable copy per founder.** Editing "Randall's RSPA" and editing "John's RSPA" are the same underlying edit; per-founder values (names, share counts) are resolved from shared `[[token]]` placeholders at generation time, but the surrounding prose is one shared file. Confirmed via Clerky's own Switch Forms dialog and by downloading/inspecting the actual master files.

**Implication for any future Switch Forms customization, not just this instance:** a structural edit intended for one founder's document (removing/rewriting language, inserting founder-specific narrative text) cannot be made in isolation — it will also generate into every other founder's document of that same type unless the inserted language is written to be founder-agnostic (using only existing tokens) or the divergent content is moved out of the shared template entirely (e.g., into a separate side letter/amendment). Any future request to customize one founder's document via Switch Forms must account for this before drafting.

**Repeatable process confirmed this session** for making and verifying a Switch Forms edit: unzip the downloaded `.docx` → edit `document.xml` directly → validate against the original (structure/token diff) → render to PDF → visually confirm → reupload. Clerky's own guidance states Switch Forms should only be used with attorney assistance.

## Proposal sent to Cara, 2026-08-20 — awaiting response, not yet confirmed

Given the shared-template constraint, John proposed splitting the post-incorporation package into two tracks rather than fighting Randall's paperwork through templates shaped for an ongoing employee/consultant relationship:

1. **Now:** issue only 9,000,000 of the 10,000,000 authorized shares to John himself; finish and sign the rest of his own post-incorporation package on Cara's existing guidance.
2. **Later, separately:** issue Randall's 1,000,000 shares as a clean, purpose-built transaction once Cara confirms the approach — expected to include a Board Consent/Resolution (simple written consent, John is sole director), a **Stock Purchase Agreement** (not "Restricted" — Randall's shares carry no vesting or repurchase option, so the "restricted" term doesn't apply), a Notice of Stock Issuance, a CIIAA reworked for a relationship that's already concluded (not ongoing/at-will), and a manual internal cap-table/ledger update after the Notice is executed. **No drafting has started on any of these — scoping only**, per John's explicit instruction pending Cara's response.

**Why the alternative (issue all 10M to John, then personally transfer 1M to Randall later) was ruled out:** it would exhaust the authorized share pool (requiring a Certificate of Incorporation amendment before any further issuance to anyone); a personal transfer likely breaks QSBS eligibility (IRC §1202) for Randall's shares, since QSBS generally requires acquiring stock directly from the company at original issuance — a real, hard-to-undo tax cost if the company succeeds; it would likely trigger the Right of First Refusal in John's own RSPA, requiring a separate waiver; and it recharacterizes Randall's equity as a personal gift/sale between individuals rather than company compensation for his actual pre-incorporation work. Leaving 1M authorized-but-unissued and having the company issue it to Randall directly, later, avoids all four problems.

**Known gap this creates:** Randall's CIIAA — the document that formally assigns his pre-incorporation work product to the company — is arguably the most important piece of his package. Deferring his documents wholesale also defers that IP assignment, leaving a gap in the company's chain of title until the later transaction closes. This was posed to Cara explicitly as an open question: should the CIIAA move now, standalone, ahead of or independent from the stock-issuance timing? Unresolved.

**Also unresolved, pending Cara:** whether Larissa's spousal consent is still needed on Randall's later document set, given the original spousal-consent language was tied to the repurchase-option/community-property framing that no longer applies to a fully-vested, no-vesting purchase; and whether Randall's later issuance happens via Clerky (Switch Forms or another product) or is drafted directly by Cara outside Clerky.

## Follow-up sent to Cara, 2026-08-25 — awaiting response

John emailed Cara again on 2026-08-25 regarding both parts of the unresolved legal work:

1. the proposed two-track post-incorporation resolution described above; and
2. Randall's broader exit plan.

John hopes to connect with Cara in person on 2026-08-26 or 2026-08-27. No meeting date or time is confirmed, and no response or approval from Cara is recorded yet. The two-track structure, Randall documentation, CIIAA/IP-assignment timing, spousal-consent question, exit terms, and final drafting all remain unresolved. This follow-up changes the communication status only; it is not an approved legal decision and does not authorize document execution or filing.

## Confirmed fix, current (pre-deferral) document set — RSPA vesting-clarity sentence

Separate from the deferral proposal above, and applicable regardless of whether the deferral is approved (it applies cleanly to John's own RSPA either way): Cara's Q4 comment asked the RSPA state explicitly where the vested, non-repurchase-option shares "went," since the standard form only states the unvested number. Given the shared-template constraint, John's originally-approved founder-specific narrative paragraph (hardcoded numbers plus "sweat equity" rationale) could not be inserted for one founder without also generating into the other's document. Instead, a founder-agnostic sentence using only Clerky's existing tokens was added as a lead-in to the existing numbered Repurchase Option clause (not a new clause, to avoid disturbing internal cross-reference numbering):

> "Of the [[Total Number of Vested and Unvested Shares]] total shares of Common Stock purchased by [[Founder Name]] hereunder, any shares not identified below as subject to the Repurchase Option are fully vested as of the date of this Agreement."

Verified via regenerated documents (v5): John's RSPA reads "Of the 9,000,000 total shares... purchased by John Elliott... 7,200,000... subject to the Repurchase Option" (1,800,000 vested — correct); Randall's RSPA reads "Of the 1,000,000 total shares... purchased by Randall Fransen... 0... subject to the Repurchase Option" (all 1,000,000 vested — correct and unambiguous). **Open trade-off:** this generic sentence doesn't carry John's originally-approved fuller rationale ("in recognition of the Purchaser's prior pre-incorporation sweat equity, uncompensated services, and foundational intellectual property contributions"). If John wants that language preserved, it likely needs to live outside the shared RSPA template — e.g., a short side letter/amendment specific to him — flagged to Cara, not yet resolved. **Note:** if the Randall-deferral proposal is approved, Randall's RSPA in the current document set won't be used at all, making this specific fix moot for his document (though still correct/useful groundwork if the deferral is not approved).

## Q1 — Stock purchase without vesting

Claude's public-source research indicates that Clerky's standard Post-Incorporation Setup Restricted Stock Purchase Agreement uses editable vesting inputs rather than hardcoding vesting. One field is `Total Number of Unvested Shares (the Vesting Shares)`, and Clerky's public guidance reportedly describes the `Vesting Provision` language as modifiable by experienced users, usually with attorney involvement.

A possible path is therefore:

- Set Randall's unvested shares to zero, leaving no unvested shares subject to the repurchase option.
- Use an attorney-directed Switch Forms edit to remove or rewrite boilerplate tied to `Continuous Service Status` as an employee or consultant if that language otherwise remains inapplicable or confusing.

This is consistent with one option Cara reportedly raised on August 6: retain the RSPA but set vesting shares to zero. It remains a question for Cara whether that approach, plus tailored drafting, is preferable to the "straight" agreement she later suggested.

## Q3 — CIIAA for a non-employee

Claude's public-source research indicates that Clerky's separate Hiring product can generate consultant paperwork, including a consulting agreement and consultant-framed CIIAA. That framing is closer to Randall's status than an employee CIIAA, but it may still assume a new or continuing consulting relationship.

Randall's situation is different: the work is already completed, he is departing, and no ongoing service relationship is planned. Both the employee and active-consultant CIIAA forms may therefore contain forward-looking relationship language that does not fit.

## Focused questions for Cara

- Does the existing RSPA fit if Randall's unvested shares are set to zero and the inapplicable continuous-service/repurchase language is removed or rewritten through Switch Forms?
- If not, what specific straight stock-purchase form or custom drafting does Cara recommend?
- Is Clerky's consultant CIIAA appropriate when there is no current or future consulting relationship?
- Should the backward-looking assignment of Randall's completed work live entirely in the separate IP assignment document discussed under Q5, instead of using either off-the-shelf CIIAA?
- If both documents are needed, what distinct legal purpose should each serve, and what conflicting employee, consultant, or ongoing-relationship language must be removed?
- Can Cara provide or approve the exact Switch Forms language needed for the selected approach?

## Decision boundary

Do not select, modify, execute, or file a Clerky form based on these notes alone. Use the actual account documents to narrow the question, then obtain Cara's drafting or explicit approval for the final form language.
