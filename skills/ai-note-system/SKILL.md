---
name: ai-note-system
description: Use when someone wants to use an AI assistant with their notes to capture, summarize, tag, and retrieve them, while verifying summaries and keeping sensitive content out of unsuitable tools. Distinct from [[reading-capture]] (turning reading into notes in your own words), [[journaling]] (private reflective writing), and [[tab-management]] (taming open pages before they become notes).
---

# AI Note System

An AI note system uses an assistant to help with the chores around
notes: getting things in, condensing them, labeling them, and finding
them again. It does not replace thinking about the notes. This skill
designs a workflow that is tool-agnostic, checks summaries before
trusting them, and decides what must stay out of AI tools.

## Input required

- **Note types**: meetings, ideas, study, projects, personal, work.
- **Where notes live now**: apps, paper, documents, email.
- **What the AI would do**: summarize, tag, extract tasks, answer
  questions, draft from notes.
- **Sensitivity**: client data, health, financial, legal, or other
  people's private information; employer or school rules on AI tools.
- **Available tools**: the assistant and note app, and what each does
  with stored data.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered:

1. What kinds of notes do you take, and where do they live today?
2. What do you most want help with: capture, summaries, tags, or
   finding things?
3. Which notes contain private, confidential, or regulated information?
4. Does your employer, school, or client restrict AI tools?
5. How do you usually search for a note when you need it?

## Method

1. **Sort notes by sensitivity first.** Make three groups: fine for AI
   tools, only for tools that meet your privacy needs, and never.
   Check each tool's own privacy terms and settings (retention, training
   use, sharing) in the product's current documentation; do not assume.
2. **Design the capture step.** One inbox for all new notes, whatever
   the source: typed, dictated, photographed, or forwarded. Capture
   first, organize later. Add the date and source automatically if the
   tool can.
3. **Use AI for summaries, with verification.** Ask for a short summary,
   then check it against the original: names, numbers, dates, decisions,
   and action items. A summary can omit a point or state something the
   notes never said. Keep the original linked beside the summary.
4. **Agree a tag scheme.** A small, fixed vocabulary of tags (project,
   person, topic, status) beats open-ended tagging. Let the AI propose
   tags from the list, and review them. Add a new tag only when none fit.
5. **Set up retrieval.** Prefer search that points back to the original
   note. When asking the assistant questions about notes, require it to
   cite which note supports each point, then open the source. Treat an
   uncited answer as a guess.
6. **Extract tasks, then move them.** Let the AI list action items from
   a note, confirm them, and put them on the task list. The note is not
   the task list.
7. **Review weekly.** Skim the inbox, correct wrong tags, delete
   duplicates, and promote key notes into lasting ones written in your
   own words (see [[reading-capture]]).
8. **Keep a backup.** Hold notes in a format and location you control,
   so they survive a change of tool.

## Output format

- **Sensitivity table:** note type, allowed tools, never-share items.
- **Workflow:** capture, summarize, tag, retrieve, review, one line each.
- **Tag vocabulary** (up to ten).
- **Prompt templates:** summary, tag suggestion, action items, cited
  question.
- **Verification checklist** for summaries.
- **Weekly review steps.**

## Ground rules

- **Verify before relying.** A summary is a draft; names, figures, and
  decisions are checked against the source.
- **Keep sensitive content out of unsuitable tools.** Health,
  financial, legal, confidential work material, and others' private
  details stay out unless the tool and policy clearly allow them.
  Identity numbers, passwords, and recovery codes never go in notes sent
  to an AI.
- **Do not state a tool's data practices as fact.** Tell the user to
  read its current terms and settings.
- **Tool-agnostic.** Describe capabilities; tools are examples only.
- **Respect others.** Do not feed recordings or notes about other people
  into AI tools without their knowledge where consent is expected.

## Self-check before answering

- Did I classify notes by sensitivity before suggesting any AI step?
- Does every summary workflow include checking against the original?
- Is the tag set small and fixed?
- Do answers cite source notes?
- Is there a backup outside the AI tool?

## Common pitfalls

- **Trusting summaries unchecked** — errors and omissions spread.
- **Dumping everything in** — private material ends up in the wrong tool.
- **Tag sprawl** — hundreds of near-duplicate tags.
- **Never rereading** — storing notes without ever using them.
- **Replacing thinking** — the AI summary stands where understanding
  should be.
- **Lock-in** — notes only exist inside one product.

## Example prompt

> I take lots of meeting and study notes in a notes app and want an AI
> assistant to summarize and tag them and help me find things later.
> Design the workflow, tell me which notes should never go to the
> assistant, and how I should check its summaries.

## Learn more

- [[reading-capture]] for writing key points in your own words.
- [[journaling]] for private notes that may belong outside AI tools.
- [[tab-management]] for turning open pages into notes.
- [[information-diet]] for limiting how much arrives to be captured.
