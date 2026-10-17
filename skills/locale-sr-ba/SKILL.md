---
name: locale-sr-ba
description: Use when working with the Serbian (Bosnia and Herzegovina) locale (`sr-BA`) — its endonym Српски (Босна и Херцеговина), Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Serbian (Bosnia and Herzegovina) (sr-BA)

Reference data for the **Serbian (Bosnia and Herzegovina)** locale — endonym **Српски (Босна и Херцеговина)**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sr-BA`
- **ISO 639-1:** `sr`
- **ISO 639-3:** `srp`
- **Script:** Cyrl (Cyrillic)
- **Region:** BA (Bosnia and Herzegovina)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,200,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 1,400,000

## Base locale

This is a regional variant of [[locale-sr-001]] (Serbian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sr-001]] with the conventions of Bosnia and Herzegovina (Serbian).

- **Variant:** Serbian in Bosnia (especially Republika Srpska) is usually ijekavian: `лијепо`, `млијеко`, `ријеч`. Use ijekavian forms unless the audience requires ekavian.
- **Script:** Cyrillic and Latin are both used; Republika Srpska officials use Cyrillic.
- **Formats:** convertible mark (`КМ`, `BAM`); dates `17.10.2026.`; decimal comma.
- **Context:** Bosnian, Croatian, and Serbian are all official; do not replace Serbian forms with Bosnian or Croatian forms in Serbian-language content.

## Common pitfalls

- Using ekavian forms for a Republika Srpska audience.
- Mixing Bosnian or Croatian terms into Serbian text.
- The general pitfalls in [[locale-sr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
