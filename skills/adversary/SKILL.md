---
name: adversary
description: Use when asked to role-play the person or organization that opposes the user, their plan, or their success — a competitor, rival, or someone who benefits from their failure — and lay out exactly where and how they would compete, undermine, or thwart it, including moves the user would not see coming. Distinct from a [[premortem]] (imagines the plan has failed and explains why, with no opposing agent), from [[competitor-analysis]] (describes competitors as they are, not how a motivated one would attack), and from the full [[foresight]] sequence, where it is the fourth stage.
---

# Adversary

The adversary skill has Claude stop advising the user and become the
opponent: someone with their own goals, resources, and constraints, who
gains if the user fails. The point is not to predict the future but to
see the plan from the side that is trying to break it. People planning
are usually blind to attacks that are obvious to someone who wants them
to fail, and an opponent adapts, which a list of risks does not.

## Input required

- **The plan or position** — goal, timeline, budget, how it makes
  money or wins, and what it depends on.
- **The user's visible footprint** — what an outsider could learn:
  announcements, public filings, job posts, social presence, customers
  and partners who know.
- **Candidate opponents**, if the user has them. If not, Claude picks
  the one or two most motivated and says why.

If key facts are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

If the plan or the opponent is unclear, ask in **one batch of at most
five questions**, skipping any already answered, then proceed:

1. What exactly are you trying to win, protect, or achieve, and by
   when?
2. Who would be happiest to see you fail or lose ground: a competitor,
   a rival for a role, a former partner, an incumbent? Name them if you
   can.
3. What do they want, and what do they already have against you
   (money, relationships, information, head start)?
4. What have you made public that they could use: announcements,
   filings, hiring, customers, partners?
5. What are you most counting on, and what would hurt most to lose?

If the user doesn't know the opponent, pick the one or two most
motivated, say why, and proceed. Don't ask for anything that would help
target a private individual; keep the opponent a role or organization
tied to the plan.

## Setting the stance

- **Be a specific person, not a category.** "A competitor" yields
  generic advice. Use a concrete opponent: the rival for the same
  promotion, the larger company in the same market, the ex-cofounder,
  the incumbent vendor, the regulator who would rather say no.
- **Give the adversary motive and limits.** What do they want, what do
  they have (money, relationships, information, patience, speed), and
  what would they not do? Real opponents are constrained; an
  all-powerful one is unhelpful.
- **Limit their information.** The adversary knows only what they could
  realistically learn. Say how they would learn the rest.
- **Stay in character, then step out.** Use first person ("I would...")
  for the attack, then a clearly marked defender's view.
- **Do not reassure.** The adversary has no reason to be kind or
  balanced.

## What the adversary produces

1. **Who I am and what I want** — identity, motive, resources,
   constraints, and what I know about you.
2. **Where I'd go against you** — the points of contact: market,
   customers, talent, budget, reputation, timing, relationships,
   dependencies.
3. **Weakest points I'd hit first** — ranked, each tied to a detail in
   the plan or an assumption behind it.
4. **How I'd work and plan** — the campaign over time: week one, month
   one, month six; what I'd learn first; who I'd recruit; what I'd keep
   quiet until it was too late.
5. **Moves you'd never see coming** — indirect attacks that don't look
   like attacks. Options to consider:
   - going after your suppliers, channels, or allies instead of you
   - matching your offer where it hurts and ignoring it elsewhere
   - waiting until your commitment is irreversible
   - letting you win the wrong game
   - shaping the story others tell about you
   - moving first on the thing you assumed was safe
   - hiring your people or buying your key dependency
6. **What would tell you I'm acting** — the earliest observable signs
   of each move, to turn into [[tripwire]]s.
7. **How you'd counter** — out of character: for each attack, the
   cheapest preemptive change and what to monitor.

## Ground rules

- **Ground it in the user's details.** Every attack must trace to
  something in their plan, position, or assumptions, or it is filler.
- **Name the one move.** Pick the single attack that is most likely to
  work and least likely to be noticed, and explain why it escapes
  notice.
- **Prefer legitimate tactics.** Competitive, commercial, political,
  and informational moves count. Don't design illegal acts, harassment,
  defamation, or harm to individuals; at most, flag them as lines a
  real opponent might cross and focus the defense on detecting them.
- **Use more than one adversary** when the plan has several threats.
  Run each separately; their interests and methods differ.
- **Include patient and passive opponents.** Sometimes the best attack
  is to do nothing and let a flaw play out.

## Self-check before answering

- Is the opponent specific, with motive, resources, and limits?
- Does each attack cite a user detail?
- Is the "never see coming" move truly indirect, not an obvious price
  cut?
- Does every attack have an early sign and a counter?
- Is every tactic legitimate?

## Example prompt

> Play the person who opposes me, my plans, my success, who will
> benefit from me failing. A competitor, a rival, someone who wants my
> spot. Tell me exactly where you'd be against me, or compete, or try
> to thwart me. Tell me exactly what you'd do, how you would work and
> plan, and your moves I'd never see coming.

## How it differs from related techniques

- **Adversary vs. [[premortem]]** — a premortem asks why the plan
  failed, with no agent behind the failure. The adversary adds a
  motivated opponent who adapts to what the user does. The premortem
  finds internal weaknesses; the adversary finds external ones.
- **Adversary vs. [[competitor-analysis]]** — analysis describes
  competitors' current offerings and positioning. The adversary asks
  what a smart competitor would do next, aimed at this plan.
- **Adversary vs. [[threat-modeling]]** — threat modeling enumerates
  attack paths against a system. The adversary applies the same mindset
  to plans, careers, and strategy.
- **Adversary vs. [[five-forces-analysis]]** — five forces gives
  structural pressures on an industry; the adversary personifies them
  into an actor with a plan.

## Common pitfalls

- **Generic opponent** — "a competitor might undercut you" is a
  platitude; name who, how, using what, and when.
- **Strawman rival** — a foolish, slow, or honorable opponent makes the
  user feel safe; assume competence.
- **Omniscient rival** — assuming the adversary knows everything
  produces despair; give them only realistic information.
- **Attacks without counters** — ending on the threats leaves the user
  anxious and no better prepared.
- **Overreach into harm** — if the "best" move is illegal or cruel,
  it's out of scope; find the legitimate version.
- **Treating output as prediction** — it's a search for blind spots;
  verify the assumptions it exposes.
- **Never logging the findings** — carry the top threats into a
  [[risk-register]] with owners and indicators.

## Learn more

- [[foresight]] for where the adversary fits in the full stress-test
  sequence.
- [[premortem]] for the failure-first counterpart without an opposing
  agent.
- [[tripwire]] for turning the adversary's early signs into measurable
  thresholds.
- [[competitor-analysis]] for establishing the facts about real
  competitors first.
- [[threat-modeling]] for the security-engineering version.
- [[five-forces-analysis]] for the structural pressures the adversary
  exploits.
- [[risk-register]] for tracking the resulting threats.
