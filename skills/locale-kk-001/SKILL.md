---
name: locale-kk-001
description: Use when working with the Kazakh locale (`kk-001`) — its endonym Қазақ тілі, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kazakh (kk-001)

Reference data for the **Kazakh** locale — endonym **Қазақ тілі**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kk-001`
- **ISO 639-1:** `kk`
- **ISO 639-3:** `kaz`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 16,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 19,000,000

## Regional variants

This is the base/macro locale for Kazakh. Region-specific variants in this dataset:

- [[locale-kk-kz]] (Kazakh (Kazakhstan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Kazakh is a Turkic language written in Cyrillic (with additional letters ә, ғ, қ, ң, ө, ұ, ү, һ, і) in Kazakhstan. The state has planned a transition to a Latin-based alphabet, with revisions and a long timeline; use Cyrillic unless the project requires Latin. See [[locale-kk-kz]]. Kazakh in China uses an Arabic-based script, which is out of scope here.

**Translate ideas, not words.**

- Kazakh is agglutinative with vowel harmony and subject-object-verb order. Do not translate through Russian; reorder and restructure English sentences.
- Use Kazakh terminology from the national terminology commission rather than raw Russian loanwords when a term exists.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony (front/back); seven cases; no gender; no plural after numerals.
- `Сіз` is the polite form for UI and public text; `сен` is informal.

**Orthography and typography.**

- Use the Kazakh letters ә, ғ, қ, ң, ө, ұ, ү, һ, і; never replace them with Russian look-alikes.
- Currency tenge (`₸`); decimal comma; dates `2026 жылғы 17 қазан`; 24-hour clock; quotation marks `«…»`.

## Common pitfalls

- Replacing Kazakh letters with Russian look-alikes.
- Using Russian grammar or vocabulary.
- Mixing Cyrillic and Latin alphabets without a requirement.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- National Terminology Commission and the A. Baitursynuly Institute of Linguistics, Kazakhstan
- Microsoft Localization Style Guide, Kazakh (https://aka.ms/kazakh-styleguide)
