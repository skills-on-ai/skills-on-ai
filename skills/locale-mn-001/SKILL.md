---
name: locale-mn-001
description: Use when working with the Mongolian locale (`mn-001`) — its endonym Монгол, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Mongolian (mn-001)

Reference data for the **Mongolian** locale — endonym **Монгол**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mn-001`
- **ISO 639-1:** `mn`
- **ISO 639-3:** `mon`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,700,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 6,000,000

## Regional variants

This is the base/macro locale for Mongolian. Region-specific variants in this dataset:

- [[locale-mn-mn]] (Mongolian (Mongolia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Mongolian is an agglutinative language written in Cyrillic in Mongolia and in the traditional Mongolian script (vertical, written top to bottom, columns running left to right) in Inner Mongolia, China. Choose the script and the country before translating. See [[locale-mn-mn]].

**Translate ideas, not words.**

- Mongolian is subject-object-verb and agglutinative; case suffixes, possessives, and verb endings attach to the stem. Restructure English sentences; do not translate word for word.
- Avoid Russian calques in Cyrillic Mongolian; use established Mongolian terminology.
- Re-express idioms by meaning.

**Grammar.**

- Vowel harmony: suffix vowels agree with the stem vowels (front or back, rounded or unrounded). Wrong harmony produces a visibly incorrect word.
- About eight cases (nominative, genitive, accusative, dative-locative, ablative, instrumental, comitative, directional). There is no grammatical gender.
- Plurals are formed with -ууд/-үүд, -нууд/-нүүд, -чууд, or by context.

**Register.**

- "Чи" is informal "you" and "та" is polite "you" (also plural). Use "та" in UI and public text.
- Honorific vocabulary is used for elders, officials, and religious figures.

**Orthography and typography.**

- Cyrillic Mongolian uses 35 letters, including Ө ө and Ү ү; never replace them with О or У.
- Traditional Mongolian script is written vertically; use Unicode Mongolian with the correct variation selectors, and a layout engine that supports vertical text.
- Quotation marks « » in Cyrillic text; dates "2026 оны 10 дугаар сарын 17"; check CLDR for number formats.

## Common pitfalls

- Dropping Ө or Ү, or substituting O and Y.
- Breaking vowel harmony in suffixes.
- Using the wrong script for the audience (Cyrillic versus traditional).
- Using Russian calques.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institute of Language and Literature, Mongolian Academy of Sciences (orthography and dictionaries)
- Unicode Standard, Mongolian block
