---
name: locale-en-jm
description: Use when working with the English (Jamaica) locale (`en-JM`) — its endonym English (Jamaica), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Jamaica) (en-JM)

Reference data for the **English (Jamaica)** locale — endonym **English (Jamaica)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-JM`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** JM (Jamaica)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,500,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 2,700,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Jamaican conventions. Standard Jamaican English is written in British-influenced forms, and Jamaican Patois is a separate creole with its own orthography.

- **Spelling:** British forms (-ise, -our, -re).
- **Dates and numbers:** day/month/year, decimal point and comma thousands separator, J$ for the Jamaican dollar where clarity is needed.
- **Patois:** do not write Patois spelling for effect in standard English copy; if Patois is needed, use the Cassidy-JLU orthography or the target publication's convention.
- **Tone:** warm and conversational, with formality for official text.

## Common pitfalls

- Representing Patois phonetically with invented spellings.
- Using US spellings in Jamaican official material.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Dictionary of Jamaican English (Cassidy and Le Page)
