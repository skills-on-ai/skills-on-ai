---
name: github-discussion-first-post-for-ideas
description: Use when asked to write the first post in a GitHub Discussions "Ideas" category — a post that explains how to suggest changes and features, or that proposes a first idea with its problem, proposal, and alternatives. Distinct from [[github-discussion-first-post-for-general]] (open chat), [[github-discussion-first-post-for-polls]] (structured voting), and [[github-discussion-first-post-for-qa]] (questions needing answers).
---

# GitHub Discussion first post for Ideas

The Ideas category is where people propose changes and features before anyone writes code. A first post either seeds the category with a well-formed example idea or explains how to submit one. Either way it should frame ideas around the problem they solve.

## Input required

- **The project** — name and purpose.
- **The idea**, if the post proposes one — the problem and the rough proposal.
- **How ideas are handled** — who reviews them, and whether accepted ideas become Issues.
- **Scope limits** — what the project will not take on.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in one batch of at most five questions, skipping any already answered:

1. Is this post a template for others, or does it propose a specific idea?
2. What problem does the idea solve, and for whom?
3. What alternatives or workarounds exist today?
4. What happens to a good idea (an Issue, a roadmap item, a vote)?
5. Are there topics the project has already decided against?

## Method

1. Title the post with the outcome or the problem, not the solution, such as "Support exporting to Markdown".
2. State the problem in one or two sentences, with who is affected and when.
3. Describe the proposal in plain terms, as a short list if it has parts.
4. Name alternatives and workarounds, including doing nothing.
5. Note known costs or trade-offs: complexity, compatibility, and maintenance.
6. Ask for specific feedback, such as "Would this solve your case?".
7. Explain what happens next: how ideas are reviewed and when one becomes an Issue.

For a template post, replace steps 2 to 5 with a short "How to suggest an idea" list using the same headings.

## Output format

A ready-to-paste Markdown post (see [[markdown]]):

- `Title:` one line.
- `Category:` Ideas.
- Body headings: Problem, Proposal, Alternatives, Open questions, What happens next.

## Output file

Save the finished post as plain text to `locales/en-us/communications/github-discussions/ideas.txt`, relative to the project root, creating the folders if needed. Put the title on the first line, a blank line, then the body. Tell the user the path.

## Ground rules

- Lead with the problem. A solution without a problem is hard to judge.
- Do not invent user demand, statistics, or maintainer commitments.
- Separate what the user wants from what the project has agreed to.
- Use the serial comma and plain English.

## Self-check before answering

- Is the problem understandable without the proposal?
- Are alternatives and costs named?
- Is there a specific question for readers?
- Does the post avoid promising that the idea will be built?

## Common pitfalls

- **Solution-first posts** that never say what hurts.
- **Several ideas in one thread**, which makes feedback tangled.
- **Implying acceptance**, then disappointing contributors.
- **No path forward**, so good ideas sit unread.

## Example prompt

> Write the first Ideas post for my project's Discussions. I want it to explain how to suggest a feature, with a short template people can copy. The project is a static site generator.

## Learn more

- [[github]] for Discussions, Issues, and Projects.
- [[getting-feedback]] for asking for useful reactions.
- [[github-discussion-first-post-for-polls]] to put competing options to a vote.
