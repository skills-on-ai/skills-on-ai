---
name: github-discussion-first-post-for-announcements
description: Use when asked to write the first post in a GitHub Discussions "Announcements" category — a welcome-and-news post that tells readers what the project is, what has changed or launched, and what to do next. Distinct from [[github-discussion-first-post-for-general]] (open conversation), [[github-discussion-first-post-for-show-and-tell]] (a member sharing their work), and [[github]] (GitHub features generally).
---

# GitHub Discussion first post for Announcements

The Announcements category is for updates from the maintainers. In the default category set, only maintainers can start discussions there, while everyone can comment and react. The first post sets the tone: it says what the project is, why Discussions are turned on, and where each kind of conversation belongs.

## Input required

- **The project** — name, one-sentence purpose, and repository link.
- **The news** — what is being announced (Discussions opened, a release, a roadmap, a change of direction).
- **The audience** — users, contributors, or both.
- **The call to action** — what readers should do next.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in one batch of at most five questions, skipping any already answered:

1. What is the project, and who uses it?
2. What exactly is the announcement?
3. What should readers do after reading (comment, upgrade, vote, contribute)?
4. Which other Discussions categories are enabled, so I can point to them?
5. What tone fits the project (formal, friendly, playful)?

## Method

1. Write a title that states the news in plain words, such as "Welcome to Project X Discussions" or "Project X 2.0 is released".
2. Open with one or two sentences giving the headline and why it matters to the reader.
3. Add a short "What's new" or "What this means for you" section, as a list if there are three or more items.
4. Point each kind of conversation to its category: questions to Q&A, ideas to Ideas, shared work to Show and tell, and bugs to Issues.
5. State the community expectations, linking the code of conduct and contributing guide if they exist.
6. End with one clear call to action and an invitation to reply or react.
7. Check that every link works and that the post makes sense to someone who has never seen the project.

## Output format

A ready-to-paste Markdown post (see [[markdown]]):

- `Title:` one line.
- `Category:` Announcements.
- Body: headline paragraph, a short list of changes, a "Where to go for what" list, a call to action.

## Output file

Save the finished post as plain text to `locales/en-us/communications/github-discussions/announcements.txt`, relative to the project root, creating the folders if needed. Put the title on the first line, a blank line, then the body. Tell the user the path.

## Ground rules

- State only facts the user supplied. Do not invent version numbers, dates, features, or metrics.
- Keep it short enough to read in a minute.
- Lead with the news, not the history of the project.
- Use the serial comma and plain English.
- Write for a skimmer: short paragraphs, descriptive headings.

## Self-check before answering

- Does the title say what happened?
- Can a newcomer tell what the project is from the first paragraph?
- Is there exactly one main call to action?
- Does every claim come from the user's input?

## Common pitfalls

- **Burying the news** under project history.
- **Vague calls to action** such as "let us know what you think".
- **Announcing a maintainer-only post as a conversation**, then leaving no way to reply.
- **Promising dates or features** the maintainers have not committed to.
- **Skipping category guidance**, so questions land in Announcements.

## Example prompt

> Write the first Announcements post for my GitHub Discussions. The project is a CLI for converting CSV to JSON. I'm turning on Discussions today and want people to ask questions in Q&A and suggest features in Ideas.

## Learn more

- [[github]] for Discussions, Issues, and repository features.
- [[copywriting]] and [[microcopy]] for clear, short wording.
- [[github-discussion-first-post-for-general]] for an open-ended welcome thread.
