---
name: locale-hsb-de
description: Use when working with the Upper Sorbian (Germany) locale (`hsb-DE`) — its endonym Hornjoserbšćina (Němska), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Upper Sorbian (Germany) (hsb-DE)

Reference data for the **Upper Sorbian (Germany)** locale — endonym **Hornjoserbšćina (Němska)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hsb-DE`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `hsb`
- **Script:** Latn (Latin)
- **Region:** DE (Germany)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 13,000
- **L2 (additional):** 7,000
- **L1+L2 (total):** 20,000

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **other** (4 forms).

- **one** — `v = 0 and i % 100 = 1 or f % 100 = 1` (e.g. 1, 101, 201, 301, …)
- **two** — `v = 0 and i % 100 = 2 or f % 100 = 2` (e.g. 2, 102, 202, 302, …)
- **few** — `v = 0 and i % 100 = 3..4 or f % 100 = 3..4` (e.g. 3, 4, 103, 104, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
