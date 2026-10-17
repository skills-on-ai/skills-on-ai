---
name: locale-ny-001
description: Use when working with the Chichewa locale (`ny-001`) — its endonym Chichewa, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Chichewa (ny-001)

Reference data for the **Chichewa** locale — endonym **Chichewa**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ny-001`
- **ISO 639-1:** `ny`
- **ISO 639-3:** `nya`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 12,000,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 16,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Chichewa (Chewa, Nyanja) is a Bantu language of Malawi, Zambia, and Mozambique, written in the Latin script. In Malawi it is the national language; in Zambia the related variety is called Nyanja. It has noun classes and tone. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Chichewa verbs carry subject, tense, and object markers in a single word. Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes with concord on adjectives, verbs, and possessives.
- Use approved Chichewa terminology (from the Centre for Language Studies, University of Malawi, and the Chichewa Board) rather than raw English borrowings where one exists.
- Re-express idioms and proverbs (miyambi) by meaning.

**Register.**

- `Iwe` is "you" (singular) and `inu` is the plural and respectful form. Use `inu` for elders and in public text. Greetings are important (`Muli bwanji?`, `Zikomo`).

**Orthography and typography.**

- Tones are not written in standard spelling. Follow the Malawian orthography (the 1973 reform) for `ch`, `ng'`, `ph`, `th`, and `mw`.
- Currency kwacha (`MK` in Malawi, `ZK` in Zambia); dates `17 Okutobala 2026`; decimal point.

## Common pitfalls

- Wrong noun-class concords.
- Using Zambian Nyanja spellings in Malawian content, or the reverse.
- Dropping the apostrophe in `ng'`.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Centre for Language Studies, University of Malawi
- Unicode CLDR locale data for ny (https://cldr.unicode.org)
