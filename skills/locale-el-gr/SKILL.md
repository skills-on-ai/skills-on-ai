---
name: locale-el-gr
description: Use when working with the Greek (Greece) locale (`el-GR`) — its endonym Ελληνικά (Ελλάδα), Greek script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Greek (Greece) (el-GR)

Reference data for the **Greek (Greece)** locale — endonym **Ελληνικά (Ελλάδα)**, written in the Greek script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `el-GR`
- **ISO 639-1:** `el`
- **ISO 639-3:** `ell`
- **Script:** Grek (Greek)
- **Region:** GR (Greece)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 10,500,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 12,500,000

## Base locale

This is a regional variant of [[locale-el-001]] (Greek), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-el-001]] with the conventions of Greece.

- **Formats:** euro (`12,50 €`); dates `17/10/2026` or `17 Οκτωβρίου 2026`; 24-hour clock; decimal comma.
- **Terminology:** use Greek EU terminology (the official Greek versions) for legal and administrative content.
- **Greeklish:** Greek written in Latin letters is common in chat and SMS; avoid it in any formal product text.
- **Names:** keep Greek name forms and transliteration consistent with passport spelling (ELOT 743 transliteration) when Latin forms are needed.

## Common pitfalls

- Writing Greeklish or leaving Latin letters mixed with Greek.
- Using Cypriot dialect forms in standard text.
- The general pitfalls in [[locale-el-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- EU Interinstitutional Style Guide (https://style-guide.europa.eu), language-specific conventions
