---
name: threat-modeling
description: Use when asked to threat model a system or feature — proactively analyzing a design for security weaknesses before it's built — as distinct from penetration-testing (see below), which attacks a system that already exists.
---

# Threat Modeling

Threat modeling is a structured exercise for finding a system's security
weaknesses at design time, before a single line of code is written. It
asks "what could go wrong here, and what would an attacker actually do
about it" while the design is still cheap to change, rather than
discovering the same weaknesses later in production.

## STRIDE: a common structured approach

STRIDE gives each part of a design (a data flow, a process, a data
store, a trust boundary) a checklist of six threat categories to ask
about:

- **Spoofing** — can an attacker pretend to be someone or something
  they're not (a user, a service, a device)?
- **Tampering** — can data or code be modified without authorization,
  in transit or at rest?
- **Repudiation** — can an actor deny having done something, because
  the system doesn't log or prove it happened?
- **Information disclosure** — can data reach someone who shouldn't see
  it?
- **Denial of service** — can the system, or a part of it, be made
  unavailable to legitimate users?
- **Elevation of privilege** — can an actor gain capabilities beyond
  what they were granted?

Walking a design diagram component by component and trust boundary by
trust boundary against these six questions surfaces threats a purely
functional review of the same design would miss.

## When to do it

- **At design time** — before implementation starts, while the
  architecture (components, data flows, trust boundaries) is still a
  diagram or a proposal, not committed code.
- **When the design changes materially** — a new trust boundary, a new
  external integration, a new class of data being stored, or a
  significant architecture change all reopen the threat model; it's not
  a one-time gate at project kickoff.

## Threat modeling vs. penetration testing

These sit at different points in a system's life and answer different
questions:

- **Threat modeling** — a design-time analysis exercise, done on paper
  or a diagram, asking what *could* go wrong before anything is built.
  Cheap, exploratory, and can cover threats that would be expensive or
  destructive to actually attempt.
- **[[penetration-testing]]** — actively attacking a system that
  already exists, to confirm whether a real vulnerability can actually
  be exploited in practice.

A thorough threat model narrows and informs what a later penetration
test should specifically target; a penetration test can't substitute
for a threat model because it only tests the system as built, not the
design decisions behind it.

## Common pitfalls

- **Done once at the start and never revisited** — a threat model
  frozen at the initial design stops reflecting a system that has since
  gained new integrations, new data flows, or new trust boundaries.
- **Treated as a checkbox exercise** — filling in a STRIDE template
  without actually trying to think like an attacker produces a document
  that looks thorough but misses the threats that matter.
- **Findings identified but never fed into a fix** — a threat model
  that lists risks with no owner, no remediation, and no connection to
  an actual [[incident-response-plan]] mitigation is just a record of
  problems nobody acted on.
- **Only considering external attackers** — insider threats, compromised
  dependencies, and misconfiguration are threats too, not just an
  outside adversary.
- **Modeling the system nobody actually built** — a threat model based
  on the intended architecture diagram, never checked against what was
  actually implemented, can miss the gap between the two.

## Learn more

- [[penetration-testing]] for actively attacking a built system to
  confirm a threat model's findings are real.
- [[incident-response-plan]] for the tactical response when a threat
  that was (or wasn't) modeled actually materializes.
- [[runbook]] for documenting the operational steps a mitigation
  requires once a threat model finding is fixed.
- [[postmortem]] for reviewing why a threat model missed something,
  after an incident reveals it did.
