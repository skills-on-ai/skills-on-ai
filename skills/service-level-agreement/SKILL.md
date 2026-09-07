---
name: service-level-agreement
description: Use when asked to draft or review a service level agreement (SLA) — defining expected service performance such as uptime, response time, or support tiers between a provider and customer — as distinct from a statement-of-work, which defines a project's specific deliverables and scope rather than ongoing performance standards; for general guidance only, not legal advice, so always direct the reader to consult a qualified lawyer for their specific situation and jurisdiction.
---

# Service Level Agreement

A service level agreement (SLA) is a document — often part of a larger
contract — that defines the performance standards a provider commits to
delivering a customer on an ongoing basis: how available a service must
be, how quickly issues get responded to, and what happens when those
commitments aren't met. It governs a continuing relationship, not a
one-time piece of work.

## Key components

- **Specific, measurable metrics** — uptime percentage, response time
  by severity level, resolution time, throughput, or whatever the
  service actually needs to guarantee, each stated as a number that can
  be checked against real data, not a general assurance.
- **Measurement window** — the period over which a metric is
  calculated (monthly uptime, quarterly average response time) and how
  it's measured, since the same raw numbers can look very different
  depending on the window and method used.
- **Support tiers** — response and resolution expectations that vary
  by issue severity (a total outage vs. a minor cosmetic bug), rather
  than one flat commitment for every kind of issue.
- **Remedies and credits** — what the customer is entitled to when a
  target is missed: typically a service credit or fee reduction, stated
  as a specific formula rather than left to negotiation after the fact.
- **Exclusions** — circumstances the metrics don't count against the
  provider, commonly planned/announced maintenance windows, force
  majeure events, or issues caused by the customer's own systems.

## SLA vs. statement of work

These cover different things and are easy to conflate:

- **Service level agreement** — defines ongoing performance standards
  for a continuing service: how well and how reliably it will run,
  measured and enforced repeatedly over time.
- **[[statement-of-work]]** — defines the specific deliverables, scope,
  and timeline of a discrete project: what gets built or delivered,
  once, by when.

A vendor relationship can have both: a statement of work for the
initial implementation project, and an SLA governing the ongoing
service once it's live.

## Common pitfalls

- **Unmeasurable or vague metrics** — a commitment to "high
  availability" or "prompt support" with no defined number gives
  neither party anything to check performance against, and turns every
  dispute into an argument about interpretation.
- **No defined remedy for a missed target** — an SLA that states
  metrics but not what happens when they're missed functions as a
  aspiration, not a contractual commitment.
- **Metrics that don't reflect what customers actually care about** —
  a provider hitting 99.9% uptime measured in a way that excludes the
  outage that mattered most to the customer wins on paper while losing
  the relationship in practice.
- **Measurement window chosen to flatter the provider** — averaging
  over a long enough period can hide a severe short outage that the
  customer experienced acutely.
- **No process for disputing a measurement** — if the provider is the
  sole source of the data used to judge its own performance, the
  customer has no way to challenge a number they believe is wrong.

## A note on legal advice

This is general guidance on what SLAs typically contain and why, not
legal advice. What's enforceable, what remedies are appropriate, and
how disputes get resolved vary by jurisdiction and contract — always
direct the reader to have an SLA drafted or reviewed by a qualified
lawyer before signing.

## Learn more

- [[statement-of-work]] for the deliverables-and-scope counterpart an
  SLA is often paired with but shouldn't be confused with.
- [[contract-review]] for the broader review discipline an SLA should
  go through before signing.
- [[non-disclosure-agreement]] for another agreement type commonly
  negotiated in the same vendor relationship.
- [[vendor-management]] for the ongoing practice of managing a provider
  relationship an SLA is meant to support.
