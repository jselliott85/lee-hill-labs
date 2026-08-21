# MVP Requirements — LHL App

## Status

MVP scope is being defined. This document records requirements already supported by approved product decisions; it does not authorize unapproved features, vendors, or implementation choices.

## Primary User

An adult resident—whether a homeowner, tenant, or another household member—living in a community exposed to recurring natural, environmental, or human-caused hazards, including wildfires, severe storms, floods, chemical spills, and explosions.

They already receive information through official alerts, weather applications, news, social media, text messages, and phone calls. LHL may surface available hazard information associated with their saved home address, with its source and limitations made clear, but it does not interpret the news or tell users what they should conclude. Its primary role is to provide a dependable way for residents to coordinate with nearby people they trust before, during, and after disruptive events.

During a disruptive event, the user needs to:

- Access available hazard and status information associated with their saved home address without LHL presenting its own interpretation as official guidance.
- Distinguish information requiring immediate action from updates that can be reviewed later.
- Communicate essential household status to trusted community members.
- Determine whether nearby people know what is happening or need assistance.
- Request practical help for themselves, another household member, their property, or a pet—including when away from home.
- Offer and coordinate help without contributing to message overload.
- Review non-urgent community needs without every interaction being framed as an emergency.

The experience must remain understandable under stress and usable by residents with varying levels of technical comfort. It should reduce the number of calls, texts, repeated checks, and competing updates required to coordinate with the community.

**Core user perspective:**

> “I call this community home, and disruptive events are an unavoidable part of living here. I already have apps and alerts telling me that something is happening, but I still need a dependable way to coordinate with nearby people I trust. I start texting and calling to find out who is around, who knows, and who needs help. If I’m away—or a family member, pet, or property needs attention—the uncertainty becomes even more stressful. I need one calm, dependable place to coordinate before, during, and after the event, without every update demanding immediate attention.”

**Primary job to be done:**

> When a disruptive event may affect my household or community, help me access clearly sourced information associated with my saved home address, communicate essential household status, and coordinate practical assistance with trusted nearby people before, during, and after the event—without adding unnecessary noise or cognitive burden.

**Product role:** LHL complements official alerts and information sources by supplying the trusted-community coordination layer. It does not replace emergency authorities, interpret the news for users, determine what users should conclude, or turn every community update into an alert.

## First Test Community

**Boulder Heights** is the working name for the first MVE-1 test community. It represents a broad, intentionally loose geographic area rather than a formally bounded jurisdiction, HOA, fire district, evacuation zone, or official emergency-management unit.

The primary pilot is one closed group of adult residents personally invited by John through existing trusted relationships. Most participants are expected to be homeowners, but property ownership is not an eligibility requirement because MVE-1's coordination mechanics apply equally to homeowners, tenants, and other adult residents. Membership—not a precise geographic boundary—defines the pilot group.

The group will participate in one sustained, six-week live pilot of the complete MVE-1 coordination model. "Live pilot" means real participants use the product over time; it does not mean waiting for or experimenting within an actual emergency. The pilot must exercise ordinary Ready-phase use as well as Alert, Active Incident, and Recovery behavior without depending on a real emergency occurring.

During the same period, LHL may run smaller controlled exercises using clearly identified test profiles and selected real-world incident conditions. These exercises may force specific states or interactions that do not naturally occur in the primary pilot. Simulated profiles, statuses, requests, and events must be clearly distinguishable from real people and real needs and must not create activity that could be mistaken for reports from residents in an affected area.

### Scheduled simulation exercise

During the six-week pilot, LHL intends to conduct one planned, time-bounded live drill in which a fictional disruptive event is introduced to the Boulder Heights participant group. Participants will interact with the app as real users while the event, alerts, profiles, and resulting conditions remain clearly labeled as `TEST`, `DRILL`, or `SIMULATION`. The drill will exercise otherwise infrequent Alert, Active Incident, and Recovery behaviors without waiting for an actual emergency.

The drill's scenario, timing, participant instructions, safety controls, measurements, success thresholds, and stop conditions must be defined in the approved Gate 6 pilot test plan. It must not imitate official instructions in a way that could reasonably be mistaken for a real directive, ask participants to enter unsafe conditions or physically evacuate, or measure whether participants obey LHL as an emergency authority. Participants receive advance notice that a drill will occur; whether its precise timing is disclosed is left to the approved test plan.

### Real-event rule

