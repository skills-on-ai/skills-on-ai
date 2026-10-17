---
name: locale-am-et
description: Use when working with the Amharic (Ethiopia) locale (`am-ET`) — its endonym አማርኛ (ኢትዮጵያ), Ethiopic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Amharic (Ethiopia) (am-ET)

Reference data for the **Amharic (Ethiopia)** locale — endonym **አማርኛ (ኢትዮጵያ)**, written in the Ethiopic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `am-ET`
- **ISO 639-1:** `am`
- **ISO 639-3:** `amh`
- **Script:** Ethi (Ethiopic)
- **Region:** ET (Ethiopia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 33,000,000
- **L2 (additional):** 25,000,000
- **L1+L2 (total):** 58,000,000

## Base locale

This is a regional variant of [[locale-am-001]] (Amharic), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-am-001]] with the conventions of Ethiopia.

- **Calendar and clock:** the Ethiopian calendar and Ethiopian clock are used officially and in daily life; show Gregorian dates alongside for international content.
- **Formats:** birr (`ብር`); dates in Amharic month names (መስከረም, ጥቅምት, ኅዳር, ...); decimal point.
- **Context:** Amharic is the federal working language; other Ethiopian languages (Oromo, Tigrinya, Somali) are official regionally. Provide complete Amharic content.
- **Tone:** polite and respectful, with titles and greetings.

## Common pitfalls

- Using Gregorian dates only on Ethiopian forms.
- Mixing Tigrinya or Geez forms.
- The general pitfalls in [[locale-am-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
