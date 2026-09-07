---
name: postmortem
description: Use when asked to write or facilitate a postmortem — a blameless, after-the-fact analysis of an incident, its timeline, root cause, and follow-up actions — as distinct from an [[incident-response-plan]] (what happens during the incident, not after) and a routine [[agile-reflection]] (triggered by an incident, not run on a scheduled cadence).
---

# Postmortem

A postmortem is a written, blameless analysis conducted after an
incident is resolved: what happened, why it happened, and what changes
prevent it from happening again. It's triggered by a specific incident,
not scheduled on a recurring cadence, and its value depends heavily on
people describing what actually happened — including their own
mistakes — honestly.

## Key components

- **Factual timeline** — a minute-by-minute (or as precise as possible)
  reconstruction of what happened, built from logs, alerts, chat
  messages, and deploy history rather than memory alone.
- **Root cause(s)** — the underlying reason the incident occurred, found
  through structured analysis (see [[root-cause-analysis]]) rather than
  stopping at the first proximate cause that presents itself.
- **Contributing factors** — conditions that made the incident more
  likely or worse than it needed to be, even if they weren't the root
  cause themselves — a missing alert, a stale runbook, an unreviewed
  change.
- **Impact** — concretely what and who was affected: duration,
  customers affected, data involved, revenue or SLA impact.
- **Follow-up actions** — concrete, specific changes to make, each with
  a named owner and a target date; "improve monitoring" is not a
  follow-up action, "add a p99 latency alert on the checkout service by
  [date], owned by [name]" is.

## The blameless principle

A postmortem is blameless: it treats the incident as a result of
systems and conditions, not individual failure, and deliberately avoids
naming who's "at fault." This matters for a concrete reason — people
only describe what actually happened, including the mistake they
personally made, when they trust it won't be used against them. A
postmortem process that punishes honesty (even subtly, through tone or
follow-up) trains people to omit or soften what really happened next
time, which quietly destroys the accuracy of every future postmortem.

## How it differs from a response plan and a routine reflection

- **Postmortem vs. [[incident-response-plan]]** — the response plan
  governs what happens *during* the incident: roles, escalation,
  communication. The postmortem happens *after* the incident is
  resolved, analyzing what happened and why.
- **Postmortem vs. [[agile-reflection]]** — a routine reflection (like a
  sprint retrospective) runs on a fixed schedule regardless of whether
  anything went wrong. A postmortem is triggered specifically by an
  incident and scoped to that incident's timeline and causes, not to a
  general review of the last sprint or period.

## Common pitfalls

- **Follow-up actions never tracked to completion** — a postmortem full
  of good intentions that are never revisited becomes a document nobody
  trusts, and the same failure mode recurs because the fix was never
  actually made.
- **Blame creeping in despite the label** — phrasing like "X forgot to
  check Y" or singling out one person's actions, even without saying
  the word "fault," undermines the blameless principle and chills
  honesty in the next incident.
- **Timeline reconstructed from memory days later** — without pulling
  from actual logs, alerts, and messages, a timeline written from
  memory drifts from what really happened and can miss the actual
  sequence that caused the impact.
- **Stopping at the first proximate cause** — "the deploy caused it" is
  usually true but incomplete; see [[root-cause-analysis]] for pushing
  past the first answer to the actual underlying cause.
- **No postmortem for near-misses** — waiting only for incidents that
  caused real damage skips the cheaper opportunity to learn from
  something that almost went wrong.
- **Written and filed away, never shared** — a postmortem that isn't
  circulated to the people who could hit the same issue elsewhere loses
  most of its value.

## Learn more

- [[incident-response-plan]] for the tactical process that happens
  during the incident this postmortem analyzes afterward.
- [[root-cause-analysis]] for the structured technique behind finding
  genuine root cause rather than the first proximate explanation.
- [[agile-reflection]] for the scheduled, cadence-based counterpart to
  this incident-triggered analysis.
- [[runbook]] for the step-by-step procedure a postmortem's follow-up
  actions often end up creating or correcting.
