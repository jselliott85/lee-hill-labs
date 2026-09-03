# Future Product Ideas — Reference Log

This is an idea/reference log, not a task tracker. Approved future work belongs in `docs/00-master-roadmap.md`.

## Source/Class-Specific Point-Only Fire Radius

- **Concept:** Replace MVE-1's universal point-only fire radius with pre-approved treatment that varies by source and documented record class, allowing different radii—or no point-based notification—when point meaning, accuracy, or source behavior differs.
- **Potential behavior:** Maintain a bounded, evidence-backed rule table keyed only to approved source fields and documented source behavior. The system must not let an operator invent an incident radius during an event. Qualifying source-authoritative geometry still takes precedence whenever available.
- **Product value:** This is a potential product-differentiation or “secret sauce” capability because it can preserve fast point-based coordination while reducing the false equivalence, over-notification, and missed relevance created by one universal circle.
- **Roadmap status:** Deferred beyond MVE-1. John considers this approach superior to the universal radius, but the closed pilot is expected to use too few sources to justify its additional evidence, configuration, testing, and maintenance. Reassess after pilot evidence is available; no implementation date is approved.

## Resident-Confirmed Home Point

- **Concept:** Start with the geocoded saved home address, show the derived location on a map or satellite view, and let the resident move and explicitly confirm the pin at the intended home structure or household reference point.
- **Point meaning and trust state:** Treat the MVE-1 address-derived, resident-accepted point and a later resident-adjusted point as distinct provenance and confidence states. Resident adjustment establishes that the resident selected the intended household reference point; it does not establish a parcel boundary, legal property location, current device position, or safety status.
- **Onboarding behavior:** Make confirmation or adjustment a normal onboarding step when the home address is first saved, and repeat it when the address changes. Do not bury it as a one-time hidden setting. Preserve a later correction path without silently changing prior incident history.
- **Potential behavior:** Keep the normalized postal address distinct from the resident-confirmed coordinate; record the geocoding source, provider quality signal, confirmation actor and state, confirmation time, and change history; re-evaluate incident matches when the confirmed point changes; and provide clear privacy, correction, and deletion behavior without using continuous device location or parcel boundaries.
- **Unconfirmed-point policy:** Future discovery must define whether the existing address-derived point remains active when a resident opens but does not complete movable-pin editing, and how unsaved changes, cancellation, and mapping failures behave. This flow must not introduce an operator or community-administrator verification queue. A wider radius is not an automatic fallback because it changes notification geography and may increase false positives; any such rule requires explicit safety and pilot-evidence approval.
- **Systematic-error learning:** Consider privacy-preserving aggregate analysis of resident correction direction and distance to detect streets, private lanes, or subdivisions that a provider systematically mis-geocodes. Define minimum cohort thresholds, retention, access, and deletion rules so this quality signal does not become a store of individually traceable location-change histories.
- **Product value:** Reduces dependence on automated geocoding accuracy for private lanes, irregular parcels, rural address interpolation, and structures set back from the road while giving the household direct control over the point used for proximity matching.
- **Roadmap status:** Deferred beyond MVE-1 and scheduled only for a Post-G6 discovery review. MVE-1 instead shows the resident one static address-derived neighborhood pin and lets them use it or edit the address; an approximate-but-close point is acceptable under the approved 10-mile rule, no operator verification is required, and a saved address without a usable coordinate leaves only point-based incident notifications unavailable. The exact mapping/geocoding service and storage terms remain a Gate 4 decision.

## Admin-Uploaded Preparedness Resources

- **Concept:** Instead of the app building or maintaining a structured preparedness-checklist feature, let community admins upload reference documents (official checklists, evacuation guides, local resource lists) to a shared file space within the app.
- **Potential behavior:** Admin-managed file/document upload and storage tied to a group; members can browse/download, but the app does not track per-item completion state, generate reminders, or treat uploaded content as app-verified guidance.
- **Roadmap status:** Post-MVE-1 / post-MVP idea, pending user feedback. Not approved for any current scope. The structured preparedness-checklist flow (item status tracking, readiness counter) is removed from MVE-1/MVP entirely — see `docs/04-decision-log.md`, 2026-08-04.

## Everyday Tasks / Local Marketplace

