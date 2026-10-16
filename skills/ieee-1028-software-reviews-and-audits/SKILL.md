---
name: ieee-1028-software-reviews-and-audits
description: Use when asked to plan, run, or document a formal software review or audit under IEEE 1028, such as a management review, technical review, inspection, walk-through, or audit. Distinct from [[code-review-checklist]] (everyday code review), [[ieee-730-software-quality-assurance]] (SQA planning), and [[ieee-1012-software-verification-and-validation]] (V&V activities).
---

# IEEE 1028 Software Reviews and Audits

IEEE 1028 outlines formal review and audit processes for software engineering. It describes several review types, each with its own purpose, roles, and procedure: management reviews, technical reviews, inspections, walk-throughs, and audits.

## Input required

- The work product or process to be reviewed or audited, and its current state.
- The purpose: find defects, decide on a technical approach, check status, educate, or confirm compliance.
- The edition of IEEE 1028 (or contract) that applies. Confirm the current edition.
- The candidate participants and their roles.
- The criteria the review or audit will use, such as requirements, standards, or plans.

## Questions to ask first

1. What is the purpose of the review, and what decision will it support?
2. Which review type fits: management review, technical review, inspection, walk-through, or audit?
3. What is the work product, and is it ready for review?
4. Who will take the roles, and are they free of conflicts of interest?
5. What are the entry and exit criteria?

## Method

1. **Choose the review type.** Match the type to the purpose. Management reviews monitor progress against plans; technical reviews evaluate a product against its specification; inspections find defects systematically; walk-throughs gather feedback and share understanding; audits independently assess conformance.
2. **Set entry criteria.** Confirm the product, reference documents, and criteria are available and the product is ready.
3. **Assign roles.** Name a leader or lead auditor, a recorder, the author or audited party, and reviewers or inspectors, as the chosen type requires.
4. **Prepare.** Distribute materials ahead of time and have participants examine them individually.
5. **Conduct the meeting or audit.** Stay within scope, record findings with location and severity, and avoid solving problems in the meeting.
6. **Record the outcome.** Produce a report of findings, decisions, and action items.
7. **Follow up.** Verify that action items and defects are resolved, and apply the exit criteria.
8. **Learn.** Feed results to process improvement, for example through [[ieee-1061-software-quality-metrics]] data on defects found.

## Output format

- A review plan: type, purpose, scope, participants and roles, entry and exit criteria, schedule.
- A findings log: item, location, severity, owner, due date, status.
- A review or audit report with decisions and follow-up actions.

## Ground rules

- Do not quote procedures, required roles, or clause numbers from IEEE 1028 unless the user supplied them; refer to the current edition.
- Review the product, not the author. Keep findings factual and specific.
- Do not invent findings, metrics, or attendance.
- Auditors must be independent of the work being audited.

## Self-check before answering

- Does the chosen review type match the stated purpose?
- Are entry criteria, exit criteria, and roles defined?
- Does every finding have an owner and a follow-up?
- Is independence addressed for audits?

## Common pitfalls

- **One review type for everything** — an inspection and a status review serve different purposes.
- **Reviewing an unready product** — wastes participants' time.
- **Unprepared reviewers** — the meeting becomes first reading.
- **Solving problems in the meeting** instead of recording them.
- **No follow-up** — findings are never verified as fixed.
- **Using the review to evaluate people.**

## Example prompt

"Plan a formal inspection of the payment service design document under IEEE 1028, with roles, entry and exit criteria, and a findings log template."

## Learn more

- Related standards: [[ieee-730-software-quality-assurance]], [[ieee-1012-software-verification-and-validation]], [[ieee-1061-software-quality-metrics]].
- Related skills: [[code-review-checklist]], [[legal-compliance-audit]].
- Official source: [IEEE Standards Association](https://standards.ieee.org/).
