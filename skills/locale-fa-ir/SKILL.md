---
name: locale-fa-ir
description: Use when working with the Persian (Iran) locale (`fa-IR`) — its endonym فارسی (ایران), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
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

## Translating into this locale

Apply [[locale-fa-001]] with the conventions of Iran.

- **Calendar and formats:** Solar Hijri dates in daily life and government; Persian digits; rial or toman as the project specifies; decimal separator `٫` (Arabic decimal) or `.` and thousands separator `٬` or `,` per CLDR `fa`.
- **Terminology:** Iranian official content follows the Academy's terms and government usage.
- **Tone:** polite, indirect, and elaborate; honorific phrases are natural in correspondence.
- **Content context:** content in Iran is subject to local legal and content rules; check them for sensitive text and imagery.

## Common pitfalls

- Using Dari or Tajik vocabulary for an Iranian audience.
- Using Gregorian dates only on official forms.
- The general pitfalls in [[locale-fa-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, calendar, and currency formats (https://cldr.unicode.org)
