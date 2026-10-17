---
name: locale-en-in
description: Use when working with the English (India) locale (`en-IN`) — its endonym English (India), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (India) (en-IN)

Reference data for the **English (India)** locale — endonym **English (India)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-IN`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 300,000
- **L2 (additional):** 125,000,000
- **L1+L2 (total):** 125,300,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Indian conventions. Indian English is the working language of business, law, and education, and is more formal in register than US or UK English.

- **Spelling:** British forms (-ise is common, -our, -re); "program" is used for software.
- **Numbers:** the Indian digit-grouping system is used in India (12,34,567; "lakh" and "crore" in prose), as in the CLDR `en-IN` data; international texts may use millions and billions. State which you use. The rupee symbol is ₹.
- **Dates:** day/month/year, 12-hour clock in consumer contexts.
- **Common non-standard forms:** "do the needful", "revert back", "prepone", "kindly", and "out of station" are widespread in India but read as unusual elsewhere; use plain alternatives ("please do what is needed", "reply", "move earlier") for international readers.
- **Names and terms:** use correct local transliteration for names and places ("Bengaluru", "Mumbai").

## Common pitfalls

- Using "revert" to mean "reply", or "prepone", in material for a global audience.
- Mixing lakh/crore and million/billion in the same document without explanation.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
