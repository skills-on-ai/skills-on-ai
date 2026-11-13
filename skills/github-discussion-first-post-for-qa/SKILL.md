---
name: github-discussion-first-post-for-qa
description: Use when asked to write the first post in a GitHub Discussions "Q&A" category — either a well-formed question, with context, what was tried, and expected versus actual results, or a pinned post explaining how to ask. Distinct from [[github-discussion-first-post-for-general]] (open chat), [[github-discussion-first-post-for-ideas]] (feature proposals), and [[github]] (platform features such as Issues).
---

# GitHub Discussion first post for Q&A

The Q&A category is for questions with answers. Replies can be marked as the accepted answer, which lets later readers find the solution quickly. A first post either asks a good example question or explains how to ask one.

## Input required

- **The question**, if the post asks one — the goal, what was tried, and what happened.
- **Versions and environment** — software versions, operating system, and relevant configuration.
- **A minimal example** — code, commands, or error text.
- **The project's support norms** — what belongs in Q&A and what belongs in Issues.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in one batch of at most five questions, skipping any already answered:

1. Is this a real question to post, or a pinned "how to ask" guide?
2. What is the goal, and what have you tried?
3. What did you expect, and what happened instead (with exact error text)?
4. Which versions and environment are involved?
5. Can the problem be reproduced in a few lines or steps?

## Method

1. Write a specific title that names the problem, such as "How do I configure X when Y?" rather than "Help".
2. State the goal in one sentence.
3. Describe what you tried, in order.
4. Give expected and actual results, with exact error messages in code blocks.
5. Include versions and environment details.
6. Add a minimal reproducible example, trimmed to the smallest case that still fails.
7. End with the specific thing you need, then mark the best reply as the answer once it works.

For a "how to ask" post, turn steps 2 to 6 into a checklist and link where bugs belong (Issues).

## Output format

A ready-to-paste Markdown post (see [[markdown]]):

- `Title:` one line naming the problem.
- `Category:` Q&A.
- Body headings: Goal, What I tried, Expected, Actual, Environment, Minimal example.

## Output file

Save the finished post as plain text to `locales/en-us/communications/github-discussions/qa.txt`, relative to the project root, creating the folders if needed. Put the title on the first line, a blank line, then the body. Tell the user the path.

## Ground rules

- Never invent error messages, versions, or output. Use only what the user supplied, and mark unknowns as "to fill in".
- Remove secrets, tokens, and personal data from pasted logs.
- One question per post.
- Use fenced code blocks for code and logs.
- Use the serial comma and plain English.

## Self-check before answering

- Could a stranger reproduce the problem from the post alone?
- Is the title searchable?
- Are the exact error text and versions included?
- Is it a question, not a bug report that belongs in Issues?

## Common pitfalls

- **Vague titles** such as "It doesn't work".
- **Screenshots of text** instead of copyable code.
- **Leaking credentials** in logs.
- **Several questions in one thread**, so no single reply can be the answer.
- **Forgetting to mark the answer**, which leaves the thread looking unsolved.

## Example prompt

> Write a Q&A post asking why my GitHub Actions workflow can't find the secret I set for deploys. I'm on Node 22, the workflow runs on pull requests from forks, and the error says the variable is empty.

## Learn more

- [[github]] for Actions, Issues, and Discussions.
- [[getting-feedback]] for making questions easy to answer.
- [[github-discussion-first-post-for-general]] when the topic is a conversation rather than a question.
