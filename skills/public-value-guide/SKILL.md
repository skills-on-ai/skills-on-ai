---
name: public-value-guide
description: Use when the user asks about public value, public administration, public policy, government management, or social-sector and nonprofit management, wants to run a team workshop on one of these topics, or wants to assess their organization's maturity against a public-value practice. Routes to the right topic of the Public Value Guide and answers from the book's own text. Trigger phrases include "public value," "strategic triangle," "government failure," "public administration," "social sector," and "nonprofit management." Companion to [[public-value-metrics]], which covers measuring and justifying public value; for health spending see [[health-economics-guide]].
---

# Public Value Guide: reader skill

This skill helps a reader use the *Public Value Guide*, a 33-topic handbook on creating public value in government and the social sector, organized around Mark Moore's strategic triangle: legitimacy and support, value proposition, and operational capacity. The book is published at <https://public-value-guide.github.io/>.

## Input required

- The reader's question, situation, or workshop goal.
- The kind of organization: local government, national government, social sector or nonprofit, or multilateral and international.
- The reader's preferred language, if not English.

## Questions to ask first

1. What is the situation or decision you are working on?
2. Which kind of organization do you work in?
3. Do you want an answer, a team workshop, a maturity assessment, or a checklist?
4. Which language or locale do you prefer?

## Routing a question

1. Check the book's `README.md` table of contents and `INDEX.md` for the concept the reader asked about.
2. Open the matching topic under `locales/en-gb-oxendict/topics/<slug>/index.md`, or the reader's preferred locale if they have said which. The book's `spec/index.md` lists the available locales.
3. Answer strictly from that topic's text. If the question spans several topics, read all of them first and say which topic each part of the answer comes from.
4. If nothing in the book covers the question, say so plainly instead of presenting general knowledge as the book's position.

## Running a team workshop

Each topic has a `## Questions to discuss with your team` section with exactly six questions, each with a briefing. Offer to:

- Walk through all six in order, leaving space for discussion between questions.
- Pick the two or three most relevant to the situation the reader describes.

## Applying the maturity model and checklist

Each topic has a `## Maturity model` table with five levels (Initiate, Develop, Standardize, Manage, Orchestrate) and a `## Checklist`. Ask which level matches the reader's current practice, then offer the checklist as a next-steps list.

## Sector lenses

Each topic has `## Four sector lenses`: local government, national government, social sector and nonprofit, and multilateral and international. Lead with the reader's lens if known; otherwise ask, or present all four briefly.

## Output format

1. The topic or topics used, by title.
2. The answer, grounded in the topic text.
3. For workshops, the chosen questions with their briefings.
4. For assessments, the maturity level reached and the checklist items left.
5. Anything the book does not cover.

## Ground rules

- Do not edit the book's files; this skill is for readers, and a separate maintainer skill in the book's repository is for authors.
- Do not invent frameworks, figures, or citations that are not in the topic.
- Name the jurisdiction when a claim is specific to one.

## Common pitfalls

- Answering from general knowledge when a topic exists on point.
- Treating the strategic triangle as a checklist instead of three tests that must all hold.
- Presenting the maturity model as a score to rank organizations.
- Skipping the sector lens, which changes what good practice looks like.

## Example prompt

> We run a city housing service and want to know whether our new digital front door creates public value. Use the Public Value Guide to pick the right topics and run a short workshop with my team.

## Learn more

- Public Value Guide: <https://public-value-guide.github.io/>
- Companion book on measures: [[public-value-metrics]]
