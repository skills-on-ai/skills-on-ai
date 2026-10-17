---
name: locale-lt-001
description: Use when working with the Lithuanian locale (`lt-001`) — its endonym Lietuvių, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Lithuanian (lt-001)

Reference data for the **Lithuanian** locale — endonym **Lietuvių**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `lt-001`
- **ISO 639-1:** `lt`
- **ISO 639-3:** `lit`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 4,000,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 4,500,000

## Regional variants

This is the base/macro locale for Lithuanian. Region-specific variants in this dataset:

- [[locale-lt-lt]] (Lithuanian (Lithuania))

## Pluralization

CLDR plural categories for this locale: **one**, **few**, **many**, **other** (4 forms).

- **one** — `n % 10 = 1 and n % 100 != 11..19` (e.g. 1, 21, 31, 41, …)
- **few** — `n % 10 = 2..9 and n % 100 != 11..19` (e.g. 2~9, 22~29, 102, 1002, …)
- **many** — `f != 0`
- **other** — everything else (e.g. 0, 10~20, 30, 40, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Lithuanian is a Baltic language written in the Latin alphabet with ą, č, ę, ė, į, š, ų, ū, ž. The State Commission of the Lithuanian Language (Valstybinė lietuvių kalbos komisija, VLKK, https://www.vlkk.lt) is the authority. See [[locale-lt-lt]].

**Translate ideas, not words.**

- Lithuanian is highly inflected, with seven cases and two genders. Restructure English sentences; do not translate word for word.
- Lithuanian prefers verbs and participles. English noun stacks become genitive chains or compounds.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Plurals: one, few, many (decimals), and other categories (`1 failas`, `2 failai`, `10 failų`, `21 failas`). Numerals 10 to 19 and tens take the genitive plural. See [[unicode-messageformat]].
- Names are declined and take gender-marked endings (`Jonas`, `Jono`; women's surnames in -ienė, -aitė, -ytė); collect and show the gender-correct form.
- Adjectives and participles agree with nouns in gender, number, and case; verbs agree in person and number.

**Register.**

- `Tu` (informal) and `jūs` (polite or plural). UI, banking, and public text use `jūs`; consumer brands may use `tu`. Do not mix.
- UI commands use the imperative (`Įrašykite` with jūs, `Įrašyk` with tu) or the infinitive.

**Orthography and typography.**

- Use all Lithuanian diacritics; never replace them with ASCII.
- Quotation marks `„…“`; dates `2026 m. spalio 17 d.` (year, month in the genitive, day); decimal comma; non-breaking space for thousands; currency `12,50 €`; 24-hour clock.
- Month and day names are lowercase.

## Common pitfalls

- Dropping diacritics.
- Wrong numeral-noun agreement.
- Not declining names or showing the wrong gender suffix.
- Mixing tu and jūs.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Valstybinė lietuvių kalbos komisija (https://www.vlkk.lt)
- Microsoft Localization Style Guide, Lithuanian (https://aka.ms/lithuanian-styleguide)
