---
name: locale-be-001
description: Use when working with the Belarusian locale (`be-001`) — its endonym Беларуская, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Belarusian (be-001)

Reference data for the **Belarusian** locale — endonym **Беларуская**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `be-001`
- **ISO 639-1:** `be`
- **ISO 639-3:** `bel`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,300,000
- **L1+L2 (total):** 6,300,000

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `n % 10 = 1 and n % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `n % 10 = 2..4 and n % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
