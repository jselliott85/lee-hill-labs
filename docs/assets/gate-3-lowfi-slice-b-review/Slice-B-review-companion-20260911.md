# Gate 3 Slice B — Claude First-Review Companion

Prepared 2026-09-11 for the first independent Claude review of Slice B under **ECA Product Design / Finish approved user flows and low-fidelity screens**.

This packet covers the corrected S13–S15 Slice B structure and the directly affected current S12 Home Status correction. It contains five Slice B app destinations: Events feed, location-needed recovery, Event detail with a verified related Event, Event detail without an established related Event, and the provisional exact-update response view. S16 is retired and deleted. Slice B is **not** founder-approved low-fidelity.

## Required reading order

1. Read this companion and the linked canonical repository sources.
2. Review `Slice-B-unannotated-layouts-20260911.pdf` in page order. Record all initial findings **without opening the founder-review record**.
3. Complete the structural verification matrix below and identify Tier 1, Tier 2, and Tier 3 findings.
4. Only after recording those findings, open `Slice-B-founder-review-record-20260911.pdf`. Compare it with the independent findings while keeping additions or revisions distinguishable.
5. Return the review to John. Do not edit Figma or repository files, approve Slice B, authorize a correction, or mark the roadmap task or Gate 3 complete.

This is one review with two phases, not two reviews. John alone dispositions findings. Explicitly state if there are zero Tier 1 findings.

## Live Figma and canonical sources

