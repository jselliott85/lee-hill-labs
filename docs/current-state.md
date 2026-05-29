# Current State - Lee Hill Labs

## Status

Public landing page built and deployed 2026-05-29. Investor deck remains intact. Site is live at `leehilllabs.com` via company Vercel account. Transfer package prepared for Lee Hill GitHub/local setup.

## Stack

- Framework: Next.js App Router
- Language: TypeScript strict
- Presentation: static HTML/CSS/JS under `public/presentation`
- Package manager: npm
- Backend: none
- GitHub remote (personal): `git@github.com:fransencomesalive/lee-hill-labs.git`
- Production: deployed to company Vercel account (`randall-lhls-projects/lee-hill-labs`) via manual `npx vercel --prod`
- Production URL: `https://leehilllabs.com` (domain on company Vercel account)
- No `.vercel/` folder locally — personal Vercel CLI is authenticated to `fransencomesalive-4748`, not the company account

## Current Routes

- `/` - public landing page (animated grain background, LHL logo, company description, contact CTA)
- `/lee-hill-labs-index` - password gate rewrite
- `/lee-hill-labs-slides` - slide deck rewrite
- `/presentation/slides.html` - direct static deck file

## Landing Page

- Animated canvas mesh gradient (black to 50% gray palette) + white grain — same architecture as Mettle design page
- LHL logo: `public/assets/LHL-v5-2.svg`, white via `brightness(0) invert(1)` CSS filter
- Drop shadow tracks cursor position (reactive to logo center, not viewport center)
- Gotham Black headline: "The coordination layer communities need." (`text-wrap: balance`, `clamp(32px, 3.6vw, 52px)`)
- Body copy: Gotham Light, `text-wrap: pretty`
- CTA: `mailto:john@leehilllabs.com`
- OG image: `public/og-image.png` (static screenshot of rendered page at 1200x630)
- OG metadata description: "The coordination layer communities need."

## Current Deck

- 22 slides: slides 1-19 (core) + appendix A-C
- Keyboard, click, and touch swipe navigation
- Responsive proportional scaling (1920x1080 viewBox)
- Animated canvas blob/grain background (Lee Hill Labs palette)
- SessionStorage password gate (password: `leehill` — placeholder)
- Gotham font: Black 900 headlines, Medium 500 subheads, Light 300 body
- Headshots wired: JE-headshot.jpeg (John Elliot), RF-headshot.jpg (Randall Fransen)
- Region hazard map = 3x2 card grid
- Reusable iPhone mockup shell with ECA app screen mockups on slides 5, 9, 18, 19

## Vercel / Deployment Notes

- Company Vercel account: `randall-lhls-projects` — owns `leehilllabs.com` domain
- Personal Vercel account: `fransencomesalive-4748` — owns `lee-hill-labs.vercel.app` (old deploy, no longer primary)
- No `.vercel/` folder in repo — to deploy from personal machine to company account, run `npx vercel login` with company credentials first, then `npx vercel --prod`
- Transfer package: `lee-hill-labs-transfer.zip` with `LEE-HILL-LABS-SETUP.md` prepared for Lee Hill GitHub (`randall-lhl/lee-hill-labs-site`) and local setup

## Known Risks

- Gate password is placeholder: change before sharing with investors.
- John Elliot's relevant experience bullets are placeholder text.
- Use-of-funds dollar amounts are all TBD.
- OG image is a static screenshot — retake if landing page design changes significantly.
- Future deploys require logging into company Vercel account via CLI (no auto-deploy from GitHub currently).

## Find / Replace Reminders

- `Lee Hill Labs`: replace with final company name if changed.
- `Emergency Coordination App`: replace with final app name.
- `ECA`: replace with final app shorthand.
- `Boulder Heights`: replace with final demo community if changed.
- `Randall Fransen`: confirm preferred display name.
- Use-of-funds TBDs: replace with real budget table when ready.

## Outstanding Work

- Review generated slide 3 imagery for taste and investor-readiness
- Fill in use-of-funds dollar amounts and John Elliot experience bullets
- Update gate password before sharing deck with investors
- Wire Lee Hill GitHub (`randall-lhl/lee-hill-labs-site`) for auto-deploys on company Vercel account
- Figma polish pass (future, before investor meetings)

## Resume Here

1. Set up Lee Hill GitHub + local from transfer package (`lee-hill-labs-transfer.zip`)
2. Connect `randall-lhl/lee-hill-labs-site` to company Vercel for auto-deploys
3. Update gate password before sharing deck
4. Fill use-of-funds and JE experience bullets
