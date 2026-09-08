---
name: configuration-management
description: Use when asked to set up or document configuration management — systematically tracking and controlling a system's settings, versions, and dependencies so its actual state is known and reproducible rather than drifting unrecorded — as distinct from a [[change-request]], which is the approval process for a specific proposed change rather than the ongoing record of a system's current configuration.
---

# Configuration Management

Configuration management is the practice of systematically tracking
and controlling a system's configuration — its settings, versions, and
dependencies — so that the actual state of the system is known at any
time and can be reproduced, rather than drifting unrecorded through
ad hoc manual changes. The goal is that the recorded configuration and
the real, running system are always the same thing.

## Key components

- **Configuration as versioned, reviewable code or data** — settings
  expressed as files checked into version control rather than changed
  by hand through a console or UI, so every change has a diff, an
  author, and a history.
- **A single source of truth** — one authoritative place that defines
  what a system's configuration *should* be, so there's never a
  question of which of several copies is correct.
- **Drift detection** — an automated way to catch when a system's
  actual, running state diverges from its recorded, intended
  configuration, rather than discovering the gap only when it causes a
  problem.
- **Consistent configuration across environments** — dev, staging, and
  production configurations generated from the same source with
  environment-specific overrides, rather than maintained as separate,
  independently edited copies.
- **An audit trail** — a record of who changed what, when, and why,
  usually inherited for free from version control history once
  configuration lives as code.

## Why configuration as code specifically helps

A setting changed by hand through a UI leaves no trace beyond the
system's current state: no record of who changed it, why, or what it
was before. Configuration expressed as code fixes this by making every
change reviewable before it's applied, versioned so any past state can
be reconstructed, and reproducible so the same configuration can be
applied to a new instance or environment with confidence it'll behave
the same way. This is the same underlying discipline as software
version control, applied to settings instead of application logic —
and it's what makes drift detectable in the first place, since there's
now a definite, recorded intended state to compare reality against.

## Common pitfalls

- **Manual out-of-band changes that never make it back into the
  tracked configuration** — someone fixes something directly on the
  live system to resolve an urgent problem, and the fix never gets
  written back into the source of truth, so the record and reality
  quietly diverge from that point on.
- **No drift detection** — without an automated check comparing actual
  state to intended state, divergence goes unnoticed until it causes a
  visible problem, often much later and harder to trace back.
- **Environments kept in sync by hand** — dev, staging, and production
  configurations maintained as separate copies edited independently
  gradually diverge, until a change that worked in staging behaves
  differently in production for reasons nobody can pin down.
- **Configuration secrets stored in plain text alongside regular
  settings** — credentials and keys committed the same way as ordinary
  configuration create an unnecessary security exposure.
- **No one owns the source of truth** — when it's unclear which
  repository or system is authoritative, people start treating
  whichever copy is in front of them as correct.

## Learn more

- [[change-request]] for the approval process a configuration change of
  real risk should go through before being applied.
- [[disaster-recovery-plan]] for why a recorded, reproducible
  configuration matters when rebuilding a system after a major
  disruption.
- [[data-governance]] for the related discipline of controlling and
  tracking data (rather than system settings) as an authoritative,
  auditable asset.
- [[mlops]] for how configuration-as-code principles extend to
  managing machine learning models and pipelines.
