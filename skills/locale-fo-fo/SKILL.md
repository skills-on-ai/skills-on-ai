---
name: locale-fo-fo
description: Use when working with the Faroese (Faroe Islands) locale (`fo-FO`) — its endonym Føroyskt (Føroyar), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Faroese (Faroe Islands) (fo-FO)

Reference data for the **Faroese (Faroe Islands)** locale — endonym **Føroyskt (Føroyar)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fo-FO`
- **ISO 639-1:** `fo`
- **ISO 639-3:** `fao`
- **Script:** Latn (Latin)
- **Region:** FO (Faroe Islands)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 48,000
- **L2 (additional):** 25,000
- **L1+L2 (total):** 73,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Faroese (føroyskt) is a North Germanic language spoken in the Faroe Islands, where it is the national language alongside Danish. Its orthography, based on V. U. Hammershaimb's 1846 system, is etymological and has been stable. The Faroese Language Council (Málráðið) sets terminology policy. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Faroese uses native word formation like Icelandic; Danish loanwords are common in speech but the language policy prefers Faroese terms. Use Faroese terminology where it exists.
- Re-express idioms by meaning.

**Grammar.**

- Four cases, three genders, and definite article suffixes. Verbs conjugate for person and number; some verbs take dative or accusative subjects.
- Verb second in main clauses.

**Register.**

- "Tú" is the common singular and is used in most settings. Confirm any formal address form for official text with a native reviewer.

**Orthography and typography.**

- Keep the letters á, ð, í, ó, ú, ý, æ, ø; "ð" is silent in many positions but is written.
- Quotation marks `„…“`; decimal comma; dates "17. oktober 2026"; Danish krone (Faroese króna, pegged to the Danish krone).

## Common pitfalls

- Using Danish spellings where Faroese has its own.
- Dropping ð and accented letters.
- Not declining nouns and names.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Málráðið (Faroese Language Council)
- Føroyamálsdeildin, University of the Faroe Islands
