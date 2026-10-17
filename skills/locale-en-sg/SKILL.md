---
name: locale-en-sg
description: Use when working with the English (Singapore) locale (`en-SG`) — its endonym English (Singapore), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Singapore) (en-SG)

Reference data for the **English (Singapore)** locale — endonym **English (Singapore)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-SG`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** SG (Singapore)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,800,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 4,800,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Singapore conventions. Standard Singapore English follows British spelling, while the colloquial form (Singlish) is for speech and informal chat only.

- **Spelling:** British forms (-ise, -our, -re).
- **Dates and numbers:** day/month/year, decimal point and comma thousands separator, S$ for the Singapore dollar where it needs distinction.
- **Tone:** polite, efficient, and clear; the Plain English movement is influential in government writing.
- **Names:** keep Chinese, Malay, and Tamil names in the order and spelling the person uses.

## Common pitfalls

- Writing Singlish particles ("lah", "leh") in formal copy.
- Using American spelling, or assuming the dollar means US dollars.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
