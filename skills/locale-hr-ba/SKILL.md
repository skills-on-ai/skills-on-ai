---
name: locale-hr-ba
description: Use when working with the Croatian (Bosnia and Herzegovina) locale (`hr-BA`) — its endonym Hrvatski (Bosna i Hercegovina), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Croatian (Bosnia and Herzegovina) (hr-BA)

Reference data for the **Croatian (Bosnia and Herzegovina)** locale — endonym **Hrvatski (Bosna i Hercegovina)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hr-BA`
- **ISO 639-1:** `hr`
- **ISO 639-3:** `hrv`
- **Script:** Latn (Latin)
- **Region:** BA (Bosnia and Herzegovina)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 400,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 500,000

## Base locale

This is a regional variant of [[locale-hr-001]] (Croatian), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-hr-001]] with the conventions of Bosnia and Herzegovina (Croatian).

- **Context:** Croatian is one of the official languages of Bosnia and Herzegovina, with the Latin script. Use Croatian forms and vocabulary rather than Bosnian or Serbian ones.
- **Formats:** convertible mark (`KM`, `BAM`); dates `17.10.2026.`; decimal comma.
- **Terminology:** institution names in Bosnia and Herzegovina have official forms in each language; use the Croatian form.

## Common pitfalls

- Using the euro or kuna for local prices.
- Mixing Bosnian vocabulary (`hiljada`, `historija`) into Croatian text.
- The general pitfalls in [[locale-hr-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode CLDR locale data for number, date, and currency formats (https://cldr.unicode.org)
