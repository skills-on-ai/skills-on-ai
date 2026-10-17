---
name: locale-et-001
description: Use when working with the Estonian locale (`et-001`) — its endonym Eesti, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Estonian (et-001)

Reference data for the **Estonian** locale — endonym **Eesti**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `et-001`
- **ISO 639-1:** `et`
- **ISO 639-3:** `est`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,100,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 1,300,000

## Regional variants

This is the base/macro locale for Estonian. Region-specific variants in this dataset:

- [[locale-et-ee]] (Estonian (Estonia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Estonian is an agglutinative Uralic language written in the Latin alphabet with õ, ä, ö, ü, š, ž. The Institute of the Estonian Language (EKI) publishes the standard (Eesti õigekeelsussõnaraamat, ÕS, https://www.eki.ee). See [[locale-et-ee]].

**Translate ideas, not words.**

- Estonian has fourteen cases and no grammatical gender or articles. English prepositional phrases become case suffixes or postpositions: `failis` (in the file), `failist` (from the file), `faili` (genitive object).
- Compound nouns are written as one word (`kasutajakonto`); splitting them is an error.
- Estonian prefers verbs and simple sentences; English noun stacks become genitive chains or compounds.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Estonian has three degrees of sound length, shown by single or double letters in many words; never drop doubled letters.
- The partitive case is used after numerals (`viis faili`). Plural categories: one and other. See [[unicode-messageformat]].
- Consonant gradation changes the stem (`lukk`, `luku`).

**Register.**

- Estonian has `sina` (informal) and `teie` (formal or plural). Informal `sina` is used widely, including in much customer service and consumer text; `teie` is reserved for formal letters and official contexts. Do not mix.
- UI commands use the imperative (`Salvesta`) or the `-ma` infinitive.

**Orthography and typography.**

- Quotation marks `„…“`; dates `17. oktoober 2026` (month in the nominative); times `kell 17.30`; decimal comma; non-breaking space for thousands; currency `12,50 €`.
- Use õ, ä, ö, ü, š, ž; never replace them with o, a, u, s, z.

## Common pitfalls

- Splitting compounds.
- Using the nominative plural after numerals.
- Dropping doubled consonants or vowels.
- Mixing sina and teie.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institute of the Estonian Language, Eesti õigekeelsussõnaraamat ÕS (https://www.eki.ee)
- Microsoft Localization Style Guide, Estonian (https://aka.ms/estonian-styleguide)
