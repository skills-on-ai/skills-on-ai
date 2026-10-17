---
name: locale-fy-001
description: Use when working with the Frisian locale (`fy-001`) — its endonym Frysk, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Frisian (fy-001)

Reference data for the **Frisian** locale — endonym **Frysk**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `fy-001`
- **ISO 639-1:** `fy`
- **ISO 639-3:** `fry`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 450,000
- **L2 (additional):** 100,000
- **L1+L2 (total):** 550,000

## Regional variants

This is the base/macro locale for Frisian. Region-specific variants in this dataset:

- [[locale-fy-nl]] (Frisian (Netherlands))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

West Frisian (Frysk) is a West Germanic language spoken in Fryslân, the Netherlands, and is the language closest to English among the Germanic languages. It is a co-official language in the province, with norms set by the Fryske Akademy and the Provinsje Fryslân. Translate into Frisian directly, not through Dutch.

**Translate ideas, not words.**

- Dutch calques are the main risk: Frisian is heavily influenced by Dutch. Use Frisian vocabulary and spelling, and check each word against the Frisian dictionary.
- Re-express idioms by meaning.

**Grammar.**

- Two genders (common and neuter), a definite article "de" and "it", and diminutive forms in -ke, -tsje, -je.
- Verb is second in main clauses; the standard word order resembles Dutch.

**Register.**

- "Do" is the informal singular, "jo" the polite form and plural. Public text uses "jo".

**Orthography and typography.**

- The official spelling is set by the Fryske Akademy; the circumflex vowels (â, ê, ô, û, ú) are part of Frisian spelling and should not be dropped.
- Formats follow the Netherlands: euro, day-month-year, decimal comma.

## Common pitfalls

- Using Dutch spellings or words in Frisian text.
- Dropping the circumflex.
- Using "jo" and "do" inconsistently.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Fryske Akademy (https://www.fryske-akademy.nl)
- Taalweb Frysk (https://taalweb.frl)
