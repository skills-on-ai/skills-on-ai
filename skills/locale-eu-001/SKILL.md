---
name: locale-eu-001
description: Use when working with the Basque locale (`eu-001`) — its endonym Euskara, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Basque (eu-001)

Reference data for the **Basque** locale — endonym **Euskara**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `eu-001`
- **ISO 639-1:** `eu`
- **ISO 639-3:** `eus`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 750,000
- **L2 (additional):** 250,000
- **L1+L2 (total):** 1,000,000

## Regional variants

This is the base/macro locale for Basque. Region-specific variants in this dataset:

- [[locale-eu-es]] (Basque (Spain))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `n = 1` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Basque (euskara) is a language isolate with a unified standard, Euskara Batua, set by Euskaltzaindia (the Royal Academy of the Basque Language). Translate the idea into Basque grammar rather than copying Spanish or English structure.

**Translate ideas, not words.**

- Basque is verb-final (SOV) and agglutinative; case endings are attached to the last word of a noun phrase ("etxe handi batean", "in a big house"). Reorder English sentences and move the verb to the end.
- Basque is ergative: the subject of a transitive verb takes the ergative "-k" ("Zuk fitxategia ezabatu duzu"). Check which noun takes which case.
- The auxiliary verb agrees with the subject, the direct object, and the indirect object; the conjugation encodes all three. Machine translation often gets the auxiliary wrong.
- Basque uses postpositions and case suffixes instead of prepositions, so "to Bilbao" is "Bilbora", "from Bilbao" is "Bilbotik".
- Re-express idioms by meaning; calques from Spanish deserve checking by a native editor.

**Grammar.**

- After a numeral the noun stays singular: "bi liburu" (two books), not a plural.
- The definite article is a suffix ("-a"): "liburua"; the plural definite is "-ak" ("liburuak").
- There is no grammatical gender for nouns, but informal verb forms (hika) distinguish masculine and feminine addressees.
- Focus position: the focused element sits immediately before the verb.

**Register.**

- "Zu" is the standard second-person form used in UI and writing; "hi" (hika) is the informal intimate form (rarely written in UI); "berori" is a very formal form that is almost never used in products.
- Use the verbal noun ("-tzea"/"-tea") or the imperative for UI commands, following the project convention.

**Orthography and typography.**

- Digraphs "tx", "ts", and "tz" stand for single sounds and are not split. The letter "ñ" appears; "c", "q", "v", and "w" occur only in loanwords and names.
- Quotation marks: guillemets or standard double quotes are used; follow the project's convention.
- Numbers: decimal comma and period for thousands in most publications; dates "2026ko urriaren 17a" with the genitive suffix and the definite article.
- Use official Basque terminology from Euskaltzaindia and the Basque Government's term bank (Euskalterm).

## Common pitfalls

- Translating word by word and keeping English or Spanish word order.
- Using the wrong case or an incorrect auxiliary.
- Pluralizing nouns after numerals.
- Mixing Batua with dialect forms.
- Using "euskera" instead of "euskara" (the Batua form).

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Euskaltzaindia, Euskaltzaindiaren Hiztegia (https://www.euskaltzaindia.eus)
- Microsoft Localization Style Guide, Basque (https://aka.ms/basque-styleguide)
