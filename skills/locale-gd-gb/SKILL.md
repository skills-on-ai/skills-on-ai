---
name: locale-gd-gb
description: Use when working with the Scottish Gaelic (United Kingdom) locale (`gd-GB`) — its endonym Gàidhlig (An Rìoghachd Aonaichte), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Scottish Gaelic (United Kingdom) (gd-GB)

Reference data for the **Scottish Gaelic (United Kingdom)** locale — endonym **Gàidhlig (An Rìoghachd Aonaichte)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `gd-GB`
- **ISO 639-1:** `gd`
- **ISO 639-3:** `gla`
- **Script:** Latn (Latin)
- **Region:** GB (United Kingdom)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 20,000
- **L2 (additional):** 70,000
- **L1+L2 (total):** 90,000

## Base locale

This is a regional variant of [[locale-gd-001]] (Scottish Gaelic), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **other** (4 forms).

- **one** — `n = 1,11` (e.g. 1, 11)
- **two** — `n = 2,12` (e.g. 2, 12)
- **few** — `n = 3..10,13..19` (e.g. 3~10, 13~19)
- **other** — everything else (e.g. 0, 20~34, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-gd-001]] with the conventions of Scotland (United Kingdom).

- **Status:** Scottish Gaelic is an official language in Scotland under the Gaelic Language (Scotland) Act 2005, and public bodies produce Gaelic language plans.
- **Formats:** pound sterling (£); dates `17 an Dàmhair 2026`; 24-hour clock; decimal point.
- **Bilingual material:** Gaelic and English appear side by side on signs and in official documents; Gaelic names of places (for example `Dùn Èideann` for Edinburgh) should be used where official.

## Common pitfalls

- Using Irish place or personal-name forms.
- Treating Gaelic as a decorative addition to an English sentence.
- The general pitfalls in [[locale-gd-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Bòrd na Gàidhlig (https://www.gaidhlig.scot)
