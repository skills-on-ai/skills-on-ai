---
name: locale-tr-tr
description: Use when working with the Turkish (Turkey) locale (`tr-TR`) — its endonym Türkçe (Türkiye), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Turkish (Turkey) (tr-TR)

Reference data for the **Turkish (Turkey)** locale — endonym **Türkçe (Türkiye)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tr-TR`
- **ISO 639-1:** `tr`
- **ISO 639-3:** `tur`
- **Script:** Latn (Latin)
- **Region:** TR (Turkey)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 76,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 81,000,000

## Base locale

This is a regional variant of [[locale-tr-001]] (Turkish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-tr-001]] with the conventions of Turkey.

- **Formats:** Turkish lira (`₺`) before the amount in CLDR; dates `17.10.2026`; 24-hour clock; decimal comma, period for thousands.
- **Names and addresses:** given name then surname; `Bey` and `Hanım` follow the first name; the Turkish ID number and address format have their own conventions.
- **Terminology:** TDK and Turkish government bodies publish approved terms; prefer them over foreign loanwords in official content.
- **Tone:** warm, courteous, and respectful of elders; rhetoric and hospitality phrases (`Hoş geldiniz`, `Kolay gelsin`) are natural in service text.

## Common pitfalls

- Using English date or number formats.
- Dropping honorifics in correspondence.
- The general pitfalls in [[locale-tr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
