---
name: locale-es-ve
description: Use when working with the Spanish (Venezuela) locale (`es-VE`) — its endonym Español (Venezuela), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Venezuela) (es-VE)

Reference data for the **Spanish (Venezuela)** locale — endonym **Español (Venezuela)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-VE`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** VE (Venezuela)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 27,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 28,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Venezuelan-specific points.

- **Address:** "tú" is the standard informal pronoun and "usted" is formal. Voseo exists in Zulia and some regions but is not standard for product text.
- **Vocabulary:** Venezuelan colloquialisms such as "chévere", "pana", and "vaina" belong to spoken language; do not use them in formal text.
- **Currency and formats:** bolívar (symbol "Bs."); inflation has repeatedly changed prices and denominations, and the US dollar is widely used. Verify the currency presented before localizing amounts. Use CLDR data for `es-VE` formats.

## Common pitfalls

- Using the address form, vocabulary, or number format of another region; confirm each against the target country.
- Writing spoken slang or dialect spellings in standard text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
