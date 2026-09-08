---
name: data-governance
description: Use when asked to define or document data governance — the policies, ownership, and processes for how an organization manages its data as an asset (who owns a dataset, how it's classified, how long it's retained, who can request access) — as distinct from [[data-quality]], which is the measurable property those policies aim to protect, not the framework itself.
---

# Data Governance

Data governance is the set of policies, named ownership, and processes
an organization uses to manage its data as an asset: who's accountable
for a dataset, how sensitive it is, how long it's kept, and who can get
access to it. It's the framework; the accuracy and completeness of the
data it governs is [[data-quality]], a related but separate concern.

## Key components

- **Named data owner or steward** — a specific person or team
  accountable for a given dataset: its definition, its quality, who can
  access it, and what happens to it over time. Not a committee, and not
  "the data team" in the abstract.
- **Classification** — a scheme (e.g. public, internal, sensitive,
  restricted) applied to each dataset that drives who's allowed to
  access it and what controls apply, rather than access being decided
  ad hoc each time someone asks.
- **Retention and deletion policy** — how long a dataset is kept, and
  what happens to it after that period (archived, anonymized, deleted),
  set deliberately rather than "forever by default."
- **Access-request and approval process** — a defined path for someone
  who needs access to a dataset to request it, and for the owner or a
  designated approver to grant or deny it, rather than access spreading
  informally through shared credentials or copied exports.

## Why ownership needs a name, not just a policy

A written policy that says "sensitive data must be access-controlled"
accomplishes nothing on its own if no specific person is responsible
for applying it to a given dataset. An unowned dataset's classification
goes stale, its access list accumulates people who no longer need it,
and its quality issues have no one whose job it is to notice or fix
them — because when something goes wrong, there's no name to go to,
accountability just diffuses across "the org" and nothing happens.
Naming an owner per key dataset turns a governance policy from an
aspiration into something that's actually enforced day to day.

## Common pitfalls

- **Policies written but never enforced or checked** — a retention
  policy or classification scheme exists in a document, but nobody
  audits whether datasets actually comply with it, so it has no effect
  on real practice.
- **No single named owner for a dataset** — when a quality issue, an
  access dispute, or a retention question comes up, several people
  could plausibly answer for it and none of them actually do.
- **Classification applied once and never revisited** — a dataset
  classified "internal" at creation stays that way even after it starts
  including data that should be "restricted," because nothing triggers
  a re-review as its content or use changes.
- **Access granted informally and never revoked** — someone gets a
  one-time export or a standing credential for a project, the project
  ends, and the access just stays live indefinitely because there's no
  process that expires or reviews it.
- **Governance treated as a one-time compliance project** — a burst of
  policy-writing around an audit or a new regulation, followed by no
  ongoing process to keep ownership, classification, or retention
  current as the data and its uses evolve.
- **Governance disconnected from the people actually building
  pipelines** — policies are set by a governance team that never talks
  to the people running the [[data-pipeline]]s the policies are
  supposed to apply to, so the policies don't reflect how data actually
  moves.

## Learn more

- [[data-quality]] for the measurable accuracy and completeness
  properties that good governance is meant to protect but doesn't
  itself guarantee.
- [[data-pipeline]] for the automated processes that move data between
  the systems governance policy has to reach.
- [[freedom-of-information-request]] for a formal external
  access-request process governance sometimes has to interoperate with.
- [[machine-learning-model-card]] for documenting the provenance of
  training data, an area where governance and dataset lineage overlap.
