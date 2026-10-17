---
name: locale-sv-fi
description: Use when working with the Swedish (Finland) locale (`sv-FI`) — its endonym Svenska (Finland), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Swedish (Finland) (sv-FI)

Reference data for the **Swedish (Finland)** locale — endonym **Svenska (Finland)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sv-FI`
- **ISO 639-1:** `sv`
- **ISO 639-3:** `swe`
- **Script:** Latn (Latin)
- **Region:** FI (Finland)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 290,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 490,000

## Base locale

This is a regional variant of [[locale-sv-001]] (Swedish), the base/macro locale for this language.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Apply [[locale-sv-001]] with the conventions of Finland. Finland-Swedish (finlandssvenska) is one of the two national languages of Finland, spoken by a minority. Its norms are guided by the Institute for the Languages of Finland (Kotus) and the Swedish-language Svenska språkbyrån.

- **Vocabulary:** Finland-Swedish has many distinct words and calques from Finnish administration. Use the Finland-Swedish term in Finnish contexts (for example the official terms of Finnish authorities) rather than the Sweden-Swedish one. When unsure, check the Svenska språkbyrån and the official Swedish version of the Finnish legislation.
- **Formats:** euro, "12,50 €"; dates "17.10.2026" or "17 oktober 2026"; 24-hour clock written "kl. 17.30" (period); decimal comma; space for thousands.
- **Institutions:** official names are bilingual (Finnish and Swedish); keep both when the project shows both.
- **Tone:** informal "du"; politeness is plain and reserved.

## Common pitfalls

- Using Sweden-Swedish terms for Finnish institutions.
- Translating Finnish place names inconsistently; use the official Swedish names (for example Helsingfors, Åbo, Vasa).
- The general pitfalls in [[locale-sv-001]] also apply.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Svenska språkbyrån (https://www.sprakbyran.fi) and Kotus
- Språkrådet (https://www.sprakradet.se)
