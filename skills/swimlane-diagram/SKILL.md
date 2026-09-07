---
name: swimlane-diagram
description: Use when asked to build a swimlane diagram (also called a cross-functional flowchart) — a process-flow diagram that groups steps into lanes by who or what performs them — as distinct from a plain activity-diagram or flowchart (see below), which shows the sequence of steps without making the responsible party or the handoffs between them explicit.
---

# Swimlane Diagram

A swimlane diagram, also called a cross-functional flowchart, is a
process-flow diagram that groups the steps of a process into lanes by
who or what performs them. Each step sits in the lane of its owner, so
the flow of work across roles, teams, or systems is visible alongside
the sequence of steps itself.

## Key components

- **Lanes** — one horizontal (or vertical) band per role, team, or
  system involved in the process, labeled with who or what it
  represents.
- **Steps** — each process step placed in the lane of whoever actually
  performs it, not the lane of whoever's most associated with the
  process overall.
- **Handoff arrows** — arrows connecting steps, drawn crossing from one
  lane into another wherever the work passes from one owner to the
  next.

## Why it's useful for spotting handoff problems

A plain [[activity-diagram]] or flowchart shows the sequence of steps
but hides who does each one — a swimlane diagram makes that visible by
construction. Any arrow that crosses a lane boundary is a handoff, and
handoffs are where delay, dropped context, and miscommunication tend to
actually happen in a real process. Looking at a swimlane diagram and
counting how many times work crosses a lane boundary — and how far it
travels before coming back — is often the fastest way to spot where a
process is likely to break down, in a way a same-lane sequence of steps
never reveals.

## Swimlane diagram vs. RACI matrix

Both clarify who's involved in a process, but at different resolutions:

- **[[raci-matrix]]** — names who's Responsible, Accountable, Consulted,
  and Informed for each activity or decision, as a reference table.
- **Swimlane diagram** — shows the actual sequence of steps and the
  handoffs between them, as a flow, not a table.

A RACI matrix says who owns what; a swimlane diagram shows how the work
actually moves between them. Building both for the same process — RACI
for accountability, swimlane for flow — covers ownership and sequence
without either one having to do both jobs.

## Common pitfalls

- **Too many lanes to read at a glance** — a diagram with a dozen lanes
  for every role that's ever touched the process defeats its own
  purpose; group minor participants or omit roles that touch the
  process rarely.
- **A step assigned to the wrong lane** — placing a step in the lane of
  whoever's supposed to own it, rather than who actually performs it in
  practice, hides the real handoffs the diagram exists to surface.
- **No visual distinction for decision points** — treating a decision
  the same as a simple step (both as plain boxes) loses the branching
  logic that explains why the flow sometimes takes a different path.
- **Handoffs implied, not drawn** — an arrow that skips over the lane
  boundary it should visibly cross understates how much the work
  actually moves between owners.

## Learn more

- [[activity-diagram]] for the simpler process-flow diagram this adds
  lane structure to.
- [[raci-matrix]] for naming accountability per activity, a complement
  to this diagram's focus on sequence and handoffs.
- [[value-stream-map]] for a related diagram that adds time and
  waste analysis on top of a process flow.
- [[runbook]] for turning one lane's steps into an executable procedure.
