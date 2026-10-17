---
name: locale-ug-cn
description: Use when working with the Uyghur (China) locale (`ug-CN`) — its endonym ئۇيغۇرچە (جۇڭگو), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Uyghur (China) (ug-CN)

Reference data for the **Uyghur (China)** locale — endonym **ئۇيغۇرچە (جۇڭگو)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ug-CN`
- **ISO 639-1:** `ug`
- **ISO 639-3:** `uig`
- **Script:** Arab (Arabic)
- **Region:** CN (China)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 11,000,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 12,500,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-ug-001]] (Uyghur), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ug-001]] with the conventions of China (Xinjiang).

- **Script:** the Arabic-based alphabet is the official script in China; right to left.
- **Formats:** yuan (`¥`); dates `2026-10-17` in many documents; 24-hour clock; Beijing time (UTC+8) is official while local Xinjiang time (UTC+6) is also used; state the time zone when it matters.
- **Context:** content in China is subject to local legal and content rules; check them for sensitive text.

## Common pitfalls

- Using the Latin Uyghur script in China-facing material without a requirement.
- Ignoring the time-zone ambiguity.
- The general pitfalls in [[locale-ug-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
