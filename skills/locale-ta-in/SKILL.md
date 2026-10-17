---
name: locale-ta-in
description: Use when working with the Tamil (India) locale (`ta-IN`) — its endonym தமிழ் (இந்தியா), Tamil script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tamil (India) (ta-IN)

Reference data for the **Tamil (India)** locale — endonym **தமிழ் (இந்தியா)**, written in the Tamil script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ta-IN`
- **ISO 639-1:** `ta`
- **ISO 639-3:** `tam`
- **Script:** Taml (Tamil)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 69,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 75,000,000

## Base locale

This is a regional variant of [[locale-ta-001]] (Tamil), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ta-001]] with the conventions of India (Tamil Nadu).

- **Formats:** rupee (₹), Indian grouping, dates DD/MM/YYYY; the Tamil calendar is used for Pongal and Tamil New Year.
- **Context:** Tamil is the official language of Tamil Nadu and Puducherry; the Tamil Nadu government publishes official terminology.
- **Tone:** polite and respectful; strong language pride, so avoid unnecessary English or Hindi where a Tamil term exists.

## Common pitfalls

- Using Sri Lankan Tamil vocabulary for a Tamil Nadu audience without checking.
- Using Hindi characters or terms.
- The general pitfalls in [[locale-ta-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
