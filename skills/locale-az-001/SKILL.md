---
name: locale-az-001
description: Use when working with the Azerbaijani locale (`az-001`) — its endonym Azərbaycan dili, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Azerbaijani (az-001)

Reference data for the **Azerbaijani** locale — endonym **Azərbaycan dili**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `az-001`
- **ISO 639-1:** `az`
- **ISO 639-3:** `aze`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 23,000,000
- **L2 (additional):** 8,000,000
- **L1+L2 (total):** 31,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Azerbaijani (Azərbaycan dili) is a Turkic language written in the Latin script in the Republic of Azerbaijan (2001 alphabet) and in an Arabic-based script in Iran (South Azerbaijani). Translate for the target script and country. This guidance covers the Republic of Azerbaijan standard.

**Translate ideas, not words.**

- Azerbaijani is agglutinative with vowel harmony and subject-object-verb order. English prepositional phrases become case suffixes; relative clauses become participial phrases before the noun.
- Do not translate through Russian or Turkish. Azerbaijani differs from Turkish in vocabulary, spelling, and grammar (`ə`, `x`, `q`, `c`, and `ç` usage).
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony; no gender; no plural after numerals; apostrophes with proper nouns.
- `Siz` is the polite or plural form for UI and public text; `sən` is informal.

**Orthography and typography.**

- Use ə, ğ, ı, ö, ü, ş, ç, x, q; never replace them with ASCII look-alikes. Case mapping for `i`/`İ` and `ı`/`I` is locale-sensitive, as in Turkish.
- Currency manat (`₼`); decimal comma; dates `17 oktyabr 2026`; 24-hour clock; quotation marks `«…»` or `“…”`.

## Common pitfalls

- Using Turkish spelling or Russian vocabulary.
- Wrong casing of dotted and dotless i.
- Using the Arabic-script form for the Republic of Azerbaijan.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Nasimi Institute of Linguistics, Azerbaijan National Academy of Sciences
- Microsoft Localization Style Guide, Azerbaijani (https://aka.ms/azerbaijani-styleguide)
