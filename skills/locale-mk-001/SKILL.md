---
name: locale-mk-001
description: Use when working with the Macedonian locale (`mk-001`) — its endonym Македонски, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Macedonian (mk-001)

Reference data for the **Macedonian** locale — endonym **Македонски**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mk-001`
- **ISO 639-1:** `mk`
- **ISO 639-3:** `mkd`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 1,700,000
- **L2 (additional):** 1,800,000
- **L1+L2 (total):** 3,500,000

## Regional variants

This is the base/macro locale for Macedonian. Region-specific variants in this dataset:

- [[locale-mk-mk]] (Macedonian (North Macedonia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Macedonian is a South Slavic language written in a Cyrillic alphabet with its own letters ѓ, ќ, ѕ, џ, љ, њ. Like Bulgarian, it has lost noun cases and has a definite article suffix. See [[locale-mk-mk]].

**Translate ideas, not words.**

- Do not translate through Serbian or Bulgarian; vocabulary, spelling, and grammar differ.
- Macedonian is analytic: prepositions replace cases, and word order is flexible.
- Re-express idioms by meaning.

**Grammar.**

- The definite article has three forms by distance: `-от` (neutral), `-ов` (near), `-он` (far): `книгата`, `книгава`, `книгана`.
- Verbs have rich tense and mood forms, including the evidential.
- Clitic pronouns go before the verb.

**Register.**

- "Ти" is informal; "Вие" is polite. UI and public text use "Вие" or an impersonal style.

**Orthography and typography.**

- Use the Macedonian letters ѓ, ќ, ѕ, џ, љ, њ and the accent marks on ѐ and ѝ where needed; never replace them with Serbian look-alikes.
- Quotation marks `„…“`; dates `17 октомври 2026`; decimal comma; space for thousands; currency denar (`ден.`).
- Follow the Macedonian orthography (Правопис на македонскиот јазик) and the Krste Misirkov Institute of the Macedonian Language.

## Common pitfalls

- Using Serbian or Bulgarian forms.
- Dropping the triple definite article.
- Using the wrong Cyrillic letter forms.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Институт за македонски јазик „Крсте Мисирков“
- Microsoft Localization Style Guide, Macedonian (https://aka.ms/macedonian-styleguide)
