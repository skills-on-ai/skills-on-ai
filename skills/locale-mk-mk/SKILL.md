---
name: locale-mk-mk
description: Use when working with the Macedonian (North Macedonia) locale (`mk-MK`) — its endonym Македонски (Северна Македонија), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Macedonian (North Macedonia) (mk-MK)

Reference data for the **Macedonian (North Macedonia)** locale — endonym **Македонски (Северна Македонија)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mk-MK`
- **ISO 639-1:** `mk`
- **ISO 639-3:** `mkd`
- **Script:** Cyrl (Cyrillic)
- **Region:** MK (North Macedonia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,700,000
- **L2 (additional):** 1,800,000
- **L1+L2 (total):** 3,500,000

## Base locale

This is a regional variant of [[locale-mk-001]] (Macedonian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
