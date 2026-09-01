# Genasys Evacuation-Data Access and Scalability Outreach — Drafting Brief

## Status and purpose

This brief preserves the content and routing record for two separate founder inquiries. The Genasys inquiry tests whether the vendor offers a commercially supported, repeatable multi-jurisdiction integration. The Boulder inquiry tests local authority, contract rights, and the operational data path. Neither inquiry implies that LHL has selected or integrated Genasys.

John sent the Boulder ODM/BCSO email on August 18, 2026. The original Genasys email to `info@genasys.com` bounced as Address not found; `support@genasys.com` was not independently verified. John then submitted the full nine-question inquiry through Genasys's official Partner Network interest form on August 18. The form displayed a `Partner Interest` thank-you confirmation stating that a team member would be in touch; no reference number was provided. The bounced email remains the canonical record of the message content, not evidence of delivery. The confirmation screenshot is evidence of form submission. John confirmed that no Genasys response had arrived by the August 26 Gate 2 closure checkpoint. The Genasys outreach task is Complete without a permission or scalability finding; any later response may be evaluated prospectively without reopening Gate 2.

Steve Silbermann (Boulder County Sheriff's Communications Director) replied to Inquiry 2 on August 18. John sent a trimmed 4-question follow-up on August 19 at 9:09 a.m. (a longer 6-question draft was never sent — Gmail confirms the actual send timestamp and question set). Steve answered the follow-up inline; John supplied the response screenshot on August 26. The response confirms an ESRI public-map surface, Boulder's custom in-house Everbridge-to-Incident-Map publishing API, that Open GIS downloads are not intended for automation, and Steve as the conduit to the county policy group. It does not grant automated access or redistribution permission. See the two Steve-response sections below; the full email thread remains canonical.

On September 1, John approved this as an early critical-path pursuit for MVE-1: seek county-authorized, technically supported access to the Boulder ODM publishing path through Steve, with substantial lead time and a Gate 4 decision checkpoint. This is a prospective route, not a confirmed feed. Failure to secure access does not cancel the pilot, but it materially reduces pilot viability and requires an explicit no-automated-evacuation-coverage fallback. Continue the post-MVE government/vendor source and partnership track, using prototype and pilot evidence as the use-case argument rather than as permission.

## Inquiry 1 — Genasys vendor/platform

### Corrected submission route

- **Invalid original route:** `info@genasys.com` bounced; do not reuse. `support@genasys.com` is unverified and must not be assumed valid.
- **Official partner page:** https://genasys.com/partners/
- **Official submission form:** https://genasys.com/modal/partner-interest-form/
- **Submitted selections:** Area of interest `Genasys Protect (SaaS)`; Product interest `Genasys Protect – Zone-based, multi-channel communication`; Partner interest `Becoming a partner`.
- **Submission record:** Full nine-question inquiry pasted into the free-text field on 2026-08-18. The form displayed a `Partner Interest` thank-you confirmation: `Thank you. A member of our team will be in touch with you soon.` No reference number was shown.
- **No-response checkpoint:** No reply received by 2026-08-26; Gate 2 closed without treating Genasys as an approved source.
- **Content record:** The bounced Gmail Sent message preserves the actual submitted text; it is not delivery evidence.

### Purpose

Ask whether Lee Hill Labs can enter one supported commercial API or partner arrangement for authoritative evacuation-zone geometry and live status across jurisdictions participating in Genasys Protect, rather than negotiating a separate technical integration for every county or city.

### Required questions

1. Does Genasys offer a supported API, webhook, feed, or partner program for third-party applications to receive agency-activated evacuation-zone geometry, zone status, alert polygons, instructions, and lifecycle updates?
2. May a commercial application store, cache, display, and redistribute selected data to its users with clear Genasys and issuing-authority attribution?
3. Can one agreement cover all participating jurisdictions whose data is publicly available, or must each jurisdiction separately opt in or authorize access?
4. If local opt-in is required, is there a standardized Genasys-managed approval process rather than independent outreach and contracting with every jurisdiction?
5. How can an integrator determine current jurisdictional coverage and whether a jurisdiction's data is authorized for third-party use?
6. What identifiers and timestamps represent the zone, issuing authority, alert or event, status change, correction, cancellation, repopulation, and final closure?
7. Are changes delivered through push/webhooks or polling, and what rate limits, latency expectations, service levels, retention rules, and historical access apply?
8. What attribution, disclaimers, source links, user-interface requirements, fees, security review, and partner terms apply?
9. Does Genasys's existing integration with organizations such as Tablet Command demonstrate the applicable partnership path for this use case?

## Inquiry 2 — Boulder ODM/BCSO local authority

### Message fields

- **To:** Boulder County emergency-notification assistance — `AlertHelp@bouldercounty.gov`
- **CC:** Boulder County Sheriff's Office general inbox — `bcso@bouldercounty.gov`
- **Suggested subject:** Inquiry about approved access to Boulder County Genasys evacuation-zone data
- **Fallback route:** Boulder ODM contact form: https://boulderodm.gov/about-odm/contact-us/

### Contact qualification

The current Boulder ODM FAQ identifies `AlertHelp@bouldercounty.gov` for emergency-notification assistance outside the cities of Boulder and Longmont and names Boulder County Sheriff's Office Communications personnel. ODM's general contact page publishes a form and phone number, not a general email address. The BCSO inbox is included for routing, not as proof that it owns the relevant data rights.

### Purpose

Ask who controls and may authorize Boulder's Genasys Protect evacuation-zone geometry and live status, whether the county's agreement permits third-party access, and whether authorization must come from Boulder, Genasys, or both.

### Required questions

1. Does Boulder ODM, BCSO Communications, another local office, or Genasys control third-party access to Boulder's evacuation-zone geometry and live status?
2. Does Boulder's Genasys agreement permit an approved third-party application to receive, store, display, and redistribute selected zone/status fields with attribution?
3. Is there a supported machine-readable API, webhook, GIS service, CAP feed, or other feed for Boulder's live Genasys zone changes?
4. Would local authorization be sufficient, or must LHL also obtain a separate Genasys partner or API agreement?
5. Which field or state is authoritative for evacuation warning, evacuation order, shelter in place, repopulation or lifting, correction, cancellation, and final closure?
6. What stable identifiers, timestamps, update semantics, attribution, polling limits, retention rules, and source links apply?
7. If the receiving office is not the correct authority, can it route the inquiry to the person responsible for Genasys administration, emergency notifications, GIS/data licensing, or the vendor contract?

## Boulder ODM response — Steve, 2026-08-18

Steve's reply is a substantive but partial answer that materially changes the Boulder source model. Full email is the canonical record; this is a summary.

- **Biggest finding:** Boulder County does not use Genasys. It uses Everbridge, and Boulder does not make its internal Everbridge capabilities (API/webhook access) publicly available. Genasys is not the Boulder integration path.
- Static all-hazard and flood polygons are county-managed, published on Boulder County's open GIS site, and replaced when the standard polygons change.
- First responders can create situational custom alert shapes during an incident, so the static GIS files do not represent every live alert boundary.
- Emergency alerts appear in real time on ODM's public Incident Map.
- Alert authority flows from the incident commander or designee, through the responsible 911 center; that chain also originates updates and cancellations.
- In this first response, Steve said third-party automated access would require authorization from a county "policy group," but he did not yet identify the group, the approval process, or whether it could cover automated use. His later follow-up identifies him as LHL's point of contact/conduit to that group; it does not itself grant authorization.
- The Genasys-contract question is fully answered — none exists. GIS/data ownership, machine-readable access, and authoritative fields/lifecycle remain only partially answered. The authorization route is now clearer because Steve can carry a bounded proposal to the policy group, but the approval process and substantive data-use terms remain unresolved. (Cody's assessment used the original outreach email's own question order, not necessarily the numbering in "Required questions" above; treat the full email thread as canonical if exact question-by-question mapping matters.)
- **Strategic caution:** publication to the public Incident Map confirms a public presentation surface, not permission to poll/scrape it, redistribution rights, stable identity, or lifecycle completeness. Treat as `TBD`, not as access.
- The Genasys vendor inquiry closed at the 2026-08-26 no-response checkpoint and is not relevant to Boulder County's current implementation. A later response may still inform a prospective vendor-level path.

### Follow-up sent 2026-08-19, 9:09 a.m. (response received)

Correction (2026-08-20): an earlier repo update mistakenly recorded this follow-up as sent 2026-08-20 — that was the date of the repo update itself, not the send date. Gmail confirms the actual send timestamp is 2026-08-19, 9:09 a.m. The 6-question draft below was never sent; John trimmed it to 4 questions for Steve's time before sending, explicitly dropping the resident-facing-display demo offer.

**As actually sent (2026-08-19, 9:09 a.m.):** grounded in Steve's own terminology (Everbridge, ODM Incident Map). Asks: (1) whether the public Incident Map is backed by a county GIS/API backend that third parties are permitted to poll, or whether the website is the only supported access method; (2) whether custom incident alert shapes surface on the public map; (3) attribution/redistribution requirements; (4) who to contact on the policy-group side.

**Earlier 6-question draft, same day (not sent, kept for record):** whether the public Incident Map is backed by a county GIS service or other machine-readable endpoint third parties may poll, or whether the website is the only supported access method; whether a custom incident alert shape appears on the public map, and if so whether it replaces, supplements, or stays separate from the standard downloadable polygons; whether a displayed alert carries a persistent identifier stable across updates, corrections, cancellations, and closure; which displayed date/time a third party should treat as authoritative; county requirements for attribution, automated refresh frequency, storage, retention, or redistribution of information from the public map/GIS site; which policy group would decide on authorizing this limited automated use, and whether Steve can route the request or provide a contact. Offered to share a simple example of the proposed resident-facing display if useful — this offer was dropped from the version actually sent.

### Follow-up response — Steve, supplied 2026-08-26

John supplied a screenshot of Steve's inline answers. Inbox search was unavailable to Cody in this session, so the screenshot—not an independently fetched Gmail message—is the evidence used for this reconciliation.

1. **GIS/backend behind the public Incident Map:** `ESRI`
2. **Whether custom alert shapes reach the public Incident Map:** `We have built a custom, in-house API that pushes from Everbridge to the incident map.`
3. **Automated use, attribution, or redistribution of Incident Map/Open GIS information:** `The data provided on the open GIS site are downloadable files, not intended for automation.`
4. **Policy-group contact:** `I would be your point of contact/conduit to our policy group.`

Controlled interpretation:

- The public Incident Map is ESRI-based.
- Boulder has an internal publisher path from Everbridge to the public Incident Map. This supports that responder-created situational alert content can reach the public presentation surface; it does not establish that Boulder's in-house API is public, externally documented, or available to LHL.
- The static Open GIS downloads are expressly not intended to function as an automated live feed. They therefore cannot be treated as the MVE-1 integration path.
- Steve is no longer merely an unidentified-office lead; he is the current human route for bringing a bounded proposal to the county policy group.
- No automated-access, storage, attribution, redistribution, polling, or commercial-use permission was granted. Stable message identity, freshness, correction/cancellation, closure, retention, and supported-endpoint behavior also remain unresolved.
- Boulder ODM remains a conditional local protective-alert/public-information candidate with `Notification Eligibility: TBD`, not an approved notification source. The separate Genasys vendor inquiry closed without a response and remains unrelated to Boulder's current implementation.

### Live technical finding, 2026-08-20 (context after Steve's follow-up response)

While observing an active Boulder County incident on Watch Duty (the Peoples' Crossing Fire, `app.watchduty.org/i/115980`), John clicked an in-report source link labeled "ReachWell" and it redirected to `member.everbridge.net/453003085612231/notif/j6LLWUWC9` — confirmed as a genuine Everbridge recipient-notification page by its own app-store metadata. From there, two unauthenticated Everbridge REST endpoints on that host were identified: `/rest/notif/page?orgId=453003085612231&pageNo=&pageSize=` (paginated list of the org's sent notifications) and `/rest/notif/{notificationId}?orgId=453003085612231` (single-notification detail). The detail response for this fire's All Clear included a `drawPolygonSetting` field with real `GeoPolygon` coordinates for the custom alert shape — i.e., a concrete, technical answer to whether Boulder's alert system can expose machine-readable polygon geometry, which is exactly what the sent follow-up's question 1 (GIS/API backend) and the unsent draft's custom-shape question were asking about.

This is a live capability finding, not a permission finding, and should not be treated as access: the endpoint being reachable without login does not make it an authorized interface, and the page-list call returned unrelated county notifications, including one naming and physically describing a vulnerable missing person — real third-party PII that was not retained or explored further. Everbridge's MSA Clause 6.3(h) (see `docs/00-current-state.md`) prohibits use of an "unapproved interface." Steve's later response identifies him as the conduit to the county policy group that would consider a bounded request; it does not authorize use of these endpoints. Full technical detail and the privacy caveat are logged in `docs/00-current-state.md` under the 2026-08-20 entries.

**Current implication after Steve's response:** the clean route is not to test or characterize the unauthenticated Everbridge endpoints further. Boulder has its own internal Everbridge-to-Incident-Map API, the Open GIS downloads are not intended for automation, and Steve is the policy-group conduit. If John chooses to pursue Boulder integration, the next communication should give Steve a bounded description of the requested read-only fields, purpose, refresh pattern, retention, attribution, and closed-pilot safeguards and ask him to route that proposal for authorization. No such follow-up has been drafted or sent; nothing goes out without John's approval.

## Shared sender and product context

The messages come from John Elliott, founder of Lee Hill Labs. LHL is evaluating external incident and protective-action sources for a closed, invitation-only Boulder Heights pilot of a community emergency-coordination application. The product is intended to complement official information and help trusted neighbors coordinate; it does not replace emergency authorities, official alerts, evacuation instructions, or 911.

## Drafting constraints

- Keep each email concise and independently answerable.
- Ask for written guidance or referral to the correct technical, partnership, contract, or policy contact.
- Do not ask recipients to endorse LHL.
- Do not imply that integration already exists or that either source is approved.
- Do not describe Boulder-only permission as nationally scalable.
- Do not include participant information, saved addresses, credentials, or confidential product details.
- Do not send any follow-up or revised message without John's approval.
