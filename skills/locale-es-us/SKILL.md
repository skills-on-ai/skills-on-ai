---
name: locale-es-us
description: Use when working with the Spanish (United States) locale (`es-US`) — its endonym Español (Estados Unidos), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (United States) (es-US)

Reference data for the **Spanish (United States)** locale — endonym **Español (Estados Unidos)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-US`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** US (United States)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 41,000,000
- **L2 (additional):** 15,000,000
- **L1+L2 (total):** 56,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following United States-specific points.

- **Audience:** a mix of heritage speakers of Mexican, Caribbean, Central American, and South American origin, many bilingual. Aim for neutral Latin American vocabulary and avoid Spain-only words and strong regional slang.
- **Address:** "tú" for consumer content is common, with "usted" for legal, health, and government text; plural is "ustedes".
- **Loan and calque risks:** avoid Spanglish forms such as "aplicar para" (for "solicitar"), "llamar para atrás" (for "devolver la llamada"), and "correr para" (for "postularse"). Use "solicitar", "devolver la llamada", and "postularse".
- **Formats:** decimal point and comma thousands separator in US-aligned content, dollar sign before the amount, month-day-year dates are common in US institutions (state clearly which you use), and US measurement units may stay with metric equivalents if needed.
- **Local terms:** keep proper names of US programs and agencies in English with a Spanish gloss on first use ("Seguro Social (Social Security)").

## Common pitfalls

- Writing Spanglish calques ("aplicar para", "llamar para atrás") or using Spain-only vocabulary.
- Leaving US-specific institutions untranslated with no gloss.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Microsoft Localization Style Guide, Spanish (US): https://aka.ms/spanish-us-styleguide
