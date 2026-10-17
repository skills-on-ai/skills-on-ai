---
name: locale-sk-001
description: Use when working with the Slovak locale (`sk-001`) — its endonym Slovenčina, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Slovak (sk-001)

Reference data for the **Slovak** locale — endonym **Slovenčina**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sk-001`
- **ISO 639-1:** `sk`
- **ISO 639-3:** `slk`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 6,000,000

## Regional variants

This is the base/macro locale for Slovak. Region-specific variants in this dataset:

- [[locale-sk-sk]] (Slovak (Slovakia))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `i = 2..4 and v = 0` (e.g. 2~4)
- **many** — `v != 0`
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Slovak is a West Slavic language written in the Latin script with the diacritics á, ä, č, ď, é, í, ĺ, ľ, ň, ó, ô, ŕ, š, ť, ú, ý, ž. The Ľudovít Štúr Institute of Linguistics (Jazykovedný ústav Ľ. Štúra, SAV) maintains the norm. See [[locale-sk-sk]].

**Translate ideas, not words.**

- Slovak is highly inflected, with six cases (the vocative is rarely used) and three genders. Restructure English sentences.
- Slovak is close to Czech but not the same; do not translate through Czech. Words, spelling (`ä`, `ô`, `ľ`, `ĺ`, `ŕ`), and rhythm differ.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Plurals: one, few, many (decimals), and other categories (`1 súbor`, `2 súbory`, `5 súborov`). See [[unicode-messageformat]].
- The rhythmic law (rytmický zákon) forbids two consecutive long syllables in suffixes in some endings; check a grammar for the correct suffix form.
- Women's surnames take -ová (`Nováková`).
- Verbs have aspect; clitics occupy second position.

**Register.**

- Slovak has "vykanie" (formal "vy") and "tykanie" (informal "ty"). UI, banking, and public text use "vy"; consumer apps and youth brands may use "ty". Do not mix.
- UI commands use the imperative (`Uložte`) or the infinitive (`Uložiť`).

**Orthography and typography.**

- Quotation marks `„…“`. A non-breaking space follows single-letter prepositions (`k`, `s`, `v`, `z`, `o`, `u`) and sits between a number and a unit or currency (`12,50 €`).
- Numbers: decimal comma, non-breaking space for thousands; dates `17. októbra 2026`; 24-hour clock; the euro since 2009.
- Months, days, and nationalities are lowercase.

## Common pitfalls

- Using Czech words or letters (`ě`, `ř`, `ů`).
- Wrong plural forms after numerals.
- Mixing vy and ty.
- Missing the non-breaking space after single-letter words.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Jazykovedný ústav Ľudovíta Štúra, Slovak orthography rules (Pravidlá slovenského pravopisu)
- Microsoft Localization Style Guide, Slovak (https://aka.ms/slovak-styleguide)
