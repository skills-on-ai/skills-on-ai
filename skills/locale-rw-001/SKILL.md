---
name: locale-rw-001
description: Use when working with the Kinyarwanda locale (`rw-001`) — its endonym Ikinyarwanda, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kinyarwanda (rw-001)

Reference data for the **Kinyarwanda** locale — endonym **Ikinyarwanda**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `rw-001`
- **ISO 639-1:** `rw`
- **ISO 639-3:** `kin`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 15,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 18,000,000

## Regional variants

This is the base/macro locale for Kinyarwanda. Region-specific variants in this dataset:

- [[locale-rw-rw]] (Kinyarwanda (Rwanda))

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Kinyarwanda (Ikinyarwanda) is a Bantu language of Rwanda, an official language with English, French, and Swahili. It has noun classes, tone, and a Latin spelling. The Rwanda Academy of Language and Culture (RALC) sets the orthography. See [[locale-rw-rw]].

**Translate ideas, not words.**

- Kinyarwanda verbs carry subject, tense, object, and mood in one word. Restructure English sentences; do not translate word for word.
- Nouns belong to classes (umu-/aba-, iki-/ibi-, in-/in-, and others) with concord on adjectives, verbs, and possessives.
- Use terminology approved by the RALC and the government (for example from ICT and legal glossaries) rather than raw English or French borrowings where one exists.
- Re-express idioms and proverbs (imigani) by meaning.

**Register.**

- `Wowe` is "you" (singular) and `mwe` is the plural; the plural is used for respect with elders and strangers. Greetings are important (`Muraho`, `Mwiriwe`, `Amakuru?`). Public text is polite and uses titles.
- UI commands use the imperative, with the plural form `-ni` as a courtesy.

**Orthography and typography.**

- Tone and vowel length are not written in standard spelling. Follow the RALC rules for word division and capitalization.
- Dates `17 Ukwakira 2026` (Ukwakira is October); currency Rwandan franc (`Frw`); 24-hour clock.

## Common pitfalls

- Wrong noun-class concords.
- Using French or English word order.
- Using loan terms that RALC has replaced.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Rwanda Academy of Language and Culture (RALC)
- Unicode CLDR locale data for rw (https://cldr.unicode.org)
