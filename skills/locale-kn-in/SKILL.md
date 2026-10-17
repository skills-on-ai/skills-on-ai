---
name: locale-kn-in
description: Use when working with the Kannada (India) locale (`kn-IN`) — its endonym ಕನ್ನಡ (ಭಾರತ), Kannada script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kannada (India) (kn-IN)

Reference data for the **Kannada (India)** locale — endonym **ಕನ್ನಡ (ಭಾರತ)**, written in the Kannada script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kn-IN`
- **ISO 639-1:** `kn`
- **ISO 639-3:** `kan`
- **Script:** Knda (Kannada)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 44,000,000
- **L2 (additional):** 15,000,000
- **L1+L2 (total):** 59,000,000

## Base locale

This is a regional variant of [[locale-kn-001]] (Kannada), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-kn-001]] with the conventions of India (Karnataka).

- **Formats:** rupee (₹), Indian grouping, dates DD/MM/YYYY; the Kannada calendar and Ugadi festival dates are cultural.
- **Context:** Kannada is the official language of Karnataka; Karnataka law requires Kannada on signage in some contexts. Check the requirements for the product.
- **Dialects:** northern (Dharwad), southern (Mysore), and coastal varieties differ in speech; use the standard written form.

## Common pitfalls

- Mixing dialect forms into formal copy.
- Using Tamil or Telugu characters or spellings.
- The general pitfalls in [[locale-kn-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
