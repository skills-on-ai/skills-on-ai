---
name: locale-kn-001
description: Use when working with the Kannada locale (`kn-001`) — its endonym ಕನ್ನಡ, Kannada script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kannada (kn-001)

Reference data for the **Kannada** locale — endonym **ಕನ್ನಡ**, written in the Kannada script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kn-001`
- **ISO 639-1:** `kn`
- **ISO 639-3:** `kan`
- **Script:** Knda (Kannada)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 44,000,000
- **L2 (additional):** 15,000,000
- **L1+L2 (total):** 59,000,000

## Regional variants

This is the base/macro locale for Kannada. Region-specific variants in this dataset:

- [[locale-kn-in]] (Kannada (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Kannada (ಕನ್ನಡ) is a Dravidian language of Karnataka, written in the Kannada script. It is agglutinative and subject-object-verb. See [[locale-kn-in]].

**Translate ideas, not words.**

- Kannada attaches case suffixes, postpositions, and tense/person endings to stems. Reorder and restructure English sentences; do not translate word for word.
- Written Kannada differs from spoken Kannada (the literary style versus colloquial style). Use the standard written style in UI, official text, and documentation; use colloquial forms only in informal marketing.
- Accept established English loans written in Kannada script (ಫೈಲ್, ಪಾಸ್‌ವರ್ಡ್, ಆ್ಯಪ್) but use Kannada terms from the Kannada Development Authority when the term is established.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Nouns are masculine, feminine, or neuter in third-person forms (gender is marked on pronouns and verbs, not on nouns). Use the neuter for things.
- Verbs agree with the subject in person, number, and gender; use the right honorific plural.
- Postpositions and case endings follow nouns: ಅನ್ನು (accusative), ಗೆ (dative), ಇಂದ (ablative), ಅಲ್ಲಿ (locative).

**Register.**

- "ನೀವು" is the polite or plural "you" and is used in UI and public text; "ನೀನು" is informal; use "ನೀವು" with plural verb endings.
- UI commands use the polite imperative ("ಉಳಿಸಿ", "ಆಯ್ಕೆಮಾಡಿ") or the infinitive.

**Orthography and typography.**

- Use Unicode Kannada with correct virama and ZWJ/ZWNJ handling; the conjunct ordering is strict.
- Punctuation: Western punctuation with a period; digits in Kannada (೦-೯) or Arabic (UI); currency ₹; Indian grouping; dates DD/MM/YYYY.
- Spelling follows the standard dictionaries of the Kannada Sahitya Parishat.

## Common pitfalls

- Using the spoken-language style in formal text.
- Wrong agreement or honorific plural.
- Incorrect conjunct or virama sequences.
- Transliterating English terms where an established Kannada term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Kannada Development Authority and Kannada Sahitya Parishat
