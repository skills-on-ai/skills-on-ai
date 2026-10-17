---
name: locale-en-gb
description: Use when working with the English (Great Britain) locale (`en-GB`) — its endonym English (Great Britain), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Great Britain) (en-GB)

Reference data for the **English (Great Britain)** locale — endonym **English (Great Britain)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-GB`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** GB (United Kingdom)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 59,300,000
- **L2 (additional):** 4,400,000
- **L1+L2 (total):** 63,700,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these British conventions.

- **Spelling:** -ise is standard in most British publishing (Oxford style prefers -ize), -our ("colour", "behaviour"), -re ("centre"), "licence" (noun) and "license" (verb), "programme" for a plan but "program" for software, "grey", "catalogue", "cheque".
- **Punctuation:** single quotation marks first in many publications (the Guardian style uses them), with double inside; punctuation goes outside the closing mark unless it belongs to the quotation; the serial comma is used only when it prevents ambiguity; no period after "Mr" and "Dr".
- **Dates and numbers:** day/month/year ("17 October 2026"), 24-hour clock in timetables, decimal point and comma thousands separator, £ before the number, metric with some imperial in daily use (miles, pints).
- **Vocabulary:** "mobile", "lorry", "lift", "flat", "holiday", "autumn", "post" for mail, "whilst" is acceptable but formal.
- **Tone:** understatement and politeness; "sorry" and "please" are frequent, and hard-sell language sounds pushy. GOV.UK promotes plain, short sentences.

## Common pitfalls

- Using US spellings (color, organize) and month-first dates in UK copy.
- Overusing exclamation marks or superlatives, which read as American hype.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- GOV.UK style guide (https://www.gov.uk/guidance/style-guide)
- The Guardian and Observer style guide
