---
name: locale-fil-ph
description: Use when working with the Filipino (Philippines) locale (`fil-PH`) — its endonym Filipino (Pilipinas), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Filipino (Philippines) (fil-PH)

Reference data for the **Filipino (Philippines)** locale — endonym **Filipino (Pilipinas)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fil-PH`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `fil`
- **Script:** Latn (Latin)
- **Region:** PH (Philippines)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 29,000,000
- **L2 (additional):** 54,000,000
- **L1+L2 (total):** 83,000,000

## Base locale

This is a regional variant of [[locale-fil-001]] (Filipino), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9` (e.g. 0~3, 5, 7, 8, …)
- **other** — everything else (e.g. 4, 6, 9, 14, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fil-001]] with the conventions of the Philippines.

- **Context:** English and Filipino are both official; regional languages such as Cebuano, Ilocano, and Hiligaynon are widely spoken. National content uses Filipino or English; do not substitute Tagalog dialect words for Filipino where the standard form exists.
- **Formats:** peso (₱) before the amount; month-day-year dates common in Filipino text; decimal point and comma thousands separator.
- **Names:** given name, middle name (the mother's maiden name), then family name; honorifics (Ginoo, Ginang, Binibini) and "po" show respect.
- **Tone:** warm and respectful; Taglish is acceptable in informal brand voice but not in formal or legal text.

## Common pitfalls

- Using Taglish in formal documents.
- Omitting honorific particles when addressing elders.
- The general pitfalls in [[locale-fil-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Komisyon sa Wikang Filipino (https://kwf.gov.ph)
