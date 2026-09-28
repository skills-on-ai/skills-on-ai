---
name: locale-he-001
description: Use when working with the Hebrew locale (`he-001`) — its endonym עברית, Hebrew script, right-to-left (RTL) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hebrew (he-001)

Reference data for the **Hebrew** locale — endonym **עברית**, written in the Hebrew script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `he-001`
- **ISO 639-1:** `he`
- **ISO 639-3:** `heb`
- **Script:** Hebr (Hebrew)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 6,500,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 10,500,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `i = 1 and v = 0 or i = 0 and v != 0` (e.g. 1)
- **two** — `i = 2 and v = 0` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
