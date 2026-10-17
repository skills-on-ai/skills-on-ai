---
name: locale-br-fr
description: Use when working with the Breton (France) locale (`br-FR`) — its endonym Brezhoneg (Frañs), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Breton (France) (br-FR)

Reference data for the **Breton (France)** locale — endonym **Brezhoneg (Frañs)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `br-FR`
- **ISO 639-1:** `br`
- **ISO 639-3:** `bre`
- **Script:** Latn (Latin)
- **Region:** FR (France)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 200,000
- **L2 (additional):** 200,000
- **L1+L2 (total):** 400,000

## Pluralization

CLDR plural categories for this locale: **one**, **two**, **few**, **many**, **other** (5 forms).

- **one** — `n % 10 = 1 and n % 100 != 11,71,91` (e.g. 1, 21, 31, 41, …)
- **two** — `n % 10 = 2 and n % 100 != 12,72,92` (e.g. 2, 22, 32, 42, …)
- **few** — `n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99` (e.g. 3, 4, 9, 23, …)
- **many** — `n != 0 and n % 1000000 = 0` (e.g. 1000000, …)
- **other** — everything else (e.g. 0, 5~8, 10~20, 100, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Breton (brezhoneg) is a Brittonic Celtic language spoken in Brittany. The modern written standard is the unified orthography (Peurunvan), with older KLT and other spellings in older books. Translate into Breton grammar rather than French.

**Translate ideas, not words.**

- Breton is under strong French influence; avoid French calques, French syntax, and French word order.
- Breton places the verb early, and a normal statement fronts an element or a particle before the verb. Check word order with a native editor.
- Re-express idioms by meaning.

**Grammar.**

- Initial consonant mutations are mandatory: soft (lenition), spirant, hard, and mixed mutations are triggered by articles, prepositions, numerals, and possessives. For example "Breizh" can become "e Breizh" or "da Vreizh". A missing mutation is the commonest machine-translation error.
- Nouns are masculine or feminine; the definite article is "an", "al", "ar" depending on the next sound.
- The traditional numeral system is partly vigesimal (60 is "tri-ugent"); numerals are followed by the singular noun.
- Verbs are conjugated for tense and person; periphrastic forms with "ober" (to do) are common.

**Register.**

- "Te" is the informal singular and "c'hwi" is the plural and polite form. Public-facing text uses "c'hwi".

**Orthography and typography.**

- The trigraph "c'h" is a letter; the apostrophe in it is not a quotation mark. Use the straight or curly apostrophe consistently.
- French typography (non-breaking space before `: ; ! ?`, guillemets) is common in France-based publications.
- Use the terminology work of the Ofis Publik ar Brezhoneg where it covers the field.

## Common pitfalls

- Omitting or misapplying initial mutations.
- French word order and calques.
- Using non-standard spellings from older orthographies in new text.
- Treating c'h as c followed by h.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Ofis Publik ar Brezhoneg (Office public de la langue bretonne)
