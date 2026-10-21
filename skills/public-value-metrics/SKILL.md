---
name: public-value-metrics
description: Use when the user asks to explain a public-value concept, compute a metric such as social return on investment, value for money, or cost per outcome, apply Green Book appraisal, or build a business case for government or social-sector software, using the Public Value Metrics book as the grounded source of formulas, worked examples, and pitfalls. Companion to [[public-value-guide]], which covers practice rather than measurement; for health-specific economics see [[health-economics-metrics]].
---

# Public Value Metrics: applying the book

The *Public Value Metrics* book (<https://public-value-metrics.github.io/>) is a curated reference with one topic per metric or concept. Each topic has a definition, why it matters, the method, a worked example, the software-engineering connection, pitfalls, and sources. Use it as ground truth instead of recalling public-sector economics from memory, because it encodes governmental conventions (such as the Green Book discount rate, the Social Value Act, and ONS methodology) and known pitfalls that generic knowledge gets wrong.

## Input required

- The question, or the decision the metric supports.
- The user's own numbers: costs, outcomes, beneficiaries, time horizon, and counterfactual.
- The jurisdiction, because several frameworks in the book are UK-specific.
- The audience: finance, commissioners, a funder, or a board.

## Questions to ask first

1. Do you want to explain a concept, compute a metric, choose a metric, or build a full business case?
2. Which numbers do you already have, and which are missing?
3. Which country or jurisdiction applies?
4. Who is the audience for the result?

## Method

1. **Classify the ask:** explain a concept, compute a metric from the user's numbers, pick the right metric for a decision, or build a multi-metric argument.
2. **Find the topics.** Scan the book's `README.md`, a categorized index with a one-line hook per topic, then read the full topic files under `locales/en-gb-oxendict/topics/`. Do not rely on the hook line alone.
3. **Follow cross-links.** A real question usually spans two to four linked topics, so follow the links between them.
4. **Compute with the user's numbers.** Use the formulas verbatim from the topic's maths or method section. When a needed input is missing, use the topic's stated default and say explicitly that you did.
5. **Surface pitfalls unprompted.** If the user's framing walks into a listed pitfall, flag it before finishing the answer.
6. **Cite the source topic files** so the user can check the sources section.

## Building a business case

Typical composition for a government or social-sector software investment case:

- **Value framing:** `opportunity-cost-in-public-spending` for what is displaced, `cost-of-delay-in-public-programmes` for urgency, then `social-return-on-investment` or `value-for-money` to net it out.
- **Appraisal-grade framing:** `green-book-appraisal`, then `social-cost-benefit-analysis`, then `distributional-weighting` to judge who the value reaches. For digital services, `digital-service-standard`.
- **Proving the claim:** net off `additionality-and-deadweight` and `displacement-and-attribution` against a real `counterfactual-analysis`; a claim that skips this invites the question "would it have happened anyway?"
- **Frame and horizon:** decide whether the audience wants a money-metric social cost-benefit analysis or a population-results frame such as `outcomes-based-accountability`, because that changes which evidence counts.

For software-delivery topics such as developer productivity, technical debt, build versus buy, and benefits realisation, start from the "Software engineering and digital delivery connection" section of the book's `README.md`.

## Output format

1. The topics used, with their file paths.
2. The metric or argument, with each formula and the inputs used.
3. Which inputs are the user's and which are defaults from the book.
4. At least one relevant pitfall.
5. A freshness note on any dated figure.

## Ground rules

- Read the topic file before answering; do not answer from general knowledge when one exists on point.
- Do not invent numbers, discount rates, or valuations.
- Flag jurisdiction-specific frameworks (the Green Book, the Social Value Act, the Index of Multiple Deprivation) when the context is not the UK, since other countries have their own guides and indices.
- Many figures are dated in-line and refresh regularly. If a number central to a live decision looks more than a year old, say so and suggest re-verifying it.

## Self-check before answering

- Did I read the full topic and follow its links?
- Did I use the user's numbers and state every default?
- Did I net off deadweight, displacement, and attribution before claiming value?
- Did I add a caveat from the Pitfalls section?

## Common pitfalls

- Claiming full attribution without netting off deadweight and displacement.
- Treating cost per beneficiary as cost per outcome.
- Discounting the far future into irrelevance.
- Silently assuming a discount rate or wellbeing valuation.
- Mixing UK-specific frameworks into other jurisdictions without saying so.

## Example prompt

> Help me build a value-for-money case for a benefits-claim app at a county council. We spent 400,000 and think it helps 6,000 residents claim support they would otherwise miss.

## Learn more

- Public Value Metrics: <https://public-value-metrics.github.io/>
- Companion book on practice: [[public-value-guide]]
