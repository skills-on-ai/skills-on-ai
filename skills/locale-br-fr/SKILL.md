---
name: locale-br-fr
description: Use when working with the Breton (France) locale (`br-FR`) — its endonym Brezhoneg (Frañs), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Breton (France) (br-FR)

Reference data for the **Breton (France)** locale — endonym **Brezhoneg (Frañs)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `br-FR`
- **ISO 639-1:** `br`
- **ISO 639-3:** `bre`
- **Script:** Latn (Latin)
- **Region:** FR (France)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 200,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 400,000

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n % 10 = 1 and n % 100 != 11,71,91` (e.g. 1, 21, 31, 41, …)
- **two** — `n % 10 = 2 and n % 100 != 12,72,92` (e.g. 2, 22, 32, 42, …)
- **few** — `n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99` (e.g. 3, 4, 9, 23, …)
- **many** — `n != 0 and n % 1000000 = 0` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 5~8, 10~20, 100, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
