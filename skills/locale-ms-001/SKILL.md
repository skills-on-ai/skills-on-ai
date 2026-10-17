---
name: locale-ms-001
description: Use when working with the Malay locale (`ms-001`) — its endonym Bahasa Melayu, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Malay (ms-001)

Reference data for the **Malay** locale — endonym **Bahasa Melayu**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `ms-001`
- **ISO 639-1:** `ms`
- **ISO 639-3:** `msa`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 90,000,000
- **L2 (additional):** 200,000,000
- **L1+L2 (total):** 290,000,000

## Regional variants

This is the base/macro locale for Malay. Region-specific variants in this dataset:

- [[locale-ms-bn]] (Malay (Brunei))
- [[locale-ms-my]] (Malay (Malaysia))

## Pluralization

CLDR plural categories for this locale: **other** (1 form).

- **other** — everything else (e.g. 0~15, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Malay (Bahasa Melayu) is written in the Latin script (Rumi) in Malaysia, Brunei, and Singapore, with the Jawi (Arabic-based) script used alongside in Brunei and parts of Malaysia. The Dewan Bahasa dan Pustaka (DBP) sets the Malaysian standard. Malay and Indonesian are closely related but differ in vocabulary, spelling, and style; do not mix them. See [[locale-ms-my]], [[locale-ms-bn]], and [[locale-id-001]].

**Translate ideas, not words.**

- Malay is analytic with subject-verb-object order and modifiers after the noun: "user account" is "akaun pengguna". Reverse English noun stacks.
- Meaning is carried by affixes (meN-, di-, ber-, ter-, -kan, -i, pe-...-an), not tense.
- Use the Malaysian terms rather than Indonesian ones: "muat turun" (download), "muat naik" (upload), "perisian" (software), "pengguna" (user), "kata laluan" (password), "percuma" (free), "kereta" (car), "pejabat" (office).
- Re-express idioms by meaning.

**Grammar.**

- No tense or gender; time words (sudah, sedang, akan) show time. Reduplication marks plural ("buku-buku"), but not after numerals.
- Classifiers follow numerals: "dua buah", "tiga orang".

**Register.**

- Formal "anda" (lowercase in Malaysian spelling) is the standard UI form; "awak" and "kamu" are informal. Government and legal text use formal vocabulary and passive forms. Do not mix levels.
- Titles (Tan Sri, Dato', Datuk, Puan Sri, Cik, Encik, Puan) are important in Malaysian communication; keep them.

**Orthography and typography.**

- Rumi spelling follows the DBP's Pedoman Umum Ejaan Bahasa Malaysia; Jawi is used on signs and in religious texts.
- Numbers: decimal point and comma thousands separator in Malaysia (RM12.50); dates "17 Oktober 2026"; 24-hour clock.
- Quotation marks “ ” in Malaysian publishing.

## Common pitfalls

- Using Indonesian vocabulary ("unduh", "perangkat lunak", "mobil", "gratis") in Malaysian text.
- Using Indonesian number format (decimal comma) in Malaysia.
- Dropping titles in formal correspondence.
- Over-translating English terms the DBP has not standardized.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Dewan Bahasa dan Pustaka, Pedoman Umum Ejaan Bahasa Malaysia (https://www.dbp.gov.my)
- Microsoft Localization Style Guide, Malay (Malaysia) (https://aka.ms/malay-malaysia-styleguide)
