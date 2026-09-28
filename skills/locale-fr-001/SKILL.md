---
name: locale-fr-001
description: Use when working with the French locale (`fr-001`) — its endonym Français, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (fr-001)

Reference data for the **French** locale — endonym **Français**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-001`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 75,000,000
- **L2 (additional):** 258,000,000
- **L1+L2 (total):** 334,000,000

## Regional variants

This is the base/macro locale for French. Region-specific variants in this dataset:

- [[locale-fr-ca]] (French (Canada))
- [[locale-fr-fr]] (French (France))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
