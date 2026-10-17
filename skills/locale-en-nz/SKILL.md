---
name: locale-en-nz
description: Use when working with the English (New Zealand) locale (`en-NZ`) — its endonym English (New Zealand), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (New Zealand) (en-NZ)

Reference data for the **English (New Zealand)** locale — endonym **English (New Zealand)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-NZ`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** NZ (New Zealand)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,500,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 5,000,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these New Zealand conventions.

- **Spelling:** follows British forms: -ise, -our, -re; "program" is used for software.
- **Dates and numbers:** day/month/year ("17 October 2026"), decimal point and comma thousands separator, $ for the New Zealand dollar, metric units.
- **Māori language:** te reo Māori is an official language. Use macrons in Māori words ("Māori", "Aotearoa", "Wānanga") and keep Māori place names unaltered; avoid anglicized spellings ("Maori"). Do not italicize Māori words, which are part of New Zealand English.
- **Tone:** modest and friendly; understatement is typical, and overstating claims reads as insincere.

## Common pitfalls

- Dropping macrons from Māori words or italicizing them.
- Using American spellings for a New Zealand audience.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Te Aka Māori Dictionary (https://maoridictionary.co.nz) for correct spelling of Māori words
