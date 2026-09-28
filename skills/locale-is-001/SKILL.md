---
name: locale-is-001
description: Use when working with the Icelandic locale (`is-001`) — its endonym Íslenska, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Icelandic (is-001)

Reference data for the **Icelandic** locale — endonym **Íslenska**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `is-001`
- **ISO 639-1:** `is`
- **ISO 639-3:** `isl`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 314,000
- **L2 (additional):** 50,000
- **L1+L2 (total):** 364,000

## Regional variants

This is the base/macro locale for Icelandic. Region-specific variants in this dataset:

- [[locale-is-is]] (Icelandic (Iceland))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `t = 0 and i % 10 = 1 and i % 100 != 11 or t % 10 = 1 and t % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
