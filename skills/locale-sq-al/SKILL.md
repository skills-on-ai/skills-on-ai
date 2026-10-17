---
name: locale-sq-al
description: Use when working with the Albanian (Albania) locale (`sq-AL`) — its endonym Shqip (Shqipëri), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Albanian (Albania) (sq-AL)

Reference data for the **Albanian (Albania)** locale — endonym **Shqip (Shqipëri)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sq-AL`
- **ISO 639-1:** `sq`
- **ISO 639-3:** `sqi`
- **Script:** Latn (Latin)
- **Region:** AL (Albania)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,800,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 3,000,000

## Base locale

This is a regional variant of [[locale-sq-001]] (Albanian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sq-001]] with the conventions of Albania.

- **Formats:** lek (`L` or `ALL`); dates `17.10.2026`; 24-hour clock; decimal comma.
- **Variants:** Albanian in Kosovo and North Macedonia uses the same standard with euro or denar; keep country-specific currency and institutions separate.
- **Terminology:** use Albanian EU-accession terminology for legal and administrative content.

## Common pitfalls

- Using Gheg dialect forms in written standard content.
- Using the euro for Albania without checking.
- The general pitfalls in [[locale-sq-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
