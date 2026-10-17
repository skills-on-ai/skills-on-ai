---
name: locale-en-au
description: Use when working with the English (Australia) locale (`en-AU`) — its endonym English (Australia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Australia) (en-AU)

Reference data for the **English (Australia)** locale — endonym **English (Australia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-AU`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** AU (Australia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 18,000,000
- **L2 (additional):** 7,000,000
- **L1+L2 (total):** 25,000,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Australian conventions.

- **Spelling:** follows British forms with some exceptions: -ise is standard, -our ("colour"), "centre", "program" (including non-computer uses), "licence"/"license" as in British English, "cheque".
- **Punctuation and style:** the Australian Government Style Manual is the main reference; it favors plain language, single quotation marks, and sentence-case headings.
- **Dates and numbers:** day/month/year ("17 October 2026"), 12-hour or 24-hour clock depending on the product, decimal point and comma thousands separator, $ for the Australian dollar (clarify "AUD" when mixed with other dollars), metric units.
- **Vocabulary:** "mobile", "ute", "servo", "arvo" and similar slang are spoken, informal, and not for standard copy. Place names and Aboriginal and Torres Strait Islander terms keep their correct spellings, and acknowledgement-of-Country wording should come from the organisation.
- **Tone:** friendly, relaxed, and direct; formal marketing hype sounds out of place.

## Common pitfalls

- Using American spellings and the term "fall" for autumn.
- Writing slang ("g'day", "no worries") into formal text where plain English fits.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Australian Government Style Manual (https://www.stylemanual.gov.au)
