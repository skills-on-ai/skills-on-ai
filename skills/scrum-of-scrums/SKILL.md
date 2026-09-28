---
name: scrum-of-scrums
description: Use when asked to coordinate multiple scrum teams working on one product via a Scrum of Scrums meeting — a lightweight cross-team sync sending one ambassador per team — as distinct from adopting a full scaling framework like large-scale-scrum or scaled-agile-framework, which restructure roles and planning rather than just adding a coordination meeting.
---

# Scrum of Scrums

Scrum of Scrums is the lightest-weight way to coordinate multiple
[[scrum]] teams working on one product: each team sends one
representative ("ambassador") to a regular cross-team meeting, mirroring
the structure of each team's own daily scrum but one level up. It is a
coordination *meeting pattern*, not a full scaling framework — it adds
almost no new roles or artifacts, which is both its main advantage and
its main limitation.

## How it works

- **One ambassador per team**, often rotating so the coordination
  knowledge and communication skill spread across the team rather than
  concentrating in one person.
- **A regular cadence** — commonly 2–3 times a week, more often than
  each team's own daily scrum needs but not necessarily daily itself,
  since cross-team dependencies typically surface and resolve on a
  slower rhythm than within-team ones.
- **Four questions per team**, extending the daily scrum's three:
  1. What has my team done since we last met?
  2. What will my team do before we meet again?
  3. What's in my team's way?
  4. Is my team about to put something in another team's way?
  The fourth question is the one that doesn't exist at single-team
  scale — it's specifically about surfacing cross-team impact before it
  becomes a blocker for someone else.
- **A meta-scrum for the Product Owners**, run separately, to keep a
  single, coherent priority order across teams — without this, each
  team's ambassador can report smoothly in Scrum of Scrums while the
  teams are still silently working against conflicting priorities.

## When it fits — and when it doesn't

Scrum of Scrums fits a small number of teams (roughly 2–5) with
moderate, identifiable cross-team dependencies, where the main problem
is *information* (each team not knowing what the others are doing) more
than structural (shared backlog, shared planning cadence, cross-team
architecture). Past that scale, or where the teams share a single
product backlog and need synchronized release cadences, a full scaling
framework — [[large-scale-scrum]] or
[[scaled-agile-framework]] — restructures the roles and planning
process itself rather than only adding a meeting.

## Common pitfalls

- **Treating it as a status-reporting meeting to management** — same
  failure mode as a single team's daily scrum becoming
  status-reporting: the meeting's value is teams surfacing and resolving
  cross-team dependencies with each other, not reporting progress
  upward.
- **No meta-scrum, or no real cross-team prioritization** — ambassadors
  can report accurately every time while each team quietly works against
  a different, unreconciled priority order; Scrum of Scrums coordinates
  *information*, and needs a separate mechanism to coordinate
  *priority*.
- **Scaling the meeting past the point it can actually work** — beyond a
  handful of teams, a single Scrum-of-Scrums meeting stops being able to
  usefully surface every team's dependencies; that's the point at which
  a genuine scaling framework, not a bigger meeting, is the right next
  step.
- **Sending a different, unprepared ambassador each time** — undermines
  the continuity the role depends on; rotation is fine, but each
  ambassador still needs to arrive knowing their team's current
  dependencies and blockers.

## Learn more

- [[scrum]] for the single-team framework this pattern scales.
- [[large-scale-scrum]], [[scaled-agile-framework]] for fuller scaling frameworks when a coordination meeting alone isn't enough.
- [[agile-standup]] for the single-team daily scrum this meeting's structure mirrors.
