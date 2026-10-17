---
name: locale-lo-001
description: Use when working with the Lao locale (`lo-001`) — its endonym ລາວ, Lao script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Lao (lo-001)

Reference data for the **Lao** locale — endonym **ລາວ**, written in the Lao script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lo-001`
- **ISO 639-1:** `lo`
- **ISO 639-3:** `lao`
- **Script:** Laoo (Lao)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,400,000
- **L2 (additional):** 800,000
- **L1+L2 (total):** 4,200,000

## Regional variants

This is the base/macro locale for Lao. Region-specific variants in this dataset:

- [[locale-lo-la]] (Lao (Laos))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Lao is a tonal language written in the Lao script (left to right, no spaces between words), closely related to Thai. See [[locale-lo-la]]. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Lao drops subjects and pronouns when the context is clear; address people by title, name, or kinship term instead of a direct "you".
- Modifiers follow the noun. English noun stacks must be reversed.
- Lao has no inflection; time, plural, and number are shown by words and classifiers.
- Do not copy Thai vocabulary or spelling; Lao has its own words and spelling.

**Register.**

- Lao has polite and informal pronouns ("ເຈົ້າ" is general "you", "ທ່ານ" is formal). Use the formal forms and polite particles in public text.
- Official language in government and education follows the Lao standard; foreign terms are often adapted from Pali, Sanskrit, or French and English.

**Orthography and typography.**

- There are no spaces between words; spaces mark phrase or sentence boundaries. Use a Lao-aware line breaker.
- Tone marks and vowels must be in correct Unicode order.
- Lao digits (໐ to ໙) and Arabic digits both appear; Arabic digits are common in UI. Currency: kip (₭ or ກີບ).
- Dates may show the Buddhist Era in addition to the Gregorian year.

## Common pitfalls

- Copying Thai spelling or vocabulary.
- Inserting word spaces.
- Using the wrong register for the audience.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode Standard, Lao block
- Unicode CLDR locale data for lo (https://cldr.unicode.org)
