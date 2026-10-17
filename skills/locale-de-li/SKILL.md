---
name: locale-de-li
description: Use when working with the German (Liechtenstein) locale (`de-LI`) — its endonym Deutsch (Liechtenstein), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: German (Liechtenstein) (de-LI)

Reference data for the **German (Liechtenstein)** locale — endonym **Deutsch (Liechtenstein)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `de-LI`
- **ISO 639-1:** `de`
- **ISO 639-3:** `deu`
- **Script:** Latn (Latin)
- **Region:** LI (Liechtenstein)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 35,000
- **L2 (additional):** 4,000
- **L1+L2 (total):** 39,000

## Base locale

This is a regional variant of [[locale-de-001]] (German), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-de-001]] with Liechtenstein conventions. German is the sole official language; Alemannic dialects are spoken.

- **Orthography:** as in Switzerland, Liechtenstein does not use ß; write "ss".
- **Currency and formats:** the Swiss franc (CHF) is used; follow Swiss number formats (check CLDR `de-LI`), day.month.year, 24-hour clock.
- **Quotation marks:** `«…»` as in Switzerland, or `„…“` according to the publication.
- **Vocabulary:** closely follows Swiss and Austrian usage; keep Liechtenstein institution names (Landtag, Fürstliche Regierung) unchanged.
- **Tone:** polite and formal in official text; titles of the Princely House ("Seine Durchlaucht") are used in protocol.

## Common pitfalls

- Using ß or euro formats.
- Translating the names of Liechtenstein institutions.
- The general pitfalls in [[locale-de-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for de-LI (https://cldr.unicode.org)
