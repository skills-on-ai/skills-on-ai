---
name: locale-ar-om
description: Use when working with the Arabic (Oman) locale (`ar-OM`) — its endonym العربية (عُمان), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (Oman) (ar-OM)

Reference data for the **Arabic (Oman)** locale — endonym **العربية (عُمان)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-OM`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** OM (Oman)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 2,500,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 3,500,000

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

Apply [[locale-ar-001]] with these Omani conventions. Writing is MSA; the spoken dialect is Gulf (Omani) Arabic.

- **Currency:** Omani rial (OMR, ر.ع.), divided into 1,000 baisa; amounts have three decimals.
- **Calendar and weekend:** Gregorian for business, Hijri for religious events; the weekend is Friday-Saturday.
- **Tone:** formal and courteous; titles are important in business.

## Common pitfalls

- Using two decimals for rial amounts.
- Confusing the Omani rial (ريال عماني) with the Saudi or Qatari riyal.
- The general pitfalls in [[locale-ar-001]] (calques, passive overuse, bidirectional text, and gender agreement) also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guide, Arabic (https://aka.ms/arabic-styleguide)
- Unicode CLDR locale data for digits, calendars, and currency formats (https://cldr.unicode.org)
