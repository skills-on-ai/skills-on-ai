---
name: locale-lv-lv
description: Use when working with the Latvian (Latvia) locale (`lv-LV`) — its endonym Latviešu (Latvija), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Latvian (Latvia) (lv-LV)

Reference data for the **Latvian (Latvia)** locale — endonym **Latviešu (Latvija)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lv-LV`
- **ISO 639-1:** `lv`
- **ISO 639-3:** `lav`
- **Script:** Latn (Latin)
- **Region:** LV (Latvia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,500,000
- **L2 (additional):** 600,000
- **L1+L2 (total):** 2,100,000

## Base locale

This is a regional variant of [[locale-lv-001]] (Latvian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **other** (3 forms).

- **zero** — `n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19` (e.g. 0, 10~20, 30, 40, …)
- **one** — `n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 2~9, 22~29, 102, 1002, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-lv-001]] with the conventions of Latvia.

- **Law:** Latvian is the sole official language, and the State Language Law requires Latvian in public bodies and consumer information. Provide Latvian content that is complete.
- **Formats:** euro; dates `17.10.2026.` (with a final period); 24-hour clock; decimal comma.
- **Names:** names are declined in running text; use the nominative in forms and lists.

## Common pitfalls

- Using Russian as the default language.
- Leaving out the final period in dates.
- The general pitfalls in [[locale-lv-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- EU Interinstitutional Style Guide (https://style-guide.europa.eu), language-specific conventions
