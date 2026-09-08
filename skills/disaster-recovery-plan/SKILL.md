---
name: disaster-recovery-plan
description: Use when asked to write a disaster recovery plan — the written plan for recovering IT systems and data after a major disruption, including recovery objectives, sequence, and backup strategy — as distinct from [[disaster-recovery-testing]] (verifying the plan actually works, rather than the plan itself) and narrower than a [[business-continuity-plan]] (org-wide continuity across people, facilities, and suppliers, not just IT systems and data).
---

# Disaster Recovery Plan

A disaster recovery plan is the written plan for recovering IT systems
and data after a major disruption — a data center loss, a ransomware
attack, a catastrophic failure. It defines what gets restored, in what
order, how fast, and by whom. It's specifically about IT systems and
data; it doesn't cover people, facilities, or suppliers the way a
[[business-continuity-plan]] does.

## Key components

- **Recovery time objective (RTO) and recovery point objective (RPO)
  per critical system** — RTO is the maximum acceptable time a system
  can be down; RPO is the maximum acceptable amount of data loss,
  measured in time since the last good backup. Both are set per
  system, not as one blanket number for everything.
- **A prioritized recovery sequence** — the order systems get restored
  in, reflecting the reality that not everything can be brought back
  simultaneously and some systems are prerequisites for others.
- **Backup strategy and a verified restore procedure** — what's backed
  up, how often, where it's stored, and a documented, tested procedure
  for actually restoring from it, not just a description of the backup
  job.
- **Clear roles for who executes the plan** — named people or teams
  responsible for each part of the recovery, so execution doesn't
  start with figuring out who's doing what.
- **Dependency mapping** — which systems rely on which others, so the
  recovery sequence can actually reflect those dependencies instead of
  an arbitrary priority list.

## Why RTO and RPO need to be realistic, not aspirational

It's easy to write down an RTO of "under one hour" because that's what
sounds acceptable to the business, without ever confirming the backup
and restore process can actually hit it. An RTO or RPO that was never
tested against the real system, the real backup size, and the real
restore speed is just a guess — and a guess that will turn out wrong
at exactly the moment it matters most: during a real disaster, under
pressure, with no time to discover that the "one hour" restore
actually takes six. Setting objectives from measured, tested restore
performance (see [[disaster-recovery-testing]]) rather than from what
sounds reasonable is what makes them commitments instead of hopes.

## Common pitfalls

- **A plan that's never actually been tested** — a disaster recovery
  plan whose assumptions haven't been verified through
  [[disaster-recovery-testing]] is a set of untested guesses about
  what will work, discovered wrong only during a real event.
- **Backups that exist but were never test-restored** — a backup job
  that runs successfully every night says nothing about whether the
  resulting backup can actually be restored; corruption or
  incompleteness is often discovered only when a real restore is
  attempted for the first time, during an actual disaster.
- **A recovery sequence that doesn't reflect real dependencies** —
  restoring a system before the other systems it depends on leaves it
  unable to actually function once it's back, wasting the recovery
  window on the wrong order.
- **RTO and RPO set aspirationally rather than measured** — objectives
  chosen because they sound acceptable, without confirming the backup
  and restore process can actually deliver them.
- **No named roles for execution** — a plan that describes what needs
  to happen but not who does it burns the first, most valuable minutes
  of a real disaster figuring out ownership.
- **Plan not updated as systems change** — new systems added or
  architecture changed since the plan was written leave gaps that
  surface only when a real recovery is attempted.

## Learn more

- [[disaster-recovery-testing]] for verifying that this plan's
  assumptions, RTOs, and RPOs actually hold up in practice.
- [[business-continuity-plan]] for the broader, org-wide continuity
  plan this IT-specific plan is one piece of.
- [[runbook]] for the step-by-step technical procedures a recovery
  sequence typically invokes for each system.
- [[configuration-management]] for keeping a system's configuration
  recorded and reproducible, which a recovery often depends on.
