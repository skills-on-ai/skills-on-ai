---
name: data-pipeline
description: Use when asked to design, document, or troubleshoot a data pipeline — an automated sequence that extracts data from a source, transforms it, and loads it into a destination on a schedule or trigger — as distinct from [[data-quality]], which measures whether the data moving through the pipeline is actually accurate and complete, not how it's moved.
---

# Data Pipeline

A data pipeline is an automated sequence of steps that moves data from
one or more sources to a destination, transforming it along the way —
the classic shape is extract, transform, load (ETL), or its reordered
cousin extract, load, transform (ELT). Its job is to make data reliably
available where it's needed, in the shape it's needed, without a human
manually running the steps each time.

## Key components

- **Source(s)** — where the data originates: a production database, an
  API, a file drop, a stream of events. A pipeline can have several,
  merged or joined during transformation.
- **Destination** — where the transformed data lands: a data warehouse,
  a reporting table, another system's ingest endpoint.
- **Transformation logic** — the cleaning, reshaping, aggregating, or
  joining that turns raw source data into the destination's expected
  shape. This is usually where the most bugs live.
- **Schedule or trigger** — what causes a run: a cron schedule, a
  file-arrival event, an upstream pipeline finishing, a manual kickoff.
  Stated explicitly so it's obvious when a run *should* have happened
  but didn't.
- **Monitoring and alerting** — something that notices a run failed, ran
  long, or produced an unexpected volume of data, and tells a person,
  rather than the failure sitting silently until someone downstream
  complains.
- **Idempotency** — the property that running the pipeline again with
  the same input produces the same result, without duplicating or
  corrupting data already loaded.

## Why idempotency matters

A pipeline will eventually fail partway through a run — a network
blip, a timeout, a killed process. If rerunning it after that failure
is safe, recovery is simple: rerun it. If it isn't, recovery becomes a
forensic exercise: figuring out exactly which rows made it to the
destination before the failure, manually removing or correcting them,
and only then rerunning — every failure turns into a manual cleanup
project instead of a retry. Designing for idempotency up front (e.g.
upserts keyed on a stable ID, or a "delete this batch's partition, then
reload it" pattern) is far cheaper than retrofitting it after a bad
run has already duplicated data in a downstream report.

## Monitoring beyond "did it run"

A pipeline can finish with a green checkmark and still be wrong — it
processed zero rows because the source was empty, or the row count
dropped by 90% because an upstream schema changed. Alerting that only
checks "did the job exit successfully" misses these; pairing it with
basic volume and freshness checks (row counts within an expected
range, data no older than expected) catches problems a bare success
status won't. This overlaps with, but doesn't replace, the dedicated
checks covered in [[data-quality]].

## Common pitfalls

- **No alerting on failure** — a run breaks silently and nobody notices
  until someone downstream complains that a report is stale or missing
  data, by which point the gap may have persisted for days.
- **Not idempotent** — a retry after a partial failure re-inserts rows
  that already landed, duplicating data, or reapplies a transformation
  twice, corrupting values that depend on order.
- **Transformation logic that silently drops bad input** — a
  malformed record, an unexpected null, or a schema change gets
  quietly filtered out or coerced instead of failing the run loudly,
  so the destination looks fine but is missing data nobody's aware of.
- **No ownership of the pipeline once it's running** — it was built for
  a project, the project ended, and now it fails intermittently with no
  one who knows the transformation logic well enough to fix it.
- **Schedule and trigger not documented** — nobody can tell whether a
  missing run this morning means the pipeline failed or was never
  supposed to run at that time.
- **Reprocessing without a backfill plan** — fixing a transformation
  bug for future runs but never rerunning it against the historical
  data it already produced wrong, leaving old and new records
  inconsistent.

## Learn more

- [[data-quality]] for verifying the data a pipeline moves is actually
  accurate and complete, not just that the pipeline ran.
- [[data-governance]] for the ownership and access policies that
  determine who's accountable for a pipeline's source and destination
  datasets.
- [[mlops]] for the analogous versioning and monitoring discipline
  applied to pipelines that feed model training and inference.
- [[on-call-rotation]] for who actually gets paged when a pipeline's
  alerting fires.
