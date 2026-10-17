---
name: locale-hi-in
description: Use when working with the Hindi (India) locale (`hi-IN`) — its endonym हिन्दी (भारत), Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hindi (India) (hi-IN)

Reference data for the **Hindi (India)** locale — endonym **हिन्दी (भारत)**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hi-IN`
- **ISO 639-1:** `hi`
- **ISO 639-3:** `hin`
- **Script:** Deva (Devanagari)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 528,000,000
- **L2 (additional):** 139,000,000
- **L1+L2 (total):** 667,000,000

## Base locale

This is a regional variant of [[locale-hi-001]] (Hindi), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-hi-001]] with the conventions of India.

- **Formats:** Indian grouping (12,34,567; lakh and crore), ₹ before or after the amount per project style, dates DD/MM/YYYY, 12-hour or 24-hour time.
- **Terminology:** the government publishes official terms (CSTT glossaries); use them for legal and administrative text and the common term for consumer text.
- **Code-switching:** Hindi-English mixing (Hinglish) is natural in advertising and chat, not in formal text. If the brand uses it, keep English words in Devanagari or Latin consistently.
- **Related languages:** Urdu shares the spoken grammar; see [[locale-ur-001]]. Use Hindi vocabulary, not Urdu-origin words, only when the audience expects it.

## Common pitfalls

- Mixing Latin and Devanagari spelling of the same English word.
- Using Western grouping (1,234,567) in a lakh/crore context.
- The general pitfalls in [[locale-hi-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