If an actual emergency, official warning, or materially unsafe condition occurs during the pilot, participant safety and official instructions take absolute priority. Participants are never expected to open, use, test, or provide feedback on LHL during a real event, and any use remains voluntary. A real WFIGS/IRWIN-eligible incident does not automatically suspend the pilot: John, as LHL CEO and the Boulder Heights pilot owner/administrator, has sole authority to suspend or terminate pilot operations. If the pilot continues during a small live incident, participant activity is observation and testing rather than reliance on MVE-1 for emergency warning or response decisions. Before participant access begins, the approved Gate 6 pilot plan and participant terms must define and test an easy manual `PULL THE PLUG` sequence, backup authority if John is unavailable or affected, participant messaging, audit behavior, and restart conditions. LHL must not declare an area safe, direct emergency response, or imply that it is an emergency authority. This rule supersedes the earlier automatic-suspension rule.

## First End-to-End MVE-1 Journey

Before a disruptive event, an adult resident personally invited by John installs the pilot app, creates a resident and household profile, and enters the Boulder Heights community access code. The code submits a pending membership request but grants no group access. John approves the request through a minimal role-gated admin surface, after which the resident joins the private trusted group. The household profile contains a saved home address. Sensitive assistance information is stored as part of their profile, but it remains private unless deliberately shared for a limited period.

When a confirmed external source publishes incident information that can be associated with the resident's saved home address, LHL may notify the resident and display the sourced information with its timestamp and limitations. Opening the app takes the resident to their household context. Broader incident information and trusted-community activity are presented separately; LHL does not place the entire community into one phase or tell the resident what they should conclude.

The resident is away from home and needs help with a household member, pet, or property. They create a practical assistance request within their trusted group. Another member sees and claims the request. Claiming changes the request from Open to Claimed but does not mark it complete.

The requester and helper coordinate in the request's private thread. When necessary, the requester grants the helper access to specific sensitive household instructions for a defined period, using a one-day default. Only the requester and authorized helper can view that information, and access expires automatically.

The helper decides independently whether they can act safely and consistently with official instructions. LHL facilitates coordination but does not direct the helper to enter an affected area or undertake unsafe action. The helper reports the outcome through the request thread.

The original requester confirms that the need has been fulfilled and manually closes the request. Household status remains self-reported rather than inferred from device movement. As sourced conditions and household needs change, each resident continues to see their own household context and relevant community activity without a universal status being assigned to the group.

After immediate conditions have passed, residents may continue coordination through recovery-oriented requests and offers. `Ready`, `Alert`, `Active Incident`, and `Recovery` remain internal working language for organizing the product and test coverage. Whether those labels appear to consumers—and what language replaces them if they do not—is deferred to Gate 3 design and the approved trust-and-tone principles.

## MVE-1 Household Profile Scope

The household profile separates resident-provided source information from system-derived display values. Residents do not author custom display names, household labels, biographies, slogans, or other open-ended identity content.

### Resident-provided source information

- First name and last name are mandatory identity fields. An optional preferred first name may be supplied.
- A phone number and consent to the approved-group Call and Text actions are mandatory for every pilot participant. The profile presents the actions rather than printing the phone number; launching the native phone or messaging application may expose the number to the other member or their device.
- A complete saved home address is mandatory and remains private from ordinary approved-group profile visibility. Address validation and provider selection are Gate 4 implementation decisions.
- Entry instructions are mandatory private household information. Door or gate codes, when applicable, are part of entry instructions rather than a separate profile category.
- Household members relevant to assistance, pets or animals, driveway or physical-access notes, utility-shutoff information, and mobility or other practical assistance needs are optional private fields in MVE-1.
- Homeowner-versus-tenant status, a general biography, a preparedness score, a standing equipment inventory, and a general medical record are not household-profile fields in MVE-1.

### System-derived values

- The community-visible display name is generated as preferred first name, or first name when preferred name is blank, plus the last-name initial. The resident cannot enter a separate custom display name.
- A household label is generated from the saved address as street number plus street name, omitting the road/street type; for example, `25 Palamino`. The resident cannot enter a separate custom household label.
- Call and Text actions are generated from the required phone number, and the administrator badge is generated from the account's role.
- Exact roster layout, ordering, grouping, and placement of the derived household label remain Gate 3 presentation decisions. These decisions do not change the approved source fields or permit custom identity content.

### Deliberate helper sharing

