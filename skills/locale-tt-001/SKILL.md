---
name: locale-tt-001
description: Use when working with the Tatar locale (`tt-001`) — its endonym Татар теле, Cyrillic script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Tatar (tt-001)

Reference data for the **Tatar** locale — endonym **Татар теле**, written in the Cyrillic script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `tt-001`
- **ISO 639-1:** `tt`
- **ISO 639-3:** `tat`
- **Script:** Cyrl (Cyrillic)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 5,300,000
- **L2 (additional):** 1,200,000
- **L1+L2 (total):** 6,500,000

## Regional variants

This is the base/macro locale for Tatar. Region-specific variants in this dataset:

- [[locale-tt-ru]] (Tatar (Russia))

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Tatar (татар теле) is a Turkic language of Tatarstan and the Tatar diaspora, written in Cyrillic with additional letters (ә, ө, ү, җ, ң, һ). A Latin script (Zamanälif) was adopted by Tatarstan in 1999 but blocked by Russian federal law in 2002, so Cyrillic is the official script in Russia. See [[locale-tt-ru]].

**Translate ideas, not words.**

- Do not translate through Russian. Tatar is agglutinative with subject-object-verb order, vowel harmony, and suffix chains.
- Use Tatar terminology from the Tatarstan Academy of Sciences' institute where it exists instead of untranslated Russian terms.
- Re-express idioms by meaning.

**Grammar and register.**

- Vowel harmony; six cases; no grammatical gender. "Син" is informal "you" and "сез" is polite or plural. Use "сез" in UI and public text.

**Orthography and typography.**

- Use ә, ө, ү, җ, ң, һ correctly; never replace them with Russian look-alikes.
- Quotation marks `«…»`; decimal comma; ruble; dates as in Russian.

## Common pitfalls

- Replacing Tatar letters with Russian look-alikes.
- Using Russian vocabulary where a Tatar term exists.
- Breaking vowel harmony.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ibragimov Institute of Language, Literature and Art, Tatarstan Academy of Sciences
- Microsoft Localization Style Guide, Tatar (https://aka.ms/tatar-styleguide)
