---
name: locale-sa-001
description: Use when working with the Sanskrit locale (`sa-001`) — its endonym संस्कृतम्, Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Sanskrit (sa-001)

Reference data for the **Sanskrit** locale — endonym **संस्कृतम्**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sa-001`
- **ISO 639-1:** `sa`
- **ISO 639-3:** `san`
- **Script:** Deva (Devanagari)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 20,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 5,020,000

## Regional variants

This is the base/macro locale for Sanskrit. Region-specific variants in this dataset:

- [[locale-sa-in]] (Sanskrit (India))

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Sanskrit (संस्कृतम्) is a classical language written mainly in Devanagari. Translation into Sanskrit is a scholarly or ceremonial task; use classical grammar (Pāṇini) and established vocabulary. See [[locale-sa-in]].

**Translate ideas, not words.**

- Sanskrit is highly inflected with free word order; case endings carry the grammatical roles. Do not copy English word order.
- Use participles, absolutives (ktvā), and compounds (samāsa) where Sanskrit prefers them over subordinate clauses. Avoid very long compounds that obscure meaning.
- Use classical vocabulary for modern concepts when a coinage exists; the Rashtriya Sanskrit Sansthan and Sanskrit glossaries provide modern terms. Avoid inventing words.

**Grammar.**

- Three genders, three numbers (singular, dual, plural), and eight cases (including the vocative). Verbs have ten tenses/moods, three persons, and active/middle/passive voices.
- Sandhi (euphonic joining) is mandatory in continuous text; use correct sandhi or split words with avagraha in teaching materials.

**Register.**

- There is no T-V distinction in the pronoun; formal address uses "भवान्" (masculine) and "भवती" (feminine). "त्वम्" is the informal pronoun.
- Style ranges from simple prose to elaborate kāvya; choose by purpose.

**Orthography and typography.**

- Devanagari with the danda (।) and the double danda (॥) at verse ends; Vedic accent marks are only for Vedic texts.
- Digits: Devanagari (०-९) in print, Arabic in UI. Use Unicode Devanagari with the correct virama, anusvara, and visarga.

## Common pitfalls

- Translating English word order and prepositions.
- Incorrect sandhi or case endings.
- Inventing unattested coinages.
- Using Hindi forms (like "है") in Sanskrit.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Rashtriya Sanskrit Sansthan
- Monier-Williams, A Sanskrit-English Dictionary
