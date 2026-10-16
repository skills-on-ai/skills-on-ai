---
name: ieee-1012-software-verification-and-validation
description: Use when asked to plan or assess verification and validation (V&V) of software using IEEE 1012, including V&V activities by life cycle stage, integrity levels, and independence. Distinct from [[ieee-730-software-quality-assurance]] (overall quality assurance), [[ieee-1028-software-reviews-and-audits]] (review procedures), and [[ieee-1061-software-quality-metrics]] (measurement).
---

# IEEE 1012 Software Verification and Validation

IEEE 1012 defines systematic verification and validation (V&V) activities to ensure that software satisfies its requirements and quality functions. Verification asks whether the product was built correctly against its specifications. Validation asks whether the right product was built for its intended use.

## Input required

- The system or software under V&V and its intended use and operating environment.
- The life cycle model and the work products produced at each stage.
- The edition of IEEE 1012 (or contract or regulation) that applies. Editions differ; confirm the current one.
- Risk or criticality information, such as potential harm from failure.

## Questions to ask first

1. Which edition of IEEE 1012, or which contract clause, governs this work?
2. What are the consequences of failure, so that an integrity level can be chosen?
3. How independent must the V&V team be from development?
4. Which life cycle stages are in scope?
5. Which tests, analyses, and reviews already exist?

## Method

1. **Determine criticality.** Assess the consequences and likelihood of failure and select an integrity level. Do not assume a level; record the reasoning.
2. **Select V&V tasks.** Choose activities for each life cycle stage, such as requirements analysis, design analysis, code review and analysis, unit, integration, system, and acceptance testing, and operation and maintenance support. Scale depth to the integrity level.
3. **Decide independence.** Choose how technically, managerially, and financially independent V&V must be from development.
4. **Write the V&V plan.** Cover scope, tasks, inputs and outputs, schedule, resources, and reporting.
5. **Trace requirements.** Maintain traceability from requirements through design, code, and tests, and check for gaps and unrequested functions.
6. **Perform and record.** Execute the tasks, record anomalies, and report them to the responsible parties in a timely way.
7. **Assess completeness.** Judge whether V&V evidence supports the decision to release, and report residual risk.

## Output format

- Integrity level determination with rationale.
- V&V task matrix: life cycle stage, task, inputs, outputs, and owner.
- Traceability summary and anomaly list.
- A V&V summary report with a clear recommendation and residual risks.

## Ground rules

- Do not quote integrity level definitions, task tables, or clause numbers from IEEE 1012 unless the user supplied them; refer to the current edition's text.
- Do not claim that testing alone is V&V; analysis, inspection, and review also count.
- Do not invent test results, coverage figures, or certificates.
- Keep verification (against specifications) and validation (against user needs) distinct.

## Self-check before answering

- Is the integrity level justified and recorded?
- Does each life cycle stage in scope have V&V tasks?
- Is requirements traceability covered in both directions?
- Is the degree of independence stated?

## Common pitfalls

- **V&V only at the end** — defects found in testing are far costlier than those found in requirements or design.
- **Confusing verification with validation** — a product can meet its spec and still fail the user.
- **One depth for everything** — effort should follow criticality.
- **Developers verifying their own work** where independence is required.
- **Anomalies logged but not tracked** to resolution.

## Example prompt

"Create a V&V plan outline for an infusion-pump control module using IEEE 1012, with the integrity level reasoning shown and independent V&V."

## Learn more

- Related standards: [[ieee-730-software-quality-assurance]], [[ieee-1028-software-reviews-and-audits]], [[ieee-1061-software-quality-metrics]].
- Related skills: [[code-review-checklist]], [[system-quality-attributes]].
- Official source: [IEEE Standards Association](https://standards.ieee.org/).
