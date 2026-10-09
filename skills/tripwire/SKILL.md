---
name: tripwire
description: Use when asked to turn failure modes, dangers, or risks into tripwires — for each one, a single measurable signal that shows it is starting to happen, a threshold, and an exact time or cadence to check — rather than vague "keep an eye on it" monitoring. Distinct from [[key-risk-indicators]] (the general practice of risk metrics across an organization) and from a [[risk-register]] (which records the risk but not necessarily its trigger).
---

# Tripwire

A tripwire is a pre-committed, measurable signal that a specific
failure is starting, with a threshold, a check time, and a decided
response. It exists to replace "I'll notice if it goes wrong" with
"at this date I will look at this number, and if it crosses this line
I will do this." People rationalize drift one small step at a time;
a tripwire is set in advance, while judgment is still clear, so it
cannot be argued away in the moment.

## What each tripwire contains

- **The failure mode** — the specific risk it guards against, stated
  as cause, event, and consequence (see [[risk-register]]).
- **One signal** — a single observable, countable thing, not a
  feeling. "Customers seem less happy" is not a signal; "weekly
  cancellations exceed 3% of active accounts" is.
- **Threshold** — the exact value or change that counts as tripped,
  and its baseline, so the number means something.
- **Lead time** — how early the signal moves relative to the damage.
  A tripwire that fires after the failure is a symptom, not a warning.
- **Check schedule** — exactly when to look: a date, a recurring
  cadence ("every Monday 9am"), or an event ("the day after each
  release"). Faster-moving risks get shorter intervals.
- **Data source and owner** — where the number comes from and the one
  named person who checks it.
- **Pre-decided response** — what happens when it trips: who is told,
  what action is taken, and what decision is forced (pause, escalate,
  roll back, re-plan).

## How to create them

1. List failure modes. Source them from a [[premortem]], an
   [[adversary]] exercise, [[threat-modeling]], or an existing
   [[risk-register]].
2. For each, ask: *what is the earliest thing I could measure that
   would differ if this were starting?* Work backward from the failure
   to the first observable change, not the final one.
3. Choose exactly one signal per failure mode. If several seem
   necessary, they are probably separate failure modes.
4. Set the threshold from a baseline or a stated tolerance, not a
   hunch. If no baseline exists, make establishing one the first check.
5. Set the check time, matched to how fast the risk can develop.
6. Name the owner and the response.
7. Verify the signal is obtainable with real data before relying on
   it.

## Output format

A table is the most usable form:

| Failure mode | Signal | Threshold | Check when | Owner | If tripped |
|---|---|---|---|---|---|
| Key supplier fails to deliver | Days between PO and confirmed ship date | More than 5 days over the last 3 orders | After every order, reviewed Fridays | Ops lead | Activate backup supplier within 48h |

Order rows by severity, then by how soon the risk could begin.

## Requirements for a useful result

- **Measurable or it doesn't count.** If a signal can't be expressed
  as a number, count, date, or yes/no fact, rewrite it or flag it as
  unmeasurable.
- **No generic risks.** Tie each tripwire to a detail in the user's
  plan. If details are missing, state assumptions or ask.
- **Be honest about weak signals.** If a failure has no good leading
  indicator, say so and name the best available lagging one, with
  the cost of the delay.
- **Keep the set small.** A tripwire list long enough to be ignored
  is worse than a short one that is checked.

## How it differs from related practices

- **Tripwire vs. [[key-risk-indicators]]** — KRIs are the broader
  discipline of risk metrics, often enterprise-wide and reported on
  dashboards. A tripwire is narrower: one signal, one threshold, one
  check time, one response.
- **Tripwire vs. [[key-performance-indicators]]** — KPIs measure
  progress toward goals; tripwires measure the early onset of failure.
- **Tripwire vs. [[risk-register]]** — the register records and ranks
  risks; the tripwire is the detection mechanism attached to each
  entry.
- **Tripwire vs. [[premortem]]** — a premortem names the first warning
  sign for each cause; the tripwire hardens that sign into a
  measurable threshold with a schedule.

## Common pitfalls

- **Vibes dressed as metrics** — "morale dips" or "momentum slows"
  with no number.
- **No check time** — a signal nobody is scheduled to look at never
  trips.
- **Lagging signals** — revenue falling is the failure, not the
  warning.
- **Thresholds set after the fact** — moving the line once the number
  is bad defeats the purpose; record thresholds before the work
  starts.
- **No pre-decided response** — a tripped wire followed by debate
  recreates the original rationalization.
- **Too many wires** — alert fatigue makes every one ignorable.
- **Never retiring them** — remove tripwires when the risk has passed
  and recalibrate those that fire falsely.

## Example prompt

> Analyze failure modes, dangers, risks. For each one, give me one
> measurable signal that will tell me it's starting to happen, and
> exactly when I should check for it. I want tripwires, not vibes.

## Learn more

- [[premortem]] and [[adversary]] for generating the failure modes to
  guard.
- [[risk-register]] for recording each risk and its tripwire.
- [[key-risk-indicators]] for the wider practice of risk metrics.
- [[threat-modeling]] for security-specific failure modes.
