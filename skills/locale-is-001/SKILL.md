---
name: locale-is-001
description: Use when working with the Icelandic locale (`is-001`) — its endonym Íslenska, Latin script, left-to-right (LTR) direction, or spoken-population data. Reference data and translation guidance (register, grammar, idiom, typography) for this specific locale; see [[locale]] for general i18n/l10n concepts (BCP 47, plural rules, RTL) that apply across all locales.
---

# Locale: Icelandic (is-001)

Reference data for the **Icelandic** locale — endonym **Íslenska**, written in the Latin script, left-to-right (LTR).

## Identifiers

- **BCP 47 tag:** `is-001`
- **ISO 639-1:** `is`
- **ISO 639-3:** `isl`
- **Script:** Latn (Latin)
- **Region:** 001 (World)
- **Text direction:** ltr — left-to-right (LTR)

## Speakers (approximate)

- **L1 (native):** 314,000
- **L2 (additional):** 50,000
- **L1+L2 (total):** 364,000

## Regional variants

This is the base/macro locale for Icelandic. Region-specific variants in this dataset:

- [[locale-is-is]] (Icelandic (Iceland))

## Pluralization

CLDR plural categories for this locale: **one**, **other** (2 forms).

- **one** — `t = 0 and i % 10 = 1 and i % 100 != 11 or t % 10 = 1 and t % 100 != 11` (e.g. 1, 21, 31, 41, …)
- **other** — everything else (e.g. 0, 2~16, 100, 1000, …)

See [[unicode-messageformat]] for writing plural messages using these categories.

## Translating into this locale

Icelandic is a North Germanic language known for linguistic purism: new vocabulary is built from native roots rather than borrowed. The Árni Magnússon Institute for Icelandic Studies and the Icelandic Language Council guide usage. See [[locale-is-is]].

**Translate ideas, not words.**

- Do not import English or Danish loanwords where an Icelandic term exists: "tölva" (computer), "sími" (phone), "vefur" (web), "hugbúnaður" (software). The Icelandic terminology bank (Orðabanki, https://idord.arnastofnun.is) and the Málið.is portal are the reference.
- Icelandic keeps complex inflection; translate to a full sentence rather than a keyword stack.
- Re-express idioms by meaning.

**Grammar that trips translators.**

- Four cases (nominative, accusative, dative, genitive), three genders, and definite article suffixes ("maður, maðurinn"). Foreign personal names and loanwords still decline.
- Verbs conjugate for person, number, tense, and mood. Some verbs take subjects in the dative or accusative ("mér líkar", "mig vantar").
- Verb second in main clauses.
- Plural forms and adjective endings depend on gender, case, and definiteness.

**Register.**

- "Þú" is used to everyone. The polite "þér" is archaic. Use first names and plain tone.

**Orthography and typography.**

- Keep the letters þ, ð, æ, ö and all accented vowels (á, é, í, ó, ú, ý). Do not substitute "th" or "d".
- Quotation marks `„…“`; decimal comma, period for thousands; dates "17. október 2026"; 24-hour clock ("kl. 17:30"); currency "12,50 kr.".
- Months, days, and nationalities are lowercase.
- Gender-inclusive language is discussed in Iceland; neutral wording is preferred where possible.

## Common pitfalls

- Using English loanwords where an Icelandic term exists.
- Not declining names and loanwords.
- Using wrong case after prepositions.
- Dropping or replacing Icelandic letters.

## Learn more

- [[locale]] for BCP 47 identifiers, locale-sensitive formatting, pluralization, and text-direction concepts that apply across all locales.
- [[unicode-messageformat]] for writing plural/selection messages correctly for this locale's grammar.
- Árni Magnússon Institute for Icelandic Studies (https://arnastofnun.is)
- Málið.is (https://malid.is)
