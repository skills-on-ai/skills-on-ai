---
name: locale-it-ch
description: Use when working with the Italian (Switzerland) locale (`it-CH`) — its endonym Italiano (Svizzera), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Italian (Switzerland) (it-CH)

Reference data for the **Italian (Switzerland)** locale — endonym **Italiano (Svizzera)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `it-CH`
- **ISO 639-1:** `it`
- **ISO 639-3:** `ita`
- **Script:** Latn (Latin)
- **Region:** CH (Switzerland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 700,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 1,000,000

## Base locale

This is a regional variant of [[locale-it-001]] (Italian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-it-001]] with Swiss Italian conventions. Italian is one of four national languages and is mainly spoken in Ticino and southern Graubünden.

- **Terminology:** Swiss federal Italian is translated from German and French sources and follows the Federal Chancellery's terminology (for example "Confederazione", "Consiglio federale", "cantone", "Consiglio nazionale"). Use the official forms.
- **Currency and formats:** Swiss franc (CHF); check CLDR `it-CH` for the decimal and grouping separators, which differ from Italy.
- **Vocabulary:** Swiss Italian has some Germanisms and Gallicisms ("natel" for mobile phone in older usage) that are local; prefer standard terms in new text unless the project glossary uses them.
- **No ß or German-specific letters:** all Swiss languages use the standard Latin alphabet.

## Common pitfalls

- Using Italian-Italian administrative terms for Swiss institutions.
- Using euro formats in Swiss material.
- The general pitfalls in [[locale-it-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Swiss Federal Chancellery terminology database termdat (https://www.termdat.ch)
- Unicode CLDR locale data for `it-CH` (https://cldr.unicode.org)
