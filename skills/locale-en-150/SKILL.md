---
name: locale-en-150
description: Use when working with the English (Europe) locale (`en-150`) — its endonym English (Europe), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Europe) (en-150)

Reference data for the **English (Europe)** locale — endonym **English (Europe)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-150`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** 150 (Europe)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 67,000,000
- **L2 (additional):** 213,000,000
- **L1+L2 (total):** 280,000,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these conventions for English in Europe. Most readers are non-native speakers, so clarity matters more than idiom.

- **Spelling:** British forms (-ise, -our, -re); the Oxford style uses -ize with -our.
- **Dates and numbers:** day/month/year, 24-hour clock, euro (€) where the euro is used; check CLDR `en-150` data before hard-coding separators.
- **Plain English:** the European Commission publishes an English Style Guide for authors and translators; avoid idioms and phrasal verbs where a precise verb exists.
- **Terminology:** follow EU terminology (IATE, https://iate.europa.eu) for institutional terms.

## Common pitfalls

- Using idioms that non-native readers will not decode.
- Using US dates and spellings in a European context.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- European Commission English Style Guide
