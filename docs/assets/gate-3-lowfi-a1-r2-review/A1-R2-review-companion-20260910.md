# Gate 3 A1 Round 2 — Claude Re-review Companion

Prepared 2026-09-10 for the remaining bounded re-review of **ECA Product Design / Finish approved user flows and low-fidelity screens**. This packet covers X01 and S01–S05 only. It is not A2, global Pass 2, final copy/layout approval, implementation, task completion, or Gate 3 closure.

## Required reading order

1. Read this companion and the linked canonical repository sources.
2. Review `A1-R2-unannotated-layouts-20260910.pdf` and record initial findings **without opening the comments PDF**.
3. Open `A1-R2-comments-20260910.pdf`, compare John's observations with the initial findings, and keep comment-informed additions or revisions distinguishable.
4. Discuss the combined findings with John. Do not edit canonical files, treat comments as approvals, or instruct a Figma redraw without his explicit disposition.

This is the remaining re-review allowed for A1. Unresolved blocking findings remain unresolved; the review cap is not acceptance. Explicitly state if there are no Tier 1 findings.

## Live board and canonical sources

- [Round 2 review area](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-257)
- [Entry walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-264)
- [Screen/state inventory](../../gate-3-screen-state-inventory.md)
- [Current traceability and route ledger](../../gate-3-lowfi-traceability.md)
- [Round 2 handback](../../gate-3-lowfi-a1-correction-r2-20260909.md)
- [MVP requirements](../../03-mvp-requirements.md)
- [Decision log](../../04-decision-log.md), especially `2026-09-10 — A1 Round 2 Founder Review Dispositions`
- [Execution and review protocol](../../gate-3-lowfi-execution-prep.md)

Repository sources control if this dated snapshot conflicts with live Figma or older exports.

## Current approved comparison baseline

- Opening sequence: S01 → S03 → S04 → S05 → S02 → S07 and later membership/guidance. Sign-in, duplicate-number, and no-location panels are alternative branches, not mandatory steps for every resident.
- Not signed in: Create account / SMS-code Sign in. Signed in: saved starting screen under membership/access rules. Username/password is paused. Unique phone assignment blocks duplicate account creation; S03d `Use another number` returns to S03a.
- Complete saved-home address and access instructions are required resident inputs. Address and access instructions remain private from ordinary community visibility. LHL uses the address internally for Event relevance and includes it in deliberate request-specific sharing; access instructions are shared only when selected under the existing temporary-sharing rule.
- A usable matched or resident-accepted home location is **critical** to the full approved incident-matrix Event/alert experience—all approved alerts and Event Types, excluding community actions—but is not a prerequisite for the rest of the app. Without it, no Event/alert device notifications or personalized Events feed are available; Requests, Offers, claimed-item messages, and other approved community functions remain available under their normal access rules. Material address matching/finding/validation failure rates are a major product and adoption risk to measure. No provider, threshold, or metric is selected.
- S02/S02b has one LHL action that opens the native OS notification decision. There is no app-level `Not now`/defer action. Native Allow and Deny continue to S07. Android dismissal also continues, leaving permission not determined and device pushes unavailable. Later recovery uses OS settings. Notification permission never grants membership or guarantees delivery.
- Approved current placeholder: `LHL complements official alerts by presenting qualifying information from approved sources; it never replaces official alerts.` This is not final copy.

### Known current-snapshot mismatch

The unannotated founder-reviewed snapshot intentionally still shows `Not now — continue` on S02 and S02b. Those two controls were superseded on 2026-09-10 and have not been redrawn. The currently drawn board therefore has 30 named routes; the approved next baseline has 28. Assess the rest of the layouts as drawn and do not count the already-recorded removal twice.

## Frame manifest

