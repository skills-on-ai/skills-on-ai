---
name: digital-health-metrics
description: Use when asked to define, calculate, choose, or interpret a digital health metric, such as patient portal adoption, telehealth visit rate, appointment no-show rate, alert override rate, readmission rate, customer acquisition cost, or ROI and value on investment, or an evaluation framework such as RE-AIM, using the Digital Health Metrics book as the grounded source. Companion to [[digital-health-guide]], which covers delivery practice; for health spending and value see [[health-economics-metrics]].
---

# Digital Health Metrics: applying the book

The *Digital Health Metrics* book (<https://digital-health-metrics.github.io/>) is a reference of metric definitions, examples, and reasoning for teams building, evaluating, and commissioning digital health products. Each topic covers one metric or concept: definition, why it matters, how it is calculated, a worked example, data sources and caveats, pitfalls, and sources.

## Input required

- The metric or decision in question.
- The user's own data: counts, time windows, populations, and cohorts.
- The health system and country, because definitions and payer economics differ.
- The audience: clinicians, commissioners, investors, or regulators.

## Questions to ask first

1. Do you want to define a metric, calculate one, choose one, or interpret a result?
2. What data do you have, over which period and population?
3. Which health system or country applies?
4. Who will use the result?

## Topic map

The book groups its topics under these headings:

- **Patient engagement and access:** portal adoption, telehealth visit rate, appointment no-show rate, engagement consistency, user retention, DAU/MAU stickiness, patient Net Promoter Score, System Usability Scale.
- **Digital care operations and safety:** clinical alert override rate, digital referral turnaround time, time to intervention, bed-day reduction.
- **Clinical outcomes and quality:** biometric improvement and stabilization rates, triage routing accuracy, medication adherence, hospital readmission, ePROM completion.
- **Marketing and growth economics:** true customer acquisition cost, LTV to CAC ratio, marketing efficiency ratio.
- **Digital health equity:** digital access rate, digital literacy rate.
- **Technical and operational infrastructure:** physician burnout rate, device uptime rate.
- **Financial and economic value:** cost per episode of care, emergency department diversion rate, ROI and VOI.
- **Evaluation frameworks:** RE-AIM, the WHO Digital Health Assessment Framework, and ISO/TS 82304-2.

Topics live at `locales/en-gb-oxendict/topics/<slug>/index.md`, and the book's `README.md` is the categorized index.

## Method

1. **Find the topic.** Use the categorized index, then read the full topic, not only the one-line hook.
2. **Use the book's definition.** Give the numerator, denominator, and time window exactly as the topic does, and say when a team's local definition differs.
3. **Compute from the user's numbers.** Show the formula and the inputs. State any default and any missing input.
4. **Pair with a safety or balancing metric.** Several topics, such as bed-day reduction and ED diversion, say to report them alongside a safety metric. Do the same.
5. **Add the caveats.** Give the data sources and pitfalls from the topic, including how the metric can be gamed.
6. **Follow cross-links** to related topics, and cite the topic files used.

## Output format

1. The topic or topics used.
2. The definition, formula, and calculation with inputs.
3. The interpretation, with the balancing metric.
4. The caveats and pitfalls that apply.
5. Gaps: what the book does not cover or the user did not supply.

## Ground rules

- Read the topic before answering. Do not invent benchmark values, thresholds, or sources.
- Report equity cuts where the topic calls for them, since access and literacy gaps can hide behind a good average.
- Do not rank individuals or tie pay or discipline to a single number.
- Treat dated figures as dated and suggest re-verifying anything central to a live decision.
- Metrics inform clinical and commissioning decisions; they do not replace clinical judgment.

## Self-check before answering

- Did I use the book's definition and say where mine differs?
- Did I name a balancing or safety metric?
- Did I say how the metric can be gamed or misread?

## Common pitfalls

- Conflating registration, activation, and active use when reporting portal adoption.
- Reporting video and telephone visits as one telehealth number.
- Counting only platform-reported spend when computing acquisition cost.
- Celebrating a one-off biometric improvement instead of sustained control.
- Reporting averages that hide who lacks digital access.

## Example prompt

> Our virtual ward reports 1,200 bed days saved. Using the Digital Health Metrics book, show me how to compute it properly and which safety metric to report alongside it.

## Learn more

- Digital Health Metrics: <https://digital-health-metrics.github.io/>
- Companion book on practice: [[digital-health-guide]]
