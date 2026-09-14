# Future Product Ideas — Reference Log

This is an idea/reference log, not a task tracker. Approved future work belongs in `docs/00-master-roadmap.md`.

## Event-Type-Specific Check-Ins

- **Concept:** Explore an optional future self-report tied to one particular sourced Event, distinct from both the general adult-profile status on Home and the exact-update `I saw this update` acknowledgement.
- **MVE-1 baseline:** Excluded. MVE-1 uses one general adult-profile check-in/status control directly on S12/Home, with inline `Home`, `Away`, and `Evacuated` actions, plus a separate exact-update acknowledgement on eligible Event updates. S16 is deleted; there is no Event-linked check-in step.
- **Discovery constraints:** Determine whether an additional crisis-time step creates enough value to justify its cognitive and interaction cost; whether the available states are common or vary by Event Type; how a report attaches to a stable source lifecycle identity when multiple Events coexist; how it expires, resets, or survives material updates; who can see it; and how it remains distinguishable from acknowledgement and any verified-safety claim. Do not infer a status from location or treat a self-report as authoritative safety information.
- **Roadmap status:** Founder-approved Post-G6 discovery backlog on 2026-09-11. No implementation, date, Event-Type taxonomy, or later inclusion is approved.

## Event-Aware Status and Member Relevance

- **Concept:** One shared future capability for determining whether a sourced Event affects a particular saved home. Evaluate three dependent treatments together: showing `Evacuated` only when an Event is active/relevant, showing a member's Event relevance alongside their S15 status, and automating Home/Away. These are not three separate implementation features.
- **MVE-1 boundary:** None is included. `Evacuated` remains a generally visible voluntary action on S12; S15 shows self-reported status but not member Event-relevance; Home/Away are never inferred from location. Self-report is not verified safety.
- **Discovery constraints:** Define authoritative Event/home matching, identity and freshness, concurrent Events, failure/uncertainty behavior, privacy/retention, and whether the extra complexity benefits residents. Member Event-relevance is a new coarse-location disclosure requiring a founder privacy decision before any design or implementation. Automated Home/Away also needs explicit consent and safety analysis; no geofencing approval is implied.
- **Roadmap status:** Founder-directed Post-MVE discovery from the 2026-09-14 Slice B dispositions, with scheduling review at G6 go/no-go. No implementation or provider is approved.

## Source-Grounded Protective-Action Direction Language

- **Concept:** Revisit whether an LHL-presented direction line beyond the Event Type itself helps residents after a Protective Action source is selected and its wording/identity semantics are verified.
- **MVE-1 boundary:** No synthesized `LEAVE NOW` or `STAY INDOORS. DO NOT LEAVE.` line. Show the sourced Event Type and required source link to official instructions; LHL does not author an imperative from a Type label.
- **Discovery constraints:** Preserve source attribution, corrections/lifts, accessible meaning without color, and the boundary against LHL posing as the authority. Require a new founder decision before display or implementation.
- **Roadmap status:** Founder-directed Post-MVE discovery from the 2026-09-14 Slice B dispositions; scheduling review at G6 go/no-go.

## Repeat Membership-Denial Constraints

- **Concept:** Prevent an indefinitely repeated join-code resubmission loop after one person has been denied membership multiple times.
- **MVE-1 baseline:** The current denial screen honestly states that the request was not approved and offers `Resubmit code` plus `Contact Community Administrator`. MVE-1 adds no cooldown, attempt cap, or administrator-set settled state because the known pilot administrator can manage the small participant group directly.
- **Discovery constraints:** Use pilot evidence to evaluate a cooldown, bounded retry limit, administrator-settled state, or another recovery model. Define which actor can reset the constraint, what the resident sees, how legitimate entry mistakes differ from repeated denied requests, whether the administrator is notified, and how audit, privacy, abuse, and unavailable-administrator cases work. Do not hide a deliberate human denial behind identity-verification wording.
- **Roadmap status:** Founder-approved long-term backlog discovery from the 2026-09-11 A2 bounded re-review; not approved for MVE-1 implementation. Scheduling review occurs at the G6 go/no-go milestone.

## App-Load Messages — Future Discovery

- **Concept:** Reconsider rotating short messages on recurring app load only if they offer resident value and an appropriate place exists in the loading/entry experience.
- **MVE-1 boundary:** Paused/excluded from MVE-1. No rotating message set, carousel or reserved loading-screen space. This supersedes the earlier S01 5–7-message rotation requirement, not fixed signup safety.
- **Discovery constraints:** Evaluate whether users have time to read, whether display adds avoidable delay or obstruction, and whether any entry/loading-screen placement is useful. Do not randomize required safety, delay incident access or infer a new returning-user screen. Placement, message set and implementation remain unapproved.
- **Roadmap status:** Unscheduled Post-MVE-1 idea, recorded at John's direction on 2026-09-09. Reconsider rather than commit to building it; founder scheduling is required.

