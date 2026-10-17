---
name: locale-ka-001
description: Use when working with the Georgian locale (`ka-001`) — its endonym ქართული, Georgian script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Georgian (ka-001)

Reference data for the **Georgian** locale — endonym **ქართული**, written in the Georgian script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ka-001`
- **ISO 639-1:** `ka`
- **ISO 639-3:** `kat`
- **Script:** Geor (Georgian)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,800,000
- **L2 (additional):** 1,200,000
- **L1+L2 (total):** 5,000,000

## Regional variants

This is the base/macro locale for Georgian. Region-specific variants in this dataset:

- [[locale-ka-ge]] (Georgian (Georgia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Georgian is a Kartvelian language written in the Mkhedruli script, which is unicase (no capital letters). It has a complex verb system and an unusual case system. See [[locale-ka-ge]].

**Translate ideas, not words.**

- Georgian verbs agree with the subject and objects (polypersonal agreement) and change by tense group. Do not translate verb by verb from English; check conjugations in a dictionary.
- Georgian uses postpositions and case endings (nominative, ergative, dative, genitive, instrumental, adverbial, vocative). The subject takes the ergative case in some tenses (aorist). Choose the case that fits the tense series.
- Use Georgian terminology approved by the Arnold Chikobava Institute of Linguistics where it exists, and avoid Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- No grammatical gender and no articles. Plural suffix `-ები`.
- `თქვენ` is the polite or plural "you" for UI and public text; `შენ` is informal.

**Orthography and typography.**

- Mkhedruli has no capitals; there is a decorative uppercase-style form (Mtavruli) used in headings and logos only; use it only where the design requires it.
- Currency lari (`₾`); decimal comma; dates `17 ოქტომბერი, 2026`; 24-hour clock; quotation marks `„…“`.

## Common pitfalls

- Using Russian syntax or vocabulary.
- Using the wrong case after postpositions.
- Capitalizing Georgian text as in Latin scripts.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Arnold Chikobava Institute of Linguistics, Georgian dictionaries
- Microsoft Localization Style Guide, Georgian (https://aka.ms/georgian-styleguide)
