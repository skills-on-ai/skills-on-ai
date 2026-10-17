---
name: locale-ja-jp
description: Use when working with the Japanese (Japan) locale (`ja-JP`) — its endonym 日本語 (日本), Japanese script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Japanese (Japan) (ja-JP)

Reference data for the **Japanese (Japan)** locale — endonym **日本語 (日本)**, written in the Japanese script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ja-JP`
- **ISO 639-1:** `ja`
- **ISO 639-3:** `jpn`
- **Script:** Jpan (Japanese)
- **Region:** JP (Japan)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 123,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 125,000,000

## Base locale

This is a regional variant of [[locale-ja-001]] (Japanese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ja-001]] with the conventions of Japan.

- **Dates and eras:** the Gregorian year is common in business; the Japanese era (年号) is used in government documents and forms (2026 is 令和8年). Write dates as 2026年10月17日 or 令和8年10月17日, and show weekdays in parentheses (金).
- **Currency and numbers:** yen (円 or ¥); 12,500円; numbers over 10,000 use 万 and 億 in prose (1万2,500円).
- **Names and addresses:** family name first, then given name; honorific 様 after the name in customer text. Addresses go from largest to smallest unit (postal code 〒, prefecture, city, ward, block); phone numbers use hyphens.
- **Tone:** polite, humble, and indirect; direct refusals are softened; apologies and thanks are more frequent than in English.
- **Writing direction:** horizontal left to right in UI; vertical (縦書き) for traditional documents and some publications.
- **Government style:** public documents follow the Agency for Cultural Affairs' 公用文 guidelines.

## Common pitfalls

- Writing dates in month/day/year or omitting 年月日.
- Using English honorific order for names.
- The general pitfalls in [[locale-ja-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Agency for Cultural Affairs (文化庁), 公用文作成の考え方
- Microsoft Localization Style Guide, Japanese (https://aka.ms/japanese-styleguide)
