---
name: locale-ca-es
description: Use when working with the Catalan (Spain) locale (`ca-ES`) — its endonym Català (Espanya), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Catalan (Spain) (ca-ES)

Reference data for the **Catalan (Spain)** locale — endonym **Català (Espanya)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ca-ES`
- **ISO 639-1:** `ca`
- **ISO 639-3:** `cat`
- **Script:** Latn (Latin)
- **Region:** ES (Spain)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 10,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
