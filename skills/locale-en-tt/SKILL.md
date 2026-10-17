---
name: locale-en-tt
description: Use when working with the English (Trinidad and Tobago) locale (`en-TT`) — its endonym English (Trinidad and Tobago), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Trinidad and Tobago) (en-TT)

Reference data for the **English (Trinidad and Tobago)** locale — endonym **English (Trinidad and Tobago)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-TT`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** TT (Trinidad and Tobago)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,200,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 1,300,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Trinidad and Tobago conventions. Written standard English follows British spelling, while Trinidadian and Tobagonian English Creoles are different spoken varieties.

- **Spelling:** British forms (-ise, -our, -re).
- **Dates and numbers:** day/month/year, TT$ for the Trinidad and Tobago dollar where clarity is needed, decimal point and comma thousands separator.
- **Usage:** keep local terms for food, festivals, and places (Carnival, doubles, roti) in their usual spellings; do not respell creole forms in standard copy.

## Common pitfalls

- Using US spellings or dates in official local material.
- Using creole spellings for effect in formal text.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
