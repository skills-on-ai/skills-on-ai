---
name: locale-fa-ir
description: Use when working with the Persian (Iran) locale (`fa-IR`) — its endonym فارسی (ایران), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Persian (Iran) (fa-IR)

Reference data for the **Persian (Iran)** locale — endonym **فارسی (ایران)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `fa-IR`
- **ISO 639-1:** `fa`
- **ISO 639-3:** `fas`
- **Script:** Arab (Arabic)
- **Region:** IR (Iran)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 71,000,000
- **L2 (additional):** 20,000,000
- **L1+L2 (total):** 91,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-fa-001]] (Persian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
