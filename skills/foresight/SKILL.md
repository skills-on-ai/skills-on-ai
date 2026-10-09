---
name: foresight
description: Use when asked to stress-test a plan end to end before executing it — a five-stage sequence of [[premortem]] (autopsy of the failed plan), verdict (most likely vs. most dangerous failure and the biggest hidden assumption), rebuild (a plan with every failure closed off plus a pre-launch checklist with walk-away results), [[adversary]] (the opponent's attack on the rebuilt plan), and [[tripwire]] (a measurable signal and check day per failure). Use for launches, hires, investments, career moves, and projects not yet started; not for a single stage alone, for an incident already happened ([[postmortem]]), or for a plan too early to have a timeline and success definition.
---

# Foresight

Foresight chains five techniques into one pass over a plan: imagine it
failed, judge the failures, fix the plan, attack the fixed plan from
the outside, then set up detection for what remains. Each stage feeds
the next, so the order matters. Run it before committing money, time,
or reputation, while the plan can still change.

## Input required

The plan, described in full:

- **Goal and success definition** — a concrete, checkable result, not
  "grow the business."
- **Timeline** — start, milestones, and deadline.
- **Budget and resources** — money, people, time per week, and what the
  user cannot afford to lose.
- **Dependencies** — suppliers, partners, approvals, platforms, and
  people the plan relies on.
- **Constraints and context** — market, regulation, the user's own
  experience and weak spots, what has been tried before.

If key facts are missing, state the assumptions made, or ask once, then
proceed. The output is only as specific as this input; a one-line plan
yields generic failures. Note any assumption Claude had to invent, since
those are likely hidden-assumption candidates.

## Questions to ask first

Foresight depends on the plan's specifics, so if the input list isn't
covered, ask in **one batch of at most seven questions**, skipping any
already answered, then run all five stages without further rounds:

1. What is the plan, in a few sentences, and what does success look
   like as a checkable result?
2. What is the timeline: start date, milestones, and the deadline that
   can't move?
3. What is the budget in money, people, and hours per week, and what
   can't you afford to lose?
4. What does the plan depend on that you don't control?
5. Who could benefit if it fails: a competitor, a rival, an incumbent?
6. What is your own experience with this kind of effort, and where are
   you weakest?
7. What are you most confident about, and what has already been
   decided or spent?

Questions 5 to 7 feed the Adversary and Verdict stages; the answer to
question 7 is the best source for the hidden assumption. If the user
declines, state the assumptions made and mark them.

## Ground rules for every stage

- **Trace to the plan.** Every failure, assumption, and attack must
  cite a detail the user gave (quote or number), or be cut.
- **No generic advice.** "Communication breakdown," "scope creep," and
  "lack of resources" are not findings unless tied to a specific
  mechanism in this plan.
- **Never reassure.** Be blunt; if the plan has a fatal flaw, say so in
  those words.
- **Carry forward.** Later stages use the numbered failures from Stage 1
  by number, not new ones, except where the adversary exposes one.
- **Distinct failures.** The 7 causes must have different mechanisms.
  If two share a root cause, merge them and find another.
- **Cover different failure types.** Across the 7, consider
  execution, assumptions about demand or reception, money and timing,
  dependencies, people, external events, and the user's own behavior.
  Don't let all seven be the same kind.

## Stage 1: Premortem

Take the role of a forensic failure analyst. It is one year from today
and the plan failed completely. Write the autopsy: the 7 most likely
causes of death, ranked. For each:

- **What killed it** — the specific mechanism.
- **How it unfolded** — month by month, with concrete events.
- **The assumption** the user held that allowed it.
- **The first warning sign** they would have seen, and roughly when.

Keep each cause to a compact block so all seven are read. See
[[premortem]].

## Stage 2: Verdict

From the 7 failures:

- **Most likely** and **most dangerous** (largest damage, least
  recoverable). Explain why they differ; likelihood and severity rarely
  coincide, and the most likely failure is often survivable.
- **The single biggest hidden assumption** — one the user doesn't
  realize is an assumption, as opposed to one they stated and know is a
  bet. Explain what it would look like if false.
- **The fatal flaw**, if there is one: a defect no amount of better
  execution fixes. Say the words "this plan has a fatal flaw" and name
  it. If there is none, say that too, and name what is closest.

## Stage 3: Rebuild

- Rewrite the plan with every one of the 7 failure modes closed off.
  Closing a failure means changing the plan's structure, sequence,
  scope, budget, or dependencies, not adding "monitor closely."
- Show what changed and why, as a short map from each failure number to
  the change that addresses it.
- If a failure cannot be closed off, say so and mark it **accepted**,
  with its cost, rather than pretending.
- Give a **pre-launch checklist** of 3 to 5 things to verify before
  executing anything. Each is a fact that can be checked cheaply (a
  conversation, a small test, a document). For each, state the result
  that means the user should **walk away entirely**, set before sunk
  costs exist.

## Stage 4: Adversary

Play the person who benefits most from the plan failing — a competitor,
rival, or someone who wants the user's spot — who has seen the
**rebuilt** plan. State exactly:

- **Who they are** and what they have to work with.
- **Where they would attack**, tied to specific details.
- **What they would do the week of launch.**
- **The move the user would never see coming** — indirect, patient, or
  aimed at a dependency rather than the user.

Stay within legitimate competitive tactics. See [[adversary]].

## Stage 5: Tripwire

For each failure mode, and any new one the adversary exposed, give
**one measurable signal** that it is starting to happen and the
**exact day** to check for it, counted from the start date (for
example, "day 42"). Include a threshold, an owner, and the pre-decided
response. Signals must be numbers, counts, dates, or yes/no facts, not
impressions. Prefer signals that move before the damage does. See
[[tripwire]].

## Output format

Five headed sections in order: Premortem, Verdict, Rebuild, Adversary,
Tripwire. Open with a two-line summary naming the fatal flaw (or its
absence) and the top walk-away condition, so the reader has the
conclusion before the detail. End the Tripwire section with a table:

| # | Failure | Signal | Threshold | Check day | Owner | If tripped |
|---|---|---|---|---|---|---|

Do not end with encouragement. End with the single next action: the
first checklist item to verify.

## Self-check before answering

- Does each of the 7 failures cite a user-supplied detail?
- Are the 7 mechanisms actually different?
- Does the Rebuild change the plan, not just add vigilance?
- Does every checklist item have a walk-away result?
- Does every tripwire have a number, a threshold, and a day?
- Did the adversary attack the rebuilt plan, not the original?
- Is any sentence there mainly to make the user feel better? Cut it.

## Example prompt

> You're a forensic failure analyst. My plan: [describe it in full,
> with timeline, budget, and what success looks like]. It's 1 year from
> today and this plan failed completely. Write the autopsy. Give me the
> 7 most likely causes of death, ranked, and for each: what killed it,
> how it unfolded month by month, the assumption I held that allowed
> it, and the first warning sign I'd have seen. Every failure traces
> back to a detail I gave you or you cut it. No generic advice. Never
> reassure me.
>
> Then: tell me which failure is most likely and which is most
> dangerous, and why they differ. Name the single biggest hidden
> assumption. Be blunt. Then rewrite my plan with every failure closed
> off, with a 3–5 item pre-launch checklist and the result on each that
> means I should walk away. Then play the person who benefits most from
> my plan failing: where you'd attack, what you'd do launch week, and
> the move I'd never see coming. Finally, for each failure mode, give
> one measurable signal and the exact day to check it.

