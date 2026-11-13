---
name: github-discussion-first-post-for-polls
description: Use when asked to write the first post in a GitHub Discussions "Polls" category — a poll with one clear question, a small set of distinct options, and context explaining how the result will be used. Distinct from [[github-discussion-first-post-for-ideas]] (open-ended suggestions), [[github-discussion-first-post-for-general]] (unstructured conversation), and [[github]] (platform features).
---

# GitHub Discussion first post for Polls

The Polls category lets people put a question to the community and collect votes. A GitHub poll has a title, an optional body, a poll question, and at least two options, so the work is in choosing a clear question and distinct, balanced options.

## Input required

- **The decision** — what the poll will inform.
- **The options** — candidate answers, or enough background to draft them.
- **The audience** — who should vote.
- **How the result will be used** — advisory, binding, or exploratory.
- **The deadline**, if any.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in one batch of at most five questions, skipping any already answered:

1. What decision will the poll inform?
2. What are the options, and is there an "other" or "none of these"?
3. Who is eligible to vote, and is the result binding or advisory?
4. Is there a closing date?
5. Where should people leave reasons (comments on the poll)?

## Method

1. Write the question so it can be answered by picking one option, and keep it neutral.
2. Draft at least two options, as few as will cover the real choices, that are mutually exclusive, similar in length, and phrased in parallel.
3. Add "Something else (explain in comments)" when the options may not cover everyone.
4. Write a short description with the background, the decision, and how the result will be used.
5. State the deadline and who will act on the result.
6. Invite comments for reasons, because votes show what and comments show why.
7. Check the poll for leading wording, overlapping options, and missing choices.

## Output format

Provide, ready to paste:

- `Title:` the question.
- `Category:` Polls.
- `Description:` Markdown with background, decision, and timing (see [[markdown]]).
- `Poll question:` the question, if different from the title.
- `Options:` a numbered list of at least two options.

## Output file

Save the finished post as plain text to `locales/en-us/communications/github-discussions/polls.txt`, relative to the project root, creating the folders if needed. Put the title on the first line, a blank line, then the body. Tell the user the path.

## Ground rules

- One question per poll.
- Do not invent vote counts, deadlines, or commitments to act.
- Be honest about whether the result is binding.
- Avoid loaded wording, and do not make one option the obvious winner.
- Use the serial comma and plain English.

## Self-check before answering

- Can every voter choose exactly one option?
- Do options overlap or differ greatly in detail?
- Is it clear what happens after the vote?
- Are there at least two options, and few enough to compare?

## Common pitfalls

- **Leading questions** that signal the preferred answer.
- **Overlapping options**, which split votes unpredictably.
- **Too many options**, which spreads votes thin.
- **No explanation of use**, so the vote feels pointless.
- **Treating a poll as consensus** when only a few people voted.

## Example prompt

> Write the first Polls post for my project's Discussions. I want to ask users which of three config file formats we should support next: YAML, TOML, or JSON. The result is advisory and closes in two weeks.

## Learn more

- [[github]] for Discussions features.
- [[yaml]], [[toml]], and [[json]] for the example formats.
- [[github-discussion-first-post-for-ideas]] to gather options before a vote.
