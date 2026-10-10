---
name: weighted-decision-matrix
description: Use when asked to choose among several options against multiple criteria that matter by different amounts — score each option on each criterion, weight the criteria, total the results, and test how sensitive the winner is to the weights — as distinct from a [[decision-tree]] (sequential choices under uncertainty), [[expected-value-analysis]] (a single quantity under probabilities), and a plain pros-and-cons list (unweighted, unstructured).
---

# Weighted decision matrix

A weighted decision matrix makes a multi-criteria choice explicit. List
the options, list the criteria, say how much each criterion matters,
score every option on every criterion, and total the results. Its
value is less the final number than the discipline: it forces the
criteria and their importance to be stated *before* anyone falls in
love with an option, and it shows exactly where two people disagree.

## Input required

- **The decision** — one sentence, and the deadline for making it.
- **The options** — including "do nothing" or "keep the current one"
  when that is a real choice.
- **What matters** — the criteria, or enough context to derive them.
- **Constraints** — hard requirements that rule options out entirely.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. What exactly is being decided, and by when?
2. What are the options, including doing nothing?
3. Which requirements are non-negotiable (an option failing one is out)?
4. What matters most to you or the decision-makers, and what barely
   matters?
5. Who else must accept the result, and do they weigh things
   differently?

## Method

1. **Screen first.** Remove any option that fails a hard constraint.
   Do not let it into the matrix to be offset by good scores elsewhere.
2. **Choose 4–8 criteria.** Make them distinct (no double-counting, such
   as "cost" and "affordability") and phrase each so higher is better,
   for example "low maintenance effort" rather than "maintenance
   effort".
3. **Weight the criteria** before scoring. Use weights that sum to 100
   (or 1.0). Weight by consequence, not by how easy a criterion is to
   measure.
4. **Define the scale.** Use 1–5 or 1–10 and write what the top, middle,
   and bottom score mean for each criterion, so scores are comparable.
5. **Score each option** on each criterion, ideally from evidence
   (quotes, benchmarks, trial results) and with a one-phrase reason
   when the score is judgment.
6. **Multiply and total.** Weighted score = score × weight; sum per
   option.
7. **Stress-test.** Vary the weights of the top two or three criteria
   by ±10 points, and see whether the winner changes. Also check
   whether one outlier score decides the result.
8. **Sanity-check against intuition.** If the winner feels wrong,
   either a criterion is missing or a weight is dishonest. Find out
   which; do not simply override the matrix or blindly obey it.

## Output format

| Criterion | Weight | Option A | Option B | Option C |
|---|---|---|---|---|
| Total cost over 3 years | 30 | 4 (120) | 3 (90) | 5 (150) |
| Time to launch | 25 | 2 (50) | 5 (125) | 3 (75) |
| Team familiarity | 15 | 5 (75) | 2 (30) | 3 (45) |
| **Total** | 100 | **245** | **245** | **270** |

Follow with:

- **Result** — the leading option and its margin.
- **Sensitivity** — which weight changes would flip the result, in one
  or two lines.
- **What the matrix cannot see** — risks, relationships, or
  irreversibility not captured by the criteria.
- **Recommendation** — the option, and the condition under which you
  would change your mind.

## Ground rules

- **Weights before scores.** Setting weights after seeing scores
  invites reverse-engineering the answer.
- **Show the arithmetic.** Anyone should be able to recompute it.
- **Separate facts from judgments.** Mark which scores rest on data.
- **A close result is a result.** If the top options are within the
  sensitivity range, say they are effectively tied and decide on
  something else, such as reversibility (see [[two-way-door-decisions]]).

## Self-check before answering

- Were hard constraints applied as filters, not as scores?
- Are the criteria distinct, with higher always better?
- Do the weights sum correctly, and do they reflect consequences?
- Was sensitivity tested, and is the margin stated honestly?

## Common pitfalls

- **Double-counting** — near-duplicate criteria silently inflate one
  theme.
- **Too many criteria** — dilutes the few that matter and hides
  disagreement.
- **False precision** — a 245 vs. 243 difference means nothing.
- **Gaming** — adding or reweighting criteria until the favorite wins.
- **Missing criteria** — the unmeasured factor often decides the real
  outcome.
- **Scoring with different scales** — a "3" meaning different things
  per criterion.

## Example prompt

> I'm choosing between three CRM vendors. Build a weighted decision
> matrix with the criteria that matter for a 12-person sales team, ask
> me what you need to set the weights, and show me whether the winner
> survives changes to the weights.

## Learn more

- [[decision-tree]] for choices that unfold in stages under uncertainty.
- [[expected-value-analysis]] when outcomes carry probabilities.
- [[two-way-door-decisions]] for breaking near-ties by reversibility.
- [[decision-journal]] for recording the result and checking it later.
- [[smart-criteria]] for writing criteria that are specific and measurable.
