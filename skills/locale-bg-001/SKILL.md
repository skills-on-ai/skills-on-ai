---
name: locale-bg-001
description: Use when working with the Bulgarian locale (`bg-001`) — its endonym Български, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Bulgarian (bg-001)

Reference data for the **Bulgarian** locale — endonym **Български**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `bg-001`
- **ISO 639-1:** `bg`
- **ISO 639-3:** `bul`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 6,800,000
- **L2 (additional):** 1,200,000
- **L1+L2 (total):** 7,900,000

## Regional variants

This is the base/macro locale for Bulgarian. Region-specific variants in this dataset:

- [[locale-bg-bg]] (Bulgarian (Bulgaria))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Bulgarian is a South Slavic language written in Cyrillic. Unlike most Slavic languages, it has lost noun cases and has a definite article suffix. The Institute for the Bulgarian Language (Институт за български език) maintains the standard. See [[locale-bg-bg]].

**Translate ideas, not words.**

- Bulgarian is analytic: prepositions replace cases, and word order is fairly flexible. Reorder English sentences naturally.
- Avoid calques of English noun stacks; use prepositional phrases: "настройки на потребителския акаунт".
- Re-express idioms by meaning.

**Grammar that trips translators.**

- The definite article is a suffix, and it varies by gender and number: "файлът" or "файла", "страницата", "писмото", "файловете". The full masculine form (-ът/-ят) is used for the subject.
- Three genders and plural endings; the counted form after numerals (`5 файла`, count form) differs from the plural (`файлове`). See [[unicode-messageformat]].
- Verbs have rich tense and mood forms, including the evidential (преизказно) mood for reported information.
- Clitic pronouns go before the verb (`Показвам ти`).

**Register.**

- "Ти" is informal; "Вие" (capitalized in letters to one person) is polite. UI and public text commonly use "Вие" or an impersonal style; modern consumer apps increasingly use "ти". Do not mix.
- UI commands use the imperative (`Запазете`) or the infinitive.

**Orthography and typography.**

- Quotation marks `„…“`; dates `17 октомври 2026 г.`; decimal comma; space for thousands; 24-hour clock.
- Currency: Bulgaria has adopted the euro (from 1 January 2026), so older material may show the lev (`лв.`); confirm the currency for the product.
- The short form of numbers and abbreviations follows the official orthography.

## Common pitfalls

- Dropping or mis-forming the definite article suffix.
- Using the plural instead of the counted form after numerals.
- Mixing Вие and ти.
- Copying Russian forms.
- Using the wrong currency for the date.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Институт за български език, Правописен речник на българския език
- Microsoft Localization Style Guide, Bulgarian (https://aka.ms/bulgarian-styleguide)