## Granular In-App Notification Settings

- **Concept:** After MVE-1, define useful in-app notification categories and controls using pilot feedback about usefulness, volume and reasons for disabling notifications.
- **MVE-1 baseline:** OS-only control, with On recommended and actual permission required; no duplicate in-app master switch or category toggles. New community Requests/Offers and approved direct-participant activity may push. Official alerts remain separate; OS muting removes all LHL pushes, including eligible incidents.
- **Discovery constraints:** Consider incident alerts, community Requests/Offers and claimed-item activity without treating these examples as approved categories. Define defaults, interaction with OS permission, clear recovery paths, and privacy-preserving evidence collection. Muting does not establish its cause; telemetry is not implicitly approved.
- **Roadmap status:** Founder-directed Post-MVE-1 discovery, captured as `Granular In-App Notification Settings` in the canonical roadmap. Start/due dates and implementation are not approved. Source: 2026-09-09 O1/D3 decision.

## Phone Number Reassignment and Active-Profile Uniqueness

- **Concept:** Define safe phone-number reassignment, recovery and recycled-number handling while preserving durable account identity. Basic unique phone assignment is now approved for MVE-1 (2026-09-09); this task no longer decides whether to enforce it.
- **Approved identity foundation:** Every member record has a system-generated immutable internal `member_id` for product records and future CRM relationships. The verified phone number is a changeable contact/authentication attribute rather than the permanent record key.
- **Potential behavior:** Before assigning a number already attached to another active profile, block automatic reuse and route the case through a bounded reassignment or recovery flow. Preserve account history under the immutable identifier rather than moving or merging records based only on the number.
- **Discovery constraints:** Define normalization, reassignment authority, recovery evidence, notification to the prior account where safe, recycled-number disputes, legitimate shared-family or accessibility cases, administrator visibility, audit history, privacy, deletion, and what happens when the prior account is inactive or unreachable. Do not assume that successful SMS receipt proves ownership of the prior account or identity of the person holding the number.
- **Roadmap status:** Reassignment/recovery refinements remain Post-MVE-1 discovery. The later 2026-09-09 decision supersedes the former uniqueness deferral: MVE-1 blocks new-account completion or phone replacement when a number is already assigned to another account. Existing-owner SMS sign-in remains allowed. No automatic account transfer or shared-number exception is approved; Gate 4 must still define the minimum safe pilot recovery behavior.

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
- **Roadmap status:** Deferred beyond MVE-1 and scheduled only for a Post-G6 discovery review. MVE-1 instead shows the resident one static address-derived neighborhood pin and lets them use it or edit the address; an approximate-but-close point is acceptable under the approved 10-mile rule, no operator verification is required, and a saved address without a usable home location leaves both Event/alert notifications and personalized sourced Events in the feed unavailable, while community coordination remains available. The exact mapping/geocoding service and storage terms remain a Gate 4 decision.

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
- **Superseding decisions:** On 2026-09-01 John approved a bounded MVE-1 principle: LHL may remind the original requester that a Claimed request remains open and ask them to close it or keep it open; LHL never closes automatically. On 2026-09-08 he approved testing one in-app reminder after seven Claimed days, with no repeat, device push, context-varying interval, or auto-close.
- **Roadmap status:** The standalone Post-G6 scheduling task is Superseded and archived. The bounded reminder now belongs to active G3 task `Finish approved user flows and low-fidelity screens`. See the 2026-09-01 entries in `docs/04-decision-log.md` and `docs/functionality-decision-log.md`.

## Urgent Request Push Notifications

- **Concept:** Allow a member creating a community request to mark it `Urgent`, subject to a separately approved definition and treatment. Its original push-versus-silent premise was superseded on 2026-09-09: ordinary new Requests and Offers are already push-eligible in MVE-1.
- **Potential behavior:** The author selects urgency during request creation. Future design must define whether this changes prioritization or presentation, explain `Urgent` in plain language, prevent lifecycle labels from setting urgency automatically, and determine rate limits, correction, and misuse handling. Do not restore the superseded ordinary-request no-push rule by inference.
- **Administrator boundary:** MVE-1 administrators only approve or deny membership and have no content-moderation or in-app direct-message role. Any future community-manager responsibility for addressing misuse is a separate role and operating decision; it may be handled outside the app unless future scope explicitly adds supporting tools.
- **Roadmap status:** The author-selected urgency feature remains deferred post-MVE-1 and is not approved for MVE-1 scope. Under the 2026-09-09 supersession, newly created Requests and Offers may generate device notifications regardless of lifecycle phase.

