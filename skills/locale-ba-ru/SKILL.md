---
name: locale-ba-ru
description: Use when working with the Bashkir (Russia) locale (`ba-RU`) — its endonym Башҡорт теле (Россия), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bashkir (Russia) (ba-RU)

Reference data for the **Bashkir (Russia)** locale — endonym **Башҡорт теле (Россия)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ba-RU`
- **ISO 639-1:** `ba`
- **ISO 639-3:** `bak`
- **Script:** Cyrl (Cyrillic)
- **Region:** RU (Russia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,200,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 1,500,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Bashkir (башҡорт теле) is a Turkic language of Bashkortostan (Russia), written in Cyrillic with additional letters (ә, ғ, ҙ, ҡ, ң, ө, ү, ҫ, һ). It is agglutinative with vowel harmony, and is a state language of the republic alongside Russian. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate through Russian or copy Russian syntax. Bashkir is subject-object-verb, with case suffixes, possessive suffixes, and verb endings attached to stems.
- Use Bashkir terminology where it exists (from the Institute of History, Language and Literature in Ufa), not raw Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony: suffix vowels agree with the stem (front or back, rounded or unrounded).
- Six cases; no grammatical gender. "Һин" is informal "you" and "һеҙ" is polite or plural "you". Use "һеҙ" in UI and public text.

**Orthography and typography.**

- Use the Bashkir letters ә, ғ, ҙ, ҡ, ң, ө, ү, ҫ, һ; never replace them with Russian look-alikes.
- Quotation marks `«…»`; decimal comma; ruble; dates as in Russian.

## Common pitfalls

- Using Russian look-alike letters.
- Breaking vowel harmony.
- Using Tatar forms instead of Bashkir ones.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institute of History, Language and Literature, Ufa Federal Research Centre, Russian Academy of Sciences
- Unicode CLDR locale data for ba (https://cldr.unicode.org)
