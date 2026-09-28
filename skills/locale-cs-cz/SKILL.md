---
name: locale-cs-cz
description: Use when working with the Czech (Czech Republic) locale (`cs-CZ`) — its endonym Čeština (Česko), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Czech (Czech Republic) (cs-CZ)

Reference data for the **Czech (Czech Republic)** locale — endonym **Čeština (Česko)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `cs-CZ`
- **ISO 639-1:** `cs`
- **ISO 639-3:** `ces`
- **Script:** Latn (Latin)
- **Region:** CZ (Czech Republic)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 9,800,000
- **L2 (additional):** 2,700,000
- **L1+L2 (total):** 12,000,000

## Base locale

This is a regional variant of [[locale-cs-001]] (Czech), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **few** — `i = 2..4 and v = 0` (e.g. 2~4)
- **many** — `v != 0`
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
