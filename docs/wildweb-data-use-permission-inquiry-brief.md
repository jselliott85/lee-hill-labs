# WildWeb Data-Use Permission Inquiry — Drafting Brief

## Closure status — 2026-08-26

John sent the approved inquiry on 2026-08-18 at 8:50 a.m. MDT and confirmed that no response had arrived by the 2026-08-26 Gate 2 closure checkpoint. The outreach task is Complete. WildWeb is unavailable for MVE-1 because written production-use authorization and the required lifecycle semantics remain unresolved. Any later response may be evaluated prospectively without reopening Gate 2.

## Message fields

- **To:** Northern Colorado Interagency Dispatch Center — `concc@firenet.gov`
- **CC:** Jaymee Fojtik, DOI WildCAD-E Project Manager — `jaymee_fojtik@ios.doi.gov`; Kara Stringer, DOI WildCAD-E Business Lead — `kara_stringer@ios.doi.gov`
- **Suggested subject:** Inquiry about permitted use of Northern Colorado WildWeb incident data

## Sender and purpose

The email should come from John Elliott, founder of Lee Hill Labs. Lee Hill Labs is evaluating external incident sources for a closed, invitation-only neighborhood pilot of a community emergency-coordination application.

The purpose is to request written clarification about whether Lee Hill Labs may use selected incident fields from the public Northern Colorado WildWeb/WildCAD-E feed in a production application. The inquiry is exploratory and should not imply that WildWeb has been selected, approved, or integrated.

## Email body contents

Open with a brief introduction to John and Lee Hill Labs, then explain that the product is intended to complement official emergency information by helping trusted neighbors coordinate. It must not claim to replace dispatch, emergency authorities, or official alerts.

Mention the public Northern Colorado WildWeb view and explain that Lee Hill Labs is assessing whether its incident data could support clearly attributed, address-relevant incident context. Ask for written guidance on the following:

1. Whether Lee Hill Labs may programmatically poll the public CONCC WildWeb feed for use in a commercial production application.
2. Whether selected incident fields may be stored, cached, and displayed or redistributed to application users.
3. What attribution, source labeling, disclaimers, or links are required.
4. What polling frequency or rate limits are acceptable.
5. Whether the public endpoint is supported for this type of use, or whether a different API, feed, agreement, or point of contact is appropriate.
6. Which fields or behaviors should be treated as authoritative for:
   - the initial incident or record timestamp;
   - subsequent updates or record mutation;
   - stable incident identity;
   - corrections or cancellations;
   - containment and control;
   - closure or removal from the public view.
7. Whether records can disappear from the public view for reasons other than final closure, and whether historical access is available or permitted.
8. Whether there are additional technical, licensing, operational, or data-quality limitations Lee Hill Labs should understand before relying on the feed.

Close by saying that a written response or referral to the correct program or policy contact would be appreciated. Keep the tone respectful, concise, collaborative, and easy for a government program team or dispatch center to route internally.

## Relevant research context for Claude

- The public feed contained incident 1167, `Lefthand Canyon`, reported at 0.1 acre with same-day point and status data.
- That record made WildWeb the strongest small, newly reported fire-source candidate found in the first Gate 2 research batch.
- Timestamp meanings, polling/freshness behavior, record mutation, correction, cancellation, and closure semantics remain undocumented.
- Lee Hill Labs treats unresolved permission as no permission: WildWeb will remain unavailable for MVE-1 if written production-use terms cannot be confirmed.

## Drafting constraints

- Write in John's natural founder voice.
- Do not overstate the product's maturity or suggest an integration already exists.
- Do not ask the recipients to endorse Lee Hill Labs.
- Do not imply that WildWeb would replace official alerts or emergency instructions.
- Do not include confidential product details, participant information, or the saved address involved in the Lefthand research case.
- Produce a complete draft for John to review; do not send it without John's approval.
