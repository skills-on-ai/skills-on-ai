---
name: locale-or-001
description: Use when working with the Odia locale (`or-001`) — its endonym ଓଡ଼ିଆ, Oriya script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Odia (or-001)

Reference data for the **Odia** locale — endonym **ଓଡ଼ିଆ**, written in the Oriya script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `or-001`
- **ISO 639-1:** `or`
- **ISO 639-3:** `ori`
- **Script:** Orya (Oriya)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 34,000,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 38,000,000

## Regional variants

This is the base/macro locale for Odia. Region-specific variants in this dataset:

- [[locale-or-in]] (Odia (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Odia (ଓଡ଼ିଆ) is an Indo-Aryan language of Odisha, written in the Odia script, which has round letter forms. See [[locale-or-in]].

**Translate ideas, not words.**

- Odia is subject-object-verb with postpositions. Reorder English sentences.
- Do not translate from Bengali or Hindi; Odia shares roots but has its own grammar and spelling.
- Accept established English loans in Odia script (ଫାଇଲ୍, ପାସୱାର୍ଡ୍, ଆପ୍), and use the Odisha government's glossaries for official terms.

**Grammar and register.**

- No grammatical gender on nouns; verbs agree with the subject in person and honorific level.
- "ଆପଣ" is the polite "you" for UI and public text; "ତୁମେ" is informal; "ତୁ" is intimate. Do not mix.
- UI commands use the polite imperative ("ସଂରକ୍ଷଣ କରନ୍ତୁ") or the infinitive.

**Orthography and typography.**

- Use the Odia letters ଡ଼ and ଢ଼ (with nukta-like dot) and ୟ and ଯ correctly. Follow the Odisha Sahitya Akademi's spelling.
- Punctuation: the danda (।); digits: Odia (୦-୯) in print, Arabic in UI; ₹; Indian grouping.

## Common pitfalls

- Confusing ଯ and ୟ or ଡ ଢ with ଡ଼ ଢ଼.
- Using Bengali or Hindi spelling.
- Mixing ଆପଣ and ତୁମେ.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Odisha Sahitya Akademi