## After the run

- **Verify the checklist first.** The cheapest stage to act on is the
  pre-launch checklist; if a walk-away result shows up, stop.
- **Rerun after a major change.** If the Rebuild or new facts alter the
  plan materially, run Foresight again on the new version.
- **Record survivors.** Move accepted and residual risks into a
  [[risk-register]] with owners and the tripwires.
- **Treat it as a search, not a forecast.** The value is in the
  assumptions it exposes and the stop conditions it fixes.

## Common pitfalls

- **Thin plan in, generic out** — add timeline, budget, and success
  criteria and rerun.
- **Seven variations of one failure** — if all seven trace to "not
  enough customers," the analysis hasn't looked at dependencies,
  money, people, or the user.
- **Rebuild that only adds caution** — it should alter the plan.
- **Adversary attacking the old plan** — new weaknesses in the
  rebuilt plan are the point.
- **Skipping the walk-away results** — a checklist without stop
  conditions is reassurance.
- **Tripwires without check days** — a signal with no check date never
  fires.
- **Over-trusting the output** — Claude cannot see facts the user
  didn't supply; check anything load-bearing against reality.
- **Moving thresholds later** — record tripwire and walk-away values
  before starting, and don't change them after the numbers arrive.

## Learn more

- [[premortem]], [[adversary]], and [[tripwire]] for each stage on its
  own.
- [[risk-register]] for tracking the risks and tripwires afterward.
- [[root-cause-analysis]] for tracing failures to underlying causes.
- [[postmortem]] for the after-the-fact counterpart.
