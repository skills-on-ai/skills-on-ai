---
name: second-order-thinking
description: Use when asked to look past the immediate result of a decision to its downstream consequences — the reactions, feedback loops, and side effects that follow the first effect, and then what follows those — to catch decisions that look good now and backfire later; distinct from [[systems-thinking]] (the wider discipline of modeling interacting parts), a [[premortem]] (assumes failure and asks why), and [[strategic-flywheel-effects]] (a specific reinforcing loop).
---

# Second-order thinking

First-order thinking asks "what happens if I do this?" Second-order
thinking asks "and then what?" — repeatedly. Most bad decisions are not
ones whose immediate effect was bad; they are ones whose immediate
effect was good and whose consequences, a step or two later, were
worse. A discount raises sales (first order), trains customers to wait
for discounts and erodes margin (second), and makes full price
unsellable (third).

## Input required

- **The proposed decision or policy**, specifically.
- **Who is affected** — customers, staff, competitors, regulators,
  partners, and the decision-maker's future self.
- **The time horizon** that matters.
- **Context** — the incentives and constraints those people operate
  under.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. What exactly will change, and for whom, on day one?
2. Who gains or loses from it, and what will each of them do in
   response?
3. How quickly can the decision be reversed once effects appear?
4. What is the outcome you want in a year or more, not just now?
5. Has something similar been tried here or elsewhere, and what
   happened?

## Method

1. **State the first-order effect** in one line: the intended,
   immediate result.
2. **List the actors** who will react: each with their incentives and
   options.
3. **For each actor, predict the response.** People adapt, game, avoid,
   copy, or retaliate. Write what they would *rationally* do given
   their incentives, not what you hope.
4. **Trace second-order effects** — the consequences of those responses
   — and then third-order where plausible. Stop when effects become
   speculative or small.
5. **Look for loops.** Mark any *reinforcing* loop (growth, spiral)
   and any *balancing* loop (the system pushes back). Note delays: the
   longer the delay, the more likely people misjudge it.
6. **Check for substitution and displacement.** Does the problem move
   rather than vanish? Do people shift cost onto someone else?
7. **Rate each consequence** by likelihood, size, and timing; separate
   *good* ones to amplify from *bad* ones to prevent.
8. **Adjust the decision** to keep the benefit and blunt the bad
   effect, or choose another option. Define what you will watch to
   catch the consequences early (see [[tripwire]]).

## Output format

A chain per significant effect:

> **Decision:** Offer 30% off every Friday.
> 1st order: Friday sales rise 40%.
> 2nd order: Customers wait for Friday; Mon–Thu sales fall; margin
> per sale drops.
> 3rd order: Full price loses credibility; brand shifts to "discount";
> staff costs spike on Fridays.
> **Verdict:** Net negative at 12 months unless limited to new
> customers or inventory clearance.

Then provide:

- **Summary table** — effect, order, who, likelihood, size, timing.
- **Recommendation** — go, modify, or don't, with the modification.
- **What to monitor** and when.

## Ground rules

- **Name actors, not abstractions.** "The market reacts" is not a
  prediction; "resellers undercut us" is.
- **Incentives drive behavior.** Reason from what people are rewarded
  for.
- **Stay proportionate.** Two or three orders is usually enough; deeper
  chains are mostly speculation.
- **Say how uncertain it is.** Mark inferences as inferences.
- **Consider good second-order effects too.** Not all downstream
  effects are negative.

## Self-check before answering

- Does each chain go at least to "and then what?" twice?
- Are responses tied to specific actors and incentives?
- Are delays and feedback loops identified?
- Did the analysis change the recommendation, or at least add a
  safeguard?

## Common pitfalls

- **Stopping at the first benefit** — the classic error.
- **Paralysis** — endless chains lead to doing nothing; time-box.
- **Assuming people stay static** — they adapt to every new rule.
- **Unintended incentives** — rewarding a metric instead of the
  outcome (cobra effect).
- **Treating predictions as certainties** — chains multiply
  uncertainty; present them as hypotheses.
- **Only looking for downside** — missing positive consequences worth
  amplifying.

## Example prompt

> We're considering requiring all pull requests to have two
> reviewers. Think through the second- and third-order effects on
> speed, quality, and team behavior, and tell me how to design the
> rule so it doesn't backfire.

## Learn more

- [[systems-thinking]] for modeling interacting parts and loops.
- [[premortem]] for imagining how the chosen plan fails.
- [[tripwire]] for monitoring the consequences you predicted.
- [[two-way-door-decisions]] for deciding how cautious to be.
- [[mental-model]] for the underlying models of how things work.
