---
name: locale-fi-fi
description: Use when working with the Finnish (Finland) locale (`fi-FI`) — its endonym Suomi (Suomi), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Finnish (Finland) (fi-FI)

Reference data for the **Finnish (Finland)** locale — endonym **Suomi (Suomi)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fi-FI`
- **ISO 639-1:** `fi`
- **ISO 639-3:** `fin`
- **Script:** Latn (Latin)
- **Region:** FI (Finland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,200,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 5,700,000

## Base locale

This is a regional variant of [[locale-fi-001]] (Finnish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fi-001]] with the conventions of Finland.

- **Formats:** euro (`12,50 €`); dates `17.10.2026`; 24-hour clock (`klo 17.30`); decimal comma; metric units.
- **Bilingual context:** Finnish and Swedish are national languages; public bodies publish bilingual content, and place names have both forms (Helsinki / Helsingfors). Keep both in bilingual materials.
- **Terminology:** use Finnish EU terminology and the national term bank (Sanastokeskus TSK) for technical content.
- **Tone:** plain, factual, and concise; informal address is normal.

## Common pitfalls

- Using Swedish word order or Swedish place names without need.
- Using `te` in a consumer UI.
- The general pitfalls in [[locale-fi-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sanastokeskus TSK, Finnish Terminology Centre
