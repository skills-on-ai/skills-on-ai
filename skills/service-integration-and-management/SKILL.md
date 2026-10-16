---
name: service-integration-and-management
description: Use when asked to apply Service Integration and Management (SIAM), a methodology for managing multiple service suppliers in a complex ecosystem, especially when an organization outsources parts of IT and must integrate vendors. Distinct from [[vendor-management]] (single-supplier relationships), [[itil-5]], and [[service-level-agreement]].
---

# Service Integration and Management (SIAM)

SIAM is a methodology for managing multiple service suppliers in a complex ecosystem. It is best for organizations that outsource parts of their IT and need to integrate various external vendors seamlessly, so that the customer sees end-to-end services.

## Input required

- The customer organization and its services.
- The suppliers, what each provides, and their contracts.
- Current problems: finger-pointing, gaps between suppliers, inconsistent reporting.
- The SIAM guidance the user holds, such as a published body of knowledge.

## Questions to ask first

1. Which suppliers deliver which parts of each service?
2. Who integrates today, if anyone?
3. What do contracts allow regarding collaboration and data sharing?
4. Where do incidents and changes cross supplier boundaries?
5. Will the integrator be internal, external, or hybrid?

## Method

1. **Map the ecosystem.** Show the customer, suppliers, services, and dependencies.
2. **Define the layers and roles.** Typically the customer organization, a service integrator, and service providers. Decide who holds the integrator role.
3. **Set governance.** Define decision rights, forums, and escalation paths across suppliers.
4. **Define common processes.** Agree end-to-end incident, change, problem, and reporting processes that suppliers follow, with clear handoffs.
5. **Align contracts and service levels.** Make [[service-level-agreement]] terms and incentives support collaboration, and align with [[vendor-management]].
6. **Plan the transition.** Stage the change, for example by discovery and strategy, planning and building, implementing, then running and improving.
7. **Monitor and improve.** Report end-to-end performance and resolve cross-supplier issues.

## Output format

- Ecosystem map and role assignment.
- Cross-supplier process and handoff table.
- Governance calendar and escalation path.
- Transition roadmap and risks.

## Ground rules

- Do not state SIAM layers, stages, or practices beyond what the user supplied or the published guidance confirms.
- Do not invent contract terms; check actual agreements.

## Self-check before answering

- Is the integrator role clearly assigned?
- Are cross-supplier handoffs defined for incident and change?
- Do contracts support the model?

## Common pitfalls

- **Integrator without authority** to coordinate suppliers.
- **Contracts that reward blame** rather than collaboration.
- **Each supplier reporting only its own metrics.**
- **Underestimating the transition effort.**

## Example prompt

"We use five suppliers for network, hosting, apps, service desk, and security. Design a SIAM model with governance and cross-supplier incident handling."

## Learn more

- Related: [[vendor-management]], [[service-level-agreement]], [[itil-5]], [[verism]], [[iso-iec-20000]].
