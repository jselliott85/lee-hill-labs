# Architecture — LHL App

## Current Architecture

The repository currently contains a small Next.js App Router site and an empty application workspace. It is not yet the ECA MVP architecture.

- `app/` — current public landing page and metadata
- `01_app/` — reserved location for production MVP application code; currently empty
- `public/` — static assets, including the paused historical presentation
- `docs/` — canonical product, requirements, decisions, and roadmap documentation
- `00_project-os/` — operating rules and AI handover context

## Current Technical Facts

- Framework: Next.js 15.1.0 with React 19 and TypeScript
- Persistence, backend, authentication, notifications, and map/data services: not selected
- Tests: none configured
- Lint configuration: present but failing because `eslint-config-next` is not installed

## Architecture Decisions Required Before MVP Implementation

Do not select or implement these without an approved entry in `docs/04-decision-log.md`:

- Application structure within `01_app/`
- Data storage and backend approach
- Authentication and authorization model
- Notification delivery approach
- Map, hazard, route, and other data providers
- Privacy and security implementation for time-bounded household access

## Historical Presentation

`public/presentation/` contains the prior static investor deck. It is preserved as a paused historical asset, not part of the active application architecture. Direct static files may be available under `/presentation/*`; the documented clean presentation rewrites are not configured in `next.config.ts`.
