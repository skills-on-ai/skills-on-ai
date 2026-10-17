---
name: locale-es-do
description: Use when working with the Spanish (Dominican Republic) locale (`es-DO`) — its endonym Español (República Dominicana), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Dominican Republic) (es-DO)

Reference data for the **Spanish (Dominican Republic)** locale — endonym **Español (República Dominicana)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-DO`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** DO (Dominican Republic)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,800,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 11,100,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Dominican-specific points.

- **Address:** "tú" is the usual informal form, "usted" for formal text; the plural is "ustedes".
- **Pronunciation versus writing:** the dropping of final "s" and the swapping of "r" and "l" are spoken features and must not be written into standard text.
- **Vocabulary:** Caribbean usage such as "guagua" (bus) is regional and may confuse readers elsewhere; use standard words when the audience is broader.
- **Formats:** peso dominicano (symbol "RD$"); use CLDR data for `es-DO` number and date formats.

## Common pitfalls

- Using the address form, vocabulary, or number format of another region; confirm each against the target country.
- Writing spoken slang or dialect spellings in standard text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
