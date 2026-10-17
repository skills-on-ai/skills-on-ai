---
name: locale-el-cy
description: Use when working with the Greek (Cyprus) locale (`el-CY`) — its endonym Ελληνικά (Κύπρος), Greek script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Greek (Cyprus) (el-CY)

Reference data for the **Greek (Cyprus)** locale — endonym **Ελληνικά (Κύπρος)**, written in the Greek script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `el-CY`
- **ISO 639-1:** `el`
- **ISO 639-3:** `ell`
- **Script:** Grek (Greek)
- **Region:** CY (Cyprus)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 650,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 750,000

## Base locale

This is a regional variant of [[locale-el-001]] (Greek), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-el-001]] with the conventions of Cyprus. Standard Modern Greek is used in writing; the Cypriot Greek dialect is spoken and has a different vocabulary and pronunciation.

- **Dialect:** use Standard Modern Greek in written product text; Cypriot forms (for example `ντε`, `κόρη μου`) belong to speech and informal marketing.
- **Formats:** euro; dates `17/10/2026`; 24-hour clock; decimal comma.
- **Context:** Greek and Turkish are the official languages; English is widely used in business. Public bodies often publish in Greek and English.
- **Terminology:** Cyprus uses the same EU terminology as Greece, with local institution names.

## Common pitfalls

- Writing dialect spelling in formal content.
- Using Greece-only institution names for Cyprus.
- The general pitfalls in [[locale-el-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- EU Interinstitutional Style Guide (https://style-guide.europa.eu), language-specific conventions
