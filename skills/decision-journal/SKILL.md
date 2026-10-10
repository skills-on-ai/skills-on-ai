---
name: decision-journal
description: Use when asked to record an important decision at the moment it is made — the situation, options, reasoning, expectations with probabilities, and mental state — and to review it later so the quality of the decision can be judged separately from its outcome and judgment can improve over time; distinct from [[architecture-decision-record]] and [[decision-records]] (shared, formal records of choices for an organization), general [[journaling]], and a [[postmortem]] (analysis of a failure after it happened).
---

# Decision journal

A decision journal captures what you knew, what you expected, and why
you chose, *before* the outcome is known. Without it, hindsight bias
rewrites memory: good outcomes make the decision look wise, bad ones
make it look foolish, and nobody learns to tell luck from skill.
The journal separates **decision quality** from **outcome quality**,
builds calibration by comparing predictions to results, and exposes
repeated errors such as overconfidence, rushing, or deciding when
tired.

## Input required

- **The decision** made or about to be made, and the date.
- **The options** considered and the one chosen.
- **The reasoning and information** available at the time.
- **Expectations** — what the person thinks will happen, with
  probabilities.
- **For a review:** the earlier entry and what actually happened.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. What did you decide, and what were the other options?
2. What are the key facts and assumptions behind it?
3. What do you expect to happen, and how confident are you (as a
   percentage)?
4. How do you feel (rushed, tired, excited, anxious), and who
   influenced you?
5. When should this be reviewed, and what result would show you were
   wrong?

## Method: recording an entry

Write the entry at decision time, in plain language, with these fields:

1. **Date and decision** — one sentence.
2. **Context** — the situation and why it needs deciding now.
3. **Options considered** — including "do nothing" and why each was
   rejected.
4. **Reasoning** — the main argument for the choice and the strongest
   argument against.
5. **Key assumptions** — facts you are relying on and have not
   verified.
6. **Prediction** — specific, checkable outcomes at a stated date,
   with probabilities. "The launch will reach 500 signups in 30 days
   (60%)" rather than "it'll go well".
7. **Confidence** — overall, as a number.
8. **State of mind** — mood, fatigue, time pressure, pressure from
   others.
9. **Review date and trigger** — when to check, and what signals
   would show the assumptions failed (see [[tripwire]]).

## Method: reviewing an entry

1. **Read the original entry first**, before looking at results.
2. **Record what happened**, compared with each prediction.
3. **Judge the process separately from the outcome** using a 2×2:
   - *Good process, good outcome* — earned.
   - *Good process, bad outcome* — bad luck; do not overlearn.
   - *Poor process, good outcome* — dumb luck; fix the process.
   - *Poor process, bad outcome* — deserved; identify the flaw.
4. **Check calibration.** Over many entries, do things you called 70%
   happen about 70% of the time?
5. **Name the lesson** as one concrete change to future decisions
   (for example "ask for base rates before estimating", "don't
   decide on Friday evenings").
6. **Look across entries** for patterns every few months.

## Output format

An entry:

> **Date:** 2026-10-10 **Decision:** Hire a contractor instead of a
> full-timer.
> **Options:** full-time hire; contractor; delay hiring.
> **Why:** need capacity in 6 weeks; budget uncertain.
> **Against:** contractor knowledge leaves with them.
> **Assumptions:** workload stays high through Q1.
> **Prediction:** Backlog under 20 items by Dec 1 (65%).
> **Confidence:** 65%. **State:** rushed, end of quarter.
> **Review:** Dec 1; if backlog is over 35, revisit.

A review adds: *Outcome, process rating, calibration note, lesson.*

## Ground rules

- **Record before the result is known.** Edit nothing afterward except
  in a clearly dated review section.
- **Be specific enough to be wrong.** A vague prediction cannot be
  scored.
- **Keep it short.** Five minutes; a journal that is too heavy does not
  get kept.
- **Private by default.** Honesty requires that it not be used as a
  performance record.
- **Reserve it for decisions that matter**, not every choice.

## Self-check before answering

- Does the entry contain a checkable prediction with a probability and
  a date?
- Is the strongest counterargument recorded?
- In a review, was the original read before the outcome?
- Is the lesson one concrete change, not a platitude?

## Common pitfalls

- **Hindsight edits** — rewriting the entry after seeing results.
- **Results-only thinking** — judging the decision by the outcome.
- **Vague predictions** — nothing to check later.
- **Never reviewing** — an unread journal teaches nothing.
- **Over-learning from one case** — a single bad outcome from good
  process is not a lesson.
- **Recording only the big ones** — calibration needs enough entries.

## Example prompt

> I've just decided to raise our prices by 15%. Help me write a
> decision journal entry with a specific prediction and probability,
> the best argument against, and a review date, so I can judge this
> fairly in three months.

## Learn more

- [[architecture-decision-record]] and [[decision-records]] for
  shared records of decisions across a team.
- [[expected-value-analysis]] for producing the probabilities to
  record.
- [[two-way-door-decisions]] for choosing which decisions deserve an
  entry.
- [[tripwire]] for turning "what would show I was wrong" into a
  measurable signal.
- [[journaling]] for general reflective writing.
