# Gate 2 Internal Liability and Safeguards Position

> **Status: Founder-approved 2026-08-21.** This is the controlling internal product and pilot-operating position for Gate 2. It is not legal advice, counsel approval, a public-release authorization, or participant-facing terms. Counsel review remains required before public release.

## Purpose and scope

This position governs automated hazard and evacuation-status notifications in the closed, personal-invitation Boulder Heights MVE-1 pilot. It constrains Gate 3 design, Gate 4 architecture, Gate 5 implementation, and Gate 6 pilot operations.

MVE-1 is an experimental coordination aid. It may display attributable incident information associated with a participant's operator-verified saved-home point and may help trusted neighbors coordinate household status and practical assistance. It is not an emergency authority, a public-safety answering point, a dispatch service, a comprehensive incident-monitoring service, or a substitute for 911, official alerts, or instructions from public authorities.

## Founder position

Lee Hill Labs may proceed toward the closed pilot while counsel review continues only if every safeguard in this document is carried into the applicable design, technical, and pilot plans. This position does not authorize public release.

Participants must never be expected to rely on LHL to learn about, verify, report, interpret, or respond to an emergency. A notification may be delayed, incomplete, duplicated, corrected, stale, or absent because of source, network, device, software, polling, permission, or human failure. No notification means only that LHL has no qualifying notification to present; it does not mean that no incident exists or that a place is safe.

Official alerts and instructions always control. In an emergency, a participant should move to safety and call 911 when able. LHL activity and pilot feedback are secondary.

## Required participant-facing disclosures

The following ideas must be presented in calm, plain language:

- during enrollment, before incident notifications are enabled;
- in the participant acknowledgment;
- persistently or through an immediately available explanation on incident details;
- whenever information is stale, unavailable, corrected, retracted, or simulated; and
- in any manual pilot-suspension message.

The disclosure must state that:

- LHL is experimental and supplements rather than replaces official information;
- LHL does not monitor every incident or guarantee any notification, update, delivery time, or coverage;
- participants must use official channels and follow public-authority instructions;
- a displayed distance is proximity to source-published geography, not a fire boundary, threat area, evacuation zone, route, or declaration of safety;
- household presence, incident check-in, acknowledgement, requests, and offers are participant-reported or participant-entered unless explicitly labeled as sourced information;
- a missing acknowledgement is not proof that someone is unaware, and a household check-in is not a verified declaration of safety; and
- submitting information or contacting a neighbor through LHL does not contact 911 or report an emergency to authorities.

## 911 behavior and conditional native action

No app-level `Call 911` action is approved for MVE-1. Gate 3 must decide whether one belongs in the product at all. The controlling participant instruction is simpler: if a participant believes they are in danger or has an emergency, move to safety and call 911 immediately rather than waiting for or using LHL.

If a later founder decision includes a `Call 911` action, it must:

- require a deliberate participant tap and a native device confirmation or call action;
- hand off to the device's native phone capability with `911` as the intended number;
- never place a call automatically or in the background;
- never claim that a call connected, that emergency services were notified, or that the participant's identity, saved address, device location, or incident context was transmitted;
- not make LHL an intermediary in the call; and
- leave the participant able to dismiss the action and use any other appropriate emergency-contact method.

No `Text 911` action is approved. The National 911 Program advises calling 911 when possible and texting only when a voice call cannot be made; text-to-911 availability varies. LHL's separately approved member-profile `Call` and `Text` actions contact the selected trusted-group member through native applications and must never be visually or verbally confused with contacting 911.

## Claims LHL must never make or imply

LHL must never state or imply that it:

