---
name: user-story
description: Use when asked to write or review a user story — a short, structured statement of a specific end-user need ("As a [role], I want [goal], so that [benefit]") that drives a feature — typically one of several components inside a larger [[product-requirements-document]].
---

# User Story

A user story is a short, structured statement of a specific need from an
end user's perspective, used to drive a feature. It's typically one
component among several that make up a larger [[product-requirements-document]],
each story capturing one discrete piece of user-facing behavior rather
than the whole feature at once.

## Standard structure

- **As a [role]** — the specific type of user who has this need, not
  "the user" generically when more than one role exists.
- **I want [goal]** — what that user is trying to do, stated as their
  goal, not as a system behavior.
- **So that [benefit]** — why they want it: the value they get once the
  goal is met. This clause is what keeps the story anchored to a real
  need instead of becoming a feature request for its own sake.

## Acceptance criteria

Every story needs acceptance criteria: the specific, checkable
conditions that must be true for the story to count as done. Without
them, "done" is just a matter of opinion between whoever wrote the story
and whoever builds it — each can reasonably believe something different
was agreed to. Acceptance criteria are usually written as a short list
of concrete conditions or as given/when/then scenarios, and they should
be settled before work starts, not negotiated after the fact once the
build already looks a certain way.

## INVEST qualities of a good story

- **Independent** — can be built and delivered without waiting on
  another story first; a story that only makes sense bundled with three
  others isn't really independent.
- **Negotiable** — describes the need, not a locked implementation;
  a story that dictates exact UI or technical approach leaves no room
  for the builder's judgment.
- **Valuable** — delivers something a user or the business actually
  cares about; a story with no traceable benefit is often really an
  internal task mislabeled as a user story.
- **Estimable** — the team can size it with reasonable confidence;
  a story too vague or too poorly understood to estimate needs more
  discovery before it belongs on a backlog.
- **Small** — fits comfortably inside a normal work cycle (e.g. a single
  sprint); a story that clearly won't finish in one cycle is usually
  several stories wearing a trench coat.
- **Testable** — has a clear way to verify it's done, which in practice
  means it has real acceptance criteria; a story nobody can test is a
  story nobody can actually finish.

## Common pitfalls

- **Written from the system's perspective** — "the system shall
  validate the email field" is a requirement, not a user story; if there's
  no role, goal, and benefit, it belongs in a spec, not the story backlog.
- **No acceptance criteria** — "done" stays a matter of opinion between
  the writer and the builder, and disagreements only surface at review
  time, when they're most expensive to resolve.
- **Too large to estimate or finish in a normal cycle** — a story that
  drags across multiple cycles without a clear finish line is a sign it
  needs to be split, not just left in progress longer.
- **Several stories bundled into one** — "as a user I want to sign up,
  verify my email, and set preferences" is three stories; bundling them
  hides partial progress and makes estimation unreliable.
- **Benefit clause treated as boilerplate** — writing "so that it works
  well" or skipping the benefit entirely strips out the one part of the
  story that justifies doing it at all.

## Learn more

- [[product-requirements-document]] for how individual stories combine
  into the larger document specifying a feature or product.
- [[functional-specification]] for the broader technical scope a set of
  stories often needs to satisfy.
- [[feature-prioritization]] for deciding which stories get built first
  when there are more than the team can do at once.
- [[product-roadmap]] for how a group of related stories maps onto the
  larger, ongoing plan for the product.
