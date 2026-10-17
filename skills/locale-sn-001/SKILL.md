---
name: locale-sn-001
description: Use when working with the Shona locale (`sn-001`) — its endonym chiShona, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Shona (sn-001)

Reference data for the **Shona** locale — endonym **chiShona**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sn-001`
- **ISO 639-1:** `sn`
- **ISO 639-3:** `sna`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,500,000
- **L2 (additional):** 3,500,000
- **L1+L2 (total):** 14,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Shona (chiShona) is a Bantu language of Zimbabwe, written in the Latin script. The standard (Standard Shona) combines the Zezuru, Karanga, Manyika, and Korekore dialects. It has noun classes and tone, and the written standard is based on the orthography revised in the 1950s and adjusted since. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Shona verbs carry subject, tense, object, and mood in a single word. Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, and possessives.
- Use established Shona terms (from the African Languages Research Institute at the University of Zimbabwe and Shona dictionaries) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (tsumo) by meaning.

**Register.**

- `Iwe` is "you" (singular) and `imi` is the plural and respectful form. Use `imi` for elders and in public text. Greetings are important (`Mhoro`, `Makadii`, `Maswera sei?`).

**Orthography and typography.**

- Tones are not written in standard spelling. Follow standard orthography for digraphs such as `sv`, `zv`, `tsv`, `dzv`, `bh`, `mh`, `nh`, `ng`.
- Dates `17 Gumiguru 2026`; currency: Zimbabwe has used several currencies, so state the currency explicitly; decimal point.

## Common pitfalls

- Wrong noun-class concords.
- Using Ndebele or English forms.
- Assuming a currency symbol without checking.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- African Languages Research Institute, University of Zimbabwe
- Shona dictionaries (Hannan, Standard Shona Dictionary)
