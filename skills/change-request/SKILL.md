---
name: change-request
description: Use when asked to write or process a change request — a formal request to modify a specific system, process, or environment under IT/ITIL-style change control — as distinct from [[enterprise-change-management]], which governs organizational and people change (reorgs, new processes, culture shifts) rather than controlled technical or operational changes to a system.
---

# Change Request

A change request is a formal request to modify a specific system,
process, or environment: a config change, a deployment, a permission
change, an infrastructure update. It exists to make sure a change is
described, assessed, and approved before it happens, rather than
happening quietly and being discovered later when something breaks.

## Key components

- **Description of the change and its purpose** — exactly what's
  changing and why, specific enough that a reviewer who didn't propose
  it can understand what's being asked for and what problem it solves.
- **Risk and impact assessment** — what could go wrong, what systems or
  users are affected if it does, and how likely and severe that impact
  is, so the approval step can be scaled to the actual risk rather than
  guessed at.
- **A rollback plan** — the specific steps to undo the change if it
  causes a problem, checked for feasibility before the change is
  approved, not improvised afterward.
- **An approval step appropriate to the risk level** — low-risk changes
  get a lightweight sign-off; changes with real blast radius get
  broader review, a scheduled change window, or a change advisory
  board — not every change needs the same level of scrutiny.

## Why proportionate approval matters

A change process that runs every change through the same heavyweight
approval, regardless of actual risk, doesn't make the risky changes
safer — it just makes the trivial ones slower. When updating a typo in
a help-text string requires the same sign-off as a production database
migration, people learn that the process is an obstacle rather than a
safeguard, and they start finding ways around it: unlogged changes,
informal approvals over chat, or batching real changes inside
low-scrutiny ones. Proportionate approval — a fast path for low-risk
changes and real scrutiny reserved for high-risk ones — is what keeps
the process fast enough that people actually use it for everything,
including the changes it most needs to catch.

## Common pitfalls

- **Every change routed through the same heavyweight approval** —
  regardless of actual risk, this slows down routine work and pushes
  people to route around the process entirely rather than wait for it.
- **No rollback plan** — a change approved and made with no thought
  given to undoing it means a bad outcome can't be reversed quickly,
  turning a manageable problem into an extended one.
- **Changes made with no request or record at all** — an
  out-of-process change is exactly the failure the whole system exists
  to prevent, and it's usually discovered only once something breaks
  and nobody can explain what changed.
- **Risk assessment skipped or treated as a formality** — a request
  approved without anyone seriously considering what could go wrong
  turns the approval step into a rubber stamp rather than a check.
- **Approval given verbally or informally** — a change approved in a
  hallway conversation or a chat message that isn't tied back to the
  request leaves no record of who actually authorized it.

## Learn more

- [[enterprise-change-management]] for the organizational and people
  side of change (reorgs, new processes) this technical change control
  process is distinct from.
- [[configuration-management]] for tracking the resulting state a
  change request modifies, so what actually changed stays recorded.
- [[disaster-recovery-plan]] for the broader recovery procedures a
  rollback plan sometimes needs to invoke for a high-risk change.
- [[runbook]] for the step-by-step execution procedure a change request
  often points to rather than describing the steps inline.
