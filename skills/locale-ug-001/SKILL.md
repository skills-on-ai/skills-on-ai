---
name: locale-ug-001
description: Use when working with the Uyghur locale (`ug-001`) — its endonym ئۇيغۇرچە, Arabic script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Uyghur (ug-001)

Reference data for the **Uyghur** locale — endonym **ئۇيغۇرچە**, written in the Arabic script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `ug-001`
- **ISO 639-1:** `ug`
- **ISO 639-3:** `uig`
- **Script:** Arab (Arabic)
- **Region:** 001 (World)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 11,000,000
- **L2 (additional):** 1,500,000
- **L1+L2 (total):** 12,500,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Regional variants

This is the base/macro locale for Uyghur. Region-specific variants in this dataset:

- [[locale-ug-cn]] (Uyghur (China))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Uyghur is a Turkic language written mainly in an Arabic-based alphabet (the Uyghur Arabic alphabet), from right to left, in Xinjiang (China). A Latin script and a Cyrillic script also exist. Confirm the script before translating. See [[locale-ug-cn]].

**Translate ideas, not words.**

- Uyghur is agglutinative with vowel harmony and subject-object-verb order. Do not translate through Chinese; restructure English sentences.
- Use Uyghur terminology from the language institutions where it exists, not raw Chinese loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony; six cases; no gender; no plural after numerals.
- `سىز` is the polite form for UI and public text; `سەن` is informal.

**Orthography and typography.**

- Uyghur writes all vowels as letters (unlike Arabic or Persian): ئا ئە ئې ئى ئو ئۇ ئۆ ئۈ. Initial vowels carry the hamza carrier `ئ`. Use the exact Unicode letters; never replace them with Arabic or Persian look-alikes.
- Right-to-left; use the Arabic comma `،`, semicolon `؛`, and question mark `؟`; digits Western or Arabic-Indic per convention.
- Quotation marks `«…»`; currency yuan.

## Common pitfalls

- Using Persian or Arabic look-alike letters.
- Breaking right-to-left display.
- Using the wrong script variant.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Xinjiang University and the Uyghur language standards
- Unicode Standard, Arabic block (Uyghur letters)
