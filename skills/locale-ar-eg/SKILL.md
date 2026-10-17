---
name: locale-ar-eg
description: Use when working with the Arabic (Egypt) locale (`ar-EG`) — its endonym العربية (مصر), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (Egypt) (ar-EG)

Reference data for the **Arabic (Egypt)** locale — endonym **العربية (مصر)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-EG`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** EG (Egypt)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 84,000,000
- **L2 (additional):** 35,000,000
- **L1+L2 (total):** 119,000,000

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

Apply [[locale-ar-001]] with these Egyptian conventions. Writing is MSA; Egyptian Arabic is the most widely understood dialect thanks to media, and marketing sometimes uses it.

- **Currency and numbers:** Egyptian pound (EGP, ج.م); CLDR `ar-EG` uses Arabic-Indic digits by default, although Western digits are also common in apps. Follow the product convention.
- **Dialect for marketing:** Egyptian colloquial is common in social media, advertising, and voice content, but keep UI, documentation, and legal text in MSA.
- **Politeness:** "حضرتك" is the standard respectful second person in service text; "سيادتك" and "أستاذ / دكتور / مهندس" are used as titles of respect in business.
- **Calendar and weekend:** Gregorian, with Hijri for religious dates; the weekend is Friday-Saturday.

## Common pitfalls

- Writing Egyptian colloquial spellings (بقى, دلوقتي) in formal text.
- Assuming that Egyptian words are understood and acceptable across all Arab countries.
- The general pitfalls in [[locale-ar-001]] (calques, passive overuse, bidirectional text, and gender agreement) also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Arabic (https://aka.ms/arabic-styleguide)
- Unicode CLDR locale data for digits, calendars, and currency formats (https://cldr.unicode.org)
