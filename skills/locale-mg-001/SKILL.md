---
name: locale-mg-001
description: Use when working with the Malagasy locale (`mg-001`) — its endonym Malagasy, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Malagasy (mg-001)

Reference data for the **Malagasy** locale — endonym **Malagasy**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `mg-001`
- **ISO 639-1:** `mg`
- **ISO 639-3:** `mlg`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 25,000,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 27,000,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 0..1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Malagasy is an Austronesian language spoken in Madagascar and is an official language there with French. It is written in the Latin script with a standard based on the Merina dialect, maintained by the Akademia Malagasy. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Malagasy uses verb-object-subject order (VOS): the verb comes first, then the object, then the subject. Rework English sentences accordingly.
- The verb carries a voice system (active, passive, circumstantial) with prefixes that mark tense (m- for present, n- for past, h- or ho for future). Choose the voice that matches the topic of the sentence.
- French influence is strong in administration and technology; prefer established Malagasy coinages where they exist.
- Re-express idioms and proverbs (ohabolana) by meaning; Malagasy culture values proverbs and indirect speech.

**Register.**

- Malagasy has respectful forms: "ianao" and "hianao" (you) differ in politeness, and "tompoko" is a polite address (sir/madam). Titles and kinship terms are used for elders. Customer-facing text is polite and indirect.

**Orthography and typography.**

- The alphabet has 21 letters, and the letter "o" is pronounced like "u". Follow the Akademia Malagasy for spelling.
- Currency: ariary (Ar), written after the amount. Dates "17 Oktobra 2026"; decimal comma in many formats; check CLDR `mg`.

## Common pitfalls

- Using French word order or French loanwords where Malagasy terms exist.
- Using English subject-verb-object order.
- Using the wrong voice or tense prefix.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Akademia Malagasy
- Unicode CLDR locale data for mg (https://cldr.unicode.org)
