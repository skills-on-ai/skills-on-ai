---
name: api-documentation
description: Use when asked to write or improve API documentation — reference docs for a REST, GraphQL, or SDK interface covering authentication, endpoints or methods, parameters, return values, and error codes — as distinct from [[readme-writing]], which orients a newcomer to a whole project rather than documenting one interface in depth.
---

# API Documentation

API documentation is reference material describing how to use a
software interface: what operations exist, how to authenticate, what
inputs each operation takes, what it returns, and how it fails. Its
job is to let a developer who has never seen the API integrate with it
correctly without reading the implementation source.

## Key components

- **Overview / getting started** — what the API does, the base URL or
  package name, and the smallest possible working example, so a reader
  can make one successful call before learning everything else.
- **Authentication** — exactly how to obtain and present credentials
  (API key header, OAuth flow, signed request), including what happens
  on missing or invalid credentials.
- **Endpoints or methods** — each operation's name, HTTP verb and path
  (or method signature), every parameter with its type and whether
  it's required, and the shape of the return value.
- **Request/response examples** — real, complete examples for each
  operation: an actual request (with realistic values) paired with the
  actual response it produces, not a schema alone.
- **Error codes** — every error or status code the API can return, what
  condition triggers it, and what the caller should do about it.
- **Versioning and change references** — which API version the docs
  describe, and a pointer to the [[changelog]] or [[release-notes]] for
  what changed between versions.

## Why runnable examples beat prose alone

A paragraph describing what a parameter "should" do leaves the reader
to guess at edge cases; a real request and the real response it
produces removes the guesswork. Runnable examples also double as a
correctness check on the documentation itself — an example that's
actually been executed against the API can't silently drift into
describing behavior the API no longer has. Prose is still useful for
explaining *why* an endpoint exists or how operations relate to each
other, but for *how* to call something, a working example is the more
reliable teacher.

## Common pitfalls

- **Documenting the API as designed, not as it behaves** — written from
  the spec or the original ticket instead of the running system, so it
  describes intended behavior that the implementation quietly diverged
  from.
- **Missing error-case documentation** — only the happy path is
  described, so callers discover failure modes, rate limits, and edge
  cases by hitting them in production instead of reading about them
  first.
- **Examples that don't actually run** — a request/response pair typed
  by hand and never executed against the real API, which drifts wrong
  the moment a field is renamed or a default changes.
- **No indication of required vs. optional parameters** — forces every
  caller to trial-and-error which fields actually matter.
- **Undocumented limits** — pagination behavior, rate limits, payload
  size caps, and timeout values left out until a caller hits them and
  has to reverse-engineer the constraint.
- **Docs updated separately from code, and lagging it** — a breaking
  parameter change ships in the API before the docs catch up, so the
  documented example itself starts failing.

## Learn more

- [[readme-writing]] for orienting a newcomer to the project as a
  whole, as opposed to documenting one interface's operations in
  depth.
- [[changelog]] for the cumulative record of what changed across API
  versions that documentation should stay in sync with.
- [[release-notes]] for the announcement of what changed in one
  specific API version, including breaking changes callers must react
  to.
- [[architecture-decision-record]] for recording *why* an API was
  designed a particular way, as distinct from documenting how to call
  it.
