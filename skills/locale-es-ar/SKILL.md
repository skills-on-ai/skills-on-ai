---
name: locale-es-ar
description: Use when working with the Spanish (Argentina) locale (`es-AR`) — its endonym Español (Argentina), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Argentina) (es-AR)

Reference data for the **Spanish (Argentina)** locale — endonym **Español (Argentina)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-AR`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** AR (Argentina)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 43,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 45,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Argentine-specific points.

- **Voseo:** use "vos" in the informal singular with its own verb forms: "vos tenés", "vos querés", imperative "guardá", "elegí", "ingresá" (stress on the last syllable). Do not use "tú" forms ("guarda", "elige") unless the brand is deliberately neutral. For the plural, "ustedes" with "ustedes tienen".
- **Formal register:** "usted" remains for banking, legal, and government text.
- **Vocabulary:** "computadora", "celular", "auto", "remera" (T-shirt), "heladera" (fridge), "pibe" and "che" are colloquial and not for standard copy.
- **Phonetic spellings:** do not write "ll" and "y" differently to mimic Rioplatense speech in standard text.
- **Formats:** decimal comma, period thousands separator ("1.234,56"), peso sign "$" before the amount, day/month/year dates.
- **Tone:** local copy is conversational and less formal than Mexican business text; "vos" in an interface prompt often feels natural.

## Common pitfalls

- Using "tú" imperatives ("guarda", "elige") in an interface that should use voseo ("guardá", "elegí").
- Writing Rioplatense slang ("che", "boludo") in product text.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
