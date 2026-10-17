---
name: locale-ig-001
description: Use when working with the Igbo locale (`ig-001`) — its endonym Igbo, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Igbo (ig-001)

Reference data for the **Igbo** locale — endonym **Igbo**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ig-001`
- **ISO 639-1:** `ig`
- **ISO 639-3:** `ibo`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 31,000,000
- **L2 (additional):** 6,000,000
- **L1+L2 (total):** 37,000,000

## Regional variants

This is the base/macro locale for Igbo. Region-specific variants in this dataset:

- [[locale-ig-ng]] (Igbo (Nigeria))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Igbo is a Benue-Congo language of southeastern Nigeria, written in the Latin script with dotted letters (ị, ọ, ụ) and tone marks used for disambiguation. The standard (Igbo Izugbe) is a composite of several dialects, with orthography based on the Onwu orthography. See [[locale-ig-ng]].

**Translate ideas, not words.**

- Igbo is a tonal language with subject-verb-object order, vowel harmony, and no grammatical gender. Verbs take suffixes for tense and aspect and are extended with auxiliary verbs; restructure English sentences.
- Use established Igbo terms where they exist (from the Society for Promoting Igbo Language and Culture and Igbo dictionaries); adopt loanwords in Igbo spelling.
- Re-express idioms and proverbs (ilu) by meaning; proverbs carry cultural weight and should not be literally translated from English.

**Register.**

- Igbo uses titles and respectful forms for elders and chiefs (Nna, Nne, Ichie). Public text is polite and relationship-focused.
- UI commands use the imperative or an impersonal form.

**Orthography and typography.**

- Use the dotted letters `ị ọ ụ` and `ṅ`; omitting the dots can change meaning. Tone marks (acute and grave accents) are used where needed to disambiguate.
- Currency naira (`₦`); decimal point; dates in English or Igbo month names.

## Common pitfalls

- Omitting the underdots.
- Mixing dialect forms in a written standard.
- Translating proverbs literally.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Society for Promoting Igbo Language and Culture (SPILC)
- Igbo Language orthography (Onwu orthography, 1961)
