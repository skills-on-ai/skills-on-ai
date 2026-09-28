---
name: scrumban
description: Use when asked to run Scrumban — a hybrid blending scrum's planning structure with kanban's continuous-flow board and WIP limits, pulling work on demand rather than committing to a fixed sprint backlog — for a team that needs more structure than pure Kanban but finds Scrum's fixed sprint commitment a poor fit for their work's variability.
---

# Scrumban

Scrumban blends [[scrum]]'s planning and review structure with
[[kanban]]'s continuous-flow board and work-in-progress (WIP)
limits. It suits teams whose work doesn't fit neatly into either parent
framework alone — more variable and interrupt-driven than a fixed
Scrum sprint backlog handles well, but wanting more planning structure
and retrospective discipline than pure Kanban prescribes.

## What it keeps from each parent

From Scrum:
- **Regular retrospectives** — periodic reflection on the team's process,
  same purpose as [[agile-reflection]], though not necessarily tied
  to a fixed sprint boundary.
- **Prioritized backlog** — work is still ranked, though refilled
  on-demand rather than fully re-planned each sprint.

From Kanban:
- **A visual board with WIP limits** — the core flow-control mechanism,
  same discipline as described in [[kanban]].
- **Continuous flow, not fixed iterations** — no committed sprint
  backlog; work is pulled as capacity allows.

## Distinctive practices

- **On-demand planning ("bucket" planning)** — rather than a single
  sprint-planning session that commits the whole backlog for a fixed
  period, work is planned in rolling buckets (e.g. this week / this
  month / this quarter) and pulled into the active board as WIP frees up
  — closer to Kanban's pull model than Scrum's upfront sprint commitment.
- **Planning trigger, not a planning calendar** — new planning happens
  when the ready-to-pull queue drops below a set threshold, not on a
  fixed calendar cadence — the team plans when it's actually needed,
  rather than on a schedule that may not match real consumption.
- **Freeform or lightly-timeboxed cadence** — retrospectives and reviews
  can happen on a fixed cadence (Scrum-style) or be triggered by
  events (Kanban-style), depending on what the team's work actually
  needs.

## When it fits

Teams with a mix of planned feature work and unplanned, interrupt-driven
work (support tickets, production incidents) where a Scrum sprint
backlog would be constantly disrupted by items that can't wait for the
next sprint, but where pure Kanban's lack of any planning ceremony would
leave longer-term prioritization too loose. It's a common landing point
for a team transitioning from Scrum toward Kanban, or vice versa.

## Common pitfalls

- **Keeping every Scrum ceremony out of habit** — a full sprint-planning
  meeting held on a fixed calendar defeats the point of on-demand
  planning; Scrumban's value comes from deliberately choosing which
  ceremonies to keep, not from running both parents' full ceremony lists
  simultaneously.
- **No real WIP limits** — same failure mode as plain Kanban (see
  [[kanban]]'s pitfalls): without an enforced limit, the board
  becomes a visual list rather than a genuine flow-control mechanism.
- **Ambiguity about who owns prioritization** — Scrum's Product Owner
  role and Kanban's less formal backlog ownership don't automatically
  reconcile; a Scrumban team needs to explicitly decide who prioritizes
  the bucket queue.
- **Adopting Scrumban to avoid Scrum's discipline rather than because the
  work genuinely needs it** — Scrumban should be chosen because the
  work's variability doesn't fit a fixed sprint, not as a way to escape
  planning and retrospective discipline altogether.

## Learn more

- [[scrum]] for the fixed-sprint framework Scrumban borrows its planning and retrospective structure from.
- [[kanban]] for the continuous-flow framework Scrumban borrows its board and WIP limits from.
- [[agile-reflection]] for the retrospective practice, whichever cadence triggers it.
