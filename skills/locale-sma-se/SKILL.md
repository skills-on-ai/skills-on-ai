---
name: locale-sma-se
description: Use when working with the Southern Sami (Sweden) locale (`sma-SE`) — its endonym Åarjelsaemien gïele (Sveerje), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Southern Sami (Sweden) (sma-SE)

Reference data for the **Southern Sami (Sweden)** locale — endonym **Åarjelsaemien gïele (Sveerje)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sma-SE`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `sma`
- **Script:** Latn (Latin)
- **Region:** SE (Sweden)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 300
- **L2 (additional):** 200
- **L1+L2 (total):** 500

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **other** (3 forms).

- **one** — `n = 1` (e.g. 1)
- **two** — `n = 2` (e.g. 2)
- **other** — everything else (e.g. 0, 3~17, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sma-no]] to Southern Sámi in Sweden.

- **Context:** Southern Sámi is one of the recognized national minority languages in Sweden, used in the Sámi administrative area and in education.
- **Formats:** Swedish krona (`kr`); decimal comma; quotation marks `”…”`; dates with Swedish-style order.
- **Spelling:** use the Swedish-side conventions for letters such as å where the project requires, and confirm with a native reviewer.

## Common pitfalls

- Using Norwegian-side spelling conventions for a Swedish audience without checking.
- Dropping Sámi letters.
- The general pitfalls in [[locale-sma-no]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Sámi Parliament of Sweden (Sametinget)