- [Slice B read-first guide](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-2)
- [Slice B route and state walkthrough](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-11)
- [Sheet 01 — Events feed and location recovery](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-24)
- [Sheet 02 — Event detail and conditional Related Events](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-151)
- [Sheet 03 — exact-update responses](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-278)
- [Current S12a — usable home location](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-8)
- [Current S12b — location needed](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-64)
- [Slice B handback](../../gate-3-lowfi-slice-b-20260911.md)
- [Screen/state inventory](../../gate-3-screen-state-inventory.md)
- [Current traceability and route ledger](../../gate-3-lowfi-traceability.md)
- [MVP requirements](../../03-mvp-requirements.md), especially `Approved MVP Constraints` and `Home check-in/status`
- [Decision log](../../04-decision-log.md), especially the three 2026-09-11 Slice B clarification and supersession entries
- [Future roadmap backlog](../../future-roadmap-backlog.md), especially `Event-Type-Specific Check-Ins`
- [Event matrix workbook](https://docs.google.com/spreadsheets/d/1l4kGAgvsCsrecaTxQvqBaeLc8ltizDlplEN6YE4ubBQ/edit)
- [Protective Action Event Family](https://docs.google.com/document/d/12PBrPVq5DF6rWCwml04WV2qhXuzjdH72-fJfeFDjrYY/edit)
- [Event Display Level and Lifecycle Identity](https://docs.google.com/document/d/1_yzpwXYf-yVFaN1Ge7Nlu2le6f-bO3zl8tCehQRJxjg/edit)

The canonical repository controls if this dated packet conflicts with prior chat, Figma comments, Drive working documents, or older exports. The A2 packet remains provenance; the live S12 frames linked above are the current baseline after the founder-authorized inline-status correction.

## Current founder-set product boundaries

- **Family governs; Type displays.** Event Family controls policy and ordering; the consumer-facing row/detail displays the Event Type.
- **Source lifecycle governs identity.** One S13 row represents one authoritative source lifecycle identity. The feed shows its latest/current state; S14 contains chronological updates under that same identity. LHL does not infer merging, upgrading, cancellation, supersession, or continuation from labels alone.
- **Related Events are conditional.** Show the section only when authoritative identity evidence or an approved deterministic rule establishes a distinct Event relationship. Otherwise omit it. Do not infer from time, geography, Event Type, or similar wording.
- **Acknowledgement is exact-update-specific.** `I saw this update` applies only to the eligible update shown. It is not a safety claim, check-in, compliance signal, or relationship control. A material source change creates a new acknowledgement state.
- **General status lives on S12.** `Home`, `Away`, and `Left affected area` are presented together as inline adult-profile actions. Selecting one records the adult profile's timestamped voluntary update without navigation. S16 and Event-specific check-ins are absent from MVE-1.
- **Examples are simulated/source-pending.** No screen asserts that automated Protective Action coverage or a particular provider is available.

## Structural verification matrix

For each item, report `Confirmed`, `Not confirmed`, or `New issue`, with the frame/deep link and evidence.

| Frame | Required structure to verify |
| --- | --- |
| [S13a `112:30`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-30) | One current row per source lifecycle identity; Event Type displays; evacuation direction is explicit; Special Weather Statement replaces the discarded Shelter-in-Place feed sample; all samples are simulated/source-pending; no internal push-eligibility field appears. |
| [S13b `112:86`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-86) | Location-needed state explicitly withholds both personalized Events and Event/alert notifications, does not masquerade as an empty feed, and retains Edit address plus the global footer. |
| [S14a `112:157`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-157) | Evacuation Order says `LEAVE NOW`; current source state precedes chronological history; an evidence-backed Related Events section links to a distinct Wildfire Event detail; exact-update acknowledgement and View responses are present. |
| [S14b `112:213`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-213) | Shelter-in-Place says `STAY INDOORS / DO NOT LEAVE`; no related Event is established, so the section is absent; the same current/history and exact-update action pattern remains. |
| [S15a `112:284`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=112-284) | Provisional View responses destination for one exact update and selected community; shows `Acknowledged` versus `No acknowledgement recorded`; no denominator, cross-community exposure, safety, awareness, compliance, or verified-status meaning. |
| [S12a `87:8`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-8) | Home Status offers `Home`, `Away`, and `Left affected area` together as inline actions for the reporting adult; no route to S16 or Event-specific check-in. |
| [S12b `87:64`](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=87-64) | The location-needed Home variant retains the same inline adult-profile status control; the inability to map Events does not remove general status. |

## Routes and states to verify

- S12 status selection → record the current adult profile's timestamped status inline on S12; no intermediate destination.
- S13 current Event row → corresponding S14 Event detail.
- S14 source link → external authoritative source placeholder; provider remains unselected.
- S14 Related Event row, only when established → distinct related Event detail.
- S14 `I saw this update` → acknowledgement for the exact eligible update shown.
- S14 `View responses` → provisional S15 view for the same exact update in the selected community.
- S13b `Edit address` → existing address/location correction path.

Check that absence is honest: no related-Event section when no relationship is established; no acknowledgement is rendered as `No acknowledgement recorded`; no mapped Event capability when the saved home lacks a usable coordinate.

## Named deferrals and exclusions

- Pass 2/B owns detailed empty, loading, offline, stale, corrected/retracted, expired/closed, source-unavailable, acknowledgement-success/failure, relation-target-unavailable, and combined consequential states.
- Status confirmation, save failure, staleness, intentional non-sharing, and exact final status taxonomy remain Gate 3 work.
- `Event geographic match basis`, final relevance presentation, Event preview competition/grouping, ordering below evacuation-first, NWS VTEC verification, Protective Action lifecycle identity, and S15 placement remain open.
- Event-Type-specific check-ins are Post-G6 discovery, not MVE1.
- Gate 4 owns provider choice, authoritative relationship/provenance storage, data model, authentication, notification delivery, and security enforcement.
- Excluded: fuzzy or time/geography-based related-Event matching, administrator-created Event links, provider selection, production code, final copy/polish, general social/feed/chat features, verified-safety claims, roadmap completion, and Gate 3 closure.

## Finding and handback format

Number every finding and include: Tier, frame/deep link, canonical reference, evidence, and proposed disposition.

- **Tier 1:** product/safety contradiction, prohibited scope, unapproved capability, collapsed identity/action distinction, privacy/access failure, or falsely approved safety meaning. Blocking.
- **Tier 2:** structural gap, actor/permission ambiguity, dead end, traceability mismatch, missing conditional behavior, or incomplete founder-approved correction.
- **Tier 3:** cosmetic naming, spacing, provisional wording, or polish. Log only during this pass.

Keep these result sections separate:

1. `Independent findings before founder record`
2. `Structural verification matrix`
3. `Founder review comparison`
4. `Already-approved corrections still incomplete`, if any
5. `New questions for John`, only for genuinely unresolved decisions

End with: Tier 1 count; Tier 2 count and questions; Tier 3 log; whether corrected Slice B plus the directly affected S12 structure is ready for John's explicit approval; and any unresolved conflict among the canonical repository, live Figma, Event Matrix working materials, or founder-review record.

## Packet integrity

- Unannotated layout reference: `Slice-B-unannotated-layouts-20260911.pdf`
- Open only after independent findings: `Slice-B-founder-review-record-20260911.pdf`
- Live snapshot: 2026-09-11 after founder dispositions and before Claude's first review
- Founder-review record: exact native Figma comments #47–#56 plus the subsequent explicit dispositions
- S16 is not a missing export: it is intentionally retired and deleted
- No production implementation, provider selection, Slice B approval, task completion, or Gate closure is implied
