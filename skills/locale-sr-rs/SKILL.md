---
name: locale-sr-rs
description: Use when working with the Serbian (Serbia) locale (`sr-RS`) — its endonym Српски (Србија), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Serbian (Serbia) (sr-RS)

Reference data for the **Serbian (Serbia)** locale — endonym **Српски (Србија)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sr-RS`
- **ISO 639-1:** `sr`
- **ISO 639-3:** `srp`
- **Script:** Cyrl (Cyrillic)
- **Region:** RS (Serbia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 6,600,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 7,600,000

## Base locale

This is a regional variant of [[locale-sr-001]] (Serbian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
