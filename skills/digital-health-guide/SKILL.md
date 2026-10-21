---
name: digital-health-guide
description: Use when asked to find, explain, or apply content from the Digital Health Guide, a handbook of best practices for delivering digital services in health and social care, such as choosing topics for a role or problem, answering questions on clinical safety, information governance, digital inclusion, or delivery, running a team workshop, or assessing maturity. Companion to [[digital-health-metrics]], which covers measurement; for economic questions see [[health-economics-guide]], and for delivery practice in general see [[software-engineering-guide]].
---

# Digital Health Guide: reader skill

The *Digital Health Guide* (<https://digital-health-guide.github.io/>) is a practical handbook of best practices for delivering digital services in health and social care organizations. It is written for chief executives and senior leaders, directors of digital and transformation, product and delivery leads, clinical and care professionals moving into digital roles, programme and portfolio managers, and operational managers. Its premise is that in health and care, how you work is a clinical-safety, equity, and public-trust issue, not only an efficiency one.

## Input required

- The reader's role, problem, and time available.
- The organization type, so the right sector lens applies.
- The country or health system, because regulation and standards differ.
- The reader's preferred language, if not English.

## Questions to ask first

1. What is your role, and what problem are you trying to solve?
2. What kind of organization do you work in, and in which country or health system?
3. Do you want an answer, a team workshop, a maturity assessment, or a checklist?
4. How much time do you have?

## Structure of the book

- The book has ten parts: Foundations; Managing the Flow of Work; The Delivery Lifecycle; Technology, Architecture and Data; Modes of Delivery; Money, Value and Governance; People, Teams and Workforce; Change and Innovation; Partnerships and Government; and Measurement, Improvement, Knowledge and Leadership.
- Part 1 fixes the vocabulary and the non-negotiables: safety, regulation, data, ethics, and inclusion. Read it first, then jump to the part that fits the problem.
- The book's `README.md` is the table of contents, `GLOSSARY.md` defines terms, and `INDEX.md` maps concepts and frameworks to the topics that cover them.
- Topics live under `locales/<locale>/topics/<slug>/index.md`.
- Every topic follows one shape: a thesis sentence, why it matters in health and care, core concepts, best practices, six questions to discuss with your team, a worked health and care example, four sector lenses (Startup, Small business, Enterprise, Government), common failure modes, a five-level maturity model, a checklist, key sources, and references.

## Method

1. **Route.** Search the table of contents and `INDEX.md` for the concept. Name the topic that owns it and any others that touch it.
2. **Answer from the topic.** Cite it by number and title. Paraphrase or quote; do not extrapolate past what is written.
3. **Facilitate a workshop.** Lift the topic's six discussion questions and their briefings. Pick one or two that fit the team, state a purpose, ask for facts before opinions, and end with at most two actions with owners and dates.
4. **Assess maturity.** Ask where observable practice sits on the five levels (Initiate, Develop, Standardize, Manage, Orchestrate), and use the sector lens to calibrate expectations.
5. **Turn guidance into action.** Hand over the topic's checklist, adapted only where the adaptation is a direct instance of what the topic says.
6. **Point onward** to the topic's key sources and references.
7. **Say so when the book does not cover something.** Name the nearest topic and suggest an authoritative external source.

## Output format

1. The topic or topics used, by number and title.
2. The grounded answer, workshop plan, assessment, or checklist.
3. Anything the book does not cover, with a pointer onward.

## Ground rules

- Read the topic before answering; do not answer from memory.
- Do not invent standards, thresholds, citations, or compliance claims.
- Name the country or system when a claim is specific to one. The book draws heavily on UK sources, such as NHS and GOV.UK service standards, NICE, MHRA, and the clinical safety standards DCB0129 and DCB0160, which do not apply everywhere.
- The book is not clinical or legal advice. Anything that affects patient safety needs review by a qualified clinical safety officer or the relevant authority.
- Do not edit the book's files from this skill.

## Self-check before answering

- Did I read the topic itself?
- Did I name the jurisdiction behind any regulation or standard?
- Did I separate what the book says from my own suggestion?

## Common pitfalls

- Treating clinical safety, information governance, or inclusion as a later phase instead of a starting condition.
- Applying UK standards in another country without checking local equivalents.
- Using the maturity model to rank teams instead of choosing next steps.
- Skipping the sector lens, which changes what good practice looks like.

## Example prompt

> Our trust is replacing its patient portal. Use the Digital Health Guide to pick the topics I should read first, and give me a one-hour workshop plan for my programme board.

## Learn more

- Digital Health Guide: <https://digital-health-guide.github.io/>
- Companion book on measures: [[digital-health-metrics]]
