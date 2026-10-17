---
name: locale-zu-za
description: Use when working with the Zulu (South Africa) locale (`zu-ZA`) — its endonym isiZulu (iNingizimu Afrika), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Zulu (South Africa) (zu-ZA)

Reference data for the **Zulu (South Africa)** locale — endonym **isiZulu (iNingizimu Afrika)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `zu-ZA`
- **ISO 639-1:** `zu`
- **ISO 639-3:** `zul`
- **Script:** Latn (Latin)
- **Region:** ZA (South Africa)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 12,000,000
- **L2 (additional):** 16,000,000
- **L1+L2 (total):** 28,000,000

## Base locale

This is a regional variant of [[locale-zu-001]] (Zulu), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-zu-001]] with the conventions of South Africa.

- **Context:** isiZulu is one of eleven official languages of South Africa and the most widely spoken home language; most readers also know English.
- **Formats:** rand (`R`); dates `17 Okthoba 2026`; 24-hour clock; check CLDR `zu` for separators.
- **Terminology:** use PanSALB, the Department of Arts and Culture, and National Language Service terminology lists for official content.

## Common pitfalls

- Mixing Xhosa or Ndebele forms.
- Using English loan spellings in place of Zulu spellings.
- The general pitfalls in [[locale-zu-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Pan South African Language Board (PanSALB), the statutory body for the official languages of South Africa
