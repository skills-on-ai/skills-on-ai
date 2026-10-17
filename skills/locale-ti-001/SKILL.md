---
name: locale-ti-001
description: Use when working with the Tigrinya locale (`ti-001`) — its endonym ትግርኛ, Ethiopic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tigrinya (ti-001)

Reference data for the **Tigrinya** locale — endonym **ትግርኛ**, written in the Ethiopic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ti-001`
- **ISO 639-1:** `ti`
- **ISO 639-3:** `tir`
- **Script:** Ethi (Ethiopic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 9,900,000
- **L2 (additional):** 1,100,000
- **L1+L2 (total):** 11,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0..1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Tigrinya (ትግርኛ) is a Semitic language of Eritrea and northern Ethiopia (Tigray), written in the Ge'ez (Ethiopic) script. It is closely related to Amharic but has its own letters, grammar, and vocabulary. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Tigrinya is subject-object-verb. The verb carries subject agreement and often the object, and prepositions attach as prefixes. Restructure English sentences; do not translate word for word.
- Do not translate from Amharic; Tigrinya differs in vocabulary and grammar.
- Use established Tigrinya terms where they exist; avoid unnecessary transliteration of English terms.
- Re-express idioms and proverbs by meaning.

**Grammar and register.**

- Gender is marked in verbs and pronouns (`ንስኻ` you, masculine; `ንስኺ` you, feminine). A polite plural address is used for respect.
- Use the polite plural forms in UI and public text, and titles in correspondence.

**Orthography and typography.**

- Ethiopic punctuation (`።`, `፣`, `፤`, `፧`) and Western punctuation are both used; follow the project convention. Use the correct letters; several represent similar sounds.
- Calendar and clock: Eritrea and Tigray use the Ethiopian calendar and Ethiopian clock; currency nakfa (Eritrea) or birr (Ethiopia). State which calendar and clock the text uses.

## Common pitfalls

- Using Amharic spelling or letters.
- Mixing calendars.
- Using the wrong country currency.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Eritrean and Ethiopian language authorities for Tigrinya
- Unicode Standard, Ethiopic block
