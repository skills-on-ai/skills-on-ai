---
name: tripwire
description: Use when asked to turn failure modes, dangers, or risks into tripwires — for each one, a single measurable signal that shows it is starting to happen, a threshold, and an exact time or cadence to check — rather than vague "keep an eye on it" monitoring. Distinct from [[key-risk-indicators]] (the general practice of risk metrics across an organization), a [[risk-register]] (which records the risk but not necessarily its trigger), and the full [[foresight]] sequence, where it is the fifth stage.
---

# Tripwire

A tripwire is a pre-committed, measurable signal that a specific
failure is starting, with a threshold, a check time, and a decided
response. It replaces "I'll notice if it goes wrong" with "on day 42 I
will look at this number, and if it crosses this line I will do this."
People rationalize drift one small step at a time; a tripwire is set in
advance, while judgment is clear, so it can't be argued away in the
moment.

## Input required

- **The failure modes** — from a [[premortem]], [[adversary]] exercise,
  [[threat-modeling]], or a [[risk-register]]. If none are supplied,
  derive them from the plan first and list them.
- **The plan's timeline and start date**, so check times can be exact.
- **What data the user can actually get** — tools, reports, and access.
  A tripwire needing data nobody can collect is not a tripwire.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

If the failure modes, timeline, or data access are unclear, ask in
**one batch of at most five questions**, skipping any already
answered, then proceed:

1. What is the start date, so check days can be counted from it?
2. Which failure modes worry you most, or should I derive them from the
   plan?
3. What numbers can you actually get today (analytics, finance reports,
   CRM, logs), and how often do they update?
4. What are the normal values for those numbers, so I can set
   thresholds from a baseline?
5. Who will check each signal, how much time can they spend, and what
   are you willing to do (pause, cut, walk away) if one trips?

If baselines are unknown, make establishing them the first check and
say so in the table.

## What each tripwire contains

- **The failure mode** — the specific risk, stated as cause, event, and
  consequence.
- **One signal** — a single observable, countable thing, not a feeling.
  "Customers seem less happy" is not a signal; "weekly cancellations
  exceed 3% of active accounts" is.
- **Baseline and threshold** — the normal value, and the exact value or
  change that counts as tripped.
- **Lead time** — how early the signal moves relative to the damage. A
  tripwire that fires after the failure is a symptom, not a warning.
- **Check schedule** — exactly when to look: a date, a day number
  counted from start, a recurring cadence ("every day at 9am"), or an
  event ("the day after each release"). Faster-moving risks get shorter
  intervals; give the *first* check date explicitly.
- **Data source and owner** — where the number comes from and the one
  named person who checks it.
- **Pre-decided response** — who is told, what action is taken, and
  what decision is forced (pause, escalate, roll back, re-plan, walk
  away).

## How to create them

1. List the failure modes.
2. For each, ask: *what is the earliest thing I could measure that
   would differ if this were starting?* Work backward from the failure
   to the first observable change, not the final one.
3. Choose exactly one signal per failure mode. If several seem needed,
   they're probably separate failure modes.
4. Set the threshold from a baseline or a stated tolerance, not a
   hunch. If no baseline exists, make establishing one the first check.
5. Set the first check time and the cadence, matched to how fast the
   risk can develop.
6. Name the owner and the response.
7. Test that the signal is obtainable with real data before relying on
   it.

## Output format

A table, ordered by severity and then by how soon the risk could begin:

| # | Failure mode | Signal | Threshold | First check | Cadence | Owner | If tripped |
|---|---|---|---|---|---|---|---|
| 3 | Key supplier fails to deliver | Days from PO to confirmed ship date | More than 5 days over the last 3 orders | Day 28 | After each order, reviewed daily at 9am | Ops lead | Activate backup supplier within 48h |

Follow with one line naming any failure that has no good leading signal,
and the best lagging one plus the cost of its delay.

## Quality of a signal

A good signal is:

- **Measurable** — a number, count, date, or yes/no fact.
- **Leading** — moves before the damage does.
- **Specific** — about this failure, not general health.
- **Cheap to obtain** — one query, a quick tally, a short check.
- **Hard to game or wave off** — not dependent on someone's opinion.

If a signal fails these tests, rewrite it or flag it.

## Ground rules

- **Measurable or it doesn't count.** Rewrite impressions as counts, or
  flag them as unmeasurable.
- **No generic risks.** Tie each tripwire to a detail in the plan.
- **Be honest about weak signals.** Say when no leading indicator
  exists.
- **Keep the set small.** A list long enough to be ignored is worse
  than a short one that is checked; combine checks into one daily
  review where cadences allow.
- **Record thresholds up front.** They should be fixed before the work
  starts.

## Self-check before answering

- Does every tripwire have one signal, a baseline, a threshold, a first
  check date, and an owner?
- Does it lead the damage, or merely report it?
- Is there a pre-decided response, not "discuss"?
- Can the data really be collected by the owner?

## How it differs from related practices

- **Tripwire vs. [[key-risk-indicators]]** — KRIs are the broader
  discipline of risk metrics, often enterprise-wide and dashboarded. A
  tripwire is narrower: one signal, one threshold, one check time, one
  response.
- **Tripwire vs. [[key-performance-indicators]]** — KPIs measure
  progress toward goals; tripwires measure the onset of failure.
- **Tripwire vs. [[risk-register]]** — the register records and ranks
  risks; the tripwire is the detection mechanism attached to each
  entry.
- **Tripwire vs. [[premortem]]** — a premortem names the first warning
  sign for each cause; the tripwire hardens that sign into a measurable
  threshold with a schedule.

## Common pitfalls

- **Vibes dressed as metrics** — "morale dips" with no number.
- **No check time** — a signal nobody is scheduled to look at never
  trips.
- **Lagging signals** — revenue falling is the failure, not the
  warning.
- **Thresholds set after the fact** — moving the line once the number
  is bad defeats the purpose.
- **No pre-decided response** — a tripped wire followed by debate
  recreates the original rationalization.
- **Too many wires** — alert fatigue makes every one ignorable.
- **One owner for everything** — spread ownership, or the single
  reviewer becomes the failure point.
- **Never retiring them** — remove tripwires when the risk has passed,
  and recalibrate those that fire falsely.

## Example prompt

> Analyze failure modes, dangers, risks. For each one, give me one
> measurable signal that will tell me it's starting to happen, and
> exactly when I should check for it. I want tripwires, not vibes.

## Learn more

- [[foresight]] for where tripwires fit in the full stress-test
  sequence.
- [[premortem]] and [[adversary]] for generating the failure modes to
  guard.
- [[risk-register]] for recording each risk and its tripwire.
- [[key-risk-indicators]] for the wider practice of risk metrics.
- [[threat-modeling]] for security-specific failure modes.
