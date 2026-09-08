---
name: machine-learning-model-card
description: Use when asked to write or review a model card — a document accompanying a trained ML model that describes what it does, how it was trained and evaluated, and its known limitations — as distinct from [[mlops]], which covers the infrastructure for deploying and monitoring a model rather than documenting it for downstream users.
---

# Machine Learning Model Card

A model card is a document that accompanies a trained machine learning
model, describing what it's for, how it was built and evaluated, and
where it's known to fall short. Its purpose is to let someone deciding
whether to use the model — a downstream engineer, a product team, an
auditor — judge whether it's actually appropriate for their situation,
without having to reverse-engineer that from the training code.

## Key components

- **Intended use** — the specific task and context the model was built
  and evaluated for, stated concretely enough that someone can check
  their situation against it.
- **Out-of-scope uses** — situations the model was explicitly not
  evaluated for and shouldn't be trusted in, stated as clearly as the
  intended use, not left implicit.
- **Training data description** — what data the model was trained on:
  its source, size, time period, and any known biases or gaps in what
  it covers.
- **Evaluation metrics and conditions** — the metrics used to judge
  performance, and the specific population and conditions they were
  measured on, so a reader can tell whether those conditions resemble
  their own.
- **Known limitations and failure modes** — where the model is known to
  underperform, including performance gaps across subgroups (e.g. by
  demographic, language, device type, or input length) rather than a
  single aggregate number.

## Why out-of-scope uses matter as much as intended use

Stating what a model is *for* only tells half the story. A model
applied outside the conditions it was actually evaluated under —
different language, different population, different input format,
different downstream stakes — can silently underperform in ways nobody
checked for, because the evaluation never covered that case in the
first place. Being explicit about out-of-scope uses gives a downstream
user a clear signal to stop and re-evaluate before deploying the model
somewhere its training and testing never anticipated, rather than
discovering the mismatch after it's already in production.

## Common pitfalls

- **Metrics reported only in aggregate** — a single overall accuracy or
  F1 score hides a real performance gap for a subgroup or condition
  that's underrepresented in the evaluation set, and the card gives no
  way to see it.
- **Card written once at release and never updated** — the model gets
  retrained on new data, or its actual usage drifts from what the card
  describes as intended, and the card keeps describing a version of the
  model and its use that no longer exists.
- **Limitations section vague or omitted** — "the model may not
  generalize to all cases" tells a reader nothing actionable; a useful
  limitations section names the specific conditions (languages,
  populations, input types, time periods) the model wasn't evaluated
  under.
- **Training data description too thin to assess bias** — "trained on
  internal data" without saying what that data covers or excludes gives
  a reader no way to judge whether the model's blind spots overlap with
  their use case.
- **Intended use written broadly to avoid limiting adoption** — stating
  the intended use vaguely enough that almost any application seems to
  qualify defeats the card's purpose of helping someone rule themselves
  out.
- **No link between the card and the actual deployed model version** —
  the card describes "the model" with no version or training-run
  identifier, so there's no way to confirm which running model in
  production it actually documents.

## Learn more

- [[mlops]] for the deployment, versioning, and monitoring
  infrastructure that keeps a production model connected to a specific,
  documented training run.
- [[data-quality]] for assessing whether the training and evaluation
  data described in the card is itself accurate and complete.
- [[data-governance]] for the ownership and provenance policies around
  the datasets a model card has to describe.
- [[prompt-engineering]] for the analogous practice of testing behavior
  against representative cases, applied to prompted models rather than
  trained ones.
