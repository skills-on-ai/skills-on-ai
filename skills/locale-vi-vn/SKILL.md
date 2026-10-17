---
name: locale-vi-vn
description: Use when working with the Vietnamese (Vietnam) locale (`vi-VN`) — its endonym Tiếng Việt (Việt Nam), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Vietnamese (Vietnam) (vi-VN)

Reference data for the **Vietnamese (Vietnam)** locale — endonym **Tiếng Việt (Việt Nam)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `vi-VN`
- **ISO 639-1:** `vi`
- **ISO 639-3:** `vie`
- **Script:** Latn (Latin)
- **Region:** VN (Vietnam)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 76,000,000
- **L2 (additional):** 8,000,000
- **L1+L2 (total):** 84,000,000

## Base locale

This is a regional variant of [[locale-vi-001]] (Vietnamese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-vi-001]] with the conventions of Vietnam.

- **Standard variety:** written Vietnamese follows the Hanoi-based standard; southern vocabulary (for example "heo" versus "lợn" for pig) appears in speech and may be regionally marked in text.
- **Formats:** dates "17/10/2026" or "ngày 17 tháng 10 năm 2026"; currency đồng (₫) after the amount; decimal comma and period for thousands; 24-hour clock.
- **Names:** family name first, then middle and given name (Nguyễn Văn An); address a person by the given name with a title (anh An, chị An).
- **Tone:** respectful of age and status; titles matter in business and government.

## Common pitfalls

- Using Western name order for Vietnamese names.
- Using a casual "bạn" voice in formal customer or legal text.
- The general pitfalls in [[locale-vi-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for vi (https://cldr.unicode.org)
