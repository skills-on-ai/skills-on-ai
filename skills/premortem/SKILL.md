---
name: premortem
description: Use when asked to stress-test a plan before committing to it by assuming it has already failed and writing the autopsy — a prospective, failure-first analysis of a plan's likeliest causes of death, early warning signs, and the assumptions behind them — as distinct from a [[postmortem]] (analyzing a failure that already happened) and a generic risk list ([[risk-register]]).
---

# Premortem

A premortem inverts planning: instead of asking "what could go wrong?",
it states as fact that the plan has already failed completely, then
works backward to explain why. Gary Klein's "prospective hindsight"
research is the usual basis — people imagine a certain outcome in
more concrete, specific detail than they imagine a possible one, so
"it failed; write the autopsy" surfaces sharper causes than "list the
risks." It runs *before* the work starts, while the plan can still be
changed.

## Key components

- **The plan, in full** — the premortem is only as specific as its
  input: goal, timeline, budget, team, dependencies, and a concrete
  definition of what success looks like. A vague plan yields generic
  failures.
- **The failure declaration** — a fixed future date and a flat
  statement that the plan failed completely, not "had problems."
- **Ranked causes of death** — typically around seven, ordered by
  likelihood, each a distinct failure rather than variations of one.
- **Per cause, four things:**
  - *What killed it* — the specific mechanism, not a category.
  - *How it unfolded* — a month-by-month (or phase-by-phase) narrative.
  - *The assumption that allowed it* — the belief the plan held that
    made this failure possible.
  - *The first warning sign* — the earliest observable signal, so it
    can become a tripwire.
- **Mitigations and tripwires** — what changes in the plan now, and
  what metric or event triggers a rethink later.

## How to run it

1. Write down the plan with timeline, budget, and success criteria.
2. Set the failure date (e.g. six months out) and declare total failure.
3. Have each participant write causes independently first, so loud or
   senior voices don't anchor the group.
4. Rank, merge duplicates, and pick the top causes.
5. For each, name the assumption and the first warning sign.
6. Change the plan, and assign owners to watch the warning signs.

## Using an AI as the failure analyst

An AI can run a premortem solo. A prompt that works well:

> You're a forensic failure analyst. My plan: [describe it in full,
> with timeline, budget, and what success looks like]. It's 6 months
> from today and this plan failed completely. Write the autopsy. Give
> me the 7 most likely causes of death, ranked, and for each: what
> killed it, how it unfolded month by month, the assumption I held that
> allowed it, and the first warning sign I'd have seen. Every failure
> traces back to a detail I gave you or you cut it. No generic advice.
> Never reassure me.

Two constraints do most of the work: **every failure must trace to a
detail in the plan** (which blocks boilerplate risks), and **no
reassurance** (which blocks the model softening the verdict). If the
output is generic, the plan description was too thin — add detail and
rerun. Treat the result as input to your judgment, not a forecast.

## How it differs from a postmortem and a risk list

- **Premortem vs. [[postmortem]]** — a postmortem analyzes a failure
  that actually happened, using real logs and timelines. A premortem
  imagines the failure in advance, so its "facts" are hypotheses to
  test, not findings.
- **Premortem vs. a [[risk-register]]** — a register names discrete risks
  with probability and impact; a premortem tells a causal story
  of how a plan dies and exposes the underlying assumptions. They
  complement each other: premortem output often feeds the register.
- **Premortem vs. [[swot-analysis]]** — SWOT surveys the situation
  broadly; a premortem attacks one specific plan.

## Common pitfalls

- **Vague plan, generic failures** — "poor communication" and "scope
  creep" appear when the plan lacks specifics to fail on.
- **Group anchoring** — brainstorming aloud lets the first speaker set
  the frame; collect causes silently first.
- **Reassurance creep** — softening causes into "risks to monitor"
  defeats the exercise; keep the failure total.
- **No warning signs** — causes without observable early signals can't
  be acted on; always name the first sign.
- **Done once, then filed** — warning signs need owners and a review
  cadence, or the premortem was theater.
- **Treating output as prediction** — the goal is to find weak
  assumptions to test, not to forecast the future.

## Learn more

- [[postmortem]] for the after-the-fact counterpart to this
  before-the-fact analysis.
- [[root-cause-analysis]] for the structured technique of tracing a
  failure back to its underlying cause.
- [[adversary]] for adding a motivated opponent who attacks the plan.
- [[swot-analysis]] for the broader situational survey that precedes
  a focused premortem.
- [[risks-actions-issues-decisions]] for tracking the mitigations and
  warning-sign owners a premortem produces.
