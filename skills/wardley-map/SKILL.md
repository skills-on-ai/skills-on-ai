---
name: wardley-map
description: Use when asked to build a Wardley map — a strategy map plotting a value chain's components against their evolution from genesis through custom-built and product to commodity — as distinct from a business-model-canvas (see below), which is a static snapshot rather than a map of how components change position over time.
---

# Wardley Map

A Wardley map is a strategy map that plots the components of a value
chain against how evolved each one is — from genesis (novel, uncertain)
through custom-built and product, to commodity (standardized, widely
available). It's a tool for reasoning about where to invest, build, or
buy, based on where each component actually sits on that path.

## The two axes

- **Value chain position (vertical axis)** — how visible a component is
  to the user the map is anchored on. Components the user directly sees
  or interacts with sit near the top; components further from the user
  (infrastructure, underlying dependencies) sit lower, with arrows
  showing what depends on what.
- **Evolution (horizontal axis)** — how mature and standardized a
  component is, moving left to right through four stages: **genesis**
  (novel, poorly understood, still being invented), **custom-built**
  (built bespoke by whoever needs it, but the concept is understood),
  **product** (available off the shelf, differentiated by vendor), and
  **commodity** (standardized, widely available, often a utility).

Every component on the map gets a position on both axes: how far from
the user it sits, and how evolved it currently is.

## Why it's used for strategic decisions

Once components are plotted, their position suggests what to actually
do with each one: a genesis-stage component close to the user is likely
worth building in-house and investing in, since it's a source of
differentiation; a commodity component far from the user is usually
better bought or outsourced, since building it yourself wastes effort
on something that provides no advantage. The map also supports
anticipating movement — a component currently custom-built is likely to
commoditize over time, so planning for that shift (rather than being
surprised by a competitor's cheaper off-the-shelf alternative) is part
of what the map is for.

## Wardley map vs. business model canvas

- **[[business-model-canvas]]** — a static snapshot of a business
  model's key building blocks (value proposition, channels, revenue
  streams) at one point in time.
- **Wardley map** — traces how individual components of a value chain
  change position over time as they evolve, specifically to support
  build-vs-buy and investment decisions.

The canvas answers "what is this business, right now"; the map answers
"where is each piece of this business heading, and what should we do
about it."

## Common pitfalls

- **No clear anchor user or need at the top** — a map with components
  plotted but no defined user or need they ultimately serve has nothing
  to measure "visibility to the user" against, so the vertical axis
  becomes arbitrary.
- **Treated as a one-time snapshot** — a component's evolution stage
  isn't fixed; a map drawn once and never revisited misses components
  that have since commoditized, undermining the decisions built on it.
- **Used to justify a decision already made** — building the map to
  retroactively support a build-vs-buy call that was made for other
  reasons defeats its purpose as an analysis tool, and tends to produce
  a map with components conveniently placed to match the desired
  conclusion.
- **Guessing evolution stage instead of checking it** — placing a
  component by intuition rather than by evidence (how many vendors offer
  it, how standardized it actually is) produces a map that looks
  authoritative but isn't grounded in anything checkable.

## Learn more

- [[business-model-canvas]] for the static snapshot of a business model
  this map's dynamic, component-level view complements.
- [[value-stream-map]] for a related but different mapping exercise
  focused on process flow and waste rather than strategic positioning.
- [[roi-analysis]] for evaluating the return on a build-vs-buy decision
  a Wardley map points toward.
- [[vendor-management]] for managing the actual suppliers behind a
  "buy" decision the map suggests.