## Administrator Member Removal and Community Moderation

- **Concept:** Allow a trusted-group administrator to remove or suspend an existing member after admission, with any later content/message moderation designed as a separate capability.
- **Potential behavior:** Revoke group membership and associated access, preserve an appropriate audit record, notify the affected member where safe, and define what happens to prior requests, offers, and private-thread access. Content reporting or moderation is not implied by member removal and requires its own scope decision.
- **Roadmap status:** Deferred post-MVE-1. The Boulder Heights pilot uses John as the administrator with approve/deny join requests only; a manual operator-level access-revocation safeguard must exist before pilot access is issued. See `docs/04-decision-log.md`, 2026-08-06.

## In-App Abuse Reporting and Private-Thread Moderation

- **Concept:** Let a participant report abuse or a safety concern tied to a claimed Request/Offer private thread or a specific message, with a bounded review and response workflow.
- **Potential behavior:** Capture the reporting participant, relevant item/thread or message reference, a reason category, and an optional note while minimizing copied private content. Provide an authorized reviewer queue, status tracking, audit history, proportionate actions, and clear separation from emergency reporting.
- **Discovery constraints:** Decide who may review reports; what thread evidence becomes accessible and under what notice or consent; retention and deletion; encryption and audit access; false or retaliatory reports; urgent-threat escalation; appeal or review; block/mute behavior; and effects on the coordination item, private thread, and community membership. Reconcile this capability with `Administrator Member Removal and Community Moderation` without treating membership removal as automatic content moderation.
- **Roadmap status:** Deferred Post-MVE-1. The closed pilot instead provides a manual Help/Safety `Report a concern` path to John as the administrator operating the test, with no automatic private-thread disclosure and no in-app moderation workflow. No future reviewer role, implementation, or moderation policy is approved yet.

## Community Invitation and Access-Code Management

- **Concept:** Let community administrators create, rotate, expire, revoke, and monitor one or more invitation/access codes rather than relying on a single preconfigured pilot code.
- **Potential behavior:** Code-specific expiry, usage limits, invitation attribution, multiple active codes, rotation after suspected exposure, and basic invitation analytics. A code remains only a way to request membership and never grants group access without approval.
- **Roadmap status:** Deferred post-MVE-1. The Boulder Heights pilot uses one preconfigured code plus John-administered approve/deny membership review. Exact code security belongs to the Gate 4 authentication decision.

## Multiple Trusted Groups and Group Creation

- **Concept:** Support multiple saved homes and separately approved community memberships under one adult account, with future community creation and home/community-context switching. Example: one person's Boulder Heights home and Summit County vacation home do not require two accounts.
- **Approved foundation (2026-09-09):** The adult's immutable `member_id` and account identity remain independent of addresses and changeable phone contact. Context switching does not sign into another identity. Gate 3/Gate 4 work must preserve an extension path without implementing the deferred capability now.
- **Potential behavior:** Multiple saved-home records, community memberships, contextual switching, group creation, scoped home visibility and notification routing, and clear separation of Requests, Offers and home-status signals. Do not assume every home has exactly one community or that every community has exactly one associated home per person; define those relationships during discovery.
- **Discovery constraints:** Keep home-specific private information and time-limited sharing separate; identify the relevant home/community on coordination objects; require each community's own admission; define subscriptions separately from the currently viewed context, so viewing one home does not implicitly mute another; address migration, edits/removal and permission changes. Exact defaults, hierarchy, schema and implementation remain unapproved.
- **Authentication boundary:** One adult with multiple homes is distinct from different adults sharing a phone number. The separate later same-day decision selects SMS-code sign-in and unique phone assignment for MVE-1; this multi-home direction itself does not choose those rules or settle recovery.
- **Roadmap status:** Deferred post-MVE-1. MVE-1 remains one adult account/profile, one saved home and Boulder Heights as the only trusted group. Existing roadmap task and G6 go/no-go scheduling review retained; future implementation is not scheduled or approved.

## Low-Bandwidth / Satellite Data Mode

- **Concept:** Provide adaptive low-bandwidth states or, where platform capabilities allow, satellite-compatible connectivity support.
- **Potential behavior:** Strip heavy vector assets and reduce telemetry to text/minimal updates when connectivity is constrained.
- **Roadmap status:** Post-MVP backlog item in the canonical master roadmap. No provider, technical approach, or implementation scope is approved.
