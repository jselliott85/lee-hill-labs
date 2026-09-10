# Gate 3 Low-Fidelity — S12 Home-Shell Exploration

Prepared 2026-09-10 by Cody under `ECA Product Design / Finish approved user flows and low-fidelity screens`.

## Purpose and boundary

John's first A2 review identified S12 as the critical structural issue. His paper sketch and follow-up dispositions established the information architecture for a separate wireframe-like exploration below A2. After clarifying that the surrounding annotation is not consumer copy and all screen wording remains provisional, John approved the exploration on 2026-09-10 as the S12 structural baseline. This does not alter or approve the reviewed A2 frames. It is not final layout, final copy, a reusable component library, production implementation, full A2 approval, task completion, or Gate 3 closure.

Target: [LHL App — Gate 3 Low-Fi Pass 1](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK), page `Gate 3 — Low-Fi Pass 1` (`0:1`).

Figma exploration: [full reference sheet](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=73-2), [normal Home frame](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=73-5), [location-needed annotation](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=73-6), and [approved-structure/deferral notes](https://www.figma.com/design/GzK3TcwA0mPzn90gG6fWGK?node-id=73-7).

## Approved starting structure

- Normal MVE-1 app access is gated until community membership approval. The Home shell is post-approval only.
- Header: LHL name/logo. Beneath it on Home and Events, show a static shortened saved-home label such as `25 Example Lane`, omitting city/state/ZIP while leaving a future path for multi-home selection.
- Scrollable Home body, in order: Event preview, Community Summary, Home Status.
- Fixed, equally spaced labeled-icon footer: Home, Community, Messages, Profile, Help. Home returns to or reloads this screen; it is not the Home Status action.
- Footer exceptions: pre-approval/onboarding, native OS surfaces, and blocking confirmations.

### Event preview

- Show up to three current source-defined Events and `View all` to the complete feed.
- Show one current/latest timestamped state per Event; the detail view owns update history.
- The exploration may illustrate evacuation first, but the full Event-order hierarchy remains a separate product decision.
- Do not create a separate `Alert` product entity or imply a chosen data/JSON implementation.
- If location is needed, replace the Event preview with an explanation that Event notifications and the personalized Events feed are unavailable, plus `Edit address`. Retain the other Home sections and footer.

### Community Summary

- Show the community name, approved-member count, Open Request count, Open Offer count, and per-resident new/unviewed indicators.
- Starting definition: `new` means created since that resident last viewed Community and clears as items are viewed.
- Open Community from the summary. This is not a social feed.

### Home Status

- Keep this section on Home even without a usable mapped coordinate.
- Show the resident's latest voluntary status and timestamp, with inline Home/Away controls and no freeform field.
- Provisional meanings: Home = someone in the reporting resident's household is home; Away = the reporting resident says the household is away.
- Adults sharing an address remain independent. The two-state taxonomy is provisional.

## Global destinations represented by the footer

- **Community:** Requests/Offers and membership context; role-gated administrator tools live here and are community-specific.
- **Messages:** Inbox for claimed Request/Offer threads only, including empty/unread states; no general direct messages or group chat.
- **Profile:** Name/phone, address/access, optional home information, community membership, and Notification Settings. The settings route reports actual OS status and opens native OS settings rather than acting as an in-app toggle. Leaving a community is future scope.
- **Help:** Safety/911, privacy, tutorial replay, manual concern reporting, and notification explanation/link to the same settings route.

## Named follow-on work

- A2 correction states: invalid code versus unable-to-check service failure; membership denied/resubmit/contact; oldest-first scrolling admin queue; pending-address privacy/verification language; notification events for request/approval/denial.
- Event priority hierarchy beyond evacuation-first.
- Home Status taxonomy beyond provisional Home/Away.
- Detailed loading, offline, empty, active, stale, corrected, and suspended states.
- Final consumer copy, iconography, reusable cross-platform shell/component rules, and technical implementation.

## Verification

Construction, persisted readback, geometry checks, and screenshot inspection passed.

- The separate top-level sheet `73:2` is below A2 at `x=6400`, `y=3000`, measures `1744 × 1018`, and does not overlap the A2 review surfaces.
- The reference Home frame `73:5` is exactly `390 × 844`. Its OS reference, LHL header, short-address row, scroll content, and footer fill the viewport exactly.
- The scroll area contains the three cards without overflow. The footer contains five equal `78 × 80` items across the full 390-pixel width.
- No inspected child escaped its container; no text has a missing font or literal line-break artifact. All exploration text uses Inter.
- Screenshot inspection confirmed legible Event, Community Summary, Home Status, location-needed, navigation, and deferral content.
- Existing reviewed A2 frames/comments were not mutated. No new screen-parent ID or reusable component/library claim was created.

## Founder disposition

Founder-approved on 2026-09-10 as the structural baseline for S12 and the post-approval application shell. All content outside the 390 × 844 phone is design/review annotation rather than consumer copy. The location-needed wording and all in-phone wording remain provisional low-fidelity copy. Outstanding S07–S11 corrections and the full A2 approval remain separate.
