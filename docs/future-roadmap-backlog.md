# Future Product Ideas — Reference Log

This is an idea/reference log, not a task tracker. Approved future work belongs in `docs/00-master-roadmap.md`.

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

## Claim Reminder Nudge

- **Concept:** A "did you complete this task?" notification prompting the claiming helper to update or close a request after some time has passed since claiming — distinct from auto-close, which is not approved for MVE-1.
- **Potential behavior:** Does not auto-close anything; the requester retains the only close action. Timeout duration and whether it should vary by request urgency are undefined.
- **Roadmap status:** Deferred post-MVE-1. See `docs/04-decision-log.md` and `docs/functionality-decision-log.md`, both 2026-08-06.

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
