---
name: locale-es-bo
description: Use when working with the Spanish (Bolivia) locale (`es-BO`) — its endonym Español (Bolivia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Bolivia) (es-BO)

Reference data for the **Spanish (Bolivia)** locale — endonym **Español (Bolivia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-BO`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** BO (Bolivia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 8,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 11,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Bolivian-specific points.

- **Address:** "usted" is the safe default in products; informal address mixes "tú" and "vos" regionally (voseo is used in the east), so a neutral Latin American tú-or-usted text is the safest choice unless you know the audience.
- **Vocabulary:** shared with other Andean varieties; a small number of local words (for example "wawa" for baby, from Quechua) are regional and not suited to standard copy.
- **Contact with Quechua and Aymara:** place names and cultural terms should keep their local spelling; do not "correct" them to Spanish.
- **Formats:** use CLDR data for `es-BO` number, date, and currency formats (boliviano, symbol "Bs").

## Common pitfalls

- Using the address form, vocabulary, or number format of another region; confirm each against the target country.
- Writing spoken slang or dialect spellings in standard text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
