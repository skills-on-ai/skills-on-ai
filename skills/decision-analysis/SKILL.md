---
name: decision-analysis
description: Use when asked to carry out a structured, end-to-end analysis of a significant decision under uncertainty — frame the decision, define objectives and alternatives, model uncertainties and values, evaluate, run sensitivity analysis, and decide whether more information is worth buying — as distinct from a single technique such as a [[decision-tree]], [[expected-value-analysis]], or [[weighted-decision-matrix]], which it may use, and from [[game-theory]] (where other parties choose strategically).
---

# Decision analysis

Decision analysis is the disciplined process, from operations research
and decision science, for making a hard choice under uncertainty. It
separates what you can choose (alternatives), what you cannot control
(uncertainties), and what you want (objectives and preferences), then
combines them so the logic of the choice is visible and checkable. The
point is not to compute the answer by machine but to produce insight and
a defensible, communicable decision.

## Input required

- **The decision problem** and who owns it.
- **Objectives** — what the decision-maker is trying to achieve, and the
  trade-offs between them.
- **Alternatives** — current options, and room to generate better ones.
- **Uncertainties** — the unknowns that affect outcomes.
- **Constraints and timing** — budget, deadline, what can be learned
  before deciding.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. What decision is on the table, who makes it, and by when?
2. What would a good outcome look like, and what trade-offs are
   you willing to make (cost vs. speed vs. risk)?
3. What are the options, and are there others not yet considered?
4. Which unknowns matter most, and what do you know about them?
5. Could you learn more before deciding, and at what cost?

## Method

1. **Frame the decision.** Write the decision statement, its scope, what
   is already decided, what is decided later, and the deadline. A good
   frame prevents solving the wrong problem.
2. **Define objectives.** Separate fundamental objectives (what you
   ultimately want) from means. Turn each into a measure with a
   direction and range.
3. **Generate alternatives.** Go beyond the obvious two: combine,
   stage, delay, or hedge. Include a baseline of doing nothing.
4. **Identify uncertainties.** List the unknowns that could change the
   ranking; assign each a range or distribution, using data, base
   rates, and expert judgment. Note where estimates conflict.
5. **Model the decision.** Link alternatives, uncertainties, and
   outcomes with a [[decision-tree]] or an influence diagram. Use
   [[weighted-decision-matrix]] logic when there are several
   objectives, and [[expected-value-analysis]] for the uncertainty.
6. **Capture risk preference.** Decide whether expected value is
   adequate or whether the downside needs weighting (see
   [[prospect-theory]] for how people actually feel about loss).
7. **Evaluate.** Compute the value of each alternative and look at
   the full distribution, not only the average.
8. **Run sensitivity analysis.** Vary each uncertain input across its
   range (a tornado chart is the usual way to show it). Find the few
   inputs that change the decision.
9. **Value information.** For each key uncertainty, estimate the
   expected value of perfect information; if it exceeds the cost of a
   test or study, gather it first.
10. **Decide and communicate.** State the choice, why, the main risks,
    and what would change it. Plan the follow-up: milestones and
    tripwires.

## Output format

1. **Decision frame** (3–5 lines)
2. **Objectives and measures** (short list)
3. **Alternatives** (list)
4. **Key uncertainties** with ranges
5. **Model and results** — a tree or table, with expected value and
   range per alternative
6. **Sensitivity** — the inputs that matter most
7. **Value of information** — worth buying or not
8. **Recommendation, risks, and review points**

## Ground rules

- **Frame before computing.** A precise answer to the wrong question
  is worse than a rough answer to the right one.
- **Separate facts, judgments, and preferences.** Label each.
- **Use ranges.** Single-point estimates hide uncertainty.
- **Keep the model as simple as the decision allows.** Add detail only
  where sensitivity shows it matters.
- **The analysis informs the decider; it doesn't replace them.**

## Self-check before answering

- Is the decision statement clear and the scope bounded?
- Are objectives separated from alternatives?
- Does the evaluation show spread and not only averages?
- Did sensitivity analysis identify what actually drives the choice?
- Is there a recommendation with conditions for changing it?

## Common pitfalls

- **Solving the wrong problem** — a poor frame.
- **Too few alternatives** — a choice between two bad options.
- **Anchoring on a favorite** — and building the analysis to justify it.
- **Overconfident estimates** — narrow ranges that ignore surprise.
- **Analysis paralysis** — modeling long after the decision is clear.
- **Ignoring the value of waiting or learning** — decisions can often be
  staged.

## Example prompt

> We must decide whether to build or buy a new billing system. Do a
> decision analysis: frame it, define objectives, model the main
> uncertainties, run sensitivity, and tell me if a pilot is worth
> the cost before we commit.

## Learn more

- [[decision-tree]] and [[expected-value-analysis]] for the core
  computations.
- [[weighted-decision-matrix]] for multiple objectives.
- [[game-theory]] when other parties respond strategically.
- [[prospect-theory]] for how people evaluate risk and loss.
- [[premortem]] and [[tripwire]] for guarding the chosen course.
- [[decision-journal]] for recording and later judging the decision.
