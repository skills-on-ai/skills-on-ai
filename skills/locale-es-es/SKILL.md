---
name: locale-es-es
description: Use when working with the Spanish (Spain) locale (`es-ES`) — its endonym Español (España), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Spain) (es-ES)

Reference data for the **Spanish (Spain)** locale — endonym **Español (España)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-ES`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** ES (Spain)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 44,000,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 48,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-001]] (grammar, register, and typography) and apply the following Spain-specific points.

- **Address:** informal "tú" for the singular and "vosotros/vosotras" for the plural (with verb forms like "podéis", "tenéis"); "usted" and "ustedes" for formal and legal text. Do not use "ustedes" for informal plural, as it sounds Latin American.
- **Vocabulary:** "ordenador", "móvil", "coche", "zumo", "fichero" (file), "patatas" (potatoes), "vale" for "OK", "contraseña" for password, and "aplicación" or "app".
- **Grammar:** the present perfect covers recent past ("Hoy he guardado el archivo"), where Latin America often uses the simple preterite. Leísmo ("le vi" for a masculine person) is widespread and accepted for people.
- **Formats:** decimal comma, euro symbol after the number with a non-breaking space ("12,50 €"), 24-hour time. For thousands separators, check the CLDR `es-ES` data, since Spanish practice for four-digit numbers differs from other regions.
- **Tone:** Spanish business text is a little more direct than Latin American text; avoid overlong courtesy formulas in app copy.

## Common pitfalls

- Using Latin American "ustedes" for the informal plural, or "computadora" and "celular", which read as foreign in Spain.
- Using the simple preterite everywhere where Spain would use the present perfect for events of today.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Microsoft Localization Style Guides, Spanish editions (https://aka.ms/spanish-neutral-styleguide, https://aka.ms/spanish-spain-styleguide, https://aka.ms/spanish-mexico-styleguide, https://aka.ms/spanish-us-styleguide)
