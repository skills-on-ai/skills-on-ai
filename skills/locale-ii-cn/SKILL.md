---
name: locale-ii-cn
description: Use when working with the Yi (China) locale (`ii-CN`) — its endonym ꆈꌠꉙ (ꍏꉸ), Yi script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Yi (China) (ii-CN)

Reference data for the **Yi (China)** locale — endonym **ꆈꌠꉙ (ꍏꉸ)**, written in the Yi script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ii-CN`
- **ISO 639-1:** `ii`
- **ISO 639-3:** `iii`
- **Script:** Yiii (Yi)
- **Region:** CN (China)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,000,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 2,200,000

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Nuosu Yi (Sichuan Yi, ꆈꌠ) is a Loloish language of the Tibeto-Burman family, written in the standardized Yi syllabary of Liangshan (about 800 characters, standardized in 1980). Other Yi varieties use different scripts or Chinese-based writing, so confirm the variety. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Translate from the meaning into Nuosu Yi rather than via Chinese. Chinese loanwords are common, but new coinages follow Yi word formation.
- Re-express idioms by meaning.

**Grammar.**

- Word order is subject-object-verb. Yi is tonal; the syllabary writes each syllable, including its tone, with one character.
- There is no grammatical gender and no inflection by case or number; particles and word order carry grammatical relations.

**Orthography and typography.**

- Use Unicode Yi Syllables (U+A000 to U+A48C) and Yi Radicals (U+A490 to U+A4CF); never use look-alike characters from other blocks.
- Text is left to right. Punctuation follows Chinese conventions in China (full-width 。，), and numerals are Arabic.

## Common pitfalls

- Using Chinese grammar or punctuation without adaptation.
- Using the wrong script variety.
- Using fonts or encodings that substitute look-alike characters.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode Standard, Yi Syllables block (https://www.unicode.org/charts/PDF/UA000.pdf)
- Standardized Yi script of Liangshan (1980 standardization by the Chinese government)
