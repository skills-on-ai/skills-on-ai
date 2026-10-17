---
name: locale-mt-001
description: Use when working with the Maltese locale (`mt-001`) — its endonym Malti, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Maltese (mt-001)

Reference data for the **Maltese** locale — endonym **Malti**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mt-001`
- **ISO 639-1:** `mt`
- **ISO 639-3:** `mlt`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 520,000
- **L2 (additional):** 30,000
- **L1+L2 (total):** 550,000

## Regional variants

This is the base/macro locale for Maltese. Region-specific variants in this dataset:

- [[locale-mt-mt]] (Maltese (Malta))

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 0 or n % 100 = 3..10` (e.g. 0, 3~10, 103~109, 1003, …)
- **many** — `n % 100 = 11..19` (e.g. 11~19, 111~117, 1011, …)
- **other** — everything else (e.g. 20~35, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Maltese is a Semitic language written in the Latin alphabet with ċ, ġ, ħ, ż and the digraph għ, with many Romance (Sicilian, Italian) and English loanwords. The National Council for the Maltese Language (Kunsill Nazzjonali tal-Ilsien Malti) is the authority. See [[locale-mt-mt]].

**Translate ideas, not words.**

- Maltese has Semitic root-and-pattern word formation and Romance-origin vocabulary. Prefer established Maltese words over raw English borrowings, but accept English loans that are standard (`kompjuter`).
- Maltese is subject-verb-object but flexible. Use clitic pronouns attached to verbs and prepositions (`ktibtu`, `miegħi`, `għalik`).
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Two genders. The definite article `il-` assimilates to the following consonant for "sun letters" (`id-dar`, `ix-xemx`, `it-triq`) and becomes `l-` before vowels (`l-ajruport`).
- Broken plurals follow patterns (`ktieb`, `kotba`); check a dictionary. A dual exists for some nouns (`sentejn`, `jumejn`). Plurals: one, few, many, and other. See [[unicode-messageformat]].
- Verbs conjugate by person, with a perfect and imperfect, using prefixes and suffixes.

**Register.**

- Maltese has `int` (you, informal singular) and `intom` (plural); there is no formal singular like the French "vous". Formality is expressed through vocabulary and phrasing (`jekk jogħġbok`).
- UI commands use the imperative (`Salva`) or the infinitive-like noun.

**Orthography and typography.**

- Use ċ, ġ, ħ, ż and `għ`; never replace them with c, g, h, z. Capital forms are Ċ, Ġ, Ħ, Ż.
- Quotation marks `“…”`; dates `17 ta' Ottubru 2026` (using `ta'`); euro; check CLDR `mt` for number format.

## Common pitfalls

- Dropping Maltese letters.
- Missing the article assimilation (`il-dar` instead of `id-dar`).
- Using Italian or English syntax and word forms.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Kunsill Nazzjonali tal-Ilsien Malti, Taqsima tal-Ilsien Malti
- Microsoft Localization Style Guide, Maltese (https://aka.ms/maltese-styleguide)
