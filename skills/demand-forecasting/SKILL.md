---
name: demand-forecasting
description: Use when asked to project future customer demand for operational planning — how much to produce, stock, or staff for — as distinct from [[demand-analysis]] (market-sizing and opportunity assessment for a business decision) which this is not; demand forecasting is the ongoing operational forecast that drives inventory and capacity decisions.
---

# Demand Forecasting

Demand forecasting is the practice of projecting future customer demand
so an organization knows how much to produce, stock, or staff for. It's
an operational, recurring exercise — feeding [[inventory-management]]
reorder decisions and [[capacity-planning]] staffing and infrastructure
decisions — not a one-time strategic estimate of market opportunity.

## Demand forecasting vs. demand analysis

These sound similar but answer different questions:

- **Demand forecasting** — how much will actual customers order in the
  next day, week, or quarter, given the historical pattern this
  specific product or service already shows. Feeds day-to-day and
  season-to-season operational decisions.
- **Demand analysis** — whether a market opportunity exists at all, and
  how big it might be, to support a business decision like entering a
  new market or launching a new product. See [[demand-analysis]].

A new-product launch typically starts with demand analysis to decide
whether to proceed, then switches to demand forecasting once the
product has real sales history to project from.

## Key components

- **Historical demand as the baseline** — actual past sales or usage,
  the starting point every forecast method builds from.
- **Seasonality and trend adjustments** — recurring calendar patterns
  (holiday spikes, weekday/weekend cycles) and longer directional
  movement (growth, decline) layered onto the baseline rather than
  assuming next period looks like last period.
- **A forecast accuracy metric** — a measure like mean absolute
  percentage error, tracked against what actually happened, so accuracy
  is known rather than assumed.
- **Method fit for volatility** — stable, established demand can use
  statistical time-series methods; volatile or new-product demand with
  little history needs judgment-based or analog methods (comparison to
  a similar past launch, market signals) instead.

## Why accuracy has to be tracked, not assumed

A forecast is a prediction, not a fact, and predictions are wrong by
varying amounts depending on the item, the season, and how far out the
projection reaches. Tracking forecast accuracy against actuals after
the fact is what turns "we have a forecast" into "we know how much to
trust this forecast" — and it's what surfaces a forecasting method that
has quietly stopped working before it causes a stockout or a capacity
shortfall downstream.

## Common pitfalls

- **A single point forecast with no error range** — presenting "12,000
  units" with no confidence interval invites downstream planners to
  treat it as certain, when the honest answer is closer to "12,000,
  give or take 2,000." Safety stock and capacity buffers should be sized
  against the range, not the point estimate.
- **Seasonality ignored** — applying a flat projection to every period
  regardless of known seasonal patterns produces a forecast that's
  reliably wrong in the same predictable direction every cycle.
- **Never checked against actuals** — a forecast method that isn't
  compared to what actually happened can silently degrade in accuracy
  for months before anyone notices, usually only after a stockout or
  overstock makes the gap impossible to ignore.
- **One method applied to everything** — using the same time-series
  approach for a stable, mature product and a brand-new product with no
  sales history produces a confidently wrong number for the latter.
- **Forecast owned by no one** — without a named owner responsible for
  maintaining and re-running the forecast, it goes stale the first time
  the underlying demand pattern shifts.

## Learn more

- [[demand-analysis]] for the earlier, market-sizing question of
  whether an opportunity exists at all, rather than how much of it to
  plan operations around.
- [[inventory-management]] for how the forecast's output sets reorder
  points and safety stock.
- [[capacity-planning]] for how the same forecast drives staffing and
  infrastructure decisions.
- [[logistics-planning]] for turning a demand forecast into an actual
  plan for moving the resulting goods.
