---
name: locale-en-za
description: Use when working with the English (South Africa) locale (`en-ZA`) — its endonym English (South Africa), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (South Africa) (en-ZA)

Reference data for the **English (South Africa)** locale — endonym **English (South Africa)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-ZA`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** ZA (South Africa)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,900,000
- **L2 (additional):** 11,000,000
- **L1+L2 (total):** 15,900,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these South African conventions. English is one of eleven official languages and most readers also speak another.

- **Spelling:** British forms (-ise, -our, -re).
- **Dates and numbers:** CLDR `en-ZA` uses a decimal comma and space for thousands; the rand symbol is "R" before the amount; dates are commonly YYYY-MM-DD or day/month/year, so write the month in words where clarity matters.
- **Local vocabulary:** "robot" (traffic light), "bakkie" (pickup truck), "braai" (barbecue), and "lekker" are everyday words but informal; in formal text, use the standard term.
- **Multilingual context:** keep names of people and places in their original spelling, and take care with cultural and historical terms.

## Common pitfalls

- Using American spelling and decimal points where the local format is a comma.
- Placing Afrikaans or Zulu slang into formal English copy without need.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
