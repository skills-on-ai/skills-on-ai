---
name: locale-es-mx
description: Use when working with the Spanish (Mexico) locale (`es-MX`) — its endonym Español (México), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (Mexico) (es-MX)

Reference data for the **Spanish (Mexico)** locale — endonym **Español (México)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-MX`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** MX (Mexico)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 120,000,000
- **L2 (additional):** 8,000,000
- **L1+L2 (total):** 128,000,000

## Base locale

This is a regional variant of [[locale-es-001]] (Spanish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Start from the general Spanish guidance in [[locale-es-419]] (grammar, register, and typography) and apply the following Mexican-specific points.

- **Address:** "tú" in consumer apps and marketing, "usted" in banking, government, and customer service; plural is always "ustedes".
- **Vocabulary:** "computadora", "celular", "carro" (also "coche"), "boleto" (ticket), "renta" (rent), "contraseña", "jugo", "platicar" (chat in speech). "Ahorita" and "órale" are colloquial and should not appear in standard product copy.
- **Politeness:** Mexican Spanish is notably courteous and indirect; prefer "por favor", "le pedimos", and conditional forms in customer-facing text.
- **Formats:** decimal point, comma as thousands separator ("1,234.56"), peso sign "$" before the amount, dates as day/month/year, and 12-hour or 24-hour time depending on the product.
- **Borrowings:** English loanwords are common in tech ("el link", "el mouse"), but prefer the Spanish term in official or instructional text when a well-understood one exists.

## Common pitfalls

- Using "vosotros" or Spain's "ordenador", "coche", and "móvil".
- Overusing colloquial Mexican words ("chamba", "padre", "ahorita") in formal copy.
- The general pitfalls in [[locale-es-001]] (word order, capitalization, false friends, and agreement) also apply here.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Real Academia Española and ASALE, Diccionario panhispánico de dudas and Ortografía de la lengua española (2010), https://www.rae.es
- Microsoft Localization Style Guide, Spanish (Mexico): https://aka.ms/spanish-mexico-styleguide
