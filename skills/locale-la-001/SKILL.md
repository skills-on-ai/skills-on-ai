---
name: locale-la-001
description: Use when working with the Latin locale (`la-001`) — its endonym Latina, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Latin (la-001)

Reference data for the **Latin** locale — endonym **Latina**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `la-001`
- **ISO 639-1:** `la`
- **ISO 639-3:** `lat`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 0
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 1,000,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Latin is a classical language with no native-speaking community today. Translation into Latin is a scholarly or ceremonial task. Decide first which Latin to write: Classical (Ciceronian), Ecclesiastical, or Neo-Latin, and apply it consistently.

**Translate ideas, not words.**

- Latin is synthetic: case endings carry the grammatical roles, so word order is free and used for emphasis. English prepositional phrases and auxiliaries become cases and verb endings.
- Subordination is rich: Latin uses participles, the ablative absolute, and indirect statement (accusative + infinitive) where English uses "that" clauses. Do not translate English clause by clause.
- There are no articles; "the" and "a" disappear.
- Re-express idioms by meaning, and prefer classical vocabulary where an equivalent exists.

**Grammar.**

- Five declensions, four conjugations, six cases (including the vocative), and a rich tense and mood system (subjunctive, imperative).
- Adjectives agree with their nouns in gender, number, and case.
- Word order tends to put the verb at the end (SOV), but this is a tendency, not a rule.

**Register.**

- There is no formal/informal pronoun split: "tu" and "vos" are used by number. Politeness is carried through titles and phrases.
- Classical style prefers periodic sentences and rhetorical devices; ecclesiastical Latin is simpler.

**Orthography and typography.**

- Classical spelling uses "u" and "v" as separate letters in modern editions ("vita", "unus"), with "i" and "j" usually both written as "i". Macrons may mark long vowels in teaching material.
- Modern vocabulary (computer, internet, email): use the Opus Fundatum Latinitas Lexicon Recentis Latinitatis (published by the Vatican) as a reference for neologisms.
- Dates: the Roman calendar (Kalendae, Nonae, Idus) is traditional; modern texts often use "die XVII mensis Octobris anno MMXXVI".

## Common pitfalls

- Translating English word for word, including articles and auxiliaries.
- Mixing classical and ecclesiastical spelling or vocabulary.
- Using unattested modern coinages when a classical word exists.
- Wrong case endings or agreement, which a reader will notice immediately.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Lewis and Short, A Latin Dictionary, and the Oxford Latin Dictionary
- Opus Fundatum Latinitas, Lexicon Recentis Latinitatis (Vatican)
