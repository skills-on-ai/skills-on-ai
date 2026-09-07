---
name: incident-response-plan
description: Use when asked to write or review an incident response plan — the pre-defined process for handling a security or operational incident while it's happening, including severity levels, roles, and escalation — as distinct from a [[postmortem]] (the after-the-fact analysis once the incident is over) and a [[business-continuity-plan]] (broader, org-wide continuity planning rather than tactical in-the-moment response).
---

# Incident Response Plan

An incident response plan is the pre-defined process a team follows
while a security or operational incident is actively happening: who
declares it, who does what, how severity gets judged, and how
stakeholders get told. Its value comes entirely from being decided in
advance — an incident is the wrong time to first figure out who's in
charge.

## Key components

- **Severity levels** — a small, clearly defined scale (e.g. SEV1
  through SEV4) with concrete triggers for each level, such as customer
  impact, data exposure, or system availability, so that classifying an
  incident doesn't require a debate in the moment.
- **Roles** — at minimum an **incident commander** who owns
  decision-making and coordination for the duration of the incident,
  and a **communications lead** who owns messaging to stakeholders and
  customers so the commander isn't also drafting updates; larger
  incidents add roles like a scribe to keep the timeline and
  subject-matter responders for the affected systems.
- **Escalation path** — exactly who gets paged or notified at each
  severity level, and after how long an unresolved incident escalates
  further, so escalation doesn't depend on someone remembering to do it.
- **Communication plan** — templates and channels for updating internal
  stakeholders, leadership, and (for customer-facing incidents)
  customers or a public status page, including how often updates go out
  while the incident is ongoing.
- **Declaration and resolution criteria** — how an incident is formally
  opened (who can declare one, and how) and what conditions count as
  resolved, so the plan doesn't just start the response but also closes
  it out.

## How it differs from a postmortem and a business continuity plan

- **Incident response plan vs. [[postmortem]]** — the response plan is
  what happens *during* the incident: declaring it, assigning roles,
  communicating, and mitigating. The postmortem is what happens *after*
  it's resolved: reconstructing the timeline, finding root cause, and
  assigning follow-up actions. Running the plan well doesn't replace
  writing the postmortem, and a good postmortem often reveals gaps in
  the plan to fix.
- **Incident response plan vs. [[business-continuity-plan]]** — a
  business continuity plan is broader and organization-wide: how the
  whole company keeps operating (or resumes operating) through a major
  disruption — a facility loss, a regional outage, a pandemic. An
  incident response plan is the tactical, in-the-moment playbook for a
  specific incident, usually technical or security in nature, and is
  typically one piece a business continuity plan can invoke.

## Common pitfalls

- **Never rehearsed** — a plan that exists only as a document nobody
  has practiced means nobody actually knows their role when a real
  incident hits; running periodic drills (see [[disaster-recovery-testing]]
  and [[chaos-testing]] for related practice disciplines) is what makes
  the plan usable under pressure.
- **No defined severity levels** — without concrete triggers for each
  level, every incident tends to get the same response regardless of
  actual impact — sometimes overreacting to something minor, sometimes
  underreacting to something serious.
- **Unclear decision authority** — if it isn't obvious who has the
  authority to make a call (roll back a deploy, notify customers,
  page an executive), precious time gets lost in the moment debating
  who gets to decide instead of deciding.
- **Communications lead role skipped** — the incident commander trying
  to both fix the problem and draft stakeholder updates does both worse
  than if the roles were split.
- **Escalation path that assumes availability** — a plan naming one
  specific person with no backup breaks the first time that person is
  unreachable.
- **Plan not linked to the actual runbooks needed** — a response plan
  that says "restart the service" without pointing to the actual
  [[runbook]] for doing so forces someone to improvise the steps live.

## Learn more

- [[postmortem]] for the after-the-fact analysis that follows a
  resolved incident.
- [[business-continuity-plan]] for the broader, org-wide continuity
  planning this plan is one tactical piece of.
- [[runbook]] for the specific step-by-step procedures responders
  execute during an incident rather than improvising.
- [[disaster-recovery-testing]] and [[chaos-testing]] for the drills
  that keep a response plan from being untested when it matters.
