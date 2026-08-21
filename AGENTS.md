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
5. `docs/05-gate-framework.md`
6. `docs/00-master-roadmap.md`
7. `docs/11-john-project-handoff.md` (background/glossary — read once, not every session)
8. `00_project-os/.lhl_ai_context.md` (live session sync — see below)

If any of these conflict, resolve using the **Source-of-Truth Order** below. Do not guess; state the conflict and ask.

## Source-of-Truth Order

1. Approved decision log — `docs/04-decision-log.md`
2. Approved product brief / MVP requirements — `docs/02-product-brief.md`, `docs/03-mvp-requirements.md`
3. Approved gate framework — `docs/05-gate-framework.md`
4. Canonical roadmap — `docs/00-master-roadmap.md`
5. Approved design, engineering, and QA rules
6. Current-state record — `docs/00-current-state.md`
7. Google Drive working documents
8. Figma comments
9. Historical Asana exports
10. Chat messages, meeting notes, brainstorming

Apply this order together with each canonical file's domain: the decision log controls approval and scope; the product brief and MVP requirements control approved product intent and requirements; the gate framework controls project sequence and gate exit criteria; and the master roadmap controls task presence, status, priority, and approved task dates. The current-state record summarizes these sources but does not supersede them.

An idea mentioned in a meeting, email, or chat is never automatically approved scope.

## Core Rules

- No launch date is approved. Do not invent one, do not treat an old date as current.
- Do not restore or reference Phred (retired legacy system).
- Do not start production app code outside `01_app/`.
- Do not choose a backend, auth, notification, or map/data provider without a documented, approved decision.
- Complete and approve MVP user flows, low-fidelity screens, and reusable cross-platform design rules before final technical architecture decisions or production implementation.
- Explain technical terms in plain language — John is a non-technical founder. Don't assume familiarity with terminal, Git, or hosting concepts.
- Call out assumptions instead of silently making them.
- Keep edits small and reviewable. Don't add dependencies without clear justification.
- When John says `devlog`, capture the functional product rule in `docs/functionality-decision-log.md`.

## Operating Discipline

### Model and reasoning recommendation
- Before each substantive work block, explicitly recommend the most effective and efficient available model and reasoning level, with a brief task-specific rationale.
- Calibrate to the work rather than automatically choosing the highest setting: use lighter models or reasoning for bounded routine tasks and stronger settings when complexity, ambiguity, risk, or synthesis demands them.
- Reassess and state a new recommendation if the task changes materially during the session.

### Staging before canonical writes
- Batch related research/edits into the `.tmp-trusted-*` staging pattern (manifest, receipt, document-outline, document-result, document-text) before writing to canonical repo files. This is already Cody's default behavior for read/research tasks — this section makes it explicit and required, not incidental.
- Only promote a batch from staging to canonical `docs/`, `00_project-os/`, or other repo-tracked files once the batch is complete and internally consistent. Don't write incrementally to canonical files mid-task.
- Do not touch every markdown file in a session by default. Scope writes to files actually relevant to the current task. If a task's findings genuinely affect multiple canonical files, list them explicitly before writing, rather than updating broadly "just in case."

### Approval boundary
- Cody researches, drafts, and recommends. Cody never self-approves a decision or marks something Complete — John is the sole approval gate for all substantive changes, consistent with the completion-approval rule above.
- Repo-write tasks that touch shared canonical files (`docs/00-current-state.md`, `00_project-os/.lhl_ai_context.md`, `docs/04-decision-log.md`) should surface what changed and why in the session's final summary, not just silently commit.

### Concurrency
- See Multi-Agent Editing Protocol below: Cody and CC (Claude Code) never write to the repo concurrently. Check for the other agent's active claim in `00_project-os/.lhl_ai_context.md` before beginning a repo-write task; if uncertain, ask John rather than proceeding.

### Staleness is the primary failure mode
- The canonical repo is the source of truth. Drive documents are working aids and dated snapshots, not live sync targets. When Cody updates both a Drive doc and a repo file for the same underlying work, do both in the same pass — don't let one lag the other across sessions.
- Cross-agent/cross-thread context gaps are expected. When picking up a task another agent or session started, verify current state from the canonical repo files first rather than assuming an in-progress Drive doc or chat thread reflects the latest decisions.

## Roadmap & PM Tracking Protocol

- **Single canonical roadmap**: `docs/00-master-roadmap.md`. Google Sheets is retired as a task tracker and must not be maintained as a competing record.
- **Append-only**: never delete or truncate historical task rows, completed batches, or the archive section.
- **Completion approval**: always ask John before marking a task Complete. Verification alone is not permission to change the task status.
- **Completion handling**: never delete a completed row. Set its Status to `Complete`, replace its Due Date with `Historical: YYYY-MM-DD` using the actual completion date, and move the full row to the Archive section. Do not strikethrough completed task names; Archive placement is the visual completion indicator.
- **Changelog scope**: a changelog entry is not required when the only roadmap action is marking an approved task Complete and archiving its row. Continue to log task additions, removals, scope changes, reprioritization, scheduling changes, superseded decisions, and other material roadmap changes.
- **Active/Backlog table schema** (exact columns): `| Gate | Epic | Task Name | Priority | Target Output | Status | Start Date | Due Date |`. Gate values are `G1` through `G6`, `Post-G6`, or `Ops`.
- **Archive table schema** remains `| Epic | Task Name | Priority | Target Output | Status | Due Date |`; do not backfill gate values onto historical rows.
- **Overdue tasks**: append `[OVERDUE]` to the due date string; remove it once complete.
- Reference the exact Epic/Task Name when communicating status, for traceability.

## Multi-Agent Editing Protocol

- Only one agent may write to canonical project files at a time. Do not run concurrent Claude and Codex editing sessions against the same repository.
- Before editing, run `git status` and re-read every target file. Treat existing modifications as another operator's work and preserve them.
- Claim the current work block in `00_project-os/.lhl_ai_context.md` with the active agent, exact roadmap task, reserved files, and start time.
- Update only the claimed task and files. Do not opportunistically change adjacent roadmap rows or decisions.
- A task may be marked Complete only when its Target Output is verified and John explicitly confirms completion.
- When a roadmap change requires a changelog entry, name the affected task, evidence or reason, agent, and date.
- At handoff, update `00_project-os/.lhl_ai_context.md`, clear the active claim, and report files changed, validation performed, unresolved issues, and the next task.
- Stage explicit files only; never use `git add .`. Commit one coherent work block before switching agents whenever practical.
- If another agent's uncommitted changes overlap a target file, stop and reconcile the diff before editing.

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
5. Stage only task-related files. Commit and push when John requests it or the work block explicitly includes repository synchronization.
6. Do not mark anything "Done" in the roadmap until the actual change is verified and confirmed by John — not just generated.
