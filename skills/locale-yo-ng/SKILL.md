---
name: locale-yo-ng
description: Use when working with the Yoruba (Nigeria) locale (`yo-NG`) — its endonym Yorùbá (Nàìjíríà), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Yoruba (Nigeria) (yo-NG)

Reference data for the **Yoruba (Nigeria)** locale — endonym **Yorùbá (Nàìjíríà)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `yo-NG`
- **ISO 639-1:** `yo`
- **ISO 639-3:** `yor`
- **Script:** Latn (Latin)
- **Region:** NG (Nigeria)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 48,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 50,000,000

## Base locale

This is a regional variant of [[locale-yo-001]] (Yoruba), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-yo-001]] with the conventions of Nigeria.

- **Context:** Yoruba is one of the major languages of Nigeria; English is the official language. Use the standard written form with full tone marks in teaching and formal text; in everyday commercial text, tone marks are sometimes omitted but subdots should stay.
- **Formats:** naira (`₦`); dates in English or Yoruba month names; 24-hour clock; decimal point.
- **Tone:** warm and respectful, with long greetings customary in correspondence.

## Common pitfalls

- Dropping subdots.
- Using `o` forms with elders.
- The general pitfalls in [[locale-yo-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
