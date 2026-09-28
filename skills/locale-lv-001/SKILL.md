---
name: locale-lv-001
description: Use when working with the Latvian locale (`lv-001`) — its endonym Latviešu, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Latvian (lv-001)

Reference data for the **Latvian** locale — endonym **Latviešu**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lv-001`
- **ISO 639-1:** `lv`
- **ISO 639-3:** `lav`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,500,000
- **L2 (additional):** 600,000
- **L1+L2 (total):** 2,100,000

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **other** (3 forms).

- **zero** — `n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19` (e.g. 0, 10~20, 30, 40, …)
- **one** — `n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 2~9, 22~29, 102, 1002, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
