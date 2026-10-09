---
name: risk-register
description: Use when asked to create or maintain a risk register — a living table of identified risks with likelihood, impact, score, owner, mitigation, and status — as distinct from a full RAID log ([[risks-actions-issues-decisions]]), which also tracks actions, issues, and decisions, and from [[key-risk-indicators]], which are the metrics that signal a risk is materializing.
---

# Risk register

A risk register is a living record of the uncertain events that could
affect a project, product, or organization, each assessed and assigned
an owner. Its job is not to list every worry but to make risks
visible, comparable, and actively managed: someone is responsible for
each one, and its status changes over time.

## Key components

Each entry (row) typically records:

- **ID and title** — a stable identifier and a short name.
- **Risk statement** — written as cause, event, and consequence: "Because
  the vendor has a single data center (cause), an outage could occur
  (event), halting order processing for the duration (consequence)."
  A statement like "vendor risk" is a topic, not a risk.
- **Category** — technical, financial, legal, people, schedule,
  external, and so on, to allow grouping.
- **Likelihood and impact** — each scored on a fixed scale (commonly 1–5),
  with the scale's meaning defined in advance (e.g. impact 5 = more
  than 10% of budget or a missed regulatory deadline).
- **Score** — usually likelihood × impact, used to rank and to place
  the risk on a heat map.
- **Owner** — one named person accountable for monitoring and response,
  not a team.
- **Response** — avoid, mitigate, transfer, or accept, with the
  specific actions, their owners, and due dates.
- **Residual risk** — the score expected after mitigation, so the
  response's value is explicit.
- **Triggers and indicators** — the early signal that the risk is
  materializing (see [[key-risk-indicators]]).
- **Status and dates** — open, mitigating, closed, or occurred; date
  raised and date last reviewed.

## Building and maintaining one

1. Identify risks from several sources: workshops, a [[premortem]],
   [[swot-analysis]], [[stakeholder-analysis]], lessons from past
   projects, and assumptions in the plan.
2. Write each as cause, event, consequence.
3. Score against the pre-agreed scales; calibrate across raters.
4. Rank, and focus response effort on the top items.
5. Assign owners and mitigation actions with dates.
6. Review on a fixed cadence, re-score, close retired risks, and add
   new ones. Record risks that occurred, since they become issues.

## How it differs from related artifacts

- **Risk register vs. [[risks-actions-issues-decisions]]** — a RAID log
  is a broader running log; the register is the deeper, scored view of
  the risks part, and is often one tab inside a RAID log.
- **Risk register vs. [[premortem]]** — a premortem is a one-off
  exercise that generates risks and their assumptions; the register is
  where those risks are then tracked over time.
- **Risk register vs. [[key-risk-indicators]]** — indicators are
  metrics with thresholds; the register holds the risk and references
  the indicator that signals it.

## Common pitfalls

- **Vague risk statements** — without cause and consequence, nobody
  can tell what to mitigate.
- **Registered once, never reviewed** — a stale register gives false
  comfort; every entry needs a review date.
- **Everything is medium** — undefined or uncalibrated scales cluster
  scores; define the scale and force ranking.
- **Owner is a team or "TBD"** — unowned risks don't get managed.
- **Mitigations without actions** — "monitor closely" is not a
  response; name the action, owner, and date.
- **Confusing risks with issues** — a risk is uncertain future; once it
  occurs, move it to the issue log and record the outcome.
- **Too long to use** — hundreds of low-value entries bury the few
  that matter; prune and cap the active list.

## Learn more

- [[premortem]] for a failure-first technique to discover risks.
- [[risks-actions-issues-decisions]] for the surrounding RAID log.
- [[key-risk-indicators]] for monitoring the signals behind each risk.
- [[project-management]] for the wider planning context.
