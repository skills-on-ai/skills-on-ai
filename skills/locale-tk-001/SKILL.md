---
name: locale-tk-001
description: Use when working with the Turkmen locale (`tk-001`) — its endonym Türkmençe, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Turkmen (tk-001)

Reference data for the **Turkmen** locale — endonym **Türkmençe**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tk-001`
- **ISO 639-1:** `tk`
- **ISO 639-3:** `tuk`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 6,800,000
- **L2 (additional):** 1,000,000
- **L1+L2 (total):** 7,800,000

## Regional variants

This is the base/macro locale for Turkmen. Region-specific variants in this dataset:

- [[locale-tk-tm]] (Turkmen (Turkmenistan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Turkmen is a Turkic language written in the Latin script in Turkmenistan (with the letters ä, ç, ž, ň, ö, ş, ü, ý). See [[locale-tk-tm]]. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Turkmen is agglutinative with vowel harmony and subject-object-verb order. Do not translate through Russian or Turkish.
- Use Turkmen terminology where it exists, not raw Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony; no gender; no plural after numerals.
- `Siz` is the polite form for UI and public text; `sen` is informal.

**Orthography and typography.**

- Use ä, ç, ž, ň, ö, ş, ü, ý exactly; never replace them with ASCII look-alikes.
- Currency manat; decimal comma; dates `17.10.2026`; 24-hour clock.

## Common pitfalls

- Using Turkish or Azerbaijani spelling.
- Replacing special letters with ASCII.
- Using Cyrillic for a Turkmenistan audience.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Turkmenistan Academy of Sciences, Institute of Language and Literature
- Unicode CLDR locale data for tk (https://cldr.unicode.org)
