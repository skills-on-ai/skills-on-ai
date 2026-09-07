---
name: gantt-chart
description: Use when asked to build a Gantt chart — a horizontal bar chart showing a project's tasks against a timeline, with dependencies and overlap — for a project with real sequencing between tasks, as distinct from a kanban board (see below), which tracks work status rather than a fixed timeline.
---

# Gantt Chart

A Gantt chart is a horizontal bar chart that lays a project's tasks out
against a timeline: each task is a bar positioned by its start and end
date, so the whole schedule — what's happening when, what overlaps, and
what depends on what — is visible at a glance.

## Key components

- **Task bars** — one horizontal bar per task, positioned along a date
  axis by its start and end date, with bar length showing duration.
- **Dependency arrows** — lines connecting a task to the task(s) it
  can't start until finish, showing why the schedule is sequenced the
  way it is rather than just when things happen to fall.
- **Critical path** — the sequence of dependent tasks that determines
  the earliest possible finish date for the whole project, visibly
  distinguished (usually highlighted) from tasks with slack. See
  [[critical-path]] for how to actually identify it.
- **Milestones** — zero-duration markers (usually a diamond, not a bar)
  for a significant date or deliverable, distinct from the ongoing tasks
  around them.

## When it's useful vs. overkill

A Gantt chart earns its complexity on a project with real sequencing:
multiple tasks that genuinely depend on each other, overlap in
non-obvious ways, or share constrained resources, where seeing the
whole timeline at once actually changes how the work gets planned.

It's overkill for loosely-ordered work — a list of tasks with no real
dependencies between them is better tracked as a simple list or a
[[kanban]] board, where the useful signal is each item's current status,
not its position on a calendar. Building a Gantt chart for that kind of
work adds a maintenance burden (keeping dates and bars current) without
adding information the team actually uses.

## Common pitfalls

- **Built once at kickoff, never updated** — a Gantt chart is a live
  planning tool, not a one-time artifact; once real progress diverges
  from the original bars and nobody updates them, the chart actively
  misrepresents the schedule instead of informing it.
- **Dependencies not actually drawn** — a chart with bars laid out to
  look plausible but no dependency arrows looks precise while hiding the
  real critical path; anyone reading it can't tell which delays actually
  cascade and which don't.
- **Too granular** — breaking a project into so many small tasks that
  maintaining the chart (updating dozens of bars every week) takes more
  effort than the project itself needs defeats the point of using one.
- **Critical path not distinguished** — without a visibly highlighted
  critical path, a reader can't tell which delayed task actually pushes
  the finish date and which has slack to absorb a delay.
- **Milestones drawn as tasks** — giving a milestone a duration and a
  bar like an ordinary task blurs the distinction between "this is
  ongoing work" and "this is a specific date that matters."

## Learn more

- [[critical-path]] for identifying the sequence of dependent tasks that
  actually determines the project's finish date.
- [[kanban]] for tracking status-based work that doesn't have real
  timeline dependencies.
- [[project-charter]] for the document a Gantt chart's schedule usually
  supports rather than replaces.
- [[meeting-agenda]] for using the chart's current state as the basis
  for a recurring status check-in.
