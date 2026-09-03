# LHL App — Product Brief

## Product Summary

Lee Hill Labs is building the Emergency Coordination App (ECA): a trusted-community coordination product for residents before, during, and after disruptive events. It complements official information by helping nearby people coordinate household status, practical requests, offers, and time-limited access to necessary private information without presenting LHL as an emergency authority.

ECA is a working name. A final product name and shorthand have not been approved.

## Ownership and Operating Context

John Elliott is the sole founder, operator, and project decision-maker for LHL. Randall Fransen is not an active contributor, has no project access, and may be consulted only in a limited advisory capacity at John's discretion.

## Current Priority

MVP development of ECA is the project's highest priority. Investor-presentation work is paused indefinitely and is outside active scope unless John explicitly reopens it.

## Product Direction

- Serve communities before, during, and after disruptive events.
- Support household and group coordination without interpreting sourced incident information or presenting LHL as official emergency direction.
- Make urgency, safety status, requests for help, and time-sensitive information legible under stressful conditions.
- Respect privacy, particularly for sensitive household information and temporary responder access.
- Keep communication attached to concrete coordination needs; LHL must not become a general group chat, neighborhood forum, email-list replacement, gossip channel, or Nextdoor-style social feed.
- Use calm, plain language; distinguish sourced, resident-reported, stale, missing, intentionally unshared, and simulated information; and avoid social-pressure or engagement mechanics.

## Known Product Decisions

The approved decision log currently establishes:

- The primary user is an adult resident—homeowner, tenant, or another adult household member—in a community exposed to recurring hazards. The first test community is one closed, invitation-only Boulder Heights group.
- Ready, Alert, Active Incident, and Recovery remain internal planning and test-coverage language; consumer-facing lifecycle presentation belongs to Gate 3.
- MVE-1 is the first validation slice within the MVP. Its approved first journey is saved-home-first: sourced incident context associated with the user's saved address, a practical request, trusted-member claim, private request thread, deliberate time-limited information sharing, requester-only close, and recovery coordination. MVE-1 uses one independent User Profile per adult; multiple adults may save the same address without their profiles being linked, merged, or deduplicated into a household account.
- Every approved adult member may create structured requests and offers. Newly created requests and offers are visible in-app but do not generate device notifications in MVE-1.
- A five-minute connection-staleness threshold for representing a user as offline to their group.
- Time-bounded access to sensitive household details uses a one-day default, automatic expiry, early resident revocation, and re-masking rather than deletion.
- `Event` is the product umbrella for each independently identified sourced occurrence or official notice series. Every Event has one Event Type, a stable source-defined identity, a current/latest state, and a chronological update sequence. Different Event Types remain separate rather than being merged into an inferred master Event; authoritative relationships may link Events without merging them.
- No private preparedness-task or structured-checklist concept remains in MVE-1. The community hazard/route map is also removed from MVE-1; dependable external incident information may be presented in a clearly sourced non-map form if Gate 2 confirms feasibility.
- Device notifications are limited to approved direct-participant activity and event/source combinations explicitly approved through the Gate 2 notification-eligibility matrix. Unknown combinations fail closed to no push.
- LHL coordinates rather than commands, sources rather than interprets, reserves urgency, explains privacy deliberately, puts safety and official instructions first, and avoids social pressure.

See `docs/04-decision-log.md` for the full, controlling record.

## Later-Gate Questions

- Gate 2 determines which external incident sources and event/source combinations are sufficiently reliable and attributable, whether any geographic-distance fallback is acceptable, and what liability/safeguard position governs automated notifications.
- Gate 3 defines final consumer wording, screens, states, notification hierarchy, acknowledgement behavior, data/permission schema, design tokens, acceptance criteria, and a provisional working product name.
- Gate 4 selects backend, authentication, notification delivery, external-data, offline-storage, and mobile build/delivery approaches.
- Gate 6 defines the drill plan, measures, thresholds, and stop conditions. Final name and full brand identity remain Gate 6 or later.
