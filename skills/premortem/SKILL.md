---
name: premortem
description: Use when asked to stress-test a plan before committing to it by assuming it has already failed and writing the autopsy — a prospective, failure-first analysis of a plan's likeliest causes of death, the assumptions behind them, and the first warning sign of each — as distinct from a [[postmortem]] (analyzing a failure that already happened), a generic risk list ([[risk-register]]), and the full five-stage [[foresight]] sequence, of which the premortem is the first stage.
---

# Premortem

A premortem inverts planning: instead of asking "what could go wrong?",
it states as fact that the plan has already failed, then works backward
to explain why. It rests on Gary Klein's "prospective hindsight"
research: people imagine a certain outcome in more concrete, specific
detail than a possible one, so "it failed; write the autopsy" surfaces
sharper causes than "list the risks." It runs *before* the work starts,
while the plan can still change. It also gives teammates permission to
voice doubts that would otherwise sound disloyal.

## Input required

- **Goal and success definition** — concrete and checkable.
- **Timeline** — start, milestones, deadline.
- **Budget and resources** — money, people, hours, and what can't be
  lost.
- **Dependencies and constraints** — partners, approvals, platforms,
  market, and the user's own experience and weak spots.

A vague plan yields generic failures. If key facts are missing, state
the assumptions made or ask the questions below once, then proceed.

## Questions to ask first

Before running, check the plan against the input list. If any answer is
missing or vague, ask in **one batch of at most five questions**,
skipping any already answered, then proceed; don't interrogate in
rounds. Good questions are specific and answerable in a sentence:

1. What does success look like, in a number or a date you could check?
2. What is the timeline, and what is the one deadline that can't move?
3. What is the budget (money, people, hours per week), and what can't
   you afford to lose?
4. What does the plan depend on that you don't control: people,
   approvals, platforms, suppliers?
5. What has gone wrong before in similar efforts, and which part of
   this plan are you least sure about?

If the user declines or can't answer, state the assumptions made and
mark them; they are prime hidden-assumption candidates.

## Key components

- **The failure declaration** — a fixed future date (commonly six
  months to a year out, scaled to the plan) and a flat statement that
  the plan failed completely, not "had problems."
- **Ranked causes of death** — typically seven, ordered by likelihood,
  each a distinct mechanism rather than a variation of one.
- **Per cause, four things:**
  - *What killed it* — the specific mechanism, not a category.
  - *How it unfolded* — a month-by-month (or phase-by-phase) narrative
    with concrete events.
  - *The assumption that allowed it* — the belief the plan held that
    made this failure possible.
  - *The first warning sign* — the earliest observable signal and
    roughly when it appears, to be hardened into a [[tripwire]].
- **Mitigations** — what changes in the plan now.

## How to run it with a group

1. Write down the plan, timeline, budget, and success criteria.
2. Set the failure date and declare total failure.
3. Each participant writes causes **independently and silently** first,
   so loud or senior voices don't anchor the group.
4. Collect, merge duplicates, and rank.
5. For each top cause, name the assumption and the first warning sign.
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
output is generic, the plan description was too thin; add detail and
rerun.

## Ground rules

- **Trace to the plan.** Quote or cite the user's detail behind each
  failure, or cut the failure.
- **Seven distinct mechanisms.** If two share a root cause, merge them
  and find another.
- **Vary the failure types** — execution, demand or reception, money
  and timing, dependencies, people, external events, and the user's own
  behavior.
- **Rank by likelihood**, and say briefly why each ranks where it does.
- **Never reassure.** No "but this is unlikely" closers.

## Output format

Seven compact blocks, each with the same four labeled fields (killed
by, unfolded, assumption, first warning sign), numbered in rank order.
Follow with a one-line list of the seven assumptions, since those are
what to test first.

## Self-check before answering

- Does each failure cite a specific detail from the plan?
- Are the seven mechanisms genuinely different?
- Is every warning sign something observable, not a feeling?
- Is any sentence there mainly to soften the verdict? Cut it.

## How it differs from a postmortem and a risk list

- **Premortem vs. [[postmortem]]** — a postmortem analyzes a failure
  that happened, using real logs and timelines. A premortem imagines
  the failure in advance, so its "facts" are hypotheses to test.
- **Premortem vs. a [[risk-register]]** — a register names discrete
  risks with probability and impact and tracks them over time; a
  premortem tells a causal story of how a plan dies and exposes the
  underlying assumptions. Its output feeds the register.
- **Premortem vs. [[swot-analysis]]** — SWOT surveys a situation
  broadly; a premortem attacks one specific plan.
- **Premortem vs. [[adversary]]** — a premortem has no opposing agent;
  the adversary adds a motivated opponent who adapts.

## Common pitfalls

- **Vague plan, generic failures** — "poor communication" and "scope
  creep" appear when the plan lacks specifics to fail on.
- **Group anchoring** — brainstorming aloud lets the first speaker set
  the frame; collect causes silently first.
- **Reassurance creep** — softening causes into "risks to monitor"
  defeats the exercise; keep the failure total.
- **Seven versions of one failure** — if all trace to weak demand,
  dependencies, money, people, and the user went unexamined.
- **No warning signs** — causes without observable early signals can't
  be acted on.
- **Done once, then filed** — warning signs need owners and a review
  date, or the premortem was theater.
- **Treating output as prediction** — the goal is to find weak
  assumptions to test, not to forecast.

## Learn more

- [[foresight]] for the full sequence this opens: verdict, rebuild,
  adversary, and tripwires.
- [[adversary]] for adding a motivated opponent who attacks the plan.
- [[tripwire]] for hardening each warning sign into a measurable
  threshold with a check time.
- [[risk-register]] for tracking the mitigations and warning-sign
  owners a premortem produces.
- [[postmortem]] for the after-the-fact counterpart.
- [[root-cause-analysis]] for tracing a failure to its underlying cause.
- [[swot-analysis]] for the broader situational survey.
