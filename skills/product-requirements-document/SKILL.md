---
name: product-requirements-document
description: Use when asked to write or review a Product Requirements Document (PRD) — what a feature or product should do and why, before it's built — distinct from a [[functional-specification]] (broader technical scope of how it's built) and a [[user-story]] (one specific PRD requirement written from the user's perspective, typically one of several inside a PRD).
---

# Product Requirements Document

A Product Requirements Document (PRD) specifies what a feature or
product should do and why, before anyone starts building it. It's the
shared reference that product, design, and engineering align on before
committing effort — narrower in scope than a [[functional-specification]]
(which covers broader technical scope, including how the system is
built) and made up of individual [[user-story]] items describing specific
user-facing requirements.

## Key components

- **The problem and who has it** — a clear statement of what's broken or
  missing today, and for which specific user or segment, before any
  proposed solution appears. Without this, readers can't later judge
  whether the shipped solution actually solved anything.
- **Success metrics, defined before building** — the specific numbers
  that will indicate the feature worked, written down before
  development starts (see below for why order matters here).
- **Scope: in and out** — an explicit list of what this effort covers
  and, just as explicitly, what it does not — the second list is easy to
  skip and is where scope creep usually starts.
- **Requirements** — typically expressed as a set of [[user-story]]
  entries, each with its own acceptance criteria, rather than one long
  prose requirements list.
- **Open questions and assumptions** — anything still unresolved or
  assumed true, stated openly rather than quietly baked into the design
  as if it were settled fact.
- **Non-functional requirements** — performance, accessibility, privacy,
  and localization expectations, when relevant, so they don't surface as
  surprises during implementation or review.

## Why success metrics come before building, not after

Defining success metrics after launch invites picking whichever number
happened to look good — engagement went up, so call it a win; retention
didn't move, so don't mention retention. Metrics chosen in advance, while
nobody yet knows the outcome, force an honest commitment to what
"success" actually means, and make the post-launch review a real
evaluation instead of a retroactive victory lap.

## Common pitfalls

- **Metrics decided after launch** — "success" gets redefined to match
  whatever happened to move, which makes the entire evaluation
  unfalsifiable and worthless as a decision input for next time.
- **No explicit out-of-scope list** — without one, scope creep isn't a
  violation of anything written down, since nothing was ever actually
  excluded in writing.
- **Solution spec with no stated problem** — a PRD that jumps straight
  to "build X" without saying what problem X solves leaves nobody able
  to later judge whether X actually helped.
- **Assumptions treated as settled facts** — an assumption not flagged
  as an assumption gets built on top of without anyone checking it,
  and the whole plan can be resting on something nobody verified.
- **One giant requirement instead of discrete stories** — a PRD written
  as one large paragraph of requirements is hard to estimate, build
  incrementally, or verify against; breaking it into [[user-story]]
  entries with their own acceptance criteria fixes this.

## Learn more

- [[user-story]] for how individual requirements inside a PRD get
  written from the user's perspective, with their own acceptance
  criteria.
- [[functional-specification]] for the broader technical scope document
  a PRD's requirements often feed into.
- [[product-roadmap]] for how a PRD's feature fits into the larger,
  ongoing plan across the whole product.
- [[feature-prioritization]] for deciding which candidate PRDs actually
  get built first.
