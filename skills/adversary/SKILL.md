---
name: adversary
description: Use when asked to role-play the person or organization that opposes the user, their plan, or their success — a competitor, rival, or someone who benefits from their failure — and lay out exactly where and how they would compete, undermine, or thwart it, including moves the user would not see coming. Distinct from a [[premortem]] (imagines the plan has failed and explains why, with no opposing agent) and from [[competitor-analysis]] (describes competitors as they are, not how a motivated one would attack).
---

# Adversary

The adversary skill has Claude stop advising the user and instead
become the opponent: someone with their own goals, resources, and
constraints, who gains if the user fails. The point is not to
predict the future but to see the plan from the side that is trying
to break it. People planning are usually blind to attacks that are
obvious to someone who wants them to fail.

## Setting the stance

- **Be a specific person, not a category.** "A competitor" yields
  generic advice. Pick or ask for a concrete opponent: the rival for
  the same promotion, the larger company in the same market, the
  ex-cofounder, the incumbent vendor, the regulator who would rather
  say no.
- **Give the adversary motive and limits.** What do they want, what do
  they have (money, relationships, information, patience), and what
  would they not do (legal, reputational, or ethical lines)? Real
  opponents are constrained; an all-powerful one is unhelpful.
- **Stay in character, then step out.** Speak in first person ("I would
  ...") for the attack, then switch to a clearly marked
  defender's view.
- **Do not reassure.** The adversary has no reason to be kind or
  balanced. Mercy belongs in the defense section.

## What the adversary produces

1. **Who I am and what I want** — the opponent's identity, motive,
   resources, and constraints, based on details the user gave.
2. **Where I'd go against you** — the specific points of contact:
   market, customers, talent, budget, reputation, timing,
   relationships, dependencies.
3. **Weakest points I'd target first** — ranked, each tied to a
   detail in the plan or an assumption behind it.
4. **How I'd work and plan** — the campaign over time: what I'd do
   in week one, month one, month six; what I'd learn first; who I'd
   recruit; what I'd keep quiet until it was too late.
5. **Moves you'd never see coming** — indirect attacks that don't look
   like attacks: going after your suppliers, channels, or allies
   instead of you; matching your offer where it hurts and ignoring it
   elsewhere; waiting for your commitment to be irreversible; letting
   you win the wrong game; shaping the story others tell about you;
   moving first on the thing you assumed was safe.
6. **What would tell you I'm acting** — the earliest observable signs
   of each move, so they become tripwires.
7. **How you'd counter** — out of character, for each attack: the
   cheapest preemptive change, and what to monitor.

## Requirements for a useful result

- **Ground it in the user's details.** Every attack should trace to
  something in their plan, position, or assumptions, or it is
  filler.
- **Prefer legitimate tactics.** Competitive, commercial, political,
  and informational moves count. Don't design illegal acts,
  harassment, or harm to individuals; flag them as "lines a real
  opponent might cross" at most, and focus the defense on detecting
  them.
- **Ask for missing facts** (goal, timeline, resources, who else is
  involved) only if the plan is too thin to attack; otherwise state
  assumptions and proceed.
- **Use more than one adversary** when the plan has several threats.
  Run each separately; their interests differ.

## Example prompt

> Play the person who opposes me, my plans, my success, who will
> benefit from me failing. A competitor, a rival, someone who wants my
> spot. Tell me exactly where you'd be against me, or compete, or try
> to thwart me. Tell me exactly what you'd do, how you would work and
> plan, and your moves I'd never see coming.

## How it differs from related techniques

- **Adversary vs. [[premortem]]** — a premortem asks why the plan
  failed, with no agent behind the failure. The adversary adds a
  motivated opponent who adapts to what the user does. Use both: the
  premortem finds internal weaknesses, the adversary finds external
  ones.
- **Adversary vs. [[competitor-analysis]]** — analysis describes
  competitors' current offerings and positioning. The adversary asks
  what a smart competitor would do next, aimed at this plan.
- **Adversary vs. [[threat-modeling]]** — threat modeling enumerates
  attack paths against a system's security. The adversary applies the
  same mindset to plans, careers, and strategy.
- **Adversary vs. [[five-forces-analysis]]** — five forces gives
  structural pressures on an industry; the adversary personifies them
  into an actor with a plan.

## Common pitfalls

- **Generic opponent** — "a competitor might undercut you" is a
  platitude; name who, how, using what, and when.
- **Strawman rival** — an opponent who is foolish, slow, or
  honorable makes the user feel safe; assume competence.
- **Omniscient rival** — assuming the adversary knows everything
  produces despair; give them only information they could realistically
  have.
- **Attacks without counters** — ending on the threats leaves the user
  anxious and no better prepared; always close with preemptive changes
  and tripwires.
- **Treating output as prediction** — it is a search for blind spots,
  not a forecast; verify the key assumptions it exposes.
- **Never logging the findings** — carry the top threats into
  [[risk-register]] with owners and indicators.

## Learn more

- [[premortem]] for the failure-first counterpart without an opposing
  agent.
- [[competitor-analysis]] for establishing the facts about real
  competitors first.
- [[threat-modeling]] for the security-engineering version of the same
  mindset.
- [[five-forces-analysis]] for the structural pressures the adversary
  exploits.
- [[risk-register]] for tracking the resulting threats and mitigations.
