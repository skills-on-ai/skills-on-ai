---
name: locale-af-001
description: Use when working with the Afrikaans locale (`af-001`) — its endonym Afrikaans, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Afrikaans (af-001)

Reference data for the **Afrikaans** locale — endonym **Afrikaans**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `af-001`
- **ISO 639-1:** `af`
- **ISO 639-3:** `afr`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 7,200,000
- **L2 (additional):** 10,300,000
- **L1+L2 (total):** 17,500,000

## Regional variants

This is the base/macro locale for Afrikaans. Region-specific variants in this dataset:

- [[locale-af-za]] (Afrikaans (South Africa))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Afrikaans is a Germanic language derived from Dutch, with a simplified grammar and its own norms. The Afrikaanse Woordelys en Spelreëls (AWS) of the Afrikaanse Taalkommissie is the spelling authority. See [[locale-af-za]].

**Translate ideas, not words.**

- English structures are often calqued: "dit maak sin" (it makes sense) should be "dit is sinvol"; "gaan" as a future auxiliary is overused. Afrikaans prefers the present tense with an adverb of time for the future.
- Re-express idioms by meaning; Afrikaans has a rich idiom of its own.

**Grammar.**

- No grammatical gender, no case, and no verb conjugation by person: "ek is", "jy is", "hy is" use the same form ("is").
- Double negation: a negative sentence ends with a second "nie" ("Ek het nie geld nie").
- Word order: verb second in main clauses; verb final in subordinate clauses; the "het" perfect is used for the past.
- Diminutives in -tjie/-ie/-jie are frequent and affectionate.

**Register.**

- "Jy" is the informal singular and "u" is the formal address. "U" is used with elders, officials, and in formal writing; business and customer text commonly uses "u" or an impersonal style.

**Orthography and typography.**

- The indefinite article is written "ʼn" with a raised apostrophe; at the start of a sentence the next word is capitalized ("ʼN Boek").
- Quotation marks `„…”` or `“…”`; decimal comma; space for thousands; dates "17 Oktober 2026" with capitalized months; currency "R12,50".
- Follow the AWS for hyphenation and compound spelling.

## Common pitfalls

- Dropping the second "nie".
- Using English word order and the "gaan" future.
- Writing "n" instead of "ʼn" (a common typing shortcut).
- Using Dutch spellings.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Die Afrikaanse Taalkommissie, Afrikaanse Woordelys en Spelreëls (AWS)
- Microsoft Localization Style Guide, Afrikaans (https://aka.ms/afrikaans-styleguide)
