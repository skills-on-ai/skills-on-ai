---
name: bill-autopay
description: Use when someone wants recurring bills paid automatically without missed payments, overdrafts, or unnoticed price rises, covering buffers, due dates, alerts, what not to autopay, and a monthly statement check. Related to [[automated-savings]] (automating money going into savings), [[subscription-reset]] (cancelling what you no longer want), and [[basic-budget]] (planning amounts). This one is about safely automating payment of bills you intend to keep.
---

# Bill Autopay

Autopay prevents late fees and missed payments, but it also pays
whatever the biller charges, even when the amount is wrong or the
account is empty. A safe setup pairs automation with a buffer, alerts,
and a short monthly look at statements.

## Input required

- **Country and payment methods** available (direct debit, card on
  file, bank bill pay). Rules on dispute rights and notice differ; check
  the current official or bank source.
- **List of recurring bills**: name, usual amount, due date, and whether
  the amount is fixed or varies.
- **Pay dates** and the account that receives pay.
- **Current habits**: which bills are already automatic.

## Questions to ask first

Ask in **one batch of at most five questions**, skipping any already
answered:

1. Which recurring bills do you pay, and which are already on autopay?
2. When do you get paid, and into which account?
3. Which bills vary month to month, and by how much?
4. Do you ever run close to zero before payday?
5. How do you want to be alerted (text, email, app notification)?

## Method

1. **Inventory bills** in a table with due date, amount type, and payer
   account. Read the last two or three statements to catch missing ones.
2. **Sort into three groups.** Fixed amounts (rent, loan minimums,
   insurance) suit full autopay. Variable essentials (utilities, phone)
   suit autopay with an alert or a cap. Irregular or disputed bills
   stay manual.
3. **Align due dates with pay.** Many billers let you change the due
   date; move bills to just after payday so cash is there. Ask the
   biller.
4. **Choose the paying account.** Use one bill account that receives a
   transfer on payday for the month's total, so the balance is visible.
5. **Hold a buffer.** Keep extra cash in the bill account above the
   expected total, sized to cover a bill rising or a delayed paycheck.
   A default is roughly one extra bill's worth, but pick a figure the
   user can sustain.
6. **Set alerts.** Turn on notifications for upcoming charges, charges
   above a threshold, and low balance. Billers' own reminders count.
7. **Decide what not to autopay.** Bills with a history of errors,
   anything in dispute, one-off invoices, and any where a wrong charge
   would exceed the buffer. For credit cards, choose between paying the
   minimum automatically as a safety net and paying the full balance,
   while still reviewing the statement.
8. **Run a monthly check.** On a fixed day, scan statements: right
   amount, right date, no new or duplicate charges. Note price rises.
9. **Handle failures.** Know who to call if a payment fails, and keep a
   paper or offline list of billers for when accounts change.

## Output format

- **Bill table**: biller, amount type, due date, method, autopay
  status (full, capped, manual).
- **Account plan**: paying account, payday transfer, buffer target.
- **Alert list** and the **monthly check** day with three questions to
  ask of each statement.
- **Change list**: what to switch, moving due dates, and who to contact.

## Ground rules

- Never ask for account numbers, card numbers, passwords, or login
  codes. Biller names and amounts are enough.
- Do not assert consumer-protection rights or deadlines; tell the user
  to check current local rules.
- Do not set autopay that the buffer cannot cover.
- Do not recommend banks or apps; describe the capability needed.

## Self-check before answering

- Is every bill placed in a group with a reason?
- Do due dates fall after pay, with a buffer?
- Are there alerts, and a named day for the monthly check?
- Did I flag bills not to automate?
- Is there a plan for a failed payment?

## Common pitfalls

- **Autopay with no buffer**, causing overdraft fees.
- **Never reading statements**, so errors and price rises pass.
- **Old card or account closed**, leaving payments silently failing.
- **Autopaying disputed bills.**
- **Forgetting annual charges** that sit outside the monthly rhythm.
- **Alerts sent to an unused email.**

## Example prompt

> Here are my recurring bills with approximate amounts and due dates.
> Set up a safe autopay plan: due dates after payday, a buffer, alerts,
> what to keep manual, and a ten-minute monthly statement check.

## Learn more

- [[subscription-reset]] for removing recurring charges you do not want.
- [[automated-savings]] for the matching payday transfer into savings.
- [[basic-budget]] for deciding how much each bucket needs.
- [[money-map]] for seeing which account pays which bill.
