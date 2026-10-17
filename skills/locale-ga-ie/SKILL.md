---
name: locale-ga-ie
description: Use when working with the Irish (Ireland) locale (`ga-IE`) — its endonym Gaeilge (Éire), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Irish (Ireland) (ga-IE)

Reference data for the **Irish (Ireland)** locale — endonym **Gaeilge (Éire)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ga-IE`
- **ISO 639-1:** `ga`
- **ISO 639-3:** `gle`
- **Script:** Latn (Latin)
- **Region:** IE (Ireland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 170,000
- **L2 (additional):** 1,730,000
- **L1+L2 (total):** 1,900,000

## Base locale

This is a regional variant of [[locale-ga-001]] (Irish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 3..6` (e.g. 3~6)
- **many** — `n = 7..10` (e.g. 7~10)
- **other** — everything else (e.g. 0, 11~25, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-ga-001]] with the conventions of Ireland.

- **Status:** Irish is the first official language of the Republic of Ireland and the Official Languages Act 2003 requires public bodies to provide key documents in Irish. Irish text should carry equal status with English in bilingual material.
- **Formats:** euro; dates `17 Deireadh Fómhair 2026`; 24-hour clock; decimal point.
- **Dialects:** Munster, Connacht, and Ulster Irish differ in speech; the Caighdeán Oifigiúil is the written standard; use the standard unless the project targets a dialect.
- **Names:** Irish personal and place names (Ó, Mac, Nic, Uí) follow Irish rules for lenition and eclipsis; do not anglicize them.

## Common pitfalls

- Using English word order in bilingual material.
- Using a dialect form in standard text.
- The general pitfalls in [[locale-ga-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Tearma.ie (https://www.tearma.ie)
