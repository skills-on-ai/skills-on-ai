---
name: inventory-management
description: Use when asked to set up or improve inventory control — reorder points, safety stock, ABC classification, cycle counts — as distinct from [[demand-forecasting]] (the demand projection that feeds inventory decisions) and [[logistics-planning]] (how goods physically move once they're in the supply chain).
---

# Inventory Management

Inventory management is the practice of tracking and controlling stock
levels so a business has enough of what it needs without tying up
excess capital in unsold inventory. It sits between demand and supply:
it decides when to reorder, how much buffer to hold, and which items
deserve the closest attention.

## The core tension

Every inventory decision balances the same two risks. Too little stock
risks stockouts — lost sales, expedited freight to recover, and
customers who go elsewhere. Too much stock ties up cash that could be
used elsewhere, and for perishable or fast-obsolescing goods it risks
writing the excess off entirely. Inventory management is the ongoing
discipline of finding the acceptable point between the two, not a
one-time calculation.

## Key components

- **Reorder point** — the stock level at which a new order is triggered,
  set so the order arrives before the shelf runs out, given lead time
  and expected demand during that lead time.
- **Safety stock** — a buffer held above the reorder point's baseline
  math to absorb demand spikes or supplier delays that the average-case
  calculation doesn't cover.
- **Inventory turnover** — the key efficiency metric: how many times
  inventory is sold and replaced over a period. Low turnover signals
  cash tied up in slow-moving stock; unsustainably high turnover
  signals a stockout risk from cutting buffers too thin.
- **ABC classification** — sorting items by value and volume (A items:
  high value or high volume, tight control; C items: low value, low
  volume, loose control) so scrutiny is proportional to what an item
  actually costs the business if it's mismanaged, rather than uniform
  across the whole catalog.
- **Cycle counting** — periodic physical counts of subsets of inventory,
  run frequently enough that the system's recorded quantities stay
  close to what's actually on the shelf.

## Where the numbers come from

Reorder points and safety stock are only as good as the demand input
behind them — see [[demand-forecasting]] for how that projection is
built and kept accurate. Inventory management also depends on
[[logistics-planning]] for realistic lead times: a reorder point set
against an optimistic best-case transit time will trigger too late once
real-world delays show up.

## Common pitfalls

- **Reorder points set once and forgotten** — calculated at launch or
  during a one-time review, then never revisited as actual demand
  shifts; a point that was correct a year ago silently becomes wrong as
  the item's sales pattern changes.
- **Uniform scrutiny across all items** — managing a low-value,
  low-volume item with the same review cadence and safety stock rigor
  as a top-selling item wastes attention on the former and often
  under-protects the latter; ABC classification exists precisely to
  avoid this.
- **Infrequent counts letting records drift from reality** — when
  physical counts happen rarely, the system's on-hand quantity quietly
  diverges from what's actually on the shelf, and the divergence
  usually surfaces as an unexpected stockout or a surprise write-off.
- **Safety stock treated as a fixed number** — set once for a given
  service level and never adjusted as lead time variability or demand
  volatility changes.
- **Turnover tracked in aggregate only** — a healthy overall turnover
  number can hide slow-moving dead stock in some categories offset by
  fast-moving items in others.

## Learn more

- [[demand-forecasting]] for the demand projection that reorder points
  and safety stock are calculated against.
- [[logistics-planning]] for the lead times and transit reliability
  that inventory buffers need to account for.
- [[supply-chain-risk-assessment]] for identifying the supplier or
  route risks that would force a reorder point or safety stock level to
  change.
- [[enterprise-resource-planning]] for the system of record that
  typically tracks inventory levels, reorder points, and counts.
