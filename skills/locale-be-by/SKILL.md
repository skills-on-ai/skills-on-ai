---
name: locale-be-by
description: Use when working with the Belarusian (Belarus) locale (`be-BY`) — its endonym Беларуская (Беларусь), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Belarusian (Belarus) (be-BY)

Reference data for the **Belarusian (Belarus)** locale — endonym **Беларуская (Беларусь)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `be-BY`
- **ISO 639-1:** `be`
- **ISO 639-3:** `bel`
- **Script:** Cyrl (Cyrillic)
- **Region:** BY (Belarus)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,000,000
- **L2 (additional):** 1,300,000
- **L1+L2 (total):** 6,300,000

## Base locale

This is a regional variant of [[locale-be-001]] (Belarusian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `n % 10 = 1 and n % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `n % 10 = 2..4 and n % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **many** — `n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14` (e.g. 0, 5~19, 100, 1000, …)
- **other** — everything else

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-be-001]] with the conventions of Belarus.

- **Context:** Belarusian and Russian are both official, and Russian dominates daily use. Content in Belarusian should be complete and not a thin Russian translation.
- **Formats:** Belarusian ruble (Br); dates `17.10.2026`; 24-hour clock; decimal comma.
- **Orthography:** state publications use the official orthography (narkamaŭka); media and cultural groups sometimes use Taraškievica. Confirm the project's choice.

## Common pitfalls

- Mixing the two orthographies.
- Providing machine-translated Belarusian from Russian.
- The general pitfalls in [[locale-be-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
