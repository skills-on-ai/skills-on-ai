---
name: scaled-agile-framework
description: Use when asked to scale agile delivery across many teams with SAFe (Scaled Agile Framework) — Agile Release Trains, PI Planning, and Portfolio/Large Solution/Essential configurations — as distinct from large-scale-scrum's deliberately minimal alternative for the same scaling problem, and from disciplined-agile's goal-driven toolkit approach rather than a single prescribed structure.
---

# Scaled Agile Framework (SAFe)

SAFe scales agile delivery across many teams (often dozens to hundreds
of people) by organizing them into **Agile Release Trains (ARTs)** —
long-lived teams of teams, typically 50–125 people, that plan, commit
to, and deliver together on a fixed cadence. Where [[scrum]]
structures a single team's work, SAFe adds the organizational and
planning layers needed to align many Scrum (or Kanban) teams toward one
larger solution.

## Configurations

SAFe scales itself, offering four configurations depending on the
organization's size and complexity:

- **Essential SAFe** — the foundational layer: one Agile Release Train,
  its teams, and its events. The minimum configuration; every larger
  configuration builds on this one.
- **Large Solution SAFe** — for building a solution too large for one
  ART, coordinating multiple ARTs and suppliers toward one solution.
- **Portfolio SAFe** — connects agile delivery to enterprise strategy and
  investment funding, aligning ARTs to strategic themes and portfolio-
  level budgeting.
- **Full SAFe** — combines all of the above for the largest enterprises.

## Core mechanisms

- **Program Increment (PI) Planning** — a recurring (commonly every 8–12
  weeks), typically in-person or synchronized event where every team on
  an ART plans its next increment together, surfacing cross-team
  dependencies and building one shared plan rather than each team
  planning in isolation and discovering conflicts later.
- **Release Train Engineer (RTE)** — a servant-leader role facilitating
  the ART's events and processes, roughly analogous to a Scrum Master's
  role but scoped to the whole train rather than one team.
- **System Demo** — a demonstration of the *integrated* work of all teams
  on the train at the end of each iteration, showing the combined
  solution rather than each team's work in isolation.
- **Inspect and Adapt (I&A)** — a train-level retrospective, held at the
  end of each PI, examining the train's overall performance and process,
  paralleling [[agile-reflection]] but at the multi-team scale.

## SAFe vs. LeSS vs. Disciplined Agile

All three address scaling agile delivery beyond one team, with different
philosophies:

- [[large-scale-scrum]] (LeSS) deliberately minimizes added roles
  and structure, keeping as much as possible identical to single-team
  Scrum.
- SAFe is more prescriptive, providing a complete, detailed structure
  (roles, events, artifacts) out of the box, trading flexibility for a
  more turnkey rollout.
- [[disciplined-agile]] is neither a fixed structure nor minimalist
  by default — it's a goal-driven toolkit that helps a team or
  organization choose its own way of working from a decision framework,
  rather than prescribing one structure (like SAFe) or deliberately
  withholding structure (like LeSS).

## Common pitfalls

- **Adopting Full SAFe when Essential SAFe would do** — each added
  configuration layer brings real coordination overhead; an organization
  with one solution and no portfolio-scale funding complexity gains
  little from Portfolio SAFe's machinery.
- **PI Planning without genuine cross-team dependency surfacing** — if
  teams plan in the same room but don't actually negotiate and resolve
  dependencies during the event, PI Planning becomes an expensive
  status-sharing exercise rather than the coordination mechanism it's
  meant to be.
- **The RTE acting as a traditional program manager** — directing teams'
  work rather than facilitating the train's events, the same failure
  mode as a Scrum Master reverting to directive project management (see
  [[scrum]]'s equivalent pitfall).
- **Treating SAFe adoption as an org-chart change rather than a genuine
  change in how teams plan and deliver together** — restructuring reporting
  lines into ARTs without changing the actual planning and delivery
  cadence keeps the old coordination problems under a new label.

## Learn more

- [[scrum]], [[kanban]] for the single-team frameworks SAFe's ARTs are built from.
- [[large-scale-scrum]] for the contrasting, minimalist scaling framework.
- [[disciplined-agile]] for a goal-driven toolkit approach rather than one prescribed scaling structure.
- [[agile-reflection]] for the single-team retrospective SAFe's Inspect and Adapt event parallels at train scale.
