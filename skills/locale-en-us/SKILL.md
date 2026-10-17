---
name: locale-en-us
description: Use when working with the English (United States) locale (`en-US`) — its endonym English (United States), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (United States) (en-US)

Reference data for the **English (United States)** locale — endonym **English (United States)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-US`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** US (United States)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 244,000,000
- **L2 (additional):** 55,000,000
- **L1+L2 (total):** 299,000,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these United States conventions.

- **Spelling:** -ize, -or ("color", "center", "organize"), "license" for noun and verb, "program", "gray", "catalog", "check" (not "cheque").
- **Punctuation:** double quotation marks first with single marks inside; periods and commas go inside the closing quotation mark; serial comma is common in US style guides; periods after "Mr." and "Dr.".
- **Dates and numbers:** month/day/year ("October 17, 2026" or "10/17/2026"), 12-hour clock with AM/PM in consumer contexts, decimal point and comma thousands separator, dollar sign before the number, imperial units with metric where needed.
- **Vocabulary:** "cell phone", "truck", "elevator", "apartment", "vacation", "fall" for autumn, "gotten" as the past participle of "get".
- **Tone:** direct and friendly; contractions are normal in consumer text; plain language is the federal standard (plainlanguage.gov).

## Common pitfalls

- Using UK spellings or UK vocabulary ("flat", "lift", "mobile") for a US audience.
- Writing day/month/year dates, which are ambiguous in the US ("03/04/2026").
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- The Chicago Manual of Style and the AP Stylebook (US publishing conventions)
- https://www.plainlanguage.gov (federal plain-language guidelines)
