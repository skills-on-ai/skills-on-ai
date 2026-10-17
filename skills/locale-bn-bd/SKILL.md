---
name: locale-bn-bd
description: Use when working with the Bengali (Bangladesh) locale (`bn-BD`) — its endonym বাংলা (বাংলাদেশ), Bengali script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bengali (Bangladesh) (bn-BD)

Reference data for the **Bengali (Bangladesh)** locale — endonym **বাংলা (বাংলাদেশ)**, written in the Bengali script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bn-BD`
- **ISO 639-1:** `bn`
- **ISO 639-3:** `ben`
- **Script:** Beng (Bengali)
- **Region:** BD (Bangladesh)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 165,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 170,000,000

## Base locale

This is a regional variant of [[locale-bn-001]] (Bengali), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-bn-001]] with the conventions of Bangladesh. Bengali is the sole national and official language, and the Bangla Academy sets the standard.

- **Vocabulary:** Bangladesh Bengali uses many Perso-Arabic words: পানি (water, India: জল), গোসল (bath, India: স্নান), দাওয়াত (invitation, India: নিমন্ত্রণ), রোজা (fasting).
- **Currency and calendar:** taka (৳ or টাকা); the Bangla calendar (Bangabda) with its reformed form is used officially (Pohela Boishakh, 14 April); Gregorian dates in business.
- **Digits:** Bengali digits are common in government and print; Arabic digits in UI.
- **Tone:** polite, respectful of elders, with attention to religious holidays.

## Common pitfalls

- Using West Bengal vocabulary (জল, স্নান) for a Bangladeshi audience.
- Mixing the two spelling conventions.
- The general pitfalls in [[locale-bn-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Bangla Academy (https://banglaacademy.gov.bd)
