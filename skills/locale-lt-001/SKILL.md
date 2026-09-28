---
name: locale-lt-001
description: Use when working with the Lithuanian locale (`lt-001`) — its endonym Lietuvių, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Lithuanian (lt-001)

Reference data for the **Lithuanian** locale — endonym **Lietuvių**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lt-001`
- **ISO 639-1:** `lt`
- **ISO 639-3:** `lit`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,000,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 4,500,000

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `n % 10 = 1 and n % 100 != 11..19` (e.g. 1, 21, 31, 41, …)
- **few** — `n % 10 = 2..9 and n % 100 != 11..19` (e.g. 2~9, 22~29, 102, 1002, …)
- **many** — `f != 0`
- **other** — everything else (e.g. 0, 10~20, 30, 40, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
