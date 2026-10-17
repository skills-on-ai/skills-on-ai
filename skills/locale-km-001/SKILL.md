---
name: locale-km-001
description: Use when working with the Khmer locale (`km-001`) — its endonym ខ្មែរ, Khmer script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Khmer (km-001)

Reference data for the **Khmer** locale — endonym **ខ្មែរ**, written in the Khmer script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `km-001`
- **ISO 639-1:** `km`
- **ISO 639-3:** `khm`
- **Script:** Khmr (Khmer)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 19,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 21,000,000

## Regional variants

This is the base/macro locale for Khmer. Region-specific variants in this dataset:

- [[locale-km-kh]] (Khmer (Cambodia))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Khmer is the national language of Cambodia, written in the Khmer script (left to right, no spaces between words), with a rich system of registers. See [[locale-km-kh]].

**Translate ideas, not words.**

- Khmer is analytic, with subject-verb-object order and modifiers after the noun. Reverse English noun stacks.
- Khmer drops subjects and pronouns when clear; address people by title, name, or kinship term, not a direct "you".
- Khmer has no inflection; use time words, classifiers, and context.
- Many technical terms are Sanskrit-Pali coinages from the Royal Academy of Cambodia; use established terminology and avoid raw English transliteration where a term exists.

**Register.**

- Khmer has several registers: ordinary, polite, royal (ពាក្យរាជសព្ទ), and monastic. Use the polite register in public text, and the royal register only for the royal family. Choose pronouns by relative age and status; formal UI avoids them.
- Politeness particles (បាទ for male speakers, ចាស៎ for female speakers) belong to speech, not UI.

**Orthography and typography.**

- No spaces between words; a space or zero-width space marks phrases or sentence boundaries. A Khmer-aware line breaker is required.
- Consonant stacking uses the subscript sign (coeng, U+17D2) with strict ordering; wrong input produces broken rendering. Use NFC and the Unicode order.
- Khmer digits (០ to ៩) and Arabic digits are both used; follow the project convention. Currency riel (៛) after the amount.
- Spelling follows the Chuon Nath dictionary (វចនានុក្រមខ្មែរ) and the Royal Academy of Cambodia.

## Common pitfalls

- Using spaces between words as in English.
- Using the wrong register or royal vocabulary.
- Mixing Thai or Lao characters, or incorrect stacking order.
- Transliterating English terms where an official Khmer term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Royal Academy of Cambodia (រាជបណ្ឌិត្យសភាកម្ពុជា), Khmer dictionary (Chuon Nath)
- Microsoft Localization Style Guide, Khmer (https://aka.ms/khmer-styleguide)
