---
name: locale-fr-ch
description: Use when working with the French (Switzerland) locale (`fr-CH`) — its endonym Français (Suisse), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (Switzerland) (fr-CH)

Reference data for the **French (Switzerland)** locale — endonym **Français (Suisse)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-CH`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** CH (Switzerland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,000,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 2,300,000

## Base locale

This is a regional variant of [[locale-fr-001]] (French), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fr-001]] with Swiss conventions. French is one of four national languages; Swiss federal French follows translation of German-language sources, which affects terminology.

- **Numbers:** "septante" (70), "nonante" (90), and "huitante" (80, in Vaud, Valais, and Fribourg) are used; written "quatre-vingts" is also current. Verify the target canton.
- **Currency:** Swiss franc (CHF), written "CHF 12.50" or "12 fr. 50"; check CLDR `fr-CH` for decimal and grouping separators.
- **Vocabulary:** "natel" (mobile, older), "déjeuner / dîner / souper", "cornet" (bag), "bancomat", "pharmacie", "Confédération", "Conseil fédéral", "canton". Official federal French follows the Federal Chancellery's terminology.
- **Gender-fair language:** the Federal Chancellery publishes guidelines for gender-fair language; use them for federal and cantonal materials.
- **No ß or German-specific letters:** all Swiss languages use the standard Latin alphabet with local accents only.

## Common pitfalls

- Using France-only numbers ("soixante-dix") for a Swiss audience.
- Using a euro sign or euro formats in Swiss material.
- The general pitfalls in [[locale-fr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
- Federal Chancellery (Switzerland), Guide de formulation non sexiste / gender-fair language guidance
