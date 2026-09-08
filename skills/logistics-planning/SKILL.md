---
name: logistics-planning
description: Use when asked to plan how goods physically move from origin to destination — transportation mode, routing, timing, handoffs — as distinct from the broader [[supply-chain-risk-assessment]], which identifies what could go wrong across the whole chain rather than laying out the concrete plan for moving goods.
---

# Logistics Planning

Logistics planning is the practice of planning how goods physically
move from origin to destination: which transportation mode to use, what
route to take, when each leg needs to happen, and who's responsible at
each point the goods change hands. It's the concrete, executable plan
that gets a shipment from a supplier's dock to a customer's door.

## Key components

- **Mode selection tradeoffs** — air, ocean, rail, and truck each trade
  cost against speed and reliability differently; the right choice
  depends on the shipment's value, urgency, and how much delay the
  downstream plan can absorb.
- **Routing and consolidation** — the specific path goods take, and
  opportunities to combine smaller shipments into fuller loads to cut
  cost and simplify tracking, without adding so many stops that transit
  time balloons.
- **Lead time buffers** — extra time built into the schedule beyond the
  carrier's quoted best-case transit time, sized against how often
  delays actually happen on that route, not against the rare case
  everything goes perfectly.
- **A clear point of accountability at each handoff** — every point
  where goods change custody (supplier to carrier, carrier to
  warehouse, warehouse to last-mile) has one named owner responsible
  for confirming the handoff happened and flagging it if it didn't.

## How this fits with demand and risk

Logistics planning turns a [[demand-forecasting]] projection and an
[[inventory-management]] reorder decision into an actual movement plan.
It's distinct from [[supply-chain-risk-assessment]]: risk assessment
identifies what could go wrong across suppliers, routes, and regions;
logistics planning is the operational plan for the specific movement
that's actually happening, informed by but not the same exercise as
that risk map.

## Common pitfalls

- **Lead times planned around best-case transit time** — a route that
  quotes 5 days but routinely runs 7-8 once customs, port congestion,
  or weather are accounted for still gets scheduled at 5, so routine
  disruptions read as emergencies instead of expected variance.
- **Handoff points with no clear owner** — when no one is explicitly
  responsible for confirming a shipment left one leg and started the
  next, a delay at a handoff goes unnoticed until someone downstream
  asks where the shipment is.
- **A single carrier or route with no fallback** — relying on one
  carrier or one route means any disruption to that carrier or route
  stops the shipment entirely, with no pre-arranged alternative to fall
  back on.
- **Consolidation pursued past the point it helps** — combining
  shipments to save cost but adding enough extra stops or wait time for
  a full load that the total transit time defeats the purpose of the
  original schedule.
- **Mode chosen on cost alone** — picking the cheapest mode without
  weighing the cost of the resulting delay against what's actually
  waiting on the other end (a stockout, a missed production run).

## Learn more

- [[supply-chain-risk-assessment]] for identifying the broader risks
  (supplier concentration, route disruption, geopolitical exposure) a
  logistics plan should account for.
- [[demand-forecasting]] for the projection that determines what needs
  to move and by when.
- [[inventory-management]] for the reorder decisions that trigger a
  shipment in the first place.
- [[capacity-planning]] for making sure warehouse or staffing capacity
  is ready to receive what the logistics plan delivers.
