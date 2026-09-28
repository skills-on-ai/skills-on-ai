---
name: locale-pl-pl
description: Use when working with the Polish (Poland) locale (`pl-PL`) — its endonym Polski (Polska), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Polish (Poland) (pl-PL)

Reference data for the **Polish (Poland)** locale — endonym **Polski (Polska)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pl-PL`
- **ISO 639-1:** `pl`
- **ISO 639-3:** `pol`
- **Script:** Latn (Latin)
- **Region:** PL (Poland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 40,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 43,000,000

## Base locale

This is a regional variant of [[locale-pl-001]] (Polish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
