---
name: locale-he-il
description: Use when working with the Hebrew (Israel) locale (`he-IL`) — its endonym עברית (ישראל), Hebrew script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Hebrew (Israel) (he-IL)

Reference data for the **Hebrew (Israel)** locale — endonym **עברית (ישראל)**, written in the Hebrew script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `he-IL`
- **ISO 639-1:** `he`
- **ISO 639-3:** `heb`
- **Script:** Hebr (Hebrew)
- **Region:** IL (Israel)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 6,500,000
- **L2 (additional):** 4,000,000
- **L1+L2 (total):** 10,500,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-he-001]] (Hebrew), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `i = 1 and v = 0 or i = 0 and v != 0` (e.g. 1)
- **two** — `i = 2 and v = 0` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-he-001]] with the conventions of Israel.

- **Calendar:** the Gregorian calendar for business; the Hebrew calendar for holidays and religious dates; show both in civil and holiday content.
- **Formats:** shekel (`₪`); decimal point and comma thousands separator; dates `17.10.2026` or `17 באוקטובר 2026`; 24-hour clock.
- **Context:** Hebrew and Arabic are used in public life; bilingual materials are common. Keep terminology consistent between the Hebrew and Arabic versions (see [[locale-ar-001]]).
- **Tone:** direct and informal; first names are used in business.

## Common pitfalls

- Using decimal commas.
- Using an inconsistent gender policy.
- The general pitfalls in [[locale-he-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, calendar, and currency formats (https://cldr.unicode.org)
