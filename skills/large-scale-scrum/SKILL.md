---
name: large-scale-scrum
description: Use when asked to scale scrum across many teams with LeSS (Large-Scale Scrum) — one Product Backlog, one Product Owner, and one Sprint shared across all teams, deliberately minimizing added roles and process — as distinct from scaled-agile-framework's more prescriptive, role-heavy approach to the same scaling problem.
---

# Large-Scale Scrum (LeSS)

LeSS, developed by Craig Larman and Bas Vodde, scales
[[scrum]] to multiple teams working on one product by adding as
*little* extra structure as possible: one Product Backlog, one Product
Owner, and one Sprint shared across all teams, rather than
introducing new roles or process layers to manage the scale. Its guiding
principle — "more with less" — treats each additional role, artifact, or
process as a cost to be justified, not a default response to growing
team count.

## The core structure

- **One Product Backlog, one Product Owner** — for the whole product,
  regardless of how many teams are building it, keeping a single
  coherent priority order rather than teams working against separately
  maintained backlogs.
- **One Sprint** — all teams sprint on the same cadence and produce one
  integrated product Increment at the end, not team-by-team increments
  reconciled later.
- **Feature teams, not component teams** — each team is cross-functional
  and capable of taking a full customer-facing feature end to end,
  rather than being organized around a technical layer or component;
  this is what makes a single shared backlog workable, since any team
  can in principle pull any backlog item.
- **Sprint planning in two parts** — Part One brings representatives from
  all teams together to select and clarify backlog items; Part Two lets
  each team plan their own sprint backlog and approach in detail.
- **Overall Retrospective** — in addition to each team's own
  retrospective, a cross-team retrospective looks at the *whole*
  multi-team system's process issues, not just each team's local ones.

## LeSS vs. LeSS Huge

Standard LeSS covers up to roughly 8 teams (around 50 people). Past that
scale, **LeSS Huge** adds **Area Product Owners**, each responsible for
one requirement area with its own area backlog pulled from the overall
Product Backlog — the minimum additional structure the method's authors
judge necessary once a single Product Owner can no longer meaningfully
manage the whole backlog personally, still deliberately smaller than
most alternative scaling frameworks' role set.

## LeSS vs. SAFe

Both scale Scrum-style delivery across many teams, but take opposite
philosophies: LeSS deliberately minimizes new roles, artifacts, and
process layers, keeping as much as possible identical to single-team
Scrum; [[scaled-agile-framework]] (SAFe) is more prescriptive,
defining additional roles (Release Train Engineer), events (PI
Planning), and organizational layers (Program, Portfolio) by default.
LeSS suits organizations willing to restructure toward genuine
feature teams and a single backlog; SAFe suits organizations wanting a
more complete, off-the-shelf structure without that same degree of
reorganization.

## Common pitfalls

- **Keeping component teams and expecting LeSS's single-backlog model to
  work** — if teams can't actually pull any backlog item because they're
  organized around a technical component rather than customer-facing
  features, the single shared backlog becomes a bottleneck rather than a
  coordination tool.
- **Adding roles "just in case" before LeSS Huge's team count actually
  requires it** — works against the method's core "more with less"
  principle; each added role should be justified by genuine need at the
  current scale, not adopted preemptively.
- **Running Sprint Planning Part One as a status meeting rather than
  genuine cross-team backlog clarification** — undermines the shared
  understanding the two-part planning structure is meant to build before
  teams plan their own work in Part Two.
- **Skipping the Overall Retrospective** — without it, systemic,
  cross-team process issues have no forum to surface in, even though
  each team's own retrospective is working fine locally.

## Learn more

- [[scrum]] for the single-team framework LeSS scales with minimal added structure.
- [[scaled-agile-framework]] for the contrasting, more prescriptive scaling framework.
- [[scrum-of-scrums]] for a lighter-weight coordination pattern that fits fewer teams and doesn't restructure backlog ownership.
