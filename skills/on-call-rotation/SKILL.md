---
name: on-call-rotation
description: Use when asked to set up or document an on-call rotation — the schedule and process for who's responsible for responding to alerts and incidents outside normal hours, and how that responsibility hands off between people — as distinct from an [[incident-response-plan]], which governs what happens once an incident is declared rather than who's watching for one in the first place.
---

# On-Call Rotation

An on-call rotation is the schedule and process that determines who is
responsible for responding to alerts and incidents outside normal
working hours, and how that responsibility passes from one person to
the next. Its job is to make sure something is always being watched,
and that at any given moment it's unambiguous exactly who's watching
it.

## Key components

- **A clear schedule with unambiguous handoff times** — exact start and
  end times for each shift, stated in a single agreed time zone, so
  there's never a moment where two people both think they're off and
  neither is actually on.
- **An escalation path** — who gets notified, and after how long, if
  the primary on-call person doesn't acknowledge an alert within a
  defined window, so a response doesn't depend entirely on one person
  being reachable.
- **Access to the runbooks and tools needed to act** — the on-call
  person needs standing access to the systems, dashboards, and
  [[runbook]] procedures the job requires *before* an alert fires, not
  access requested and granted at 3am while a system is down.
- **A sustainable rotation frequency** — enough people in the rotation,
  and a shift length, that no single person carries a disproportionate
  share of the burden week after week.
- **Alert routing and acknowledgment tracking** — a defined way alerts
  reach the current on-call person (paging tool, phone, chat), and a
  record of whether and when they were acknowledged, so a missed alert
  is visible rather than silent.

## Why the escalation path matters as much as the primary assignment

It's tempting to treat the schedule as the whole job: as long as
someone is named as on-call for a given window, the rotation is
"done." But naming a primary on-call person solves nothing on its own
if that person is asleep, on a flight, or their phone dies — a
rotation with no escalation path stalls completely the moment the one
person on call is unreachable. The escalation path is what turns "this
person is supposed to respond" into "someone will actually respond,"
by defining a secondary, then a manager or wider team, and a timeout
for each step. A rotation is only as reliable as its worst-case path,
not its best-case one.

## Common pitfalls

- **Handoff times ambiguous or undocumented** — without an exact time
  and time zone for each handoff, it's genuinely unclear who's
  responsible at a given moment, especially across time zones or
  around daylight saving changes, and an alert can land in the gap.
- **No escalation path** — if the primary on-call engineer is
  unreachable and there's no defined next step, nobody responds at
  all, no matter how good the schedule looks on paper.
- **The same few people carrying most of the rotation** — an
  understaffed rotation, or one where people habitually cover for each
  other, quietly concentrates the load on a handful of people until
  they burn out or leave.
- **No access set up in advance** — an on-call person who has to
  request system access or find the current runbook after an alert
  fires loses critical response time to something that should already
  be in place.
- **Alerts with no acknowledgment tracking** — without a record of
  whether an alert was seen and by whom, a missed page can go
  unnoticed until someone else eventually escalates it manually.
- **Rotation calendar out of sync with reality** — a schedule that
  isn't updated for vacations, swaps, or new hires leaves people
  paged who aren't actually on call, or nobody paged who is.

## Learn more

- [[runbook]] for the step-by-step procedures the on-call person
  actually executes once an alert fires.
- [[incident-response-plan]] for what happens once an on-call response
  escalates into a declared incident, including roles and
  communication.
- [[service-level-agreement]] for the response-time commitments an
  on-call rotation typically exists to meet.
