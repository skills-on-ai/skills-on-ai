---
name: technical-debt-register
description: Use when asked to create or maintain a technical debt register — a tracked, visible list of known shortcuts, deferred fixes, and code needing rework — so debt is a deliberate, chosen tradeoff rather than something invisible until it causes a problem, as distinct from [[refactoring]], which is the act of paying down debt rather than tracking that it exists.
---

# Technical Debt Register

A technical debt register is a tracked, visible list of known
shortcuts and deferred work in a codebase: places where the team chose
speed over the ideal solution, and what that choice costs if it's
never revisited. Its purpose isn't to eliminate debt — some debt is a
reasonable tradeoff — but to make sure every piece of it is a decision
someone made on purpose, not something forgotten until it causes an
outage or blocks a feature.

## Key components

- **Description of the debt** — specifically what was cut and why, at
  the time it was taken on ("the export job runs synchronously instead
  of via a queue because the queue infra wasn't ready for the launch
  deadline"), not a vague label.
- **Estimated cost or risk if left unaddressed** — what gets worse the
  longer this stays unfixed: performance degradation, a scaling limit,
  a security exposure, a maintenance burden that compounds as more
  code depends on the shortcut.
- **Owner** — a specific person or team accountable for the entry,
  responsible for keeping its status current and raising it when it
  becomes urgent.
- **Rough priority** — an honest assessment of how soon this needs
  addressing relative to other debt and other work, revisited
  periodically rather than set once and forgotten.
- **Status** — whether the entry is still open, in progress, or
  resolved, so the register reflects the current state of the
  codebase rather than accumulating stale entries indefinitely.

## Why visibility matters more than eliminating debt

Not all technical debt is a mistake — sometimes shipping a shortcut now
and fixing it properly later is the right tradeoff, given a deadline
or an uncertain requirement. The register's job isn't to shame that
choice or force every item to zero; it's to make sure the tradeoff was
actually chosen, by someone, with the cost understood, rather than
quietly accumulating in code nobody flagged. A team that reviews its
register regularly can weigh a debt item against other priorities on
purpose. A team with no register discovers its debt the hard way — an
outage, a security incident, or a feature that turns out to be far
more expensive to build than expected because of what it has to work
around.

## Common pitfalls

- **Kept but never reviewed or prioritized** — a register nobody
  revisits against other work becomes a graveyard of good intentions:
  entries pile up, nothing gets scheduled, and the list stops informing
  any actual decision.
- **Entries too vague to act on** — "clean up the auth code" gives a
  future reader no way to scope the work, estimate its cost, or even
  confirm it's still needed; a specific entry names the exact shortcut
  and where it lives.
- **Debt taken on without ever being logged** — a shortcut made under
  deadline pressure and never written down defeats the entire point of
  the register: it's now invisible debt again, indistinguishable from
  code nobody ever meant to revisit.
- **No owner assigned** — an entry with no one accountable for it never
  gets raised in planning and never gets fixed, regardless of how it's
  prioritized.
- **Treated as a backlog of blame** — logging debt in a way that reads
  as criticizing whoever wrote the shortcut discourages people from
  logging their own, which drives debt back underground.
- **Priority set once and never revisited** — an item marked low
  priority a year ago may have quietly become urgent as more code came
  to depend on the shortcut, but nothing prompts anyone to re-check it.

## Learn more

- [[refactoring]] for the actual work of paying down an entry once it's
  been prioritized, as distinct from tracking that it exists.
- [[architecture-decision-record]] for recording the reasoning behind a
  deliberate tradeoff at the time it's made, which a debt register
  entry can reference.
- [[code-review-checklist]] for the point in a change's lifecycle where
  a reviewer often first spots a shortcut worth logging.
- [[postmortem]] for how an unaddressed debt item that causes an
  incident often surfaces as a follow-up action back into the register.
