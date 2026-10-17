---
name: locale-ky-001
description: Use when working with the Kyrgyz locale (`ky-001`) — its endonym Кыргызча, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Kyrgyz (ky-001)

Reference data for the **Kyrgyz** locale — endonym **Кыргызча**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ky-001`
- **ISO 639-1:** `ky`
- **ISO 639-3:** `kir`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,600,000
- **L2 (additional):** 700,000
- **L1+L2 (total):** 6,300,000

## Regional variants

This is the base/macro locale for Kyrgyz. Region-specific variants in this dataset:

- [[locale-ky-kg]] (Kyrgyz (Kyrgyzstan))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Kyrgyz is a Turkic language written in Cyrillic with the extra letters ң, ө, ү. See [[locale-ky-kg]].

**Translate ideas, not words.**

- Kyrgyz is agglutinative with vowel harmony and subject-object-verb order. Do not translate through Russian; restructure English sentences.
- Use Kyrgyz terminology from the national language institutions when a term exists, rather than raw Russian loanwords.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony (front/back, rounded/unrounded); six cases; no gender; no plural after numerals.
- `Сиз` is the polite form for UI and public text; `сен` is informal.

**Orthography and typography.**

- Use ң, ө, ү; never replace them with Russian look-alikes.
- Currency som; decimal comma; dates as in Russian; 24-hour clock; quotation marks `«…»`.

## Common pitfalls

- Replacing Kyrgyz letters with Russian look-alikes.
- Using Russian syntax.
- Breaking vowel harmony.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- National Commission for the State Language, Kyrgyzstan
- Unicode CLDR locale data for ky (https://cldr.unicode.org)
