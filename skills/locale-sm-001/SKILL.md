---
name: locale-sm-001
description: Use when working with the Samoan locale (`sm-001`) — its endonym Gagana Sāmoa, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Samoan (sm-001)

Reference data for the **Samoan** locale — endonym **Gagana Sāmoa**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sm-001`
- **ISO 639-1:** `sm`
- **ISO 639-3:** `smo`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 450,000
- **L2 (additional):** 60,000
- **L1+L2 (total):** 510,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Samoan (Gagana Sāmoa) is a Polynesian language spoken in Samoa and American Samoa and by large diaspora communities. It has a formal register (tautala lelei) and a colloquial register (tautala leaga) with different consonants, and a respectful chiefly vocabulary. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Samoan is verb-initial: the verb comes first, then the subject and object markers. Rework English subject-verb-object sentences.
- Cultural concepts (fa'aaloalo respect, fa'amatai chiefly system, aiga family) carry meaning and should be explained rather than reduced to single English words.
- Re-express idioms by meaning.

**Grammar.**

- Pronouns distinguish singular, dual, and plural, with inclusive and exclusive "we" ("tatou" includes the listener, "matou" does not).
- Articles: "le" (the, singular) and "se" (a/an); plural is shown by the plural article "ni" or by context.
- Tense-aspect particles precede the verb ("e", "na", "o le").

**Register.**

- The formal register (tautala lelei) uses the sounds "t" and "n" in places where the colloquial register (tautala leaga) uses "k" and "g". Written and public Samoan uses the formal register.
- Chiefly language ('upu fa'aaloalo) is used for matai (chiefs) and in ceremonies; use the respectful vocabulary where required.

**Orthography and typography.**

- Use the glottal stop ('okina, written ʻ or ’ as the project specifies) and the macron on long vowels (ā, ē, ī, ō, ū); omitting them changes meaning.
- Dates and currency: tala (WST), day/month/year, decimal point.

## Common pitfalls

- Omitting the glottal stop or macron.
- Using the colloquial k/g register in formal text.
- Using English subject-verb-object order.
- Not respecting chiefly vocabulary.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ministry of Education, Sports and Culture of Samoa, Gagana Sāmoa orthography resources
- Milner, Samoan Dictionary (1966)
