---
name: government-open-data-publication
description: Use when asked to plan or review a government open data publication — a government body proactively publishing datasets for public and reuse, on an ongoing basis and with no request required — distinct from [[freedom-of-information-request]], which is a reactive response to one individual's specific request rather than proactive, ongoing publication.
---

# Government Open Data Publication

Open data publication is a government body proactively releasing
datasets for the public to view and reuse, without anyone having to
request them. It exists because governments hold large amounts of data
— spending records, permits, transit schedules, public health
statistics — that has value to researchers, businesses, journalists,
and citizens when it's published in a form they can actually work
with, not just when someone happens to ask for it.

## Key components

- **A genuinely reusable, machine-readable format** — data published as
  CSV, JSON, or through an API that software can parse directly, rather
  than something like a scanned PDF that technically discloses the data
  while blocking any actual reuse of it.
- **Clear, accurate metadata** — what the dataset actually contains, its
  source, its collection methodology, and how current it is, described
  well enough that someone unfamiliar with the source agency can use it
  correctly.
- **A defined update cadence** — a stated schedule for how often the
  dataset is refreshed, and a visible "last updated" marker or a way
  for the public to detect when it changes, rather than a dataset
  published once and left static while the underlying reality keeps
  changing.
- **A stable, discoverable location** — a consistent URL or catalog
  entry so users and their tools can find and re-fetch the dataset
  reliably, rather than a link that moves or disappears between
  updates.
- **An open license terms statement** — explicit terms for reuse, so
  someone downloading the data knows what they're actually permitted to
  do with it.

## Why metadata and format matter as much as the underlying data itself

A dataset with no clear metadata about what it actually measures, how
it was collected, or how current it is can be misused or simply never
found or trusted enough to use — largely defeating the point of
publishing it proactively in the first place. The same is true of
format: a dataset that's technically public but locked in a scanned
image or a format no common tool can parse imposes exactly the
friction that open data is meant to remove. Publishing the numbers is
necessary but not sufficient; a reader also needs to know what the
numbers mean and be able to actually load them into a tool.

## Common pitfalls

- **Data "published" only as a scanned or locked-format document** — it
  technically satisfies a transparency requirement while blocking any
  programmatic reuse, defeating the purpose of open data publication.
- **Published once and never updated** — a dataset that reflects a
  single point in time, with no visible "last updated" marker or
  refresh commitment, even though the underlying data keeps changing,
  misleads anyone who assumes it's current.
- **Missing or inaccurate metadata** — a technically accessible dataset
  with no clear description of what it measures, its source, or its
  currency is practically undiscoverable or unusable even when the raw
  data itself is fine.
- **No stable location or identifier** — a dataset that moves or is
  replaced without redirection breaks every tool and workflow built
  against the old location.
- **Ambiguous or missing license terms** — a dataset published with no
  clear statement of reuse rights leaves potential users unsure whether
  they're actually allowed to build on it.

## Learn more

- [[freedom-of-information-request]] for the reactive counterpart to
  this proactive publication — an individual's specific request for
  records rather than ongoing, no-request-required disclosure.
- [[data-governance]] for the broader discipline of data quality and
  lifecycle management that a reliable open data program depends on.
- [[government-public-records-management]] for how the underlying
  records are classified and retained before any of them are
  candidates for open publication.
- [[government-performance-report]] for one common consumer of open
  data — publishing the metrics behind a performance report in reusable
  form.
