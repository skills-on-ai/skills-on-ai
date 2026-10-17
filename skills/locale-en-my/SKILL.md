---
name: locale-en-my
description: Use when working with the English (Malaysia) locale (`en-MY`) — its endonym English (Malaysia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Malaysia) (en-MY)

Reference data for the **English (Malaysia)** locale — endonym **English (Malaysia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-MY`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** MY (Malaysia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 380,000
- **L2 (additional):** 9,000,000
- **L1+L2 (total):** 9,380,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Malaysian conventions. Malaysian English follows British spelling; the colloquial mixed form is for informal speech and chat only.

- **Spelling:** British forms (-ise, -our, -re).
- **Dates and numbers:** day/month/year, decimal point and comma thousands separator, RM before the amount for the ringgit.
- **Context:** Bahasa Malaysia is the national language; official names (ministries, programs) are often kept in Malay with an English gloss.
- **Tone:** polite and respectful; titles such as "Dato'", "Datuk", "Tan Sri", and "Encik" appear in business writing and should be used correctly.

## Common pitfalls

- Dropping honorifics and titles when addressing officials.
- Writing colloquial "lah" particles in formal text.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Unicode CLDR locale data for date, number, and currency formats (https://cldr.unicode.org)
