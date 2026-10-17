---
name: locale-en-ie
description: Use when working with the English (Ireland) locale (`en-IE`) — its endonym English (Ireland), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: English (Ireland) (en-IE)

Reference data for the **English (Ireland)** locale — endonym **English (Ireland)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `en-IE`
- **ISO 639-1:** `en`
- **ISO 639-3:** `eng`
- **Script:** Latn (Latin)
- **Region:** IE (Ireland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,200,000
- **L2 (additional):** 600,000
- **L1+L2 (total):** 4,800,000

## Base locale

This is a regional variant of [[locale-en-001]] (English), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-en-001]] and use these Irish conventions. Hiberno-English is rich in local idiom, but Irish business and government writing follows standard British forms.

- **Spelling:** British forms (-ise, -our, -re); the Irish language words in public use keep their accents (fada): "Taoiseach", "Dáil", "Gaeltacht", "Garda".
- **Dates and numbers:** day/month/year, 24-hour clock in timetables, decimal point and comma thousands separator, euro (€) before the amount.
- **Names:** place names, personal names, and institutions keep Irish-language spellings and fadas; do not remove accents.
- **Vocabulary:** "mobile", "boot" (car trunk), "press" (cupboard) are local; "grand" and "craic" are colloquial.

## Common pitfalls

- Removing fadas from Irish names.
- Using "pounds" or "£" in Irish contexts, or Northern Irish and Republic terms interchangeably.
- The general pitfalls in [[locale-en-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/welcome/)
- Tearma.ie, the National Terminology Database for Irish (https://www.tearma.ie)
