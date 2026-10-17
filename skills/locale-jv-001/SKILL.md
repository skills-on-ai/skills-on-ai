---
name: locale-jv-001
description: Use when working with the Javanese locale (`jv-001`) — its endonym Basa Jawa, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Javanese (jv-001)

Reference data for the **Javanese** locale — endonym **Basa Jawa**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `jv-001`
- **ISO 639-1:** `jv`
- **ISO 639-3:** `jav`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 82,000,000
- **L2 (additional):** 16,000,000
- **L1+L2 (total):** 98,000,000

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Javanese (basa Jawa) is an Austronesian language of central and eastern Java, written mostly in the Latin script today and also in the Javanese script (Hanacaraka). It has an elaborate system of speech levels. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Do not translate from Indonesian word by word; Javanese has its own vocabulary, particles, and speech patterns.
- Re-express idioms by meaning; Javanese idioms (paribasan, bebasan) are rich and should not be literally translated from English.

**Grammar and register.**

- Speech levels: ngoko (informal and plain), madya (intermediate), and krama (polite and formal), with krama inggil and krama andhap for honorific and humble words. Written text for the public uses krama or a polite mix of ngoko with krama words. Choose the level for the audience and be consistent.
- Word order is subject-verb-object; the language has affixes and reduplication.

**Orthography and typography.**

- Latin spelling follows the conventions agreed for Javanese (for example the Pedoman Ejaan Bahasa Jawa); the Javanese script has its own Unicode block (U+A980 to U+A9DF) and is used in education and cultural content.
- Currency rupiah; dates "17 Oktober 2026"; decimal comma.

## Common pitfalls

- Using ngoko in formal or customer-facing text.
- Translating from Indonesian calques.
- Mixing speech levels randomly.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Balai Bahasa Provinsi Jawa Tengah and other Badan Bahasa regional offices
- Unicode Standard, Javanese block
