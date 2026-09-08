---
name: feature-prioritization
description: Use when asked to rank competing feature or work candidates — via RICE, MoSCoW, value-vs-effort, or a similar framework — instead of prioritizing by whoever argues loudest or whichever request came in most recently.
---

# Feature Prioritization

Feature prioritization is the systematic ranking of competing feature or
work candidates against a shared framework, rather than by whoever
argues loudest, has the most seniority, or made the most recent request.
The point isn't the specific framework — it's replacing an ad hoc,
politics-driven ordering with one that's visible and defensible to
everyone affected by it.

## Common frameworks

- **RICE** — score each candidate on Reach (how many users it affects),
  Impact (how much it moves the needle for each of them), Confidence
  (how sure the team is about the reach and impact estimates), and
  Effort (how much work it takes). Combine them into a single comparable
  score, typically (Reach × Impact × Confidence) ÷ Effort.
- **MoSCoW** — sort candidates into Must have, Should have, Could have,
  and Won't have (this time). Simple and fast, useful for scoping a
  single release, though it says less about fine-grained ordering within
  a bucket than a scored framework does.
- **Value vs. effort** — plot each candidate on two axes, value delivered
  and effort required, and favor the high-value, low-effort quadrant
  first. Quick to run and easy to explain to non-specialists, at the
  cost of the precision a scored model like RICE offers.

## Why a shared framework beats ad hoc prioritization

Without a consistent framework, prioritization tends to reward whoever
pushes hardest or whoever asked most recently, not whatever actually
matters most. A shared framework makes the inputs to a tradeoff — reach,
impact, effort, confidence — visible to everyone, so a decision can be
explained and defended on its merits instead of being a function of
internal politics or recency. It doesn't remove judgment from the
process; it makes the judgment calls explicit and inspectable instead of
hidden.

## Common pitfalls

- **Effort estimated by whoever's excited about the feature** — an
  advocate for a feature tends to underestimate what it will actually
  take to build; effort estimates should come from whoever will actually
  do the work, not from the requester.
- **Framework applied once, then ignored** — the team scores everything
  carefully to build the initial list, then a loud stakeholder insists
  on reordering it anyway without re-scoring, which quietly defeats the
  entire point of having a shared framework.
- **False precision on confidence and reach** — presenting a confidence
  score or reach number as if it were measured, when it was actually a
  guess, gives the resulting priority order more authority than the
  underlying data supports.
- **Scoring only what's already on the list** — a framework only helps
  compare candidates that are actually in front of it; failing to
  capture a real competing idea means it never gets weighed at all.
- **Treating the score as the entire decision** — a framework's output
  is an input to a decision, not a replacement for judgment about
  strategic fit, dependencies, or timing that the numbers don't capture.

## Learn more

- [[product-roadmap]] for how prioritized work turns into the sequenced,
  outcome-based plan shared with stakeholders.
- [[product-requirements-document]] for the document a prioritized
  feature turns into once it's selected to be built.
- [[user-story]] for the individual, estimable units of work that
  prioritization frameworks are often scoring.
- [[product-management]] for the broader discipline feature
  prioritization is one recurring activity within.
