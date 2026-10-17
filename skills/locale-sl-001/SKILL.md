---
name: locale-sl-001
description: Use when working with the Slovenian locale (`sl-001`) — its endonym Slovenščina, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Slovenian (sl-001)

Reference data for the **Slovenian** locale — endonym **Slovenščina**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sl-001`
- **ISO 639-1:** `sl`
- **ISO 639-3:** `slv`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,500,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 2,800,000

## Regional variants

This is the base/macro locale for Slovenian. Region-specific variants in this dataset:

- [[locale-sl-si]] (Slovenian (Slovenia))

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **other** (4 forms).

- **one** — `v = 0 and i % 100 = 1` (e.g. 1, 101, 201, 301, …)
- **two** — `v = 0 and i % 100 = 2` (e.g. 2, 102, 202, 302, …)
- **few** — `v = 0 and i % 100 = 3..4 or v != 0` (e.g. 3, 4, 103, 104, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Slovene is a South Slavic language written in the Latin script with č, š, ž. It has a dual number and six cases. The Fran Ramovš Institute of the Slovenian Language (ZRC SAZU) maintains the norm, and the online dictionary portal Fran (https://www.fran.si) is the standard reference. See [[locale-sl-si]].

**Translate ideas, not words.**

- Slovene is highly inflected. Restructure English sentences rather than translating word by word.
- Slovene prefers verbs and active constructions; avoid heavy nominalizations and English passives.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- The dual: use it for exactly two items or people (`dva datoteki`, `midva`, `oba`). Plural categories in CLDR: one, two, few, and other. See [[unicode-messageformat]].
- Six cases (nominative, genitive, dative, accusative, locative, instrumental) and three genders.
- Verbs have aspect; adjectives and nouns agree in gender, number, and case.

**Register.**

- "Ti" is informal and "vi" is polite (capitalized in letters to one person). UI and public text commonly use "vi" or an impersonal style; consumer apps often use "ti". Do not mix.
- UI commands use the imperative (`Shranite` with vi, `Shrani` with ti) or the infinitive.

**Orthography and typography.**

- Quotation marks `„…“`; dates `17. oktober 2026`; decimal comma; period or space for thousands; the euro (`12,50 €`) since 2007.
- Months, days, and nationalities are lowercase; titles use sentence case.

## Common pitfalls

- Ignoring the dual number.
- Using Croatian or Serbian vocabulary.
- Mixing vi and ti.
- Missing diacritics (č, š, ž).

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Fran portal (https://www.fran.si), ZRC SAZU
- Microsoft Localization Style Guide, Slovenian (https://aka.ms/slovenian-styleguide)
