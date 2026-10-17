---
name: locale-uk-ua
description: Use when working with the Ukrainian (Ukraine) locale (`uk-UA`) — its endonym Українська (Україна), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Ukrainian (Ukraine) (uk-UA)

Reference data for the **Ukrainian (Ukraine)** locale — endonym **Українська (Україна)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `uk-UA`
- **ISO 639-1:** `uk`
- **ISO 639-3:** `ukr`
- **Script:** Cyrl (Cyrillic)
- **Region:** UA (Ukraine)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 29,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 34,000,000

## Base locale

This is a regional variant of [[locale-uk-001]] (Ukrainian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-uk-001]] with the conventions of Ukraine.

- **Law:** Ukrainian is the sole state language and the law on the state language requires Ukrainian in public services and consumer information. Provide Ukrainian by default.
- **Formats:** hryvnia (₴); dates `17.10.2026` or `17 жовтня 2026 р.`; 24-hour clock; decimal comma.
- **Names and places:** use Ukrainian forms (Київ, Одеса); names of people follow the Ukrainian transliteration rules where converted.
- **Context:** Russian is widely understood but should not be the default in Ukrainian-language material; avoid Russian-language-only content.

## Common pitfalls

- Using Russian place names or forms.
- Using Russian as the default language of a UI for Ukraine.
- The general pitfalls in [[locale-uk-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