Private household information remains masked until the resident deliberately shares it with the member helping fulfill a household request. The share confirmation begins with all applicable private fields selected; the resident may deselect fields that are unnecessary for the task, except the complete home address. The address is always included in a deliberate helper share.

The grant is limited to the requester and the authorized helper, uses a one-day default, expires automatically, and re-masks the shared information. The resident may revoke an active grant before its scheduled expiry; automatic expiry is the backstop rather than the resident's only privacy control. The product must briefly explain these protections at the point where residents provide and share private information. Expiry or early revocation removes the helper's access; it does not delete the information stored in the resident's profile. Gate 3 defines the interaction and confirmation, and Gate 4 defines secure enforcement.

## Gate 1 MVE-1 Boundary Set

- Every approved adult Boulder Heights member may create structured community requests and offers. Administrator status provides no publishing, alerting, or emergency-communication advantage.
- No private preparedness-task or personal checklist concept remains in MVE-1. Structured preparedness checklists and readiness counters are excluded from MVP; possible administrator-uploaded static community resources remain post-MVP.
- The community hazard/route map is not an MVE-1 requirement. LHL does not maintain evacuation routes, hazard perimeters, or community preparedness guidance. If Gate 2 confirms dependable external incident data, MVE-1 may surface it in a clearly sourced non-map presentation; otherwise that capability is omitted rather than replaced with manually maintained current-safety information.
- Home/room floor-plan mapping remains excluded from MVP.

## MVE-1 Device-Notification Boundary

