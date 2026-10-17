---
name: locale-kok-in
description: Use when working with the Konkani (India) locale (`kok-IN`) — its endonym कोंकणी (भारत), Devanagari script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Konkani (India) (kok-IN)

Reference data for the **Konkani (India)** locale — endonym **कोंकणी (भारत)**, written in the Devanagari script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `kok-IN`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `kok`
- **Script:** Deva (Devanagari)
- **Region:** IN (India)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,300,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 2,800,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 0 or n = 1` (e.g. 0, 1)
- **other** — everything else (e.g. 2~17, 100, 1000, 10000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Konkani (कोंकणी) is an Indo-Aryan language of Goa and the Konkan coast, an Official Language of Goa, and a scheduled language of India. It is written in several scripts: Devanagari (the official script of Goa), Roman (used by many Goan Catholics), and Kannada and Malayalam scripts in Karnataka and Kerala. Choose the script for the audience before translating. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Translate directly into Konkani, not through Hindi, Marathi, or Portuguese; each has influenced Konkani vocabulary but the grammar and idiom are Konkani's own.
- Dialects vary (Goan Hindu, Goan Catholic, Mangalorean, Chitrapur). Use the dialect expected by the audience, and standard forms in official content.

**Grammar and register.**

- Three genders (masculine, feminine, neuter) agree with adjectives and verbs. Postpositions follow nouns.
- Konkani has polite and informal second-person forms. Use the polite form in UI and confirm it with a native reviewer for the dialect.

**Orthography and typography.**

- In Devanagari use the standard Konkani spelling, including nukta and the anusvara; in Roman script follow the conventions of the publisher (there is no single standard).
- Currency ₹; Indian grouping; dates DD/MM/YYYY.

## Common pitfalls

- Using the wrong script for the audience.
- Translating through Hindi or Marathi.
- Mixing dialects within one text.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Microsoft Localization Style Guides for Indian languages (https://learn.microsoft.com/globalization/reference/microsoft-style-guides)
- Goa Konkani Akademi