- **Concept:** A standing, browsable catalog of household-owned equipment available to borrow (ladders, chainsaws, wood splitters, air compressors, shop vacs, snow blowers, etc.), distinct from the ephemeral Offer Post "I have X" mechanic. Also covers requesting neighbor help for everyday projects (e.g., fire-mitigation yard/tree work), not just emergency-adjacent needs.
- **Potential behavior:** Members inventory items as "available to borrow"; other members browse and request. No money, ratings, vendors, or rankings — must be reconciled against the existing "no marketplace" Safety+QA invariant before implementation to confirm that invariant is about monetization/ranking mechanics, not this non-monetary peer-lending shape. Explicitly excludes expertise/referral requests (e.g., "does anyone have a good roofer") — that shape duplicates a public forum and is out of scope.
- **Roadmap status:** Top-priority post-MVE-1 backlog concept — founder wants this first in line after MVE-1, pending Gate 3 slice/naming definition. Default plan: build and ship after MVE-1 pilot findings land, not mid-pilot, to keep the pilot's signal attributable to the core coordination model. Reassess pulling it into the same build/pilot cycle only if the G5 build runs 2-3+ weeks ahead of schedule — the pilot's start date is fixed by the 2026-12-21–2027-01-02 holiday blackout regardless of build speed, so early slack could be used to build (not necessarily launch mid-pilot) this feature before pilot kickoff. Not approved for MVE-1 scope. See `docs/04-decision-log.md` and `docs/functionality-decision-log.md`, both 2026-08-06.

## Home / Room Mapping

- **Concept:** Mapping a household's physical layout ("room counting" or similar). This is distinct from sourced incident context; the formerly proposed community hazard/route map is not an MVE-1 requirement.
- **Potential behavior:** Not defined — flagged as a possible nice-to-have, not scoped.
- **Roadmap status:** Excluded from MVE-1/MVP scope entirely. Possible post-MVP idea only. See `docs/04-decision-log.md`, 2026-08-06.

## Community Incident and Member Map

- **Concept:** An optional map surface, located on or accessible from the home screen, that could show selected trusted-group members or households together with clearly sourced active incidents and incident boundaries.
- **Potential behavior:** Display member or household locations only through an explicit, revocable sharing model with clear audience, precision, purpose, freshness, and expiration controls. Incident points, polygons, zones, or boundaries must preserve source attribution, timestamp, information state, and limitations and must not be presented as LHL-authored safety direction. Whether the map shows saved household locations, temporary self-reported locations, or any live device location is unresolved; MVE-1's saved-address-only incident matching and no-device-location fallback remain unchanged.
- **Discovery constraints:** Future work must separately evaluate resident safety and stalking/abuse risks, consent and visibility permissions, stale or misleading member positions, incident-data licensing and update/closure behavior, geographic accuracy, offline behavior, and whether combining people and hazards creates false precision or implies recommended routes or actions.
- **Roadmap status:** Post-G6 discovery idea only. Not approved for MVE-1 or current MVP scope and does not restore the removed MVE-1 community hazard/route map. Scheduling review is at the G6 go/no-go milestone.

## Structured Resident Incident Reporting

- **Concept:** Allow an approved trusted-group member to submit a structured, source-labeled observation such as visible smoke, flooding, a blocked road, or another possible incident, optionally with a photo or video, without creating a general chat or neighborhood forum.
- **Potential behavior:** Use constrained incident categories, location and observation-time fields, explicit `resident reported` labeling, optional evidence, correction/retraction controls, freshness/expiry treatment, and clear separation from authoritative sourced incident records. The experience must direct residents to contact 911 or the appropriate authority first when emergency reporting is needed and must never imply that submitting to LHL reports an emergency to officials.
- **Discovery constraints:** Future work must evaluate false or malicious reports, duplicate observations, verification and corroboration, privacy and bystander/location exposure, moderation and operator responsibilities, evidence retention, legal/liability language, notification eligibility, and whether a resident report may ever be promoted or linked to an authoritative incident. No resident report alone may generate an MVE-1 incident push.
- **Roadmap status:** Post-G6 discovery only. Explicitly excluded from MVE-1 because adding a new incident-ingestion and trust workflow would materially expand the Gate 1 scope.

## Historical Incident Log

