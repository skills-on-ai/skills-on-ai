---
name: locale-es-cl
description: Use when working with the Spanish (Chile) locale (`es-CL`) — its endonym Español (Chile), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Chile) (es-CL)

Reference data for the **Spanish (Chile)** locale — endonym **Español (Chile)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-CL`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** CL (Chile)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 18,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 19,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Chilean-specific points.

- **Address:** informal Chilean speech uses a verbal voseo ("tú tienes" becomes "tú tenís") that is colloquial and not appropriate for formal copy. In product text use standard "tú" with standard verb forms, and "usted" for formal contexts.
- **Vocabulary:** "computador" (masculine) is more common than "computadora", "celular", "auto", "palta" (avocado), "polera" (T-shirt).
- **Slang:** "po", "cachai", and "weón" are very informal and offensive in some contexts; keep them out of standard translations.
- **Formats:** decimal comma, period thousands separator, peso sign "$" before the amount, day/month/year dates; Chilean tax IDs (RUT) have their own format that should be kept untranslated.

## Common pitfalls

- Using the address form, vocabulary, or number format of another region; confirm each against the target country.
- Writing spoken slang or dialect spellings in standard text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
