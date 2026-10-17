---
name: locale-zu-001
description: Use when working with the Zulu locale (`zu-001`) — its endonym isiZulu, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Zulu (zu-001)

Reference data for the **Zulu** locale — endonym **isiZulu**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zu-001`
- **ISO 639-1:** `zu`
- **ISO 639-3:** `zul`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 12,000,000
- **L2 (additional):** 16,000,000
- **L1+L2 (total):** 28,000,000

## Regional variants

This is the base/macro locale for Zulu. Region-specific variants in this dataset:

- [[locale-zu-za]] (Zulu (South Africa))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Zulu (isiZulu) is a Nguni Bantu language of South Africa, with noun classes, a rich verb system, and click consonants. It is written conjunctively: prefixes, stems, and suffixes form single long words. See [[locale-zu-za]].

**Translate ideas, not words.**

- Zulu verbs carry subject, tense, object, and mood in a single word: `Ngilondoloze ifayela` (I have saved the file). Restructure English sentences; do not translate word for word.
- Nouns belong to noun classes (umu-/aba-, isi-/izi-, i(li)-/ama-, in-/izin-, ubu-, uku-, and others). The class governs agreement on adjectives, verbs, possessives, and demonstratives. A class error shows up in every agreeing word.
- Use established Zulu terms (from the Zulu National Lexicography Unit and PanSALB's terminology work) rather than raw English borrowings where one exists; adapt loanwords to Zulu spelling.
- Re-express idioms and proverbs (izaga) by meaning.

**Grammar that trips translators.**

- Concord prefixes must match the class of the subject and object in the verb, adjective, and possessive.
- Writing is conjunctive: write `ngiyakuthanda` as one word and do not split the prefixes. Splitting words is an error (compare disjunctive Sotho-Tswana languages such as [[locale-tn-za]]).
- The locative is formed with the prefix `e-` and a suffix `-ini` or by other patterns (`ekhaya`, `ebhukwini`).
- Plurals: one and other categories (the plural is shown by the class prefix). See [[unicode-messageformat]].

**Register.**

- `Wena` is "you" (singular) and `nina` is the plural. Politeness is carried by the plural forms for elders (`Sawubona` to one person, `Sanibonani` to more than one), titles (`Baba`, `Mama`, `Mnumzane`, `Nkosikazi`), and the traditional avoidance of certain words (ukuhlonipha). Use polite plural forms in public text.
- UI commands use the imperative; the plural imperative ends in `-ni` (`Gcinani`).

**Orthography and typography.**

- Click consonants are written `c`, `q`, `x` (and their combinations `gc`, `nc`, `ngc`, `ch`, `qh`, `xh`); do not substitute them with English sounds. Tones are not written.
- Dates `17 Okthoba 2026`; currency rand (`R`); 24-hour clock; check CLDR for number separators in South Africa.

## Common pitfalls

- Splitting conjunctive words.
- Wrong noun-class concords.
- Replacing click letters.
- Keeping English word order.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
- Zulu National Lexicography Unit and the Dictionary of the Zulu language
