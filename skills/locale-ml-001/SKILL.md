---
name: locale-ml-001
description: Use when working with the Malayalam locale (`ml-001`) — its endonym മലയാളം, Malayalam script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Malayalam (ml-001)

Reference data for the **Malayalam** locale — endonym **മലയാളം**, written in the Malayalam script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ml-001`
- **ISO 639-1:** `ml`
- **ISO 639-3:** `mal`
- **Script:** Mlym (Malayalam)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 37,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 38,000,000

## Regional variants

This is the base/macro locale for Malayalam. Region-specific variants in this dataset:

- [[locale-ml-in]] (Malayalam (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Malayalam (മലയാളം) is a Dravidian language of Kerala, written in the Malayalam script. It is agglutinative, subject-object-verb, and heavily influenced by Sanskrit in its vocabulary. See [[locale-ml-in]].

**Translate ideas, not words.**

- Malayalam attaches case endings, postpositions, and tense markers to stems. Reorder English sentences; do not translate word for word.
- Malayalam has no verb agreement for person or number (the verb form stays the same for "I", "you", and "he"), so the subject must be clear from context or a pronoun.
- Written (literary) and spoken Malayalam differ. Use the standard written form; formal writing uses more Sanskrit-origin vocabulary.
- Accept established English loans written in Malayalam script (ഫയൽ, പാസ്‌വേഡ്, ആപ്പ്).

**Grammar that trips translators.**

- Case endings follow the noun: -നെ/-യെ (accusative), -ന്/-യ്ക്ക് (dative), -ൽ (locative), -ന്റെ (genitive). Nouns and numerals have specific forms before the case.
- Politeness is expressed with the honorific plural "നിങ്ങൾ" and polite verb endings.
- Sandhi (sound joining) rules apply to compounds; use a dictionary for the correct joined form.

**Register.**

- "നിങ്ങൾ" is the polite or plural "you" used in UI and public text; "നീ" is informal. UI commands use the polite imperative or the infinitive ("സേവ് ചെയ്യുക"). Be consistent.

**Orthography and typography.**

- Use Unicode Malayalam with atomic chillu letters (ൺ ൻ ർ ൽ ൾ); older fonts and text may use a ZWJ sequence, which creates inconsistent text. Use a normalized form.
- After the 1971 script reform, many conjuncts are written as separate letters (the new style), while the traditional conjunct forms remain in print. Follow the project's convention.
- Digits: Arabic digits in UI; Malayalam digits (൦-൯) are historic. Currency ₹; Indian grouping.

## Common pitfalls

- Mixing ZWJ chillu sequences and atomic chillu letters.
- Dropping sandhi or using the wrong case ending.
- Using Tamil spellings.
- Translating the verb with person agreement that Malayalam does not have.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Kerala State Institute of Languages and Sahitya Akademi
