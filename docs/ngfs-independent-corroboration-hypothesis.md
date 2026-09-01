# NGFS Independent-Corroboration Hypothesis

## Status and boundary

This is a founder-proposed research hypothesis for later testing and consideration. It is not an approved notification rule, source role, technical architecture, or implementation commitment.

Gate 2 remains closed. NOAA's Next Generation Fire System (NGFS) remains `Additional Information Only`, a research-only `Candidate`, and `Notification Eligibility: No`. WFIGS/IRWIN remains the approved bounded MVE-1 wildfire path under its existing controls. New evidence may be evaluated prospectively without reopening Gate 2.

## Problem being tested

NGFS may detect a possible fire-related heat signal before IRWIN creates a corresponding incident record, but the sampled product is experimental and does not by itself establish a confirmed incident-command record. Its thermal-pixel polygons are not fire perimeters, and its authorization, durable identity, lifecycle, archive, correction, withdrawal, and split/merge semantics remain unresolved.

The proposed question is whether NGFS can contribute useful early detection without being treated as an independently authoritative incident source.

## Proposed source roles

- **Detection source:** Produces an early signal that may begin internal candidate matching and monitoring but cannot qualify a participant notification alone. NGFS is being considered only for this role.
- **Verification source:** Independently establishes that a real incident exists and meets separately approved authorization, attribution, reliability, timestamp, identity, correction, lifecycle, and access requirements.
- **Authoritative source:** May qualify an incident through its own approved event/source rule without requiring NGFS corroboration. WFIGS/IRWIN already holds this bounded role for MVE-1 when all approved gates pass.
- **Context source:** Adds attributed information but does not help qualify the initial participant notification.

These roles describe a hypothesis to test; they do not approve any new source classification.

## Independent-corroboration hypothesis

An NGFS detection might contribute to an earlier notification path only if a genuinely independent, authorized, verification-eligible source confirms a sufficiently close event before IRWIN would independently qualify the same notification.

NGFS never qualifies a participant notification by itself under this hypothesis. Geographic relevance remains a separate gate and must independently pass an approved rule.

Using WFIGS/IRWIN as the second source may validate or add confidence to an NGFS detection, but it does not improve participant-notification timing because WFIGS/IRWIN can already qualify the bounded MVE-1 notification on its own. The timing hypothesis becomes materially useful only if an authorized and reliable verification source can confirm the event before IRWIN appears.

## Meaning of independence

Different publication names, websites, APIs, or vendors do not automatically constitute independent sources. Independence must be evaluated at the underlying evidence and provenance level.

A candidate verifier does not count as independent when it merely republishes, reformats, or summarizes the same NGFS observation or the same upstream incident record. Two satellite products observing the same signal may provide useful corroboration but do not necessarily constitute incident verification. Likewise, WFIGS and another surface derived from the same IRWIN record remain one underlying incident source for this purpose.

Later testing must document each source's upstream origin, observation or reporting method, transformation chain, and dependence on the other source before counting it as independent.

## Candidate test logic

The following is a research model, not production logic:

1. LHL observes a new NGFS detection through an authorized and healthy access path.
2. LHL stores the source-authored observation time and its own `first_seen_at`, but communicates nothing to participants from NGFS alone.
3. LHL looks for a separately authorized, verification-eligible source whose record can be matched under pre-approved time, location, identity, and classification rules.
4. The candidate match fails closed when provenance is dependent, access is unhealthy, either record is stale, the location or time relationship is ambiguous, the sources conflict, or correction/withdrawal state is unresolved.
5. A future participant notification could be considered only after both the combined source rule and the existing independent geographic gate pass.
6. LHL records the verification time, match basis, notification-decision time, later IRWIN appearance, and every correction or withdrawal needed to evaluate the hypothesis.

No operator should improvise a match during a live event. Any test must use a bounded, pre-approved rule set.

## Freshness and feed-health questions

The combined path requires the same fail-closed freshness discipline as the approved WFIGS/IRWIN path, but it must not inherit the exact 30/15/60 durations without evidence. Source-specific testing must determine:

- the maximum acceptable age of the NGFS observation;
- the maximum interval since LHL's last successful NGFS query;
- the maximum acceptable age of the verification record;
- the maximum interval since LHL's last successful verifier query;
- the allowed time separation between the two source-authored observations or reports;
- the allowed location separation and the spatial meaning of each geometry;
- the maximum processing delay after verification before a combined-path decision;
- when mutable fields are too old to present as current or use for escalation; and
- how corrections, withdrawals, disappearance, contradictions, split/merge behavior, and later authoritative records affect the match.

Source-authored observation, creation, publication, and modification times must remain distinct from LHL `first_seen_at` values. Testing must identify which clock governs each rule rather than using the time LHL happened to notice a record as a substitute.

## Evidence to collect

- Written authorization for every proposed access, storage, transformation, attribution, and participant-facing use.
- Documented source provenance and independence.
- A Colorado sample containing true matches, false or ambiguous matches, missed incidents, non-fire heat detections, corrections, withdrawals, and split/merge cases where available.
- Detection-to-verification, verification-to-IRWIN, and detection-to-IRWIN timing distributions.
- Precision and recall or equivalent plain-language counts: how often the pair correctly identified real incidents, produced false candidates, and missed relevant incidents.
- Feed availability, polling behavior, source timestamp semantics, schema stability, rate limits, and archive/retention behavior.
- Evidence that a deterministic matching rule can operate without human incident interpretation during a live event.

## Success, failure, and decision outcomes

Testing should determine whether the combined path produces a meaningful, reliable timing improvement over waiting for WFIGS/IRWIN while remaining understandable, authorized, attributable, and fail-closed.

Possible later outcomes include:

- retain NGFS for internal research or corroboration only;
- approve NGFS only as an internal candidate detector with no participant-notification role;
- propose a bounded combined-source notification rule for separate founder review; or
- reject the combined path because it is not sufficiently early, independent, reliable, maintainable, or authorized.

No threshold, source pair, or outcome is approved in advance. John remains the decision-maker for any later source-role or notification-policy change.

## Relationship to approved work

- `docs/04-decision-log.md` controls the approved WFIGS/IRWIN MVE-1 role and Gate 2 closure.
- `docs/03-mvp-requirements.md` controls the independent source/record and geographic notification gates.
- `docs/ngfs-noaa-fire-weather-testbed-outreach-notes.md` controls the current NGFS authorization, semantics, and relationship questions.
- `docs/00-master-roadmap.md` contains the non-blocking task reminder for later testing and founder review.
