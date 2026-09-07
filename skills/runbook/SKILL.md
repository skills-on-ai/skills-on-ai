---
name: runbook
description: Use when asked to write a runbook — a step-by-step operational procedure for a specific, recurring task or system situation, such as restarting a service, rotating a credential, or failing over a database — as distinct from an [[incident-response-plan]], which governs roles and communication during an incident rather than the precise technical steps for one specific action.
---

# Runbook

A runbook is a precise, step-by-step procedure for handling one
specific, recurring operational task or system situation — restarting a
service, rotating a credential, failing over a database. Its purpose is
to let someone execute a known-correct procedure exactly, under
pressure, without having to reconstruct it from memory or documentation
scattered elsewhere.

## Key components

- **Trigger** — the specific condition under which this runbook applies,
  stated concretely enough that someone can quickly confirm it's the
  right procedure before starting (e.g. "checkout-service p99 latency
  exceeds 2s for 5 minutes," not "when things seem slow").
- **Numbered steps** — actions in exact order, precise enough to follow
  under stress: exact commands, exact menu paths, exact values to enter
  — not paraphrased descriptions that assume the reader already knows
  the details. Write steps needing sub-points as flat, complete
  sentences rather than nesting a sub-list under a numbered step.
- **Expected output at each step** — what a successful step actually
  looks like (a specific log line, a status code, a dashboard reading)
  so the person running it can tell whether it worked before moving to
  the next step, rather than assuming success.
- **Verification step** — a final check confirming the overall procedure
  achieved its goal, distinct from each individual step's expected
  output.
- **Rollback step** — what to do if a step fails or the procedure needs
  to be undone partway through, so a failed attempt doesn't leave the
  system in a worse or ambiguous state.
- **Ownership and last-verified date** — who maintains the runbook and
  when it was last actually confirmed to work against the real system.

## How runbooks fit into incident response

A good runbook is written and verified in advance, then simply executed
during a real incident — it's what a responder in an
[[incident-response-plan]] reaches for instead of improvising a fix live
while the pressure is on. The response plan governs who's in charge and
how the incident is communicated; the runbook is the actual technical
procedure that person or team runs. Referencing the specific runbook
needed by name in the response plan (rather than describing the fix in
prose) keeps the two in sync.

## Common pitfalls

- **Steps accurate when written but drifted since** — a system change
  (a renamed service, a moved dashboard, a deprecated command) silently
  breaks step 4 of a runbook nobody's touched since, and the first
  sign is someone hitting the broken step mid-incident.
- **No verification step** — without an explicit way to confirm a step
  worked, someone can complete every step and still not know whether
  the actual problem is fixed.
- **Never actually run until the real incident** — a runbook drafted
  from documentation but never tried against the real system carries
  untested assumptions that surface at the worst possible time; see
  [[disaster-recovery-testing]] and [[chaos-testing]] for practices that
  exercise runbooks before they're needed for real.
- **No rollback step** — a procedure that can fail partway with no
  documented way back leaves the system in an ambiguous state exactly
  when clarity matters most.
- **Vague steps that assume tribal knowledge** — "restart the service"
  without the exact command, host, or flag forces the person running it
  under pressure to guess or go find someone who remembers.
- **Nested sub-steps under one numbered step** — burying several
  distinct actions inside a single numbered item makes it easy to skip
  one under pressure; give each discrete action its own number instead.

## Learn more

- [[incident-response-plan]] for the roles, escalation, and
  communication process a runbook gets executed within during a real
  incident.
- [[postmortem]] for how a runbook gap or failure discovered during an
  incident typically becomes a follow-up action to fix the runbook.
- [[disaster-recovery-testing]] for periodically exercising runbooks
  (like a failover procedure) before they're needed for real.
- [[chaos-testing]] for deliberately triggering failure conditions to
  confirm a runbook's trigger and steps actually work as written.
