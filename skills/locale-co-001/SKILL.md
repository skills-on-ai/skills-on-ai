---
name: locale-co-001
description: Use when working with the Corsican locale (`co-001`) — its endonym Corsu, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Corsican (co-001)

Reference data for the **Corsican** locale — endonym **Corsu**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `co-001`
- **ISO 639-1:** `co`
- **ISO 639-3:** `cos`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 150,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 250,000

## Regional variants

This is the base/macro locale for Corsican. Region-specific variants in this dataset:

- [[locale-co-fr]] (Corsican (France))

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Corsican (Corsu) is a Romance language closely related to Tuscan Italian, spoken on Corsica. It is a recognized regional language in France and has no single fully codified standard; there are northern and southern varieties. This guidance is lower-confidence than for major languages; have a native reviewer check it.

**Translate ideas, not words.**

- Translate into Corsican directly. French calques are common and weaken the text; Italian vocabulary is a closer model than French for many abstract words.
- Re-express French and English idioms by meaning.

**Grammar and register.**

- Nouns have gender; the definite articles include "u", "a", "i", "e"; the language uses "tù" for the informal singular and "voi" for the plural and the polite singular in traditional use. Confirm the form with a native editor.
- Word order is flexible but SVO is neutral.

**Orthography and typography.**

- Follow the spelling in use in Corsican teaching and the Collectivité de Corse's language office materials; check the dictionary for "ghj", "chj", and "sc" digraphs, which are not French.
- French typography conventions (non-breaking space before `: ; ! ?`, guillemets) are applied in France-based publications.
- Currency euro; day/month/year.

## Common pitfalls

- Writing French or Italian forms where a Corsican word exists.
- Mixing northern and southern spelling features without reason.
- Applying French syntax to Corsican sentences.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Collectivité de Corse, language policy and teaching resources for Corsican
