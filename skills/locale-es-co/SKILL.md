---
name: locale-es-co
description: Use when working with the Spanish (Colombia) locale (`es-CO`) — its endonym Español (Colombia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Colombia) (es-CO)

Reference data for the **Spanish (Colombia)** locale — endonym **Español (Colombia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-CO`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** CO (Colombia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 50,000,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 51,500,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Colombian-specific points.

- **Address:** "usted" is used widely, even between friends and family in some regions, so it is a safe default, and "tú" is accepted in youth-oriented apps. Regional "vos" appears in parts of the west and is not standard for product text.
- **Vocabulary:** "computador" is common, "celular", "carro", "tinto" (black coffee), "parqueadero" (parking), "chévere" (colloquial).
- **Tone:** Colombian business Spanish values courtesy and formal address ("Con gusto", "A la orden"); phrases like "con mucho gusto" are natural.
- **Formats:** decimal comma, period thousands separator in CLDR, peso sign "$" before the amount, day/month/year dates.

## Common pitfalls

- Using the address form, vocabulary, or number format of another region; confirm each against the target country.
- Writing spoken slang or dialect spellings in standard text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
