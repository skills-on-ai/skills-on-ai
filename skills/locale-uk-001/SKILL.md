---
name: locale-uk-001
description: Use when working with the Ukrainian locale (`uk-001`) — its endonym Українська, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Ukrainian (uk-001)

Reference data for the **Ukrainian** locale — endonym **Українська**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `uk-001`
- **ISO 639-1:** `uk`
- **ISO 639-3:** `ukr`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 32,000,000
- **L2 (additional):** 6,900,000
- **L1+L2 (total):** 39,000,000

## Regional variants

This is the base/macro locale for Ukrainian. Region-specific variants in this dataset:

- [[locale-uk-ua]] (Ukrainian (Ukraine))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
