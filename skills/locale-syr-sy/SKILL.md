---
name: locale-syr-sy
description: Use when working with the Syriac (Syria) locale (`syr-SY`) — its endonym ܣܘܪܝܝܐ (ܣܘܪܝܐ), Syriac script, right-to-left (RTL) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Syriac (Syria) (syr-SY)

Reference data for the **Syriac (Syria)** locale — endonym **ܣܘܪܝܝܐ (ܣܘܪܝܐ)**, written in the Syriac script, right-to-left (RTL).

## Identifiers

- **BCP 47 tag:** `syr-SY`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `syr`
- **Script:** Syrc (Syriac)
- **Region:** SY (Syria)
- **Text direction:** rtl — right-to-left (RTL)

## Speakers (approximate)

- **L1 (native):** 15,000
- **L2 (additional):** 5,000
- **L1+L2 (total):** 20,000

Set `dir="rtl"` for this locale (per [[locale]]'s text-direction guidance) rather than assuming left-to-right layout.

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Syriac (ܣܘܪܝܝܐ) is a Semitic language of the Aramaic family, written in the Syriac script from right to left. The tag `syr` covers Classical Syriac (the liturgical and literary language) and Neo-Aramaic varieties such as Suret (Assyrian) and Turoyo. Confirm the variety and the script style (Estrangela, Serto, or Madnhaya) before translating. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Classical Syriac is a literary and liturgical language; modern speakers use Neo-Aramaic. Translate into the variety and register the audience reads.
- Do not translate through Arabic. Use established Syriac terminology from church and community institutions where it exists.
- Re-express idioms by meaning.

**Grammar.**

- Syriac is built on three-consonant roots with verb patterns. Gender (masculine, feminine) and number agree; the emphatic state marks definiteness in classical writing.

**Orthography and typography.**

- The script is cursive and right to left. Western Syriac (Serto) uses small Greek-derived vowel signs; Eastern Syriac (Madnhaya) uses dot vowels. Use the style the community reads, and consistent Unicode text (U+0700 to U+074F).
- Syriac has its own punctuation marks in the Unicode Syriac block; use them rather than Latin or Arabic marks. Digits are Western or Arabic-Indic by convention.

## Common pitfalls

- Using the wrong script style for the community.
- Using Arabic punctuation or look-alike letters.
- Breaking right-to-left display.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Unicode Standard, Syriac block
- Beth Mardutho: The Syriac Institute
