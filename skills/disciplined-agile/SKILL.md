---
name: disciplined-agile
description: Use when asked to choose or tailor a team's "way of working" (WoW) with Disciplined Agile (DA) — a goal-driven toolkit of decision points and options spanning multiple lifecycles, rather than one prescribed process — as distinct from adopting a single fixed framework like scrum, scaled-agile-framework, or large-scale-scrum outright.
---

# Disciplined Agile (DA)

Disciplined Agile, originally developed by Scott Ambler and Mark Lines
(now maintained by PMI), is a **goal-driven toolkit** rather than a
single prescribed process: instead of telling a team "do Scrum" or "do
SAFe," it presents a set of decision points ("what should we consider
when choosing how to handle requirements?") with the trade-offs of each
option, and lets the team choose the combination — their "way of
working" (WoW) — that actually fits their context. Its premise is that
context varies enough (team size, domain regulation, distribution,
existing technical debt) that one fixed framework rarely fits every
team in an organization equally well.

## Multiple lifecycles, not one

DA explicitly supports several delivery lifecycles rather than assuming
every team should look like a Scrum team:

- **Agile** — a Scrum-based lifecycle, for teams already comfortable
  with [[scrum]]'s sprint structure.
- **Lean** — a Kanban-based, continuous-flow lifecycle (see
  [[kanban]]), for teams whose work doesn't fit fixed iterations
  well.
- **Continuous Delivery: Agile / Continuous Delivery: Lean** — for teams
  releasing continuously rather than in sprint- or milestone-sized
  batches.
- **Exploratory** — a lean-startup-style lifecycle for validating an idea
  before committing to full-scale delivery.
- **Program** — for coordinating multiple teams working on one larger
  initiative, DA's own answer to the scaling problem
  [[scaled-agile-framework]] and [[large-scale-scrum]] also
  address, chosen when their specific structures don't fit.

## The three phases common to the delivery lifecycles

- **Inception** — align stakeholders, secure initial funding and scope
  agreement, and stand up the team, before construction begins — DA is
  explicit that skipping real inception work (treating it as a
  formality) is a common source of later rework.
- **Construction** — iteratively build the solution, using whichever
  lifecycle and practices the team has chosen.
- **Transition** — release the solution into production, covering the
  deployment, training, and support handoff work that a lifecycle
  focused only on "building" tends to underweight.

## Goal-driven decision points

Rather than a checklist of ceremonies, DA structures its guidance as
goals (e.g. "Improve Team Process," "Coordinate Activities") each with a
decision-point diagram of options and their trade-offs. A team, or an
agile coach (see [[agile-coaching]]) working with them, walks
through the relevant goals and picks the options that fit their actual
constraints, producing a tailored WoW rather than an off-the-shelf one.

## Disciplined Agile vs. SAFe vs. LeSS

All three help an organization operate agile delivery beyond a single
default team recipe, but differ in what they actually prescribe:
[[scaled-agile-framework]] provides one detailed, largely fixed
structure; [[large-scale-scrum]] provides one deliberately
minimal structure; Disciplined Agile provides neither a fixed structure
nor a minimalist one — it provides the decision framework for choosing
your own, which can include adopting parts of SAFe or LeSS where they
fit, rather than treating any one of them as the whole answer.

## Common pitfalls

- **Treating "goal-driven" as "no discipline needed"** — DA's
  flexibility is about choosing *which* practices fit, not about
  skipping the discipline of actually following through on the choices
  made; a team that picks options but doesn't consistently apply them
  hasn't really adopted a WoW.
- **Skipping Inception because it "isn't agile"** — DA is explicit that a
  genuine, if lightweight, Inception phase reduces rework later; treating
  it as unnecessary ceremony tends to produce exactly the misalignment
  it exists to prevent.
- **Re-deriving a WoW from scratch for every team without reusing
  organizational learning** — DA's toolkit is meant to let an
  organization build up a set of proven option combinations over time,
  not force every new team to make every decision point's choice
  independently from zero.
- **Choosing DA specifically to avoid committing to any framework** —
  the toolkit still expects a team to converge on a concrete, consistently
  applied WoW; using its flexibility as a reason to never settle on one
  defeats the purpose.

## Learn more

- [[scrum]], [[kanban]] for two of the lifecycle foundations DA's Agile and Lean lifecycles build on.
- [[scaled-agile-framework]], [[large-scale-scrum]] for the more prescriptive/minimal scaling frameworks DA's Program lifecycle can draw from or substitute for.
- [[agile-coaching]] for the role that typically guides a team through DA's goal-driven decision points.
