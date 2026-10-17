---
name: locale-dv-mv
description: Use when working with the Divehi (Maldives) locale (`dv-MV`) — its endonym ދިވެހި (ދިވެހިރާއްޖެ), Thaana script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Divehi (Maldives) (dv-MV)

Reference data for the **Divehi (Maldives)** locale — endonym **ދިވެހި (ދިވެހިރާއްޖެ)**, written in the Thaana script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `dv-MV`
- **ISO 639-1:** `dv`
- **ISO 639-3:** `div`
- **Script:** Thaa (Thaana)
- **Region:** MV (Maldives)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 340,000
- **L2 (additional):** 30,000
- **L1+L2 (total):** 370,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Dhivehi (ދިވެހި) is the national language of the Maldives, written in the Thaana script from right to left. It is an Indo-Aryan language with its own grammar and vocabulary. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Dhivehi is subject-object-verb. Reorder English sentences; do not translate word for word.
- Use Dhivehi terminology from the Dhivehi Bahuge Academy where established; many modern terms come from English, Arabic, or Hindi-Urdu and should follow the established spelling in Thaana.
- Re-express idioms by meaning.

**Register.**

- Dhivehi has several pronoun and honorific levels depending on the status of the addressee. For UI and public text, use a neutral polite form and confirm it with a native reviewer. Religious and national content should follow local norms.

**Orthography and typography.**

- Thaana is written right to left, with vowels shown as marks (fili) above or below the consonant letters. Use Unicode Thaana (U+0780 to U+07BF) and never use look-alike Arabic letters.
- Spaces separate words; punctuation uses the Arabic comma `،` and question mark `؟`. Digits: Arabic (Western) digits in UI. Currency: Maldivian rufiyaa (MVR, ރ.).

## Common pitfalls

- Breaking right-to-left display.
- Using Arabic or Urdu letters in place of Thaana.
- Using the wrong honorific level.
- Leaving English terms untranslated where a standard Dhivehi term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Dhivehi Bahuge Academy
- Unicode Standard, Thaana block
