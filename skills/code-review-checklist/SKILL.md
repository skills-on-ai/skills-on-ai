---
name: code-review-checklist
description: Use when asked to create or apply a code review checklist — a structured set of things a reviewer checks on a code change (correctness, tests, readability, security, scope) — to keep reviews consistent across reviewers rather than dependent on whoever happens to review, as distinct from [[refactoring]], which is the act of restructuring code rather than evaluating someone else's change.
---

# Code Review Checklist

A code review checklist is a structured set of things a reviewer
checks on every code change, so review quality doesn't depend on which
reviewer happens to pick it up or how much time they have that day.
It's a floor, not a substitute for actually understanding what the
change does — a good review still requires reading and thinking about
the code, with the checklist making sure nothing load-bearing gets
skipped under time pressure.

## Key components

- **Correctness** — does the change do what it claims to do, including
  edge cases and error paths, not just the happy path demonstrated in
  the description or a screenshot.
- **Test coverage** — are the new or changed behaviors actually
  covered by tests, and do the tests verify the behavior rather than
  just exercise the code without meaningful assertions.
- **Readability and naming** — can someone unfamiliar with this change
  understand it from the code and its names alone, without needing the
  author to explain it in person.
- **Security-sensitive patterns** — unvalidated input, secrets in code
  or logs, missing authorization checks, unsafe deserialization, and
  other patterns that need scrutiny regardless of what the change is
  nominally about.
- **Scope** — is this change doing one coherent thing, or has it
  quietly grown to include an unrelated refactor, a drive-by fix, or a
  second feature that should have been its own change.

## Checklist as consistency, not a substitute for thought

A checklist earns its place by making review quality consistent —
every reviewer checks the same baseline things, regardless of mood,
familiarity with the code, or how much time is left in the day. It
fails when it becomes the review: ticking boxes ("tests present: yes,"
"naming ok: yes") without actually engaging with whether the change is
correct or whether the tests test the right thing turns review into
theater. The checklist should prompt a reviewer to look in the right
places; it can't do the looking for them.

## Common pitfalls

- **Applied mechanically without engaging with the change** — a
  reviewer who checks every box but never actually reasons about
  whether the logic is correct produces an approval that looks
  thorough and isn't.
- **Reviews that only check style and formatting** — surface-level
  issues are the easiest to spot, so a rushed or checklist-only review
  gravitates to them while correctness and security issues, which take
  real reading to catch, slip through unexamined.
- **No consistent standard across reviewers or moods** — the same
  reviewer approves a thorough change one day and rubber-stamps a
  risky one the next because of time pressure, familiarity with the
  author, or fatigue, with no checklist to anchor a consistent bar.
- **Checklist too long to actually use** — a checklist with forty items
  gets skimmed or ignored rather than applied; a shorter list that's
  actually followed beats a comprehensive one that isn't.
- **Scope creep waved through** — an unrelated change bundled into an
  otherwise-fine PR gets approved along with it because reviewing scope
  wasn't explicitly part of what to check.
- **No path for disagreement** — a checklist treated as a strict gate
  with no room for reviewer judgment on a specific case turns review
  into bureaucracy instead of a quality check.

## Learn more

- [[refactoring]] for the practice of restructuring code that a
  reviewer is often evaluating, as distinct from the checklist used to
  evaluate it.
- [[technical-debt-register]] for tracking a shortcut a reviewer
  flagged but chose to approve anyway, so it stays a visible, tracked
  decision.
- [[architecture-decision-record]] for the record a reviewer can check
  a change against when the change touches a decision that was already
  made and documented.
- [[postmortem]] for how a bug that slipped through review sometimes
  becomes the reason a checklist item gets added.
