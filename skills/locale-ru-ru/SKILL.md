---
name: locale-ru-ru
description: Use when working with the Russian (Russia) locale (`ru-RU`) — its endonym Русский (Россия), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Russian (Russia) (ru-RU)

Reference data for the **Russian (Russia)** locale — endonym **Русский (Россия)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ru-RU`
- **ISO 639-1:** `ru`
- **ISO 639-3:** `rus`
- **Script:** Cyrl (Cyrillic)
- **Region:** RU (Russia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 118,000,000
- **L2 (additional):** 24,000,000
- **L1+L2 (total):** 142,000,000

## Base locale

This is a regional variant of [[locale-ru-001]] (Russian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ru-001]] with the conventions of Russia.

- **Formats:** ruble (₽) after the amount; dates `17.10.2026` or `17 октября 2026 г.`; 24-hour clock; decimal comma; metric units.
- **Law and terminology:** the Russian language law requires use of the literary language norms in official contexts and consumer information; follow dictionaries approved for this purpose and check requirements for the product.
- **Names:** Russian names have a patronymic (Иван Петрович Сидоров). Formal address uses first name plus patronymic; forms must collect and show all three parts.
- **Tone:** formal and reserved in business; humor is acceptable in consumer brands.

## Common pitfalls

- Requiring only first and last names in forms.
- Using Ukrainian or Belarusian forms for Russian text.
- The general pitfalls in [[locale-ru-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Gramota.ru (https://gramota.ru)
