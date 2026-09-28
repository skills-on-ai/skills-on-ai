---
name: locale-ar-001
description: Use when working with the Arabic locale (`ar-001`) — its endonym العربية, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Arabic (ar-001)

Reference data for the **Arabic** locale — endonym **العربية**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ar-001`
- **ISO 639-1:** `ar`
- **ISO 639-3:** `ara`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 411,000,000
- **L2 (additional):** 70,000,000
- **L1+L2 (total):** 480,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Arabic. Region-specific variants in this dataset:

- [[locale-ar-ae]] (Arabic (United Arab Emirates))
- [[locale-ar-bh]] (Arabic (Bahrain))
- [[locale-ar-dz]] (Arabic (Algeria))
- [[locale-ar-eg]] (Arabic (Egypt))
- [[locale-ar-iq]] (Arabic (Iraq))
- [[locale-ar-jo]] (Arabic (Jordan))
- [[locale-ar-kw]] (Arabic (Kuwait))
- [[locale-ar-lb]] (Arabic (Lebanon))
- [[locale-ar-ly]] (Arabic (Libya))
- [[locale-ar-ma]] (Arabic (Morocco))
- [[locale-ar-om]] (Arabic (Oman))
- [[locale-ar-qa]] (Arabic (Qatar))
- [[locale-ar-sa]] (Arabic (Saudi Arabia))
- [[locale-ar-sd]] (Arabic (Sudan))
- [[locale-ar-sy]] (Arabic (Syria))
- [[locale-ar-tn]] (Arabic (Tunisia))
- [[locale-ar-ye]] (Arabic (Yemen))

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n % 100 = 3..10` (e.g. 3~10, 103~110, 1003, …)
- **many** — `n % 100 = 11..99` (e.g. 11~26, 111, 1011, …)
- **other** — everything else (e.g. 100~102, 200~202, 300~302, 400~402, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
