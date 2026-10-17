---
name: locale-ha-ng
description: Use when working with the Hausa (Nigeria) locale (`ha-NG`) — its endonym Harshen Hausa (Najeriya), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hausa (Nigeria) (ha-NG)

Reference data for the **Hausa (Nigeria)** locale — endonym **Harshen Hausa (Najeriya)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ha-NG`
- **ISO 639-1:** `ha`
- **ISO 639-3:** `hau`
- **Script:** Latn (Latin)
- **Region:** NG (Nigeria)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 43,000,000
- **L2 (additional):** 25,000,000
- **L1+L2 (total):** 68,000,000

## Base locale

This is a regional variant of [[locale-ha-001]] (Hausa), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ha-001]] with the conventions of Nigeria.

- **Context:** Hausa is one of the three major languages of Nigeria, with English as the official language. Hausa content should be complete and follow the standard (Kano) written form.
- **Formats:** naira (`₦`); dates `17 ga Oktoba, 2026`; 24-hour clock; decimal point.
- **Tone:** polite, with greetings and religious phrases natural in correspondence; titles are important.

## Common pitfalls

- Using Niger-side French loanwords in Nigerian content.
- Dropping the hooked letters.
- The general pitfalls in [[locale-ha-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
