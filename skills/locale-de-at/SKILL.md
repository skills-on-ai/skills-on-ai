---
name: locale-de-at
description: Use when working with the German (Austria) locale (`de-AT`) — its endonym Deutsch (Österreich), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: German (Austria) (de-AT)

Reference data for the **German (Austria)** locale — endonym **Deutsch (Österreich)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `de-AT`
- **ISO 639-1:** `de`
- **ISO 639-3:** `deu`
- **Script:** Latn (Latin)
- **Region:** AT (Austria)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 8,800,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 9,000,000

## Base locale

This is a regional variant of [[locale-de-001]] (German), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-de-001]] with Austrian conventions. Austrian Standard German has official vocabulary documented in the Österreichisches Wörterbuch and in the Austrian federal legal terminology.

- **Vocabulary:** "Jänner" (not "Januar") for January in official and everyday use, "heuer" (this year), "Paradeiser" (tomato), "Erdäpfel" (potatoes), "Topfen" (quark), "Sackerl" (bag), "Matura" (school-leaving exam), "Karenz" (parental leave). Use the terms familiar to the audience; avoid Bavarian dialect.
- **Orthography:** the ß is used as in Germany; "Sie" is the default in business and "du" is common in informal and workplace contexts.
- **Formats:** day.month.year, 24-hour clock, decimal comma, euro; "Uhr" in time expressions; quotation marks `„…“`.
- **Law and institutions:** use official Austrian institution names (Bundeskanzleramt, Sozialversicherung, ÖNORM standards).
- **Tone:** polite and a bit more formal than in Germany; titles (Herr Magister, Frau Doktor) are used frequently and should be kept in addresses.

## Common pitfalls

- Writing "Januar" in Austrian official copy.
- Dropping academic and professional titles in correspondence.
- The general pitfalls in [[locale-de-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Österreichisches Wörterbuch (ÖWB)
- Microsoft Localization Style Guide, German (https://aka.ms/german-styleguide)
