---
name: product-roadmap
description: Use when asked to build, review, or explain a product roadmap — the ongoing, product-wide plan of themes and rough timeframes communicated to stakeholders — distinct from a [[project-charter]], which is a single project's formal scope document with a defined start and end.
---

# Product Roadmap

A product roadmap is a visual plan of a product's direction over time.
It communicates priorities and sequencing to stakeholders — leadership,
sales, engineering, customers — so everyone can see where the product is
headed and why, without pretending to be a fixed delivery schedule. Unlike
a [[project-charter]], which scopes one project with a start and an end,
a roadmap is ongoing and covers the whole product's evolution.

## Key components

- **Themes or outcomes, not just a feature list** — each row or block
  states the underlying goal (e.g. "reduce time to first value for new
  users") rather than only a shipped artifact (e.g. "add onboarding
  wizard"). Features can change as discovery continues; the outcome is
  what the roadmap actually commits to.
- **Rough timeframes** — "now / next / later" buckets for anything past
  the very near term, tightening to real dates only for work that's
  actually close and well understood. Precision should track certainty,
  not the other way around.
- **Explicit non-goals** — a visible "not planned" section alongside what
  is planned, so stakeholders don't have to guess whether something was
  overlooked or deliberately deprioritized.
- **Audience-appropriate detail** — an externally shared roadmap is
  usually thinner (themes and quarters) than an internal one (which can
  carry more granular sequencing and dependencies).
- **A visible update cadence** — a date or version marker showing when
  the roadmap was last revised, so readers know how fresh it is.

## Why outcome-based beats a pure feature list

A feature list says what will ship. A theme says why it's shipping —
what problem or metric it moves. When priorities inevitably conflict
(two teams want the same engineering capacity, a big customer asks for
something not on the list), stakeholders need the "why" to reason about
the tradeoff. A list of features with no stated outcome gives them
nothing to weigh against each other except gut feel or seniority, which
is exactly the dynamic a shared roadmap is supposed to replace.

## Now / next / later over exact dates

Committing to an exact date for something 9 months out manufactures
false precision: the team doesn't actually know that yet, and everyone
reading the roadmap should be able to tell the difference between "this
ships March 14" and "this is a later-stage bet." Now/next/later (or
similar horizon buckets) communicates real confidence level honestly.
Near-term items can and should carry firmer dates as they firm up.

## Common pitfalls

- **False precision far into the future** — an exact date attached to
  distant work reads as a promise; when it inevitably slips, it looks
  like a broken commitment rather than the normal uncertainty it always
  was. Use horizon buckets for anything not near-term.
- **Feature list with no stated outcome** — without the "why" attached
  to each item, stakeholders can't reason about tradeoffs when two
  priorities compete for the same resources.
- **Built once, never revisited** — priorities genuinely change as the
  market, customers, and strategy shift; a roadmap frozen at its
  creation date silently goes stale and stops being trusted, even if
  nobody has formally invalidated it.
- **No stated non-goals** — leaving out what's explicitly not planned
  invites stakeholders to assume it's simply been forgotten, prompting
  repeated re-litigation of the same request.
- **One roadmap for every audience** — sharing the same granular,
  caveat-laden internal version externally either overcommits the
  company or overwhelms readers who needed only the themes.

## Learn more

- [[project-charter]] for scoping a single project with a defined start
  and end, as opposed to a roadmap's ongoing, product-wide view.
- [[product-requirements-document]] for the detailed spec that a
  near-term roadmap item eventually turns into once it's ready to build.
- [[feature-prioritization]] for the framework used to decide what
  actually earns a spot on the roadmap and in what order.
- [[product-management]] for the broader discipline a roadmap is one
  artifact of.
