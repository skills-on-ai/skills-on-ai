---
name: github-discussion-first-post-for-show-and-tell
description: Use when asked to write the first post in a GitHub Discussions "Show and tell" category — a post that shares something built with or around the project, or invites others to, with what it is, why it was made, and how to try it. Distinct from [[github-discussion-first-post-for-announcements]] (maintainer news), [[github-discussion-first-post-for-ideas]] (proposals), and [[github-discussion-first-post-for-general]] (open chat).
---

# GitHub Discussion first post for Show and tell

The Show and tell category is where members share what they have made: projects, integrations, demos, tutorials, and experiments. A first post models the format by showing one example, or by inviting people to share theirs.

## Input required

- **The thing being shown** — what it is and a link.
- **Why it exists** — the problem or curiosity behind it.
- **How to try it** — install steps, a demo link, or a screenshot.
- **What feedback is wanted**, if any.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in one batch of at most five questions, skipping any already answered:

1. Is this post showing a specific project, or inviting others to share theirs?
2. What is it, and what is the link?
3. Why did you make it, and what did you learn?
4. How can people try it quickly?
5. What kind of feedback do you want, if any?

## Method

1. Write a title that names the thing and what it does, such as "I built a dashboard for Project X metrics".
2. Open with one sentence saying what it is.
3. Say why you made it, in two or three sentences.
4. Show it: a screenshot, a short code sample, or a link to a demo (see [[markdown]] for images and code fences).
5. Explain how to try it, in a few steps.
6. Share one thing that was hard or surprising, since stories invite replies.
7. Ask for what you want: feedback, contributors, or other people's examples.

For an invitation post, replace steps 2 to 6 with a short template and your own example.

## Output format

A ready-to-paste Markdown post:

- `Title:` one line.
- `Category:` Show and tell.
- Body: what it is, why, a visual or snippet, how to try it, and a closing ask.

## Output file

Save the finished post as plain text to `locales/en-us/communications/github-discussions/show-and-tell.txt`, relative to the project root, creating the folders if needed. Put the title on the first line, a blank line, then the body. Tell the user the path.

## Ground rules

- Describe only what exists. Do not claim users, stars, or performance the user did not give you.
- Credit others whose work you built on.
- Keep self-promotion honest and relevant to the project.
- Use the serial comma and plain English.

## Self-check before answering

- Can a reader tell what it is in one sentence?
- Is there something to look at, such as an image, a snippet, or a link?
- Can someone try it without asking questions?
- Is the closing ask specific?

## Common pitfalls

- **Link-only posts** with no description.
- **Marketing language** instead of plain explanation.
- **No way to try it**, so readers cannot engage.
- **Posting off-topic work** unrelated to the project.
- **Defensive replies** to feedback.

## Example prompt

> Write a Show and tell post for my Discussions. I built a VS Code extension that previews the project's config files. I want to share a screenshot and ask for feedback on the preview layout.

## Learn more

- [[github]] for Discussions and repository features.
- [[copywriting]] for clear, honest descriptions.
- [[giving-feedback]] for replying kindly to shared work.
