---
name: locale-es-001
description: Use when working with the Spanish locale (`es-001`) — its endonym Español, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Spanish (es-001)

Reference data for the **Spanish** locale — endonym **Español**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `es-001`
- **ISO 639-1:** `es`
- **ISO 639-3:** `spa`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 519,000,000
- **L2 (additional):** 117,000,000
- **L1+L2 (total):** 636,000,000

## Regional variants

This is the base/macro locale for Spanish. Region-specific variants in this dataset:

- [[locale-es-419]] (Spanish (Latin America))
- [[locale-es-ar]] (Spanish (Argentina))
- [[locale-es-bo]] (Spanish (Bolivia))
- [[locale-es-cl]] (Spanish (Chile))
- [[locale-es-co]] (Spanish (Colombia))
- [[locale-es-cr]] (Spanish (Costa Rica))
- [[locale-es-do]] (Spanish (Dominican Republic))
- [[locale-es-ec]] (Spanish (Ecuador))
- [[locale-es-es]] (Spanish (Spain))
- [[locale-es-gt]] (Spanish (Guatemala))
- [[locale-es-hn]] (Spanish (Honduras))
- [[locale-es-mx]] (Spanish (Mexico))
- [[locale-es-ni]] (Spanish (Nicaragua))
- [[locale-es-pa]] (Spanish (Panama))
- [[locale-es-pe]] (Spanish (Peru))
- [[locale-es-pr]] (Spanish (Puerto Rico))
- [[locale-es-py]] (Spanish (Paraguay))
- [[locale-es-sv]] (Spanish (El Salvador))
- [[locale-es-us]] (Spanish (United States))
- [[locale-es-uy]] (Spanish (Uruguay))
- [[locale-es-ve]] (Spanish (Venezuela))

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
