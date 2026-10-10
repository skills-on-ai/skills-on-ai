---
name: expected-value-analysis
description: Use when asked to compare uncertain options by estimating the possible outcomes of each, their probabilities, and their payoffs, then computing the probability-weighted average (expected value) while also examining the spread, worst case, and sensitivity to the estimates — as distinct from a [[decision-tree]] (sequential decisions, though it uses expected value at its nodes), a [[weighted-decision-matrix]] (multiple criteria, no probabilities), and [[bayes-theorem-analysis]] (updating probabilities from evidence).
---

# Expected value analysis

Expected value (EV) is the probability-weighted average of an option's
possible outcomes: multiply each outcome's value by its probability and
sum. It turns "which gamble is better?" into arithmetic, and it is
the right default when a decision will be repeated many times or when
no single loss would be ruinous. Its weakness is that the inputs are
estimates, and a single average hides risk. So the discipline is as
much about stating the uncertainty as about the number.

## Input required

- **The options**, including doing nothing.
- **The possible outcomes** of each, with a value (money, hours,
  points) for each.
- **Probability estimates**, with the basis for them (data, base rates,
  judgment).
- **Costs and timing**, and the discount rate if the payoffs are
  spread over years.
- **Risk tolerance** — what loss would be intolerable.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. What are the options, and what does each cost up front?
2. What are the realistic outcomes of each (best, typical, worst), in
   one unit such as dollars?
3. How likely is each, and what is that based on: data or gut?
4. Is this a one-off bet or one of many similar ones?
5. Is there any loss large enough that you must avoid it regardless of
   the average?

## Method

1. **Choose one unit** of value and use it for every outcome.
2. **List mutually exclusive outcomes** for each option, covering all
   the possibilities (so probabilities total 100%). Include the bad
   ones; groups of three to five are usually enough.
3. **Estimate probabilities** from base rates or reference classes first
   (how often does this kind of thing succeed?), then adjust for the
   specifics. Avoid starting from optimism.
4. **Value each outcome net of cost**, including the up-front spend,
   and discount future values when timing differs.
5. **Compute EV** = Σ (probability × value) for each option.
6. **Examine the spread.** Report the best case, worst case, and
   probability of a loss. Two options with the same EV can differ
   greatly in risk.
7. **Run sensitivity analysis.** Change the most uncertain probability
   and payoff and find the **break-even** probability: how likely
   success must be for the option to beat the alternative.
8. **Apply the risk filter.** For one-off or ruinous downside, prefer
   the option that survives the worst case, even with a lower EV.
9. **Price the value of information.** If a cheap test or study could
   sharpen a key estimate, say whether it is worth more than it costs.

## Output format

| Option | Outcome | Probability | Net value | Weighted |
|---|---|---|---|---|
| A: Launch now | Strong uptake | 25% | +$400k | +$100k |
| | Modest uptake | 45% | +$60k | +$27k |
| | Flop | 30% | –$150k | –$45k |
| | **EV** | | | **+$82k** |

Then provide, per option: EV, range, probability of loss, and break-even
probability. Finish with:

- **Recommendation** — the preferred option and why.
- **Key assumptions** — the two or three estimates the answer depends
  on.
- **What would change the answer.**
- **Cheapest way to improve the estimates.**

## Ground rules

- **Probabilities are estimates.** Present them as ranges when unsure
  and show how conclusions change.
- **No false precision.** Round; "about $80k" is more honest than
  "$82,350".
- **Never report EV alone.** Always include spread and worst case.
- **Keep outcomes exhaustive.** Missing the catastrophic branch
  inflates EV.
- **Money is not always the unit.** If value is not linear (a loss that
  ends the business), say so and adjust.

## Self-check before answering

- Do the probabilities for each option sum to 100%?
- Are costs included in the net values, and is timing handled?
- Was the break-even probability and sensitivity reported?
- Was the worst case checked against what is survivable?

## Common pitfalls

- **Optimism bias** — success probabilities taken from the pitch deck.
- **Ignoring tail risk** — rare, severe losses dominate repeated
  bets.
- **Double-counting** — the same upside appearing in two outcomes.
- **Treating one-off bets as averages** — you live one outcome, not the
  mean.
- **Precise-looking nonsense** — decimals on guesses.
- **Anchoring on the first estimate** — gather ranges from more than
  one person.

## Example prompt

> We can spend $50k on a pilot with maybe a 30% chance of landing a
> $400k contract, or spend nothing. Do an expected value analysis,
> show the break-even probability, and tell me how sensitive the answer
> is to my estimates.

## Learn more

- [[decision-tree]] for sequences of decisions and chances.
- [[bayes-theorem-analysis]] for updating probabilities with evidence.
- [[break-even-analysis]] for the volume or price at which an option
  pays off.
- [[weighted-decision-matrix]] when criteria are not all monetary.
- [[decision-journal]] to record your probabilities and check your
  calibration later.
