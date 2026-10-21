---
name: agile-itil-metrics
description: Use when someone asks how to measure an agile or ITIL practice (incidents, changes, flow, service levels, experience, assets, cost, risk, people, or AI), or needs the right topic, metric definition, gaming vector, guardrail, discussion question, or AI prompt from the Agile ITIL Metrics book. Companion to [[agile-itil-guide]], which covers the practices themselves; for the broader service management book see [[service-management-metrics]], and for general indicator design see [[key-performance-indicators]].
---

# Agile ITIL Metrics: reader skill

The *Agile ITIL Metrics* book (<https://agile-itil-metrics.github.io/>) covers how to measure agile and ITIL practices. Each concept has one home topic, and each metric comes with its definition, its gaming vector (how a team can make the number look good without improving the thing measured), and its guardrail (what catches that).

## Input required

- The practice or outcome the person wants to measure.
- The data they already collect, and how often.
- The decision the metric will support.

## Questions to ask first

1. Which practice or outcome do you want to measure?
2. What decision will the number inform?
3. What data do you have today?
4. Who will see the metric, and could it be used to judge individuals?

## Method

1. Read the book's `spec/structure.md` to find the topic that owns the practice or metric.
2. Open `locales/en-001/topics/<slug>/index.md`. Skip stubs (marked `<!-- stub -->`) and say the topic is not yet written.
3. Answer from the topic's metric definitions table, and always give the gaming vector and the guardrail with the metric.
4. Cross-reference topics by number and title.

## Output format

1. The home topic, by number and title.
2. The metric definition, as the topic gives it.
3. The gaming vector and guardrail.
4. Any related topics, and what the book does not cover.

## Ground rules

- Never invent metrics, benchmark values, or sources. If the book does not cover it, say so.
- Never recommend ranking individuals or tying pay or discipline to a single number; see the book's topic on Goodhart's law and the psychology of metrics.
- Do not edit the book from this skill.

## Self-check before answering

- Did I give a gaming vector and a guardrail with every metric?
- Did I skip stub topics and say so?
- Did I avoid benchmarks the book does not state?

## Common pitfalls

- Giving a metric without saying how it can be gamed.
- Using a single number as a target, which invites Goodhart's law.
- Comparing teams using measures that mean different things in different contexts.
- Quoting a topic that is still a stub.

## Example prompt

> We want to measure our change process. Using the Agile ITIL Metrics book, suggest which metrics to use, how each could be gamed, and what guardrail to pair with each.

## Learn more

- Agile ITIL Metrics: <https://agile-itil-metrics.github.io/>
- Companion book on practice: [[agile-itil-guide]]
