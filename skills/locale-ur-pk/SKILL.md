---
name: locale-ur-pk
description: Use when working with the Urdu (Pakistan) locale (`ur-PK`) — its endonym اردو (پاکستان), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Urdu (Pakistan) (ur-PK)

Reference data for the **Urdu (Pakistan)** locale — endonym **اردو (پاکستان)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ur-PK`
- **ISO 639-1:** `ur`
- **ISO 639-3:** `urd`
- **Script:** Arab (Arabic)
- **Region:** PK (Pakistan)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 15,000,000
- **L2 (additional):** 175,000,000
- **L1+L2 (total):** 190,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-ur-001]] (Urdu), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ur-001]] with the conventions of Pakistan.

- **Context:** Urdu is the national language alongside English; regional languages (Punjabi, Sindhi, Pashto, Balochi) are widely spoken. Content for Pakistan is often bilingual with English.
- **Formats:** Pakistani rupee (Rs or روپے); dates DD/MM/YYYY; Islamic (Hijri) dates for religious events; check CLDR `ur-PK` for number grouping.
- **Tone:** polite and respectful, with religious phrases (السلام علیکم, ان شاء اللہ) natural in conversation but not required in commercial copy.
- **Names:** use correct honorifics (محترم، جناب) in correspondence.

## Common pitfalls

- Using Indian (Hindi) vocabulary or script.
- Using culturally insensitive imagery or terms.
- The general pitfalls in [[locale-ur-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