- **Concept:** A user-visible history of sourced incidents that previously matched the resident's saved property address, including material updates and the source-reported closure, cancellation, expiry, or last-known stale state.
- **Potential behavior:** Provide a recent/history view with source attribution, event identifiers, timestamps, geographic relevance, material updates, and the final available information state without rewriting stale or unresolved incidents as closed. Retention duration, dismissal behavior, search/filtering, and whether community activity or household signals appear in history are unresolved.
- **Discovery constraints:** Future work must address source retention and licensing terms, correction/retraction propagation, privacy and household-association history, deletion and retention policy, stale unresolved events, storage/offline behavior, and avoiding the appearance of an authoritative permanent incident archive.
- **Roadmap status:** Post-G6 discovery only. MVE-1 may age inactive or stale information out of the prominent current view, but a user-visible historical log is not approved for MVE-1 or current MVP scope.

## Claim Reminder Nudge — Superseded 2026-09-01

- **Historical concept:** A "did you complete this task?" notification after some time has passed since claiming, distinct from automatic closure.
- **Superseding decision:** On 2026-09-01 John approved a bounded MVE-1 principle: LHL may remind the original requester that a Claimed request remains open and ask them to close it or keep it open; LHL never closes automatically. Exact timing and push versus in-app delivery remain Gate 3 testing decisions.
- **Roadmap status:** The standalone Post-G6 scheduling task is Superseded and archived. The bounded reminder now belongs to active G3 task `Finish approved user flows and low-fidelity screens`. See the 2026-09-01 entries in `docs/04-decision-log.md` and `docs/functionality-decision-log.md`.

## Urgent Request Push Notifications

- **Concept:** Allow a member creating a community request to mark it `Urgent`, distinguishing a device-notifying request from requests delivered silently inside the app.
- **Potential behavior:** The author selects urgency during request creation; an urgent request may generate a device notification while an ordinary request remains in-app only. Future design must define `Urgent`, explain it in plain language, prevent lifecycle labels from setting urgency automatically, and determine rate limits, correction, and misuse handling.
- **Administrator boundary:** MVE-1 administrators only approve or deny membership and have no content-moderation or in-app direct-message role. Any future community-manager responsibility for addressing misuse is a separate role and operating decision; it may be handled outside the app unless future scope explicitly adds supporting tools.
- **Roadmap status:** Deferred post-MVE-1. Not approved for MVE-1 scope. In MVE-1, all newly created requests and offers are delivered silently inside the app regardless of lifecycle phase.

## Administrator Member Removal and Community Moderation

- **Concept:** Allow a trusted-group administrator to remove or suspend an existing member after admission, with any later content/message moderation designed as a separate capability.
- **Potential behavior:** Revoke group membership and associated access, preserve an appropriate audit record, notify the affected member where safe, and define what happens to prior requests, offers, and private-thread access. Content reporting or moderation is not implied by member removal and requires its own scope decision.
- **Roadmap status:** Deferred post-MVE-1. The Boulder Heights pilot uses John as the administrator with approve/deny join requests only; a manual operator-level access-revocation safeguard must exist before pilot access is issued. See `docs/04-decision-log.md`, 2026-08-06.

## Community Invitation and Access-Code Management

- **Concept:** Let community administrators create, rotate, expire, revoke, and monitor one or more invitation/access codes rather than relying on a single preconfigured pilot code.
- **Potential behavior:** Code-specific expiry, usage limits, invitation attribution, multiple active codes, rotation after suspected exposure, and basic invitation analytics. A code remains only a way to request membership and never grants group access without approval.
- **Roadmap status:** Deferred post-MVE-1. The Boulder Heights pilot uses one preconfigured code plus John-administered approve/deny membership review. Exact code security belongs to the Gate 4 authentication decision.

## Multiple Trusted Groups and Group Creation

- **Concept:** Allow a resident to create or join more than one trusted community and switch among group contexts.
- **Potential behavior:** Group creation, multiple memberships, group switcher, group-scoped household visibility, notification routing, and clear separation of requests, offers, and status information across communities.
- **Roadmap status:** Deferred post-MVE-1. MVE-1 supports Boulder Heights as the participant's only trusted group.

## Low-Bandwidth / Satellite Data Mode

- **Concept:** Provide adaptive low-bandwidth states or, where platform capabilities allow, satellite-compatible connectivity support.
- **Potential behavior:** Strip heavy vector assets and reduce telemetry to text/minimal updates when connectivity is constrained.
- **Roadmap status:** Post-MVP backlog item in the canonical master roadmap. No provider, technical approach, or implementation scope is approved.
