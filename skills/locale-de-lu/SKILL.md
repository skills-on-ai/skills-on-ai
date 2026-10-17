---
name: locale-de-lu
description: Use when working with the German (Luxembourg) locale (`de-LU`) — its endonym Deutsch (Luxemburg), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: German (Luxembourg) (de-LU)

Reference data for the **German (Luxembourg)** locale — endonym **Deutsch (Luxemburg)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `de-LU`
- **ISO 639-1:** `de`
- **ISO 639-3:** `deu`
- **Script:** Latn (Latin)
- **Region:** LU (Luxembourg)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000
- **L2 (additional):** 450,000
- **L1+L2 (total):** 455,000

## Base locale

This is a regional variant of [[locale-de-001]] (German), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-de-001]] with Luxembourg conventions. German is one of three administrative languages (with Luxembourgish and French), used in the press and education; spoken Luxembourgish is not the written German standard.

- **Spelling:** standard German spelling with ß; "Luxemburg" is spelled with a "g" in German.
- **Formats:** euro, day.month.year, 24-hour clock, decimal comma; check CLDR `de-LU`.
- **Institutions:** official names are given in French first; keep the German forms used in Luxembourgish legislation (for example "Chamber" is "Abgeordnetenkammer").
- **Register:** "Sie" is the default; mixing in French or Luxembourgish phrases in German text is common in speech but not in formal writing.

## Common pitfalls

- Using Germany-only administrative terms for Luxembourg institutions.
- Mixing French and German forms inconsistently within one document.
- The general pitfalls in [[locale-de-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for de-LU (https://cldr.unicode.org)