- is an emergency authority, 911 service, dispatch center, incident commander, evacuation authority, or official warning provider;
- continuously or comprehensively monitors hazards, official alerts, a participant, a household, or a property;
- detects every incident or guarantees timely, accurate, complete, uninterrupted, or delivered notifications;
- has verified that a person, household, property, route, or area is safe or unsafe;
- determines a fire perimeter, spread direction, evacuation boundary, protective-action area, or recommended route from a point-only record;
- reports an emergency to authorities when a participant opens, acknowledges, shares, requests, calls, texts, or checks in through LHL;
- confirms that a participant saw, understood, or acted on an update merely because an acknowledgement was recorded;
- guarantees that a neighbor will respond, that offered help is safe or suitable, or that native calls or texts will be delivered; or
- has legal permission to poll, store, or redistribute a source whose access and data-use terms remain unresolved.

Marketing, onboarding, notifications, empty states, error states, source labels, test content, support messages, and operator communications must follow these boundaries—not only formal terms.

## Source and notification safeguards

- Only founder-approved event/source combinations in the Gate 2 eligibility matrix may generate push notifications. Unknown and unmapped combinations default to no push.
- WFIGS/IRWIN is limited to the approved bounded MVE-1 proof-of-concept role and corrected 30/15/60 controls. This is not approval of the eventual public-production warning architecture.
- Source-authoritative incident-linked polygons, zones, perimeters, or address designations take precedence. The point-only fallback applies only to an operator-verified saved-home point within the approved inclusive 10-mile rule.
- A stable source or upstream incident identifier is mandatory. LHL does not invent a fuzzy identity for point-based notification.
- Every incident view identifies the source and applicable timestamp and provides a source link when one is available and permitted.
- Source failure, stale data, unresolved identity, unresolved geography, inadequate permission, or an unapproved combination fails closed to no push. The interface explains unavailable or stale information without suggesting safety.
- Corrections, retractions, cancellations, closures, and material updates use the matrix-approved behavior. LHL does not independently declare an incident resolved.
- WildWeb remains unavailable for MVE-1 notification use unless written permission and adequate lifecycle semantics are obtained. Its unresolved response does not delay Gate 2 closure.

## Live-incident and pull-the-plug safeguards

John Elliott, as LHL CEO and Boulder Heights pilot owner/administrator, holds the decision to continue, suspend, or terminate pilot operation during a live incident. A real eligible incident does not automatically suspend the pilot, but participants are never required to use or evaluate LHL during it.

Before participant access, the Gate 6 pilot plan must define and test an easy manual `PULL THE PLUG` procedure that includes:

1. a single authenticated action available to John; the exact trigger may be an operator control, email, text, or equivalent mechanism selected at Gate 4;
2. no requirement that John quantify or satisfy objective thresholds before exercising his CEO/pilot-owner judgment;
3. one pre-designated alternate with the access and authority needed to suspend the pilot if John is unavailable or affected, plus at least one plain-language condition that lets the alternate act without first reaching John;
4. an immediate full-screen or equivalent participant-facing `PILOT SUSPENDED` state that directs participants to official public instructions and 911 for emergencies and does not imply that the underlying incident is over;
5. suppression of new participant-facing LHL incident notifications and active drill content while suspended;
6. continuation only of the minimum backend processing and logging needed to preserve source, notification-decision, operator-action, and participant-message evidence for audit under the approved privacy and retention rules—never continued participant notification;
7. no interference with participants' access to official information or native phone functions; and
8. an explicit founder decision and documented safety check before restart. Automatic restart is prohibited.

Planned simulation content must be unmistakably labeled `TEST`, `DRILL`, or `SIMULATION`; must not imitate an official directive; and must end immediately if it could be confused with a real event or if a real emergency or materially unsafe condition makes continued testing inappropriate.

## Privacy and access safeguards

