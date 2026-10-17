---
name: locale-ne-np
description: Use when working with the Nepali (Nepal) locale (`ne-NP`) — its endonym नेपाली (नेपाल), Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Nepali (Nepal) (ne-NP)

Reference data for the **Nepali (Nepal)** locale — endonym **नेपाली (नेपाल)**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ne-NP`
- **ISO 639-1:** `ne`
- **ISO 639-3:** `nep`
- **Script:** Deva (Devanagari)
- **Region:** NP (Nepal)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 19,000,000
- **L2 (additional):** 14,000,000
- **L1+L2 (total):** 33,000,000

## Base locale

This is a regional variant of [[locale-ne-001]] (Nepali), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ne-001]] with the conventions of Nepal.

- **Calendar:** Bikram Sambat (BS) is the official calendar; the year is about 57 years ahead of the Gregorian year. Support both and convert carefully.
- **Formats:** Nepalese rupee (रू or Rs); lakh/crore grouping; Devanagari digits are widely used in official text.
- **Context:** many ethnic languages are spoken (Maithili, Newar, Tharu); Nepali is the language of government; keep place names in their official forms.
- **Tone:** respectful of age and status; use titles (श्री, सुश्री, श्रीमान्).

## Common pitfalls

- Using Indian (Hindi) vocabulary for Nepalese institutions.
- Mixing BS and AD dates without labels.
- The general pitfalls in [[locale-ne-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number grouping, calendars, and currency (https://cldr.unicode.org)
