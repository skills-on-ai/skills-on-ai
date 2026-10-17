---
name: locale-it-it
description: Use when working with the Italian (Italy) locale (`it-IT`) — its endonym Italiano (Italia), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Italian (Italy) (it-IT)

Reference data for the **Italian (Italy)** locale — endonym **Italiano (Italia)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `it-IT`
- **ISO 639-1:** `it`
- **ISO 639-3:** `ita`
- **Script:** Latn (Latin)
- **Region:** IT (Italy)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 55,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 58,000,000

## Base locale

This is a regional variant of [[locale-it-001]] (Italian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-it-001]] with the conventions of Italy.

- **Institutions:** use the official Italian names for bodies and laws (Agenzia delle Entrate, INPS, Codice civile) without translating them; the Italian Constitution and EU law have official Italian texts that should be quoted unchanged.
- **Formats:** euro (€) after the amount; day/month/year; 24-hour clock; decimal comma and period for thousands.
- **Tone:** formal in public administration (the burocratese register is wordy and best avoided in new text; Italian public-administration style handbooks push for clarity); friendly "tu" appears in tech and retail.
- **Regional note:** Italy has strong regional vocabulary (for example "cellulare" is standard; "telefonino" is common), but written standard Italian is uniform.

## Common pitfalls

- Importing bureaucratic phrasing ("si prega di voler cortesemente") into UI text.
- Using English capitalization for headings.
- The general pitfalls in [[locale-it-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Accademia della Crusca (https://accademiadellacrusca.it)
- Microsoft Localization Style Guide, Italian (https://aka.ms/italian-styleguide)
