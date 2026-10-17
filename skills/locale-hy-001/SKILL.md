---
name: locale-hy-001
description: Use when working with the Armenian locale (`hy-001`) — its endonym Հայերեն, Armenian script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Armenian (hy-001)

Reference data for the **Armenian** locale — endonym **Հայերեն**, written in the Armenian script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `hy-001`
- **ISO 639-1:** `hy`
- **ISO 639-3:** `hye`
- **Script:** Armn (Armenian)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,300,000
- **L2 (additional):** 1,400,000
- **L1+L2 (total):** 6,700,000

## Regional variants

This is the base/macro locale for Armenian. Region-specific variants in this dataset:

- [[locale-hy-am]] (Armenian (Armenia))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0,1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Armenian is an independent branch of the Indo-European family, written in the Armenian alphabet. There are two standard forms: Eastern Armenian (Armenia, Iran) and Western Armenian (the diaspora). They differ in orthography, pronunciation, and verb forms. Confirm the variant before translating. See [[locale-hy-am]].

**Translate ideas, not words.**

- Armenian is highly agglutinative-inflected with postpositions and case suffixes. Reorder English sentences; do not translate word for word.
- Do not translate through Russian (Eastern) or Turkish. Use Armenian terms approved by the Armenian language institutions where they exist.
- Re-express idioms by meaning.

**Grammar and register.**

- Seven cases (nominative, accusative, genitive, dative, ablative, instrumental, locative); no grammatical gender. Plural suffix `-ներ` (Eastern) is not used after a numeral.
- `Դուք` is the polite or plural "you" for UI and public text; `դու` is informal.

**Orthography and typography.**

- Eastern Armenian in Armenia uses the reformed (Soviet-era) orthography in some respects, and the classical orthography (Mashtotsian) is used in the diaspora and by Western Armenian publishers. Follow the project's choice.
- Armenian punctuation marks differ: `։` (verjaket) is the full stop, `՞` (question mark) sits over the stressed vowel, `՜` (exclamation) and `՛` (emphasis). Digital text often uses Latin `?` `!`; follow the project's convention.
- Currency dram (`֏`); decimal comma; dates `17 հոկտեմբերի 2026`; 24-hour clock; quotation marks `«…»`.

## Common pitfalls

- Mixing Eastern and Western forms.
- Mixing classical and reformed orthography.
- Using Russian or Turkish syntax.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institute of Language after H. Acharyan, Armenian National Academy of Sciences
- Microsoft Localization Style Guide, Armenian (https://aka.ms/armenian-styleguide)
