---
name: money-map
description: Use when someone wants a one-page overview of every account they have and how money flows between them, covering income, bills, spending, savings, investments, and debts, using names and institutions rather than balances or numbers. Differs from [[basic-budget]] and [[personal-budget]], which plan amounts, while this shows structure. Related to [[automated-savings]] and [[bill-autopay]] (the transfers and payments the map reveals).
---

# Money Map

A money map is a diagram or list of every account and the arrows
between them. A budget answers "how much"; a map answers "where does it
live and where does it go". It helps a person spot orphaned accounts,
tangled flows, single points of failure, and what someone else would
need to know if they had to step in. It needs names and institutions
only, so it can be made without exposing any secret.

## Input required

- **Country**, since account types and terminology differ.
- **Income sources** and which account receives each.
- **Every account**, by nickname and institution: current, savings,
  investment, retirement, credit cards, loans, mortgage, payment apps.
- **Regular flows**: transfers, bill payments, and contributions.
- **Who else is involved**: joint holders, dependents, a partner.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered:

1. Where does your income arrive, and from whom?
2. Which accounts, cards, loans, and investment or retirement accounts
   do you have, by nickname and institution?
3. What moves automatically between them?
4. Which accounts are joint, or does someone else rely on them?
5. Is there an account you have forgotten, or avoid looking at?

## Method

1. **List the accounts** as nodes: nickname, institution, type, and
   owner. Exclude numbers, logins, and balances unless the user wants
   rough ones for their own use.
2. **Group by role.** Income in, bills out, daily spending, savings,
   investments, debts. Mark any account with no clear role.
3. **Draw the flows.** For each arrow note direction, what it is
   (salary, rent, transfer), how often, and whether it is automatic or
   manual. A Mermaid diagram or an indented text list is enough.
4. **Find the problems.** Look for dormant accounts, duplicated
   purposes, bills paid from savings, a card whose balance is paid from
   an account that may run dry, and fees that could be avoided.
5. **Mark single points of failure.** One account that feeds
   everything, one person who knows how it works, or one login that
   gates the whole map.
6. **Simplify.** Propose consolidations or role changes, one at a time,
   with the cost of closing noted (credit effects, fees, tax wrappers
   vary by country; check an official source).
7. **Add the handoff note.** Where a trusted person can find the map
   and the vault listing credentials, without the map holding secrets.
8. **Set a refresh.** Update after any new account, job change, or
   move, and once a year.

## Output format

- **Account table**: nickname, institution, type, role, owner.
- **Flow diagram or list**, with automatic flows marked.
- **Findings**: orphans, overlaps, risks, each with one suggested fix.
- **Handoff note** and a **refresh date**.

| Nickname | Institution | Type | Role | Joint with |
|---|---|---|---|---|
| Daily | Example Bank | Current | Spending | none |

## Ground rules

- Never ask for or write account numbers, card numbers, passwords,
  recovery codes, or government ID numbers. Nicknames and institution
  names only.
- Do not recommend closing accounts without noting costs and asking
  the user to check local rules.
- Do not give tax or investment advice.
- Keep amounts out unless the user chooses to add rough ones.

## Self-check before answering

- Does every account have a role and a place in a flow?
- Are manual and automatic flows distinguished?
- Did I list risks and a handoff location rather than secrets?
- Is the output a map, not a budget in disguise?
- Is a refresh date set?

## Common pitfalls

- **Putting secrets on the map**, which makes the map itself a risk.
- **Skipping debts and cards**, which are half of the picture.
- **Forgetting small old accounts** that hold fees or unclaimed funds.
- **Drawing it once** and never updating.
- **Mixing a map with a budget**, burying structure in numbers.
- **Over-consolidating** into one account that becomes a single point
  of failure.

## Example prompt

> Help me make a one-page money map. I will list my accounts by
> nickname and institution. Show how income, bills, savings, and debts
> flow, flag anything orphaned or risky, and leave out all numbers.

## Learn more

- [[basic-budget]] for assigning amounts once the structure is clear.
- [[personal-budget]] for the fuller planning of those amounts.
- [[automated-savings]] for the savings arrows.
- [[bill-autopay]] for the bill arrows.
- [[estate-planning]] for making the map useful to those who inherit.
