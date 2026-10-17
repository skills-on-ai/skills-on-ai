---
name: locale-sw-tz
description: Use when working with the Swahili (Tanzania) locale (`sw-TZ`) — its endonym Kiswahili (Tanzania), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swahili (Tanzania) (sw-TZ)

Reference data for the **Swahili (Tanzania)** locale — endonym **Kiswahili (Tanzania)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sw-TZ`
- **ISO 639-1:** `sw`
- **ISO 639-3:** `swa`
- **Script:** Latn (Latin)
- **Region:** TZ (Tanzania)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 7,000,000
- **L2 (additional):** 54,000,000
- **L1+L2 (total):** 61,000,000

## Base locale

This is a regional variant of [[locale-sw-001]] (Swahili), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sw-001]] with the conventions of Tanzania, where Swahili is the national language and the language of government and education, and where Standard Swahili is the norm.

- **Standard:** use Kiswahili sanifu as set by BAKITA; local government and education use it consistently, and the Tanzanian terms are often the reference for standard vocabulary.
- **Formats:** Tanzanian shilling (`TSh`); dates `17 Oktoba 2026`; 24-hour clock; clarify Swahili time versus international time.
- **Terminology:** use BAKITA-approved terms for government, legal, and technical content.
- **Tone:** formal and courteous in official text, with polite greetings.

## Common pitfalls

- Using Kenyan borrowings or Sheng in official Tanzanian content.
- Ignoring Swahili time.
- The general pitfalls in [[locale-sw-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- BAKITA (Baraza la Kiswahili la Taifa)
