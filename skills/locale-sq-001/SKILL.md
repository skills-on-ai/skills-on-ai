---
name: locale-sq-001
description: Use when working with the Albanian locale (`sq-001`) — its endonym Shqip, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Albanian (sq-001)

Reference data for the **Albanian** locale — endonym **Shqip**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sq-001`
- **ISO 639-1:** `sq`
- **ISO 639-3:** `sqi`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 7,500,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 8,500,000

## Regional variants

This is the base/macro locale for Albanian. Region-specific variants in this dataset:

- [[locale-sq-al]] (Albanian (Albania))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Albanian is an independent branch of the Indo-European family, written in the Latin alphabet with the letters ç and ë. The standard (Standard Albanian) is based on the Tosk dialect, set in 1972 and maintained by the Albanian Academy of Sciences. See [[locale-sq-al]].

**Translate ideas, not words.**

- Albanian is inflected with five cases (nominative, accusative, genitive, dative, ablative) and a definite article suffix. Restructure English sentences rather than translating word by word.
- Albanian drops subject pronouns when the verb ending shows them.
- Avoid raw English and Italian loanwords where an Albanian term exists.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Three genders (masculine, feminine, neuter). The definite article is a suffix that varies by gender, number, and case: `libri`, `libra`, `libri i ri`.
- A linking article (`i`, `e`, `të`, `së`) precedes adjectives and genitive nouns and agrees with the head noun: `libri i ri`, `shtëpia e madhe`.
- Verbs have many tenses and moods, including the admirative mood for surprise or reported information.

**Register.**

- `Ju` (polite or plural) is the "you" for UI and public text; `ti` is informal. Do not mix.
- UI commands use the polite imperative (`Ruani`) or the infinitive-like form (`Ruaj`).

**Orthography and typography.**

- Use ç and ë; never replace them with c and e.
- Quotation marks `„…“` or `«…»`; decimal comma; dates `17 tetor 2026`; months lowercase.

## Common pitfalls

- Dropping ç and ë.
- Missing the definite suffix or the linking article.
- Mixing ju and ti.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Academy of Sciences of Albania, Fjalori i gjuhës shqipe
- Microsoft Localization Style Guide, Albanian (https://aka.ms/albanian-styleguide)
