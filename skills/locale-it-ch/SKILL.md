---
name: locale-it-ch
description: Use when working with the Italian (Switzerland) locale (`it-CH`) — its endonym Italiano (Svizzera), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Italian (Switzerland) (it-CH)

Reference data for the **Italian (Switzerland)** locale — endonym **Italiano (Svizzera)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `it-CH`
- **ISO 639-1:** `it`
- **ISO 639-3:** `ita`
- **Script:** Latn (Latin)
- **Region:** CH (Switzerland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 700,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 1,000,000

## Base locale

This is a regional variant of [[locale-it-001]] (Italian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
