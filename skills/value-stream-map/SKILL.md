---
name: value-stream-map
description: Use when asked to build a value stream map — a lean process-analysis diagram tracing material and information flow through a process, distinguishing value-adding steps from waste and quantifying time — as distinct from a plain swimlane-diagram (see below), which shows who does what without that waste analysis.
---

# Value Stream Map

A value stream map is a lean process-analysis diagram that traces the
flow of material and information through a process, step by step, and
splits out how much of the total time is actually spent adding value
versus waiting or sitting idle. Its purpose is diagnostic: to make waste
visible so it can be targeted for removal, not just to document the
process.

## Key components

- **Process steps in sequence** — each step the material or work item
  actually passes through, in order, usually with a small data box
  under each one.
- **Value-add time vs. wait time** — for each step, the time actually
  spent doing value-adding work, separated from the time the item spends
  waiting, queued, or idle between steps — usually the larger of the
  two.
- **Information flow** — how instructions, orders, or schedules move
  alongside the physical or work flow, often drawn above the process
  steps as a separate flow, since what triggers a step is often as
  revealing as the step itself.
- **Lead time vs. value-add time summary** — a timeline at the bottom
  totaling both, so the ratio of total lead time to actual value-add
  time is visible as one number — often a small fraction, which is the
  point.

## Relation to kaizen and DMAIC

A value stream map is typically the diagnostic step that precedes an
improvement effort, not the improvement itself:

- **[[kaizen]]** — a focused, often rapid improvement effort targeting a
  specific waste the map identified, once the map has shown where the
  biggest gaps between lead time and value-add time actually are.
- **[[dmaic]]** — the Define-Measure-Analyze-Improve-Control cycle a
  value stream map often supports in its Measure and Analyze phases,
  providing the current-state data an improvement project reasons from.

The map identifies and quantifies waste; kaizen or DMAIC is the
subsequent effort that acts on what it found.

## Value stream map vs. swimlane diagram

Both trace a process step by step, but answer different questions:

- **[[swimlane-diagram]]** — shows who or what performs each step and
  where handoffs happen between roles, with no time or waste analysis.
- **Value stream map** — specifically separates value-add from waste at
  each step and quantifies the time each takes, regardless of who
  performs it.

A swimlane diagram answers "who does what, and where does it hand off";
a value stream map answers "how much of this process is actually adding
value, and where is the time really going."

## Common pitfalls

- **Mapping the process as it's supposed to work** — documenting the
  official procedure instead of walking the actual process and timing
  what really happens hides the waste the map exists to find.
- **No time data collected** — a map with steps but no measured
  value-add and wait times asserts that waste exists without actually
  showing it, which undercuts the case for any improvement it proposes.
- **Treated as a one-time exercise** — a value stream map drawn once,
  used to drive one improvement, and never redrawn afterward can't show
  whether the improvement actually worked or where the next bottleneck
  moved to.
- **Confusing busy with value-adding** — a step that keeps someone
  occupied isn't automatically value-adding from the customer's
  perspective; the map should classify by whether the customer would
  pay for that step, not by how much effort it visibly takes.

## Learn more

- [[kaizen]] for the focused improvement effort a value stream map's
  findings typically feed into.
- [[dmaic]] for the broader improvement cycle this map's data supports.
- [[swimlane-diagram]] for the related process diagram that shows
  ownership and handoffs without this map's waste and time analysis.
- [[gantt-chart]] for scheduling the improvement work a value stream map
  points toward.
