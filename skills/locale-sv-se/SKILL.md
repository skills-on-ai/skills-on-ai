---
name: locale-sv-se
description: Use when working with the Swedish (Sweden) locale (`sv-SE`) — its endonym Svenska (Sverige), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swedish (Sweden) (sv-SE)

Reference data for the **Swedish (Sweden)** locale — endonym **Svenska (Sverige)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sv-SE`
- **ISO 639-1:** `sv`
- **ISO 639-3:** `swe`
- **Script:** Latn (Latin)
- **Region:** SE (Sweden)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 8,500,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 10,500,000

## Base locale

This is a regional variant of [[locale-sv-001]] (Swedish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sv-001]] with the conventions of Sweden.

- **Formats:** Swedish krona (SEK), "12,50 kr"; ISO dates (2026-10-17) are common in forms and official use; decimal comma; space for thousands; 24-hour clock.
- **Institutions:** use official Swedish names (Skatteverket, Försäkringskassan, 1177).
- **Tone:** informal, consensus-driven; first names and "du" are normal in all settings.
- **Minority languages:** Sweden also recognizes Sami, Finnish, Meänkieli, Romani, and Yiddish; see [[locale-se-se]] for Northern Sami.

## Common pitfalls

- Using Finland-Swedish vocabulary in material for Sweden.
- Using "ni" for formal address.
- The general pitfalls in [[locale-sv-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Språkrådet (https://www.sprakradet.se)
