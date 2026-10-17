---
name: locale-mi-001
description: Use when working with the Maori locale (`mi-001`) — its endonym Māori, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Maori (mi-001)

Reference data for the **Maori** locale — endonym **Māori**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mi-001`
- **ISO 639-1:** `mi`
- **ISO 639-3:** `mri`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 50,000
- **L2 (additional):** 150,000
- **L1+L2 (total):** 200,000

## Regional variants

This is the base/macro locale for Maori. Region-specific variants in this dataset:

- [[locale-mi-nz]] (Maori (New Zealand))

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Māori (te reo Māori) is the Polynesian language of Aotearoa New Zealand and an official language there. The Māori Language Commission (Te Taura Whiri i te Reo Māori) is the authority on orthography and standardized terms. See [[locale-mi-nz]].

**Translate ideas, not words.**

- Māori is a verb-initial language. Sentences begin with a particle and verb phrase, then the subject: "Kei te whakatuwhera au i te kōnae" (I am opening the file). Rework English subject-verb-object order.
- Translate concepts with attention to Māori worldviews: terms like whānau, mana, kaitiakitanga, and whenua carry cultural meaning and should not be reduced to single English words.
- Re-express idioms by meaning; use established coinages from Te Taura Whiri and Te Aka for technical terms.

**Grammar that trips translators.**

- Tense-aspect particles precede the verb: "kei te" (present), "i" (past), "ka" (future or sequence), "e ... ana" (continuous).
- Articles: "te" (singular) and "ngā" (plural); nouns have no plural suffix, and the article marks number.
- Possessives distinguish a-class and o-class (tāku/tōku, āku/ōku); the choice depends on the relationship.
- Pronouns distinguish dual and plural, inclusive and exclusive "we": tāua (you and I), māua (he/she and I), tātou (all of us), mātou (we, not you).

**Register.**

- Māori has a respectful register for formal speeches (whaikōrero), greetings (mihi), and karakia. Public service text is polite and clear; use "e koe" (you, singular) and "koutou" (you, plural) with respect.
- Use correct protocol for greetings and sign-offs: "Tēnā koe", "Tēnā koutou", "Nāku noa, nā".

**Orthography and typography.**

- Macrons (tohutō) on ā, ē, ī, ō, ū are required; the Commission advises macrons rather than double vowels. Capital macron letters (Ā, Ē, Ī, Ō, Ū) are required for names and sentence starts.
- The digraphs "wh" and "ng" represent single sounds and are not split across lines.
- Māori words in English text are not italicized and take no "s" plural.
- Dates may use Māori month names; follow Te Taura Whiri's list for the chosen forms.

## Common pitfalls

- Omitting macrons or using double vowels.
- Adding an "s" plural to Māori words in English text.
- Using English subject-verb-object order.
- Choosing the wrong a-class or o-class possessive.
- Translating cultural concepts as single English words.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Te Taura Whiri i te Reo Māori (Māori Language Commission, https://www.tetaurawhiri.govt.nz)
- Te Aka Māori Dictionary (https://maoridictionary.co.nz)