| Panel | Parent | Actor | Deep link | Review status |
| --- | --- | --- | --- | --- |
| X01 invitation email | X01 | Administrator → invitee | [37:8](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-8) | Founder-commented; layout unapproved |
| A place to coordinate | S01 | Resident | [37:30](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-30) | Founder-commented; layout unapproved |
| Sign in to LHL | S01 | Resident | [38:8](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-8) | Founder-commented; layout unapproved |
| Enter your sign-in code | S01 | Resident | [38:38](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-38) | Founder-commented; layout unapproved |
| Let's start with you | S03 | Resident | [37:75](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-75) | Founder-commented; layout unapproved |
| Check your text messages | S03 | Resident | [37:105](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-105) | Founder-commented; layout unapproved |
| Number already in use | S03 | Resident | [38:61](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-61) | Founder-commented; layout unapproved |
| How members can reach you | S03 | Resident | [37:132](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-132) | Founder-commented; layout unapproved |
| Add your home details | S04 | Resident | [37:155](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-155) | Founder-commented; layout unapproved |
| What might help? | S04 | Resident | [37:180](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-180) | Founder-commented; layout unapproved |
| Does this look close? | S05 | Resident | [37:211](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-211) | Founder-commented; layout unapproved |
| We couldn't locate your home | S05 | Resident | [37:237](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-237) | Founder-commented; layout unapproved |
| About notifications | S02 | Resident | [37:54](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=37-54) | Founder-commented; two-controls mismatch known |
| Community notifications | S02 | Resident | [38:82](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-82) | Founder-commented; two-controls mismatch known |
| Native permission boundary | S02-OS | Resident/device | [38:103](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=38-103) | Boundary note, not app UI |

## Structural routes to verify

Primary creation: X01 → S01 Create account → S03a → S03b → S03c → S04a → S04b → S05 → S02 → native OS decision → S07.

Alternatives:

- S01 Sign in → S01-signin → S01-code → saved starting screen after successful authentication/access check.
- S03 duplicate number → S03d → Sign in or Use another number; the latter returns to S03a.
- S05 wrong location → S04a → fresh lookup; an older response must not overwrite the edited address result.
- S05 no usable location → S05b → S02b → native OS decision → S07 without Event notifications/feed.
- Native Allow, Deny, or Android dismissal never blocks setup; actual permission state is preserved.

## Named deferrals and exclusions

- Pass 2/A: empty/incomplete/save failures; invalid/expired versus network-failed SMS codes; resend/rate/recovery; ambiguous/coarse/no location result; temporary lookup outage; preview-only failure; accepted-location save failure; OS denied/later-disabled presentation and settings recovery.
- A2: S07–S12 joining, membership, guidance, and saved starting screen, including downstream location-needed persistence. S13 no-location feed is in Slice B.
- Gate 4: providers, geocoding quality thresholds, security/session/recovery mechanics, authoritative phone uniqueness enforcement, and implementation details.
- Excluded here: final visual design, production code, native-dialog redesign, movable/satellite pin, device-location fallback, parcel boundary, email automation, final legal copy, A2, and global Pass 2.

## Finding format

Number every finding and include: Tier, frame/deep link, canonical reference, evidence, and proposed disposition.

- **Tier 1:** product/safety contradiction, prohibited scope, unapproved capability, collapsed meaning/action distinction, or falsely approved safety copy. Blocking.
- **Tier 2:** structural gap, actor/permission ambiguity, dead end, traceability mismatch, or broken walkthrough. Founder decision required.
- **Tier 3:** cosmetic naming, spacing, or low-fi wording. Log only during this pass.

End with: Tier 1 count; Tier 2 questions for John; Tier 3 log; whether the current A1 set is ready for a bounded correction; and any unresolved conflict between repository baseline, Figma snapshot, or comments.

## Packet integrity

- Unannotated layout reference: `A1-R2-unannotated-layouts-20260910.pdf`
- Open only after initial findings: `A1-R2-comments-20260910.pdf`. It preserves all 11 thread IDs, order, screen/pin context, three short comments verbatim, and faithful substance summaries for eight longer comments. The read-only Figma credential expired before final packet regeneration, so the PDF discloses that limitation and links the live frames for exact wording rather than pretending the summaries are quotations.
- Source PNG snapshots: `review-guide.png`, `sheet-01.png`, `sheet-02.png`
- Snapshot date: 2026-09-10, after John's native-comment pass and before any resulting redraw.
- Round 1 materials remain unchanged in `docs/assets/gate-3-lowfi-a1/`.
