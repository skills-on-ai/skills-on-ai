---
name: locale-bn-001
description: Use when working with the Bengali locale (`bn-001`) — its endonym বাংলা, Bengali script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bengali (bn-001)

Reference data for the **Bengali** locale — endonym **বাংলা**, written in the Bengali script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bn-001`
- **ISO 639-1:** `bn`
- **ISO 639-3:** `ben`
- **Script:** Beng (Bengali)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 242,000,000
- **L2 (additional):** 43,000,000
- **L1+L2 (total):** 284,000,000

## Regional variants

This is the base/macro locale for Bengali. Region-specific variants in this dataset:

- [[locale-bn-bd]] (Bengali (Bangladesh))
- [[locale-bn-in]] (Bengali (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Bengali (Bangla) is written in the Bengali script and is the national language of Bangladesh and a major language of West Bengal and Tripura in India. Two standards coexist, with differences in vocabulary, spelling, and conventions. See [[locale-bn-bd]] and [[locale-bn-in]].

**Translate ideas, not words.**

- Bengali is subject-object-verb with postpositions. Reorder English sentences.
- Use the standard colloquial literary style (চলিত ভাষা), not the older literary style (সাধু ভাষা). Verb and pronoun forms differ between them; do not mix them.
- Use common Bengali words where they exist, but accept established English loans (ফাইল, পাসওয়ার্ড, অ্যাপ).
- Re-express idioms by meaning.

**Grammar that trips translators.**

- No grammatical gender, but verb forms change with the person and honorific level of the subject.
- Case endings and postpositions (কে, র, তে, এ, থেকে) attach to nouns; numbers use classifiers (টা, টি, জন, খানা): ২টি ফাইল, তিনজন ব্যবহারকারী.
- Plural is marked by -রা (for people), -গুলো (for things), or by context; use it only when needed.

**Register.**

- Three levels of "you": আপনি (formal), তুমি (informal), তুই (intimate or rude). UI and public text use আপনি with matching verb forms (করুন). Do not mix levels.
- UI commands use the polite imperative ("সংরক্ষণ করুন") or the infinitive ("সংরক্ষণ করা"). Keep one pattern.

**Orthography and typography.**

- Punctuation: the dari (।) ends a sentence. Use Bengali spelling per the Bangla Academy (Bangladesh) or the West Bengal Bangla Akademi.
- Digits: Bengali digits (০-৯) are common in print; Arabic digits are common in UI. Use the Indian grouping (lakh, crore) in CLDR for both countries.
- Unicode normalization matters: use the Bengali conjunct and vowel-sign order correctly; avoid look-alike characters from Assamese (see [[locale-as-001]]) for র/ৰ.

## Common pitfalls

- Mixing the sadhu and cholito styles.
- Mixing আপনি, তুমি, and তুই.
- Using vocabulary from the wrong Bengali (West Bengal versus Bangladesh).
- Missing classifiers with numerals.
- Using the Assamese letters ৰ and ৱ in Bengali text.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Bangla Academy, প্রমিত বাংলা বানানের নিয়ম
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
