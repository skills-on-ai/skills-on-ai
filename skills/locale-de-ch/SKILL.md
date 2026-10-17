---
name: locale-de-ch
description: Use when working with the German (Switzerland) locale (`de-CH`) — its endonym Deutsch (Schweiz), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: German (Switzerland) (de-CH)

Reference data for the **German (Switzerland)** locale — endonym **Deutsch (Schweiz)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `de-CH`
- **ISO 639-1:** `de`
- **ISO 639-3:** `deu`
- **Script:** Latn (Latin)
- **Region:** CH (Switzerland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,600,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 6,100,000

## Base locale

This is a regional variant of [[locale-de-001]] (German), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-de-001]] with Swiss conventions. Written Swiss Standard German (Schweizer Hochdeutsch) differs from German in Germany; Swiss German dialects (Schwiizertüütsch) are spoken and are not used in standard writing.

- **Orthography:** the Swiss do not use ß; write "ss" ("Strasse", "Fussball"). Capital ẞ is also not used.
- **Quotation marks:** `«…»` and `‹…›` are standard in Switzerland.
- **Numbers and currency:** Swiss franc (CHF); amounts are written "CHF 12.50" with a decimal point; the thousands separator is the apostrophe (`1’234.50`) in everyday use, but check CLDR `de-CH` and the product convention.
- **Vocabulary:** "Velo" (bicycle), "Billett" (ticket), "parkieren", "Trottoir", "Natel" (older word for mobile), "Znüni" (morning snack), "Spital" (hospital). Federal terminology follows the Federal Chancellery.
- **Register:** "Sie" is the default for service and "du" is common in informal and corporate culture; "Grüezi" and "Guten Tag" are both used in greetings.
- **Gender-inclusive language:** the Federal Chancellery issues guidelines for gender-fair language in federal texts; follow them for federal and cantonal content.

## Common pitfalls

- Writing ß in Swiss copy.
- Using German-Germany vocabulary (Fahrrad, Fahrkarte) where Swiss readers expect "Velo" and "Billett".
- The general pitfalls in [[locale-de-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Swiss Federal Chancellery, Leitfaden zum geschlechtergerechten Formulieren
- Swiss Federal Chancellery terminology database termdat (https://www.termdat.ch)
