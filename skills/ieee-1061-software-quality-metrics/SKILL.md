---
name: ieee-1061-software-quality-metrics
description: Use when asked to define software quality requirements and choose, collect, and validate software quality metrics using the IEEE 1061 methodology across the product life cycle. Distinct from [[software-engineering-metrics]] (general engineering measures), [[system-quality-attributes]] (non-functional requirements), and [[ieee-730-software-quality-assurance]] (SQA processes).
---

# IEEE 1061 Software Quality Metrics

IEEE 1061 provides a methodology for establishing quality requirements and for identifying, implementing, analyzing, and validating software quality metrics throughout the product life cycle. It links measures back to the quality requirements they are meant to show.

## Input required

- The software product and its life cycle stage.
- The quality requirements or attributes that matter, such as reliability, maintainability, or usability.
- The edition of IEEE 1061 that applies. The standard's status has changed over time; confirm that the version in use is current and available.
- Data sources available, such as defect trackers, test results, and review records.

## Questions to ask first

1. Which quality requirements must the metrics serve?
2. Which life cycle stages need measures?
3. What data is already collected, and how reliable is it?
4. Who will use the metrics, and for which decisions?
5. Is the standard required by contract, or used as guidance?

## Method

1. **Establish quality requirements.** State each requirement, rank by importance, and identify conflicts between them.
2. **Identify candidate metrics.** For each requirement, list the factors and sub-factors that express it and the metrics that could measure them.
3. **Implement the metrics.** Define each metric precisely: data to collect, collection method, tools, timing, and who is responsible.
4. **Analyze the results.** Compare to thresholds or targets, look for trends, and check data quality before drawing conclusions.
5. **Validate the metrics.** Test whether a metric actually predicts or reflects the quality factor it is meant to, using the project's own data. Drop or revise metrics that fail.
6. **Act and review.** Use validated metrics in decisions, and revisit the set as the product and life cycle stage change.

## Output format

- A traceability table: quality requirement, factor, metric, data source, threshold or target, owner.
- Metric definitions with collection method and frequency.
- An analysis of results with caveats about data quality and validity.
- Recommendations and open questions.

## Ground rules

- Do not quote metric lists, thresholds, validation statistics, or clause numbers from IEEE 1061 unless the user supplied them.
- Do not invent measurements or benchmarks. Use the project's own data, and label estimates.
- Every metric must trace to a quality requirement; do not collect numbers for their own sake.
- State limits: a metric is evidence, not proof, of quality.

## Self-check before answering

- Does each metric trace to a stated quality requirement?
- Is each metric defined well enough that two people would collect it the same way?
- Has validity been checked, or is it flagged as unvalidated?
- Could the metric be gamed, and is that addressed?

## Common pitfalls

- **Measuring what is easy** rather than what matters.
- **Skipping validation** — a metric that does not track quality misleads.
- **Single-number targets** that encourage gaming.
- **Poor data quality** hidden behind precise-looking charts.
- **Too many metrics** — a small, useful set is better.
- **Using metrics to rank people** instead of to improve the product.

## Example prompt

"Using the IEEE 1061 methodology, map our maintainability and reliability requirements to a small set of metrics, with data sources and a plan to validate them."

## Learn more

- Related standards: [[ieee-730-software-quality-assurance]], [[ieee-1012-software-verification-and-validation]], [[ieee-1028-software-reviews-and-audits]].
- Related skills: [[software-engineering-metrics]], [[system-quality-attributes]], [[data-quality]].
- Official source: [IEEE Standards Association](https://standards.ieee.org/).
