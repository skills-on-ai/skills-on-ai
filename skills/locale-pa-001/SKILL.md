---
name: locale-pa-001
description: Use when working with the Punjabi locale (`pa-001`) — its endonym ਪੰਜਾਬੀ, Gurmukhi script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Punjabi (pa-001)

Reference data for the **Punjabi** locale — endonym **ਪੰਜਾਬੀ**, written in the Gurmukhi script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pa-001`
- **ISO 639-1:** `pa`
- **ISO 639-3:** `pan`
- **Script:** Guru (Gurmukhi)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 113,000,000
- **L2 (additional):** 37,000,000
- **L1+L2 (total):** 150,000,000

## Regional variants

This is the base/macro locale for Punjabi. Region-specific variants in this dataset:

- [[locale-pa-in]] (Punjabi (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0..1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Punjabi (ਪੰਜਾਬੀ / پنجابی) is written in two scripts: Gurmukhi in India (and in Sikh religious use) and Shahmukhi (an Arabic-script form) in Pakistan. It is tonal. Choose the script and the country before translating. See [[locale-pa-in]]. The Gurmukhi form is the base of this guidance.

**Translate ideas, not words.**

- Punjabi is subject-object-verb with postpositions. Reorder English sentences.
- Do not translate from Hindi; they differ in vocabulary, spelling, and grammar.
- Religious and cultural terms (ਵਾਹਿਗੁਰੂ, ਗੁਰਦੁਆਰਾ, ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ) should be rendered with the community's own forms.

**Grammar and register.**

- Two genders (masculine, feminine) agree with adjectives and verbs. Ergative construction in the past tense with "ਨੇ".
- "ਤੁਸੀਂ" is the polite or plural "you" for UI and public text; "ਤੂੰ" is informal; use "ਤੁਸੀਂ" with plural verb agreement.
- UI commands use the polite imperative ("ਸੰਭਾਲੋ") or the infinitive.

**Orthography and typography.**

- Gurmukhi uses its own punctuation (a danda ।) and numerals (੦-੯); Arabic digits are used in UI. Currency ₹; Indian grouping.
- Shahmukhi is written right to left in Nastaliq style; do not transliterate Gurmukhi to Shahmukhi mechanically, because the scripts represent tones and vowels differently.
- Follow the Punjabi University, Patiala's spelling standards for Gurmukhi.

## Common pitfalls

- Using the wrong script for the audience.
- Using Hindi grammar or Urdu-origin vocabulary without checking.
- Mixing ਤੂੰ and ਤੁਸੀਂ.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Punjabi University, Patiala, Punjabi dictionary and orthography
