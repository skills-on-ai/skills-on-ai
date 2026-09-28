---
name: locale-ro-ro
description: Use when working with the Romanian (Romania) locale (`ro-RO`) — its endonym Română (România), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Romanian (Romania) (ro-RO)

Reference data for the **Romanian (Romania)** locale — endonym **Română (România)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ro-RO`
- **ISO 639-1:** `ro`
- **ISO 639-3:** `ron`
- **Script:** Latn (Latin)
- **Region:** RO (Romania)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 19,000,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 20,500,000

## Base locale

This is a regional variant of [[locale-ro-001]] (Romanian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `v != 0 or n = 0 or n != 1 and n % 100 = 1..19` (e.g. 0, 2~16, 101, 1001, …)
- **other** — everything else (e.g. 20~35, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
