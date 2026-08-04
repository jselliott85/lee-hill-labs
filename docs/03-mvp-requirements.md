# MVP Requirements — LHL App

## Status

MVP scope is being defined. This document records requirements already supported by approved product decisions; it does not authorize unapproved features, vendors, or implementation choices.

## Approved MVP Constraints

- The product must support the four resilience phases: Ready, Alert, Active Incident, and Recovery.
- MVE-1 is the first validation slice inside MVP scope, not a post-MVP expansion.
- MVE-1 must validate the approved lifecycle flows: phase change, preparedness checklist, community request, offer post, Active Incident regression, and Recovery request.
- Sensitive household information must use time-bounded access, expire automatically, and be re-masked after expiry.
- A user whose last successful server handshake is more than five minutes old must be represented as offline to their group.
- Private preparedness tasks must be distinct from group help requests and answered requests.
- Map and hazard context must avoid implying official precision unless the source and confidence are clear.
- The app must not require a backend, authentication, notification, or map/data provider until that choice is separately approved and recorded.

## MVP Definition Needed Before Implementation

- Primary user and first test community
- First end-to-end user journey
- In-scope phase(s) and explicit deferrals for the initial release
- Minimum data model and privacy permissions
- Success criteria, usability checks, and acceptance criteria
- Approved technical architecture and service providers
- Resolved FigJam comments plus approved user flows, low-fidelity screens, reusable component rules, and required interaction states

## Non-Goals for the Current Planning Stage

- Investor-presentation changes
- Production deployment commitments or launch-date assumptions
- Post-MVP low-bandwidth/satellite enhancements, which remain in `docs/future-roadmap-backlog.md`
