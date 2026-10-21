---
name: service-management-guide
description: Use when asked to find, explain, or apply content from the Service Management Guide, such as choosing topics for a role or problem, running a team conversation from a topic's discussion questions, adapting one of its AI prompts to a team's own material, or looking at a practice through agile, AI, automation, and analytics. Companion to [[service-management-metrics]], which covers measurement; for frameworks and standards see [[itil-5]], [[iso-iec-20000]], and [[fitsm]], and for the agile variant see [[agile-itil-guide]].
---

# Service Management Guide: reader skill

The *Service Management Guide* (<https://service-management-guide.github.io/>) has 65 topics in eight parts, each at `locales/en-001/topics/<slug>/index.md` in the book's repository. `spec/topics.tsv` lists part, number, and slug, and each topic's first headline is its title. `glossary/index.md` and `index/index.md` point to the home topic for terms and concepts. Read the topic itself before answering; do not answer from memory.

## Input required

- The person's role, the problem they face, and the time they have.
- For an AI prompt, the real material to paste in, with personal data, credentials, and confidential detail removed.

## Questions to ask first

1. What is your role?
2. What problem are you facing?
3. How much time do you have?
4. Do you want a reading path, a team conversation, or an AI prompt?

## Choose topics

1. Match the problem to a topic using `index/index.md` and the table in Topic 8.5 — Learning Paths and Certification. Name the topic by number and title, for example "Topic 3.4 — Change Enablement".
2. Offer a short path: one or two foundation topics, then the practice topics closest to the problem. Do not list every topic.

## Run a team conversation

1. Open the topic's `## Questions to discuss with your team`. There are six; pick one or two that fit the team.
2. Use the briefing under each question as facilitator's notes: why it matters, what answers to expect, one follow-up.
3. State a one-sentence purpose, ask for facts before opinions, hear from everyone, and end with at most two actions with owners and dates.
4. Offer the worked example in `## In practice: a service management example` as a fictional scenario to discuss, never as evidence.

## Apply an AI prompt

1. Take a prompt from the topic's `## AI prompts`. Fill every `[square bracket]` with the person's real material.
2. Keep the boundaries: do not invent numbers, sources, quotations, or compliance claims; use only the pasted material; ask clarifying questions first; mark assumptions; list what you are unsure of.
3. Check the output against the pasted material. Anything that affects customers or production needs a person's review.

## Look at it through the four lenses

Every topic has an `## Agile, AI, automation, and analytics` section. When asked about AI, automation, or analytics, start there, then follow its links to Parts 5, 6, and 7. For measures, point to the companion *Service Management Metrics* book.

## Output format

1. The topics used, by number and title.
2. The reading path, conversation plan, or filled prompt.
3. What the guide marks as unverified, and where to confirm it.

## Ground rules

- Cite the topic and its References; do not add sources the topic does not contain.
- State what the guide says is unverified, such as ITIL vocabulary taken from secondary sources or ITIL 5 details, and point to the owner's current publications.
- Do not give legal advice; say which rule to read and who to ask.
- Use ITIL(R) and other names accurately and do not imply endorsement.
- Do not edit the guide from this skill; a separate maintainer skill in its repository is for that.

## Self-check before answering

- Did I read the topic and cite it by number and title?
- Did I keep to a short path instead of listing every topic?
- Did I remove confidential detail before using an AI prompt?

## Common pitfalls

- Answering from memory of ITIL instead of the topic's text.
- Presenting the fictional worked example as evidence.
- Pasting customer data or credentials into an AI prompt.
- Ending a conversation without owners and dates for actions.

## Example prompt

> I run a service desk and want to improve incident handling. Using the Service Management Guide, pick the right topics and give me a 45-minute team conversation plan.

## Learn more

- Service Management Guide: <https://service-management-guide.github.io/>
- Companion book on measures: [[service-management-metrics]]
