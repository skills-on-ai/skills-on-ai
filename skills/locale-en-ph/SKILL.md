---
name: locale-en-ph
description: Use when working with the English (Philippines) locale (`en-PH`) — its endonym English (Philippines), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Philippines) (en-PH)

Reference data for the **English (Philippines)** locale — endonym **English (Philippines)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-PH`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** PH (Philippines)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,400,000
- **L2 (additional):** 60,000,000
- **L1+L2 (total):** 63,400,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Philippine conventions. Philippine English is shaped by American usage, and English is an official language with Filipino.

- **Spelling:** American forms (-ize, -or, -er).
- **Dates and numbers:** month/day/year is common, with day/month/year used in some contexts; write the month in words to avoid ambiguity. The peso sign is ₱; the decimal point and comma thousands separator apply.
- **Usage:** "for a while" (meaning "wait"), "open the light", "comfort room" (restroom), and Taglish are local; avoid them in international copy.
- **Tone:** warm and respectful; "po" and "opo" honorifics are in Filipino, not English, and are not carried over.

## Common pitfalls

- Using British spellings by default.
- Mixing Taglish phrases into formal or international text.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