- Collect only information needed for the approved pilot purpose and explain that purpose at collection.
- Obtain clear, affirmative, purpose-specific consent before collecting sensitive assistance information or sharing it with another participant.
- Require an enrolling adult to confirm that they are authorized to provide any information about other members of their household and have obtained any permission reasonably required from those people.
- Keep sensitive household assistance information private by default. Share it only with the requester and the authorized helper after a deliberate grant, using the approved one-day default and allowing early revocation.
- Treat expiration or revocation as removal of access, not deletion of the stored profile information.
- Do not sell participant data, use it for targeted advertising, or reuse it for an unrelated purpose.
- Limit group-visible information to the approved Boulder Heights context and distinguish sourced, self-reported, stale, missing, and intentionally unshared states.
- Preserve a local-first intent and avoid a centralized participant-data warehouse. This is not a zero-backend decision: Gate 4 must determine the minimum server-side processing required for reliable source polling, APNs/FCM fan-out, enforceable expiring/revocable access, operator suspension, and audit logging.
- Do not represent time-bounded sharing as technically enforceable until Gate 4 selects an access-control design that prevents continued authorized access after expiry or revocation. Pure device-to-device copying is insufficient for that promise once data has been copied to another phone.
- Protect locally stored sensitive information with the approved platform secure-storage, encryption-at-rest, authentication, and app-access controls selected at Gate 4.
- Delete centrally stored pilot participant data after documented pilot closeout unless a specific minimum record must temporarily be retained for security, incident review, legal obligations, or pilot integrity. The final privacy notice must identify the categories, reasons, and retention periods before enrollment.
- Before enrollment, provide the pilot privacy notice specifying data categories, purpose, visibility, operator access, retention, correction, deletion, withdrawal handling, security practices, and contact method. Gate 3 and Gate 4 must approve the exact rules and enforcement before data collection begins.
- Provide a manual operator-level membership revocation path before pilot access for mistaken admission, participant withdrawal, or a safety/privacy concern.

The one-day default, request-specific sharing boundary, and approved Boulder Heights group scope are existing functional constraints. Their inclusion here identifies safeguards those features must satisfy; it does not choose the Gate 3 interaction design or Gate 4 implementation.

## Conditions before participant access

The closed pilot may not issue participant credentials until all of the following are verified:

- founder-approved participant acknowledgment and privacy notice are versioned and presented for affirmative acceptance;
- the approved source matrix and fail-closed controls are implemented and tested;
- Gate 3 has explicitly decided whether an app-level `Call 911` action exists and, if included, its deliberate native handoff and non-transmission disclosure are tested on supported iOS and Android pilot devices;
- Gate 4 has reconciled local-first participant storage with the minimum backend needed for source polling, push delivery, access expiry/revocation, suspension, and audit, and has approved on-device protection for sensitive information;
- the pull-the-plug procedure and alternate authority are documented and rehearsed;
- notification, stale-data, correction, simulation, and suspension states pass Gate 3 acceptance criteria and Gate 5 validation;
- operator-level participant access revocation is available and tested; and
- unresolved counsel questions and any changes received from counsel are logged and evaluated before the pilot, with formal counsel sign-off still required before any public release.

## Counsel-review questions

Counsel should review, at minimum:

- whether the closed-pilot acknowledgment should include any release, assumption-of-risk, limitation-of-liability, indemnity, dispute-resolution, or governing-law terms;
- the legal effect and presentation of electronic acceptance;
- Colorado and other applicable privacy, consumer-protection, emergency-communications, accessibility, and record-retention requirements;
- whether the planned data categories or incident notifications create additional duties;
- adequacy of insurance and corporate risk controls; and
- whether the internal safeguards position is sufficient before the closed pilot begins.

## Reference basis

- [National 911 Program — Frequently Asked Questions](https://www.911.gov/calling-911/frequently-asked-questions/): call 911 when possible; text-to-911 availability varies.
- [Ready.gov — Alerts](https://www.ready.gov/alerts): official alerting channels provide emergency information from public authorities.
- [Colorado Attorney General — Colorado Privacy Act](https://coag.gov/resources/colorado-privacy-act/): plain disclosures, purpose limitation, data minimization, reasonable security, and affirmative consent for sensitive data are the governing privacy design baseline used here. Applicability and exact legal obligations remain for counsel.
- Approved LHL source research and incident-notification eligibility matrix: source-specific evidence for WFIGS/IRWIN, WildWeb, NWS CAP, Boulder ODM/Everbridge, Watch Duty, InciWeb, and NASA FIRMS.
