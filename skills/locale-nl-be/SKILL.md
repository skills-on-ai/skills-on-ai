---
name: locale-nl-be
description: Use when working with the Dutch (Belgium) locale (`nl-BE`) — its endonym Nederlands (België), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Dutch (Belgium) (nl-BE)

Reference data for the **Dutch (Belgium)** locale — endonym **Nederlands (België)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nl-BE`
- **ISO 639-1:** `nl`
- **ISO 639-3:** `nld`
- **Script:** Latn (Latin)
- **Region:** BE (Belgium)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 6,500,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 7,000,000

## Base locale

This is a regional variant of [[locale-nl-001]] (Dutch), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-nl-001]] with Flemish (Belgian Dutch) conventions. Standard Flemish writing follows the same Taalunie spelling, but vocabulary, politeness, and some grammar differ.

- **Register:** "u" is more widespread in Flanders than in the Netherlands, especially in service text; "je" is accepted in consumer content. The spoken "gij/ge" is colloquial and not used in standard writing.
- **Vocabulary:** "GSM" (mobile phone), "kot" (student room), "schrijven" and other region-specific words. Use terms that Flemish readers recognize; Taalunie's Woordenlijst marks region-specific words.
- **Institutions:** Belgium has three languages; keep official Dutch names for Flemish bodies and bilingual forms for Brussels.
- **Formats:** euro; day-month-year; decimal comma; 24-hour clock.

## Common pitfalls

- Using Dutch-Netherlands vocabulary and the casual tone of the Netherlands in formal Flemish contexts.
- Using spoken "gij" forms in writing.
- The general pitfalls in [[locale-nl-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Taalunie, Woordenlijst Nederlandse Taal (https://woordenlijst.org)
- Taaladvies.net (https://taaladvies.net)
