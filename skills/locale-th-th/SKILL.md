---
name: locale-th-th
description: Use when working with the Thai (Thailand) locale (`th-TH`) — its endonym ไทย (ไทย), Thai script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Thai (Thailand) (th-TH)

Reference data for the **Thai (Thailand)** locale — endonym **ไทย (ไทย)**, written in the Thai script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `th-TH`
- **ISO 639-1:** `th`
- **ISO 639-3:** `tha`
- **Script:** Thai (Thai)
- **Region:** TH (Thailand)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 27,000,000
- **L2 (additional):** 44,000,000
- **L1+L2 (total):** 71,000,000

## Base locale

This is a regional variant of [[locale-th-001]] (Thai), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-th-001]] with the conventions of Thailand.

- **Calendar:** the Buddhist Era is the official year (2569 is 2026); show the Gregorian year only when the audience is international. Months have Thai names (ตุลาคม).
- **Currency and numbers:** baht (฿ or บาท) after the amount; decimal point and comma thousands separator in common use; Arabic digits in UI.
- **Names and titles:** given name first, then family name; people are addressed by the first name with a title (คุณสมชาย); academic and professional titles are honored.
- **Tone:** polite, warm, and indirect; avoid blunt refusals.
- **Content sensitivity:** content about the monarchy is legally protected; avoid casual wording and check with a Thai reviewer.

## Common pitfalls

- Using the Gregorian year only in Thai official forms.
- Using familiar titles or pronouns with strangers.
- The general pitfalls in [[locale-th-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for th-TH (https://cldr.unicode.org)
