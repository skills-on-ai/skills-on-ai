---
name: locale-pa-in
description: Use when working with the Punjabi (India) locale (`pa-IN`) — its endonym ਪੰਜਾਬੀ (ਭਾਰਤ), Gurmukhi script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Punjabi (India) (pa-IN)

Reference data for the **Punjabi (India)** locale — endonym **ਪੰਜਾਬੀ (ਭਾਰਤ)**, written in the Gurmukhi script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `pa-IN`
- **ISO 639-1:** `pa`
- **ISO 639-3:** `pan`
- **Script:** Guru (Gurmukhi)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 33,000,000
- **L2 (additional):** 10,000,000
- **L1+L2 (total):** 43,000,000

## Base locale

This is a regional variant of [[locale-pa-001]] (Punjabi), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0..1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-pa-001]] with the conventions of India (Punjab), using Gurmukhi.

- **Formats:** rupee (₹), Indian grouping, dates DD/MM/YYYY; the Nanakshahi and Vikrami calendars are used for religious dates.
- **Context:** Punjabi is the official language of Punjab and widely used in the diaspora; Sikh terminology should be used with care.
- **Names:** Sikh names often include Singh or Kaur; keep them as given.

## Common pitfalls

- Using Shahmukhi (Arabic script) for an Indian audience.
- Dropping Singh/Kaur from names or mis-gendering them.
- The general pitfalls in [[locale-pa-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
