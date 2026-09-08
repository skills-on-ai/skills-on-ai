---
name: data-quality
description: Use when asked to define, measure, or improve data quality — whether data is accurate, complete, consistent, and fit for its actual use — as distinct from [[data-governance]], which is the policy and ownership framework around data, not the measurable property of the data itself.
---

# Data Quality

Data quality is the measurable property of whether data is accurate,
complete, consistent, timely, and free of unintended duplicates — in
short, whether it's fit for the purpose someone actually intends to use
it for. It's a property you can check and score, not a policy document;
the policies and ownership that protect it belong to
[[data-governance]].

## Key dimensions

- **Accuracy** — the data correctly reflects the real-world thing it
  represents (a customer's address is their actual current address, not
  a stale or mistyped one).
- **Completeness** — required fields and records are actually present,
  not null or missing where a value is expected.
- **Consistency across sources** — the same entity has the same value
  in every system that holds it; a customer's status shouldn't say
  "active" in one system and "cancelled" in another.
- **Timeliness** — the data is current enough for its use; a metric
  computed from data that's three days stale can be worse than no
  metric at all if it's presented as current.
- **Uniqueness** — no unintended duplicates; the same entity isn't
  represented as two or more records that a downstream count or join
  will silently double.

## Automated checks over manual review

Quality that's checked automatically and continuously, at the point
data is written or moved, catches problems while they're cheap to fix.
Quality that's checked manually and occasionally catches them only when
someone happens to look — often long after bad data has already been
joined into other tables, fed into a report, or used to make a
decision. Practically, this means building validation into the
[[data-pipeline]] itself: schema checks, null-rate thresholds,
row-count and uniqueness checks, and reference checks against known-good
values, all run on every load and failing (or at least flagging) the
run rather than letting bad data pass through silently.

## Why catching issues at the point of entry matters

The cost of a data quality problem compounds with distance from its
source. A bad value caught by a validation check at ingestion costs a
rejected row and a fix. The same bad value discovered by a downstream
report, or worse, by a customer, costs an investigation to trace it
back through every table and dashboard it touched, plus whatever
decision was made on the wrong numbers in the meantime. Automated
checks built as close to the point of entry as possible are what make
the difference between the two outcomes.

## Common pitfalls

- **Quality checked manually and occasionally** — someone spot-checks a
  table now and then instead of validation running automatically on
  every load, so problems accumulate silently between checks.
- **Issues discovered downstream instead of at entry** — a broken join,
  a wrong total, or a customer-facing error is what surfaces a data
  problem, rather than a validation rule catching it the moment bad
  data entered the system.
- **"Quality" defined only as technical correctness** — a field is
  well-typed, non-null, and passes every schema check, but nobody
  verified it actually means what downstream consumers assume it
  means (e.g. a "revenue" field that's pre-tax in one source and
  post-tax in another, both technically valid).
- **No agreed definition of "correct" for a given field** — different
  teams silently apply different assumptions to the same column
  because no one wrote down what it's supposed to represent.
- **Duplicate detection skipped** — the same entity loaded twice from
  overlapping sources inflates counts and totals without any single
  record looking obviously wrong.
- **Checks that only run in a separate QA environment** — validation
  logic that isn't part of the actual production pipeline drifts out
  of sync with what's really running, and stops catching real issues.

## Learn more

- [[data-governance]] for the ownership, classification, and policy
  framework that determines who's accountable for fixing a quality
  problem once it's found.
- [[data-pipeline]] for where automated quality checks actually get
  built in — as part of the extract/transform/load process itself.
- [[machine-learning-model-card]] for how poor-quality training or
  evaluation data shows up later as a model's blind spots.
- [[mlops]] for monitoring data drift in production, a quality problem
  that develops gradually rather than arriving as one bad load.
