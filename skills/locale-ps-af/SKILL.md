---
name: locale-ps-af
description: Use when working with the Pashto (Afghanistan) locale (`ps-AF`) — its endonym پښتو (افغانستان), Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Pashto (Afghanistan) (ps-AF)

Reference data for the **Pashto (Afghanistan)** locale — endonym **پښتو (افغانستان)**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ps-AF`
- **ISO 639-1:** `ps`
- **ISO 639-3:** `pus`
- **Script:** Arab (Arabic)
- **Region:** AF (Afghanistan)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 17,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 22,000,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Base locale

This is a regional variant of [[locale-ps-001]] (Pashto), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ps-001]] with the conventions of Afghanistan.

- **Context:** Pashto and Dari are both official; many materials are bilingual. Provide complete Pashto content, not a thin translation of Dari.
- **Calendar and formats:** the Solar Hijri calendar is official, with Pashto month names (وری, غویی, غبرګولی, چنګاښ, زمری, وږی, تله, لړم, لیندۍ, مرغومی, سلواغه, کب); afghani (`؋`); the weekend is Friday.
- **Tone:** polite and respectful, with religious greetings customary in correspondence.

## Common pitfalls

- Using Dari month names in Pashto content.
- Using Western date formats on official forms.
- The general pitfalls in [[locale-ps-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, calendar, and currency formats (https://cldr.unicode.org)
