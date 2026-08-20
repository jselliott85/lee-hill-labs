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
AGENTS.md              # Project-wide instructions automatically loaded by Codex
00_project-os/        # Working rules and AI handover context
public/presentation/  # Paused historical investor presentation; do not modify
public/assets/        # Shared and historical static assets
```

## Read First

Codex automatically loads root `AGENTS.md` at project startup. That file controls the following project-document reading order:

1. `docs/00-current-state.md`
2. `docs/02-product-brief.md`
3. `docs/03-mvp-requirements.md`
4. `docs/04-decision-log.md`
5. `docs/05-gate-framework.md`
6. `docs/00-master-roadmap.md`
7. `docs/11-john-project-handoff.md` (background/glossary)
8. `00_project-os/.lhl_ai_context.md` (live session sync)

## Commands

```bash
npm run dev
npm run build
npm run lint
```

`npm run lint` and `npm run build` currently succeed without warnings. No automated test suite is configured.
