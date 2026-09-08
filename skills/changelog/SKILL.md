---
name: changelog
description: Use when asked to write or maintain a changelog — the complete, running, human-readable record of notable changes to a project across all versions — as distinct from [[release-notes]], which is the announcement for one specific release, narrower in scope and often more promotional in tone.
---

# Changelog

A changelog is a running record of notable changes to a project,
organized by version and written for the people who consume the
project rather than the people who build it. Its job is to let anyone
— a user upgrading, a developer debugging a regression, a maintainer
reconstructing history — answer "what changed, and when" without
digging through commit history or diffing releases by hand.

## Key components

- **Grouped by version and date** — each version gets its own dated
  section, in reverse-chronological order, so the most recent changes
  are always at the top.
- **Categorized changes** — entries grouped under clear categories such
  as Added, Changed, Fixed, Deprecated, Removed, and Security, so a
  reader can scan for the kind of change they care about rather than
  reading a flat list.
- **Written for the consumer, not the codebase** — each entry describes
  the change in terms of what a user or integrator observes ("the
  export endpoint now returns paginated results"), not the internal
  mechanism that produced it.
- **Unreleased section** — a running "Unreleased" or "Upcoming" section
  at the top where entries land as changes merge, so the record exists
  before a release ships rather than being reconstructed at release
  time.
- **Links to relevant detail** — a reference to the issue, PR, or
  [[release-notes]] entry for a change, for a reader who wants the full
  story behind one line.

## How it differs from release notes

A changelog and release notes are often confused because they cover
the same underlying changes, but they serve different readers and
different moments:

- **Changelog** — the complete, cumulative history across every
  version the project has ever shipped. A reference document a reader
  consults to look something up.
- **[[release-notes]]** — the announcement for one specific release,
  aimed at someone deciding whether and how that release affects them.
  Narrower in scope, often more promotional or explanatory in tone, and
  not expected to be a complete historical record on its own.

Release notes for a given version are often drawn from that version's
changelog section, trimmed and reframed for an announcement — the
changelog stays the durable record either way.

## Common pitfalls

- **Entries copied straight from commit messages** — a commit message
  written for another developer mid-implementation ("fix null check in
  parseHeaders") doesn't tell a consumer what actually changed for
  them; it needs rewriting into consumer-facing language.
- **Internal or private changes included as if they matter externally**
  — refactors, internal test changes, or dependency bumps with no
  observable effect clutter the record and bury the changes a consumer
  actually needs to see.
- **Not updated until release time** — when entries are only written
  at release time, the record of what changed and when gets
  reconstructed from memory or a commit log after the fact, and details
  get lost or misattributed to the wrong version.
- **No categorization** — a flat list of unsorted entries forces every
  reader to read the whole section just to find, say, the breaking
  changes.
- **Vague entries** — "various bug fixes" or "improvements" tells a
  reader nothing they can act on; a good entry names the specific
  behavior that changed.
- **Missing dates or version numbers** — without them, a reader can't
  tell whether a fix they need already shipped or is still pending.

## Learn more

- [[release-notes]] for the per-release announcement drawn from a
  changelog's entries but aimed at a different moment and reader.
- [[readme-writing]] for the project overview that typically links out
  to the changelog rather than restating its history.
- [[api-documentation]] for the reference material a changelog entry
  often needs to update alongside the change itself.
- [[architecture-decision-record]] for recording the reasoning behind a
  significant change, as distinct from the changelog's brief record
  that it happened.
