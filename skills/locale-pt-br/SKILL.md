---
name: locale-pt-br
description: Use when working with the Portuguese (Brazil) locale (`pt-BR`) — its endonym Português (O Brasil), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Portuguese (Brazil) (pt-BR)

Reference data for the **Portuguese (Brazil)** locale — endonym **Português (O Brasil)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pt-BR`
- **ISO 639-1:** `pt`
- **ISO 639-3:** `por`
- **Script:** Latn (Latin)
- **Region:** BR (Brazil)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 203,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 206,000,000

## Base locale

This is a regional variant of [[locale-pt-001]] (Portuguese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0..1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
