---
name: business-continuity-plan
description: Use when asked to write a business continuity plan (BCP) — an organization-wide plan for keeping critical operations running through a major disruption (facility loss, supplier failure, pandemic, natural disaster) — as distinct from disaster-recovery-testing (see below), which is the IT-systems-only slice of this.
---

# Business Continuity Plan

A business continuity plan (BCP) is an organization-wide plan for
continuing critical operations through a major disruption — a lost
facility, a key supplier failing, a pandemic, a natural disaster, a
prolonged outage. It's broader than IT: it covers people, facilities,
suppliers, and communications, not just technical systems.

## Key components

- **Critical functions and recovery priority** — the specific business
  functions the organization cannot operate without, ranked by how
  quickly each must come back online if lost.
- **Recovery time objective (RTO) per function** — a defined maximum
  acceptable downtime for each critical function, not one blanket number
  for the whole organization.
- **Alternate ways of operating** — how each critical function keeps
  running without its normal setup: an alternate physical site, staff
  working remotely, or a manual fallback process when the usual system
  or location is unavailable.
- **Communication plan** — who tells staff, customers, suppliers, and
  regulators what, through which channel, and who is authorized to speak
  publicly during a disruption.
- **Roles and activation criteria** — who decides the plan is activated,
  who leads the response, and what specifically triggers each step.

## Business continuity plan vs. disaster recovery testing vs. incident response plan

These three are often confused but sit at different scopes:

- **Business continuity plan** — the org-wide umbrella: how the whole
  organization keeps operating (people, facilities, suppliers,
  communications) through a major disruption, of any kind.
- **[[disaster-recovery-testing]]** — the IT/technical-systems slice:
  verifying that specific technical systems can actually be restored
  from backup or failover within their stated recovery objectives.
- **[[incident-response-plan]]** — the tactical, in-the-moment response
  to one specific incident (a breach, an outage) as it's happening,
  usually over hours or days.

A BCP is the strategic layer that both of the others feed into and rely
on; an incident response plan handles the immediate event, disaster
recovery testing proves the technical piece works, and the BCP is what
keeps the organization functioning around both.

## Common pitfalls

- **Only covers IT systems** — a plan that addresses server failover but
  ignores what happens if a building, a key supplier, or a critical
  team is unavailable isn't actually a business continuity plan, just a
  disaster recovery plan with a bigger name.
- **Never tested with a tabletop exercise** — a plan that's only ever
  been written, never walked through with the people who'd execute it,
  reliably turns up gaps (missing contact information, an assumed
  alternate site that's no longer available) only when it's too late.
- **Recovery time objectives set aspirationally** — an RTO chosen
  because it sounds acceptable, without checking whether the alternate
  site, backup process, or supplier can actually deliver it, sets an
  expectation the plan can't meet when it matters.
- **No named owner for activation** — a plan with no one clearly
  authorized to declare an activation wastes the plan's first, most
  time-sensitive hours on confusion about who decides.
- **Supplier and dependency risk ignored** — a plan that covers internal
  operations but never asks what happens if a single-source supplier or
  partner fails leaves a real continuity gap unaddressed.

## Learn more

- [[disaster-recovery-testing]] for the IT-systems-recovery slice this
  plan's technical functions depend on.
- [[incident-response-plan]] for the tactical, in-the-moment response to
  a single incident, distinct from this org-wide continuity umbrella.
- [[runbook]] for the step-by-step operational procedures an alternate
  way of operating often needs written down.
- [[vendor-management]] for tracking the supplier dependencies a BCP's
  risk assessment needs to account for.
