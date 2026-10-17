---
name: locale-quz-ec
description: Use when working with the Quechua (Ecuador) locale (`quz-EC`) — its endonym Runashimi (Ecuador), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Quechua (Ecuador) (quz-EC)

Reference data for the **Quechua (Ecuador)** locale — endonym **Runashimi (Ecuador)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `quz-EC`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `quz`
- **Script:** Latn (Latin)
- **Region:** EC (Ecuador)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 500,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 600,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-quz-pe]] with caution to Quechua in Ecuador. The Quechua of Ecuador is called Kichwa and differs from Cusco Quechua in vocabulary, phonology, and spelling; the Ecuadorian standard is the Kichwa Unificado alphabet. Confirm whether the project targets Kichwa or Cusco Quechua.

- **Variety:** Ecuadorian Kichwa has its own alphabet (Kichwa Unificado), with `sh`, `ch`, `ll`, and `k` forms, and does not use many of the ejectives of Cusco Quechua. Use Kichwa resources, not Cusco resources.
- **Formats:** the US dollar is the official currency; decimal and thousands separators follow Ecuadorian Spanish practice (check CLDR `quz-EC`).
- **Terminology:** use Kichwa terms from Ecuadorian education authorities and Kichwa organizations.

## Common pitfalls

- Using Cusco Quechua spelling for Ecuadorian Kichwa readers.
- Treating all Quechua varieties as one language.
- The general pitfalls in [[locale-quz-pe]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ministerio de Educación del Ecuador, Kichwa Unificado standard