- Newly created community requests and offers remain visible inside the app and do not generate device notifications, regardless of lifecycle phase. MVE-1 has no author-selected urgency flag; a future urgent-request notification concept is recorded in `docs/future-roadmap-backlog.md`.
- Device notifications are permitted for direct activity involving the participant: another member claims the participant's request; a new message arrives in a private request thread involving the participant; or a material request/access change involving the participant occurs, including request closure or private-information access ending.
- Incident notifications match the participant's saved property address only, with no device-location fallback. MVE-1 converts that address into one Google-derived coordinate point; it does not use a parcel or property-boundary polygon. For the closed Boulder Heights pilot, John or the pilot operator must visually verify each participant's derived point before point-based incident notifications are enabled for that household. A clearly wrong, unresolved, or unverified result fails closed to no point-based push until corrected or verified.
- MVE-1 does not include a resident-adjustable map or satellite pin. A resident-confirmed movable home-point flow is deferred beyond MVE-1. Gate 4 must select the exact Google service and approve API configuration, billing, permitted storage and refresh behavior, attribution, privacy handling, and retained geocoding metadata.
- When a notification-eligible source supplies authoritative affected geography, including a polygon, zone, perimeter, or address-level designation, use that source-defined geography. The approved point-only fallback is an inclusive 10-mile straight-line radius from the source-published incident point to the stored, operator-verified saved-home point. Calculate with full stored precision, display the distance to the nearest whole mile with no decimals, and add no hidden buffer; the published 10-mile rule includes the pilot's chosen tolerance.
- For Gate 2 evaluation, a `point-only fire report` is a source-published fire incident record whose only usable event-linked geography is a single coordinate or representative map point, with no usable incident-linked polygon, zone, perimeter, or address designation. The point does not establish a fire boundary, affected area, spread direction, evacuation area, or threat to nearby properties. This geometry classification is separate from notification eligibility: source, freshness, a stable source or upstream incident identifier, and the approved geographic matching rule must each qualify independently; otherwise the record fails closed to no push. MVE-1 does not invent a fuzzy composite identity for point-based notification.
- Geographic relevance and source/record eligibility are independent notification gates. An address match cannot overcome inadequate source access or permission, reliability, attribution, freshness, identity or deduplication, correction, or lifecycle behavior; source eligibility cannot overcome failure to match the saved address under an approved geographic rule. Both gates must pass before a device notification is eligible.
- MVE-1 uses a tiered fire-geography hierarchy: use qualifying source-authoritative, event-linked geography whenever it is available; when an otherwise eligible fire record is point-only, use the approved inclusive 10-mile universal radius; and send no device notification when either the source/record gate or geographic gate fails. Better qualifying source geometry replaces the temporary radius for subsequent address evaluation. Newly included households receive their first incident notification; previously notified households that become excluded receive a qualified update that is explicitly not an all-clear. Source/class-specific point radii are deferred beyond MVE-1.
- Conflicting point records are resolved programmatically only when they can be confidently linked to the same incident and the pre-approved source hierarchy and record-class rules clearly govern the comparison. Ambiguous identity, correction state, timestamp order, spatial meaning, or hierarchy applicability fails closed for a new point-based push; LHL never averages coordinates.
- Advisories are not evacuation warnings or mandatory evacuation orders. Under the current working rule they remain silent in-app unless an event/source matrix row is separately approved for push.
- Gate 3 starts from programmatic incident-type wording, source attribution, whole-mile displayed distance, the published radius rule, an explicit point-proximity limitation, and an in-app source link. Final copy and UX/UI layout remain Gate 3 work. For the approved WFIGS/IRWIN MVE-1 path, a previously unseen wildfire record is initially notification-eligible only when LHL first detects its stable `IRWINID` through a successful WFIGS query no later than 30 minutes after IRWIN `CreatedOnDateTime`, and every other approved gate passes. LHL stores this first successful observation as `first_seen_at`. `FireDiscoveryDateTime` remains the reported discovery/confirmation time for participant context, audit, and latency analysis; it does not start or disqualify the 30-minute notification clock.
- WFIGS is the MVE-1 public polling surface and IRWIN is its upstream incident source. LHL polls WFIGS on a consistent five-minute interval without depending on the WFIGS refresh phase. WFIGS states that it refreshes from IRWIN every five minutes, so two unsynchronized five-minute cycles imply nominal first detection in less than about ten minutes plus processing after IRWIN record creation; this is an engineering expectation, not a guaranteed service level. More frequent WFIGS polling cannot remove latency that occurs before the IRWIN record is created.
- The WFIGS path fails closed after 15 minutes without a successful query. Mutable incident fields older than 60 minutes from the applicable source modification time retain an honest timestamp but are not presented as current state and do not escalate a notification.
- Sources are not equally eligible to generate notifications. Gate 2 must confirm that a notification-eligible source provides reliable, attributable, machine-readable records with sufficient geography, classification, timestamps, stable event/update identity, and correction/cancellation behavior. Primary authoritative sources are preferred. A secondary source or aggregator may qualify only if it preserves upstream attribution and independently meets approved reliability and access requirements; otherwise it may appear as additional in-app information only. LHL does not adjudicate conflicting agency claims or create its own interpretation.
- Gate 2 must produce a founder-approved, expandable incident-notification eligibility matrix covering every candidate event type exposed by sources evaluated for MVE-1 and the Boulder Heights pilot. For each event/source combination it records push eligibility, silent in-app eligibility, recognized standard and hierarchy, push threshold, geographic matching, update behavior, separate acknowledgement eligibility, source mapping, decision status, and evidence/limitations. Unknown or unmapped combinations default to `Push Eligible: No`; a source does not define LHL policy merely because it offers a feed.
- No app-defined quiet hours, bundling, or rate limits ship in MVE-1; device settings govern quiet behavior. MVE-1 includes one in-app control to disable all LHL notifications. These defaults and notification volume must be tested during the pilot.
- If relevance, source authority, freshness, classification, or matrix eligibility cannot be established, no incident notification is sent.
- Lock-screen notifications contain no personally identifiable information or sensitive request/household information. Request-related notices use generic language; exact copy belongs to Gate 3.
- Drill notifications must be unmistakable as tests. `THIS IS A TEST ONLY` and `For app research purposes only, this is not an active emergency` are the Gate 3/Gate 6 baseline, subject to final UX and pilot-plan approval.
- LHL is not designed to be the first incident-alert source. Incident notifications repeat clearly sourced information to open the collaboration context, must not imply that LHL originated or independently verified the alert, and must state that LHL does not replace official alerts.
- Corrections, cancellations, expirations, and authoritative boundary changes update the in-app event record. Gates 2 and 3 determine which also warrant a follow-up notification. LHL repeats the source's status and never independently declares an area safe.
- Incident acknowledgement belongs to the source-defined event, not each notification, and may use a higher eligibility threshold than notification delivery. Exact eligibility and reset behavior belong to Gate 3.
- Exact event classifications, source mappings, duplicate suppression, update identity, correction/retraction behavior, and follow-up-notification rules are completed through the Gate 2 matrix before Gate 3 notification design. Gate 4 selects the delivery architecture; LHL never guarantees delivery.

## Trust and Tone Principles

