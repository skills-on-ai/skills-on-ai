---
name: locale-eu-es
description: Use when working with the Basque (Spain) locale (`eu-ES`) — its endonym Euskara (Espainia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Basque (Spain) (eu-ES)

Reference data for the **Basque (Spain)** locale — endonym **Euskara (Espainia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `eu-ES`
- **ISO 639-1:** `eu`
- **ISO 639-3:** `eus`
- **Script:** Latn (Latin)
- **Region:** ES (Spain)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 750,000
- **L2 (additional):** 250,000
- **L1+L2 (total):** 1,000,000

## Base locale

This is a regional variant of [[locale-eu-001]] (Basque), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-eu-001]] with the conventions of the Basque Country and Navarre in Spain.

- **Variants:** Euskara Batua is the written standard in Spain; local dialect features (Biscayan, Gipuzkoan, Navarrese) belong in speech and literature, not in UI or documentation.
- **Official use:** Basque is co-official in the Basque Autonomous Community and in parts of Navarre, so public bodies publish bilingual material. Match official spellings of place names (for example Donostia, Gasteiz, Iruñea) and keep Basque and Spanish forms side by side when the project does.
- **Formats:** day-month-year with the Basque suffixes (2026ko urriaren 17a); euro; decimal comma. Check CLDR `eu` for separators.
- **Terminology:** use Euskalterm (Basque Government) and Elhuyar for technical terms.

## Common pitfalls

- Using Spanish punctuation or place-name forms where a Basque form is official.
- Using Spanish calques in syntax.
- The general pitfalls in [[locale-eu-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Euskaltzaindia (https://www.euskaltzaindia.eus)
- Microsoft Localization Style Guide, Basque (https://aka.ms/basque-styleguide)
