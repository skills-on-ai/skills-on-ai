---
name: locale-mr-001
description: Use when working with the Marathi locale (`mr-001`) — its endonym मराठी, Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Marathi (mr-001)

Reference data for the **Marathi** locale — endonym **मराठी**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mr-001`
- **ISO 639-1:** `mr`
- **ISO 639-3:** `mar`
- **Script:** Deva (Devanagari)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 83,100,000
- **L2 (additional):** 16,000,000
- **L1+L2 (total):** 99,100,000

## Regional variants

This is the base/macro locale for Marathi. Region-specific variants in this dataset:

- [[locale-mr-in]] (Marathi (India))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Marathi (मराठी) is an Indo-Aryan language of Maharashtra, written in Devanagari. See [[locale-mr-in]] and compare [[locale-hi-001]].

**Translate ideas, not words.**

- Marathi is subject-object-verb with postpositions. Reorder English sentences.
- Do not translate from Hindi; they share script and many words, but spelling, grammar, and vocabulary differ.
- Marathi has three genders (masculine, feminine, neuter), and verbs and adjectives agree.
- Accept established English loans in Devanagari (फाईल, पासवर्ड, ॲप) but prefer Marathi terms from the Maharashtra government's glossaries when they are in use.

**Grammar that trips translators.**

- Ergative construction in past transitive verbs: the subject takes "ने" and the verb agrees with the object.
- Distinguish inclusive "आपण" (we including the listener) from exclusive "आम्ही" (we excluding the listener).
- Oblique forms and postpositions change the noun ("घरात", "घराला", "घराचा").

**Register.**

- "तुम्ही" is the polite "you" and is the standard for UI and public text; "तू" is informal. "आपण" is also used as a formal "you" in some contexts.
- UI commands use the polite imperative ("जतन करा") or infinitive.

**Orthography and typography.**

- Follow the Maharashtra government's standard Marathi spelling rules (लेखननियम); the letter ळ and the eyelash ra (ऱ्) are specific to Marathi.
- Punctuation: Marathi uses the period (.) and the danda is rare; digits: Devanagari (०-९) in print, Arabic in UI; Indian grouping; ₹.

## Common pitfalls

- Using Hindi spelling or grammar.
- Confusing inclusive and exclusive "we".
- Missing the ergative agreement.
- Using "तू" in formal text.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Maharashtra Rajya Marathi Vikas Sanstha and Marathi Vishwakosh
