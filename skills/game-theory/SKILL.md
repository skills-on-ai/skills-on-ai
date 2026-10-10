---
name: game-theory
description: Use when asked to analyze a decision whose outcome depends on what other rational parties will choose — identify the players, their options, payoffs, and information, then find dominant strategies, equilibria, and ways to change the game (commitments, repetition, side payments) — as distinct from [[expected-value-analysis]] (one decision-maker against uncertain nature), a [[decision-tree]] (no strategic opponent), and [[second-order-thinking]] (general downstream consequences without formal payoffs).
---

# Game theory

Game theory analyzes strategic situations: decisions where your best
move depends on what others do, and theirs on what you do. Pricing
against a competitor, negotiating a contract, deciding whether to
cooperate with a partner, designing an auction, or setting incentives
for a team are all games. The method is to describe the game
precisely, predict stable outcomes, and then look for moves that change
the game itself, which is often worth more than playing it better.

## Input required

- **The players** — who makes decisions, and what each wants.
- **The options** each player has, and the order of moves.
- **The payoffs** — what each outcome is worth to each player, even
  roughly (ranks are enough).
- **Information** — what each player knows about the others' options,
  payoffs, and past moves.
- **Repetition** — whether this is one-off or an ongoing relationship.

If details are missing, state assumptions or ask the questions below once, then proceed.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered, then proceed:

1. Who are the other decision-makers, and what do they want?
2. What can each side do, and who moves first?
3. How does each outcome rank for you and for them?
4. Will you deal with these parties again, and can reputations carry
   over?
5. Can anything be committed to, communicated, or changed (contracts,
   deadlines, side deals) before the choice is made?

## Method

1. **Define the game.** List players, actions, timing (simultaneous or
   sequential), information, and payoffs.
2. **Build the payoff table** (normal form) for simultaneous moves, or
   a game tree (extensive form) for sequential ones.
3. **Eliminate dominated strategies.** If an option is worse than
   another whatever the opponent does, drop it. Repeat.
4. **Find equilibria.** A *Nash equilibrium* is a set of choices where no
   player gains by changing alone. Check whether it is unique, and
   whether it is good for everyone (a Prisoner's Dilemma equilibrium
   is stable but collectively bad).
5. **For sequential games, solve backward.** Start from the last move,
   assume the player picks their best, and work back to the first
   decision. Discard threats that would not be rational to carry out.
6. **Account for repetition.** Repeated games can sustain cooperation
   through reciprocity (tit-for-tat), reputation, and the "shadow of
   the future". A known final round unravels it.
7. **Account for information.** With hidden information, consider
   signaling (costly actions that credibly reveal type), screening
   (offers that sort types), and bluffing (mixed strategies).
8. **Look for ways to change the game.** Add or remove players,
   commitments, binding agreements, side payments, linked issues,
   changed payoffs, more transparency, or different timing.
9. **Test robustness.** Rerun with different payoff assumptions for
   the other side; if the answer flips, note which assumption is
   critical.

## Output format

- **The game** — players, moves, information, in a few lines.
- **Payoff table or tree** (yours first in each cell):

| You \ Them | Cooperate | Defect |
|---|---|---|
| Cooperate | 3, 3 | 0, 5 |
| Defect | 5, 0 | 1, 1 |

- **Analysis** — dominant strategies, equilibrium, and whether it is
  efficient.
- **Recommendation** — your move, with the reasoning.
- **Ways to change the game** — two or three options.
- **Key assumptions** about the other side's payoffs and rationality.

## Ground rules

- **Model their incentives, not your hopes.** Use the other side's
  interests as they see them.
- **Payoffs include more than money** — reputation, relationships,
  fairness, and risk attitude.
- **People are not perfectly rational.** Use equilibrium as a
  baseline, then adjust for known behavior (fairness norms, errors).
- **Keep it ethical.** Analysis is for better decisions and fairer deals,
  not for deceiving or exploiting people.
- **Simplify first.** A small game that is understood beats a large
  one that is not.

## Self-check before answering

- Are all players, moves, order, and information stated?
- Are payoffs written from each player's point of view?
- Was the equilibrium checked for efficiency, and were ways to improve
  it considered?
- Are the assumptions about the other side explicit?

## Common pitfalls

- **Ignoring the other side's incentives** — treating them as a fixed
  environment.
- **Assuming one-shot when it is repeated** (or the reverse).
- **Believing empty threats** — a threat you would not carry out is
  not credible.
- **Over-modeling** — a payoff table with invented precision.
- **Missing the larger game** — winning one round while losing the
  relationship.
- **Assuming zero-sum** — many situations have gains from cooperation.

## Example prompt

> Two competitors and I are deciding whether to cut prices this
> quarter. Set this up as a game, find the likely equilibrium, and tell
> me whether there's a way to avoid a price war.

## Learn more

- [[decision-analysis]] for a single decision-maker facing uncertainty.
- [[expected-value-analysis]] for payoffs under probabilities.
- [[second-order-thinking]] for tracing others' reactions informally.
- [[adversary]] for reasoning from an opponent's point of view.
- [[prospect-theory]] for how real people weigh gains and losses.
