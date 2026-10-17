---
name: locale-eo-001
description: Use when working with the Esperanto locale (`eo-001`) — its endonym Esperanto, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Esperanto (eo-001)

Reference data for the **Esperanto** locale — endonym **Esperanto**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `eo-001`
- **ISO 639-1:** `eo`
- **ISO 639-3:** `epo`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 2,000
- **L2 (additional):** 2,000,000
- **L1+L2 (total):** 2,002,000

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Esperanto is a planned language with a fixed grammar of sixteen rules (the Fundamento de Esperanto, 1905) and a worldwide community of speakers, most of whom learned it as a second language. Translate into clear, regular Esperanto rather than copying idiom from the source.

**Translate ideas, not words.**

- Esperanto has no national idioms; avoid translating English or other idioms literally, because readers come from many languages. Prefer clear, literal statements, or explain the idiom.
- Use the language's word-building system: prefixes and suffixes (mal-, re-, -ej-, -ist-, -ig-) and compounding, rather than borrowing foreign words unnecessarily.
- Watch for calques of English phrasal verbs and word order. Esperanto word order is free, but subject-verb-object is the neutral order and the accusative marks the object.

**Grammar.**

- Parts of speech are marked by endings: -o noun, -a adjective, -e adverb, -i infinitive, -as present, -is past, -os future, -us conditional, -u imperative or subjunctive.
- Plural is -j; the accusative is -n; adjectives agree with their nouns in number and case.
- Use the accusative for direction after a preposition ("Mi iras en la domon" is movement into the house), and a preposition "je" only when no other preposition fits.
- Correlatives form a table (kio, tio, io, nenio; kiu, tiu; kie, tie).

**Register.**

- There is one second-person pronoun, "vi", used for both singular and plural, formal and informal. "Ci" exists in the Fundamento but is rare. Politeness is carried by phrases like "bonvolu" and "mi petas".
- Writing is usually plain and international; avoid dialect and slang.

**Orthography and typography.**

- The alphabet has 28 letters, including six with diacritics: ĉ, ĝ, ĥ, ĵ, ŝ, ŭ. Use proper Unicode; the "x-system" (cx, gx) is a fallback only when characters cannot be displayed.
- Capitalization follows the usual European rules; months and days are lowercase.
- Numbers: decimal comma, space or period for thousands; dates "la 17-a de oktobro 2026".
- Quotation marks vary (« », „ “, " "); follow the project's convention.

## Common pitfalls

- Dropping the accusative or the plural/adjective agreement.
- Using idioms or loan constructions that Esperanto speakers from other languages will not understand.
- Using the x-system when Unicode is available.
- Using "ci" for informal address in contemporary text.
- Inventing roots without checking the Plena Ilustrita Vortaro (PIV) or Akademio de Esperanto's Oficialaj Aldonoj.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Plena Ilustrita Vortaro (PIV) and Plena Manlibro de Esperanta Gramatiko (PMEG, Bertilo Wennergren)
- Akademio de Esperanto (https://www.akademio-de-esperanto.org)
