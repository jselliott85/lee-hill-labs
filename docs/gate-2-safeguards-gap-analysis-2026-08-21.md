# Gate 2 Safeguards Gap Analysis — 2026-08-21

## Status and authority

This is the durable carryover record from John and Claude's 2026-08-21 review of:

- [Boulder Heights Closed-Pilot Participation and Risk Acknowledgment](https://docs.google.com/document/d/1k_UcGXS0XMyXuxss7NqU4nz_5m7aRubW6AudPsf1FOg/edit)
- [Gate 2 Internal Liability and Safeguards Position](https://docs.google.com/document/d/1OSMVwtZSda1YOjDfipMuOqRk8VPGShrvaJLzAKnSKZ0/edit)

John's inline comments were read directly and reconciled into the canonical repository documents. John then explicitly approved completing the two roadmap tasks. This record preserves implementation and pre-pilot gaps that remain after the Gate 2 documents themselves were approved.

## Founder resolutions applied

- **No approved app-level 911 action:** whether MVE-1 includes a `Call 911` action remains a Gate 3 decision. Current participant guidance is the general instruction to move to safety and call 911 immediately when a participant believes they are in danger. If a later decision includes an action, the Gate 2 document provides conditional native-handoff safeguards.
- **Simple founder-controlled suspension:** John may suspend the pilot using CEO/pilot-owner judgment without quantified thresholds. The required outcome is a single authenticated action that presents a participant-facing `PILOT SUSPENDED` takeover, suppresses new participant notifications and drill content, and preserves only minimum backend processing/logging needed for audit.
- **Local-first data intent:** the pilot should avoid a centralized participant-data warehouse and keep participant information on-device where practical. This is not an approved zero-backend architecture or provider decision.
- **Pilot contact:** `john@leehilllabs.com` is the confirmed participant contact. A backup contact remains required before participant use.

## Gate 3 carryover

- Decide whether an app-level `Call 911` action exists. Do not design or test it as approved scope until that founder decision is recorded.
- Preserve the approved one-day default and early-revocation product rule while specifying participant-facing behavior that is honest about what the eventual architecture can enforce.
- Make the enrolling adult's responsibility for household-member information and consent legible in the final privacy and permission experience.
- Treat the safeguards document's request, offer, group-visibility, and sharing references as constraints on already approved functional boundaries, not as substitutes for Gate 3 interaction and permission design.

## Gate 4 carryover

- Reconcile local-first participant storage with the likely minimum server-side processing needed for scheduled external-source polling, APNs/FCM fan-out, operator suspension, and audit logging.
- Select an access-control design that can actually expire or revoke helper access. Pure device-to-device copying cannot retract data already copied to another phone.
- Approve on-device protection for sensitive household data, including platform secure storage, encryption at rest, authentication, and app-access controls.
- Define exactly what is stored locally and centrally; data categories; retention and post-pilot deletion; access/correction/deletion behavior; and the privacy notice that explains it.
- If Gate 3 approves a `Call 911` action, select and test the deliberate native handoff without automatic calling, LHL intermediation, or claims that emergency services or location data were reached.

## Gate 6 and pre-pilot carryover

- Name one alternate suspension authority and give that alternate at least one plain-language condition for acting without first reaching John.
- Test that suspension blocks new participant-facing notifications and drill content while audit-only backend logging continues; suspension must never mean the backend continues notifying participants.
- Confirm a backup participant contact.
- Convert insurance and corporate risk controls from a counsel-review question into an owned, dated pre-pilot roadmap task. The EOD reconciliation does not invent that owner or schedule without a separate founder scheduling decision.
- Obtain counsel review of the participant acknowledgment, internal safeguards position, electronic acceptance, privacy approach, insurance, and any release or limitation language. Formal counsel sign-off remains required before public release.

## Unchanged source and legal boundaries

- WildWeb remains pending and unavailable for MVE-1 unless written permission and lifecycle semantics are obtained. It does not block Gate 2 closure.
- Cara's post-incorporation questions remain a separate Ops/legal thread and do not block Gate 2.
- The approved WFIGS/IRWIN bounded proof-of-concept role and corrected 30/15/60 controls remain unchanged.
- Gate 2 is not closed by this document-task completion. External-feed feasibility remains In Progress, and Gate 2 closure still requires John's explicit gate-closure confirmation.
