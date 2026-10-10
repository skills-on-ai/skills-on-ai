---
name: two-way-door-decisions
description: Use when asked to decide how much deliberation, evidence, and approval a decision deserves by classifying it as reversible (a two-way door, decide fast and adjust) or hard to reverse (a one-way door, slow down and verify), and to find ways to turn one-way doors into two-way ones — as distinct from a [[weighted-decision-matrix]] (choosing among options), a [[premortem]] (stress-testing a chosen plan), and [[architecture-decision-record]] (documenting a decision made).
---

# Two-way-door decisions

Jeff Bezos framed decisions as doors. A *two-way door* can be walked
back through if it turns out wrong: the cost of a mistake is small and
bounded. A *one-way door* is hard or impossible to undo. Most
decisions are two-way doors, yet organizations often treat them all as
one-way: slow, committee-driven, and risk-averse. The skill is to
sort decisions correctly, move fast on the reversible ones, and spend
scrutiny only where it buys something.

## Input required

- **The decision** and who owns it.
- **What happens if it is wrong** — cost, time, people affected.
- **How long it takes to reverse** and what reversing would cost.
- **The deadline**, and what delay itself costs.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. If this turns out wrong, what would undoing it take: days, months,
   never?
2. Who or what is affected that cannot easily be restored (customers,
   data, reputation, a person's career, a contract term)?
3. What does waiting cost per week?
4. Who has to approve this today, and is that proportionate?
5. Could a smaller or time-boxed version be tried first?

## Method

1. **Describe the exit.** Say exactly how you would reverse the
   decision, what it would cost, and how long it would take.
2. **Score reversibility** on three dimensions:
   - *Cost to reverse* — money, effort, goodwill.
   - *Time to reverse* — hours to years.
   - *Blast radius* — how many people or systems are touched before
     you can reverse.
3. **Classify.**
   - **Two-way door** — reversal is cheap, quick, and contained. Decide
     now with roughly 70% of the information you wish you had; the
     owner decides; document in a line.
   - **Mostly two-way** — reversal costs something real. Time-box a
     trial and define the success and abort criteria first.
   - **One-way door** — reversal is costly, slow, or impossible.
     Gather evidence, consult widely, run a [[premortem]], and
     decide deliberately.
4. **Look for a way to convert one-way into two-way.** Pilot with a
   subset; use a feature flag; sign a shorter term or a break clause;
   rent before buying; run in parallel; stage the commitment;
   keep the old path alive for a period.
5. **Match process to door.** Give the cheap, reversible decisions to
   individuals, and reserve committees and sign-off for the rare
   one-way door.
6. **Set a review point** for any two-way door taken, so reversal
   actually happens when the data says so.

## Output format

| Decision | Cost to reverse | Time to reverse | Blast radius | Door | Process |
|---|---|---|---|---|---|
| Change pricing page copy | Low | Hours | Visitors | Two-way | Owner decides today |
| Sign a 3-year vendor contract | High | Years | Whole team | One-way | Evidence + premortem + sign-off |

Follow with:

- **Verdict** — which door, in one sentence, with the reason.
- **Conversion options** — ways to make it more reversible.
- **Abort criteria** — the observable condition that triggers going
  back (see [[tripwire]]).
- **Review date.**

## Ground rules

- **Judge the door, not the feeling.** Anxiety is not irreversibility.
- **Reversibility includes people.** Layoffs, public statements, and
  broken trust do not easily reverse.
- **Reversible is not free.** Frequent flip-flopping has its own
  costs; set review points rather than reversing on whim.
- **Say when you don't know.** If reversibility is unclear, treat it
  as one-way until you learn otherwise.

## Self-check before answering

- Is there an explicit description of how to reverse, with cost and
  time?
- Were conversion options considered before accepting a one-way door?
- Does the recommended process match the door?
- Is there a review point or abort criterion?

## Common pitfalls

- **Treating everything as one-way** — slow decisions, risk-averse
  culture.
- **Treating one-way doors as two-way** — "we'll just change it later"
  on a contract, a public launch, or a data migration.
- **Ignoring hidden lock-in** — dependencies, training, and sunk cost
  make a "reversible" choice sticky.
- **No abort criteria** — a two-way door you never walk back through.
- **Decision by committee for small things** — consensus costs more
  than the mistake it prevents.

## Example prompt

> We're deciding whether to migrate our database to a new vendor next
> quarter. Is this a one-way or two-way door? How could we make it more
> reversible, and how much process does it deserve?

## Learn more

- [[weighted-decision-matrix]] for choosing among options once the
  door is classified.
- [[premortem]] and [[tripwire]] for guarding the one-way doors.
- [[regret-minimization]] for the personal-scale version.
- [[architecture-decision-record]] for documenting technical choices.
- [[decision-journal]] for reviewing quick decisions later.
