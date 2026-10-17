---
name: locale-kk-kz
description: Use when working with the Kazakh (Kazakhstan) locale (`kk-KZ`) — its endonym Қазақ тілі (Қазақстан), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kazakh (Kazakhstan) (kk-KZ)

Reference data for the **Kazakh (Kazakhstan)** locale — endonym **Қазақ тілі (Қазақстан)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kk-KZ`
- **ISO 639-1:** `kk`
- **ISO 639-3:** `kaz`
- **Script:** Cyrl (Cyrillic)
- **Region:** KZ (Kazakhstan)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 16,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 19,000,000

## Base locale

This is a regional variant of [[locale-kk-001]] (Kazakh), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-kk-001]] with the conventions of Kazakhstan.

- **Context:** Kazakh is the state language and Russian is an official language in government and widely used. Kazakh content should be complete, not a thin Russian translation.
- **Formats:** tenge (`₸`); dates `17.10.2026`; 24-hour clock; decimal comma.
- **Script:** Cyrillic is the current script; a Latin alphabet is planned. Do not introduce Latin without a requirement.

## Common pitfalls

- Using Russian forms in Kazakh text.
- Mixing alphabets.
- The general pitfalls in [[locale-kk-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
