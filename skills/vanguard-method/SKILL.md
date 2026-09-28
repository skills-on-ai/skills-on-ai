---
name: vanguard-method
description: Use when asked to apply the Vanguard Method (John Seddon's systems-thinking approach) to redesign a service organization — studying demand, flow, and capability as an integrated system before changing anything — as distinct from transplanting a manufacturing-derived methodology like six-sigma onto service work, which the method's originator specifically argues against.
---

# The Vanguard Method

The Vanguard Method, developed by John Seddon, applies
[[systems-thinking]] to redesigning service organizations — the
core claim is that most service failure (long queues, poor quality,
high cost) is caused by how the organization's *own management system*
is designed, not by the people doing the work. It is explicitly
positioned against command-and-control management: top-down targets,
functional specialization, and activity-based standards that optimize
each department's own numbers while degrading the service the customer
actually experiences.

## Check, Plan, Do

1. **Check** — study the current system as it actually operates, before
   changing anything. This is the method's most distinctive discipline
   and where most of the diagnostic work happens:
   - **Purpose** — what does the service exist to achieve, defined from
     the customer's point of view, not the organization's internal
     mission statement.
   - **Demand** — what customers actually ask for, split into **value
     demand** (what the service exists to provide) and **failure
     demand** (demand caused by not doing something right, or doing
     something for the customer, the first time — a call-back caused by
     an unresolved first call is failure demand, and in many service
     organizations it's a large, hidden fraction of total workload).
   - **Flow** — how work actually moves through the system end to end,
     including the handoffs, queues, and rework that departmental
     performance reports usually hide.
   - **Capability** — what the system can currently deliver, measured
     against demand, not against an arbitrarily set target.
2. **Plan** — redesign the system against what Check revealed: work
   organized around customer purpose and flow rather than functional
   specialization, measures that show whether purpose is being achieved
   rather than whether an activity standard was hit.
3. **Do** — implement the redesign, then keep studying the system's
   performance against purpose — the Check/Plan/Do cycle repeats rather
   than ending at implementation.

## Why it argues against targets and standard methodologies

Seddon's central argument: an arbitrary top-down target (e.g. "close 80%
of calls within 2 minutes") changes what people *attend to* — they
manage to the target rather than to the customer's actual purpose,
which frequently makes the underlying service worse even as the target
is met. For the same reason, the method is skeptical of applying a
manufacturing-derived methodology like [[six-sigma]] directly to
service work without first studying whether the problem is even a
process-variation problem — much service failure demand originates in
system design (the wrong work being specified, routed, or measured), not
in variation within an otherwise-correctly-designed process.

## When it fits

Service organizations with variable, judgment-heavy work (contact
centers, case handling, local government services, healthcare
administration) where command-and-control targets and functional
silos are suspected of causing a large share of the demand, rather
than genuine external variation. It fits less well where the work is
genuinely standardized and low-variety, where a process-variation
method like [[six-sigma]] or [[dmaic]] may address the actual
problem more directly.

## Common pitfalls

- **Skipping Check and jumping to redesign** — the method's diagnostic
  value comes specifically from studying purpose, demand, flow, and
  capability *before* changing anything; a redesign based on assumption
  rather than genuine study of the current system repeats whatever
  caused the original failure demand.
- **Treating failure demand as ordinary workload** — if a large share of
  incoming demand is actually rework caused by the system itself, adding
  capacity or headcount to handle it addresses the symptom while leaving
  the root cause (and its ongoing failure demand) untouched.
- **Applying the method's specific service-design diagnosis to a genuine
  manufacturing/process-variation problem** — the method's critique of
  targets and standard work is aimed at service contexts with high
  variety and judgment; it is not a general argument against measurement
  or process discipline everywhere.

## Learn more

- [[systems-thinking]] for the general discipline this method applies specifically to service organizations.
- [[six-sigma]], [[dmaic]] for the contrasting, manufacturing-derived improvement methodologies this method argues against applying uncritically to service work.
- [[voice-of-the-customer]] for a complementary technique for understanding what customers actually value, feeding the Check stage's Purpose and Demand analysis.
