---
name: locale-mi-nz
description: Use when working with the Maori (New Zealand) locale (`mi-NZ`) — its endonym Māori (Aotearoa), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Maori (New Zealand) (mi-NZ)

Reference data for the **Maori (New Zealand)** locale — endonym **Māori (Aotearoa)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mi-NZ`
- **ISO 639-1:** `mi`
- **ISO 639-3:** `mri`
- **Script:** Latn (Latin)
- **Region:** NZ (New Zealand)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 50,000
- **L2 (additional):** 150,000
- **L1+L2 (total):** 200,000

## Base locale

This is a regional variant of [[locale-mi-001]] (Maori), the base/macro locale for this language.

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-mi-001]] with the conventions of New Zealand.

- **Official status:** Māori and New Zealand Sign Language are official languages. Public agencies are expected to use bilingual signage and forms; use the standard Māori names for places (for example Aotearoa, Te Whanganui-a-Tara for Wellington).
- **Formats:** day/month/year; New Zealand dollar ($, NZD); decimal point and comma thousands separator; 24-hour or 12-hour clock.
- **Protocol:** follow tikanga (custom) in greetings, acknowledgements, and imagery; consult iwi and hapū for tribal names and local terms.
- **Bilingual layout:** Māori text usually comes first or is displayed with equal prominence in bilingual materials.

## Common pitfalls

- Anglicizing Māori place names.
- Treating Māori as decoration by adding single words to an English text.
- The general pitfalls in [[locale-mi-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Te Taura Whiri i te Reo Māori (https://www.tetaurawhiri.govt.nz)
