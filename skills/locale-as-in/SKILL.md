---
name: locale-as-in
description: Use when working with the Assamese (India) locale (`as-IN`) — its endonym অসমীয়া (ভাৰত), Bengali script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Assamese (India) (as-IN)

Reference data for the **Assamese (India)** locale — endonym **অসমীয়া (ভাৰত)**, written in the Bengali script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `as-IN`
- **ISO 639-1:** `as`
- **ISO 639-3:** `asm`
- **Script:** Beng (Bengali)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 15,000,000
- **L2 (additional):** 8,000,000
- **L1+L2 (total):** 23,000,000

## Base locale

This is a regional variant of [[locale-as-001]] (Assamese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-as-001]] with the conventions of India (Assam).

- **Formats:** rupee (₹), Indian grouping, dates DD/MM/YYYY; the Assamese calendar and Bihu festival dates are cultural.
- **Context:** Assamese is the official language of Assam alongside Bodo (and Bengali in the Barak Valley); keep place names in the official Assamese spelling.
- **Tone:** polite and respectful; formal-honorific forms for elders.

## Common pitfalls

- Using Bengali place-name spellings for Assamese towns.
- Using Bengali letters for ৰ and ৱ.
- The general pitfalls in [[locale-as-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
