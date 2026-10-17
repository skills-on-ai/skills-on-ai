---
name: locale-arn-cl
description: Use when working with the Mapudungun (Chile) locale (`arn-CL`) — its endonym Mapudungun (Chile), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Mapudungun (Chile) (arn-CL)

Reference data for the **Mapudungun (Chile)** locale — endonym **Mapudungun (Chile)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `arn-CL`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `arn`
- **Script:** Latn (Latin)
- **Region:** CL (Chile)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 200,000
- **L2 (additional):** 50,000
- **L1+L2 (total):** 250,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Mapudungun (Mapuzugun) is the language of the Mapuche people of Chile and Argentina. There are several competing writing systems (Alfabeto Unificado, Alfabeto Raguileo, and Azümchefe), so confirm which one the community or project uses before translating. This guidance is lower-confidence; have a native reviewer check it.

**Translate ideas, not words.**

- Translate from the meaning into Mapuzugun, not word for word through Spanish. Mapuzugun is agglutinative and expresses relations through suffixes on the verb.
- Use terms developed by Mapuche language specialists and communities (for example through Conadi and local universities) rather than raw Spanish loanwords where a Mapuzugun term exists.
- Re-express idioms and cultural concepts (che, mapu, newen) by meaning; avoid reducing them to single Spanish words.

**Grammar.**

- Mapuzugun has singular, dual, and plural in pronouns and verbs, and distinguishes inclusive and exclusive "we".
- Verbs carry many suffixes for tense, aspect, mood, direction, and person.

**Orthography and typography.**

- Use the writing system the audience uses (Unificado, Raguileo, or Azümchefe). They differ in letters such as `ü`, `ng`, `tr`, and `ll`; do not mix systems in one text.
- Chilean conventions apply to numbers and dates: decimal comma, `17 de octubre de 2026`, Chilean peso (`$`).

## Common pitfalls

- Mixing writing systems.
- Translating through Spanish.
- Dropping special letters.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Corporación Nacional de Desarrollo Indígena (CONADI), Chile
- Mapuche language materials of the Chilean Ministry of Education
