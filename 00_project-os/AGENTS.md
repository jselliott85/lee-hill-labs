# Shared Instructions — Lee Hill Labs (LHL App)

## Current Focus

Build toward a working MVP of the LHL App (community emergency coordination mobile app). The pitch deck / presentation project (`public/presentation/`) is **paused** — do not treat it as active work, do not "helpfully" continue it, and do not delete it. Revisit only when John explicitly reopens it. Its rules now live in `docs/archive/presentation-agents.md`.

John Elliott is the sole founder, operator, and project decision-maker. Randall Fransen is not an active contributor, has no project access, and may be consulted only in a limited advisory capacity at John's discretion. Record any change to this operating status in `docs/04-decision-log.md`.

## Read First

Before meaningful work, read in this order:

1. `docs/00-current-state.md`
2. `docs/02-product-brief.md`
3. `docs/03-mvp-requirements.md`
4. `docs/04-decision-log.md`
5. `docs/11-john-project-handoff.md` (background/glossary — read once, not every session)
6. `00_project-os/.lhl_ai_context.md` (live session sync — see below)

If any of these conflict, resolve using the **Source-of-Truth Order** below. Do not guess; state the conflict and ask.

## Source-of-Truth Order

1. Approved decision log — `docs/04-decision-log.md`
2. Approved product brief / MVP requirements — `docs/02-product-brief.md`, `docs/03-mvp-requirements.md`
3. Approved design, engineering, and QA rules
4. Current-state record — `docs/00-current-state.md`
5. Asana task status
6. Google Drive working documents
7. Figma comments
8. Chat messages, meeting notes, brainstorming

An idea mentioned in a meeting, email, or chat is never automatically approved scope.

## Core Rules

- No launch date is approved. Do not invent one, do not treat an old date as current.
- Do not restore or reference Phred (retired legacy system).
- Do not start production app code outside `01_app/`.
- Do not choose a backend, auth, notification, or map/data provider without a documented, approved decision.
- Explain technical terms in plain language — John is a non-technical founder. Don't assume familiarity with terminal, Git, or hosting concepts.
- Call out assumptions instead of silently making them.
- Keep edits small and reviewable. Don't add dependencies without clear justification.
- When John says `devlog`, capture the functional product rule in `docs/functionality-decision-log.md`.

## Roadmap & PM Tracking Protocol

- **Single canonical roadmap**: `docs/00-master-roadmap.md`. Google Sheets is retired as a task tracker and must not be maintained as a competing record.
- **Append-only**: never delete or truncate historical task rows, completed batches, or the archive section.
- **Audit trail**: every status change gets a line in the Changelog section of the roadmap file.
- **Table schema** (exact columns): `| Epic | Task Name | Priority | Target Output | Status | Due Date |`
- **Done tasks**: strikethrough the Task Name (`~~Task Name~~`).
- **Overdue tasks**: append `[OVERDUE]` to the due date string; remove it once complete.
- Reference the exact Epic/Task Name when communicating status, for traceability.

## GEM Handover Workflow

- `00_project-os/.lhl_ai_context.md` is the live sync file between Claude Code and GEM (Gemini, running in Google Workspace).
- **Read-only for GEM.** Only John, Claude, or Codex write canonical records.
- GEM is a supporting Google Workspace agent. It may summarize Workspace material and propose tasks, but it may not create or change roadmap status, decisions, or other canonical project records.
- Claude or Codex updates this file at the end of any session that changes roadmap-relevant state.

## Closing Discipline

At the end of a substantial session:

1. Summarize what changed, in plain language.
2. List anything unresolved or blocked.
3. Update `docs/00-current-state.md` if state or decisions changed.
4. Update `00_project-os/.lhl_ai_context.md` with the current sprint line, technical state, and next entry point.
5. Stage, commit, and push if a remote exists.
6. Do not mark anything "Done" in the roadmap until the actual change is verified and confirmed by John — not just generated.
