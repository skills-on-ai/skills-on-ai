---
name: locale-moh-ca
description: Use when working with the Mohawk (Canada) locale (`moh-CA`) — its endonym Kanien'kéha (Kanata), Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Mohawk (Canada) (moh-CA)

Reference data for the **Mohawk (Canada)** locale — endonym **Kanien'kéha (Kanata)**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `moh-CA`
- **ISO 639-1:** not assigned
- **ISO 639-3:** `moh`
- **Script:** Latn (Latin)
- **Region:** CA (Canada)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 3,000
- **L2 (additional):** 7,000
- **L1+L2 (total):** 10,000

## Pluralization

CLDR has no explicit plural rule defined for this language; it falls back to the root rule of a single **other** category (1 form) — every count uses the same word form, as in Japanese or Chinese.

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Mohawk (Kanien’kéha) is an Iroquoian language of the Kanien’kehá:ka (Mohawk) people in Canada and the United States. It is polysynthetic, with long verbs that express a whole clause. Spelling differs somewhat by community; confirm the community standard before translating. This guidance is lower-confidence; have a fluent reviewer from the community check it.

**Translate ideas, not words.**

- Translate meaning into Mohawk grammar. Do not translate English word for word: English nouns, adjectives, and prepositions are often expressed as parts of a verb.
- Use community terminology for new concepts rather than coining or borrowing English forms where the community has agreed terms.
- Respect cultural protocols for greetings (`Sken:nen`, `Shé:kon`) and traditional teachings; consult community language programs for ceremonial and cultural content.

**Grammar.**

- Verbs carry prefixes and suffixes for the subject, object, tense, aspect, and incorporated nouns.
- Pronominal prefixes distinguish more categories than English, including inclusive and exclusive "we" and a distinction between masculine, feminine-indefinite, and neuter-type subjects.

**Orthography and typography.**

- The glottal stop is written with an apostrophe and long vowels or stress with a colon or accents (`Kanien’kéha`, `Kahnawà:ke`). Use the modifier letter apostrophe (U+02BC) or the community convention consistently, and keep the colon and accents.
- Follow the publisher's or community's conventions for dates, numbers, and quotation marks.

## Common pitfalls

- Dropping the glottal stop, colon, or accents.
- Translating word for word from English.
- Using a spelling that does not match the community.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Community language programs in Kahnawà:ke, Akwesasne, and Tyendinaga
- Mohawk language teaching materials from Kanien’kehá:ka communities
