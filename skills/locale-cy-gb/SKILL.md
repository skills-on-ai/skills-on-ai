---
name: locale-cy-gb
description: Use when working with the Welsh (United Kingdom) locale (`cy-GB`) — its endonym Cymraeg (y Deyrnas Unedig), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Welsh (United Kingdom) (cy-GB)

Reference data for the **Welsh (United Kingdom)** locale — endonym **Cymraeg (y Deyrnas Unedig)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `cy-GB`
- **ISO 639-1:** `cy`
- **ISO 639-3:** `cym`
- **Script:** Latn (Latin)
- **Region:** GB (United Kingdom)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 562,000
- **L2 (additional):** 338,000
- **L1+L2 (total):** 900,000

## Base locale

This is a regional variant of [[locale-cy-001]] (Welsh), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **zero**, **one**, **two**, **few**, **many**, **other** (6 forms).

- **zero** — `n = 0` (e.g. 0)
- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 3` (e.g. 3)
- **many** — `n = 6` (e.g. 6)
- **other** — everything else (e.g. 4, 5, 7~20, 100, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-cy-001]] with the conventions of Wales (United Kingdom).

- **Status:** Welsh is an official language of Wales. Public bodies must comply with the Welsh Language Standards; Welsh must be treated no less favorably than English.
- **Formats:** pound sterling (£); dates `17 Hydref 2026`; 24-hour clock; decimal point.
- **Place names:** Welsh place names (Caerdydd, Abertawe, Aberystwyth) are official; use them in Welsh text and keep standard forms.
- **Dialects:** North and South Wales vocabulary differ in speech; the written standard is shared.

## Common pitfalls

- Using English place names in Welsh text where Welsh forms exist.
- Treating Welsh as a secondary translation.
- The general pitfalls in [[locale-cy-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Welsh Language Commissioner (https://www.welshlanguagecommissioner.wales)