These principles govern product language, information hierarchy, and interaction design. They do not prescribe final consumer copy, which Gate 3 must design and test.

- **Coordinate; do not command.** LHL helps trusted people coordinate but never directs emergency behavior, tells a helper to enter an affected area, or implies authority over official instructions.
- **Source; do not interpret.** Show the source, timestamp, coverage, and limitations of incident information without telling residents what to conclude or presenting LHL's interpretation as official guidance.
- **Describe relevance carefully.** Associate sourced information with a saved home address without claiming certainty, verification, or geographic precision the source cannot support.
- **Reserve urgency.** Interrupt only for genuinely time-sensitive incident or direct-coordination events approved under the MVE-1 notification boundary. Quieter activity remains available without demanding attention.
- **Use calm, plain language.** Prefer short factual statements, explicit timestamps, and clear actions over dramatic, speculative, emotionally loaded, or engagement-oriented language.
- **Distinguish every information state.** Official or clearly sourced information, resident-reported information, missing information, stale information, intentionally unshared information, and simulated content must never appear equivalent.
- **Make privacy deliberate and legible.** Explain why information is requested, the future user benefit it enables, what is shared, with whom, for how long, and when access ends. Do not imply that masked information was deleted when access merely expired or was revoked.
- **Put safety and official instructions first.** Never imply that app participation, helping a neighbor, completing a request, or supporting a pilot takes priority over personal safety or official direction.
- **Avoid social pressure and engagement mechanics.** Do not use streaks, popularity signals, reactions, public rankings, shame, or language that pressures residents to report, respond, help, or remain active in the app.

The founder-provided communication-saturation whitepaper is one perspective supporting discussion of reserved urgency, calm hierarchy, and reduced cognitive load. It is not proof of a universal or precisely measurable `Saturation Parameter`, and its claims must not be presented as settled scientific fact without stronger evidence. Its proposals for continuous coordinate tracking, mesh networking, automated cross-municipal synchronization, and sensor integration are not approved MVE-1 scope.

## Approved MVP Constraints

- The product must support the four resilience phases: Ready, Alert, Active Incident, and Recovery.
- Ready, Alert, Active Incident, and Recovery are internal working language for MVE-1 planning and test coverage; consumer-facing lifecycle labels and presentation remain TBD until Gate 3 design.
- MVE-1 is the first validation slice inside MVP scope, not a post-MVP expansion.
- MVE-1 must validate the approved lifecycle flows: phase change, community request, offer post, Active Incident regression, and Recovery request.
- Sensitive household information must use time-bounded access, expire automatically, and be re-masked after expiry.
- A user whose last successful server handshake is more than five minutes old must be represented as offline to their group.
- A community or Recovery request has exactly three states — Open, Claimed, Closed — with claiming distinct from closing; only the original requester closes a request, and post-claim coordination happens in an inline thread visible only to the requester and the claiming helper. No reminder/nudge mechanic in MVE-1.
- LHL has no general group chat, open-ended direct messaging, neighborhood forum, social feed, or email-list replacement. In-app communication is attached to a concrete coordination object: a structured request or offer is visible to the trusted group, and private conversation is limited to the requester and helper within a claimed request's thread.
- Approved group-member profiles include Call and Text actions that launch the device's native phone or messaging application using the member-provided phone number. A phone number and consent to these actions are mandatory for pilot participation. The profile shows the actions rather than printing the underlying number, although the native application may expose it when an action is used. LHL does not auto-send, capture, synchronize, or guarantee delivery of native calls or texts and makes no claim that carrier or satellite delivery is available. Email actions are excluded from MVE-1; exact consent copy is finalized in Gate 3 data/permission design.
- Offer Post supports an optional Item/Tool vs. Skill/Labor category tag, usable in any phase; no phase-gated flow split.
- New community requests and new offers follow the device-notification boundary above.
- Community hazard/route mapping is excluded from MVE-1, and home/room floor-plan mapping is excluded from MVP.
- Hazard/status location matching is home-address-only in MVE-1; no continuous background location tracking.
- MVE-1 intends to support three distinct, voluntary, time-stamped household signals visible to approved Boulder Heights members: (1) incident acknowledgement tied to a specific sourced update, expressed as an affirmative acknowledgement or `No acknowledgement recorded`—never `Aware`/`Unaware`; (2) self-reported household presence, distinguishing someone home, household away, not shared, and no recent update without geofencing; and (3) a self-reported incident check-in indicating that the household was not in, or has left, the area relevant to the incident, without presenting that statement as a verified declaration of safety. Missing, stale, and intentionally unshared information must remain distinct.
- Incident acknowledgement is provisional MVE-1 scope: Gate 3 must attempt to fit and test it in the household-first wireframes without creating noise or false confidence. It may be removed at Gate 3 through an explicit superseding decision if it cannot meet that bar. Exact consumer wording, prompting behavior, visibility hierarchy, expiry/staleness treatment, and what constitutes a material update requiring renewed acknowledgement are Gate 3 decisions.
- The product opens household-first: available sourced incident information associated with the saved home address is distinct from broader incident context, household-reported status, and trusted-community activity. MVE-1 does not assign one universal hazard status or lifecycle phase to an entire community.
- John serves as the initial Boulder Heights administrator. The MVE-1 administrator role is limited to reviewing and approving or denying join requests. Administrators do not remove existing members in-app, moderate content or messages, set or confirm lifecycle phases, curate an incident narrative, add or validate hazard sources, interpret official information, maintain a transition log, or direct community behavior during an emergency. If pilot access must be revoked, the approved pilot operations plan must provide a manual operator-level safeguard outside the participant-facing MVE-1 feature set.
- Pilot membership onboarding uses three distinct gates: a personal TestFlight or approved Android-testing invitation grants installation access; a preconfigured Boulder Heights community code allows the resident to submit a pending membership request; and John's approval grants trusted-group access. The code alone exposes no group information. MVE-1 includes participant code entry, pending/approved/denied states, and a minimal role-gated admin request list with approve/deny actions. In-app code generation, rotation, expiration, invitation analytics, and general community-code management are deferred.
- MVE-1 supports exactly one trusted community group: Boulder Heights. A pilot participant cannot create, join, switch among, or receive activity from multiple groups.
- The selected authentication/backend approach must provide a protected operator-level way to revoke previously approved access before pilot credentials are issued, even though MVE-1 has no participant-facing member-removal feature.
- Sourced incident context must avoid implying official precision unless the source, coverage, and limitations are clear.
- The app must not require a backend, authentication, notification, or external-data provider until that choice is separately approved and recorded.

