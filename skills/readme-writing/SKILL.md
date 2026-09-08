---
name: readme-writing
description: Use when asked to write or improve a project's README — the first, and often only, file a visitor reads to understand what a project is, whether it's relevant, and how to start using it — as distinct from [[api-documentation]], which documents a specific interface's operations in depth rather than orienting a newcomer to the whole project.
---

# README Writing

A README is the front door of a project: usually the first file a
visitor opens, and often the only one they read before deciding
whether the project is relevant to them. Its job is to answer, in
order, what this is, why it matters, and how to start using it —
quickly enough that a reader unfamiliar with the project doesn't have
to dig through source code or issue history to find out.

## Key components

- **What it is and why, up front** — the first few lines state what the
  project does and why someone would want it, before any badges, logos,
  or table of contents.
- **Install/setup instructions that actually work** — steps that take a
  reader from a genuinely clean environment (no assumed local state,
  no "you'll already have X configured") to a working install, in
  order, with exact commands.
- **A minimal usage example** — the smallest realistic example that
  shows the project doing something useful, so a reader can try it
  immediately rather than inferring usage from an API reference.
- **How to contribute or get help** — where to file issues, how to
  submit a change, and any expectations for contributors, or a pointer
  to a `CONTRIBUTING` file that covers this in more detail.
- **License and status** — the license under which the project is
  distributed, and its current state (actively maintained, stable,
  experimental, archived) so a reader can judge how much to rely on it.

## Why the first few lines matter disproportionately

Most readers decide whether to keep reading within seconds of opening
a README — they're scanning to answer "is this what I need" before
committing to anything else. If that answer isn't visible until after
a badge row, a logo, and a table of contents, most readers never reach
it. Front-loading the what-and-why means the reader who isn't a match
can bail out immediately (a good outcome — their time wasn't wasted),
and the reader who is a match keeps going with confidence rather than
guessing.

## Common pitfalls

- **Setup instructions that assume undocumented local state** — steps
  written from the author's already-configured machine, so a step like
  "run the build" silently depends on a tool, environment variable, or
  config file the README never mentions installing or creating.
- **A wall of badges and links before any explanation** — build status,
  license, package version, and social links stacked above the fold
  push the actual explanation of what the project does below the
  scroll, right where the reader was deciding whether to keep reading.
- **Describing aspirations instead of current state** — a README that
  documents the planned feature set or the API as it's meant to look
  once finished, rather than what the project actually does today,
  misleads a reader who tries the documented behavior and gets
  something else.
- **No minimal example** — forcing a reader to read the full API
  reference just to see the project do one simple thing.
- **Never revisited after the first commit** — a README written at
  project start drifts from reality as the project's setup, usage, and
  scope change, and nobody notices until a new contributor's first
  attempt at the install steps fails.
- **Contribution and support info missing entirely** — a reader who
  hits a bug or wants to help has no idea where to go, and either gives
  up or, worse, opens an issue in the wrong place.

## Learn more

- [[api-documentation]] for documenting a specific interface's
  operations in depth, once the README has already oriented a reader
  to the project as a whole.
- [[changelog]] for the cumulative history of changes a README can
  point to rather than restate.
- [[release-notes]] for the per-release announcement a README's
  "latest version" or "what's new" section often links out to.
- [[brand-style-guide]] for keeping a project's voice and visual
  identity (logos, badges, tone) consistent across the README and
  other public-facing material.
