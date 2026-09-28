---
name: locale-ur-001
description: Use when working with the Urdu locale (`ur-001`) — its endonym اردو, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Urdu (ur-001)

Reference data for the **Urdu** locale — endonym **اردو**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ur-001`
- **ISO 639-1:** `ur`
- **ISO 639-3:** `urd`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 78,000,000
- **L2 (additional):** 230,000,000
- **L1+L2 (total):** 308,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Urdu. Region-specific variants in this dataset:

- [[locale-ur-pk]] (Urdu (Pakistan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