## Explicit MVE-1 Deferrals and Exclusions

- Administrator-uploaded preparedness/reference resources are post-MVP; MVE-1 contains no structured preparedness checklist, readiness counter, or private preparedness-task list.
- Everyday Tasks / Local Marketplace, home/room mapping, claim reminder nudges, and member-selected urgent-request notifications are post-MVE-1 concepts.
- Existing-member removal, content moderation, invitation/access-code management, community creation, multi-group membership, group switching, and cross-group routing are deferred beyond MVE-1.
- Low-bandwidth or satellite-specific behavior is post-MVP.
- Community hazard/route mapping is excluded from MVE-1. Gate 2 may establish whether dependable external incident information can be presented in a clearly sourced non-map form; if not, that capability is omitted.
- General group chat, open-ended direct messaging, neighborhood forums, social feeds, and engagement-pressure mechanics are permanent product exclusions rather than deferred features.
- Final consumer lifecycle wording, notification UX and acknowledgement behavior, roster presentation, privacy/consent interactions, and exact status/staleness treatment belong to Gate 3.
- External-source/provider feasibility belongs to Gate 2; backend, authentication, notification-delivery, external-data, offline-storage, and build/delivery provider choices belong to Gate 4; drill execution details belong to Gate 6.

The future concepts above are described in `docs/future-roadmap-backlog.md`. This inventory defines their MVE-1 status but does not approve them for later implementation.

## Definition Needed Before Implementation

- Minimum data model and privacy permissions
- Success criteria, usability checks, and acceptance criteria
- Approved technical architecture and service providers
- Approved user flows, low-fidelity screens, reusable component rules, and required interaction states

## Non-Goals for the Current Planning Stage

- Investor-presentation changes
- Production deployment commitments or launch-date assumptions
- Post-MVP low-bandwidth/satellite enhancements, which remain in `docs/future-roadmap-backlog.md`
- Structured preparedness-checklist feature; a future admin-uploaded-resources concept remains in `docs/future-roadmap-backlog.md`
- General group chat, open-ended direct messaging, neighborhood discussion forum, gossip/email-list behavior, or a Nextdoor-style social feed; this is a permanent product non-goal, not a post-MVE-1 deferral
