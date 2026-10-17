---
name: locale-nl-001
description: Use when working with the Dutch locale (`nl-001`) — its endonym Nederlands, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Dutch (nl-001)

Reference data for the **Dutch** locale — endonym **Nederlands**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `nl-001`
- **ISO 639-1:** `nl`
- **ISO 639-3:** `nld`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 25,000,000
- **L2 (additional):** 5,000,000
- **L1+L2 (total):** 30,000,000

## Regional variants

This is the base/macro locale for Dutch. Region-specific variants in this dataset:

- [[locale-nl-be]] (Dutch (Belgium))
- [[locale-nl-nl]] (Dutch (Netherlands))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `i = 1 and v = 0` (e.g. 1)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Dutch has one written standard maintained by the Nederlandse Taalunie (Dutch Language Union) for the Netherlands and Flanders; usage differs between the two. See [[locale-nl-nl]] and [[locale-nl-be]].

**Translate ideas, not words.**

- Dutch uses compound nouns written as one word and verb-final subordinate clauses. Restructure rather than translating word by word; "user account settings" is "instellingen voor het gebruikersaccount" or "accountinstellingen".
- Dutch prefers a plain, direct style. English passive and nominalizations become active verbs.
- Re-express idioms by meaning: "it's a piece of cake" is "het is een fluitje van een cent".

**Grammar that trips translators.**

- Two genders in agreement (de and het); diminutives in -je are neuter ("het huisje").
- Verb position: second in main clauses, last in subordinate clauses; separable verbs split ("Ik bel je op").
- Compound words are written together ("koffiezetapparaat"); splitting them ("koffie zet apparaat") is a common error.
- Adjective -e ending: added to adjectives before de-words and plurals and before het-words with a definite article ("een groot huis", "het grote huis").
- Perfect tense uses "hebben" or "zijn" plus the past participle.

**Register.**

- "Je/jij" (informal) and "u" (formal) are the options. Dutch brands, apps, and many public bodies in the Netherlands now use "je"; "u" remains common in banking, healthcare, legal, and conservative contexts, and is more widespread in Flanders. Pick one per product.
- Dutch communication is direct and informal; excessive politeness sounds stiff.

**Orthography and typography.**

- Spelling follows the Woordenlijst Nederlandse Taal (Het Groene Boekje) of the Taalunie.
- Months, days, and languages are lowercase; sentence case for titles. Quotation marks: `“…”` or `‘…’` are common in Dutch typography.
- Numbers: decimal comma, period or space for thousands; dates "17 oktober 2026"; 24-hour clock; euro formats vary (check CLDR).

## Common pitfalls

- Splitting compounds ("gebruikers account").
- False friends: "eventueel" is "possibly", "actueel" is "current", "gemeen" is "mean", "brutaal" is "cheeky", "slim" is "smart", "handig" is "handy".
- Mixing je and u.
- Word-order mistakes in subordinate clauses.
- Overusing English loanwords where a Dutch term exists.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Taalunie, Woordenlijst Nederlandse Taal (https://woordenlijst.org)
- Microsoft Localization Style Guide, Dutch (https://aka.ms/dutch-styleguide)
