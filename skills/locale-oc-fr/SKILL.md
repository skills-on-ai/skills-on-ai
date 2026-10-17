---
name: locale-oc-fr
description: Use when working with the Occitan (France) locale (`oc-FR`) — its endonym Occitan (França), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Occitan (France) (oc-FR)

Reference data for the **Occitan (France)** locale — endonym **Occitan (França)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `oc-FR`
- **ISO 639-1:** `oc`
- **ISO 639-3:** `oci`
- **Script:** Latn (Latin)
- **Region:** FR (France)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 100,000
- **L2 (additional):** 500,000
- **L1+L2 (total):** 600,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Occitan (occitan, lenga d'òc) is a Romance language of southern France with several dialects (Languedocien, Provençal, Gascon, Limousin, Auvergnat, and Vivaro-Alpine) and two main written norms: the Classical norm (grafia classica) used by the Institut d'Estudis Occitans (IEO), and the Mistralian norm used in parts of Provence. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Choose the dialect and norm before translating; vocabulary and verb forms differ between dialects.
- Avoid French calques; Occitan is close to Catalan in many structures.
- Re-express idioms by meaning.

**Grammar and register.**

- Nouns have gender; plural in -s is usually silent in speech but written in the classical norm. Verb forms vary by dialect.
- "Tu" is the informal singular, "vos" the polite and plural form; consumer text commonly uses "tu" in informal brand voice and "vos" elsewhere.

**Orthography and typography.**

- The Classical norm uses digraphs such as "nh" and "lh", the accent marks à, è, é, í, ò, ó, ú, and "-a" endings for feminine nouns (as in "lenga"). Follow the norm of the chosen dialect.
- French typography conventions apply in France-based publications; currency euro; day/month/year.

## Common pitfalls

- Writing French forms or syntax in Occitan sentences.
- Mixing the Classical and Mistralian spellings.
- Mixing dialects within a text.
- Omitting the written final consonants.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Institut d'Estudis Occitans (https://www.ieo-oc.org)
- Congrès permanent de la lenga occitana (https://locongres.org)
