---
name: release-notes
description: Use when asked to write release notes — the announcement accompanying one specific release, aimed at users deciding whether and how it affects them — as distinct from a [[changelog]], which is the complete, cumulative running history across every version rather than one release's announcement.
---

# Release Notes

Release notes are the announcement that accompanies one specific
release: what's new, what changed, and what a user needs to do about
it. Unlike a changelog, they're written for a single moment — the
release going out — and aimed at helping the reader decide whether and
how to act, not to serve as the complete historical record.

## Key components

- **What's new and why it matters** — the notable additions and
  changes in this release, explained in terms of the benefit or effect
  for the user, not just what was implemented.
- **Breaking changes, called out separately** — anything that changes
  existing behavior in a way that can break an integration, in its own
  clearly labeled section, not interleaved with routine fixes.
- **Upgrade or migration instructions** — concrete steps for moving
  from the previous version to this one, whenever a change (especially
  a breaking one) requires the user to do something beyond a normal
  version bump.
- **Fixes and minor changes** — routine bug fixes and small
  improvements, listed but not competing for attention with the
  headline changes or breaking changes above them.
- **Version and date** — which version this is and when it shipped, so
  readers can place it relative to other releases and the [[changelog]].

## Why breaking changes need their own unmissable section

A breaking change has a cost the reader must plan for — code to
update, a config to change, a dependency to bump — and that cost is
easy to miss if it's phrased like just another bullet point among
routine fixes. A reader skimming release notes to decide "can I upgrade
today" needs breaking changes to be the first thing they see, set apart
visually and in wording, so the decision to upgrade (and the work it
requires) is made deliberately rather than discovered later when
something breaks in production.

## Common pitfalls

- **Breaking changes buried in a long list of minor fixes** — a
  behavior-changing update mixed in alongside a dozen routine patches
  reads as equally minor, and gets missed by exactly the readers who
  needed to act on it before upgrading.
- **Notes written for the release plan, not the actual shipped code** —
  drafted from the release ticket or original scope before the release
  was cut, and never reconciled against what actually shipped, so they
  describe a feature that got cut or omit one that got added late.
- **No migration guidance for a breaking change that clearly needs one**
  — naming that something changed without saying what the reader
  should do about it forces them to reverse-engineer the fix
  themselves.
- **Overly promotional tone that obscures the substance** — marketing
  language ("massively improved!") standing in for a concrete
  description of what actually changed leaves a technical reader
  unable to tell what to expect.
- **Notes that don't match the changelog** — release notes and the
  underlying [[changelog]] entries for the same version drifting apart
  because one was updated and the other wasn't.
- **No version or date** — makes it hard for a reader to tell which
  release these notes describe, especially once several releases have
  shipped since.

## Learn more

- [[changelog]] for the complete, cumulative running history across
  every version that release notes are drawn from but don't replace.
- [[readme-writing]] for the project overview that often links to the
  latest release notes rather than restating them.
- [[api-documentation]] for the reference material that needs updating
  alongside any breaking change announced in release notes.
- [[press-release]] for the external, publicity-facing announcement a
  major release sometimes also warrants, distinct from release notes
  aimed at existing technical users.
