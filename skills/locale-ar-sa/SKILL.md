---
name: locale-ar-sa
description: Use when working with the Arabic (Saudi Arabia) locale (`ar-SA`) — its endonym العربية (السعودية), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (Saudi Arabia) (ar-SA)

Reference data for the **Arabic (Saudi Arabia)** locale — endonym **العربية (السعودية)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-SA`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** SA (Saudi Arabia)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 27,000,000
- **L2 (additional):** 3,000,000
- **L1+L2 (total):** 30,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-ar-001]] (Arabic), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n % 100 = 3..10` (e.g. 3~10, 103~110, 1003, …)
- **many** — `n % 100 = 11..99` (e.g. 11~26, 111, 1011, …)
- **other** — everything else (e.g. 100~102, 200~202, 300~302, 400~402, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ar-001]] with these Saudi conventions. Writing is MSA; the spoken dialects include Hejazi, Najdi, and Gulf varieties. The Hijri calendar is part of official life.

- **Currency:** Saudi riyal (SAR, ر.س). Check CLDR `ar-SA` for the default digits; Eastern Arabic-Indic digits are common in print, Western digits in many apps.
- **Calendar:** the Umm al-Qura Hijri calendar is used for official dates and religious events; show Gregorian alongside when needed. CLDR supports both.
- **Weekend:** Friday-Saturday.
- **Tone:** formal, religiously respectful, and conservative in imagery and content. Honorific titles and religious greetings are expected.
- **Terminology:** follow terms used by Saudi government bodies and the Saudi Standards body where they exist.

## Common pitfalls

- Showing only Gregorian dates for official or religious purposes.
- Using content or imagery that conflicts with local norms.
- The general pitfalls in [[locale-ar-001]] (calques, passive overuse, bidirectional text, and gender agreement) also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Arabic (https://aka.ms/arabic-styleguide)
- Unicode CLDR locale data for digits, calendars, and currency formats (https://cldr.unicode.org)
