---
name: locale-fr-lu
description: Use when working with the French (Luxembourg) locale (`fr-LU`) — its endonym Français (Luxembourg), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (Luxembourg) (fr-LU)

Reference data for the **French (Luxembourg)** locale — endonym **Français (Luxembourg)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-LU`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** LU (Luxembourg)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 15,000
- **L2 (additional):** 400,000
- **L1+L2 (total):** 415,000

## Base locale

This is a regional variant of [[locale-fr-001]] (French), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fr-001]] with Luxembourg conventions. Luxembourgish, French, and German are all official; French is the language of legislation and much administration, while daily life is multilingual.

- **Register:** formal "vous" is the default in administration and business; Luxembourgish speakers often switch among languages, but written French follows the standard.
- **Terminology:** official institution names are often given in all three languages; use the exact forms on the government portal.
- **Currency and formats:** euro; day/month/year; check CLDR `fr-LU` for separators.
- **German and Luxembourgish influence:** some vocabulary appears in speech only; keep Germanisms out of written French.

## Common pitfalls

- Using German or Luxembourgish loanwords in formal French text.
- Translating institution names rather than using their official forms.
- The general pitfalls in [[locale-fr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
