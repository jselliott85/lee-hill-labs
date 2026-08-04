# Lee Hill Labs — LHL App

Workspace for the LHL App, a community emergency-coordination product. The current priority is defining and building the Emergency Coordination App (ECA) MVP.

## Current Status

John Elliott is the sole founder, operator, and project decision-maker. The investor presentation remains preserved under `public/presentation/`, but it is paused and outside active scope unless John explicitly reopens it.

`docs/00-master-roadmap.md` is the sole task tracker. Google Sheets is retired as a tracker; GEM may assist with Google Workspace summaries and task proposals but cannot alter canonical project records.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the current public landing page.

## Structure

```text
01_app/               # Production MVP application code (currently empty)
app/                  # Current Next.js public landing page
docs/                 # Canonical product, requirements, decisions, and roadmap
00_project-os/        # Working rules and AI handover context
public/presentation/  # Paused historical investor presentation; do not modify
public/assets/        # Shared and historical static assets
```

## Read First

1. `docs/00-current-state.md`
2. `docs/02-product-brief.md`
3. `docs/03-mvp-requirements.md`
4. `docs/04-decision-log.md`
5. `docs/00-master-roadmap.md`
6. `00_project-os/AGENTS.md`

## Commands

```bash
npm run dev
npm run build
npm run lint
```

`npm run build` currently succeeds. `npm run lint` needs repair because the repository references, but does not install, `eslint-config-next`.
