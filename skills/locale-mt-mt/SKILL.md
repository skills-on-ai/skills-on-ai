---
name: locale-mt-mt
description: Use when working with the Maltese (Malta) locale (`mt-MT`) — its endonym Malti (Malta), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Maltese (Malta) (mt-MT)

Reference data for the **Maltese (Malta)** locale — endonym **Malti (Malta)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mt-MT`
- **ISO 639-1:** `mt`
- **ISO 639-3:** `mlt`
- **Script:** Latn (Latin)
- **Region:** MT (Malta)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 520,000
- **L2 (additional):** 30,000
- **L1+L2 (total):** 550,000

## Base locale

This is a regional variant of [[locale-mt-001]] (Maltese), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **few** — `n = 0 or n % 100 = 3..10` (e.g. 0, 3~10, 103~109, 1003, …)
- **many** — `n % 100 = 11..19` (e.g. 11~19, 111~117, 1011, …)
- **other** — everything else (e.g. 20~35, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-mt-001]] with the conventions of Malta.

- **Context:** Maltese and English are both official; many documents are bilingual. English text is Malta English with British spelling (see [[locale-en-mt]]).
- **Formats:** euro; dates `17/10/2026`; 24-hour clock; check CLDR `mt` for separators.
- **Terminology:** use the Maltese EU terminology (official Maltese versions) for legal and administrative content.

## Common pitfalls

- Mixing English words into Maltese product text without need.
- Dropping Maltese letters from names.
- The general pitfalls in [[locale-mt-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- EU Interinstitutional Style Guide (https://style-guide.europa.eu), language-specific conventions
