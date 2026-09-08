---
name: mlops
description: Use when asked about MLOps — the practices and infrastructure for deploying, monitoring, and maintaining ML models in production reliably — as distinct from the model-development and training work itself, and from [[machine-learning-model-card]], which documents a model for downstream users rather than operating it once it's live.
---

# MLOps

MLOps is the set of practices and infrastructure for getting a trained
machine learning model into production and keeping it working reliably
once it's there — versioning, deployment, monitoring, and retraining.
It picks up where model development leaves off: training a good model
is only useful if it can be deployed safely, observed in production,
and kept current as the world it's making predictions about changes.

## Key components

- **Versioning** — tracking not just the model artifact but the exact
  data and code that produced it, so any deployed model can be traced
  back to a reproducible training run.
- **Staged deployment pipeline** — rolling a new model out to a small
  slice of traffic first (a canary or shadow deployment), checking it
  behaves as expected, and expanding gradually, rather than a single
  all-at-once release to every user.
- **Model performance monitoring** — tracking prediction quality in
  production (accuracy, calibration, drift from training-time behavior)
  as its own signal, separate from system uptime or latency.
- **Retraining trigger or cadence** — a defined condition or schedule
  for retraining the model (a performance-drop threshold, a fixed
  interval, a data-drift alert), rather than deploying it once and
  leaving it running indefinitely.

## Why monitoring model performance differs from monitoring system health

A model can be perfectly "up" — serving requests, low latency, no
errors — while its predictions have quietly gotten worse, because the
real-world data it's now seeing has drifted from the data it was
trained on. Standard infrastructure monitoring (CPU, latency, error
rate) has nothing to say about this; a request that gets a
confidently wrong answer looks identical, at the infra level, to one
that gets a right answer. Catching this requires monitoring built
specifically for model behavior: tracking prediction distributions,
comparing live input data to training data, and where possible
measuring actual outcomes against predictions after the fact.

## Common pitfalls

- **Only system/infra health monitored** — dashboards track uptime and
  latency while prediction quality silently degrades from data drift,
  and nobody notices until a downstream metric or a customer complaint
  makes the degradation impossible to ignore.
- **No versioning tying a model to its data and code** — a production
  issue traces back to "some model deployed sometime last quarter,"
  with no way to reproduce exactly what was trained, on what data, or
  debug what went wrong.
- **No staged rollout** — a new model goes to 100% of traffic
  immediately, so a regression reaches every user before anyone
  notices, instead of being caught in a small canary slice first.
- **Retraining left to happen "whenever"** — with no defined trigger or
  cadence, a model quietly keeps serving on stale training data long
  after the population it predicts on has shifted.
- **No rollback path** — a bad deployment has no quick way back to the
  previous known-good model, turning a monitoring alert into an
  extended incident.
- **Monitoring built only for the model that's live today** — the
  pipeline isn't set up to compare a new candidate model against the
  current one before full rollout, so regressions are found in
  production instead of in a staged comparison.

## Learn more

- [[machine-learning-model-card]] for documenting a model's intended
  use and limitations, complementary to actually operating it in
  production.
- [[data-pipeline]] for the data-movement and transformation processes
  that feed both training and live inference.
- [[configuration-management]] for the broader discipline of tracking
  exactly what configuration produced a given running system.
- [[on-call-rotation]] for who actually responds when a model
  performance or rollout alert fires.
