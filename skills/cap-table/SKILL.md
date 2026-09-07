---
name: cap-table
description: Use when asked to build, read, or explain a capitalization table — who owns what percentage of a company across founders, employees, and investors, and how funding rounds dilute that ownership — as distinct from a [[business-model-canvas]], which describes how the business operates rather than who owns it.
---

# Cap Table

A capitalization table (cap table) is the ledger of who owns what
percentage of a company: founders, employees, and investors, across
every share class and every funding round the company has raised. It's
the authoritative record for ownership, and it changes every time
equity is issued, exercised, or transferred.

## Key components

- **Share classes** — common stock (typically founders and employees)
  versus preferred stock (typically investors), each with different
  rights: preferred often carries liquidation preferences, anti-dilution
  protection, or board seats that common stock doesn't have.
- **Ownership percentages** — each holder's stake, tracked both as
  currently outstanding shares and as fully diluted (see below) — the
  two numbers tell different stories and both matter.
- **Option pool** — shares set aside, usually before a funding round, to
  grant to future employees; sized as a percentage of the post-money
  cap table and typically created or replenished at each round.
- **Funding rounds and dilution** — each time new shares are issued to
  raise money, everyone else's percentage ownership shrinks
  proportionally, even though the number of shares they hold doesn't
  change; the cap table tracks this dilution round by round.
- **Convertible instruments** — SAFEs, convertible notes, and warrants
  that don't count as issued equity yet but will convert into shares
  under specific future conditions, and need to be modeled into fully
  diluted ownership even before they convert.

## Fully diluted vs. currently outstanding

Currently outstanding ownership counts only shares that have actually
been issued. Fully diluted ownership adds in everything that could
become shares: the full option pool (whether or not it's been granted
yet), unexercised options, warrants, and convertible notes or SAFEs at
their eventual conversion terms. A founder's outstanding percentage can
look comfortably high while their fully diluted percentage — the number
that matters once every option and convertible actually converts — is
substantially lower. Quoting the wrong one, intentionally or not,
misrepresents real ownership.

## Keeping it current

A cap table is only useful if it matches reality. It needs updating
every time a round closes, an option is granted or exercised, a
convertible note converts, or shares are transferred — not
periodically or "when it comes up." Investors, auditors, and acquirers
all expect the cap table to reconcile exactly with the company's actual
signed agreements (stock purchase agreements, option grants, SAFE and
note agreements); when it doesn't, resolving the discrepancy can
require reconstructing history from old paperwork.

## Common pitfalls

- **Option pool sized without founders understanding the dilution it
  causes them** — a pool is typically added to the pre-money valuation,
  meaning founders (not new investors) absorb the dilution from
  expanding it; agreeing to a pool size without doing that math means
  agreeing to more dilution than the headline valuation implies.
- **Cap table out of date relative to signed agreements** — grants,
  exercises, and conversions that happened but were never entered leave
  the table wrong, and the gap tends to surface at the worst time: due
  diligence for a new round or an acquisition.
- **Confusing fully diluted with currently outstanding ownership** —
  citing one when the other is what's relevant (e.g. telling an
  employee their current percentage while founders/investors are
  discussing fully diluted, or vice versa) misleads whoever hears the
  number.
- **Ignoring liquidation preferences when reading percentages** — a
  raw ownership percentage doesn't show who gets paid first or how much
  in an exit; preferred stock's liquidation terms can mean a smaller
  percentage stake outperforms a larger common stake in some outcomes.
- **No single source of truth** — spreadsheets maintained separately by
  founders, legal counsel, and investors drift apart; without one
  authoritative version, disputes over who owns what become hard to
  resolve.

## Learn more

- [[venture-capital]] for how funding rounds that dilute the cap table
  actually get negotiated and structured.
- [[angel-investor]] for the earliest-stage investors who often appear
  on a cap table before institutional venture capital does.
- [[business-model-canvas]] for describing how the business operates,
  a distinct concern from who owns it.
- [[non-disclosure-agreement]] for protecting sensitive cap table detail
  when sharing it outside the company during fundraising or diligence.
