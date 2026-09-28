---
name: extreme-programming
description: Use when asked to apply Extreme Programming (XP) — pair programming, test-driven development, continuous integration, refactoring, and sustainable pace as the specific engineering practices behind agile delivery — as distinct from scrum's process/role framework, which XP's practices are commonly run inside rather than as a competing alternative.
---

# Extreme Programming (XP)

Extreme Programming, created by Kent Beck, is an agile software
development methodology defined by a specific set of *engineering*
practices — unlike [[scrum]], which mostly defines roles, artifacts,
and events without prescribing how the code itself gets written, XP
prescribes the technical discipline directly: pair programming,
test-driven development, continuous integration, and frequent, small
releases, aimed at improving software quality and responsiveness to
changing requirements.

## The five values

- **Communication** — most project problems trace back to something not
  communicated; XP's practices (pairing, on-site customer, collective
  ownership) are largely designed to force communication that a
  document-based process would let slide.
- **Simplicity** — build the simplest thing that could possibly work for
  today's known requirements, rather than speculatively designing for
  requirements that may never arrive.
- **Feedback** — get real feedback as fast as possible, at every level:
  a unit test gives feedback in seconds, pair programming gives feedback
  continuously, a short release cycle gives feedback from real users
  within weeks rather than months.
- **Courage** — the willingness to make a needed change (refactor
  working code, throw away a bad design, tell the customer an estimate
  is wrong) even when it's uncomfortable, because the other four values
  give enough safety net to act on it.
- **Respect** — every team member's contribution is valued; practices
  like collective code ownership and sustainable pace only work in a
  team that genuinely respects each other's work and limits.

## Core practices

- **Pair programming** — two developers work at one workstation, one
  writing while the other reviews in real time and thinks ahead; catches
  defects immediately rather than at a later review stage, and spreads
  knowledge across the team as pairs rotate.
- **Test-driven development (TDD)** — write a failing test, write the
  minimum code to pass it, then refactor; keeps the codebase continuously
  covered by tests that were written *before* the implementation they
  verify, rather than added afterward (or not at all).
- **Continuous integration** — integrate and test code changes multiple
  times a day rather than in large, infrequent merges, so integration
  conflicts surface small and early instead of large and late.
- **Refactoring** — continuously improve the code's internal structure
  without changing its external behavior, keeping the design suited to
  today's actual requirements rather than accumulating the debt of
  "simplest thing that worked at the time" left unrevisited.
- **Collective code ownership** — any pair can improve any part of the
  codebase at any time, rather than code being siloed to whoever
  originally wrote it — this requires the shared coding standards and
  test coverage the other practices provide to be safe.
- **Small releases** — release working, valuable software in small
  increments, keeping the feedback loop with real users short.
- **Sustainable pace** — work at a pace the team can sustain
  indefinitely (historically stated as "no more than 40-hour weeks");
  chronic overtime degrades the judgment and code quality the other
  practices depend on.
- **On-site customer** — a real customer or customer representative is
  available to the team continuously, answering questions and clarifying
  priority in real time rather than through a specification document.

## XP vs. Scrum

XP and [[scrum]] address different layers and are commonly used
together: Scrum defines the team's roles, planning cadence, and
ceremonies (what to build, in what order, on what rhythm); XP defines
the engineering practices for *how* the code itself gets built well
within that cadence. A team can run Scrum's sprints without any of XP's
technical practices (and often ships lower-quality code as a result), or
run XP's practices without Scrum's specific role/ceremony structure.

## Common pitfalls

- **Adopting pair programming or TDD as a checkbox without the
  supporting values** — the practices depend on genuine communication and
  courage to work; performing them mechanically (pairing in silence,
  writing tests after the code purely to hit a coverage number) loses
  most of their actual value.
- **Skipping refactoring because "it isn't a feature"** — without
  ongoing refactoring, "simplest thing that could work" accumulates into
  a design that no longer fits the system's actual requirements,
  eventually slowing delivery of genuine features.
- **Chronic overtime treated as normal** — undermines sustainable pace
  and, empirically, the judgment quality the other practices depend on.
- **No real on-site/available customer** — without fast access to real
  priority and requirements answers, the team either stalls on decisions
  or guesses, undermining the fast-feedback premise the other practices
  are built around.

## Learn more

- [[scrum]] for the complementary process/role framework XP's engineering practices are commonly run inside.
- [[agile-principles]] for the underlying values XP's specific practices operationalize.
- [[kanban]] for a contrasting, flow-based process model XP's practices can also pair with.
