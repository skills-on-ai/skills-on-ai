---
name: locale-hy-am
description: Use when working with the Armenian (Armenia) locale (`hy-AM`) — its endonym Հայերեն (Հայաստան), Armenian script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Armenian (Armenia) (hy-AM)

Reference data for the **Armenian (Armenia)** locale — endonym **Հայերեն (Հայաստան)**, written in the Armenian script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hy-AM`
- **ISO 639-1:** `hy`
- **ISO 639-3:** `hye`
- **Script:** Armn (Armenian)
- **Region:** AM (Armenia)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,900,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 3,100,000

## Base locale

This is a regional variant of [[locale-hy-001]] (Armenian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-hy-001]] with the conventions of Armenia (Eastern Armenian).

- **Variant:** Eastern Armenian is the standard in Armenia.
- **Formats:** dram (`֏`); dates `17.10.2026`; 24-hour clock; decimal comma.
- **Names:** place names follow official Armenian forms; transliteration to Latin follows the official system.
- **Context:** Russian is widely understood but should not be the default in Armenian-language content.

## Common pitfalls

- Using Western Armenian forms for an Armenia audience.
- Using Russian forms in Armenian text.
- The general pitfalls in [[locale-hy-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, calendar, and currency formats (https://cldr.unicode.org)
