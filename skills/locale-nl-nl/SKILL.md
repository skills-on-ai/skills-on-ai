---
name: locale-nl-nl
description: Use when working with the Dutch (Netherlands) locale (`nl-NL`) — its endonym Nederlands (Nederland), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Dutch (Netherlands) (nl-NL)

Reference data for the **Dutch (Netherlands)** locale — endonym **Nederlands (Nederland)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nl-NL`
- **ISO 639-1:** `nl`
- **ISO 639-3:** `nld`
- **Script:** Latn (Latin)
- **Region:** NL (Netherlands)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 17,000,000
- **L2 (additional):** 800,000
- **L1+L2 (total):** 17,800,000

## Base locale

This is a regional variant of [[locale-nl-001]] (Dutch), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-nl-001]] with the conventions of the Netherlands.

- **Register:** "je/jij" is the default for consumer content, with "u" for formal sectors.
- **Vocabulary:** Dutch-Netherlands usage ("mobiel" or "telefoon" for a mobile phone, "e-mailadres"); official terms follow Dutch government usage.
- **Formats:** euro, written "€ 12,50" in common usage; day-month-year; 24-hour clock; decimal comma.
- **Tone:** direct, informal, and brief; humor is more common than in Belgium.

## Common pitfalls

- Using Flemish forms ("GSM", "gij", "ge") in material for the Netherlands.
- Overly formal wording.
- The general pitfalls in [[locale-nl-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Taalunie, Woordenlijst Nederlandse Taal (https://woordenlijst.org)
- Microsoft Localization Style Guide, Dutch (https://aka.ms/dutch-styleguide)
