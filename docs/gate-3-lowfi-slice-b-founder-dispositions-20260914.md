# Gate 3 Slice B — Founder Dispositions and Bounded Correction Scope

**Date:** 2026-09-14

**Source:** [John/Claude founder-disposition document](https://docs.google.com/document/d/1XBsKox4rVq1E3Aj4yFdM0YyPOOhdlxqZqwc-B9IhAZQ/edit)

**Status:** Founder decisions recorded; John subsequently authorized R2 execution, and the [bounded Figma correction](gate-3-lowfi-slice-b-r2-correction-20260914.md) is drawn and self-verified. Slice B is not approved low-fidelity. This supersedes the 2026-09-11 first-review resumption document for current action; the earlier review record remains provenance.

## Founder dispositions

| Item | Controlling correction |
| --- | --- |
| B-01 | Both S14 examples use the same contextual baseline: `Follow instructions from public authorities. If you believe you are in danger, move to a safe place and call 911 when able. LHL does not contact emergency services.` The new `move to a safe place` wording supersedes `move to safety` on current S01 and Help surfaces and must carry into Slice C request creation. Contextual shortening may not remove the three meanings. Retain `believe`; no Event-Type-specific safety variants. |
| B-02 | Put `I saw this update` inside `CURRENT SOURCE UPDATE` on both S14 examples. A separate `WHO SAW THIS UPDATE` section says `See who in [Boulder Heights] has acknowledged this update.` and `Acknowledgement only records that someone tapped the button in LHL.` with `[Community responses]`. Community name is data-driven. |
| B-03 | S15 uses first name plus last initial, with factual Home Status beside each name. Acknowledged examples: `Alex M. — Home — 4:47 PM`, `Jamie L. — Evacuated — 4:51 PM`; no-acknowledgement examples: `Taylor R. — Evacuated`, `Casey P. — Home`. Distinguish `No status` (never set) from `No recent status` (latest report older than 48 hours), with the 48-hour display rule only on S15. Do not sort, flag, badge, or highlight people using status plus acknowledgement as derived urgency. |
| B-04 | Use S14b's simpler header on both S14 frames; remove S14a's extra CURRENT/update-time/relevance/Source ID row. Stack Event block, safety baseline, Current Source Update, Update History, conditional Related Events, then Who Saw This Update. Related Events is below history and outside the Event header, with one clickable row per independently identified Event; omit entirely without authoritative evidence or an approved deterministic rule. Present/absent is the only structural difference between the S14 examples. |
| B-05 | On S12a and S12b, show exactly one selected status matching the displayed `Away`; change the third inline option from `Left affected area` to `Evacuated`. `Evacuated` means only the adult reported that action, not that they are safe, outside danger, or at a destination. Use the same label on S15. |
| B-06 | Annotate S14b as an out-of-flow pattern demonstration. No current S13 feed row routes to the Shelter-in-Place example. |
| S15 disclaimer | Under the update header and above both member lists, in readable weight: `This page shows only what was tapped in LHL. It does not tell you whether anyone is safe.` Keep `Acknowledged` and `No acknowledgement recorded`; do not introduce a call to action. |

## Additional decisions and open boundaries

- **No synthesized direction lines in MVE-1.** Remove `LEAVE NOW` from S13a/S14a and `STAY INDOORS. DO NOT LEAVE.` from S14b. The Event Type identifies the sourced action; the required source link leads to official instructions. Revisit the direction-line concept after MVE-1 with Protective Action source selection. Do not silently turn an Event Type into LHL-authored instructions.
- **Source link:** A source link is required on Event detail; the example destination remains sample/TBD. `Open source link [TBD]` incorrectly implies that the link feature itself is optional. Sweep similar sample/source-identity labeling.
- **One future Event-aware status capability:** Conditional availability of `Evacuated`, member Event-relevance on S15, and automated Home/Away all depend on knowing whether a particular Event affects a particular home. Record and evaluate them together, not as three implementation features. Member relevance also creates a new coarse-location disclosure and requires a separate privacy decision. None is in MVE-1.
- **Gate 6 questions:** Test whether `Evacuated` is understood as action rather than verified safety, and whether residents use general Home Status outside events. S15's 48-hour presentation threshold must not erase the owner's older report on S12; S12 should still display it to prompt an update.
- **Rejected options:** Do not add address shorthand to S15 member rows: it exposes address context and can falsely imply a member's status is tied to an address. Do not say `No acknowledgement does not mean a neighbor is unsafe or unaware`: that makes unsupported factual assertions. Do not add an S15 `reach out` call to action: it risks converting the screen into a social chase list. These are dispositioned alternatives, not pending copy options.

## Bounded Figma correction handoff

John explicitly authorized Round 2 while preserving Round 1. The original Slice B R1 nodes—S13a `112:30`, S14a `112:157`, S14b `112:213`, and S15a `112:284`—remain review provenance. The [R2 handback](gate-3-lowfi-slice-b-r2-correction-20260914.md) identifies the separate corrected boards and validation. Current S01 and live corrected S12a `87:8` / S12b `87:64` received the cross-surface wording/status edits. Help has no drawn destination yet; it and Slice C request creation must inherit the safety baseline when drawn.

Still open: Slice B founder approval; S15 location/separate-screen hypothesis; final copy/layout/iconography; Event ordering below evacuation-first; related-Event grouping and preview-slot competition; source/provider and Event lifecycle selection; production code; roadmap task status and Gate 3 closure.
