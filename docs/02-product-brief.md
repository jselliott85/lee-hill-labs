# LHL App — Product Brief

## Product Summary

Lee Hill Labs is building the Emergency Coordination App (ECA): a community emergency-coordination product for neighborhoods facing wildfires, floods, and other disasters. The product is intended to help people share timely, trusted information, coordinate household needs, check in on safety, and organize community response when it matters most.

ECA is a working name. A final product name and shorthand have not been approved.

## Ownership and Operating Context

John Elliott is the sole founder, operator, and project decision-maker for LHL. Randall Fransen is not an active contributor, has no project access, and may be consulted only in a limited advisory capacity at John's discretion.

## Current Priority

MVP development of ECA is the project's highest priority. Investor-presentation work is paused indefinitely and is outside active scope unless John explicitly reopens it.

## Product Direction

- Serve communities before, during, and after disruptive events.
- Support household and group coordination without presenting unverified information as official emergency direction.
- Make urgency, safety status, requests for help, and time-sensitive information legible under stressful conditions.
- Respect privacy, particularly for sensitive household information and temporary responder access.

## Known Product Decisions

The approved decision log currently establishes:

- A four-phase resilience lifecycle: Ready, Alert, Active Incident, and Recovery.
- MVE-1 is the first validation slice within the MVP. It exercises all four lifecycle phases through phase change, community request, offer, Active Incident regression, and Recovery request flows.
- A five-minute connection-staleness threshold for representing a user as offline to their group.
- Time-bounded access to sensitive household details, with a one-day default and explicit expiry.
- Separation between private tasks, community help requests, and answered requests.

See `docs/04-decision-log.md` for the full, controlling record.

## Open Product Questions

- Who is the first MVP user and initial test community?
- Which workflow should be the first end-to-end MVP slice?
- What information sources, if any, can be represented as official or verified?
- Which backend, authentication, notification, and map/data providers meet the approved product needs?
- What is the final product name?
- Which exact screens, states, and acceptance criteria complete MVE-1 after the approved FigJam comments are reconciled?
