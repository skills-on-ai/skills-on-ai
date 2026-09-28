---
name: locale-sl-si
description: Use when working with the Slovenian (Slovenia) locale (`sl-SI`) — its endonym Slovenščina (Slovenija), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Slovenian (Slovenia) (sl-SI)

Reference data for the **Slovenian (Slovenia)** locale — endonym **Slovenščina (Slovenija)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sl-SI`
- **ISO 639-1:** `sl`
- **ISO 639-3:** `slv`
- **Script:** Latn (Latin)
- **Region:** SI (Slovenia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,500,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 2,800,000

## Base locale

This is a regional variant of [[locale-sl-001]] (Slovenian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **other** (4 forms).

- **one** — `v = 0 and i % 100 = 1` (e.g. 1, 101, 201, 301, …)
- **two** — `v = 0 and i % 100 = 2` (e.g. 2, 102, 202, 302, …)
- **few** — `v = 0 and i % 100 = 3..4 or v != 0` (e.g. 3, 4, 103, 104, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
