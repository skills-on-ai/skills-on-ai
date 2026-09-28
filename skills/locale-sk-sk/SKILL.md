---
name: locale-sk-sk
description: Use when working with the Slovak (Slovakia) locale (`sk-SK`) — its endonym Slovenčina (Slovensko), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Slovak (Slovakia) (sk-SK)

Reference data for the **Slovak (Slovakia)** locale — endonym **Slovenčina (Slovensko)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sk-SK`
- **ISO 639-1:** `sk`
- **ISO 639-3:** `slk`
- **Script:** Latn (Latin)
- **Region:** SK (Slovakia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 6,000,000

## Base locale

This is a regional variant of [[locale-sk-001]] (Slovak), the base/macro locale for this language.

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
