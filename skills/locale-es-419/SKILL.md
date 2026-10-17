---
name: locale-es-419
description: Use when working with the Spanish (Latin America) locale (`es-419`) — its endonym Español (Latinoamérica), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Latin America) (es-419)

Reference data for the **Spanish (Latin America)** locale — endonym **Español (Latinoamérica)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-419`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** 419 (Latin America and the Caribbean)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 400,000,000
- **L2 (additional):** 25,000,000
- **L1+L2 (total):** 425,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-001]] (grammar, register, and typography) and apply the following Latin American-specific points.

- **Scope:** `es-419` is the neutral Latin American written standard, intended to read naturally from Mexico to Argentina. Use it when you cannot target a single country, and switch to a country skill (such as [[locale-es-mx]], [[locale-es-ar]], or [[locale-es-co]]) when you can.
- **Address:** use "ustedes" for every plural, never "vosotros". For the singular, "tú" is the neutral choice for consumer apps, and "usted" for formal contexts. Avoid regional "vos" in a neutral text.
- **Vocabulary:** prefer widely understood words: "computadora" rather than Spain's "ordenador", "celular" or "teléfono móvil", "contraseña", "archivo", "carro" or "auto" depending on region; avoid local slang.
- **Tense:** the simple preterite is the normal past ("Hoy guardé el archivo").
- **Formats:** numbers and currency vary by country; do not assume Mexican separators for all of Latin America. Use CLDR data for the specific country when known.

## Common pitfalls

- Using Spain-only "vosotros", "ordenador", or "móvil", which mark the text as Peninsular.
- Treating `es-419` as one country: do not hard-code Mexican number or currency formats.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Microsoft Localization Style Guides, Spanish editions (https://aka.ms/spanish-neutral-styleguide, https://aka.ms/spanish-spain-styleguide, https://aka.ms/spanish-mexico-styleguide, https://aka.ms/spanish-us-styleguide)
- Unicode CLDR locale data for number, date, and currency formats of each Spanish region (https://cldr.unicode.org)
