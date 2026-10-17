---
name: locale-sr-001
description: Use when working with the Serbian locale (`sr-001`) — its endonym Српски, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Serbian (sr-001)

Reference data for the **Serbian** locale — endonym **Српски**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `sr-001`
- **ISO 639-1:** `sr`
- **ISO 639-3:** `srp`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 8,200,000
- **L2 (additional):** 3,800,000
- **L1+L2 (total):** 12,000,000

## Regional variants

This is the base/macro locale for Serbian. Region-specific variants in this dataset:

- [[locale-sr-ba]] (Serbian (Bosnia and Herzegovina))
- [[locale-sr-me]] (Serbian (Montenegro))
- [[locale-sr-rs]] (Serbian (Serbia))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **other** (3 forms).

- **one** — `v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **few** — `v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14` (e.g. 2~4, 22~24, 32~34, 42~44, …)
- **other** — everything else (e.g. 0, 5~19, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Serbian is a South Slavic language written in both Cyrillic and Latin script; both are official in Serbia and used in everyday life. It has ekavian (Serbia) and ijekavian (Bosnia, Montenegro, parts of Serbia) pronunciation and spelling variants. Choose the script and the variant before translating. See [[locale-sr-rs]], [[locale-sr-ba]], and [[locale-sr-me]].

**Translate ideas, not words.**

- Serbian is highly inflected, with seven cases and three genders. Restructure English sentences; do not translate word for word.
- Serbian uses the future tense with "ћу" (`ću`) plus infinitive or "da" plus present: `Нећу сачувати` or `Нећу да сачувам`; the "da" construction is common in Serbian, whereas Croatian prefers the infinitive.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Plurals: one, few, and other categories (`1 датотека`, `2 датотеке`, `5 датотека`); genitive plural after five. See [[unicode-messageformat]].
- Verbs have aspect; clitics occupy second position in the clause.
- Adjectives and nouns agree in gender, number, and case.

**Register.**

- "Ти" is informal and "Ви" is formal (capitalized in letters to one person). UI and public text use "Ви" or an impersonal style.
- UI commands use the imperative (`Сачувајте`) or the infinitive (`Сачувати`).

**Orthography and typography.**

- Cyrillic and Latin map one to one (digraphs `lj`, `nj`, `dž` correspond to `љ`, `њ`, `џ`). Provide both scripts when the audience uses both, and convert with a reliable one-to-one transliterator; do not mix scripts in one text.
- Ekavian: `лепо`, `млеко`, `река`; ijekavian: `лијепо`, `млијеко`, `ријека`. Choose one variant for the whole text.
- Quotation marks `„…“`; dates `17. октобар 2026.` (with periods after the day and year); decimal comma; space or period for thousands; currency dinar (`дин.` or `RSD`).
- Follow the Matica srpska orthography (Правопис српскога језика).

## Common pitfalls

- Mixing Cyrillic and Latin script in one text.
- Mixing ekavian and ijekavian forms.
- Using Croatian vocabulary or the infinitive-only future.
- Missing the period after ordinal dates.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Matica srpska, Правопис српскога језика
- Microsoft Localization Style Guide, Serbian (Cyrillic and Latin) (https://aka.ms/serbian-cyrillic-styleguide, https://aka.ms/serbian-latin-styleguide)
