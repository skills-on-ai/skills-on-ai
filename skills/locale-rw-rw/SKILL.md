---
name: locale-rw-rw
description: Use when working with the Kinyarwanda (Rwanda) locale (`rw-RW`) — its endonym Ikinyarwanda (Rwanda), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kinyarwanda (Rwanda) (rw-RW)

Reference data for the **Kinyarwanda (Rwanda)** locale — endonym **Ikinyarwanda (Rwanda)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `rw-RW`
- **ISO 639-1:** `rw`
- **ISO 639-3:** `kin`
- **Script:** Latn (Latin)
- **Region:** RW (Rwanda)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 15,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 18,000,000

## Base locale

This is a regional variant of [[locale-rw-001]] (Kinyarwanda), the base/macro locale for this language.

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-rw-001]] with the conventions of Rwanda.

- **Context:** Kinyarwanda is the national language and is spoken by nearly all Rwandans; English, French, and Swahili are also official. Public bodies publish in Kinyarwanda and English.
- **Formats:** Rwandan franc (`Frw`); dates `17 Ukwakira 2026`; 24-hour clock; decimal comma in some publications; check CLDR.
- **Tone:** respectful and community-oriented; avoid divisive or ethnic terms in public content.

## Common pitfalls

- Using French spellings for Kinyarwanda words.
- Using ethnic terminology carelessly.
- The general pitfalls in [[locale-rw-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
