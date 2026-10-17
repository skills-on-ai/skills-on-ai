---
name: locale-da-dk
description: Use when working with the Danish (Denmark) locale (`da-DK`) — its endonym Dansk (Danmark), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Danish (Denmark) (da-DK)

Reference data for the **Danish (Denmark)** locale — endonym **Dansk (Danmark)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `da-DK`
- **ISO 639-1:** `da`
- **ISO 639-3:** `dan`
- **Script:** Latn (Latin)
- **Region:** DK (Denmark)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,600,000
- **L2 (additional):** 300,000
- **L1+L2 (total):** 5,900,000

## Base locale

This is a regional variant of [[locale-da-001]] (Danish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1 or t != 0 and i = 0,1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-da-001]] with the conventions of Denmark.

- **Formats:** Danish krone (DKK), written "12,50 kr."; day.month.year; 24-hour clock; decimal comma.
- **Institutions:** use official Danish names for authorities (Skattestyrelsen, Politi, borger.dk); EU terms follow the Danish EU texts.
- **Tone:** informal and egalitarian; titles are rarely used, and first names are normal in business.
- **Faroese and Greenlandic contexts:** Danish is also used in the Faroe Islands and Greenland, but with local practice; see [[locale-fo-fo]] and [[locale-kl-gl]].

## Common pitfalls

- Writing in a formal "De" register.
- Using Swedish or Norwegian forms.
- The general pitfalls in [[locale-da-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Dansk Sprognævn, Retskrivningsordbogen (https://sproget.dk)
