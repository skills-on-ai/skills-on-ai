---
name: locale-pt-001
description: Use when working with the Portuguese locale (`pt-001`) — its endonym Português, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Portuguese (pt-001)

Reference data for the **Portuguese** locale — endonym **Português**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pt-001`
- **ISO 639-1:** `pt`
- **ISO 639-3:** `por`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 230,000,000
- **L2 (additional):** 30,000,000
- **L1+L2 (total):** 260,000,000

## Regional variants

This is the base/macro locale for Portuguese. Region-specific variants in this dataset:

- [[locale-pt-br]] (Portuguese (Brazil))
- [[locale-pt-pt]] (Portuguese (Portugal))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0..1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
