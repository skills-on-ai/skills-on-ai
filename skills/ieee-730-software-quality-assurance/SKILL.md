---
name: ieee-730-software-quality-assurance
description: Use when asked to plan, set up, or assess Software Quality Assurance (SQA) processes using IEEE 730, covering SQA planning, product and process assurance, and control across the life cycle. Distinct from [[ieee-1012-software-verification-and-validation]] (technical V&V activities), [[ieee-1028-software-reviews-and-audits]] (review and audit procedures), and [[ieee-1061-software-quality-metrics]] (measurement).
---

# IEEE 730 Software Quality Assurance

IEEE 730 establishes requirements for initiating, planning, controlling, and executing Software Quality Assurance (SQA) processes across a project's life cycle. It gives an organization a basis for showing that software products and processes conform to their requirements and plans.

## Input required

- The project, product, and life cycle model in use.
- The edition of IEEE 730 (or the contract or regulation) that applies. Editions differ; confirm the current one.
- Existing plans, standards, and procedures, such as the project plan, the configuration management plan, and the test plan.
- Criticality or risk of the software, and any customer or regulatory quality requirements.

## Questions to ask first

1. Which edition of IEEE 730, or which contract clause, governs this work?
2. Is the goal to write an SQA plan, to audit an existing SQA effort, or to tailor the standard?
3. How critical is the software, and what are the main risks?
4. Who performs SQA, and how independent are they from the development team?
5. Which other standards or plans must SQA align with?

## Method

1. **Scope the SQA effort.** Identify the products, processes, and life cycle stages that SQA covers, and the quality requirements for each.
2. **Plan SQA.** Write the SQA plan: purpose and scope, references, management and organization, responsibilities, resources, and schedule. Tailor the standard to the project's size and risk, and record what was tailored and why.
3. **Define product assurance.** Decide how work products will be checked against requirements and standards, for example through reviews, tests, and evaluations of deliverables.
4. **Define process assurance.** Decide how the project's processes will be checked for conformance to the plan and to organizational procedures, including supplier and subcontractor processes.
5. **Set up control.** Define how nonconformances are recorded, tracked, escalated, and closed, and how SQA results reach management.
6. **Define records.** Specify the SQA records to keep, such as review results, audit reports, and corrective action logs, and how long to keep them.
7. **Execute and monitor.** Perform the planned activities, report findings, and track corrective actions to closure.
8. **Improve.** Use findings and measures to adjust the plan and the processes.

## Output format

- An SQA plan outline or review, with a section for each item in the method.
- A table of SQA activities: activity, work product or process assured, who, when, and the record produced.
- A list of nonconformances or gaps with owner and suggested action.
- Assumptions and open questions.

## Ground rules

- Do not quote clause numbers, required sections, or wording from IEEE 730 unless the user supplied them. Editions differ, so refer to the standard's current text.
- Do not invent compliance claims, certificates, or audit results.
- Keep SQA independent enough to report problems to management without pressure from the team being assured.
- Tailor to the project; avoid copying a plan template that does not fit.

## Self-check before answering

- Does the plan cover both product assurance and process assurance?
- Is there a way to record, track, and close nonconformances?
- Is the edition of the standard stated, and are tailoring decisions explained?
- Were any facts about the standard guessed? Remove or flag them.

## Common pitfalls

- **SQA as testing only** — SQA also assures processes and work products, not just test results.
- **No independence** — SQA that reports only to the project manager can be overruled silently.
- **Plan written, then shelved** — the plan must drive scheduled activities and records.
- **Over-tailoring** — dropping activities without a recorded reason.
- **Paper compliance** — producing records without acting on findings.

## Example prompt

"Draft an SQA plan outline for a 12-person team building a medical-device companion app, aligned with IEEE 730, with independent SQA reporting to the quality manager."

## Learn more

- Related standards: [[ieee-1012-software-verification-and-validation]], [[ieee-1028-software-reviews-and-audits]], [[ieee-1061-software-quality-metrics]].
- Related skills: [[code-review-checklist]], [[system-quality-attributes]], [[software-engineering-metrics]].
- Official source: [IEEE Standards Association](https://standards.ieee.org/).
