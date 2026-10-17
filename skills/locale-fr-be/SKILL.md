---
name: locale-fr-be
description: Use when working with the French (Belgium) locale (`fr-BE`) — its endonym Français (Belgique), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: French (Belgium) (fr-BE)

Reference data for the **French (Belgium)** locale — endonym **Français (Belgique)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fr-BE`
- **ISO 639-1:** `fr`
- **ISO 639-3:** `fra`
- **Script:** Latn (Latin)
- **Region:** BE (Belgium)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,500,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 6,000,000

## Base locale

This is a regional variant of [[locale-fr-001]] (French), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **many**, **other** (3 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **many** — `e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5` (e.g. 1000000, …)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-fr-001]] with Belgian conventions. Belgium has three official languages (Dutch, French, and German), and institutional names exist in all of them.

- **Numbers:** Belgian French says "septante" (70) and "nonante" (90), not "soixante-dix" and "quatre-vingt-dix"; "quatre-vingts" (80) is used. Use these in numerals written as words, such as telephone-audio or accessibility scripts.
- **Meals:** "déjeuner" is breakfast, "dîner" is lunch, and "souper" is dinner, a Belgian pattern that differs from France.
- **Vocabulary:** "GSM" (mobile phone), "nonante", "septante", "drache" (heavy rain) are local; "savoir" is used for "pouvoir" in speech ("je ne sais pas venir"), which is not standard in writing.
- **Institutions:** keep official Belgian names and acronyms (SPF, SPW, ONSS) and bilingual place names in the official form.
- **Feminization:** the Fédération Wallonie-Bruxelles promotes feminized job titles ("la directrice", "l'échevine").
- **Formats:** day/month/year, 24-hour clock, euro; check CLDR `fr-BE` for separators.

## Common pitfalls

- Using "soixante-dix" and "quatre-vingt-dix" where Belgian audiences expect "septante" and "nonante".
- Translating Dutch place or institution names inconsistently.
- The general pitfalls in [[locale-fr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides, French (https://aka.ms/french-france-styleguide and https://aka.ms/french-canada-styleguide)
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
